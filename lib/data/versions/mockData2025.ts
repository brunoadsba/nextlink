export interface Podcast {
  id: string
  title: string
  description: string
  duration: string
  publishedAt: string
  audioUrl: string
  coverImage: string
  category: string
  views: number
  likes: number
}

export interface Live {
  id: string
  title: string
  description: string
  scheduledAt: string
  duration: string
  status: 'scheduled' | 'live' | 'ended'
  streamUrl?: string
  thumbnail: string
  viewers: number
  category: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  author: {
    name: string
    avatar: string
    role: string
  }
  coverImage: string
  category: string
  readTime: string
  views: number
  likes: number
}

export interface Quiz {
  id: string
  title: string
  description: string
  difficulty: 'Fácil' | 'Médio' | 'Difícil'
  category: string
  questions: number
  duration: string
  completions: number
  thumbnail: string
}

// VERSÃO A - CORPORATIVA (DADOS ATUALIZADOS 2025)
export const mockPodcastsA: Podcast[] = [
  {
    id: '1',
    title: 'IA Generativa na Segurança do Trabalho 2025',
    description: 'Como ChatGPT e modelos de linguagem estão revolucionando a prevenção de acidentes e análise preditiva de riscos.',
    duration: '42:30',
    publishedAt: '2025-01-15',
    audioUrl: '/audio/podcast-1.mp3',
    coverImage: '/images/podcast-ai-safety.jpg',
    category: 'Inteligência Artificial',
    views: 2850,
    likes: 156
  },
  {
    id: '2',
    title: 'Materiais Inteligentes: EPIs do Futuro',
    description: 'Nanotecnologia e materiais auto-reparáveis que estão definindo os equipamentos de proteção de 2025.',
    duration: '38:15',
    publishedAt: '2025-01-10',
    audioUrl: '/audio/podcast-2.mp3',
    coverImage: '/images/podcast-epi.jpg',
    category: 'Inovação',
    views: 1980,
    likes: 124
  },
  {
    id: '3',
    title: 'Net Zero e Segurança Industrial',
    description: 'Estratégias de descarbonização alinhadas com as metas de segurança zero acidentes.',
    duration: '45:20',
    publishedAt: '2025-01-05',
    audioUrl: '/audio/podcast-3.mp3',
    coverImage: '/images/podcast-sustainability.jpg',
    category: 'Sustentabilidade',
    views: 2120,
    likes: 189
  }
]

export const mockLivesA: Live[] = [
  {
    id: '1',
    title: 'Summit SESI 2025: O Futuro da SST Digital',
    description: 'Líderes mundiais discutem as mega-tendências que definirão a segurança do trabalho na próxima década.',
    scheduledAt: '2025-02-15T14:00:00Z',
    duration: '120 min',
    status: 'scheduled',
    thumbnail: '/images/live-summit-2025.jpg',
    viewers: 0,
    category: 'Summit'
  },
  {
    id: '2',
    title: 'Workshop: IA Multimodal na Indústria',
    description: 'Implementação prática de modelos de IA que combinam visão, áudio e sensores para segurança total.',
    scheduledAt: '2025-01-25T16:00:00Z',
    duration: '90 min',
    status: 'live',
    streamUrl: '/live/workshop-multimodal',
    thumbnail: '/images/live-ai-multimodal.jpg',
    viewers: 487,
    category: 'Workshop'
  },
  {
    id: '3',
    title: 'Lançamento: Plataforma SESI Intelligence 2025',
    description: 'Apresentação da nova plataforma de IA para gestão inteligente de riscos ocupacionais.',
    scheduledAt: '2025-01-10T10:00:00Z',
    duration: '75 min',
    status: 'ended',
    thumbnail: '/images/live-sesi-intelligence.jpg',
    viewers: 1840,
    category: 'Lançamento'
  }
]

