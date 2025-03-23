// filepath: /pages/dying.js
import { useEffect, useState } from 'react';

export default function DyingSkillsPage() {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchSkills() {
      try {
        // Update the fetch URL to match the renamed API route
        const response = await fetch('/api/skills/dying');
        if (!response.ok) throw new Error('Failed to fetch dying skills');
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
      <h1>Dying Skills</h1>
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