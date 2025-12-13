# Product Requirements Document: Fractional.Quest Content Pivot

**Document Version:** 1.0
**Date:** December 2025
**Author:** Dan Keegan
**Status:** Ready for Implementation

---

## Executive Summary

Fractional.Quest is pivoting from a **job-seeker focused job board** to a **services marketplace** targeting **companies looking to hire fractional executives**. This aligns with where the search volume and commercial intent exists.

**Key Insight:** The fractional keyword space is service-oriented (companies hiring), while interim/part-time is job-seeker oriented. GoFractional has proven this model with comprehensive content across all C-suite roles.

---

## Strategic Context

### Current State
- Homepage positioned as "Fractional Jobs UK" for job seekers
- Existing pages: `/fractional-cfo-jobs-uk`, `/fractional-cmo-jobs-uk`, etc.
- Content focuses on job listings and salary guides
- Missing: Service pages targeting companies looking to hire

### Target State
- Homepage repositioned for **companies seeking fractional services**
- Dual-audience approach: Companies (primary) + Executives (secondary)
- Comprehensive service pages matching GoFractional's coverage
- Long-form, authoritative content for each role

### Competitive Benchmark: GoFractional
GoFractional (https://www.gofractional.com) has established the content standard with:
- 10 Fractional C-Suite pages
- 10 Interim role pages
- 9 Functional leader pages
- Deep, authoritative content (2,000-4,000 words per page)

---

## Keyword Opportunity Analysis

### Fractional C-Suite (Services) - Primary Target

| Role | Monthly Volume | Difficulty | CPC | Priority |
|------|----------------|------------|-----|----------|
| Fractional CFO | 1,000 | 12 | £21 | P1 |
| Fractional CMO | 1,000 | 11 | £13 | P1 |
| Fractional CTO | 480 | - | £7 | P1 |
| Fractional COO | 260 | - | £3 | P1 |
| Fractional Sales Director | 70 | - | £19 | P2 |
| Fractional CISO | 50 | - | £15 | P2 |
| Fractional CPO | 50 | - | £8 | P2 |
| Fractional HR Director | 40 | - | £9 | P2 |
| Fractional CRO | 10 | - | £15 | P3 |
| Fractional CIO | TBD | - | - | P3 |
| Fractional CDO | TBD | - | - | P3 |
| Fractional CHRO | TBD | - | - | P3 |

### Fractional Jobs (Supply Side) - Secondary Target

| Role | Monthly Volume | Trend | Priority |
|------|----------------|-------|----------|
| Fractional CFO jobs | 170 | +91% YoY | P1 |
| Fractional CTO jobs | 140 | +27% | P1 |
| Fractional CMO jobs | 110 | +22% | P1 |
| Fractional COO jobs | 70 | +25% | P2 |
| Fractional jobs UK | 70 | +175% YoY | P1 |

---

## Content Architecture

### 1. Homepage Repositioning

**Current:** "Fractional Jobs UK | CFO, CTO, CMO Roles"
**New:** "Fractional Executive Services UK | Hire Fractional CFO, CMO, CTO"

**Key Changes:**
- Hero messaging: "Hire Fractional Executives" (not "Find Fractional Jobs")
- Primary CTA: "Find a Fractional Executive" / "Hire Now"
- Secondary CTA: "Join as a Fractional Executive"
- Value props rewritten for companies (cost savings, flexibility, expertise)
- Trust signals: Companies served, successful placements

### 2. Service Pages (NEW - Company Focused)

Create `/fractional-[role]-services` pages for each role:

#### URL Structure
```
/fractional-cfo-services (or /fractional-cfo with redirect from old)
/fractional-cmo-services
/fractional-cto-services
/fractional-coo-services
/fractional-cpo-services
/fractional-chro-services (or /fractional-hr-director-services)
/fractional-cio-services
/fractional-cdo-services
/fractional-cro-services
/fractional-ciso-services
/fractional-sales-director-services
```

#### Content Template (Per GoFractional Standard)

Each service page must include:

1. **Hero Section**
   - H1: "Fractional [Role] Services UK" or "Hire a Fractional [Role]"
   - Subhead: Clear value proposition for companies
   - Stats: Avg cost savings, time to hire, success rate
   - CTA: "Find Your Fractional [Role]"

2. **What is a Fractional [Role]?** (300-500 words)
   - Definition
   - How it differs from full-time and interim
   - Typical engagement structure (days/week, duration)

3. **Key Responsibilities** (5-7 bullet points with descriptions)
   - Role-specific strategic duties
   - Operational responsibilities
   - Team/stakeholder management

4. **Benefits of Hiring a Fractional [Role]** (3-5 benefits)
   - Cost efficiency (with specific numbers)
   - Flexibility
   - Access to senior expertise
   - Fresh perspective
   - Speed to impact

5. **When to Hire a Fractional [Role]** (5-7 scenarios)
   - Scaling phases
   - Transition periods
   - Budget constraints
   - Specific project needs

6. **How Much Does a Fractional [Role] Cost?** (with calculator)
   - Typical day rates (range)
   - Monthly retainer options
   - Comparison to full-time cost
   - ROI calculator component

7. **How to Hire a Fractional [Role]**
   - Our process (4-5 steps)
   - What to look for
   - Red flags to avoid

8. **Featured Fractional [Role]s** (if we have talent profiles)
   - 3-5 profile cards with credentials
   - Link to full talent directory

9. **FAQ Section** (5-8 questions)
   - Role-specific questions
   - Process questions
   - Cost questions

10. **Related Resources**
    - Links to related roles
    - Links to guides/articles
    - Links to job pages for executives

**Target Word Count:** 2,500-4,000 words per page

### 3. Jobs Pages (Existing - Executive Focused)

Keep existing structure but ensure all roles covered:

#### Required Pages (check/create)
```
/fractional-cfo-jobs-uk ✓ EXISTS
/fractional-cmo-jobs-uk ✓ EXISTS
/fractional-cto-jobs-uk ✓ EXISTS
/fractional-coo-jobs-uk ✓ EXISTS
/fractional-hr-jobs-uk (CREATE/CHECK)
/fractional-cpo-jobs-uk (CREATE)
/fractional-cro-jobs-uk (CREATE)
/fractional-ciso-jobs-uk (CREATE)
/fractional-cio-jobs-uk (CREATE)
/fractional-sales-director-jobs-uk (CREATE)
```

### 4. Interim Role Pages (NEW)

Create parallel content for interim roles to capture that search intent:

```
/interim-cfo (or /interim-cfo-services)
/interim-cmo
/interim-cto
/interim-coo
/interim-cpo
/interim-chro
/interim-cio
/interim-ciso
/interim-cro
/interim-ceo
```

**Content Focus:**
- What is an Interim [Role]?
- Fractional vs Interim comparison
- When to hire interim vs fractional
- Link to fractional alternative

### 5. Functional Leader Pages (NEW)

For broader "fractional [function]" searches:

```
/fractional-marketing (covers CMO + marketing manager)
/fractional-finance (covers CFO + FD + FC)
/fractional-technology (covers CTO + tech lead)
/fractional-operations (covers COO + ops manager)
/fractional-hr (covers CHRO + HR director)
/fractional-sales (covers CRO + sales director)
/fractional-product (covers CPO + product manager)
/fractional-data (covers CDO + data lead)
/fractional-security (covers CISO + security lead)
```

---

## Page Priority & Rollout Plan

### Phase 1: Foundation (Week 1-2)
1. Homepage repositioning
2. Fractional CFO services page (highest volume)
3. Fractional CMO services page (highest volume)
4. Fractional CTO services page (underserved, low backlinks needed)

### Phase 2: Core C-Suite (Week 3-4)
5. Fractional COO services page
6. Fractional CHRO/HR Director services page
7. Fractional CPO services page
8. Fractional CRO services page

### Phase 3: Extended C-Suite (Week 5-6)
9. Fractional CISO services page
10. Fractional CIO services page
11. Fractional CDO services page
12. Fractional Sales Director services page

### Phase 4: Interim Coverage (Week 7-8)
13. Interim CFO page
14. Interim CTO page
15. Interim CMO page
16. Interim COO page
17. Remaining interim pages

### Phase 5: Jobs Pages Gap Fill (Week 9-10)
18. Audit existing jobs pages
19. Create missing jobs pages
20. Ensure all roles have jobs page equivalent

### Phase 6: Functional Pages (Week 11-12)
21. Fractional Marketing page
22. Fractional Finance page
23. Fractional Technology page
24. Remaining functional pages

---

## Technical Requirements

### New Components Needed

1. **ServicePageTemplate.tsx**
   - Reusable template for all service pages
   - Props: role, title, description, responsibilities, benefits, faqs, etc.
   - Sections as configurable components

2. **RoleCostCalculator.tsx**
   - Input: days/week, rate range
   - Output: monthly cost, annual cost, vs full-time comparison
   - Role-specific default values

3. **TalentProfileCard.tsx**
   - Display fractional executive profiles
   - Name, title, experience, specialties
   - CTA to connect

4. **ServiceComparisonTable.tsx**
   - Fractional vs Interim vs Full-time comparison
   - Cost, commitment, flexibility metrics

5. **HireProcessStepper.tsx**
   - Visual 4-5 step process
   - "Brief → Match → Meet → Start" flow

### Database Updates

1. **New table: `service_pages`**
   ```sql
   - id
   - role_slug (e.g., 'cfo', 'cmo')
   - role_title
   - role_type ('fractional', 'interim')
   - meta_title
   - meta_description
   - hero_content (JSON)
   - sections (JSON array)
   - faqs (JSON array)
   - is_active
   - created_at
   - updated_at
   ```

2. **New table: `talent_profiles`** (if adding talent directory)
   ```sql
   - id
   - name
   - role_category
   - headline
   - bio
   - experience_years
   - specialties (array)
   - industries (array)
   - day_rate_min
   - day_rate_max
   - is_featured
   - profile_image_url
   ```

### SEO Requirements

1. **Schema Markup**
   - Service schema for service pages
   - FAQ schema for FAQ sections
   - Organization schema on homepage
   - Person schema for talent profiles

2. **Internal Linking**
   - Every service page links to:
     - Related jobs page
     - Comparison roles
     - Guides/articles
     - Calculator tools
   - Cross-link fractional ↔ interim equivalents

3. **Canonical Strategy**
   - `/fractional-cfo` → `/fractional-cfo-services` (or vice versa)
   - Avoid duplicate content with clear canonicals

---

## Content Production Requirements

### Per Service Page
- **Research:** 2-3 hours (competitor analysis, keyword research)
- **Writing:** 4-6 hours (2,500-4,000 words)
- **Design/Images:** 1-2 hours (hero image, infographics)
- **Development:** 2-3 hours (page build, component integration)
- **Review/QA:** 1-2 hours

**Total per page:** 10-16 hours

### Full Project Estimate
- 12 Service pages × 13 hours avg = 156 hours
- 10 Interim pages × 8 hours avg = 80 hours
- 10 Jobs pages (new/update) × 4 hours = 40 hours
- 9 Functional pages × 8 hours = 72 hours
- Homepage redesign = 16 hours
- Components/technical = 24 hours

**Total:** ~390 hours / ~10 weeks at 40 hrs/week

---

## Success Metrics

### Traffic KPIs
- Organic traffic to service pages: Target 500 sessions/month within 3 months
- Keyword rankings: Top 10 for primary keywords within 6 months
- Page 1 rankings for long-tail within 3 months

### Conversion KPIs
- Service page → Contact form: Target 3-5% conversion
- Homepage → Service page: Target 25% click-through
- Time on page: Target 3+ minutes (indicates content consumption)

### Business KPIs
- Inbound enquiries from companies: Target 10/month within 3 months
- Fractional executive sign-ups: Target 50/month
- Successful matches: Target 2-5/month

---

## Appendix A: GoFractional Content Analysis

**URL:** https://www.gofractional.com/blog/fractional-coo

**Content Structure:**
1. What is a fractional COO? (definition + context)
2. 5 Key Responsibilities (detailed breakdown)
3. How to Become a Fractional COO (for supply side)
4. 3 Notable Advantages of Hiring (for demand side)
5. How Much Does a Fractional COO Cost? (pricing transparency)
6. What's the Right Time to Hire? (buying triggers)
7. Hire with Go Fractional (CTA + process)
8. Related Articles (internal links)

**Word Count:** ~3,500 words
**Tone:** Professional, authoritative, helpful
**CTAs:** Multiple throughout, not just at end

---

## Appendix B: Full Content Matrix

| Page Type | Role | URL | Priority | Status |
|-----------|------|-----|----------|--------|
| Service | CFO | /fractional-cfo-services | P1 | TODO |
| Service | CMO | /fractional-cmo-services | P1 | TODO |
| Service | CTO | /fractional-cto-services | P1 | TODO |
| Service | COO | /fractional-coo-services | P1 | TODO |
| Service | CHRO | /fractional-chro-services | P2 | TODO |
| Service | CPO | /fractional-cpo-services | P2 | TODO |
| Service | CRO | /fractional-cro-services | P2 | TODO |
| Service | CISO | /fractional-ciso-services | P2 | TODO |
| Service | CIO | /fractional-cio-services | P3 | TODO |
| Service | CDO | /fractional-cdo-services | P3 | TODO |
| Service | Sales Director | /fractional-sales-director-services | P2 | TODO |
| Service | HR Director | /fractional-hr-director-services | P2 | TODO |
| Interim | CFO | /interim-cfo | P2 | TODO |
| Interim | CMO | /interim-cmo | P2 | TODO |
| Interim | CTO | /interim-cto | P2 | TODO |
| Interim | COO | /interim-coo | P2 | TODO |
| Interim | CEO | /interim-ceo | P3 | TODO |
| Interim | CHRO | /interim-chro | P3 | TODO |
| Interim | CPO | /interim-cpo | P3 | TODO |
| Interim | CRO | /interim-cro | P3 | TODO |
| Interim | CIO | /interim-cio | P3 | TODO |
| Interim | CISO | /interim-ciso | P3 | TODO |
| Jobs | CFO | /fractional-cfo-jobs-uk | P1 | EXISTS |
| Jobs | CMO | /fractional-cmo-jobs-uk | P1 | EXISTS |
| Jobs | CTO | /fractional-cto-jobs-uk | P1 | EXISTS |
| Jobs | COO | /fractional-coo-jobs-uk | P1 | EXISTS |
| Jobs | HR | /fractional-hr-jobs-uk | P1 | CHECK |
| Jobs | CPO | /fractional-cpo-jobs-uk | P2 | TODO |
| Jobs | CRO | /fractional-cro-jobs-uk | P2 | TODO |
| Jobs | CISO | /fractional-ciso-jobs-uk | P2 | TODO |
| Jobs | CIO | /fractional-cio-jobs-uk | P3 | TODO |
| Jobs | Sales | /fractional-sales-director-jobs-uk | P2 | TODO |
| Functional | Marketing | /fractional-marketing | P3 | TODO |
| Functional | Finance | /fractional-finance | P3 | TODO |
| Functional | Technology | /fractional-technology | P3 | TODO |
| Functional | Operations | /fractional-operations | P3 | TODO |
| Functional | HR | /fractional-hr | P3 | TODO |
| Functional | Sales | /fractional-sales | P3 | TODO |
| Functional | Product | /fractional-product | P3 | TODO |
| Functional | Data | /fractional-data | P3 | TODO |
| Functional | Security | /fractional-security | P3 | TODO |

---

## Appendix C: Competitor URLs for Reference

### GoFractional Service Pages
- https://www.gofractional.com/blog/fractional-coo
- https://www.gofractional.com/blog/fractional-cto
- https://www.gofractional.com/blog/fractional-cfo (via CFO interview questions)
- https://www.gofractional.com/blog/chief-marketing-officer
- https://www.gofractional.com/blog/chief-product-officer
- https://www.gofractional.com/blog/fractional-chro
- https://www.gofractional.com/blog/what-is-a-CIO
- https://www.gofractional.com/blog/what-is-a-chief-data-officer
- https://www.gofractional.com/blog/what-is-a-CRO
- https://www.gofractional.com/blog/fractional-ciso

### GoFractional Interim Pages
- https://www.gofractional.com/blog/what-is-an-interim-cto
- https://www.gofractional.com/blog/what-is-an-interim-coo
- https://www.gofractional.com/blog/what-is-an-interim-ceo
- https://www.gofractional.com/blog/what-is-an-interim-cmo
- https://www.gofractional.com/blog/what-is-an-interim-chro
- https://www.gofractional.com/blog/what-is-an-interim-cio
- https://www.gofractional.com/blog/what-is-interim-ciso
- https://www.gofractional.com/blog/what-is-interim-cfo
- https://www.gofractional.com/blog/what-is-an-interim-cpo
- https://www.gofractional.com/blog/what-is-an-interim-cro

---

## Sign-Off

**Prepared by:** Claude (AI Assistant)
**For:** Dan Keegan
**Date:** December 2025

**Next Steps:**
1. Review and approve PRD
2. Prioritise Phase 1 pages
3. Create ServicePageTemplate component
4. Begin content production for CFO/CMO/CTO service pages
5. Update homepage messaging

---

*This document serves as the master plan for the Fractional.Quest content pivot. All implementation should reference this PRD.*
