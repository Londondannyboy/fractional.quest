# Pedantic AI Job Validation Policy

## Overview
This policy defines the quality standards that **Pedantic AI must enforce** before enriching any job posting in the fractional.quest database.

## Validation Rules

### 1. Minimum Description Requirement
**Rule**: Job must have a description with **at least 30 words**

**Rationale**: Without sufficient description, we cannot generate meaningful skills analysis or company summaries. Thin job posts lack the context needed for quality enrichment.

**Implementation**:
```sql
WHERE description_word_count >= 30
```

**Action**: If a job has fewer than 30 words, mark `is_active = false`. Do not attempt enrichment.

---

### 2. Company Type Classification
**Rule**: Every job must be classified as one of three company types:

| Type | Description | Example |
|------|-------------|---------|
| `direct` | Actual company posting their own job | Cherubs Nurseries, RORA, Performology Global |
| `recruiter` | Third-party agency posting on behalf of client | FD Recruit, MacGregor Black, Opus Recruitment Solutions |
| `job_board` | Aggregator platform (not the actual employer) | LinkedIn Jobs, Indeed, Glassdoor |

**Rationale**:
- We must NOT profile recruiters as if they are the actual company
- Company enrichment (logo, domain, summary) should only apply to `direct` companies
- Recruiters are intermediaries - the actual employer is often unnamed

**Implementation**:
```sql
WHERE company_type IN ('direct', 'recruiter', 'job_board')
```

**Detection Patterns**:

**Recruiters** (look for these signals):
- Company name contains: "Recruit", "Partners", "Associates", "Solutions", "Advisors", "Network"
- Description says: "seeking candidates", "for our client", "on behalf of"
- Multiple similar job posts from same company with different client sectors

**Direct Companies**:
- Description says: "Join us", "at [Company Name]", "our team"
- Company has its own product/service (not recruitment)
- Single role posted for their own business

**Job Boards**:
- Source is LinkedIn/Indeed/Glassdoor AND company_name is also LinkedIn/Indeed/Glassdoor

---

### 3. Validated Job Post Flag
**Rule**: `validated_job_post` must be `true` before enrichment

**Criteria**:
```sql
validated_job_post = (
  description_word_count >= 30
  AND company_type IS NOT NULL
)
```

**Action**: Pedantic AI should ONLY enrich jobs where `validated_job_post = true`

---

## Enrichment Guidelines by Company Type

### For `direct` companies:
✅ **DO**:
- Generate company summary ("Why work here")
- Fetch company logo/domain
- Generate skills from job description
- Create mini company knowledge graph

### For `recruiter` companies:
✅ **DO**:
- Generate skills from job description
- Note in UI: "Posted by [Recruiter Name] on behalf of client"

❌ **DON'T**:
- Profile the recruiter as if they're the employer
- Generate company summary for the recruiter
- Show recruiter logo as the job's company logo

### For `job_board` companies:
✅ **DO**:
- Generate skills from job description
- Show actual employer name if available

❌ **DON'T**:
- Profile LinkedIn/Indeed as the employer
- Show job board logo as company logo

---

## Quality Standards Enforcement

### Before Enrichment Checklist:
1. ✅ `description_word_count >= 30`
2. ✅ `company_type IS NOT NULL`
3. ✅ `validated_job_post = true`
4. ✅ `is_active = true`

### Enrichment Process:
1. **Validate** the job passes all criteria
2. **Classify** company type if not already classified
3. **Generate** skills array from description (min 3, max 10 skills)
4. **Enrich** company data ONLY if `company_type = 'direct'`
5. **Update** `validated_job_post = true`

---

## Database Schema

### New Columns:
```sql
ALTER TABLE jobs ADD COLUMN company_type VARCHAR(20)
  CHECK (company_type IN ('direct', 'job_board', 'recruiter'));

ALTER TABLE jobs ADD COLUMN validated_job_post BOOLEAN DEFAULT false;

ALTER TABLE jobs ADD COLUMN description_word_count INTEGER;

ALTER TABLE jobs ADD COLUMN job_source VARCHAR(100) DEFAULT 'LinkedIn';

ALTER TABLE jobs ADD COLUMN is_syndicated BOOLEAN DEFAULT true;
```

### Validation Query:
```sql
-- Mark jobs as validated if they meet criteria
UPDATE jobs
SET validated_job_post = CASE
  WHEN description_word_count >= 30
   AND company_type IS NOT NULL
  THEN true
  ELSE false
END
WHERE is_active = true;
```

### Quality Filter Query:
```sql
-- Only show jobs with complete data on the site
SELECT * FROM jobs
WHERE is_active = true
  AND validated_job_post = true
  AND skills_required IS NOT NULL
  AND array_length(skills_required, 1) > 0
  AND company_domain IS NOT NULL
  AND description_snippet IS NOT NULL
ORDER BY posted_date DESC;
```

---

## Current Statistics (as of implementation)

- **Total active jobs**: 17
- **Validated jobs**: 17 (100%)
- **Company types**:
  - Direct: 3 jobs (18%)
  - Recruiters: 14 jobs (82%)
  - Job boards: 0 jobs

- **Jobs deleted** for insufficient descriptions: 5
- **Average description word count**: 46 words

---

## Policy Violations

### If Pedantic AI encounters:
1. **Job with <30 word description** → Set `is_active = false`, do not enrich
2. **Job without company_type** → Classify first using detection patterns above
3. **Recruiter falsely marked as direct** → Reclassify, remove company enrichment
4. **Missing skills on validated job** → Generate skills from description

---

## Future Enhancements

1. **AI-powered company type detection** - Train model to classify based on description patterns
2. **Actual employer extraction** - For recruiter posts, extract the real company name if mentioned
3. **Quality scoring** - Add `quality_score` (1-10) based on description completeness
4. **Auto-validation** - Trigger validation on INSERT/UPDATE of description_snippet

---

**Last Updated**: 2025-12-16
**Policy Version**: 1.0
**Owner**: Pedantic AI / fractional.quest
