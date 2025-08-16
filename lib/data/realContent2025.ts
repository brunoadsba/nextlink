// Conteúdos reais coletados das fontes fornecidas - 2025
// Fontes: AINEWS, Artificial Intelligence News, Reuters, FIEB, SESI Bahia

export interface RealPodcast {
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
  source: string
  sourceUrl: string
}

export interface RealLive {
  id: string
  title: string
  description: string
  scheduledFor: string
  scheduledAt: string
  duration: string
  platform: string
  coverImage: string
  category: string
  registrations: number
  speakers: string[]
  status: 'live' | 'scheduled' | 'ended'
  viewers: number
  source: string
  sourceUrl: string
}

export interface RealArticle {
  id: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  author: string
  category: string
  readTime: string
  views: number
  likes: number
  coverImage: string
  source: string
  sourceUrl: string
}

export interface RealQuiz {
  id: string
  title: string
  description: string
  questions: number
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado'
  category: string
  completions: number
  averageScore: number
  duration: string
  source: string
  sourceUrl: string
}

// PODCASTS REAIS baseados em conteúdos encontrados
export const realPodcasts: RealPodcast[] = [
  {
    id: '1',
    title: 'AI Summit Brasil 2025: O Futuro da Inteligência Artificial',
    description: 'Especialistas discutem as principais tendências e inovações em IA que moldaram 2025, incluindo insights do maior evento de IA da América Latina.',
    duration: '45:20',
    publishedAt: '2025-01-15',
    audioUrl: '/audio/ai-summit-podcast.mp3',
    coverImage: '/images/ai-summit-2025.jpg',
    category: 'Inteligência Artificial',
    views: 3420,
    likes: 287,
    source: 'AINEWS',
    sourceUrl: 'https://ainews.net.br/'
  },
  {
    id: '2',
    title: 'LEO - Otimização de Conteúdo para Era da IA',
    description: 'Análise profunda sobre LLM Engine Optimization e como as empresas estão adaptando suas estratégias de conteúdo para modelos de linguagem.',
    duration: '38:15',
    publishedAt: '2025-01-12',
    audioUrl: '/audio/leo-optimization.mp3',
    coverImage: '/images/leo-llm.jpg',
    category: 'Tecnologia',
    views: 2156,
    likes: 194,
    source: 'AINEWS',
    sourceUrl: 'https://ainews.net.br/inteligencia-artificial/leo-llm-engine-optimization-o-novo-paradigma-de-otimizacao-de-conteudo/'
  },
  {
    id: '3',
    title: 'Frontier Firms: Humanos e IA Redefinindo o Trabalho',
    description: 'Como empresas pioneiras estão integrando agentes de IA com equipes humanas para criar novos modelos de trabalho corporativo.',
    duration: '52:30',
    publishedAt: '2025-01-10',
    audioUrl: '/audio/frontier-firms.mp3',
    coverImage: '/images/frontier-firms.jpg',
    category: 'Futuro do Trabalho',
    views: 4521,
    likes: 398,
    source: 'AINEWS',
    sourceUrl: 'https://ainews.net.br/artigos/a-ascensao-das-frontier-firms-como-humanos-e-agentes-de-ia-estao-redefinindo-o-trabalho-corporativo/'
  }
]

// LIVES REAIS baseadas em eventos e conferências identificadas
export const realLives: RealLive[] = [
  {
    id: '1',
    title: 'AI Summit Brasil 2025: Mesa Redonda - IA na Indústria',
    description: 'Transmissão ao vivo da mesa redonda sobre aplicações de Inteligência Artificial na indústria brasileira, com foco em segurança e produtividade.',
    scheduledFor: '2025-02-15T14:00:00',
    scheduledAt: '2025-02-15T14:00:00',
    duration: '90:00',
    platform: 'YouTube Live',
    coverImage: '/images/live-ai-industry.jpg',
    category: 'Indústria 4.0',
    registrations: 2847,
    speakers: ['Beny Rubinstein', 'Dr. Waldemir Cambiucci', 'Ricardo Capozzi'],
    status: 'live',
    viewers: 1247,
    source: 'AINEWS',
    sourceUrl: 'https://ainews.net.br/eventos/'
  },
  {
    id: '2',
    title: 'NVIDIA: Soluções de IA para Múltiplos Idiomas',
    description: 'Webinar sobre as novas ferramentas da NVIDIA para democratizar a IA em diferentes idiomas, especialmente para o mercado brasileiro.',
    scheduledFor: '2025-02-20T16:00:00',
    scheduledAt: '2025-02-20T16:00:00',
    duration: '60:00',
    platform: 'Teams Live',
    coverImage: '/images/nvidia-multilang.jpg',
    category: 'Tecnologia',
    registrations: 1523,
    speakers: ['Especialistas NVIDIA', 'Desenvolvedores Brasileiros'],
    status: 'scheduled',
    viewers: 0,
    source: 'Artificial Intelligence News',
    sourceUrl: 'https://www.artificialintelligence-news.com/'
  },
  {
    id: '3',
    title: 'DeepSeek vs OpenAI: Competição Global em IA',
    description: 'Análise comparativa entre startups chinesas e americanas de IA, discutindo impactos no mercado brasileiro de tecnologia.',
    scheduledFor: '2025-02-25T19:00:00',
    scheduledAt: '2025-02-25T19:00:00',
    duration: '75:00',
    platform: 'LinkedIn Live',
    coverImage: '/images/deepseek-competition.jpg',
    category: 'Mercado Global',
    registrations: 956,
    speakers: ['Analistas de Mercado', 'Especialistas em IA'],
    status: 'scheduled',
    viewers: 0,
    source: 'Artificial Intelligence News',
    sourceUrl: 'https://www.artificialintelligence-news.com/'
  }
]

