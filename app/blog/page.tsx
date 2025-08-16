import { Metadata } from 'next'
import { Calendar, Clock, Eye, Heart, Search, Filter, User, ArrowRight } from 'lucide-react'
import { realArticles } from '@/lib/data/realContent2025'

export const metadata: Metadata = {
  title: 'Blog - Next Link Pro',
  description: 'Artigos e insights sobre inovação e tecnologia no Instituto SESI de SST',
}

export default function BlogPage() {
  const featuredPost = realArticles[0]
  const recentPosts = realArticles.slice(1)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold serif-font mb-6">
              Blog Next Link
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Insights, análises e tendências em inovação e tecnologia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>
              <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors">
                <Filter className="w-5 h-5" />
                Categorias
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
              <div className="text-3xl font-bold gradient-text">150+</div>
              <div className="text-gray-600">Artigos</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">50k+</div>
              <div className="text-gray-600">Leitores</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">25</div>
              <div className="text-gray-600">Especialistas</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">12</div>
              <div className="text-gray-600">Categorias</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-3xl font-bold gradient-text serif-font mb-8 text-center">
            Artigo em Destaque
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-6xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-8">
                  <div className="text-white text-center">
                    <div className="text-6xl font-bold mb-2">AI</div>
                    <div className="text-xl opacity-90">Tecnologia</div>
                    <div className="text-sm opacity-70 mt-2">ARTIGO MAIS LIDO</div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium mb-3">
                  <span className="bg-emerald-100 px-3 py-1 rounded-full">{featuredPost.category}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{featuredPost.author}</div>
                    <div className="text-sm text-gray-500">Autor</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.publishedAt).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {featuredPost.views.toLocaleString()}
                  </div>
                </div>
                
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
                  Ler Artigo Completo
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold gradient-text serif-font mb-8 text-center">
            Explore por Categoria
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Inteligência Artificial', count: 25, color: 'from-blue-500 to-cyan-500' },
              { name: 'Tecnologia', count: 18, color: 'from-emerald-500 to-teal-500' },
              { name: 'Sustentabilidade', count: 12, color: 'from-green-500 to-emerald-500' },
              { name: 'IoT', count: 15, color: 'from-purple-500 to-indigo-500' },
              { name: 'Segurança', count: 22, color: 'from-red-500 to-pink-500' },
              { name: 'Inovação', count: 20, color: 'from-orange-500 to-yellow-500' }
            ].map((category) => (
              <div key={category.name} className={`bg-gradient-to-br ${category.color} rounded-xl p-4 text-white text-center hover:scale-105 transition-transform cursor-pointer`}>
                <div className="text-2xl font-bold mb-1">{category.count}</div>
                <div className="text-sm opacity-90">{category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-3xl font-bold gradient-text serif-font mb-8 text-center">
            Artigos Recentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center relative overflow-hidden">
                  <div className="text-4xl font-bold text-gray-600 opacity-50">
                    {post.category.charAt(0)}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {post.readTime}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{post.author}</div>
                      <div className="text-xs text-gray-500">Autor</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                  
                  <button className="w-full text-indigo-600 font-medium py-2 hover:bg-indigo-50 rounded-lg transition-colors">
                    Ler mais →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold serif-font mb-6">
            Fique por Dentro das Novidades
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Receba nossos artigos mais recentes e insights exclusivos diretamente no seu email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Inscrever-se
            </button>
          </div>
          <p className="text-sm opacity-70 mt-4">
            Sem spam. Apenas conteúdo de qualidade, uma vez por semana.
          </p>
        </div>
      </section>
    </div>
  )
}
