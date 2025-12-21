"""
Enhanced Pydantic AI Voice Extraction

Extracts career entities from voice transcripts with:
- Multi-entity extraction per transcript
- Cluster classification (skills, experience, career_interests, etc.)
- Confidence scoring (0.0-1.0)
- Hard validation detection ("only", "must", "relocating")
- Support for both candidate and client user types

Usage:
    POST /api/pydantic-voice-extract
    Body: { "transcript": "I'm a CFO with 15 years...", "user_type": "candidate" }

Returns:
    {
      "entities": [...],
      "user_type_detected": "candidate",
      "conversation_intent": "building_profile",
      "should_continue": true
    }
"""

from pydantic import BaseModel, Field
from pydantic_ai import Agent
from enum import Enum
from typing import Literal, Optional, Any
import re

# ============================================================================
# SCHEMAS
# ============================================================================

class ClusterType(str, Enum):
    """Target clusters for graph visualization"""
    # Candidate clusters
    SKILLS = "skills"
    EXPERIENCE = "experience"
    CAREER_INTERESTS = "career_interests"
    PREFERENCES = "preferences"

    # Client clusters
    REQUIREMENTS = "requirements"
    CANDIDATE_MATCHES = "candidate_matches"
    CULTURE_FIT = "culture_fit"

class EntityType(str, Enum):
    """Specific entity types within clusters"""
    SKILL = "skill"
    COMPANY = "company"
    ROLE = "role"
    LOCATION = "location"
    AVAILABILITY = "availability"
    DAY_RATE = "day_rate"
    REQUIREMENT = "requirement"
    PERSONALITY_TRAIT = "personality_trait"
    CULTURE_VALUE = "culture_value"
    SENIORITY = "seniority"
    INDUSTRY = "industry"

class ExtractedEntity(BaseModel):
    """Single extracted entity with metadata"""
    entity_type: EntityType
    value: str = Field(..., description="The extracted value (e.g., 'M&A', 'Stripe', 'CFO')")
    cluster: ClusterType = Field(..., description="Which graph cluster this belongs to")
    confidence: float = Field(..., ge=0.0, le=1.0, description="Confidence score 0-1")
    raw_text: str = Field(..., description="Original text from transcript")

    # Metadata varies by entity type
    metadata: dict[str, Any] = Field(
        default_factory=dict,
        description="Additional context: years, proficiency, priority, etc."
    )

    # Validation flags
    requires_hard_validation: bool = Field(
        default=False,
        description="MUST confirm with user (contains 'only', 'must', etc.)"
    )

    reasoning: Optional[str] = Field(
        default=None,
        description="Why this entity was extracted and its cluster assignment"
    )

class VoiceExtractionResponse(BaseModel):
    """Complete extraction result"""
    entities: list[ExtractedEntity] = Field(
        default_factory=list,
        description="All extracted entities from the transcript"
    )

    user_type_detected: Literal['candidate', 'client', 'unknown'] = Field(
        default='unknown',
        description="Detected user type based on conversation"
    )

    conversation_intent: str = Field(
        default="unknown",
        description="What the user is trying to do: building_profile, searching_jobs, etc."
    )

    should_continue: bool = Field(
        default=True,
        description="Whether more conversation is needed"
    )

# ============================================================================
# HARD VALIDATION KEYWORDS
# ============================================================================

HARD_VALIDATION_PATTERNS = [
    # Exclusivity
    r'\bonly\b', r'\bjust\b', r'\bexclusively\b', r'\bnothing else\b',
    r'\bno other\b', r'\bsolely\b',

    # Requirements
    r'\bmust\b', r'\bneed to\b', r'\bhave to\b', r'\brequired\b',
    r'\bmandatory\b', r'\bessential\b',

    # Location commitment
    r'\brelocating\b', r'\bmoving to\b', r'\bmust be in\b',
    r'\bwilling to relocate\b',

    # Deal-breakers
    r"won't consider", r"definitely not", r"\bnever\b",
    r"not interested in", r"refuse to"
]

def detectsHardValidation(text: str) -> bool:
    """Check if text contains hard validation keywords"""
    text_lower = text.lower()
    for pattern in HARD_VALIDATION_PATTERNS:
        if re.search(pattern, text_lower):
            return True
    return False

# ============================================================================
# PYDANTIC AI AGENT
# ============================================================================

