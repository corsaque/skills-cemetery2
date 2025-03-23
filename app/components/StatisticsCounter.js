'use client';

import { useEffect, useState } from 'react';

export default function StatisticsCounter() {
  const [stats, setStats] = useState({ dead: 0, dying: 0, resurrected: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/statistics');
      if (!response.ok) throw new Error('Failed to fetch statistics');
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Error fetching statistics:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-gray-800 bg-opacity-80 text-center p-6 rounded-lg shadow-md border border-gray-600">
        <h2 className="text-2xl font-bold text-gray-300 font-cormorant">Total Dead Skills</h2>
        <p className="text-4xl mt-4 text-gray-400 font-cormorant">
          {loading ? '...' : stats.dead}
        </p>
      </div>
      <div className="bg-gray-800 bg-opacity-80 text-center p-6 rounded-lg shadow-md border border-gray-600">
        <h2 className="text-2xl font-bold text-yellow-500 font-cormorant">Dying Skills</h2>
        <p className="text-4xl mt-4 text-yellow-400 font-cormorant">
          {loading ? '...' : stats.dying}
        </p>
      </div>
      <div className="bg-gray-800 bg-opacity-80 text-center p-6 rounded-lg shadow-md border border-gray-600">
        <h2 className="text-2xl font-bold text-green-500 font-cormorant">Resurrected Skills</h2>
        <p className="text-4xl mt-4 text-green-400 font-cormorant">
          {loading ? '...' : stats.resurrected}
        </p>
      </div>
    </div>
  );
}