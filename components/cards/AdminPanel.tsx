'use client'

import { useState } from 'react'
import { CardProps } from './Card'
import { Check, Mail, Settings, Eye, EyeOff, Trash2, Edit, Plus } from 'lucide-react'

interface AdminPanelProps {
  cards: CardProps[]
  onSelectCards: (selectedIds: string[]) => void
  onEditCard: (card: CardProps) => void
  onDeleteCard: (cardId: string) => void
  onAddCard: () => void
}

export default function AdminPanel({
  cards,
  onSelectCards,
  onEditCard,
  onDeleteCard,
  onAddCard
}: AdminPanelProps) {
  const [selectedCards, setSelectedCards] = useState<string[]>([])
  const [showPreview, setShowPreview] = useState(false)
  const [filterType, setFilterType] = useState('all')
  const [filterCategory, setFilterCategory] = useState('all')

  // Filtrar cards
  const filteredCards = cards.filter(card => {
    const matchesType = filterType === 'all' || card.type === filterType
    const matchesCategory = filterCategory === 'all' || card.category === filterCategory
    return matchesType && matchesCategory
  })

  // Extrair categorias e tipos únicos
  const categories = ['all', ...Array.from(new Set(cards.map(card => card.category)))]
  const types = ['all', ...Array.from(new Set(cards.map(card => card.type)))]

  const handleCardSelection = (cardId: string) => {
    setSelectedCards(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    )
  }

  const handleSelectAll = () => {
    if (selectedCards.length === filteredCards.length) {
      setSelectedCards([])
    } else {
      setSelectedCards(filteredCards.map(card => card.id))
    }
  }

  const handleSendEmail = () => {
    onSelectCards(selectedCards)
    setSelectedCards([])
  }

  const getSelectedCardsData = () => {
    return cards.filter(card => selectedCards.includes(card.id))
  }

  return (
    <div className="space-y-6">
      {/* Header do Painel */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Settings className="w-5 h-5 text-emerald-600" />
              Painel de Administração
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Gerencie e selecione cards para envio por e-mail
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showPreview ? 'Ocultar Preview' : 'Preview E-mail'}
            </button>

            <button
              onClick={onAddCard}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Adicionar Card
            </button>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tipo de Conteúdo
            </label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              {types.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'Todos os Tipos' : type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Categoria
            </label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'Todas as Categorias' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Lista de Cards */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Cards Disponíveis ({filteredCards.length})
          </h3>
          
          <div className="flex items-center gap-4">
            <button
              onClick={handleSelectAll}
              className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              {selectedCards.length === filteredCards.length ? 'Desmarcar Todos' : 'Selecionar Todos'}
            </button>
            
            {selectedCards.length > 0 && (
              <button
                onClick={handleSendEmail}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                <Mail className="w-4 h-4" />
                Enviar {selectedCards.length} Card{selectedCards.length > 1 ? 's' : ''}
              </button>
            )}
          </div>
        </div>

        <div className="space-y-4">
          {filteredCards.map(card => (
            <div
              key={card.id}
              className={`flex items-center gap-4 p-4 rounded-lg border transition-colors ${
                selectedCards.includes(card.id)
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              {/* Checkbox de Seleção */}
              <input
                type="checkbox"
                checked={selectedCards.includes(card.id)}
                onChange={() => handleCardSelection(card.id)}
                className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
              />

              {/* Informações do Card */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                      {card.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {card.description}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500 dark:text-gray-400">
                      <span className="capitalize">{card.type}</span>
                      <span>•</span>
                      <span>{card.category}</span>
                      <span>•</span>
                      <span>{card.readTime}</span>
                      <span>•</span>
                      <span>{card.tags.length} tags</span>
                    </div>
                  </div>

                  {/* Ações */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEditCard(card)}
                      className="p-2 text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDeleteCard(card.id)}
                      className="p-2 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview do E-mail */}
      {showPreview && selectedCards.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-600" />
              Preview do E-mail ({selectedCards.length} cards selecionados)
            </h3>
          
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                NextLink - Inovação e Tecnologia
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Conteúdos selecionados para você
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getSelectedCardsData().map(card => (
                <div key={card.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {card.title}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
                    {card.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span className="capitalize">{card.type}</span>
                    <span>{card.readTime}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                <Check className="w-4 h-4" />
                Acessar no Site
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
