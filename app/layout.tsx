import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import { ThemeProvider } from '@/lib/theme-context'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Next Link Pro - Comunicação Corporativa 2025',
  description: 'Plataforma de comunicação corporativa para conectar pessoas no ambiente de trabalho através de conteúdos sobre inovação e tecnologia.',
  keywords: ['inovação', 'tecnologia', 'comunicação corporativa', 'SESI', 'SST'],
  authors: [{ name: 'Bruno Almeida' }],
  creator: 'Bruno Almeida',
  publisher: 'Instituto SESI de SST',
  openGraph: {
    title: 'Next Link Pro - Comunicação Corporativa 2025',
    description: 'Conectando pessoas através do conhecimento e inovação no Instituto SESI de SST',
    url: 'https://nextlink.sesi.org.br',
    siteName: 'Next Link Pro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Next Link Pro',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next Link Pro - Comunicação Corporativa 2025',
    description: 'Conectando pessoas através do conhecimento e inovação no Instituto SESI de SST',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-token',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.className} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0066CC" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
