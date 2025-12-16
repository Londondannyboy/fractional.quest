"""
Apify Webhook Receiver Service
Receives job data from Apify actors and syncs to Neon database
"""
from fastapi import FastAPI, BackgroundTasks, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import logging
from typing import Dict, Any
import os

from apify_client import ApifyClient
from database import save_jobs_to_neon, get_recent_jobs
from classifiers import classify_and_sync_jobs

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Environment variables
APIFY_API_KEY = os.getenv("APIFY_API_KEY")
DATABASE_URL = os.getenv("DATABASE_URL")

if not APIFY_API_KEY:
    logger.warning("APIFY_API_KEY not set - some features will be unavailable")

# Initialize Apify client
apify_client = ApifyClient(APIFY_API_KEY) if APIFY_API_KEY else None


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Startup and shutdown events"""
    logger.info("Starting Apify Webhook Service")
    logger.info(f"Database URL configured: {bool(DATABASE_URL)}")
    logger.info(f"Apify API Key configured: {bool(APIFY_API_KEY)}")
    yield
    logger.info("Shutting down Apify Webhook Service")


app = FastAPI(
    title="Apify Job Scraper Webhook Service",
    description="Receives webhooks from Apify actors and syncs job data to Neon",
    version="1.0.0",
    lifespan=lifespan
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "service": "apify-webhook-receiver",
        "status": "running",
        "apify_configured": bool(APIFY_API_KEY),
        "database_configured": bool(DATABASE_URL)
    }


@app.get("/health")
async def health():
    """Detailed health check"""
    return {
        "status": "healthy",
        "apify_api": "connected" if APIFY_API_KEY else "not_configured",
        "database": "connected" if DATABASE_URL else "not_configured"
    }


@app.post("/webhook/apify/{actor_name}")
async def handle_apify_webhook(
    actor_name: str,
    payload: Dict[str, Any],
    background_tasks: BackgroundTasks
):
    """
    Receive webhook from Apify when an actor completes

    Apify webhook payload includes:
    - actorId: ID of the actor
    - actorRunId: ID of the specific run
    - datasetId: ID of the dataset containing results
    - eventType: Type of event (e.g., "ACTOR.RUN.SUCCEEDED")
    - eventData: Additional event data
    """
    logger.info(f"Received webhook for actor: {actor_name}")
    logger.info(f"Payload: {payload}")

    event_type = payload.get("eventType")
    dataset_id = payload.get("resource", {}).get("defaultDatasetId")
    run_id = payload.get("resource", {}).get("id")

    if event_type != "ACTOR.RUN.SUCCEEDED":
        logger.warning(f"Ignoring non-success event: {event_type}")
        return {"status": "ignored", "reason": f"Event type {event_type} not processed"}

    if not dataset_id:
        logger.error("No dataset ID in webhook payload")
        raise HTTPException(status_code=400, detail="Missing dataset ID")

    # Process in background so webhook responds quickly
    background_tasks.add_task(
        process_apify_dataset,
        actor_name,
        dataset_id,
        run_id
    )

    return {
        "status": "received",
        "actor": actor_name,
        "dataset_id": dataset_id,
        "run_id": run_id
    }


async def process_apify_dataset(actor_name: str, dataset_id: str, run_id: str):
    """
    Fetch dataset from Apify and process jobs

    Args:
        actor_name: Name of the actor (e.g., 'linkedin', 'ashby')
        dataset_id: Apify dataset ID
        run_id: Apify run ID
    """
    try:
        logger.info(f"Processing dataset {dataset_id} from {actor_name}")

        if not apify_client:
            logger.error("Apify client not configured")
            return

        # 1. Fetch dataset from Apify
        dataset = apify_client.dataset(dataset_id)
        items = list(dataset.iterate_items())

        logger.info(f"Fetched {len(items)} items from Apify dataset")

        if not items:
            logger.warning("No items in dataset")
            return

        # 2. Save to Neon database
        logger.info("Saving jobs to Neon database...")
        saved_count = await save_jobs_to_neon(items, actor_name)
        logger.info(f"Saved {saved_count} jobs to Neon")

        # 3. Classify and sync to ZEP (async)
        logger.info("Starting classification and ZEP sync...")
        await classify_and_sync_jobs(items, actor_name)
        logger.info("Classification and sync complete")

    except Exception as e:
        logger.error(f"Error processing dataset {dataset_id}: {e}", exc_info=True)


@app.get("/scraper/dashboard")
async def dashboard():
    """View all Apify actors and their schedules"""
    if not apify_client:
        raise HTTPException(status_code=503, detail="Apify client not configured")

    try:
        # Get all schedules
        schedules_list = apify_client.schedules().list().items

        schedules_info = []
        for schedule in schedules_list:
            schedules_info.append({
                "id": schedule.get("id"),
                "name": schedule.get("name"),
                "actor_id": schedule.get("actorId"),
                "cron_expression": schedule.get("cronExpression"),
                "is_enabled": schedule.get("isEnabled"),
                "next_run": schedule.get("nextRunAt"),
                "last_run": schedule.get("lastRunAt")
            })

        return {
            "active_scrapers": len([s for s in schedules_info if s["is_enabled"]]),
            "total_schedules": len(schedules_info),
            "schedules": schedules_info
        }
    except Exception as e:
        logger.error(f"Error fetching schedules: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/scraper/trigger/{actor_id}")
async def manual_trigger(actor_id: str):
    """Manually trigger an Apify actor"""
    if not apify_client:
        raise HTTPException(status_code=503, detail="Apify client not configured")

    try:
        logger.info(f"Manually triggering actor {actor_id}")

        run = apify_client.actor(actor_id).call()

        return {
            "run_id": run.get("id"),
            "status": run.get("status"),
            "started_at": run.get("startedAt"),
            "actor_id": actor_id
        }
    except Exception as e:
        logger.error(f"Error triggering actor {actor_id}: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/jobs/recent")
async def recent_jobs(limit: int = 50):
    """Get recently scraped jobs from Neon"""
    try:
        jobs = await get_recent_jobs(limit)
        return {
            "count": len(jobs),
            "jobs": jobs
        }
    except Exception as e:
        logger.error(f"Error fetching recent jobs: {e}")
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("PORT", 8000)))
