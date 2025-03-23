'use client';

import Link from 'next/link';
import StatisticsCounter from './components/StatisticsCounter';
import FloatingSymbols from './components/FloatingSymbols'; // Import the floating symbols component

export default function Home() {
  return (
    <div className="bg-dark-charcoal text-pale-cream min-h-screen relative overflow-hidden">
      {/* Floating Symbols */}
      <FloatingSymbols />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center p-8">
        {/* Title */}
        <h1 className="text-5xl font-serif text-center mb-8 text-pale-cream glow-effect">
          Cemetery of Lost Skills
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-400 text-center max-w-3xl mb-8">
          Welcome, traveler, to the hallowed grounds where Generative AI reaps what once thrived.
          The mighty have fallen—skills once deemed essential now lie in ruin, casualties of automation and artificial intelligence. Witness the obsolescence, mark the next to perish, and perhaps, uncover the rare few that rise again from the digital abyss.
        </p>

        {/* Statistics Counter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Total Dead Skills</h2>
            <p className="text-4xl mt-4">42</p>
          </div>
          <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Dying Skills</h2>
            <p className="text-4xl mt-4">18</p>
          </div>
          <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Resurrected Skills</h2>
            <p className="text-4xl mt-4">6</p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <Link
          href="/submit"
          className="inline-block bg-gray-700 text-pale-cream px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors shadow-md mb-12"
        >
          Submit a Skill to the Grave
        </Link>

        {/* Section Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Tombstones of the Fallen</h3>
            <p className="text-sm mt-4">
              View the memorial of obsolete skills from eras gone by.
            </p>
          </div>
          <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Dying Skills</h3>
            <p className="text-sm mt-4">
              Witness technologies on their death bed, fading into obsolescence.
            </p>
          </div>
          <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Skills Revived by Magic</h3>
            <p className="text-sm mt-4">
              Discover old technologies that have been resurrected by newer trends.
            </p>
          </div>
          <div className="bg-gray-800 text-center p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Submit a Skill</h3>
            <p className="text-sm mt-4">
              Nominate a technology for inclusion in our mournful records.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
