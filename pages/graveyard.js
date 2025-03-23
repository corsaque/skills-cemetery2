// filepath: /pages/tombstones.js
import { useEffect, useState } from 'react';

export default function TombstonesPage() {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchSkills() {
      try {
        const response = await fetch('/api/skills/graveyard');
        if (!response.ok) throw new Error('Failed to fetch dead skills');
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
      <h1>Tombstones of the Fallen</h1>
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