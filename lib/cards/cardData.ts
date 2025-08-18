import { CardProps } from '@/components/cards/Card'

// Dados mockados dos cards
export const mockCards: CardProps[] = [
  {
    id: '1',
    title: 'Inteligência Artificial na Segurança do Trabalho',
    description: 'Como a IA está revolucionando a prevenção de acidentes e a saúde ocupacional nas indústrias brasileiras.',
    image: '/images/cards/ai-safety.jpg',
    link: '/blog/ia-seguranca-trabalho',
    readTime: '2 min',
    category: 'Tecnologia',
    tags: ['IA', 'Segurança', 'Inovação', 'Indústria'],
    type: 'article'
  },
  {
    id: '2',
    title: 'Podcast: Futuro da Manufatura 4.0',
    description: 'Conversa com especialistas sobre as tendências da indústria inteligente e automação avançada.',
    image: '/images/cards/manufacturing-4.jpg',
    link: '/podcasts/manufatura-4-0',
    readTime: '2.5 min',
    category: 'Inovação',
    tags: ['Manufatura', 'Indústria 4.0', 'Automação', 'Futuro'],
    type: 'podcast'
  },
  {
    id: '3',
    title: 'Live: Tecnologias Emergentes em SST',
    description: 'Transmissão ao vivo sobre as novas tecnologias que estão transformando a segurança do trabalho.',
    image: '/images/cards/emerging-tech.jpg',
    link: '/lives/tecnologias-emergentes-sst',
    readTime: '2 min',
    category: 'Tecnologia',
    tags: ['SST', 'Tecnologia', 'Live', 'Inovação'],
    type: 'live'
  },
  {
    id: '4',
    title: 'Quiz: Conhecimento em Inovação Industrial',
    description: 'Teste seus conhecimentos sobre as principais inovações tecnológicas na indústria moderna.',
    image: '/images/cards/innovation-quiz.jpg',
    link: '/quizzes/inovacao-industrial',
    readTime: '2 min',
    category: 'Educação',
    tags: ['Quiz', 'Inovação', 'Educação', 'Indústria'],
    type: 'quiz'
  },
  {
    id: '5',
    title: 'Blockchain na Rastreabilidade de Produtos',
    description: 'Como a tecnologia blockchain está sendo aplicada para garantir transparência e qualidade na cadeia produtiva.',
    image: '/images/cards/blockchain-trace.jpg',
    link: '/blog/blockchain-rastreabilidade',
    readTime: '2.5 min',
    category: 'Tecnologia',
    tags: ['Blockchain', 'Rastreabilidade', 'Qualidade', 'Cadeia Produtiva'],
    type: 'article'
  },
  {
    id: '6',
    title: 'Podcast: Sustentabilidade na Indústria',
    description: 'Discussão sobre práticas sustentáveis e tecnologias verdes na indústria brasileira.',
    image: '/images/cards/sustainability.jpg',
    link: '/podcasts/sustentabilidade-industria',
    readTime: '2 min',
    category: 'Sustentabilidade',
    tags: ['Sustentabilidade', 'Indústria', 'Tecnologia Verde', 'Meio Ambiente'],
    type: 'podcast'
  },
  {
    id: '7',
    title: 'Live: Realidade Aumentada no Treinamento',
    description: 'Demonstração ao vivo de como a RA está sendo usada para treinar trabalhadores de forma mais eficiente.',
    image: '/images/cards/ar-training.jpg',
    link: '/lives/realidade-aumentada-treinamento',
    readTime: '2.5 min',
    category: 'Educação',
    tags: ['Realidade Aumentada', 'Treinamento', 'Educação', 'Tecnologia'],
    type: 'live'
  },
  {
    id: '8',
    title: 'Quiz: Segurança Digital nas Empresas',
    description: 'Avalie seu conhecimento sobre cibersegurança e proteção de dados corporativos.',
    image: '/images/cards/cybersecurity.jpg',
    link: '/quizzes/seguranca-digital',
    readTime: '2 min',
    category: 'Segurança',
    tags: ['Cibersegurança', 'Segurança Digital', 'Proteção de Dados', 'Empresas'],
    type: 'quiz'
  }
]

// Categorias disponíveis
export const categories = [
  'Tecnologia',
  'Inovação',
  'Educação',
  'Sustentabilidade',
  'Segurança',
  'Indústria',
  'Saúde',
  'Gestão'
]

// Tipos de conteúdo
export const contentTypes = [
  'article',
  'podcast',
  'live',
  'quiz'
] as const

// Função para filtrar cards por categoria
export const filterCardsByCategory = (cards: CardProps[], category: string): CardProps[] => {
  if (category === 'all') return cards
  return cards.filter(card => card.category === category)
}

// Função para filtrar cards por tipo
export const filterCardsByType = (cards: CardProps[], type: string): CardProps[] => {
  if (type === 'all') return cards
  return cards.filter(card => card.type === type)
}

// Função para buscar cards por texto
export const searchCards = (cards: CardProps[], searchTerm: string): CardProps[] => {
  if (!searchTerm.trim()) return cards
  
  const term = searchTerm.toLowerCase()
  return cards.filter(card => 
    card.title.toLowerCase().includes(term) ||
    card.description.toLowerCase().includes(term) ||
    card.tags.some(tag => tag.toLowerCase().includes(term)) ||
    card.category.toLowerCase().includes(term)
  )
}

// Função para obter cards por IDs
export const getCardsByIds = (cards: CardProps[], ids: string[]): CardProps[] => {
  return cards.filter(card => ids.includes(card.id))
}

// Função para gerar ID único
export const generateCardId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// Função para validar dados do card
export const validateCard = (card: Partial<CardProps>): boolean => {
  const requiredFields = ['title', 'description', 'image', 'link', 'readTime', 'category', 'tags', 'type']
  
  return requiredFields.every(field => {
    const value = card[field as keyof CardProps]
    if (field === 'tags') {
      return Array.isArray(value) && value.length > 0
    }
    return value && typeof value === 'string' && value.trim().length > 0
  })
}

// Função para criar novo card
export const createCard = (cardData: Omit<CardProps, 'id'>): CardProps => {
  const newCard: CardProps = {
    id: generateCardId(),
    ...cardData
  }
  
  if (!validateCard(newCard)) {
    throw new Error('Dados do card inválidos')
  }
  
  return newCard
}

// Função para atualizar card existente
export const updateCard = (cards: CardProps[], id: string, updates: Partial<CardProps>): CardProps[] => {
  return cards.map(card => 
    card.id === id ? { ...card, ...updates } : card
  )
}

// Função para deletar card
export const deleteCard = (cards: CardProps[], id: string): CardProps[] => {
  return cards.filter(card => card.id !== id)
}

// Função para obter estatísticas dos cards
export const getCardStats = (cards: CardProps[]) => {
  const stats = {
    total: cards.length,
    byType: {} as Record<string, number>,
    byCategory: {} as Record<string, number>,
    totalTags: new Set<string>()
  }
  
  cards.forEach(card => {
    // Contar por tipo
    stats.byType[card.type] = (stats.byType[card.type] || 0) + 1
    
    // Contar por categoria
    stats.byCategory[card.category] = (stats.byCategory[card.category] || 0) + 1
    
    // Coletar tags únicas
    card.tags.forEach(tag => stats.totalTags.add(tag))
  })
  
  return {
    ...stats,
    uniqueTags: stats.totalTags.size
  }
}
