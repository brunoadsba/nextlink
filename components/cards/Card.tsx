'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Clock, Tag, ExternalLink } from 'lucide-react'

export interface CardProps {
  id: string
  title: string
  description: string
  image: string
  link: string
  readTime: string
  category: string
  tags: string[]
  type: 'article' | 'podcast' | 'live' | 'quiz'
  priority?: boolean
}

export default function Card({
  title,
  description,
  image,
  link,
  readTime,
  category,
  tags,
  type,
  priority = false
}: CardProps) {
  const getTypeIcon = () => {
    switch (type) {
      case 'podcast':
        return '🎧'
      case 'live':
        return '📺'
      case 'quiz':
        return '🧠'
      default:
        return '📄'
    }
  }

  const getTypeColor = () => {
    switch (type) {
      case 'podcast':
        return 'bg-purple-500'
      case 'live':
        return 'bg-red-500'
      case 'quiz':
        return 'bg-green-500'
      default:
        return 'bg-blue-500'
    }
  }

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Imagem do Card */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Badge de Tipo */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white ${getTypeColor()}`}>
            {getTypeIcon()} {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </div>

        {/* Badge de Categoria */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white bg-gray-800/80 backdrop-blur-sm">
            <Tag className="w-3 h-3" />
            {category}
          </span>
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6">
        {/* Título */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>

        {/* Descrição */}
        <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed mb-3 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/30 rounded-full"
            >
              #{tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="inline-block px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">
              +{tags.length - 3}
            </span>
          )}
        </div>

        {/* Footer do Card */}
        <div className="flex items-center justify-between">
          {/* Tempo de Leitura */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>

          {/* Link */}
          <Link
            href={link}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors group/link"
          >
            <span>Ver mais</span>
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