export const mockBlogPostsA: BlogPost[] = [
  {
    id: '1',
    title: 'Revolução dos Gêmeos Digitais na Segurança Ocupacional',
    excerpt: 'Digital twins estão criando simulações perfeitas de ambientes industriais, permitindo testes de segurança sem riscos reais.',
    content: `<p>Os gêmeos digitais representam uma das maiores inovações em segurança ocupacional de 2025. Através de simulações hiper-realistas...</p>`,
    publishedAt: '2025-01-16',
    author: {
      name: 'Dra. Ana Silva',
      avatar: '/images/author-ana.jpg',
      role: 'Diretora de Inovação SESI'
    },
    coverImage: '/images/blog-digital-twins.jpg',
    category: 'Tecnologia',
    readTime: '12 min',
    views: 4250,
    likes: 267
  },
  {
    id: '2',
    title: 'IA Explicável: Transparência nas Decisões de Segurança',
    excerpt: 'Como garantir que sistemas de IA em segurança do trabalho sejam compreensíveis e auditáveis pelos profissionais.',
    content: `<p>A explicabilidade da IA tornou-se crucial em 2025 para aplicações de segurança ocupacional...</p>`,
    publishedAt: '2025-01-14',
    author: {
      name: 'Prof. Carlos Santos',
      avatar: '/images/author-carlos.jpg',
      role: 'Pesquisador Senior em IA'
    },
    coverImage: '/images/blog-explainable-ai.jpg',
    category: 'Inteligência Artificial',
    readTime: '15 min',
    views: 3890,
    likes: 198
  }
]

// VERSÃO B - IA TECH FUTURISTA (FOCO EM IA)
export const mockPodcastsB: Podcast[] = [
  {
    id: '1',
    title: 'AGI e o Futuro do Trabalho Seguro',
    description: 'Inteligência Artificial Geral está redefinindo completamente como pensamos sobre segurança ocupacional.',
    duration: '52:45',
    publishedAt: '2025-01-15',
    audioUrl: '/audio/podcast-agi.mp3',
    coverImage: '/images/podcast-agi.jpg',
    category: 'IA Avançada',
    views: 5200,
    likes: 312
  },
  {
    id: '2',
    title: 'Computação Quântica + IA: Simulações Impossíveis',
    description: 'Como quantum computing está permitindo simulações de segurança em escalas nunca antes imagináveis.',
    duration: '48:20',
    publishedAt: '2025-01-12',
    audioUrl: '/audio/podcast-quantum.mp3',
    coverImage: '/images/podcast-quantum.jpg',
    category: 'Computação Quântica',
    views: 3850,
    likes: 245
  },
  {
    id: '3',
    title: 'Neurointerfaces: Mente Conectada à Segurança',
    description: 'Brain-Computer Interfaces monitorando estado mental e fadiga cognitiva dos trabalhadores.',
    duration: '41:15',
    publishedAt: '2025-01-08',
    audioUrl: '/audio/podcast-neuro.mp3',
    coverImage: '/images/podcast-neuro.jpg',
    category: 'Neurotech',
    views: 4120,
    likes: 278
  }
]

export const mockLivesB: Live[] = [
  {
    id: '1',
    title: 'AI Superintelligence Summit 2025',
    description: 'Como a superinteligência artificial transformará completamente a segurança industrial nos próximos 5 anos.',
    scheduledAt: '2025-02-20T15:00:00Z',
    duration: '180 min',
    status: 'scheduled',
    thumbnail: '/images/live-superintelligence.jpg',
    viewers: 0,
    category: 'AI Summit'
  },
  {
    id: '2',
    title: 'Demo: GPT-7 para Análise de Riscos',
    description: 'Demonstração exclusiva do GPT-7 analisando milhões de cenários de risco em tempo real.',
    scheduledAt: '2025-01-28T17:00:00Z',
    duration: '60 min',
    status: 'live',
    streamUrl: '/live/gpt7-demo',
    thumbnail: '/images/live-gpt7.jpg',
    viewers: 892,
    category: 'Tech Demo'
  }
]