# System prompt for extraction
EXTRACTION_PROMPT = """You are an expert at extracting career-related entities from conversational text.

Your task:
1. Extract ALL career entities mentioned (skills, companies, roles, locations, preferences)
2. Classify each into the correct cluster (skills, experience, career_interests, preferences)
3. Assign a confidence score 0-1 based on how explicit the mention was
4. Extract metadata like years of experience, proficiency level, seniority, etc.
5. Detect if the entity requires hard validation (contains "only", "must", "relocating", etc.)

User Types:
- CANDIDATE: Job seeker building their profile (skills, experience, preferences)
- CLIENT: Hiring manager defining requirements (requirements, culture fit)

Cluster Rules:
- skills: Technical or domain skills (e.g., "M&A", "Python", "Leadership")
- experience: Past companies and roles (e.g., "Stripe (CFO)", "15 years")
- career_interests: Desired roles and companies (e.g., "CFO roles", "tech startups")
- preferences: Locations, availability, day rates (e.g., "London", "3 days/week", "£1500/day")
- requirements: Client needs (e.g., "CFO with M&A experience")
- culture_fit: Personality traits, values (e.g., "fast-paced", "collaborative")

Confidence Guidelines:
- 0.9-1.0: Explicit mention with details ("I was CFO at Stripe for 5 years")
- 0.7-0.9: Clear mention ("I worked at Stripe", "I want CFO roles")
- 0.5-0.7: Implied or casual ("maybe London", "interested in finance")
- 0.3-0.5: Uncertain or vague ("something in tech")
- 0.0-0.3: Speculation or low signal

Hard Validation Detection:
- Flag requires_hard_validation=true if text contains:
  * "only", "just", "exclusively" (exclusivity)
  * "must", "need to", "required" (hard requirements)
  * "relocating", "moving to" (location commitment)
  * "won't consider", "never" (deal-breakers)

Examples:
- "I'm a CFO with 15 years experience" → [
    {entity_type: "role", value: "CFO", cluster: "career_interests", confidence: 0.95, metadata: {current: true}},
    {entity_type: "seniority", value: "15+ years", cluster: "experience", confidence: 0.95, metadata: {years: 15}}
  ]

- "I ONLY want remote work" → [
    {entity_type: "location", value: "Remote", cluster: "preferences", confidence: 0.95,
     requires_hard_validation: true, raw_text: "I ONLY want remote work"}
  ]

- "Worked at Stripe and Monzo" → [
    {entity_type: "company", value: "Stripe", cluster: "experience", confidence: 0.9},
    {entity_type: "company", value: "Monzo", cluster: "experience", confidence: 0.9}
  ]

Be thorough but precise. Extract only what's explicitly or strongly implied."""

# Create agent
agent = Agent(
    model="google-gla:gemini-2.0-flash",  # Fast, cost-effective
    output_type=VoiceExtractionResponse,
    system_prompt=EXTRACTION_PROMPT
)

# ============================================================================
# MAIN HANDLER
# ============================================================================

async def handler(request):
    """
    Main Vercel serverless handler

    POST body: { "transcript": str, "user_type": "candidate" | "client" | "unknown" }
    """
    import json

    # Parse request
    body = await request.json() if hasattr(request, 'json') else json.loads(request.body)
    transcript = body.get('transcript', '')
    user_type = body.get('user_type', 'unknown')
    context = body.get('context', [])  # Previous conversation for context

    if not transcript or len(transcript.strip()) < 5:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Transcript too short or empty'})
        }

    # Build prompt with context
    prompt = f"""Transcript: "{transcript}"
User Type: {user_type}
Previous Context: {', '.join(context) if context else 'None'}

Extract all career entities from this transcript."""

    try:
        # Run Pydantic AI extraction
        result = await agent.run(prompt)
        extraction = result.output

        # Post-process: Add hard validation detection
        for entity in extraction.entities:
            if not entity.requires_hard_validation:
                entity.requires_hard_validation = detectsHardValidation(entity.raw_text)

        # Return structured response
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps(extraction.model_dump())
        }

    except Exception as e:
        print(f"[Pydantic AI] Extraction error: {e}")
        return {
            'statusCode': 500,
            'body': json.dumps({
                'error': 'Extraction failed',
                'details': str(e)
            })
        }

# ============================================================================
# VERCEL EXPORT
# ============================================================================

# For Vercel serverless deployment
def main(request):
    """Synchronous wrapper for Vercel"""
    import asyncio
    return asyncio.run(handler(request))