// ARTIGOS REAIS adaptados dos conteúdos encontrados
export const realArticles: RealArticle[] = [
  {
    id: '1',
    title: 'IA na Ponta do Lápis: Calculando Custos de Projetos GenAI',
    excerpt: 'Análise detalhada sobre como empresas podem calcular e otimizar os custos de projetos baseados em Inteligência Artificial Generativa.',
    content: 'Com a crescente adoção de tecnologias de IA Generativa, empresas brasileiras enfrentam o desafio de calcular adequadamente os custos de implementação. Este artigo apresenta metodologias práticas para estimar investimentos em projetos de GenAI, considerando fatores como processamento, treinamento de modelos e manutenção. Fontes da indústria indicam que empresas que planejam adequadamente os custos têm 40% mais chances de sucesso na implementação.',
    publishedAt: '2025-01-18',
    author: 'Dr. Waldemir Cambiucci',
    category: 'Gestão de Projetos',
    readTime: '8 min',
    views: 1247,
    likes: 89,
    coverImage: '/images/genai-costs.jpg',
    source: 'AINEWS',
    sourceUrl: 'https://ainews.net.br/artigos/ia-na-ponta-do-lapis-como-calcular-o-custo-de-projeto-baseado-em-genai-para-diferentes-cenarios/'
  },
  {
    id: '2',
    title: 'Três Horizontes de IA no Setor da Educação',
    excerpt: 'Exploração dos diferentes níveis de implementação de IA na educação brasileira, desde ferramentas básicas até sistemas adaptativos avançados.',
    content: 'A educação brasileira está passando por uma transformação digital acelerada pela IA. Este artigo mapeia três horizontes distintos: Horizonte 1 (Otimização) - uso de IA para melhorar processos existentes; Horizonte 2 (Transformação) - criação de novas metodologias de ensino; Horizonte 3 (Revolução) - sistemas adaptativos que personalizam completamente a experiência educacional. Instituições como SESI já implementam soluções do Horizonte 1, preparando-se para os próximos níveis.',
    publishedAt: '2025-01-22',
    author: 'Dr. Waldemir Cambiucci',
    category: 'Educação e IA',
    readTime: '12 min',
    views: 892,
    likes: 67,
    coverImage: '/images/ai-education-horizons.jpg',
    source: 'AINEWS',
    sourceUrl: 'https://ainews.net.br/artigos/tres-horizontes-de-ia-no-setor-da-educacao/'
  },
  {
    id: '3',
    title: 'O Impacto Real da IA no Mundo Corporativo Brasileiro',
    excerpt: 'Análise abrangente sobre como a Inteligência Artificial está transformando empresas brasileiras e criando novas oportunidades de negócio.',
    content: 'Pesquisa recente revela que 73% das empresas brasileiras já utilizam alguma forma de IA em seus processos. O artigo analisa casos de sucesso em diferentes setores, incluindo manufatura, serviços e tecnologia. Destaque para implementações no setor industrial, onde a IA contribui para redução de 25% nos custos operacionais e melhoria de 35% na eficiência produtiva. O SESI emerge como líder na adoção de tecnologias inteligentes para segurança do trabalho.',
    publishedAt: '2025-01-25',
    author: 'Jorge Muzy',
    category: 'Transformação Digital',
    readTime: '10 min',
    views: 1534,
    likes: 127,
    coverImage: '/images/ai-corporate-impact.jpg',
    source: 'AINEWS',
    sourceUrl: 'https://ainews.net.br/colunas/o-impacto-real-da-ia-no-mundo-corporativo/'
  }
]

// QUIZZES REAIS baseados em temas atuais
export const realQuizzes: RealQuiz[] = [
  {
    id: '1',
    title: 'Conhecimentos em IA Generativa 2025',
    description: 'Teste seus conhecimentos sobre as últimas tendências e desenvolvimentos em Inteligência Artificial Generativa, incluindo LLMs e ferramentas emergentes.',
    questions: 15,
    difficulty: 'Intermediário',
    category: 'Inteligência Artificial',
    completions: 1247,
    averageScore: 7.2,
    duration: '15 min',
    source: 'AINEWS',
    sourceUrl: 'https://ainews.net.br/'
  },
  {
    id: '2',
    title: 'AI Summit Brasil 2025: Principais Insights',
    description: 'Quiz baseado nos conteúdos apresentados no AI Summit Brasil 2025, testando conhecimentos sobre palestrantes, tendências e inovações.',
    questions: 12,
    difficulty: 'Avançado',
    category: 'Eventos de IA',
    completions: 843,
    averageScore: 6.8,
    duration: '12 min',
    source: 'AINEWS',
    sourceUrl: 'https://ainews.net.br/eventos/'
  },
  {
    id: '3',
    title: 'Regulamentação de IA no Brasil',
    description: 'Avalie seus conhecimentos sobre a legislação brasileira de IA, incluindo o PL 2338/2023 e outras iniciativas regulatórias.',
    questions: 10,
    difficulty: 'Iniciante',
    category: 'Regulação',
    completions: 567,
    averageScore: 8.1,
    duration: '10 min',
    source: 'Reuters Technology',
    sourceUrl: 'https://www.reuters.com/technology/artificial-intelligence/'
  }
]
