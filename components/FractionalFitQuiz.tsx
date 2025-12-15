'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Question {
  id: string
  question: string
  options: {
    text: string
    score: number
    feedback?: string
  }[]
}

const QUESTIONS: Question[] = [
  {
    id: 'experience',
    question: 'How many years of professional experience do you have?',
    options: [
      { text: 'Less than 10 years', score: 0, feedback: 'Most fractional roles require 15+ years' },
      { text: '10-15 years', score: 5, feedback: 'You\'re getting close to fractional-ready' },
      { text: '15-20 years', score: 10, feedback: 'Ideal experience level for fractional work' },
      { text: '20+ years', score: 10, feedback: 'Perfect experience for senior fractional roles' },
    ]
  },
  {
    id: 'leadership',
    question: 'What is your highest leadership role achieved?',
    options: [
      { text: 'Manager or below', score: 2 },
      { text: 'Senior Manager / Head of', score: 5 },
      { text: 'Director / VP', score: 8 },
      { text: 'C-Level (CEO, CFO, CTO, etc.)', score: 10 },
    ]
  },
  {
    id: 'income_stability',
    question: 'How comfortable are you with variable income?',
    options: [
      { text: 'I need completely stable, predictable income', score: 2 },
      { text: 'Some variation is okay if I can plan around it', score: 6 },
      { text: 'I\'m comfortable with fluctuating income', score: 8 },
      { text: 'I thrive on building my own income streams', score: 10 },
    ]
  },
  {
    id: 'autonomy',
    question: 'How do you feel about managing your own schedule and workload?',
    options: [
      { text: 'I prefer structure and someone else setting priorities', score: 2 },
      { text: 'I\'m okay with some autonomy but like guidance', score: 5 },
      { text: 'I enjoy setting my own priorities most of the time', score: 8 },
      { text: 'I\'m highly self-directed and love controlling my time', score: 10 },
    ]
  },
  {
    id: 'context_switching',
    question: 'How well do you handle context switching between different projects?',
    options: [
      { text: 'I prefer to focus deeply on one thing at a time', score: 3 },
      { text: 'I can switch occasionally but need transition time', score: 5 },
      { text: 'I\'m comfortable switching between 2-3 contexts', score: 8 },
      { text: 'I thrive on variety and multiple simultaneous projects', score: 10 },
    ]
  },
  {
    id: 'networking',
    question: 'How strong is your professional network?',
    options: [
      { text: 'Limited - I haven\'t focused on networking', score: 2 },
      { text: 'Moderate - I know some people in my field', score: 5 },
      { text: 'Good - I have solid connections in my industry', score: 8 },
      { text: 'Excellent - I\'m well-known and well-connected', score: 10 },
    ]
  },
  {
    id: 'business_development',
    question: 'How do you feel about finding your own clients/opportunities?',
    options: [
      { text: 'I prefer roles where work comes to me', score: 2 },
      { text: 'I can do it but don\'t enjoy it', score: 5 },
      { text: 'I\'m comfortable with some business development', score: 8 },
      { text: 'I enjoy building relationships and winning new work', score: 10 },
    ]
  },
  {
    id: 'financial_runway',
    question: 'How long could you sustain yourself without income while building your fractional practice?',
    options: [
      { text: 'Less than 3 months', score: 3 },
      { text: '3-6 months', score: 6 },
      { text: '6-12 months', score: 9 },
      { text: '12+ months', score: 10 },
    ]
  },
]

interface FractionalFitQuizProps {
  className?: string
}

