'use client'

import React from 'react'
import Link from 'next/link'
import { Menu, X, Podcast, Video, FileText, Brain, Settings } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Podcasts', href: '/podcasts', icon: Podcast },
  { name: 'Lives', href: '/lives', icon: Video },
  { name: 'Blog', href: '/blog', icon: FileText },
  { name: 'Quizzes', href: '/quizzes', icon: Brain },
  { name: 'Versões', href: '/versions', icon: Settings },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo_seisi.png"
              alt="Logo SESI"
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-emerald-600",
                  pathname === item.href
                    ? "text-emerald-600 border-b-2 border-emerald-600 pb-1"
                    : "text-gray-700"
                )}
              >
                <Icon className="w-4 h-4" />
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="hidden md:block">
          <Link
            href="/versions"
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
          >
            Escolher Versão
          </Link>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 py-4">
          <div className="space-y-4">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 text-base font-medium transition-colors",
                    pathname === item.href
                      ? "text-emerald-600"
                      : "text-gray-700 hover:text-emerald-600"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </Link>
              )
            })}
            <Link
              href="/versions"
              className="block bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Escolher Versão
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
