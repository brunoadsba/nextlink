'use client'

import { useState } from 'react'
import { CardProps } from '@/components/cards/Card'
import CardGrid from '@/components/cards/CardGrid'
import AdminPanel from '@/components/cards/AdminPanel'
import { mockCards } from '@/lib/cards/cardData'
import { Settings, Eye, Users, Mail, BarChart3 } from 'lucide-react'

export default function CardsPage() {
  const [cards, setCards] = useState<CardProps[]>(mockCards)
  const [viewMode, setViewMode] = useState<'public' | 'admin'>('public')
  const [selectedCards, setSelectedCards] = useState<string[]>([])

  const handleSelectCards = (selectedIds: string[]) => {
    setSelectedCards(selectedIds)
    // Aqui você implementaria a lógica para enviar os cards por e-mail
    console.log('Cards selecionados para e-mail:', selectedIds)
  }

  const handleEditCard = (card: CardProps) => {
    // Aqui você implementaria a lógica para editar o card
    console.log('Editando card:', card)
  }

  const handleDeleteCard = (cardId: string) => {
    setCards(prev => prev.filter(card => card.id !== cardId))
  }

  const handleAddCard = () => {
    // Aqui você implementaria a lógica para adicionar novo card
    console.log('Adicionando novo card')
  }

  const getCardStats = () => {
    const stats = {
      total: cards.length,
      byType: {} as Record<string, number>,
      byCategory: {} as Record<string, number>
    }
    
    cards.forEach(card => {
      stats.byType[card.type] = (stats.byType[card.type] || 0) + 1
      stats.byCategory[card.category] = (stats.byCategory[card.category] || 0) + 1
    })
    
    return stats
  }

  const stats = getCardStats()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div>
                          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Cards
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Conteúdos selecionados para compartilhamento por e-mail
            </p>
            </div>

            {/* Toggle de Visualização */}
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('public')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  viewMode === 'public' 
                    ? 'bg-white dark:bg-gray-600 text-emerald-600 dark:text-emerald-400 shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                <Eye className="w-4 h-4" />
                <span className="hidden sm:inline">Visualização</span>
              </button>
              <button
                onClick={() => setViewMode('admin')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  viewMode === 'admin' 
                    ? 'bg-white dark:bg-gray-600 text-emerald-600 dark:text-emerald-400 shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">Admin</span>
              </button>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Categorias</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{Object.keys(stats.byCategory).length}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Selecionados</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{selectedCards.length}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tipos</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{Object.keys(stats.byType).length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-8 py-12">
        {viewMode === 'public' ? (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Conteúdos Disponíveis
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Explore nossa coleção de cards sobre inovação, tecnologia e segurança do trabalho. 
                Cada card é cuidadosamente selecionado para trazer conhecimento relevante e atualizado.
              </p>
            </div>

            <CardGrid 
              cards={cards} 
              showFilters={true} 
              showViewToggle={true} 
            />
          </div>
        ) : (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Painel de Administração
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Gerencie os cards, selecione conteúdos para envio por e-mail e mantenha a biblioteca 
                organizada e atualizada.
              </p>
            </div>

            <AdminPanel
              cards={cards}
              onSelectCards={handleSelectCards}
              onEditCard={handleEditCard}
              onDeleteCard={handleDeleteCard}
              onAddCard={handleAddCard}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="container mx-auto px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Sistema de Cards • NextLink • Instituto SESI de SST
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Gerencie e compartilhe conteúdos de forma eficiente
          </p>
        </div>
      </footer>
    </div>
  )
}
