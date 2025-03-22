import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Skills Cemetery',
  description: 'A place to track dying, dead, and resurrected programming skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <main className="min-h-screen p-8">
          {children}
        </main>
      </body>
    </html>
  )
}
