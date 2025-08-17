import { Metadata } from 'next'
import { Calendar, Clock, Users, Play, AlertCircle, CheckCircle, Wrench } from 'lucide-react'
import { realLives } from '@/lib/data/realContent2025'

export const metadata: Metadata = {
  title: 'Lives - Next Link Pro',
  description: 'Transmissões ao vivo sobre inovação e tecnologia no Instituto SESI de SST',
}

function getStatusInfo(status: string) {
  switch (status) {
    case 'live':
      return {
        icon: <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />,
        text: 'AO VIVO',
        className: 'bg-red-100 text-red-700'
      }
    case 'scheduled':
      return {
        icon: <Clock className="w-4 h-4" />,
        text: 'AGENDADO',
        className: 'bg-blue-100 text-blue-700'
      }
    case 'ended':
      return {
        icon: <CheckCircle className="w-4 h-4" />,
        text: 'FINALIZADO',
        className: 'bg-gray-100 text-gray-700'
      }
    default:
      return {
        icon: <AlertCircle className="w-4 h-4" />,
        text: 'UNKNOWN',
        className: 'bg-gray-100 text-gray-700'
      }
  }
}

export default function LivesPage() {
  const liveLives = realLives.filter(live => new Date(live.scheduledFor) <= new Date())
  const scheduledLives = realLives.filter(live => new Date(live.scheduledFor) > new Date())
  const endedLives: typeof realLives = [] // Placeholder para lives finalizadas

  return (
    <div className="min-h-screen bg-[#f9f9f9] dark:bg-[#0f0f0f]">
      {/* Hero Section */}
      <section className="bg-white dark:bg-[#0f0f0f] text-[#0f0f0f] dark:text-white py-32 border-b border-[#e5e5e5] dark:border-[#272727]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold serif-font mb-16">
              Lives Next Link
            </h1>
            <p className="text-2xl md:text-3xl mb-16 text-[#606060] dark:text-[#aaa] leading-relaxed">
              Transmissões ao vivo com especialistas em inovação e tecnologia
            </p>
            {liveLives.length > 0 && (
              <div className="bg-[#ff0000] text-white rounded-xl p-8 inline-flex items-center gap-6 shadow-xl">
                <div className="w-5 h-5 bg-white rounded-full animate-pulse" />
                <span className="font-bold text-xl">{liveLives.length} transmissão(ões) ao vivo agora</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Live Now Section */}
      {liveLives.length > 0 && (
        <section className="py-24 bg-white dark:bg-[#0f0f0f]">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f0f0f] dark:text-white serif-font mb-20 text-center">
              🔴 Ao Vivo Agora
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {liveLives.map((live) => {
                const statusInfo = getStatusInfo(live.status)
                return (
                  <div key={live.id} className="bg-white dark:bg-[#1f1f1f] rounded-3xl overflow-hidden text-[#0f0f0f] dark:text-white shadow-xl border border-[#e5e5e5] dark:border-[#272727] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="p-12">
                      <div className="flex items-center gap-4 mb-8">
                        {statusInfo.icon}
                        <span className="text-xl font-bold tracking-wide text-[#ff0000]">{statusInfo.text}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">{live.title}</h3>
                      <p className="text-[#606060] dark:text-[#aaa] mb-10 text-xl leading-relaxed">{live.description}</p>
                      
                      <div className="grid grid-cols-2 gap-8 mb-10">
                        <div className="bg-[#f9f9f9] dark:bg-[#272727] rounded-xl p-8 text-center">
                          <Users className="w-8 h-8 mx-auto mb-4 text-[#606060] dark:text-[#aaa]" />
                          <div className="text-3xl font-bold text-[#0f0f0f] dark:text-white">{live.viewers ? live.viewers.toLocaleString() : '0'}</div>
                          <div className="text-base text-[#606060] dark:text-[#aaa]">Assistindo</div>
                        </div>
                        <div className="bg-[#f9f9f9] dark:bg-[#272727] rounded-xl p-8 text-center">
                          <Clock className="w-8 h-8 mx-auto mb-4 text-[#606060] dark:text-[#aaa]" />
                          <div className="text-3xl font-bold text-[#0f0f0f] dark:text-white">{live.duration}</div>
                          <div className="text-base text-[#606060] dark:text-[#aaa]">Duração</div>
                        </div>
                      </div>
                      
                      <button className="w-full bg-[#ff0000] text-white py-6 rounded-xl font-bold hover:bg-[#cc0000] transition-all duration-300 flex items-center justify-center gap-4 shadow-lg text-xl hover:scale-105">
                        <Play className="w-8 h-8" />
                        Assistir Ao Vivo
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Scheduled Section */}
      <section className="py-24 bg-[#f9f9f9] dark:bg-[#0f0f0f]">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f0f0f] dark:text-white serif-font mb-20 text-center">
            📅 Próximas Transmissões
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {scheduledLives.map((live) => {
              const statusInfo = getStatusInfo(live.status)
              const liveDate = new Date(live.scheduledAt)
              
              return (
                <div key={live.id} className="bg-white dark:bg-[#1f1f1f] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#e5e5e5] dark:border-[#272727] hover:-translate-y-2">
                  <div className="h-64 bg-gradient-to-br from-[#ff0000] to-[#cc0000] flex items-center justify-center relative">
                    <div className="text-white text-center">
                      <Calendar className="w-20 h-20 mx-auto mb-6 opacity-90" />
                      <div className="text-xl opacity-90 font-medium">AGENDADO PARA</div>
                    </div>
                    <div className="absolute top-8 left-8">
                      <span className={`${statusInfo.className} text-base px-4 py-3 rounded-lg flex items-center gap-3`}>
                        {statusInfo.icon}
                        {statusInfo.text}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-10">
                    <h3 className="text-2xl font-bold text-[#0f0f0f] dark:text-white mb-6 line-clamp-2 leading-tight">
                      {live.title}
                    </h3>
                    <p className="text-[#606060] dark:text-[#aaa] text-lg mb-8 line-clamp-2 leading-relaxed">
                      {live.description}
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-4 text-lg text-[#606060] dark:text-[#aaa]">
                        <Calendar className="w-6 h-6" />
                        {liveDate.toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-4 text-lg text-[#606060] dark:text-[#aaa]">
                        <Clock className="w-6 h-6" />
                        {liveDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })} - {live.duration}
                      </div>
                    </div>
                    
                    <button className="w-full bg-[#606060] text-white py-5 rounded-xl hover:bg-[#404040] transition-all duration-300 font-medium text-lg">
                      Definir Lembrete
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Past Lives Section */}
      <section className="py-24 bg-white dark:bg-[#0f0f0f]">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f0f0f] dark:text-white serif-font mb-20 text-center">
            📺 Transmissões Anteriores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {endedLives.map((live) => {
              const statusInfo = getStatusInfo(live.status)
              const liveDate = new Date(live.scheduledAt)
              
              return (
                <div key={live.id} className="bg-white dark:bg-[#1f1f1f] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#e5e5e5] dark:border-[#272727] hover:-translate-y-2">
                  <div className="h-64 bg-gradient-to-br from-[#606060] to-[#404040] flex items-center justify-center relative group cursor-pointer">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                    <div className="absolute top-8 left-8">
                      <span className={`${statusInfo.className} text-base px-4 py-3 rounded-lg flex items-center gap-3`}>
                        {statusInfo.icon}
                        {statusInfo.text}
                      </span>
                    </div>
                    <div className="absolute bottom-8 right-8 bg-black/50 text-white text-base px-4 py-3 rounded-lg">
                      {live.duration}
                    </div>
                  </div>
                  
                  <div className="p-10">
                    <h3 className="text-2xl font-bold text-[#0f0f0f] dark:text-white mb-6 line-clamp-2 leading-tight">
                      {live.title}
                    </h3>
                    <p className="text-[#606060] dark:text-[#aaa] text-lg mb-8 line-clamp-2 leading-relaxed">
                      {live.description}
                    </p>
                    
                                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {liveDate.toLocaleDateString('pt-BR')}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {live.viewers ? live.viewers.toLocaleString() : '0'} views
                        </div>
                      </div>
                    
                    <button className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                      <Play className="w-5 h-5" />
                      Assistir Gravação
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Development Notice Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wrench className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold serif-font mb-6">
              🚧 Em Desenvolvimento
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Esta funcionalidade está sendo desenvolvida com muito carinho pela nossa equipe. 
              Em breve você poderá desfrutar de transmissões ao vivo completas com chat interativo, 
              perguntas em tempo real e muito mais conteúdo exclusivo sobre inovação e tecnologia.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block">
              <p className="text-lg font-medium mb-2">🎯 Funcionalidades Planejadas:</p>
              <ul className="text-left space-y-2 text-sm opacity-90">
                <li>• Chat ao vivo com moderadores</li>
                <li>• Sistema de perguntas e respostas</li>
                <li>• Gravações disponíveis após transmissão</li>
                <li>• Notificações personalizadas</li>
                <li>• Integração com redes sociais</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Notification Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold serif-font mb-6">
            Nunca Perca uma Live
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Receba notificações sobre novas transmissões e participe ao vivo das discussões
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Ativar Notificações
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Ver Agenda Completa
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
