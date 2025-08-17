'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/lib/theme-context'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
    >
      <div className={`transition-transform duration-500 ${theme === 'dark' ? 'rotate-180' : 'rotate-0'}`}>
        {theme === 'light' ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </div>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-white/20 scale-0 opacity-0 group-active:scale-150 group-active:opacity-0 transition-all duration-200" />
    </button>
  )
}
