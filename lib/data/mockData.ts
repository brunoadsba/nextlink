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

// Mock Data
export const mockPodcasts: Podcast[] = [
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

export const mockLives: Live[] = [
  {
    id: '1',
    title: 'Mesa Redonda: O Futuro da SST Digital',
    description: 'Especialistas discutem as tendências tecnológicas que moldarão a segurança do trabalho.',
    scheduledAt: '2024-12-20T14:00:00Z',
    duration: '90 min',
    status: 'scheduled',
    thumbnail: '/images/live-sst-digital.jpg',
    viewers: 0,
    category: 'Mesa Redonda'
  },
  {
    id: '2',
    title: 'Workshop: Implementação de IoT na Indústria',
    description: 'Hands-on sobre sensores e dispositivos IoT para monitoramento de segurança.',
    scheduledAt: '2024-12-18T16:00:00Z',
    duration: '120 min',
    status: 'live',
    streamUrl: '/live/workshop-iot',
    thumbnail: '/images/live-iot-workshop.jpg',
    viewers: 342,
    category: 'Workshop'
  },
  {
    id: '3',
    title: 'Lançamento: Plataforma SESI Tech',
    description: 'Apresentação oficial da nova plataforma de inovação tecnológica do SESI.',
    scheduledAt: '2024-12-15T10:00:00Z',
    duration: '60 min',
    status: 'ended',
    thumbnail: '/images/live-sesi-tech.jpg',
    viewers: 1250,
    category: 'Lançamento'
  }
]

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Revolução dos Wearables na Segurança Ocupacional',
    excerpt: 'Dispositivos vestíveis estão transformando como monitoramos a saúde e segurança dos trabalhadores em tempo real.',
    content: `
      <p>A tecnologia wearable está revolucionando a forma como abordamos a segurança ocupacional. Dispositivos como pulseiras inteligentes, capacetes conectados e roupas com sensores estão proporcionando monitoramento em tempo real de sinais vitais, exposição a riscos e condições ambientais.</p>
      
      <h2>Principais Benefícios</h2>
      <ul>
        <li>Monitoramento contínuo de sinais vitais</li>
        <li>Detecção precoce de fadiga e stress</li>
        <li>Alertas automáticos em situações de risco</li>
        <li>Coleta de dados para análise preditiva</li>
      </ul>
      
      <p>Essa revolução tecnológica promete reduzir drasticamente os acidentes de trabalho e melhorar a qualidade de vida dos trabalhadores.</p>
    `,
    publishedAt: '2024-12-16',
    author: {
      name: 'Dr. Ana Silva',
      avatar: '/images/author-ana.jpg',
      role: 'Especialista em Tecnologia Ocupacional'
    },
    coverImage: '/images/blog-wearables.jpg',
    category: 'Tecnologia',
    readTime: '8 min',
    views: 2340,
    likes: 156
  },
  {
    id: '2',
    title: 'Inteligência Artificial na Prevenção de Acidentes',
    excerpt: 'Como algoritmos de machine learning estão sendo usados para prever e prevenir acidentes antes que aconteçam.',
    content: `
      <p>A Inteligência Artificial está transformando a prevenção de acidentes industriais através de análise preditiva e reconhecimento de padrões.</p>
      
      <h2>Aplicações Práticas</h2>
      <p>Sistemas de IA podem analisar milhares de variáveis simultaneamente, identificando padrões que indicam potencial risco de acidentes.</p>
    `,
    publishedAt: '2024-12-14',
    author: {
      name: 'Prof. Carlos Santos',
      avatar: '/images/author-carlos.jpg',
      role: 'Pesquisador em IA Industrial'
    },
    coverImage: '/images/blog-ai-prevention.jpg',
    category: 'Inteligência Artificial',
    readTime: '12 min',
    views: 1890,
    likes: 123
  },
  {
    id: '3',
    title: 'Sustentabilidade e Inovação: O Caminho Verde da Indústria',
    excerpt: 'Exploramos como tecnologias sustentáveis estão criando ambientes de trabalho mais seguros e ecologicamente responsáveis.',
    content: `
      <p>A convergência entre sustentabilidade e segurança industrial está criando oportunidades únicas para inovação.</p>
      
      <h2>Tecnologias Verdes em SST</h2>
      <p>Painéis solares para sistemas de segurança, materiais biodegradáveis para EPIs e sistemas de purificação de ar natural são apenas algumas das inovações.</p>
    `,
    publishedAt: '2024-12-12',
    author: {
      name: 'Dra. Marina Costa',
      avatar: '/images/author-marina.jpg',
      role: 'Diretora de Sustentabilidade'
    },
    coverImage: '/images/blog-sustainability.jpg',
    category: 'Sustentabilidade',
    readTime: '10 min',
    views: 1560,
    likes: 89
  }
]

export const mockQuizzes: Quiz[] = [
  {
    id: '1',
    title: 'Fundamentos de Inteligência Artificial na Indústria',
    description: 'Teste seus conhecimentos sobre como a IA está transformando a indústria moderna.',
    difficulty: 'Médio',
    category: 'Tecnologia',
    questions: 15,
    duration: '20 min',
    completions: 456,
    thumbnail: '/images/quiz-ai-fundamentals.jpg'
  },
  {
    id: '2',
    title: 'Segurança Ocupacional 4.0',
    description: 'Avalie seu entendimento sobre as novas tecnologias em segurança do trabalho.',
    difficulty: 'Difícil',
    category: 'Segurança',
    questions: 20,
    duration: '30 min',
    completions: 289,
    thumbnail: '/images/quiz-safety-4.jpg'
  },
  {
    id: '3',
    title: 'IoT e Sensores Industriais',
    description: 'Quiz interativo sobre Internet das Coisas aplicada à indústria.',
    difficulty: 'Fácil',
    category: 'IoT',
    questions: 10,
    duration: '15 min',
    completions: 678,
    thumbnail: '/images/quiz-iot-sensors.jpg'
  }
]
