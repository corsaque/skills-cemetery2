// filepath: /pages/api/skills/resurrected.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .eq('status', 'resurrected')
        .eq('approval_status', 'approved');

      if (error) throw error;

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch resurrected skills', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// filepath: /pages/resurrected.js
import { useEffect, useState } from 'react';

export default function ResurrectedSkillsPage() {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchSkills() {
      try {
        const response = await fetch('/api/skills/resurrected');
        if (!response.ok) throw new Error('Failed to fetch resurrected skills');
        const data = await response.json();
        setSkills(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchSkills();
  }, []);

  return (
    <div>
      <h1>Skills Revived by Magic</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}