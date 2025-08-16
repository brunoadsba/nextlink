'use client'

import Link from 'next/link'
import { Sparkles, Building2, Palette, Brain, Zap, Target } from 'lucide-react'

export default function VersionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text serif-font mb-6">
            Escolha Sua Versão Preferida
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Apresentamos 3 versões diferentes do Next Link Pro para que você escolha a que melhor representa sua visão
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Versão A - Corporativa */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="bg-gradient-to-br from-blue-600 to-emerald-600 p-8 text-white">
              <Building2 className="w-12 h-12 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Versão A</h2>
              <h3 className="text-lg opacity-90 mb-4">Corporativa Moderna</h3>
              <p className="text-sm opacity-80">
                Design profissional e institucional, focado em credibilidade e confiança
              </p>
            </div>
            
            <div className="p-8">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Layout estruturado e formal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Cores corporativas tradicionais</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Conteúdo institucional atualizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Ideal para apresentações formais</span>
                </div>
              </div>
              
              <Link 
                href="/versions/a"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group"
              >
                Ver Versão A
                <Building2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Versão B - IA Tech */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
            <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              RECOMENDADO
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-500 p-8 text-white">
              <Brain className="w-12 h-12 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Versão B</h2>
              <h3 className="text-lg opacity-90 mb-4">IA Tech Futurista</h3>
              <p className="text-sm opacity-80">
                Design inovador focado em Inteligência Artificial e tecnologias emergentes
              </p>
            </div>
            
            <div className="p-8">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Design futurístico e dinâmico</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Foco total em IA e inovação</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Conteúdo sobre IA avançada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Perfeito para entusiastas de tech</span>
                </div>
              </div>
              
              <Link 
                href="/versions/b"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Ver Versão B
                <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Versão C - Corporativo Premium Tech */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-8 text-white">
              <Target className="w-12 h-12 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Versão C</h2>
              <h3 className="text-lg opacity-90 mb-4">Corporativo Premium Tech</h3>
              <p className="text-sm opacity-80">
                Elegância corporativa com elementos tecnológicos avançados
              </p>
            </div>
            
            <div className="p-8">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Design premium escuro</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Elementos tecnológicos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Padrão corporativo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Ideal para executivos</span>
                </div>
              </div>
              
              <Link 
                href="/versions/c"
                className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white py-3 rounded-lg hover:from-gray-800 hover:to-black transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Ver Versão C
                <Target className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Cada versão mantém todas as funcionalidades, apenas com design e abordagem diferentes
          </p>
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Voltar para a página principal
          </Link>
        </div>
      </div>
    </div>
  )
}
