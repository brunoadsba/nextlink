/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração otimizada para Vercel
  trailingSlash: false, // Vercel prefere sem trailing slash
  images: {
    unoptimized: false, // Habilitar otimização de imagens
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  // Headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      // Headers específicos para imagens
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
