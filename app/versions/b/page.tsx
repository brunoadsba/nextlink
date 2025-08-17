import { Metadata } from 'next'
import { Link2, Brain, Cpu, Zap, Sparkles, Rocket, ChevronRight, Star, Play, Atom, Eye, Shield, Globe, Target, Infinity, Layers, CpuIcon } from 'lucide-react'
import Image from 'next/image'
import { realPodcasts, realLives, realArticles, realQuizzes } from '@/lib/data/realContent2025'

export const metadata: Metadata = {
  title: 'Next Link AI - Versão B: IA Tech Futurista',
  description: 'Plataforma de vanguarda em Inteligência Artificial aplicada à segurança ocupacional',
}

export default function VersionBPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Cyberpunk Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-50"></div>
      </div>

      {/* Holographic Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/20 via-blue-500/15 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/20 via-purple-500/15 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      {/* Header Futurista */}
      <header className="relative z-10 py-32 text-white">
        <div className="container-custom">
          <div className="text-center max-w-6xl mx-auto">
            {/* Logo SESI Holográfico */}
            <div className="mb-16 flex justify-center">
              <div className="relative text-center group">
                <div className="mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <Image
                    src="/images/sesi.png"
                    alt="Logo SESI"
                    width={280}
                    height={112}
                    className="mx-auto h-28 w-auto mb-6 relative z-10 drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-md animate-pulse"></div>
                </div>
                
                {/* Neural Network Visualization */}
                <div className="flex items-center justify-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(0,255,255,0.6)]">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-ping"></div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 animate-pulse"></div>
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 animate-pulse delay-300"></div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-400 rounded-full flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(147,51,234,0.6)]">
                      <Link2 className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-30 animate-ping delay-500"></div>
                  </div>
                </div>
                
                {/* Quantum State Indicator */}
                <div className="absolute -top-4 -right-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center animate-spin shadow-[0_0_20px_rgba(34,197,94,0.6)]">
                    <Atom className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Badge Futurista */}
            <div className="mb-8">
              <span className="inline-block bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-base font-bold tracking-wider animate-pulse shadow-[0_0_20px_rgba(0,255,255,0.5)] border border-cyan-400/30">
                🚀 VERSÃO B - IA TECH FUTURISTA
              </span>
            </div>
            
            {/* Título Holográfico */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 bg-gradient-to-r from-cyan-300 via-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent serif-font drop-shadow-[0_0_30px_rgba(0,255,255,0.3)] animate-pulse">
              Next Link AI
            </h1>
            
            {/* Subtítulo Cyberpunk */}
            <p className="text-2xl md:text-3xl lg:text-4xl font-light mb-12 text-cyan-100 leading-relaxed">
              Superinteligência Artificial • Instituto SESI SST
            </p>
            
            {/* Tech Tags Futuristas */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-full px-6 py-3 text-sm font-medium border border-cyan-400/40 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300">
                <Cpu className="w-4 h-4 inline mr-2 text-cyan-400" />
                IA Avançada
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-full px-6 py-3 text-sm font-medium border border-blue-400/40 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300">
                <Brain className="w-4 h-4 inline mr-2 text-blue-400" />
                Redes Neurais
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-full px-6 py-3 text-sm font-medium border border-purple-400/40 shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-300">
                <Zap className="w-4 h-4 inline mr-2 text-purple-400" />
                Computação Quântica
              </div>
            </div>
            
            {/* CTA Futurista */}
            <div className="text-center">
              <button className="group relative bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white px-16 py-6 rounded-2xl text-xl font-bold transition-all duration-500 transform hover:scale-110 shadow-[0_0_40px_rgba(0,255,255,0.4)] hover:shadow-[0_0_60px_rgba(0,255,255,0.6)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center">
                  <Sparkles className="w-7 h-7 mr-3 animate-pulse" />
                  Explorar o Futuro da IA
                  <ChevronRight className="w-7 h-7 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* AI Context Section - Cyberpunk */}
      <section className="relative z-10 py-32 bg-gradient-to-b from-black/80 via-cyan-900/20 to-black/80 backdrop-blur-sm">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white serif-font mb-12">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                  Revolução Cognitiva
                </span>
              </h2>
              <p className="text-2xl md:text-3xl text-cyan-100 leading-relaxed max-w-5xl mx-auto">
                Em 2025, a Inteligência Artificial transcendeu suas limitações. Agora, sistemas cognitivos avançados 
                não apenas processam dados, mas <em className="text-cyan-300 font-semibold">compreendem</em> o mundo industrial com a profundidade 
                de décadas de experiência humana concentradas em microsegundos de análise quântica.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-xl rounded-3xl p-10 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_25px_rgba(0,255,255,0.4)] group-hover:shadow-[0_0_35px_rgba(0,255,255,0.6)] transition-all duration-500">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">Cognição Sintética</h3>
                  <p className="text-cyan-100 text-lg leading-relaxed">
                    Redes neurais que simulam intuição humana para detectar padrões de risco invisíveis a olho nu, 
                    utilizando processamento quântico paralelo.
                  </p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-xl rounded-3xl p-10 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_25px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] transition-all duration-500">
                    <Cpu className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">Processamento Quântico</h3>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Simulações paralelas de milhões de cenários de segurança em superposição quântica, 
                    com entrelaçamento neural instantâneo.
                  </p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-3xl p-10 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 shadow-[0_0_30px_rgba(147,51,234,0.2)]">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 via-pink-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_25px_rgba(147,51,234,0.4)] group-hover:shadow-[0_0_35px_rgba(147,51,234,0.6)] transition-all duration-500">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">Predição Temporal</h3>
                  <p className="text-purple-100 text-lg leading-relaxed">
                    Algoritmos de IA que antecipam acidentes antes mesmo dos fatores de risco se manifestarem, 
                    usando análise preditiva multidimensional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neural Objectives - Cyberpunk */}
      <section className="relative z-10 py-32 bg-gradient-to-b from-black/80 via-purple-900/20 to-black/80">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white serif-font mb-12">
                <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                  Objetivos Neurais
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-xl rounded-3xl p-10 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 shadow-[0_0_30px_rgba(0,255,255,0.2)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="relative mb-10">
                      <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:animate-pulse shadow-[0_0_30px_rgba(0,255,255,0.4)] group-hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-500">
                        <Brain className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center animate-spin shadow-[0_0_20px_rgba(34,197,94,0.6)]">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">Sinergia Cognitiva</h3>
                    <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-8 rounded-2xl border border-cyan-400/30 backdrop-blur-lg">
                      <p className="text-cyan-100 text-center leading-relaxed text-lg">
                        Fusão entre inteligência humana e artificial, criando ecossistemas de conhecimento 
                        que evoluem exponencialmente através de feedback neural contínuo e entrelaçamento quântico.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-xl rounded-3xl p-10 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.2)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="relative mb-10">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto group-hover:animate-pulse shadow-[0_0_30px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-500">
                        <Zap className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center animate-bounce shadow-[0_0_20px_rgba(147,51,234,0.6)]">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">Visão Aumentada</h3>
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-8 rounded-2xl border border-blue-400/30 backdrop-blur-lg">
                      <p className="text-blue-100 text-center leading-relaxed text-lg">
                        Expansão da percepção através de IA multimodal, permitindo análise simultânea 
                        de múltiplas dimensões de dados para insights impossíveis à cognição humana isolada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group md:col-span-2 lg:col-span-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl rounded-3xl p-10 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 shadow-[0_0_30px_rgba(147,51,234,0.2)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="relative mb-10">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-400 via-pink-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto group-hover:animate-pulse shadow-[0_0_30px_rgba(147,51,234,0.4)] group-hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] transition-all duration-500">
                        <Rocket className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full flex items-center justify-center animate-ping shadow-[0_0_20px_rgba(236,72,153,0.6)]">
                        <Play className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">Inovação Disruptiva</h3>
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border border-purple-400/30 backdrop-blur-lg">
                      <p className="text-purple-100 text-center leading-relaxed text-lg">
                        Catalisação de breakthroughs tecnológicos através de IA generativa que não apenas 
                        resolve problemas existentes, mas imagina soluções para desafios ainda não concebidos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Content Formats - Holographic */}
      <section className="relative z-10 py-32 bg-gradient-to-b from-black/80 via-blue-900/20 to-black/80 backdrop-blur-sm">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white serif-font mb-12">
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                Formatos de IA Imersiva
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-blue-100 mb-20 leading-relaxed">
              Experiências de aprendizado powered by superinteligência artificial
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <a href="/podcasts" className="group">
                <div className="relative bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/40 hover:border-cyan-400/70 transition-all duration-500 hover:scale-110 cursor-pointer shadow-[0_0_30px_rgba(0,255,255,0.2)] hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse shadow-[0_0_25px_rgba(0,255,255,0.4)] group-hover:shadow-[0_0_35px_rgba(0,255,255,0.6)] transition-all duration-500">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2">Áudios Neurais</h4>
                    <p className="text-sm text-cyan-200 mt-2">{realPodcasts.length} episódios • IA</p>
                  </div>
                </div>
              </a>
              
              <a href="/lives" className="group">
                <div className="relative bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/40 hover:border-blue-400/70 transition-all duration-500 hover:scale-110 cursor-pointer shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse shadow-[0_0_25px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] transition-all duration-500">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2">Transmissões Quânticas</h4>
                    <p className="text-sm text-blue-200 mt-2">{realLives.length} eventos • Tempo Real</p>
                  </div>
                </div>
              </a>
              
              <a href="/quizzes" className="group">
                <div className="relative bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/40 hover:border-purple-400/70 transition-all duration-500 hover:scale-110 cursor-pointer shadow-[0_0_30px_rgba(147,51,234,0.2)] hover:shadow-[0_0_50px_rgba(147,51,234,0.4)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 via-pink-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse shadow-[0_0_25px_rgba(147,51,234,0.4)] group-hover:shadow-[0_0_35px_rgba(147,51,234,0.6)] transition-all duration-500">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2">Avaliações Neurais</h4>
                    <p className="text-sm text-purple-200 mt-2">{realQuizzes.length} desafios • Adaptativo</p>
                  </div>
                </div>
              </a>
              
              <a href="/blog" className="group">
                <div className="relative bg-gradient-to-br from-pink-600/30 to-cyan-600/30 backdrop-blur-xl rounded-3xl p-8 border border-pink-400/40 hover:border-pink-400/70 transition-all duration-500 hover:scale-110 cursor-pointer shadow-[0_0_30px_rgba(236,72,153,0.2)] hover:shadow-[0_0_50px_rgba(236,72,153,0.4)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 via-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse shadow-[0_0_25px_rgba(236,72,153,0.4)] group-hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] transition-all duration-500">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2">Pesquisa em IA</h4>
                    <p className="text-sm text-pink-200 mt-2">{realArticles.length} artigos • Análises</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Neural Research Highlights */}
      <section className="relative z-10 py-20 bg-black/10 backdrop-blur-sm">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white serif-font mb-8">
                <span className="bg-gradient-to-r from-indigo-200 to-blue-200 bg-clip-text text-transparent">
                  Descobertas Neurais 2025
                </span>
              </h2>
              <p className="text-xl text-slate-100">
                Insights de vanguarda extraídos de fontes especializadas em IA
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {realArticles.slice(0, 3).map((article, index) => (
                <div 
                  key={article.id} 
                  className="group bg-gradient-to-br from-indigo-800/30 to-blue-800/20 backdrop-blur-lg rounded-3xl p-8 border border-indigo-400/30 hover:border-indigo-400/60 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${
                      index === 0 ? 'from-indigo-500 to-blue-600' : 
                      index === 1 ? 'from-blue-500 to-indigo-600' : 
                      'from-indigo-500 to-blue-600'
                    } rounded-2xl flex items-center justify-center mx-auto group-hover:animate-pulse`}>
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center animate-spin">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="mb-4">
                      <span className="inline-block bg-indigo-500/30 text-slate-200 px-3 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">{article.title}</h3>
                    <p className="text-slate-100 text-sm mb-6 line-clamp-3">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-xs text-slate-300 mb-4">
                      <span>Por {article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <div className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 p-3 rounded-xl border border-indigo-400/20 mb-4">
                      <div className="text-xs text-blue-300">
                        Fonte Neural: <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">{article.source}</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 text-xs text-slate-200">
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
                <p className="text-sm text-slate-300 mb-4">
                  <strong>Fontes de Inteligência:</strong> AINEWS • AI News • Reuters Tech • SESI Research
                </p>
              </div>
              <button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
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
              <Rocket className="w-16 h-16 mx-auto text-indigo-300 mb-6 animate-bounce" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white serif-font mb-8">
              <span className="bg-gradient-to-r from-indigo-200 to-blue-200 bg-clip-text text-transparent">
                O Futuro é Agora
              </span>
            </h2>
            <p className="text-xl text-slate-100 mb-12 leading-relaxed">
              Conectando mentes humanas e artificiais para transcender os limites 
              da segurança ocupacional no Instituto SESI SST
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <Brain className="w-10 h-10 mx-auto mb-4 text-indigo-300" />
                <h3 className="font-bold text-white mb-2">Superinteligência</h3>
                <p className="text-sm text-slate-200">Cognição expandida</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <Cpu className="w-10 h-10 mx-auto mb-4 text-blue-300" />
                <h3 className="font-bold text-white mb-2">Quantum Neural</h3>
                <p className="text-sm text-blue-200">Processamento infinito</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <Zap className="w-10 h-10 mx-auto mb-4 text-indigo-300" />
                <h3 className="font-bold text-white mb-2">Transcendência</h3>
                <p className="text-sm text-indigo-200">Evolução contínua</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105">
                Ativar Superinteligência
              </button>
              <a href="/versions" className="border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300">
                Ver Outras Versões
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/10 backdrop-blur-lg text-white py-12 border-t border-white/10">
        <div className="container-custom text-center">
          <div className="mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-xl bg-gradient-to-r from-indigo-200 to-blue-200 bg-clip-text text-transparent">Next Link AI</h3>
          </div>
          <p className="text-slate-200 mb-4">
            Superinteligência Artificial • Instituto SESI de SST
          </p>
          <div className="text-sm text-slate-300">
            Desenvolvido com IA Avançada por Bruno Almeida
          </div>
        </div>
      </footer>
    </div>
  )
}
