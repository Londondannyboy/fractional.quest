#!/usr/bin/env python3
"""
Fix Duplicate Internal Links - Simple Python Version

Removes duplicate internal link URLs, keeping only the first occurrence.
No AI needed - just regex replacement.
"""

import os
import re

import psycopg2
from psycopg2.extras import RealDictCursor

from dotenv import load_dotenv
load_dotenv('.env.local')
load_dotenv()


def remove_duplicate_links(text: str) -> tuple[str, int, int]:
    """
    Remove duplicate internal link URLs, keeping first occurrence.
    For duplicate URLs, convert subsequent ones to plain text.

    Returns: (updated_text, original_link_count, final_link_count)
    """
    if not text:
        return text, 0, 0

    # Find all markdown links with their positions
    link_pattern = r'\[([^\]]+)\]\((/fractional-jobs[^)]*)\)'

    seen_urls = set()
    result = text
    removed_count = 0

    # Find all matches
    matches = list(re.finditer(link_pattern, text))
    original_count = len(matches)

    # Process in reverse order to maintain positions
    for match in reversed(matches):
        url = match.group(2)
        link_text = match.group(1)

        if url in seen_urls:
            # This is a duplicate - remove the link syntax, keep the text
            result = result[:match.start()] + link_text + result[match.end():]
            removed_count += 1
        else:
            seen_urls.add(url)

    final_count = original_count - removed_count
    return result, original_count, final_count


def get_db_connection():
    """Get database connection"""
    database_url = os.environ.get('DATABASE_URL')
    if not database_url:
        raise ValueError("DATABASE_URL environment variable not set")
    return psycopg2.connect(database_url)


def fetch_jobs_with_duplicates(conn, limit: int = 1000) -> list[dict]:
    """Fetch jobs that have duplicate internal link URLs"""
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute("""
            SELECT id, title, company_name, role_category, full_description
            FROM jobs
            WHERE is_active = true
            AND full_description LIKE '%%](/fractional-jobs%%'
            ORDER BY posted_date DESC NULLS LAST
            LIMIT %s
        """, (limit,))

        jobs = []
        for row in cur.fetchall():
            desc = row['full_description'] or ''
            urls = re.findall(r'\]\((/fractional-jobs[^)]*)\)', desc)
            if len(urls) != len(set(urls)):
                jobs.append(dict(row))

        return jobs


def update_job_description(conn, job_id: str, new_description: str):
    """Update job with fixed description"""
    with conn.cursor() as cur:
        cur.execute("""
            UPDATE jobs
            SET full_description = %s,
                updated_date = NOW()
            WHERE id = %s
        """, (new_description, job_id))


def process_jobs(limit: int = 1000, dry_run: bool = False):
    """Main processing function"""
    conn = get_db_connection()

    try:
        jobs = fetch_jobs_with_duplicates(conn, limit)
        print(f"Found {len(jobs)} jobs with duplicate internal links")

        if not jobs:
            print("No jobs to fix!")
            return

        print(f"\n{'='*60}")
        print(f"FIXING DUPLICATE INTERNAL LINKS")
        print(f"{'='*60}\n")

        fixed_count = 0

        for i, job in enumerate(jobs):
            print(f"\n[{i+1}/{len(jobs)}] {job['title'][:50]}")

            fixed_text, original, final = remove_duplicate_links(job['full_description'])

            if original != final:
                print(f"    {original} links → {final} links (removed {original - final} duplicates)")

                if not dry_run:
                    update_job_description(conn, job['id'], fixed_text)
                    conn.commit()
                    print(f"    ✓ Fixed")
                else:
                    print(f"    (dry run - not saved)")

                fixed_count += 1
            else:
                print(f"    No duplicates found (false positive)")

        print(f"\n{'='*60}")
        print(f"COMPLETE: {fixed_count} jobs fixed")
        if dry_run:
            print("(DRY RUN - no changes saved)")
        print(f"{'='*60}\n")

    finally:
        conn.close()


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description='Fix duplicate internal links in job descriptions')
    parser.add_argument('--limit', type=int, default=1000, help='Number of jobs to process')
    parser.add_argument('--dry-run', action='store_true', help='Preview changes without saving')

    args = parser.parse_args()

    print(f"\nFixing Duplicate Internal Links...")
    print(f"Limit: {args.limit}")
    print(f"Dry run: {args.dry_run}")

    process_jobs(limit=args.limit, dry_run=args.dry_run)
