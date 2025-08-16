import { Metadata } from 'next'
import { Plus, Clock, ArrowLeft, Grid, BookOpen, Users, Target, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Mais Conteúdos - Next Link Pro',
  description: 'Seção em desenvolvimento - Em breve, novos formatos e conteúdos expandidos sobre inovação e tecnologia',
}

export default function MaisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo SESI */}
            <div className="mb-6">
              <Image
                src="/logo_seisi.png"
                alt="SESI - Serviço Social da Indústria"
                width={320}
                height={88}
                className="mx-auto opacity-90 mb-4"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}
              />
            </div>
            
            <Plus className="w-16 h-16 mx-auto mb-6 text-teal-300" />
            <h1 className="text-5xl md:text-6xl font-bold serif-font mb-6">
              Mais Conteúdos
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Novos Formatos em Desenvolvimento
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Mensagem Principal */}
            <div className="bg-white rounded-2xl shadow-lg p-12 mb-12 text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Grid className="w-12 h-12 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Expansão de Conteúdos
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Estamos constantemente evoluindo nossa plataforma para oferecer experiências 
                  de aprendizado mais ricas e diversificadas. Em breve, novos formatos de conteúdo 
                  estarão disponíveis para ampliar seu conhecimento em inovação e tecnologia.
                </p>
              </div>
            </div>
            
            {/* Novos Formatos Planejados */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Novos Formatos em Desenvolvimento
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-center mb-2">E-books Interativos</h4>
                  <p className="text-sm text-gray-600 text-center">
                    Guias completos com conteúdo interativo e multimídia
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-center mb-2">Workshops Online</h4>
                  <p className="text-sm text-gray-600 text-center">
                    Sessões práticas de aprendizado com especialistas
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-center mb-2">Simuladores</h4>
                  <p className="text-sm text-gray-600 text-center">
                    Ambientes virtuais para prática e experimentação
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-center mb-2">Dashboards</h4>
                  <p className="text-sm text-gray-600 text-center">
                    Acompanhamento personalizado de progresso
                  </p>
                </div>
              </div>
            </div>
            
            {/* Cronograma de Lançamento */}
            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-8 mb-12">
              <div className="text-center">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">
                  Cronograma de Lançamentos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-emerald-600 font-bold mb-1">Q1 2025</div>
                    <div className="text-sm text-gray-600">E-books Interativos</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-emerald-600 font-bold mb-1">Q2 2025</div>
                    <div className="text-sm text-gray-600">Workshops Online</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-emerald-600 font-bold mb-1">Q3 2025</div>
                    <div className="text-sm text-gray-600">Simuladores</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-emerald-600 font-bold mb-1">Q4 2025</div>
                    <div className="text-sm text-gray-600">Dashboards</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Actions */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Explore Nossos Conteúdos Atuais
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Link 
                  href="/podcasts" 
                  className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                >
                  Podcasts
                </Link>
                <Link 
                  href="/lives" 
                  className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
                >
                  Lives
                </Link>
                <Link 
                  href="/blog" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Blog
                </Link>
                <Link 
                  href="/quizzes" 
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  Quizzes
                </Link>
              </div>
              
              {/* Voltar */}
              <Link 
                href="/" 
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar à Página Inicial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
