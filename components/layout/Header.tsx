'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Podcast, Video, FileText, Brain, Settings } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

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
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm dark:shadow-gray-800/50 transition-colors duration-300">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/sesi.png"
              alt="Logo SESI"
              width={120}
              height={48}
              className="h-12 w-auto"
              priority
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
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-emerald-600 dark:text-gray-200 dark:hover:text-emerald-400",
                  pathname === item.href
                    ? "text-emerald-600 border-b-2 border-emerald-600 pb-1 dark:text-emerald-400 dark:border-emerald-400"
                    : "text-gray-700 dark:text-gray-200"
                )}
              >
                <Icon className="w-4 h-4" />
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Link
            href="/versions"
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Escolher Versão
          </Link>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-700 dark:text-gray-200"
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
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
          <div className="space-y-4 px-4">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 text-base font-medium transition-colors",
                    pathname === item.href
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </Link>
              )
            })}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <ThemeToggle />
                <Link
                  href="/versions"
                  className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Escolher Versão
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
