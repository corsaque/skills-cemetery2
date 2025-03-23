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
    <div className="bg-dark-charcoal text-pale-cream min-h-screen p-8">
      <h1 className="text-4xl font-serif mb-6">Tombstones of the Fallen</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(skill => (
          <li
            key={skill.id}
            className="bg-gray-800 p-4 rounded shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-bold">{skill.name}</h2>
            <p className="text-sm italic">{skill.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}