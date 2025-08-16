import { Metadata } from 'next'
import { Link2, Brain, Eye, Settings, GraduationCap, Users, Wrench, Lightbulb, TrendingUp, Podcast, Video, HelpCircle, Navigation, Star, Plus, Rocket, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { realPodcasts, realLives, realArticles, realQuizzes } from '@/lib/data/realContent2025'

export const metadata: Metadata = {
  title: 'Next Link Pro - Versão A: Corporativa Moderna',
  description: 'Plataforma corporativa para conectar pessoas através de inovação e tecnologia',
}

export default function VersionAPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="container mx-auto px-4 py-8 lg:py-12">
        <section className="text-center mb-12">
          {/* Conteúdo existente */}
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="card-glass p-6 md:p-8 fade-in">
            <div className="icon-container mx-auto mb-6">
              <Link2 className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">Conexão com a Inovação</h3>
            <div className="highlight-box">
              <p className="font-medium text-gray-700 text-sm md:text-base">Levar conhecimento ao cliente interno do Instituto SESI de SST sobre as principais tendências em inovação e tecnologia nas áreas de atuação, mantendo-os atualizados com as novidades de 2025.</p>
            </div>
          </div>

          <div className="card-glass p-6 md:p-8 fade-in">
            <div className="icon-container mx-auto mb-6">
              <Eye className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">Visão Aprimorada</h3>
            <div className="highlight-box">
              <p className="font-medium text-gray-700 text-sm md:text-base">Gerar engajamento por meio de conteúdos que aumentem a capacidade de identificar soluções inovadoras e aprimorar processos internos com as tecnologias emergentes de 2025.</p>
            </div>
          </div>

          <div className="card-glass p-6 md:p-8 fade-in">
            <div className="icon-container mx-auto mb-6">
              <Settings className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">Estímulo à Inovação</h3>
            <div className="highlight-box">
              <p className="font-medium text-gray-700 text-sm md:text-base">Incentivar a proposição de soluções incrementais, inovadoras e disruptivas, utilizando as mais recentes tecnologias como IA, IoT e automação avançada.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Resultados Esperados */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12 fade-in px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text serif-font mb-4">
              Resultados Esperados em 2025
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
                <p className="text-gray-600 text-sm md:text-base text-center">Maior disseminação de conhecimento sobre inovação e tecnologia entre os colaboradores, focando nas tendências de 2025</p>
              </div>

              <div className="card-glass p-6 fade-in">
                <div className="icon-container mx-auto mb-4 w-16 h-16">
                  <Users className="text-white w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 mb-3 text-center">Engajamento Corporativo</h4>
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
                <p className="text-gray-600 text-sm md:text-base text-center">Estímulo à cultura de inovação no ambiente de trabalho do Instituto SESI</p>
              </div>

              <div className="card-glass p-6 fade-in lg:col-span-2">
                <div className="icon-container mx-auto mb-4 w-16 h-16">
                  <TrendingUp className="text-white w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 mb-3 text-center">Visão Estratégica</h4>
                <p className="text-gray-600 text-sm md:text-base text-center">Ampliação da visão estratégica e da capacidade de adaptação às mudanças tecnológicas emergentes</p>
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
              Diversos formatos para máximo engajamento corporativo
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto px-4">
            <a href="/podcasts" className="stat-card fade-in text-center p-4 hover:scale-105 transition-transform cursor-pointer">
              <Podcast className="w-8 h-8 mx-auto text-emerald-500 mb-2" />
              <h4 className="font-bold text-gray-800 text-sm md:text-base">Podcasts</h4>
              <p className="text-xs text-gray-600 mt-1">{realPodcasts.length} episódios</p>
            </a>
            <a href="/lives" className="stat-card fade-in text-center p-4 hover:scale-105 transition-transform cursor-pointer">
              <Video className="w-8 h-8 mx-auto text-emerald-500 mb-2" />
              <h4 className="font-bold text-gray-800 text-sm md:text-base">Lives</h4>
              <p className="text-xs text-gray-600 mt-1">{realLives.length} eventos</p>
            </a>
            <a href="/quizzes" className="stat-card fade-in text-center p-4 hover:scale-105 transition-transform cursor-pointer">
              <HelpCircle className="w-8 h-8 mx-auto text-emerald-500 mb-2" />
              <h4 className="font-bold text-gray-800 text-sm md:text-base">Quizzes</h4>
              <p className="text-xs text-gray-600 mt-1">{realQuizzes.length} desafios</p>
            </a>
            <a href="/blog" className="stat-card fade-in text-center p-4 hover:scale-105 transition-transform cursor-pointer">
              <Navigation className="w-8 h-8 mx-auto text-emerald-500 mb-2" />
              <h4 className="font-bold text-gray-800 text-sm md:text-base">Blog</h4>
              <p className="text-xs text-gray-600 mt-1">{realArticles.length} artigos</p>
            </a>
            <a href="/curiosidades" className="stat-card fade-in text-center p-4 hover:scale-105 transition-transform cursor-pointer">
              <Star className="w-8 h-8 mx-auto text-emerald-500 mb-2" />
              <h4 className="font-bold text-gray-800 text-sm md:text-base">Curiosidades</h4>
              <p className="text-xs text-gray-600 mt-1">Em breve</p>
            </a>
            <a href="/mais" className="stat-card fade-in text-center p-4 hover:scale-105 transition-transform cursor-pointer">
              <Plus className="w-8 h-8 mx-auto text-emerald-500 mb-2" />
              <h4 className="font-bold text-gray-800 text-sm md:text-base">Mais</h4>
              <p className="text-xs text-gray-600 mt-1">Novos formatos</p>
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
              Next Link Pro
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
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                Explorar Plataforma
              </button>
              <a href="/versions" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg transition-colors font-medium">
                Ver Outras Versões
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Destaques de Conteúdo Real */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text serif-font mb-4">
              Destaques Recentes
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Conteúdos atualizados baseados em fontes confiáveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {realArticles.slice(0, 3).map((article, index) => (
              <div 
                key={article.id} 
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100"
              >
                <div className="h-48 bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center relative">
                  <div className="text-white text-center p-4">
                    <h4 className="font-bold text-lg mb-2">{article.category}</h4>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <Brain className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>Por {article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <div className="text-xs text-emerald-600 mb-4">
                    Fonte: <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">{article.source}</a>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {article.views.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {article.likes}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-gray-500 mb-4">
              <strong>Fontes Confiáveis:</strong> AINEWS • Artificial Intelligence News • Reuters Technology
            </p>
            <a href="/blog" className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              Ver Todos os Artigos
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 md:py-8">
        <div className="container-custom text-center px-4">
          <div className="mb-4">
            <Link2 className="w-6 h-6 mx-auto text-emerald-400 mb-2" />
            <h3 className="font-bold text-lg">Next Link Pro</h3>
          </div>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            Inovação e Tecnologia • Instituto SESI de SST
          </p>
          <div className="text-xs md:text-sm text-gray-500">
            Desenvolvido por Bruno Almeida
          </div>
        </div>
      </footer>
    </div>
  )
}
