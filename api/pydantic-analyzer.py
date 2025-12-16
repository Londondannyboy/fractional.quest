"""
Pydantic AI Transcript Analyzer (Method C)
Python serverless function using actual Pydantic AI framework
"""

import os
import json
from http.server import BaseHTTPRequestHandler
from typing import Optional, Literal
from pydantic import BaseModel, Field
from pydantic_ai import Agent
from pydantic_ai.models.gemini import GeminiModel
import psycopg2
from psycopg2.extras import RealDictCursor


class JobSearchIntent(BaseModel):
    """Structured intent extraction using Pydantic"""
    action: Literal['search_jobs', 'confirm_preference', 'unknown']
    role_type: Optional[str] = Field(None, description='Executive title like CFO, CMO, CTO')
    location: Optional[str] = Field(None, description='City or country like London, UK')
    preference_type: Optional[str] = Field(None, description='Type of preference being confirmed')
    values: Optional[list[str]] = Field(None, description='Values for preference')
    confidence: float = Field(description='Confidence score 0-1')
    reasoning: str = Field(description='Why this intent was detected')


# Initialize Pydantic AI Agent with Gemini
model = GeminiModel('gemini-1.5-flash', api_key=os.environ.get('GOOGLE_API_KEY'))
agent = Agent(
    model=model,
    result_type=JobSearchIntent,
    system_prompt="""You are an intent extraction system for a fractional executive job platform.

CRITICAL RULE: If the user mentions a SPECIFIC role (CFO, CMO, CTO, etc.) and/or location (London, UK, etc.), it is ALWAYS search_jobs - they want to see jobs NOW!

Analyze conversation transcripts and determine user intent:

1. search_jobs: User wants to SEE jobs NOW (90% of cases)
   - "Show me...", "Find...", "What jobs..."
   - "I'm interested in [SPECIFIC ROLE] in [LOCATION]" ← THIS IS SEARCH_JOBS!
   - "I'm interested in CMO jobs" ← THIS IS SEARCH_JOBS!
   - "I'm looking for..."
   - ANY mention of specific roles or locations
   - Extract role_type (CFO, CMO, CTO, etc.) and location

2. confirm_preference: User stating GENERAL career preference (RARE - only 5%)
   - "I'm interested in [ROLE] for my career going forward"
   - ONLY if stating vague preference WITHOUT asking to see jobs
   - If in doubt, use search_jobs instead!

3. unknown: Neither

EXAMPLES:
"interested in cmo jobs in london" → search_jobs (specific role + location)
"I'm interested in CMO jobs" → search_jobs (specific role)
"Show me CFO jobs" → search_jobs (obvious)

DEFAULT TO search_jobs WHEN IN DOUBT!"""
)


def query_jobs(role_type: Optional[str], location: Optional[str]) -> list[dict]:
    """Query Neon database for jobs"""
    try:
        conn = psycopg2.connect(os.environ.get('DATABASE_URL'))
        cursor = conn.cursor(cursor_factory=RealDictCursor)

        role_pattern = f'%{role_type}%' if role_type else '%'
        location_pattern = f'%{location}%' if location else '%'

        cursor.execute("""
            SELECT
                id, slug, title, company_name, location, is_remote,
                salary_min, salary_max, salary_currency,
                CASE
                    WHEN is_fractional = true THEN 1
                    WHEN LOWER(title) LIKE '%fractional%' THEN 2
                    WHEN LOWER(title) LIKE '%part%%time%' OR LOWER(title) LIKE '%interim%' THEN 3
                    ELSE 4
                END as priority
            FROM jobs
            WHERE is_active = true
                AND (
                    LOWER(COALESCE(executive_title::text, '')) LIKE LOWER(%s)
                    OR LOWER(COALESCE(role_category::text, '')) LIKE LOWER(%s)
                    OR LOWER(title) LIKE LOWER(%s)
                )
                AND (
                    LOWER(COALESCE(city::text, '')) LIKE LOWER(%s)
                    OR LOWER(COALESCE(country, '')) LIKE LOWER(%s)
                    OR LOWER(COALESCE(location, '')) LIKE LOWER(%s)
                )
            ORDER BY priority ASC, posted_date DESC NULLS LAST
            LIMIT 5
        """, (role_pattern, role_pattern, role_pattern, location_pattern, location_pattern, location_pattern))

        jobs = cursor.fetchall()
        cursor.close()
        conn.close()

        return [dict(job) for job in jobs]

    except Exception as e:
        print(f'[Pydantic AI] DB error: {e}')
        return []


class handler(BaseHTTPRequestHandler):
    """Vercel serverless function handler"""

    def do_POST(self):
        try:
            # Read request body
            content_length = int(self.headers.get('Content-Length', 0))
            body_bytes = self.rfile.read(content_length)
            body = json.loads(body_bytes.decode('utf-8'))

            transcript = body.get('transcript', '')
            user_id = body.get('userId')

            print(f'[Pydantic AI] Analyzing: {transcript[:100]}')

            if not transcript or len(transcript) < 10:
                self._send_json_response(200, {
                    'status': 'no_action',
                    'method': 'pydantic_ai',
                    'intent': {
                        'action': 'unknown',
                        'confidence': 0,
                        'reasoning': 'Transcript too short'
                    }
                })
                return

            # Use Pydantic AI Agent for intent extraction
            result = agent.run_sync(f'Analyze this transcript: "{transcript}"')
            intent = result.data

            print(f'[Pydantic AI] Intent: {intent.model_dump()}')

            # If search_jobs, query database
            if intent.action == 'search_jobs':
                jobs = query_jobs(intent.role_type, intent.location)

                self._send_json_response(200, {
                    'status': 'success',
                    'method': 'pydantic_ai',
                    'intent': intent.model_dump(),
                    'data': {
                        'type': 'job_results',
                        'source': 'pydantic_ai',
                        'jobs': [{
                            'id': str(j['id']),
                            'slug': j['slug'],
                            'title': j['title'],
                            'company': j['company_name'],
                            'location': j['location'],
                            'isRemote': j['is_remote'],
                            'dayRate': j['salary_min'],
                            'currency': j.get('salary_currency', 'GBP')
                        } for j in jobs]
                    }
                })
                return

            # If confirm_preference, return confirmation request
            elif intent.action == 'confirm_preference':
                self._send_json_response(200, {
                    'status': 'success',
                    'method': 'pydantic_ai',
                    'intent': intent.model_dump(),
                    'data': {
                        'type': 'confirmation',
                        'source': 'pydantic_ai',
                        'preference_type': intent.preference_type,
                        'values': intent.values
                    }
                })
                return

            # Unknown intent
            self._send_json_response(200, {
                'status': 'no_action',
                'method': 'pydantic_ai',
                'intent': intent.model_dump()
            })

        except Exception as e:
            print(f'[Pydantic AI] Error: {e}')
            self._send_json_response(500, {
                'error': 'Pydantic AI analysis failed',
                'details': str(e)
            })

    def _send_json_response(self, status_code, data):
        """Helper to send JSON response"""
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))
