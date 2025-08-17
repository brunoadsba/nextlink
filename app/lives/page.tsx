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
      <section className="bg-white dark:bg-[#0f0f0f] text-[#0f0f0f] dark:text-white py-16 border-b border-[#e5e5e5] dark:border-[#272727]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold serif-font mb-6">
              Lives Next Link
            </h1>
            <p className="text-xl mb-8 text-[#606060] dark:text-[#aaa]">
              Transmissões ao vivo com especialistas em inovação e tecnologia
            </p>
            {liveLives.length > 0 && (
              <div className="bg-[#ff0000] text-white rounded-lg p-4 inline-flex items-center gap-3 shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                <span className="font-medium">{liveLives.length} transmissão(ões) ao vivo agora</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Live Now Section */}
      {liveLives.length > 0 && (
        <section className="py-12 bg-white dark:bg-[#0f0f0f]">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-[#0f0f0f] dark:text-white serif-font mb-8 text-center">
              🔴 Ao Vivo Agora
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {liveLives.map((live) => {
                const statusInfo = getStatusInfo(live.status)
                return (
                  <div key={live.id} className="bg-white dark:bg-[#1f1f1f] rounded-2xl overflow-hidden text-[#0f0f0f] dark:text-white shadow-lg border border-[#e5e5e5] dark:border-[#272727] hover:shadow-xl transition-shadow">
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        {statusInfo.icon}
                        <span className="text-sm font-bold tracking-wide text-[#ff0000]">{statusInfo.text}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{live.title}</h3>
                      <p className="text-[#606060] dark:text-[#aaa] mb-6">{live.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-[#f9f9f9] dark:bg-[#272727] rounded-lg p-3 text-center">
                          <Users className="w-5 h-5 mx-auto mb-1 text-[#606060] dark:text-[#aaa]" />
                          <div className="text-lg font-bold text-[#0f0f0f] dark:text-white">{live.viewers ? live.viewers.toLocaleString() : '0'}</div>
                          <div className="text-xs text-[#606060] dark:text-[#aaa]">Assistindo</div>
                        </div>
                        <div className="bg-[#f9f9f9] dark:bg-[#272727] rounded-lg p-3 text-center">
                          <Clock className="w-5 h-5 mx-auto mb-1 text-[#606060] dark:text-[#aaa]" />
                          <div className="text-lg font-bold text-[#0f0f0f] dark:text-white">{live.duration}</div>
                          <div className="text-xs text-[#606060] dark:text-[#aaa]">Duração</div>
                        </div>
                      </div>
                      
                      <button className="w-full bg-[#ff0000] text-white py-4 rounded-lg font-bold hover:bg-[#cc0000] transition-colors flex items-center justify-center gap-2 shadow-lg">
                        <Play className="w-5 h-5" />
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
      <section className="py-12 bg-[#f9f9f9] dark:bg-[#0f0f0f]">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-[#0f0f0f] dark:text-white serif-font mb-8 text-center">
            📅 Próximas Transmissões
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scheduledLives.map((live) => {
              const statusInfo = getStatusInfo(live.status)
              const liveDate = new Date(live.scheduledAt)
              
              return (
                <div key={live.id} className="bg-white dark:bg-[#1f1f1f] rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-[#e5e5e5] dark:border-[#272727]">
                  <div className="h-48 bg-gradient-to-br from-[#ff0000] to-[#cc0000] flex items-center justify-center relative">
                    <div className="text-white text-center">
                      <Calendar className="w-12 h-12 mx-auto mb-2 opacity-90" />
                      <div className="text-sm opacity-90">AGENDADO PARA</div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`${statusInfo.className} text-xs px-2 py-1 rounded flex items-center gap-1`}>
                        {statusInfo.icon}
                        {statusInfo.text}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#0f0f0f] dark:text-white mb-3 line-clamp-2">
                      {live.title}
                    </h3>
                    <p className="text-[#606060] dark:text-[#aaa] text-sm mb-4 line-clamp-2">
                      {live.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-[#606060] dark:text-[#aaa]">
                        <Calendar className="w-4 h-4" />
                        {liveDate.toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#606060] dark:text-[#aaa]">
                        <Clock className="w-4 h-4" />
                        {liveDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })} - {live.duration}
                      </div>
                    </div>
                    
                    <button className="w-full bg-[#606060] text-white py-3 rounded-lg hover:bg-[#404040] transition-colors">
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
      <section className="py-12 bg-white dark:bg-[#0f0f0f]">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-[#0f0f0f] dark:text-white serif-font mb-8 text-center">
            📺 Transmissões Anteriores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {endedLives.map((live) => {
              const statusInfo = getStatusInfo(live.status)
              const liveDate = new Date(live.scheduledAt)
              
              return (
                <div key={live.id} className="bg-white dark:bg-[#1f1f1f] rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-[#e5e5e5] dark:border-[#272727]">
                  <div className="h-48 bg-gradient-to-br from-[#606060] to-[#404040] flex items-center justify-center relative group cursor-pointer">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`${statusInfo.className} text-xs px-2 py-1 rounded flex items-center gap-1`}>
                        {statusInfo.icon}
                        {statusInfo.text}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded">
                      {live.duration}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#0f0f0f] dark:text-white mb-3 line-clamp-2">
                      {live.title}
                    </h3>
                    <p className="text-[#606060] dark:text-[#aaa] text-sm mb-4 line-clamp-2">
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