export const mockBlogPostsB: BlogPost[] = [
  {
    id: '1',
    title: 'GPT-6 Revoluciona Análise Preditiva de Acidentes',
    excerpt: 'O novo modelo de linguagem da OpenAI consegue prever acidentes com 97.8% de precisão analisando dados não-estruturados.',
    content: `<p>O GPT-6, lançado em janeiro de 2025, representa um salto quântico na análise preditiva...</p>`,
    publishedAt: '2025-01-18',
    author: {
      name: 'Dr. Alex Chen',
      avatar: '/images/author-alex.jpg',
      role: 'AI Research Director'
    },
    coverImage: '/images/blog-gpt6.jpg',
    category: 'IA Generativa',
    readTime: '18 min',
    views: 7850,
    likes: 445
  },
  {
    id: '2',
    title: 'Redes Neurais Spiking: O Cérebro da Segurança',
    excerpt: 'Neuromorphic computing está criando sistemas de IA que pensam como o cérebro humano para detectar perigos.',
    content: `<p>As redes neurais spiking representam a terceira geração de IA...</p>`,
    publishedAt: '2025-01-16',
    author: {
      name: 'Dra. Sarah Kim',
      avatar: '/images/author-sarah.jpg',
      role: 'Neuromorphic AI Specialist'
    },
    coverImage: '/images/blog-spiking.jpg',
    category: 'Neuromorphic AI',
    readTime: '22 min',
    views: 6200,
    likes: 387
  }
]

// VERSÃO C - MINIMALISTA (DADOS SIMPLES E DIRETOS)
export const mockPodcastsC: Podcast[] = [
  {
    id: '1',
    title: 'Essenciais da Segurança Digital',
    description: 'Fundamentos práticos para implementar tecnologia em segurança do trabalho.',
    duration: '28:30',
    publishedAt: '2025-01-15',
    audioUrl: '/audio/podcast-essentials.mp3',
    coverImage: '/images/podcast-essentials.jpg',
    category: 'Fundamentos',
    views: 1850,
    likes: 95
  },
  {
    id: '2',
    title: 'Tecnologia Simples, Resultados Grandes',
    description: 'Como pequenas implementações tecnológicas geram impactos significativos.',
    duration: '32:15',
    publishedAt: '2025-01-12',
    audioUrl: '/audio/podcast-simple.mp3',
    coverImage: '/images/podcast-simple.jpg',
    category: 'Praticidade',
    views: 1560,
    likes: 78
  }
]

export const mockLivesC: Live[] = [
  {
    id: '1',
    title: 'Conversa Direta: Tecnologia que Funciona',
    description: 'Discussão objetiva sobre tecnologias comprovadas em segurança ocupacional.',
    scheduledAt: '2025-02-10T14:00:00Z',
    duration: '45 min',
    status: 'scheduled',
    thumbnail: '/images/live-direct.jpg',
    viewers: 0,
    category: 'Conversa'
  }
]

export const mockBlogPostsC: BlogPost[] = [
  {
    id: '1',
    title: 'Tecnologia Acessível para Todos',
    excerpt: 'Soluções práticas que qualquer empresa pode implementar hoje mesmo.',
    content: `<p>A tecnologia não precisa ser complexa para ser efetiva...</p>`,
    publishedAt: '2025-01-16',
    author: {
      name: 'Maria Santos',
      avatar: '/images/author-maria.jpg',
      role: 'Consultora Técnica'
    },
    coverImage: '/images/blog-accessible.jpg',
    category: 'Praticidade',
    readTime: '6 min',
    views: 2150,
    likes: 112
  }
]

export const mockQuizzesA: Quiz[] = [
  {
    id: '1',
    title: 'Fundamentos de IA na Segurança Ocupacional 2025',
    description: 'Teste seus conhecimentos sobre as aplicações mais recentes de inteligência artificial.',
    difficulty: 'Médio',
    category: 'Inteligência Artificial',
    questions: 20,
    duration: '25 min',
    completions: 756,
    thumbnail: '/images/quiz-ai-2025.jpg'
  }
]

export const mockQuizzesB: Quiz[] = [
  {
    id: '1',
    title: 'AGI & Superinteligência: Futuro da Segurança',
    description: 'Desafie-se com conceitos avançados de IA e suas implicações para a segurança.',
    difficulty: 'Difícil',
    category: 'IA Avançada',
    questions: 30,
    duration: '45 min',
    completions: 289,
    thumbnail: '/images/quiz-agi.jpg'
  }
]

export const mockQuizzesC: Quiz[] = [
  {
    id: '1',
    title: 'Tecnologia Básica em Segurança',
    description: 'Conceitos fundamentais que todo profissional deve conhecer.',
    difficulty: 'Fácil',
    category: 'Fundamentos',
    questions: 10,
    duration: '10 min',
    completions: 1240,
    thumbnail: '/images/quiz-basics.jpg'
  }
]
