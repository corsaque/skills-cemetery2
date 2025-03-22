'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path) => pathname === path

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-xl font-bold mb-4 md:mb-0">
          Skills Cemetery
        </Link>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/graveyard" 
            className={`hover:text-gray-300 transition-colors ${isActive('/graveyard') ? 'text-gray-300' : ''}`}
          >
            Tombstones of the Fallen
          </Link>
          <Link 
            href="/dying" 
            className={`hover:text-gray-300 transition-colors ${isActive('/dying') ? 'text-gray-300' : ''}`}
          >
            Dying Skills
          </Link>
          <Link 
            href="/resurrected" 
            className={`hover:text-gray-300 transition-colors ${isActive('/resurrected') ? 'text-gray-300' : ''}`}
          >
            Skills Revived by Magic
          </Link>
          <Link 
            href="/submit" 
            className={`hover:text-gray-300 transition-colors ${isActive('/submit') ? 'text-gray-300' : ''}`}
          >
            Submit a Skill
          </Link>
        </div>
      </div>
    </nav>
  )
} 