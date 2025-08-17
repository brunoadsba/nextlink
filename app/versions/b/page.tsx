import { Metadata } from 'next'
import { Link2, Brain, Cpu, Zap, Sparkles, Rocket, ChevronRight, Star, Play } from 'lucide-react'
import Image from 'next/image'
import { realPodcasts, realLives, realArticles, realQuizzes } from '@/lib/data/realContent2025'


export const metadata: Metadata = {
  title: 'Next Link AI - Versão B: IA Tech Futurista',
  description: 'Plataforma de vanguarda em Inteligência Artificial aplicada à segurança ocupacional',
}

export default function VersionBPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-20 text-white">
        <div className="container-custom">
          <div className="text-center max-w-5xl mx-auto">
            {/* Logo SESI Futurista */}
            <div className="mb-8 flex justify-center">
              <div className="relative text-center">
                <div className="mb-6">
                  <Image
                    src="/images/sesi.png"
                    alt="Logo SESI"
                    width={240}
                    height={96}
                    className="mx-auto h-24 w-auto mb-6"
                    priority
                  />
                </div>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full flex items-center justify-center animate-pulse">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-purple-300 text-2xl font-bold">×</span>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-full flex items-center justify-center animate-pulse">
                    <Link2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center animate-bounce">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide animate-pulse">
                🚀 VERSÃO B - IA TECH FUTURISTA
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent serif-font">
              Next Link AI
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-purple-100">
              Superinteligência Artificial • Instituto SESI SST
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 text-sm font-medium border border-white/20">
                <Cpu className="w-4 h-4 inline mr-2" />
                IA Avançada
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 text-sm font-medium border border-white/20">
                <Brain className="w-4 h-4 inline mr-2" />
                Redes Neurais
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 text-sm font-medium border border-white/20">
                <Zap className="w-4 h-4 inline mr-2" />
                Computação Quântica
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Sparkles className="w-6 h-6 inline mr-3" />
                Explorar o Futuro da IA
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* AI Context Section */}
      <section className="relative z-10 py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white serif-font mb-8">
                <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  Revolução Cognitiva
                </span>
              </h2>
              <p className="text-xl text-purple-100 leading-relaxed">
                Em 2025, a Inteligência Artificial transcendeu suas limitações. Agora, sistemas cognitivos avançados 
                não apenas processam dados, mas <em>compreendem</em> o mundo industrial com a profundidade 
                de décadas de experiência humana concentradas em microsegundos de análise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cognição Sintética</h3>
                <p className="text-purple-100">
                  Redes neurais que simulam intuição humana para detectar padrões de risco invisíveis a olho nu.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-800/40 to-blue-800/40 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Processamento Quântico</h3>
                <p className="text-cyan-100">
                  Simulações paralelas de milhões de cenários de segurança em superposição quântica.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-800/40 to-purple-800/40 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Predição Temporal</h3>
                <p className="text-pink-100">
                  Algoritmos de IA que antecipam acidentes antes mesmo dos fatores de risco se manifestarem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neural Objectives */}
      <section className="relative z-10 py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white serif-font mb-8">
                <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  Objetivos Neurais
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group">
                <div className="bg-gradient-to-br from-purple-600/20 to-transparent backdrop-blur-lg rounded-3xl p-8 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto group-hover:animate-pulse">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center animate-spin">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Sinergia Cognitiva</h3>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-400/20">
                    <p className="text-purple-100 text-center leading-relaxed">
                      Fusão entre inteligência humana e artificial, criando ecossistemas de conhecimento 
                      que evoluem exponencialmente através de feedback neural contínuo.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-gradient-to-br from-cyan-600/20 to-transparent backdrop-blur-lg rounded-3xl p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:animate-pulse">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-bounce">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Visão Aumentada</h3>
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-6 rounded-2xl border border-cyan-400/20">
                    <p className="text-cyan-100 text-center leading-relaxed">
                      Expansão da percepção através de IA multimodal, permitindo análise simultânea 
                      de múltiplas dimensões de dados para insights impossíveis à cognição humana isolada.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group md:col-span-2 lg:col-span-1">
                <div className="bg-gradient-to-br from-pink-600/20 to-transparent backdrop-blur-lg rounded-3xl p-8 border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:animate-pulse">
                      <Rocket className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center animate-ping">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Inovação Disruptiva</h3>
                  <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-6 rounded-2xl border border-pink-400/20">
                    <p className="text-pink-100 text-center leading-relaxed">
                      Catalisação de breakthroughs tecnológicos através de IA generativa que não apenas 
                      resolve problemas existentes, mas imagina soluções para desafios ainda não concebidos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Content Formats */}
      <section className="relative z-10 py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white serif-font mb-8">
              <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Formatos de IA Imersiva
              </span>
            </h2>
            <p className="text-xl text-purple-100 mb-16">
              Experiências de aprendizado powered by superinteligência artificial
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a href="/podcasts" className="group">
                <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-sm">Áudios Neurais</h4>
                  <p className="text-xs text-purple-200 mt-1">{realPodcasts.length} episódios • IA</p>
                </div>
              </a>
              
              <a href="/lives" className="group">
                <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-sm">Transmissões Quânticas</h4>
                  <p className="text-xs text-cyan-200 mt-1">{realLives.length} eventos • Tempo Real</p>
                </div>
              </a>
              
              <a href="/quizzes" className="group">
                <div className="bg-gradient-to-br from-pink-600/30 to-purple-600/30 backdrop-blur-lg rounded-2xl p-6 border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-sm">Avaliações Neurais</h4>
                  <p className="text-xs text-pink-200 mt-1">{realQuizzes.length} desafios • Adaptativo</p>
                </div>
              </a>
              
              <a href="/blog" className="group">
                <div className="bg-gradient-to-br from-purple-600/30 to-cyan-600/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-sm">Pesquisa em IA</h4>
                  <p className="text-xs text-purple-200 mt-1">{realArticles.length} artigos • Análises</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Neural Research Highlights */}
      <section className="relative z-10 py-20 bg-black/30 backdrop-blur-sm">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white serif-font mb-8">
                <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  Descobertas Neurais 2025
                </span>
              </h2>
              <p className="text-xl text-purple-100">
                Insights de vanguarda extraídos de fontes especializadas em IA
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {realArticles.slice(0, 3).map((article, index) => (
                <div 
                  key={article.id} 
                  className="group bg-gradient-to-br from-purple-800/30 to-pink-800/20 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${
                      index === 0 ? 'from-purple-500 to-pink-600' : 
                      index === 1 ? 'from-cyan-500 to-blue-600' : 
                      'from-pink-500 to-purple-600'
                    } rounded-2xl flex items-center justify-center mx-auto group-hover:animate-pulse`}>
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center animate-spin">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="mb-4">
                      <span className="inline-block bg-purple-500/30 text-purple-200 px-3 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">{article.title}</h3>
                    <p className="text-purple-100 text-sm mb-6 line-clamp-3">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-xs text-purple-300 mb-4">
                      <span>Por {article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-xl border border-purple-400/20 mb-4">
                      <div className="text-xs text-cyan-300">
                        Fonte Neural: <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">{article.source}</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 text-xs text-purple-200">
                      <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {article.views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {article.likes}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <div className="mb-6">
                <p className="text-sm text-purple-300 mb-4">
                  <strong>Fontes de Inteligência:</strong> AINEWS • AI News • Reuters Tech • SESI Research
                </p>
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Sparkles className="w-5 h-5 inline mr-3" />
                Explorar Mais Descobertas
                <ChevronRight className="w-5 h-5 inline ml-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Rocket className="w-16 h-16 mx-auto text-purple-300 mb-6 animate-bounce" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white serif-font mb-8">
              <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                O Futuro é Agora
              </span>
            </h2>
            <p className="text-xl text-purple-100 mb-12 leading-relaxed">
              Conectando mentes humanas e artificiais para transcender os limites 
              da segurança ocupacional no Instituto SESI SST
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <Brain className="w-10 h-10 mx-auto mb-4 text-purple-300" />
                <h3 className="font-bold text-white mb-2">Superinteligência</h3>
                <p className="text-sm text-purple-200">Cognição expandida</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <Cpu className="w-10 h-10 mx-auto mb-4 text-cyan-300" />
                <h3 className="font-bold text-white mb-2">Quantum Neural</h3>
                <p className="text-sm text-cyan-200">Processamento infinito</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <Zap className="w-10 h-10 mx-auto mb-4 text-pink-300" />
                <h3 className="font-bold text-white mb-2">Transcendência</h3>
                <p className="text-sm text-pink-200">Evolução contínua</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105">
                Ativar Superinteligência
              </button>
              <a href="/versions" className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300">
                Ver Outras Versões
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/40 backdrop-blur-lg text-white py-12 border-t border-white/10">
        <div className="container-custom text-center">
          <div className="mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-xl bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">Next Link AI</h3>
          </div>
          <p className="text-purple-200 mb-4">
            Superinteligência Artificial • Instituto SESI de SST
          </p>
          <div className="text-sm text-purple-300">
            Desenvolvido com IA Avançada por Bruno Almeida
          </div>
        </div>
      </footer>
    </div>
  )
}
