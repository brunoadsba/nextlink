import { Metadata } from 'next'
import { Play, Clock, Users, Trophy, Star, Brain, Target, CheckCircle } from 'lucide-react'
import { realQuizzes } from '@/lib/data/realContent2025'

export const metadata: Metadata = {
  title: 'Quizzes - Next Link Pro',
  description: 'Teste seus conhecimentos com quizzes interativos sobre inovação e tecnologia',
}

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case 'Fácil':
      return 'bg-green-100 text-green-700 border-green-200'
    case 'Médio':
      return 'bg-yellow-100 text-yellow-700 border-yellow-200'
    case 'Difícil':
      return 'bg-red-100 text-red-700 border-red-200'
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200'
  }
}

function getDifficultyStars(difficulty: string) {
  switch (difficulty) {
    case 'Fácil':
      return 1
    case 'Médio':
      return 2
    case 'Difícil':
      return 3
    default:
      return 1
  }
}

export default function QuizzesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold serif-font mb-6">
              Quizzes Interativos
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Teste e aprimore seus conhecimentos sobre inovação e tecnologia
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm opacity-80">Quizzes</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">15k+</div>
                <div className="text-sm opacity-80">Participantes</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm opacity-80">Categorias</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">4.8★</div>
                <div className="text-sm opacity-80">Avaliação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Quiz */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold gradient-text serif-font mb-8 text-center">
            🏆 Quiz em Destaque
          </h2>
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl overflow-hidden max-w-4xl mx-auto text-white shadow-xl">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-8 h-8 text-yellow-300" />
                <span className="text-lg font-bold text-yellow-300">QUIZ MAIS POPULAR</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {realQuizzes[0].title}
              </h3>
              <p className="text-xl mb-8 opacity-90">
                {realQuizzes[0].description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">{realQuizzes[0].questions}</div>
                  <div className="text-sm opacity-80">Questões</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">{realQuizzes[0].duration}</div>
                  <div className="text-sm opacity-80">Duração</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">{realQuizzes[0].completions}</div>
                  <div className="text-sm opacity-80">Concluído</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-1">
                    {[...Array(getDifficultyStars(realQuizzes[0].difficulty))].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                    ))}
                  </div>
                  <div className="text-sm opacity-80">{realQuizzes[0].difficulty}</div>
                </div>
              </div>
              
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-3 mx-auto">
                <Play className="w-6 h-6" />
                Iniciar Quiz Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-3xl font-bold gradient-text serif-font mb-8 text-center">
            Categorias de Quiz
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Inteligência Artificial', count: 12, icon: '🤖', color: 'from-blue-500 to-cyan-500' },
              { name: 'IoT & Sensores', count: 8, icon: '📡', color: 'from-purple-500 to-indigo-500' },
              { name: 'Sustentabilidade', count: 10, icon: '🌱', color: 'from-green-500 to-emerald-500' },
              { name: 'Segurança Digital', count: 6, icon: '🔒', color: 'from-red-500 to-pink-500' },
              { name: 'Automação', count: 9, icon: '⚙️', color: 'from-orange-500 to-yellow-500' },
              { name: 'Robótica', count: 7, icon: '🤖', color: 'from-gray-500 to-gray-700' },
              { name: 'Big Data', count: 5, icon: '📊', color: 'from-teal-500 to-cyan-500' },
              { name: 'Cloud Computing', count: 4, icon: '☁️', color: 'from-sky-500 to-blue-500' }
            ].map((category) => (
              <div key={category.name} className={`bg-gradient-to-br ${category.color} rounded-xl p-6 text-white hover:scale-105 transition-transform cursor-pointer`}>
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-bold mb-2">{category.name}</h3>
                <p className="text-sm opacity-90">{category.count} quizzes</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Quizzes */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold gradient-text serif-font mb-8 text-center">
            Todos os Quizzes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realQuizzes.map((quiz) => (
              <div key={quiz.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center relative">
                  <div className="text-center text-white">
                    <Target className="w-16 h-16 mx-auto mb-3 opacity-80" />
                    <div className="text-sm font-medium opacity-90">QUIZ INTERATIVO</div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`${getDifficultyColor(quiz.difficulty)} text-xs px-3 py-1 rounded-full font-medium border`}>
                      {quiz.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {quiz.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {quiz.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {quiz.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-gray-900">{quiz.questions}</div>
                      <div className="text-xs text-gray-500">Questões</div>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <Clock className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                      <div className="text-xs text-gray-500">{quiz.duration}</div>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <Users className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                      <div className="text-xs text-gray-500">{quiz.completions}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(getDifficultyStars(quiz.difficulty))].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      {[...Array(3 - getDifficultyStars(quiz.difficulty))].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gray-300" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{quiz.difficulty}</span>
                  </div>
                  
                  <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 group-hover:bg-emerald-700">
                    <Play className="w-5 h-5" />
                    Iniciar Quiz
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Trophy className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold serif-font mb-6">
              Ranking de Conhecimento
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Complete quizzes, ganhe pontos e compete com outros especialistas
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-2">🥇</div>
                <div className="font-bold text-lg">Ana Silva</div>
                <div className="text-sm opacity-80">2,450 pontos</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-2">🥈</div>
                <div className="font-bold text-lg">Carlos Santos</div>
                <div className="text-sm opacity-80">2,280 pontos</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-2">🥉</div>
                <div className="font-bold text-lg">Marina Costa</div>
                <div className="text-sm opacity-80">2,150 pontos</div>
              </div>
            </div>
            
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Ver Ranking Completo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
