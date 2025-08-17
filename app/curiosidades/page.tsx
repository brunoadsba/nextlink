import { Metadata } from 'next'
import { Star, Clock, ArrowLeft, Wrench, Lightbulb, Rocket } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'


export const metadata: Metadata = {
  title: 'Curiosidades - Next Link Pro',
  description: 'Seção em desenvolvimento - Em breve, curiosidades e insights fascinantes sobre inovação e tecnologia',
}

export default function CuriosidadesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo SESI */}
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
            
            <Star className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-5xl md:text-6xl font-bold serif-font mb-6">
              Curiosidades
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Seção em Desenvolvimento
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Ícone e Mensagem Principal */}
            <div className="bg-white rounded-2xl shadow-lg p-12 mb-12">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-12 h-12 text-amber-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Área em Desenvolvimento
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nossa equipe está trabalhando para trazer conteúdos exclusivos e insights fascinantes 
                  sobre inovação, tecnologia e segurança do trabalho. Em breve, você encontrará aqui 
                  curiosidades que vão enriquecer seu conhecimento e despertar novas perspectivas.
                </p>
              </div>
              
              {/* Recursos Planejados */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-amber-50 rounded-xl">
                  <Lightbulb className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800 mb-2">Insights Inovadores</h3>
                  <p className="text-sm text-gray-600">
                    Descobertas surpreendentes sobre tecnologia e indústria
                  </p>
                </div>
                
                <div className="p-6 bg-orange-50 rounded-xl">
                  <Star className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800 mb-2">Fatos Interessantes</h3>
                  <p className="text-sm text-gray-600">
                    Dados e estatísticas que você não imaginava
                  </p>
                </div>
                
                <div className="p-6 bg-yellow-50 rounded-xl">
                  <Rocket className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800 mb-2">Tendências Futuras</h3>
                  <p className="text-sm text-gray-600">
                    O que está por vir no mundo da tecnologia
                  </p>
                </div>
              </div>
              
              {/* Previsão de Lançamento */}
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-center gap-3 text-amber-800">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Previsão de Lançamento: Setembro 2025</span>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="space-y-4">
                <p className="text-gray-600">
                  Enquanto isso, explore nossos outros conteúdos disponíveis:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/podcasts" 
                    className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                  >
                    Explorar Podcasts
                  </Link>
                  <Link 
                    href="/blog" 
                    className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
                  >
                    Ler Artigos
                  </Link>
                  <Link 
                    href="/lives" 
                    className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-6 py-3 rounded-lg transition-colors font-medium"
                  >
                    Ver Lives
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Voltar */}
            <Link 
              href="/" 
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar à Página Inicial
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
