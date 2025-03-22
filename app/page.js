'use client'

import Link from 'next/link'
import StatisticsCounter from './components/StatisticsCounter'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to the Skills Cemetery
      </h1>
      
      <StatisticsCounter />

      <div className="text-center space-y-4">
        <p className="text-lg text-gray-600">
          Track the lifecycle of programming skills in our mystical graveyard.
        </p>
        <Link 
          href="/submit" 
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Submit a Skill
        </Link>
      </div>
    </div>
  )
}
