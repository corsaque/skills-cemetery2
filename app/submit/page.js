'use client'

import { useState } from 'react'

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    name: '',
    status: 'dying',
    description: '',
    genai_impact: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await fetch('/api/skills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit skill')
      }

      setMessage('Skill submitted successfully!')
      setFormData({
        name: '',
        status: 'dying',
        description: '',
        genai_impact: false
      })
    } catch (error) {
      setMessage('Error submitting skill. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Submit a Skill</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Skill Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={100}
              className="form-input mt-1"
            />
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              className="form-input mt-1"
            >
              <option value="dying">Dying</option>
              <option value="dead">Dead</option>
              <option value="resurrected">Resurrected</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              maxLength={500}
              rows={3}
              className="form-input mt-1"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="genai_impact"
              name="genai_impact"
              checked={formData.genai_impact}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="genai_impact" className="ml-2 block text-sm text-gray-700">
              Impacted by GenAI
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Skill'}
          </button>

          {message && (
            <p className={`mt-2 text-sm ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  )
} 