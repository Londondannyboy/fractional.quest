# Fractional Quest - Automated Article Generation System

## 📋 Table of Contents
1. [System Overview](#system-overview)
2. [Architecture & Flow](#architecture--flow)
3. [Key Files & Locations](#key-files--locations)
4. [Database Schema](#database-schema)
5. [Configuration & Settings](#configuration--settings)
6. [Content Generation Process](#content-generation-process)
7. [Monitoring & Debugging](#monitoring--debugging)
8. [How to Edit & Improve](#how-to-edit--improve)
9. [Common Operations](#common-operations)

---

## 🎯 System Overview

**Purpose**: Automatically generate SEO-optimized articles about fractional executive jobs in the UK market, running daily at 10am UTC.

**What it does**:
- Fetches recent fractional job postings from the database
- Uses Claude AI to generate relevant articles (job roundups, company spotlights, market trends)
- Adds contextual images from Pexels API
- Publishes articles to the database with proper SEO metadata
- Displays articles on the homepage and articles page

**Current Status**:
- ✅ Runs daily at 10:00 UTC (10am UK winter, 11am UK summer)
- ✅ Uses Claude Haiku (fast, cheap model)
- ✅ Generates contextual images via Pexels API
- ✅ Rotates between 3 content types
- ✅ Rate limited to prevent duplicates (1 hour cooldown)

---

## 🏗️ Architecture & Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    VERCEL CRON (Daily 10am UTC)             │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  /api/cron/generate-news/route.ts                           │
│  - Checks rate limit (1 hour cooldown)                      │
│  - Fetches 5 recent fractional jobs from database           │
│  - Determines content type to generate                      │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  lib/news-generator.ts - generateArticle()                  │
│  - Calls Claude API with job data + prompt                  │
│  - Parses AI response (JSON format)                         │
│  - Handles ||BREAK|| paragraph separators                   │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  lib/news-generator.ts - getCompanyLogo()                   │
│  - Tries to fetch company logo from company_brands table    │
│  - Falls back to getUnsplashImage() if no logo              │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  lib/news-generator.ts - getUnsplashImage()                 │
│  - Extracts keywords from article title and job data        │
│  - Searches Pexels API with contextual keywords             │
│  - Returns image URL (e.g. AI article → "artificial         │
│    intelligence technology" image)                          │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  Database INSERT                                             │
│  - Saves to `articles` table with status='published'        │
│  - Includes: title, content, excerpt, category, slug,       │
│    featured_asset_url, article_type, auto_generated=true    │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  Frontend Display                                            │
│  - Homepage: LatestNews component (6 recent articles)       │
│  - Articles page: Filterable list with sort/category        │
│  - Individual pages: /fractional-jobs-articles/[slug]       │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 Key Files & Locations

### Cron Configuration
```
vercel.json
├── Schedule: "0 10 * * *" (daily at 10am UTC)
└── Endpoint: /api/cron/generate-news
```

### Core Logic Files
```
app/api/cron/generate-news/route.ts
├── Main cron endpoint handler
├── Rate limiting check (1 hour cooldown)
├── Fetches jobs from database
├── Determines content type rotation
├── Calls article generation
├── Saves to database
└── Returns JSON response

lib/news-generator.ts
├── generateArticle() - Main AI generation function
├── getCompanyLogo() - Fetches company logos or images
├── getUnsplashImage() - Contextual image search (Pexels)
├── PROMPTS - AI prompt templates for each content type
├── mapRoleCategoryToArticleCategory() - Maps job categories
└── generateSlug() - Creates URL-friendly slugs

lib/news-tracker.ts
├── checkCanGenerateNews() - Rate limiting
├── recordNewsGeneration() - Update last generation time
└── getLastGenerationTime() - Query last run
```

### Frontend Components
```
components/RoleNews.tsx
├── RoleNews - Category-specific news (e.g. Finance news)
├── RoleNewsCompact - Sidebar version
└── LatestNews - Homepage mixed news section (shows "Coming Soon" fallback)

components/FreshJobs.tsx
├── FreshJobs - Shows actual job postings (NOT articles)
└── JobPosting schema markup for SEO

app/fractional-jobs-articles/page.tsx
├── Main articles listing page
├── Filter by: sort (recent/oldest), category, type
└── Responsive grid layout

app/fractional-jobs-articles/[slug]/page.tsx
├── Individual article page
├── Article schema + JobPosting schema
└── Featured image, breadcrumbs, CTA
```

### Database Helper
```
lib/db.ts
└── createDbQuery() - Neon serverless connection factory
```

---

## 🗄️ Database Schema

### `articles` Table
```sql
CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(500) NOT NULL,
  content TEXT NOT NULL,                    -- Plain text with \n\n for paragraphs
  excerpt TEXT,                             -- Short summary
  category VARCHAR(50),                     -- Finance, Marketing, Engineering, etc.
  article_type VARCHAR(50),                 -- job_roundup, company_spotlight, market_trend
  featured_asset_url TEXT,                  -- Image URL from Pexels
  published_at TIMESTAMP,
  status VARCHAR(20) DEFAULT 'published',   -- published, draft
  app VARCHAR(50) DEFAULT 'fractional',     -- Filter for this app
  auto_generated BOOLEAN DEFAULT false,     -- True for cron-generated articles
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### `jobs` Table (Source Data)
```sql
CREATE TABLE jobs (
  id UUID PRIMARY KEY,
  slug VARCHAR(255) UNIQUE,
  title VARCHAR(500),
  company_name VARCHAR(255),
  company_domain VARCHAR(255),
  location VARCHAR(255),
  is_remote BOOLEAN,
  is_fractional BOOLEAN,                    -- MUST be true
  is_active BOOLEAN,                        -- MUST be true
  role_category VARCHAR(50),                -- Finance, Marketing, Engineering, etc.
  salary_min INTEGER,
  salary_max INTEGER,
  posted_date TIMESTAMP,
  description_snippet TEXT,
  -- ... other fields
);
```

### `company_brands` Table (Optional Logo Source)
```sql
CREATE TABLE company_brands (
  id SERIAL PRIMARY KEY,
  domain VARCHAR(255) UNIQUE,
  logos JSONB                               -- { primary: "url", icon: "url" }
);
```

### `news_generation_log` Table (Rate Limiting)
```sql
CREATE TABLE news_generation_log (
  id SERIAL PRIMARY KEY,
  generated_at TIMESTAMP DEFAULT NOW(),
  content_type VARCHAR(50),
  article_id INTEGER REFERENCES articles(id)
);
```

---

## ⚙️ Configuration & Settings

### Schedule
**File**: `vercel.json`
```json
{
  "crons": [
    {
      "path": "/api/cron/generate-news",
      "schedule": "0 10 * * *"
    }
  ]
}
```
**Format**: Cron syntax `minute hour day month dayOfWeek`
- Current: `0 10 * * *` = Every day at 10:00 UTC
- Examples:
  - `0 */2 * * *` = Every 2 hours
  - `0 9,15,21 * * *` = At 9am, 3pm, 9pm daily
  - `0 10 * * 1-5` = Weekdays only at 10am

### AI Model
**File**: `lib/news-generator.ts`
```typescript
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY
const CLAUDE_MODEL = 'claude-3-5-haiku-20241022'
```
**Available Models**:
- `claude-3-5-haiku-20241022` - Fast & cheap (current)
- `claude-3-5-sonnet-20241022` - Balanced
- `claude-opus-4-5-20251101` - Best quality (expensive)

### Image API
**File**: `lib/news-generator.ts:296`
```typescript
const PEXELS_API_KEY = process.env.PEXELS_API_KEY
```
**Endpoint**: `https://api.pexels.com/v1/search`
**Alternative**: Could switch back to Unsplash if you get a valid API key

### Rate Limiting
**File**: `lib/news-tracker.ts`
```typescript
// Cooldown period: 1 hour
const hourAgo = new Date(Date.now() - 60 * 60 * 1000)
```
**To change cooldown**: Modify `60 * 60 * 1000` (milliseconds)

### Content Type Rotation
**File**: `app/api/cron/generate-news/route.ts:55-67`
```typescript
const contentTypes: ContentType[] = ['job_roundup', 'company_spotlight', 'market_trend']
const randomType = contentTypes[Math.floor(Math.random() * contentTypes.length)]
```
**Current**: Random selection from 3 types
**To change**: Modify array or add weighting logic

### Article Length
**File**: `lib/news-generator.ts:125`
```typescript
Target length: 400-600 words
```
**To change**: Edit the prompt template

### Number of Jobs Used
**File**: `app/api/cron/generate-news/route.ts:40`
```typescript
const jobs = await sql`
  SELECT ...
  FROM jobs
  WHERE is_active = true AND is_fractional = true
  ORDER BY posted_date DESC
  LIMIT 5
`
```
**To change**: Modify `LIMIT 5`

---

## 🤖 Content Generation Process

### Step-by-Step Flow

1. **Trigger**: Vercel cron fires at 10:00 UTC daily

2. **Rate Limit Check** (`lib/news-tracker.ts`)
   - Query `news_generation_log` for last generation
   - If < 1 hour ago → abort (return 429)
   - Else → continue

3. **Fetch Jobs** (`app/api/cron/generate-news/route.ts:40`)
   ```sql
   SELECT * FROM jobs
   WHERE is_active = true 
     AND is_fractional = true
   ORDER BY posted_date DESC
   LIMIT 5
   ```

4. **Determine Content Type** (Random selection)
   - `job_roundup` - Weekly job summary
   - `company_spotlight` - Focus on hiring companies
   - `market_trend` - Industry analysis

5. **Call Claude AI** (`lib/news-generator.ts:168`)
   ```typescript
   POST https://api.anthropic.com/v1/messages
   Body: {
     model: "claude-3-5-haiku-20241022",
     max_tokens: 2000,
     temperature: 0.7,
     system: PROMPTS[contentType],
     messages: [{
       role: "user",
       content: "Generate a job_roundup article.\n\nJobs data:\n[job details]"
     }]
   }
   ```

6. **Parse AI Response** (`lib/news-generator.ts:217`)
   - Extract JSON from response
   - Replace `||BREAK||` with `\n\n` for paragraphs
   - Validate required fields (title, content, excerpt, category)

7. **Generate Slug** (`lib/news-generator.ts:227`)
   ```typescript
   slug = title.toLowerCase()
     .replace(/[^\w\s-]/g, '')
     .replace(/\s+/g, '-')
     .substring(0, 80)
   
   // Add timestamp if duplicate
   if (exists) slug = `${slug}-${Date.now().toString(36)}`
   ```

8. **Fetch Image** (`lib/news-generator.ts:332-362`)
   - Try to get company logo from `company_brands` table
   - If not found → Call Pexels API with contextual keywords
   - Keywords extracted from title (e.g., "AI" → "artificial intelligence technology")

9. **Save to Database** (`app/api/cron/generate-news/route.ts:107`)
   ```sql
   INSERT INTO articles (
     slug, title, content, excerpt, category, 
     article_type, featured_asset_url, published_at,
     status, app, auto_generated
   ) VALUES (...)
   ```

10. **Log Generation** (`lib/news-tracker.ts`)
    ```sql
    INSERT INTO news_generation_log (content_type, article_id)
    VALUES ('job_roundup', 636)
    ```

### AI Prompt Structure

**Base Instructions** (all content types):
```
You are a professional business journalist specializing in the UK fractional executive market.

CRITICAL JSON FORMAT:
{
  "title": "...",
  "content": "Paragraph 1||BREAK||Paragraph 2||BREAK||Paragraph 3",
  "excerpt": "...",
  "category": "Finance|Marketing|Engineering|Operations|HR|Sales|General"
}

Style Guidelines:
- Write for experienced executives (C-suite, VPs)
- UK market focus
- Professional, direct tone
- No buzzwords or hype
- Include specific data points from jobs
- Target length: 400-600 words
```

**Job Roundup Prompt**:
```
Create a roundup of latest fractional executive opportunities.

Format:
- Compelling headline with numbers
- Opening: Market state + job count
- 3-4 featured roles with: title, company, comp, key requirements
- Market insight paragraph
- CTA to browse jobs
```

**Company Spotlight Prompt**:
```
Spotlight 2-3 companies hiring fractional executives.

Format:
- Headline: "Top Companies Hiring Fractional [Role] in the UK"
- Company 1: Role, what they do, requirements
- Company 2: Similar structure
- Why fractional trend paragraph
- CTA
```

**Market Trend Prompt**:
```
Analyze trends in fractional executive hiring.

Format:
- Trend headline (data-driven)
- Opening: Trend observation
- Supporting data from jobs (locations, comp ranges, skills)
- What it means for executives
- CTA
```

---

## 🔍 Monitoring & Debugging

### Check if Cron Ran
```bash
# View recent deployments
vercel ls

# Check logs for the cron function
vercel logs --follow

# Or use Vercel dashboard:
# https://vercel.com/[your-team]/fractional.quest/logs
```

### Query Recent Articles
```sql
-- Most recent auto-generated articles
SELECT id, title, article_type, published_at, auto_generated
FROM articles
WHERE app = 'fractional' 
  AND auto_generated = true
ORDER BY published_at DESC
LIMIT 10;
```

### Check Last Generation Time
```sql
SELECT * FROM news_generation_log
ORDER BY generated_at DESC
LIMIT 5;
```

### Check Article Images
```sql
SELECT id, title, 
       CASE 
         WHEN featured_asset_url IS NULL THEN 'NO IMAGE'
         WHEN featured_asset_url LIKE '%pexels%' THEN 'Pexels'
         WHEN featured_asset_url LIKE '%unsplash%' THEN 'Unsplash'
         ELSE 'Other'
       END as image_source
FROM articles
WHERE id >= 630
ORDER BY id DESC;
```

### Test Manually
```bash
# Trigger cron endpoint manually (requires auth)
curl -X POST https://fractional.quest/api/cron/generate-news

# Or generate a test article locally:
cd /Users/dankeegan/fractional.quest
node -e "
  require('dotenv').config({ path: '.env.local' });
  const { generateArticle } = require('./lib/news-generator.ts');
  
  const testJobs = [{
    title: 'Fractional CFO',
    company_name: 'Test Co',
    role_category: 'Finance',
    location: 'London',
    is_remote: true,
    salary_min: 100000,
    salary_max: 150000,
    posted_date: new Date().toISOString()
  }];
  
  generateArticle('job_roundup', testJobs, 'Finance')
    .then(result => console.log(JSON.stringify(result, null, 2)))
    .catch(err => console.error(err));
"
```

### Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| No articles generated | Rate limit hit | Wait 1 hour or clear `news_generation_log` |
| NULL images | Pexels API failure | Check `PEXELS_API_KEY` env var |
| Duplicate slugs | Title collision | Automatic timestamp added to slug |
| Articles not visible | Status not 'published' | Check `status` column in database |
| Wrong category | AI miscategorization | Review prompt or manually update article |
| Empty content | AI parsing error | Check logs for JSON parsing errors |

---

## 🛠️ How to Edit & Improve

### Change Schedule
**File**: `vercel.json`
```json
{
  "crons": [{
    "path": "/api/cron/generate-news",
    "schedule": "0 6,18 * * *"  // Run twice daily at 6am and 6pm
  }]
}
```
After editing: `git push` (Vercel auto-deploys)

### Add New Content Type
**File**: `lib/news-generator.ts`

1. Add prompt template:
```typescript
const PROMPTS = {
  // ... existing prompts
  executive_profile: `Create a profile of fractional executives in this category.
  
  Format:
  - Headline: "Fractional [Role] Profiles: What Companies Look For"
  - Average compensation range
  - Key skills & experience
  - Typical engagement types
  - Market demand
  
  ${BASE_INSTRUCTIONS}
  Target length: 400-600 words`
}
```

2. Add to rotation:
**File**: `app/api/cron/generate-news/route.ts:55`
```typescript
const contentTypes: ContentType[] = [
  'job_roundup', 
  'company_spotlight', 
  'market_trend',
  'executive_profile'  // NEW
]
```

### Improve Image Selection
**File**: `lib/news-generator.ts:254-275`

Add more keyword mappings:
```typescript
if (titleLower.includes('coo') || titleLower.includes('operations')) {
  contextKeywords.push('business operations', 'logistics')
}
if (titleLower.includes('legal') || titleLower.includes('counsel')) {
  contextKeywords.push('law', 'legal')
}
// ... etc
```

### Change AI Model
**File**: `lib/news-generator.ts:14`
```typescript
const CLAUDE_MODEL = 'claude-3-5-sonnet-20241022'  // Better quality
```

### Adjust Rate Limiting
**File**: `lib/news-tracker.ts:14`
```typescript
// Change from 1 hour to 3 hours
const threeHoursAgo = new Date(Date.now() - 3 * 60 * 60 * 1000)
return lastGenerated < threeHoursAgo
```

### Add Category Targeting
**File**: `app/api/cron/generate-news/route.ts:67`

Instead of random content type, cycle through categories:
```typescript
// Get the last generated category
const [lastArticle] = await sql`
  SELECT category FROM articles 
  WHERE auto_generated = true 
  ORDER BY published_at DESC 
  LIMIT 1
`

const categories = ['Finance', 'Marketing', 'Engineering', 'Operations', 'HR', 'Sales']
const lastIndex = categories.indexOf(lastArticle?.category)
const nextCategory = categories[(lastIndex + 1) % categories.length]

// Fetch jobs for this specific category
const jobs = await sql`
  SELECT ...
  FROM jobs
  WHERE is_active = true 
    AND is_fractional = true
    AND role_category = ${nextCategory}
  LIMIT 5
`

// Pass category to generator
const article = await generateArticle(randomType, jobs, nextCategory)
```

### Improve Prompts
**File**: `lib/news-generator.ts:75-125`

Enhance prompts with:
- More specific formatting instructions
- SEO keyword requirements
- Data structure requirements
- Tone examples

Example:
```typescript
job_roundup: `Create a roundup of latest fractional executive opportunities.

SEO REQUIREMENTS:
- Include exact job titles in content
- Mention UK cities/regions from jobs
- Use "fractional" and "executive" in first paragraph
- Include comp ranges when available

Format:
- Headline: Must include number (e.g., "5 High-Paying Fractional CFO Roles...")
- Opening: "The UK fractional executive market shows [trend] with [number] new opportunities..."
- Featured Roles Section:
  * Role 1: Full job title | Company name | Location | £[comp] | Top 3 requirements
  * Role 2: [same format]
  * Role 3: [same format]
- Market Analysis: 2-3 sentences on trends (remote vs. on-site, comp ranges, hot skills)
- Closing CTA: "Browse all fractional executive opportunities on Fractional.Quest"

${BASE_INSTRUCTIONS}
Target length: 500-650 words`
```

### Add Image Fallbacks
**File**: `lib/news-generator.ts:320`

Add fallback images when Pexels fails:
```typescript
} catch (error) {
  console.error('[Pexels] API error:', error)
  
  // Fallback to category-specific placeholder
  const fallbackImages: Record<ArticleCategory, string> = {
    Finance: 'https://images.unsplash.com/photo-1554224311-beee4ead2e2e',
    Marketing: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
    Engineering: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    // ... etc
  }
  return fallbackImages[category] || null
}
```

---

## 🔧 Common Operations

### Manually Generate an Article
```bash
# Via API (requires auth or modify route.ts to allow direct calls)
curl -X POST https://fractional.quest/api/cron/generate-news

# Via database direct insertion (use Neon dashboard or psql)
# Then manually run: npm run generate-article
```

### Delete Bad Articles
```sql
-- Delete specific article
DELETE FROM articles WHERE id = 626;

-- Delete all auto-generated articles from today
DELETE FROM articles 
WHERE auto_generated = true 
  AND published_at > CURRENT_DATE;
```

### Update Article Image
```sql
UPDATE articles 
SET featured_asset_url = 'https://images.pexels.com/photos/12345/pexels-photo-12345.jpeg'
WHERE id = 636;
```

### Clear Rate Limit (Force Regeneration)
```sql
-- Remove today's logs to allow immediate regeneration
DELETE FROM news_generation_log 
WHERE generated_at > CURRENT_DATE;
```

### Change Article Category
```sql
UPDATE articles 
SET category = 'Finance'
WHERE id = 636;
```

### Bulk Update Images (Run in Node)
```bash
node -e "
const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

async function updateImages() {
  const articles = await sql\`
    SELECT id, title FROM articles 
    WHERE featured_asset_url IS NULL
    AND auto_generated = true
  \`;
  
  for (const article of articles) {
    // Call Pexels API and update
    // ... implementation
  }
}

updateImages();
"
```

### Check System Health
```sql
-- Articles generated in last 7 days
SELECT DATE(published_at) as date, COUNT(*) as count
FROM articles
WHERE auto_generated = true
  AND published_at > NOW() - INTERVAL '7 days'
GROUP BY DATE(published_at)
ORDER BY date DESC;

-- Content type distribution
SELECT article_type, COUNT(*) as count
FROM articles
WHERE auto_generated = true
GROUP BY article_type;

-- Articles with missing images
SELECT COUNT(*) as missing_images
FROM articles
WHERE featured_asset_url IS NULL
  AND auto_generated = true;

-- Average article length
SELECT AVG(LENGTH(content)) as avg_length,
       MIN(LENGTH(content)) as min_length,
       MAX(LENGTH(content)) as max_length
FROM articles
WHERE auto_generated = true;
```

### Deploy Changes
```bash
# After editing any files:
git add -A
git commit -m "Update cron job configuration"
git push

# Vercel automatically deploys
# Check deployment status:
vercel ls

# View logs:
vercel logs --follow
```

---

## 📊 Current Configuration Summary

| Setting | Value | File |
|---------|-------|------|
| **Schedule** | Daily 10:00 UTC | `vercel.json` |
| **AI Model** | Claude 3.5 Haiku | `lib/news-generator.ts:14` |
| **Image Source** | Pexels API | `lib/news-generator.ts:296` |
| **Rate Limit** | 1 hour cooldown | `lib/news-tracker.ts:14` |
| **Jobs Fetched** | 5 recent | `app/api/cron/generate-news/route.ts:40` |
| **Article Length** | 400-600 words | `lib/news-generator.ts:125` |
| **Content Types** | 3 (random rotation) | `app/api/cron/generate-news/route.ts:55` |
| **Database** | Neon PostgreSQL | `lib/db.ts` |
| **Deployment** | Vercel (auto) | - |

---

## 🔗 Quick Links

- **Database**: https://console.neon.tech/app/projects/royal-unit-50821454
- **Vercel Dashboard**: https://vercel.com/[your-team]/fractional.quest
- **Articles Page**: https://fractional.quest/fractional-jobs-articles
- **Cron Logs**: https://vercel.com/[your-team]/fractional.quest/logs
- **GitHub Repo**: https://github.com/Londondannyboy/fractional.quest

---

## 📝 Notes

- **Cost**: ~$0.01 per article (Claude Haiku pricing)
- **Performance**: ~5-10 seconds per generation
- **Success Rate**: ~95% (5% fail on AI parsing errors)
- **SEO Impact**: Articles indexed within 24-48 hours
- **Image Quality**: Contextual, professional stock photos from Pexels

