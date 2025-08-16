# Next Link Pro

**Plataforma de Inovação e Tecnologia • Instituto SESI de SST • 2025**

## 📋 Descrição

Next Link Pro é uma plataforma moderna de comunicação corporativa desenvolvida com **Next.js 14**, **TypeScript** e **Tailwind CSS**. O projeto conecta colaboradores através de conteúdos sobre inovação e tecnologia, oferecendo uma experiência digital avançada e responsiva.

## 🎯 Objetivos

- **Conexão com a Inovação**: Disseminar conhecimento sobre tendências em tecnologia
- **Visão Aprimorada**: Gerar engajamento e capacidade de identificar soluções
- **Estímulo à Inovação**: Incentivar proposição de soluções incrementais e disruptivas
- **Experiência Digital**: Oferecer interface moderna e intuitiva para todos os dispositivos

## 🚀 Stack Tecnológica

### **Frontend Framework**
- **Next.js 14**: Framework React com App Router
- **TypeScript**: Tipagem estática para maior segurança
- **Tailwind CSS**: Framework CSS utility-first
- **React 18**: Biblioteca de interface moderna

### **Ferramentas e Bibliotecas**
- **Lucide React**: Ícones vetoriais modernos
- **PostCSS**: Processamento CSS avançado
- **ESLint**: Linting de código
- **Prettier**: Formatação automática

## 📁 Estrutura do Projeto

```
nextlink/
├── app/                    # App Router (Next.js 14)
│   ├── page.tsx           # Página inicial
│   ├── layout.tsx         # Layout principal
│   ├── globals.css        # Estilos globais
│   ├── blog/              # Seção de blog
│   ├── podcasts/          # Seção de podcasts
│   ├── lives/             # Seção de lives
│   ├── quizzes/           # Seção de quizzes
│   ├── curiosidades/      # Seção de curiosidades
│   ├── mais/              # Seção adicional
│   └── versions/          # Versões A, B, C
├── components/            # Componentes React
│   └── layout/
│       └── Header.tsx     # Cabeçalho principal
├── lib/                   # Utilitários e dados
│   ├── data/
│   │   ├── realContent2025.ts    # Conteúdo real 2025
│   │   ├── mockData.ts           # Dados mock
│   │   └── versions/
│   │       └── mockData2025.ts   # Dados das versões
│   └── utils.ts           # Funções utilitárias
├── public/                # Arquivos estáticos
├── next.config.js         # Configuração Next.js
├── tailwind.config.ts     # Configuração Tailwind
├── tsconfig.json          # Configuração TypeScript
└── package.json           # Dependências
```

## 🌟 Funcionalidades Implementadas

### **✅ Navegação Principal**
- [x] Header responsivo com logo SESI
- [x] Menu de navegação com ícones modernos
- [x] Links para todas as seções principais
- [x] Design mobile-first responsivo

### **✅ Seções de Conteúdo**
- [x] **Blog**: Artigos sobre inovação e tecnologia
- [x] **Podcasts**: Episódios sobre tendências
- [x] **Lives**: Transmissões ao vivo (em desenvolvimento)
- [x] **Quizzes**: Questionários interativos
- [x] **Curiosidades**: Informações e previsões
- [x] **Mais**: Recursos adicionais

### **✅ Versões de Design**
- [x] **Versão A**: Design clássico corporativo
- [x] **Versão B**: Design moderno e clean
- [x] **Versão C**: Design minimalista

### **✅ Recursos Técnicos**
- [x] TypeScript para tipagem estática
- [x] Tailwind CSS para estilização
- [x] Componentes React reutilizáveis
- [x] Layout responsivo para todos os dispositivos
- [x] Ícones modernos com Lucide React
- [x] Estrutura de dados tipada

## 🎨 Design System

### **Cores Principais**
- **SESI Azul**: `#0f4c75` (Primary)
- **Esmeralda**: `#38a169` (Accent)
- **Cinza Escuro**: `#1a202c` (Text)
- **Branco**: `#ffffff` (Background)

### **Tipografia**
- **Inter**: Fonte principal para interface
- **Playfair Display**: Fonte para títulos
- **Sistema**: Fallback para compatibilidade

### **Componentes**
- Botões com estados hover e focus
- Cards com sombras e bordas arredondadas
- Grid responsivo para layouts
- Animações suaves de transição

## 📱 Responsividade

### **Breakpoints**
- **Mobile**: `sm:` (640px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large**: `xl:` (1280px+)

### **Adaptações**
- Layout flexível para diferentes tamanhos de tela
- Navegação adaptativa (hamburger menu em mobile)
- Imagens responsivas com Next.js Image
- Grid system adaptativo

## 🔧 Instalação e Desenvolvimento

### **Pré-requisitos**
- Node.js 18.17+ 
- npm ou yarn

### **Instalação**
```bash
# Clone o repositório
git clone https://github.com/brunoadsba/nextlink.git
cd nextlink

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Export estático
npm run export
```

### **Scripts Disponíveis**
- `npm run dev`: Servidor de desenvolvimento
- `npm run build`: Build de produção
- `npm run start`: Servidor de produção
- `npm run export`: Export estático
- `npm run lint`: Verificação de código

## 🚀 Deploy

### **Vercel (Recomendado)**
1. Conecte o repositório GitHub
2. Vercel detecta automaticamente Next.js
3. Deploy automático a cada push

### **Netlify**
1. Configure build command: `npm run build`
2. Publish directory: `.next`

### **GitHub Pages**
1. Use `npm run export` para gerar arquivos estáticos
2. Publique a pasta `out/`

## 🧪 Testes

### **Executar Testes**
```bash
# Testes unitários
npm test

# Testes de integração
npm run test:integration

# Cobertura de testes
npm run test:coverage
```

## 🔒 Segurança

- Validação de tipos com TypeScript
- Sanitização de dados de entrada
- Headers de segurança configurados
- Política CSP implementada

## 📊 Performance

### **Otimizações**
- **Next.js Image**: Otimização automática de imagens
- **Code Splitting**: Carregamento sob demanda
- **Static Generation**: Páginas pré-renderizadas
- **Bundle Analysis**: Análise de tamanho de pacotes

### **Métricas**
- **Lighthouse Score**: 95+
- **Core Web Vitals**: Otimizados
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## 👥 Contribuição

### **Como Contribuir**
1. Fork do projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit: `git commit -m 'feat: adiciona nova funcionalidade'`
4. Push: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

### **Padrões de Código**
- **TypeScript**: Tipagem estrita, sem `any`
- **React**: Hooks funcionais, componentes puros
- **CSS**: Tailwind CSS, classes utilitárias
- **Commits**: Conventional Commits

## 📄 Licença

Este projeto é propriedade do **Instituto SESI de SST**.

## 👨‍💻 Desenvolvedor

**Bruno Almeida**
- Especialista em Next.js e React
- Foco em TypeScript e performance
- Experiência em design systems modernos

## 📞 Suporte

Para dúvidas técnicas ou suporte, entre em contato através dos canais oficiais do Instituto SESI de SST.

---

**Next Link Pro** - Plataforma de inovação e tecnologia • 2025

*Desenvolvido com Next.js, TypeScript e Tailwind CSS*
