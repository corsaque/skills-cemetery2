'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/app/lib/supabase'

export default function StatisticsCounter() {
  const [stats, setStats] = useState({
    dead: 0,
    dying: 0,
    resurrected: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      // Count skills by status where approval_status is 'approved'
      const { data: deadSkills, error: deadError } = await supabase
        .from('skills')
        .select('id')
        .eq('status', 'dead')
        .eq('approval_status', 'approved')

      const { data: dyingSkills, error: dyingError } = await supabase
        .from('skills')
        .select('id')
        .eq('status', 'dying')
        .eq('approval_status', 'approved')

      const { data: resurrectedSkills, error: resurrectedError } = await supabase
        .from('skills')
        .select('id')
        .eq('status', 'resurrected')
        .eq('approval_status', 'approved')

      if (deadError || dyingError || resurrectedError) {
        throw new Error('Error fetching statistics')
      }

      setStats({
        dead: deadSkills?.length || 0,
        dying: dyingSkills?.length || 0,
        resurrected: resurrectedSkills?.length || 0
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-red-100 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold text-red-800 mb-2">Dead Skills</h2>
        <p className="text-4xl font-bold text-red-600">
          {loading ? '...' : stats.dead}
        </p>
      </div>
      
      <div className="bg-yellow-100 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold text-yellow-800 mb-2">Dying Skills</h2>
        <p className="text-4xl font-bold text-yellow-600">
          {loading ? '...' : stats.dying}
        </p>
      </div>
      
      <div className="bg-green-100 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold text-green-800 mb-2">Resurrected Skills</h2>
        <p className="text-4xl font-bold text-green-600">
          {loading ? '...' : stats.resurrected}
        </p>
      </div>
    </div>
  )
} 