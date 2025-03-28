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