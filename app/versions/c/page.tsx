import { Metadata } from 'next'
import { Target, ArrowRight, Zap, Shield, Cpu, Code, CheckCircle, TrendingUp, Link2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { realPodcasts, realLives, realArticles, realQuizzes } from '@/lib/data/realContent2025'

export const metadata: Metadata = {
  title: 'Next Link Pro - Versão C: SESI Corporativo Premium Tech',
  description: 'Plataforma SESI de comunicação corporativa com elegância e tecnologia avançada - Instituto SESI de SST',
}

export default function VersionCPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 text-white font-sans">
      <main className="container mx-auto px-4 py-8 lg:py-12">
        <section className="text-center mb-12">
          {/* Conteúdo existente */}
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-slate-700/60 to-slate-800/40 p-8 rounded-2xl shadow-md border border-slate-500/30 hover:border-slate-400/60 transition-all duration-300 flex flex-col items-center hover:scale-105">
            <Zap className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="font-bold text-white text-lg mb-2">Insights em Áudio</h4>
            <p className="text-xs text-slate-200">
              {realPodcasts.length} episódios disponíveis
            </p>
            <p className="text-xs text-slate-400 mt-1">Análises de especialistas</p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-700/60 to-slate-800/40 p-8 rounded-2xl shadow-md border border-slate-500/30 hover:border-slate-400/60 transition-all duration-300 flex flex-col items-center hover:scale-105">
            <Shield className="w-12 h-12 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="font-bold text-white text-lg mb-2">Webinários Exclusivos</h4>
            <p className="text-xs text-slate-200">
              {realLives.length} eventos programados
            </p>
            <p className="text-xs text-slate-400 mt-1">Sessões interativas</p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-700/60 to-slate-800/40 p-8 rounded-2xl shadow-md border border-slate-500/30 hover:border-slate-400/60 transition-all duration-300 flex flex-col items-center hover:scale-105">
            <Code className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="font-bold text-white text-lg mb-2">Artigos Técnicos</h4>
            <p className="text-xs text-slate-200">
              {realArticles.length} artigos especializados
            </p>
            <p className="text-xs text-slate-400 mt-1">Aprofundamento em temas</p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-700/60 to-slate-800/40 p-8 rounded-2xl shadow-md border border-slate-500/30 hover:border-slate-400/60 transition-all duration-300 flex flex-col items-center hover:scale-105">
            <CheckCircle className="w-12 h-12 text-rose-400 mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="font-bold text-white text-lg mb-2">Desafios Interativos</h4>
            <p className="text-xs text-slate-200">
              {realQuizzes.length} avaliações disponíveis
            </p>
            <p className="text-xs text-slate-400 mt-1">Avalie seu conhecimento</p>
          </div>
        </section>

        {/* Destaques de Conteúdo Real */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Destaques Recentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realArticles.slice(0, 3).map((article, index) => (
              <div 
                key={article.id} 
                className="bg-gradient-to-br from-slate-700/60 to-slate-800/40 p-6 rounded-2xl shadow-lg border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-3 h-3 rounded-full ${
                    index === 0 ? 'bg-blue-400' : index === 1 ? 'bg-emerald-400' : 'bg-amber-400'
                  }`}></div>
                  <span className="text-xs text-slate-400 uppercase tracking-wide">{article.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Por {article.author}</span>
                  <span>{article.readTime}</span>
                </div>
                <div className="mt-4 text-xs text-blue-400">
                  Fonte: <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{article.source}</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Impacto Esperado */}
        <section className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-300 mb-16">
            Impacto SESI 2025
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-700/40 to-slate-800/30 p-8 rounded-2xl shadow-lg border border-slate-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Decisões Baseadas em Dados</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Capacitar a liderança com análises precisas e dados confiáveis para decisões estratégicas 
                que impactam a segurança e produtividade industrial.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/20 p-8 rounded-2xl shadow-lg border border-slate-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Cultura de Inovação</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Fomentar um ambiente organizacional que valoriza experimentação, criatividade e implementação 
                de soluções tecnológicas inovadoras.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/20 p-8 rounded-2xl shadow-lg border border-slate-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Eficiência Operacional</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Redução significativa de custos e otimização de processos através da aplicação estratégica 
                de tecnologias emergentes e automação inteligente.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/20 p-8 rounded-2xl shadow-lg border border-slate-500/30 md:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4">Engajamento da Equipe</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Aumentar participação e interesse dos colaboradores em iniciativas tecnológicas e programas 
                de desenvolvimento profissional contínuo.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/20 p-8 rounded-2xl shadow-lg border border-slate-500/30 md:col-span-2 lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Liderança Tecnológica Nacional</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Posicionar o Instituto SESI de SST como referência absoluta em inovação, tecnologia e segurança 
                do trabalho no cenário industrial brasileiro e internacional.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Premium */}
      <footer className="bg-gradient-to-r from-blue-900 via-gray-900 to-green-900 py-12 text-center border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Image
              src="/images/sesi.png"
              alt="Logo SESI"
              width={240}
              height={96}
              className="mx-auto h-24 w-auto mb-6 object-contain"
              priority
            />
          </div>
          <Link2 className="w-8 h-8 mx-auto text-yellow-400 mb-3" />
          <h3 className="font-bold text-2xl text-white mb-3">Next Link Pro</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-2xl mx-auto">
            <span className="text-yellow-400">Inovação</span> e <span className="text-green-400">Tecnologia</span> • Instituto SESI de SST
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-400 max-w-4xl mx-auto mb-6">
            <div>
              <strong className="text-blue-400">Fontes de Conteúdo:</strong><br />
              <a href="https://ainews.net.br/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">AINEWS</a> •{' '}
              <a href="https://www.artificialintelligence-news.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">AI News</a>
            </div>
            <div>
              <strong className="text-green-400">Parceiros:</strong><br />
              FIEB • SESI Bahia • SENAI
            </div>
            <div>
              <strong className="text-yellow-400">Desenvolvimento:</strong><br />
              Bruno Almeida • Instituto SESI
            </div>
          </div>
          <div className="text-xs text-gray-500">
            © 2025 Instituto SESI de SST • Todos os direitos reservados
          </div>
        </div>
      </footer>
    </div>
  )
}