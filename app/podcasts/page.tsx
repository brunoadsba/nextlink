import { Metadata } from 'next'
import { Play, Clock, Eye, Heart, Search, Filter } from 'lucide-react'
import { realPodcasts } from '@/lib/data/realContent2025'

export const metadata: Metadata = {
  title: 'Podcasts - Next Link Pro',
  description: 'Explore nossos podcasts sobre inovação e tecnologia no Instituto SESI de SST',
}

export default function PodcastsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold serif-font mb-6">
              Podcasts Next Link
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Conteúdos em áudio sobre inovação, tecnologia e segurança do trabalho
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar podcasts..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
              </div>
              <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors">
                <Filter className="w-5 h-5" />
                Filtros
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="text-gray-600">Episódios</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">25k+</div>
              <div className="text-gray-600">Ouvintes</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">120h</div>
              <div className="text-gray-600">Conteúdo</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">4.8★</div>
              <div className="text-gray-600">Avaliação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Podcast */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-3xl font-bold gradient-text serif-font mb-8 text-center">
            Episódio em Destaque
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 ml-1" />
                    </div>
                    <div className="text-sm opacity-90">EPISÓDIO MAIS OUVIDO</div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium mb-2">
                  <span className="bg-emerald-100 px-2 py-1 rounded">Tecnologia</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {realPodcasts[0].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {realPodcasts[0].description}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {realPodcasts[0].duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {realPodcasts[0].views.toLocaleString()} views
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {realPodcasts[0].likes} likes
                  </div>
                </div>
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Reproduzir Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast List */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold gradient-text serif-font mb-8 text-center">
            Todos os Episódios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {realPodcasts.map((podcast) => (
              <div key={podcast.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center relative group">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors cursor-pointer">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                      {podcast.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {podcast.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {podcast.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {podcast.duration}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {podcast.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {podcast.likes}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-blue-600 mb-2">
                    Fonte: <a href={podcast.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{podcast.source}</a>
                  </div>
                  <div className="text-xs text-gray-400">
                    {new Date(podcast.publishedAt).toLocaleDateString('pt-BR')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold serif-font mb-6">
            Não Perca Nenhum Episódio
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Receba notificações sobre novos podcasts e conteúdos exclusivos sobre inovação e tecnologia
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Inscrever-se nas Notificações
          </button>
        </div>
      </section>
    </div>
  )
}
