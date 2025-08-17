import { Metadata } from 'next'
import { Link2, Brain, Eye, Settings, GraduationCap, Users, Wrench, Lightbulb, TrendingUp, Podcast, Video, HelpCircle, Navigation, Star, Plus, Rocket, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedCard } from '@/components/ui/AnimatedCard'

export const metadata: Metadata = {
  title: 'Next Link Pro - Inovação e Tecnologia 2025',
  description: 'Conectando pessoas através do conhecimento e inovação no Instituto SESI de SST',
}

export default function HomePage() {
  return (
    <main className="theme-transition">
      {/* Header */}
      <header className="hero-gradient dark:hero-gradient-dark text-white section animate-fade-in">
        <div className="container-custom">
          <div className="text-center animate-fade-in">
            <div className="mb-6 animate-float">
              <Link2 className="w-16 h-16 mx-auto mb-4 text-emerald-300" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold serif-font mb-6 animate-fade-in">
              Next Link
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light mb-8 max-w-3xl mx-auto px-4 animate-fade-in">
              Inovação e Tecnologia • Instituto SESI de SST
            </p>
            <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full px-4 md:px-6 py-3 hover:scale-105 transition-transform duration-300">
              <span className="font-medium text-sm md:text-base">Conectando o futuro hoje</span>
            </div>
          </div>
        </div>
      </header>

      {/* Contexto */}
      <section className="section bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12 px-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text dark:gradient-text-dark serif-font mb-6">
              Contexto
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
                Em um mundo cada vez mais conectado, onde novas ideias e avanços tecnológicos moldam o nosso futuro, buscamos contribuir para a ampliação dos seus conhecimentos.
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Assim, criamos o <span className="font-bold text-emerald-600 dark:text-emerald-400">Next Link - Inovação e Tecnologia</span> do Instituto SESI de SST, um espaço para compartilhar conteúdos relevantes sobre inovação e tecnologia, em diversos formatos: podcasts, lives, quizzes, trilhas de aprendizagem, curiosidades e muito mais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proposição do Canal */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12 px-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text dark:gradient-text-dark serif-font mb-4">
              Proposição do Canal
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Conectar pessoas no ambiente de trabalho por meio de conteúdos sobre inovação e tecnologia, apresentados em diferentes formatos para inspirar, informar e engajar.
            </p>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12 px-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text dark:gradient-text-dark serif-font mb-4">
              Objetivos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            <AnimatedCard delay={1}>
              <div className="icon-container dark:icon-container-dark mx-auto mb-6">
                <Link2 className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">Conexão com a Inovação</h3>
              <div className="highlight-box">
                <p className="font-medium text-gray-700 dark:text-gray-200 text-sm md:text-base">Levar conhecimento ao cliente interno do Instituto SESI de SST sobre as principais tendências em inovação e tecnologia nas áreas de atuação.</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={2}>
              <div className="icon-container dark:icon-container-dark mx-auto mb-6">
                <Eye className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">Visão Aprimorada</h3>
              <div className="highlight-box">
                <p className="font-medium text-gray-700 dark:text-gray-200 text-sm md:text-base">Gerar engajamento por meio de conteúdos que aumentem a capacidade de identificar soluções e aprimorar processos internos.</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={3}>
              <div className="icon-container dark:icon-container-dark mx-auto mb-6">
                <Settings className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">Estímulo à Inovação</h3>
              <div className="highlight-box">
                <p className="font-medium text-gray-700 dark:text-gray-200 text-sm md:text-base">Incentivar a proposição de soluções incrementais, inovadoras e disruptivas.</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Resultados Esperados */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12 fade-in px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text serif-font mb-4">
              Resultados Esperados
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Transformação digital e cultural no ambiente de trabalho
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-glass p-6 fade-in">
                <div className="icon-container mx-auto mb-4 w-16 h-16">
                  <GraduationCap className="text-white w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 mb-3 text-center">Disseminação de Conhecimento</h4>
                <p className="text-gray-600 text-sm md:text-base text-center">Maior disseminação de conhecimento sobre inovação e tecnologia entre os colaboradores</p>
              </div>

              <div className="card-glass p-6 fade-in">
                <div className="icon-container mx-auto mb-4 w-16 h-16">
                  <Users className="text-white w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 mb-3 text-center">Engajamento</h4>
                <p className="text-gray-600 text-sm md:text-base text-center">Aumento do engajamento e da participação nas iniciativas de inovação do Instituto SESI de SST</p>
              </div>

              <div className="card-glass p-6 fade-in">
                <div className="icon-container mx-auto mb-4 w-16 h-16">
                  <Wrench className="text-white w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 mb-3 text-center">Desenvolvimento de Competências</h4>
                <p className="text-gray-600 text-sm md:text-base text-center">Desenvolvimento de competências para identificar, propor e implementar melhorias nos processos internos</p>
              </div>

              <div className="card-glass p-6 fade-in">
                <div className="icon-container mx-auto mb-4 w-16 h-16">
                  <Lightbulb className="text-white w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 mb-3 text-center">Cultura de Inovação</h4>
                <p className="text-gray-600 text-sm md:text-base text-center">Estímulo à cultura de inovação no ambiente de trabalho</p>
              </div>

              <div className="card-glass p-6 fade-in lg:col-span-2">
                <div className="icon-container mx-auto mb-4 w-16 h-16">
                  <TrendingUp className="text-white w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 mb-3 text-center">Visão Estratégica</h4>
                <p className="text-gray-600 text-sm md:text-base text-center">Ampliação da visão estratégica e da capacidade de adaptação às mudanças tecnológicas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formatos de Conteúdo */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12 fade-in px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text serif-font mb-4">
              Formatos de Conteúdo
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Diversos formatos para máximo engajamento
            </p>
          </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto px-4">
                <a href="/podcasts" className="stat-card fade-in text-center p-4 hover:scale-105 transition-transform cursor-pointer">
                  <Podcast className="w-8 h-8 mx-auto text-emerald-500 mb-2" />
                  <h4 className="font-bold text-gray-800 text-sm md:text-base">Podcasts</h4>
                </a>
                <a href="/lives" className="stat-card fade-in text-center p-4 hover:scale-105 transition-transform cursor-pointer">
                  <Video className="w-8 h-8 mx-auto text-emerald-500 mb-2" />
                  <h4 className="font-bold text-gray-800 text-sm md:text-base">Lives</h4>
                </a>
                <a href="/quizzes" className="stat-card fade-in text-center p-4 hover:scale-105 transition-transform cursor-pointer">
                  <HelpCircle className="w-8 h-8 mx-auto text-emerald-500 mb-2" />
                  <h4 className="font-bold text-gray-800 text-sm md:text-base">Quizzes</h4>
                </a>
                <a href="/blog" className="stat-card fade-in text-center p-4 hover:scale-105 transition-transform cursor-pointer">
                  <Navigation className="w-8 h-8 mx-auto text-emerald-500 mb-2" />
                  <h4 className="font-bold text-gray-800 text-sm md:text-base">Blog</h4>
                </a>
                        <a href="/curiosidades" className="stat-card fade-in text-center p-4 hover:scale-105 transition-transform cursor-pointer">
          <Star className="w-8 h-8 mx-auto text-emerald-500 mb-2" />
          <h4 className="font-bold text-gray-800 text-sm md:text-base">Curiosidades</h4>
        </a>
        <a href="/mais" className="stat-card fade-in text-center p-4 hover:scale-105 transition-transform cursor-pointer">
          <Plus className="w-8 h-8 mx-auto text-emerald-500 mb-2" />
          <h4 className="font-bold text-gray-800 text-sm md:text-base">Mais</h4>
        </a>
            </div>
        </div>
      </section>

      {/* Conclusão */}
      <section className="section hero-gradient text-white">
        <div className="container-custom text-center px-4">
          <div className="max-w-4xl mx-auto fade-in">
            <Rocket className="w-12 h-12 mx-auto mb-6 text-emerald-300" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold serif-font mb-6">
              Next Link
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Conectando pessoas através do conhecimento e inovação no Instituto SESI de SST
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-12">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6">
                <Brain className="w-8 h-8 mx-auto mb-4 text-emerald-300" />
                <h3 className="font-bold mb-2 text-sm md:text-base">Conhecimento</h3>
                <p className="text-xs md:text-sm opacity-90">Ampliação contínua do saber</p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6">
                <Link2 className="w-8 h-8 mx-auto mb-4 text-emerald-300" />
                <h3 className="font-bold mb-2 text-sm md:text-base">Conexão</h3>
                <p className="text-xs md:text-sm opacity-90">Ligando pessoas e ideias</p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6">
                <ArrowRight className="w-8 h-8 mx-auto mb-4 text-emerald-300" />
                <h3 className="font-bold mb-2 text-sm md:text-base">Futuro</h3>
                <p className="text-xs md:text-sm opacity-90">Preparando para o amanhã</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 md:py-8">
        <div className="container-custom text-center px-4">
          <div className="mb-4">
            <Link2 className="w-6 h-6 mx-auto text-emerald-400 mb-2" />
            <h3 className="font-bold text-lg">Next Link</h3>
          </div>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            Inovação e Tecnologia • Instituto SESI de SST • 2025
          </p>
          <div className="text-xs md:text-sm text-gray-500">
            Desenvolvido por Bruno Almeida
          </div>
        </div>
      </footer>
    </main>
  )
}
