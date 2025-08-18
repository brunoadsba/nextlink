'use client'

import { useState } from 'react'
import Card, { CardProps } from './Card'
import { Filter, Search, Grid, List } from 'lucide-react'

interface CardGridProps {
  cards: CardProps[]
  showFilters?: boolean
  showViewToggle?: boolean
}

export default function CardGrid({ 
  cards, 
  showFilters = true, 
  showViewToggle = true 
}: CardGridProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // Extrair categorias e tipos únicos
  const categories = ['all', ...Array.from(new Set(cards.map(card => card.category)))]
  const types = ['all', ...Array.from(new Set(cards.map(card => card.type)))]

  // Filtrar cards
  const filteredCards = cards.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         card.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || card.category === selectedCategory
    const matchesType = selectedType === 'all' || card.type === selectedType

    return matchesSearch && matchesCategory && matchesType
  })

  return (
    <div className="space-y-8">
      {/* Filtros e Controles */}
      {showFilters && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Barra de Pesquisa */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Pesquisar cards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            {/* Filtros */}
            <div className="flex flex-wrap gap-3">
              {/* Filtro de Categoria */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'Todas as Categorias' : category}
                  </option>
                ))}
              </select>

              {/* Filtro de Tipo */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'Todos os Tipos' : type}
                  </option>
                ))}
              </select>
            </div>

            {/* Toggle de Visualização */}
            {showViewToggle && (
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-white dark:bg-gray-600 text-emerald-600 dark:text-emerald-400 shadow-sm' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-white dark:bg-gray-600 text-emerald-600 dark:text-emerald-400 shadow-sm' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Contador de Resultados */}
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            {filteredCards.length} de {cards.length} cards encontrados
          </div>
        </div>
      )}

      {/* Grid de Cards */}
      {filteredCards.length > 0 ? (
        <div className={
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-4'
        }>
          {filteredCards.map((card, index) => (
            <div key={card.id} className={viewMode === 'list' ? 'w-full' : ''}>
              <Card {...card} priority={index < 4} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Filter className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
            Nenhum card encontrado
          </h3>
          <p className="text-gray-500 dark:text-gray-500">
            Tente ajustar os filtros ou termos de pesquisa
          </p>
        </div>
      )}
    </div>
  )
}