export function FractionalFitQuiz({ className = '' }: FractionalFitQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (score: number) => {
    const newAnswers = {
      ...answers,
      [QUESTIONS[currentQuestion].id]: score
    }
    setAnswers(newAnswers)

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0)
  const maxScore = QUESTIONS.length * 10
  const percentage = Math.round((totalScore / maxScore) * 100)

  const getResultsData = () => {
    if (percentage >= 80) {
      return {
        title: 'Highly Suited for Fractional Work',
        color: 'green',
        message: 'You have the experience, mindset, and circumstances that make fractional work an excellent fit. You\'re likely to thrive in a portfolio career.',
        recommendation: 'Start building your fractional practice now. Focus on defining your niche and reaching out to your network.',
        roles: ['Fractional CFO', 'Fractional CMO', 'Fractional CTO', 'Fractional COO']
      }
    } else if (percentage >= 60) {
      return {
        title: 'Good Potential for Fractional Work',
        color: 'amber',
        message: 'You have many of the qualities needed for fractional work, with some areas to develop. With the right preparation, you could succeed.',
        recommendation: 'Consider starting with one fractional client while employed to test the waters. Build your network and financial runway.',
        roles: ['Fractional CFO', 'Fractional CMO', 'Fractional CTO']
      }
    } else if (percentage >= 40) {
      return {
        title: 'Some Development Needed',
        color: 'orange',
        message: 'Fractional work could be possible but you may need to address some gaps first. Focus on building experience and financial stability.',
        recommendation: 'Work on gaining more senior leadership experience and building your network before transitioning to fractional work.',
        roles: ['Part-time Executive', 'Advisory Roles', 'Board Positions']
      }
    } else {
      return {
        title: 'Consider Building More Foundation',
        color: 'red',
        message: 'Fractional work might not be the right fit currently. Focus on building the experience and stability that fractional clients expect.',
        recommendation: 'Continue in full-time roles to build your track record. Fractional work will be more accessible with 15+ years of experience.',
        roles: ['Full-time Executive', 'Senior Leadership', 'Director Roles']
      }
    }
  }

  const results = getResultsData()

  // JSON-LD Schema
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    'name': 'Is Fractional Work Right for You?',
    'description': 'Take this quiz to discover if you\'re suited for a fractional executive career in the UK',
    'about': {
      '@type': 'Thing',
      'name': 'Fractional Executive Careers'
    }
  }

  if (showResults) {
    return (
      <div className={`bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden ${className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        <div className={`p-6 text-white ${
          results.color === 'green' ? 'bg-gradient-to-r from-green-600 to-green-800' :
          results.color === 'amber' ? 'bg-gradient-to-r from-amber-500 to-amber-700' :
          results.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-orange-700' :
          'bg-gradient-to-r from-red-500 to-red-700'
        }`}>
          <h3 className="text-2xl font-bold mb-2">Your Results</h3>
          <div className="text-5xl font-black">{percentage}%</div>
          <p className="text-white/80 mt-1">Fractional Fit Score</p>
        </div>

        <div className="p-6 md:p-8">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">{results.title}</h4>
          <p className="text-gray-600 mb-6">{results.message}</p>

          <div className="bg-purple-50 rounded-xl p-6 mb-6">
            <h5 className="font-semibold text-purple-900 mb-2">Our Recommendation</h5>
            <p className="text-purple-800">{results.recommendation}</p>
          </div>

          <div className="mb-6">
            <h5 className="font-semibold text-gray-900 mb-3">Suggested Roles to Explore</h5>
            <div className="flex flex-wrap gap-2">
              {results.roles.map(role => (
                <span key={role} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Score Breakdown */}
          <div className="border border-gray-200 rounded-xl p-4 mb-6">
            <h5 className="font-semibold text-gray-900 mb-3">Your Score Breakdown</h5>
            <div className="space-y-2">
              {QUESTIONS.map(q => (
                <div key={q.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">{q.question.replace('?', '')}</span>
                  <span className="font-medium text-gray-900">{answers[q.id]}/10</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={resetQuiz}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
            >
              Retake Quiz
            </button>
            <Link
              href="/fractional-jobs"
              className="px-6 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition-colors text-center"
            >
              Browse Fractional Jobs UK
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const question = QUESTIONS[currentQuestion]
  const progress = ((currentQuestion) / QUESTIONS.length) * 100

  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Is Fractional Work Right for You?</h3>
        <p className="text-purple-200">Answer 8 questions to find out if you&apos;re suited for a fractional executive career</p>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-gray-200">
        <div
          className="h-2 bg-purple-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="p-6 md:p-8">
        {/* Question Counter */}
        <div className="text-sm text-gray-500 mb-4">
          Question {currentQuestion + 1} of {QUESTIONS.length}
        </div>

        {/* Question */}
        <h4 className="text-xl font-bold text-gray-900 mb-6">{question.question}</h4>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.score)}
              className="w-full text-left p-4 border border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-colors group"
            >
              <span className="font-medium text-gray-900 group-hover:text-purple-700">
                {option.text}
              </span>
            </button>
          ))}
        </div>

        {/* Navigation hint */}
        {currentQuestion > 0 && (
          <button
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            className="mt-6 text-sm text-gray-500 hover:text-purple-700"
          >
            &larr; Previous question
          </button>
        )}
      </div>
    </div>
  )
}
