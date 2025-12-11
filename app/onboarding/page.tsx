'use client'

import { useUser } from '@stackframe/stack'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const ROLE_OPTIONS = [
  'Fractional CFO',
  'Fractional CMO',
  'Fractional CTO',
  'Fractional COO',
  'Fractional CHRO',
  'Fractional CPO',
  'Other Executive Role',
]

const TIMELINE_OPTIONS = [
  'Immediately',
  'Within 1 month',
  'Within 3 months',
  'Within 6 months',
  'Just exploring',
]

const BUDGET_OPTIONS = [
  '£500-750/day',
  '£750-1000/day',
  '£1000-1500/day',
  '£1500+/day',
  'Not sure yet',
]

export default function OnboardingPage() {
  const user = useUser({ or: 'redirect' })
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    first_name: '',
    current_country: 'United Kingdom',
    interests: [] as string[],
    budget: '',
    timeline: '',
  })

  if (!user) return null

  // Pre-fill first name from Stack Auth if available
  if (!formData.first_name && user.displayName) {
    setFormData(prev => ({
      ...prev,
      first_name: user.displayName?.split(' ')[0] || ''
    }))
  }

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      await fetch('/api/user-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      router.push('/dashboard')
    } catch (error) {
      console.error('Error saving profile:', error)
      setIsSubmitting(false)
    }
  }

  const canProceed = () => {
    if (step === 1) return formData.first_name.trim().length > 0
    if (step === 2) return formData.interests.length > 0
    if (step === 3) return formData.timeline.length > 0
    return true
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Step {step} of 3</span>
            <Link href="/dashboard" className="text-sm text-purple-600 hover:text-purple-700">
              Skip for now
            </Link>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-600 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Name */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome to Fractional.Quest!
            </h1>
            <p className="text-gray-600 mb-6">
              Let's personalize your experience. What should we call you?
            </p>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                value={formData.first_name}
                onChange={(e) => setFormData(prev => ({ ...prev, first_name: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your first name"
                autoFocus
              />
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!canProceed()}
              className="w-full py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Interests */}
        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              What roles interest you, {formData.first_name}?
            </h1>
            <p className="text-gray-600 mb-6">
              Select all that apply - we'll tailor job recommendations.
            </p>

            <div className="grid grid-cols-1 gap-3 mb-6">
              {ROLE_OPTIONS.map((role) => (
                <button
                  key={role}
                  onClick={() => handleInterestToggle(role)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    formData.interests.includes(role)
                      ? 'border-purple-600 bg-purple-50 text-purple-700'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <span className="font-medium">{role}</span>
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!canProceed()}
                className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Timeline & Budget */}
        {step === 3 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Almost there!
            </h1>
            <p className="text-gray-600 mb-6">
              When are you looking to start, and what's your day rate expectation?
            </p>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Timeline
              </label>
              <div className="grid grid-cols-1 gap-2">
                {TIMELINE_OPTIONS.map((option) => (
                  <button
                    key={option}
                    onClick={() => setFormData(prev => ({ ...prev, timeline: option }))}
                    className={`p-3 rounded-xl border-2 text-left transition-all ${
                      formData.timeline === option
                        ? 'border-purple-600 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Expected Day Rate (optional)
              </label>
              <div className="grid grid-cols-1 gap-2">
                {BUDGET_OPTIONS.map((option) => (
                  <button
                    key={option}
                    onClick={() => setFormData(prev => ({ ...prev, budget: option }))}
                    className={`p-3 rounded-xl border-2 text-left transition-all ${
                      formData.budget === option
                        ? 'border-purple-600 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Saving...' : 'Complete Setup'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
