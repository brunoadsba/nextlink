// Next Link - JavaScript Principal
// Desenvolvido por Bruno Almeida

'use strict';

/**
 * Configurações globais
 */
const CONFIG = {
    animationDuration: 800,
    scrollOffset: 50,
    observerThreshold: 0.1,
    observerRootMargin: '0px 0px -50px 0px'
};

/**
 * Utilitários
 */
const Utils = {
    // Debounce para otimizar performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle para eventos de scroll
    throttle(func, wait) {
        let inThrottle;
        return function executedFunction(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, wait);
            }
        };
    },

    // Verificar se elemento está na viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Smooth scroll para elementos
    smoothScrollTo(element, offset = 0) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

/**
 * Gerenciador de Animações
 */
class AnimationManager {
    constructor() {
        this.observerOptions = {
            threshold: CONFIG.observerThreshold,
            rootMargin: CONFIG.observerRootMargin
        };
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.animateProgressBars();
        this.setupIconHoverEffects();
    }

    setupIntersectionObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    
                    // Animação especial para contadores
                    if (entry.target.dataset.counter) {
                        this.animateCounter(entry.target);
                    }
                    
                    // Não observar mais após animação
                    this.observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        // Observar elementos que devem animar
        this.observeElements();
    }

    observeElements() {
        const elementsToObserve = document.querySelectorAll(
            '.card-glass, .stat-card, .timeline-item, [data-animate]'
        );
        
        elementsToObserve.forEach(el => {
            this.observer.observe(el);
        });
    }

    animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        const animateBar = (bar) => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                bar.style.animation = `progressAnimation ${CONFIG.animationDuration * 2}ms ease-in-out forwards`;
            }
        };

        // Animar barras visíveis
        progressBars.forEach(animateBar);

        // Animar barras ao fazer scroll
        const scrollHandler = Utils.throttle(() => {
            progressBars.forEach(animateBar);
        }, 100);

        window.addEventListener('scroll', scrollHandler);
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.counter);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        updateCounter();
    }

    setupIconHoverEffects() {
        const icons = document.querySelectorAll('.icon-container');
        
        icons.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            });
            
            icon.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    }
}

/**
 * Gerenciador de Navegação
 */
class NavigationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupSmoothScrolling();
        this.setupParallaxEffect();
        this.setupScrollToTop();
    }

    setupSmoothScrolling() {
        // Smooth scrolling para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    Utils.smoothScrollTo(target, CONFIG.scrollOffset);
                }
            });
        });
    }

    setupParallaxEffect() {
        const hero = document.querySelector('.hero-gradient');
        
        if (hero) {
            const parallaxHandler = Utils.throttle(() => {
                const scrolled = window.pageYOffset;
                const heroHeight = hero.offsetHeight;
                
                if (scrolled < heroHeight) {
                    hero.style.transform = `translateY(${scrolled * 0.2}px)`;
                }
            }, 16);

            window.addEventListener('scroll', parallaxHandler);
        }
    }

    setupScrollToTop() {
        // Criar botão scroll to top se não existir
        if (!document.querySelector('.scroll-to-top')) {
            const scrollBtn = document.createElement('button');
            scrollBtn.className = 'scroll-to-top';
            scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            scrollBtn.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: var(--accent-emerald);
                color: white;
                border: none;
                cursor: pointer;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                z-index: 1000;
                box-shadow: 0 4px 12px rgba(56, 161, 105, 0.3);
            `;
            
            document.body.appendChild(scrollBtn);

            // Mostrar/ocultar botão baseado no scroll
            const toggleScrollBtn = Utils.throttle(() => {
                if (window.pageYOffset > 300) {
                    scrollBtn.style.opacity = '1';
                    scrollBtn.style.visibility = 'visible';
                } else {
                    scrollBtn.style.opacity = '0';
                    scrollBtn.style.visibility = 'hidden';
                }
            }, 100);

            window.addEventListener('scroll', toggleScrollBtn);

            // Ação do botão
            scrollBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
}

/**
 * Gerenciador de Performance
 */
class PerformanceManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupLazyLoading();
        this.optimizeImages();
        this.preloadCriticalResources();
    }

    setupLazyLoading() {
        // Lazy loading para imagens quando implementadas
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    optimizeImages() {
        // Otimizar carregamento de imagens
        document.querySelectorAll('img').forEach(img => {
            img.loading = 'lazy';
            img.decoding = 'async';
        });
    }

    preloadCriticalResources() {
        // Preload de recursos críticos
        const criticalResources = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = 'style';
            document.head.appendChild(link);
        });
    }
}

/**
 * Gerenciador de Acessibilidade
 */
class AccessibilityManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
        this.setupARIALabels();
    }

    setupKeyboardNavigation() {
        // Navegação por teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    setupFocusManagement() {
        // Gerenciamento de foco
        const focusableElements = document.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );

        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.style.outline = '2px solid var(--accent-emerald)';
                element.style.outlineOffset = '2px';
            });

            element.addEventListener('blur', () => {
                element.style.outline = '';
                element.style.outlineOffset = '';
            });
        });
    }

    setupARIALabels() {
        // Adicionar ARIA labels onde necessário
        document.querySelectorAll('.icon-container').forEach((icon, index) => {
            if (!icon.getAttribute('aria-label')) {
                icon.setAttribute('aria-label', `Ícone ${index + 1}`);
            }
        });
    }
}

/**
 * Aplicação Principal
 */
class NextLinkApp {
    constructor() {
        this.animationManager = null;
        this.navigationManager = null;
        this.performanceManager = null;
        this.accessibilityManager = null;
        this.init();
    }

    init() {
        // Aguardar DOM estar pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.bootstrap());
        } else {
            this.bootstrap();
        }
    }

    bootstrap() {
        try {
            this.animationManager = new AnimationManager();
            this.navigationManager = new NavigationManager();
            this.performanceManager = new PerformanceManager();
            this.accessibilityManager = new AccessibilityManager();
            
            this.setupErrorHandling();
            this.logSuccess();
        } catch (error) {
            console.error('Erro ao inicializar Next Link:', error);
        }
    }

    setupErrorHandling() {
        window.addEventListener('error', (e) => {
            console.error('Erro no Next Link:', e.error);
        });

        window.addEventListener('unhandledrejection', (e) => {
            console.error('Promise rejeitada no Next Link:', e.reason);
        });
    }

    logSuccess() {
        console.log('%c🚀 Next Link iniciado com sucesso!', 
            'color: #38a169; font-weight: bold; font-size: 16px;');
        console.log('%cConectando pessoas através do conhecimento e inovação', 
            'color: #4a5568; font-style: italic;');
    }
}

// Inicializar aplicação
const app = new NextLinkApp();

// Exportar para uso global se necessário
window.NextLink = app;
