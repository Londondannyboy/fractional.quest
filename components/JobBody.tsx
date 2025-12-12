'use client'

import React from 'react'

interface JobBodyProps {
  content: string
  className?: string
}

interface Section {
  title: string
  content: string[]
  type: 'paragraph' | 'list'
}

// Common section headers we might find in job descriptions
const SECTION_PATTERNS = [
  // About sections
  /^(About|About Us|About the Company|About the Role|The Opportunity|Overview|Introduction|Who We Are|Company Overview)/i,
  // Responsibilities
  /^(Responsibilities|Key Responsibilities|What You['']ll Do|Your Role|The Role|Your Responsibilities|What you will do|Day to Day)/i,
  // Requirements
  /^(Requirements|What You['']ll Bring|What We['']re Looking For|Qualifications|Skills Required|Experience Required|What you need|Must Have|Essential)/i,
  // Nice to have
  /^(Nice to Have|Bonus Points|Preferred|Desirable|Plus Points|Good to Have)/i,
  // Benefits
  /^(Benefits|What We Offer|Perks|Package|Why Join Us|What['']s in it for you|Compensation|Reward)/i,
  // How to apply
  /^(How to Apply|Application|Next Steps|Apply Now|Interested\?)/i,
  // Engagement details
  /^(Engagement Details|Contract Details|Role Details|Position Details|Working Arrangement)/i,
]

function detectSectionType(text: string): 'heading' | 'list-item' | 'paragraph' {
  // Check if it matches a section header
  for (const pattern of SECTION_PATTERNS) {
    if (pattern.test(text.trim())) {
      return 'heading'
    }
  }

  // Check for list items (starts with bullet, dash, number, or common patterns)
  if (/^[\-•●◦▪\*]\s/.test(text.trim()) || /^\d+[\.\)]\s/.test(text.trim())) {
    return 'list-item'
  }

  return 'paragraph'
}

function parseJobDescription(content: string): Section[] {
  if (!content) return []

  const sections: Section[] = []
  let currentSection: Section = { title: '', content: [], type: 'paragraph' }

  // Split by common delimiters - look for section breaks
  // First, normalize line endings and split intelligently
  const normalized = content
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    // Add line breaks before common section headers
    .replace(/(About|Responsibilities|Requirements|Benefits|What You|The Role|Key |Your )/gi, '\n\n$1')
    // Clean up excessive whitespace
    .replace(/\n{3,}/g, '\n\n')

  const lines = normalized.split('\n').filter(line => line.trim())

  let currentListItems: string[] = []

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue

    const lineType = detectSectionType(trimmed)

    if (lineType === 'heading') {
      // Save previous section if it has content
      if (currentSection.content.length > 0 || currentListItems.length > 0) {
        if (currentListItems.length > 0) {
          sections.push({ ...currentSection, content: currentListItems, type: 'list' })
          currentListItems = []
        } else {
          sections.push(currentSection)
        }
      }
      // Start new section
      currentSection = { title: trimmed, content: [], type: 'paragraph' }
    } else if (lineType === 'list-item') {
      // Clean the list item marker
      const cleanedItem = trimmed.replace(/^[\-•●◦▪\*]\s*/, '').replace(/^\d+[\.\)]\s*/, '')
      currentListItems.push(cleanedItem)
    } else {
      // It's a paragraph
      if (currentListItems.length > 0) {
        // Save accumulated list items
        sections.push({ title: currentSection.title, content: currentListItems, type: 'list' })
        currentListItems = []
        currentSection = { title: '', content: [], type: 'paragraph' }
      }

      // Add to current section content
      if (currentSection.title) {
        currentSection.content.push(trimmed)
      } else {
        // No title yet, this is intro content
        sections.push({ title: '', content: [trimmed], type: 'paragraph' })
      }
    }
  }

  // Don't forget the last section
  if (currentListItems.length > 0) {
    sections.push({ title: currentSection.title, content: currentListItems, type: 'list' })
  } else if (currentSection.content.length > 0) {
    sections.push(currentSection)
  }

  return sections
}

// Fallback: if parsing doesn't produce good results, format as rich paragraphs
function formatAsRichText(content: string): string[] {
  if (!content) return []

  // Split on sentence endings followed by capital letters (new sentences/sections)
  const sentences = content
    .replace(/([.!?])\s+([A-Z])/g, '$1\n\n$2')
    .split('\n\n')
    .filter(s => s.trim())

  // Group into paragraphs of ~3-4 sentences
  const paragraphs: string[] = []
  let current = ''
  let sentenceCount = 0

  for (const sentence of sentences) {
    current += (current ? ' ' : '') + sentence.trim()
    sentenceCount++

    if (sentenceCount >= 3 || sentence.endsWith(':')) {
      paragraphs.push(current)
      current = ''
      sentenceCount = 0
    }
  }

  if (current) {
    paragraphs.push(current)
  }

  return paragraphs
}

export function JobBody({ content, className = '' }: JobBodyProps) {
  const sections = parseJobDescription(content)

  // If we couldn't parse meaningful sections, use rich text fallback
  if (sections.length <= 1 && content.length > 500) {
    const paragraphs = formatAsRichText(content)
    return (
      <div className={`space-y-6 ${className}`}>
        {paragraphs.map((para, idx) => (
          <p key={idx} className="text-lg text-gray-700 leading-8">
            {para}
          </p>
        ))}
      </div>
    )
  }

  return (
    <div className={`space-y-10 ${className}`}>
      {sections.map((section, idx) => (
        <div key={idx} className="group">
          {/* Section Title */}
          {section.title && (
            <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-purple-100 group-hover:border-purple-300 transition-colors">
              {section.title}
            </h3>
          )}

          {/* Section Content */}
          {section.type === 'list' ? (
            <ul className="space-y-3">
              {section.content.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 mt-2.5 bg-purple-500 rounded-full" />
                  <span className="text-lg text-gray-700 leading-7">{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="space-y-4">
              {section.content.map((para, paraIdx) => (
                <p key={paraIdx} className="text-lg text-gray-700 leading-8">
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
