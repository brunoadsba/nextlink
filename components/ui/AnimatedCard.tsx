'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useTheme } from '@/lib/theme-context'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hover?: boolean
}

export function AnimatedCard({ children, className = '', delay = 0, hover = true }: AnimatedCardProps) {
  const { theme } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [isInView, setIsInView] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 100)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.querySelector(`[data-card="${delay}"]`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [delay])

  const baseClasses = theme === 'dark' ? 'glass-dark' : 'glass-light'
  
  return (
    <div
      data-card={delay}
      className={`
        ${baseClasses} 
        rounded-2xl p-6 
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${isInView ? 'animate-fade-in' : ''}
        ${hover ? 'hover:-translate-y-2 hover:scale-105' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
