// Language translations
const translations = {
    en: {
        // Navigation
        home: 'Home',
        services: 'Services',
        about: 'About',
        contact: 'Contact',
        
        // Hero
        heroTitle: 'Elite Cybersecurity Solutions',
        heroSubtitle: 'Protect your digital assets with Kraken\'s advanced security technologies. We defend against the most sophisticated cyber threats.',
        getStarted: 'Get Started',
        learnMore: 'Learn More',
        
        // FAQ
        faqTitle: 'Frequently Asked Questions',
        faqSubtitle: 'Everything you need to know about Kraken\'s cybersecurity services',
        
        // FAQ Items
        faq1Q: 'What makes Kraken different from other cybersecurity companies?',
        faq1A: 'Kraken combines cutting-edge AI-powered threat detection with human expertise. Our 24/7 SOC provides real-time monitoring and response, while our proprietary technology identifies threats before they impact your business.',
        
        faq2Q: 'How quickly can you detect and respond to cyber threats?',
        faq2A: 'Our advanced systems detect threats in under 60 seconds and initiate automated response protocols immediately. Our expert analysts are alerted within minutes for complex threats requiring human intervention.',
        
        faq3Q: 'Do you provide compliance support for regulations like GDPR and SOC 2?',
        faq3A: 'Yes, we help organizations achieve and maintain compliance with major frameworks including GDPR, SOC 2, ISO 27001, PCI DSS, and HIPAA. Our compliance team provides ongoing support and audit preparation.',
        
        faq4Q: 'What industries do you serve?',
        faq4A: 'We serve clients across healthcare, financial services, government, education, retail, and technology sectors. Our solutions are tailored to meet industry-specific regulatory requirements and threat landscapes.',
        
        faq5Q: 'Can you integrate with our existing security infrastructure?',
        faq5A: 'Absolutely. Kraken\'s platform is designed to integrate seamlessly with over 300+ security tools and technologies. We work with your existing SIEM, EDR, firewall, and other security solutions.',
        
        faq6Q: 'What support do you offer during a security incident?',
        faq6A: 'We provide 24/7 incident response with dedicated threat hunters and forensics experts. Our rapid response team can be on-site within hours to contain threats and minimize business impact.',
        
        // FAQ CTA
        faqCtaTitle: 'Still have questions?',
        faqCtaText: 'Contact our team for personalized cybersecurity consultation.',
        
        // Footer
        footerDescription: 'Advanced cybersecurity solutions protecting organizations worldwide from sophisticated cyber threats.',
        servicesTitle: 'Services',
        threatDetection: 'Threat Detection',
        incidentResponse: 'Incident Response',
        compliance: 'Compliance Management',
        companyTitle: 'Company',
        careers: 'Careers',
        news: 'News & Insights',
        partners: 'Partners',
        supportTitle: 'Support',
        documentation: 'Documentation',
        help: 'Help Center',
        copyright: '© 2024 Kraken Cybersecurity. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookies: 'Cookie Policy'
    },
    
    // Nigerian Languages
    ha: {
        home: 'Gida',
        services: 'Ayyuka',
        about: 'Game da mu',
        contact: 'Tuntube mu',
        heroTitle: 'Mafi Kyawun Hanyoyin Tsaron Yanar Gizo',
        heroSubtitle: 'Ka kare kayankan na dijital da fasahar tsaro ta Kraken. Muna kare ku daga munanan hare-haren yanar gizo.',
        getStarted: 'Fara',
        learnMore: 'Koyi Kari',
        faqTitle: 'Tambayoyin da Ake Yawan Yi',
        faqSubtitle: 'Duk abin da kuke bukata sanin game da ayyukan tsaron yanar gizo na Kraken'
    },
    
    yo: {
        home: 'Ile',
        services: 'Awon Ise',
        about: 'Nipa Wa',
        contact: 'Kan Si Wa',
        heroTitle: 'Awon Solusan Aabo Kọmpiuta Ti O Ga Ju',
        heroSubtitle: 'Da eto ohun-ini dijitali rẹ pamo pẹlu awọn imọ-ẹrọ aabo to ti ni ilọsiwaju ti Kraken. A n daabobo lodi si awọn ikọlu kọmpiuta ti o buruju julọ.',
        getStarted: 'Bẹrẹ',
        learnMore: 'Kọ Siwaju Si',
        faqTitle: 'Awọn Ibeere Ti A Maa N Beere',
        faqSubtitle: 'Gbogbo ohun ti o nilo lati mọ nipa awọn iṣẹ aabo kọmpiuta Kraken'
    },
    
    ig: {
        home: 'Ụlọ',
        services: 'Ọrụ',
        about: 'Gbasara Anyị',
        contact: 'Kpọtụrụ Anyị',
        heroTitle: 'Ngwọta Nchekwa Kọmpiuta Kachasị Mma',
        heroSubtitle: 'Chebe akụ dijitalị gị site na teknụzụ nchekwa dị elu nke Kraken. Anyị na-echebe megide mwakpo kọmpiuta kachasị njọ.',
        getStarted: 'Malite',
        learnMore: 'Mụtakwuo',
        faqTitle: 'Ajụjụ A Na-ajụkarị',
        faqSubtitle: 'Ihe niile ị kwesịrị ịma gbasara ọrụ nchekwa kọmpiuta Kraken'
    },
    
    ff: {
        home: 'Suudu',
        services: 'Golle',
        about: 'Baɗte Amen',
        contact: 'Jokkondire Amen',
        heroTitle: 'Ɓamtaare Kisal Ordinateer Moƴƴoore',
        heroSubtitle: 'Kisal jamɗe maa digital e teekno kisal Kraken. Min kisal e ɗoon jooni ordinateer mawnude.',
        getStarted: 'Fuɗɗo',
        learnMore: 'Jang Gooto',
        faqTitle: 'Ɗaɓɓugo Ɓaawɗugo',
        faqSubtitle: 'Gootum ngam faamde baɗte golle kisal ordinateer Kraken'
    },
    
    kr: {
        home: 'Fato',
        services: 'Ayyuka',
        about: 'Kananchin',
        contact: 'Tuntube',
        heroTitle: 'Kaunar Tsaron Kwamfuta Mafi Kyau',
        heroSubtitle: 'Ka tsare kayayyakin dijital da fasahar tsaro ta Kraken.',
        getStarted: 'Fara',
        learnMore: 'Koyi Kari',
        faqTitle: 'Tambayoyin da Ake Yawan Yi',
        faqSubtitle: 'Duk abin da kuke bukata sanin'
    },
    
    tiv: {
        home: 'Ken',
        services: 'Oryer',
        about: 'Ikyobo Kwasen',
        contact: 'Nyam Kwasen',
        heroTitle: 'Nyam Computer Atindi Ka Ken',
        heroSubtitle: 'Nyam digital property yo u Kraken security technology yo.',
        getStarted: 'Cii',
        learnMore: 'Nyam Kuraun',
        faqTitle: 'Aforishima Sha U Hii Kpishi',
        faqSubtitle: 'Kuraun sha u kaa nyam ikyobo Kraken computer security'
    },
    
    ijc: {
        home: 'Wari',
        services: 'Baka-bou',
        about: 'Keni Teme',
        contact: 'Furo Teme',
        heroTitle: 'Computer Yeri Bou Kpo Kpo',
        heroSubtitle: 'Yeri digital kala-kala sen u Kraken security technology sen.',
        getStarted: 'Kakua',
        learnMore: 'Moni Kpo',
        faqTitle: 'Furo-bou Kpo Kpo Teme Duba',
        faqSubtitle: 'Kala kala teme moni izon Kraken computer security bou'
    },
    
    bin: {
        home: 'Owa',
        services: 'Emwan',
        about: 'Ebo Ima',
        contact: 'Kpolo Ima',
        heroTitle: 'Computer Ye Emwan Re Khin Khin',
        heroSubtitle: 'Ye digital emwan ghee vbe Kraken security technology.',
        getStarted: 'Ghee',
        learnMore: 'Mwen Khin',
        faqTitle: 'Uhuenren Re Ima Ma Rhue',
        faqSubtitle: 'Emwan hia ima gha mwen ne Kraken computer security'
    },
    
    nup: {
        home: 'Efu',
        services: 'Ebo',
        about: 'Etu Kini',
        contact: 'Be Kini',
        heroTitle: 'Etubo Computer Eyin Gigan',
        heroSubtitle: 'Gbe digital ebo kpa ko Kraken security technology ko.',
        getStarted: 'Bera',
        learnMore: 'Eco Gigan',
        faqTitle: 'Afonu Nupe Doko Wa',
        faqSubtitle: 'Ebo hia kini co mwen Kraken computer security'
    },
    
    efi: {
        home: 'Ufok',
        services: 'Nkpo',
        about: 'Emi Nnyin',
        contact: 'Kop Nnyin',
        heroTitle: 'Computer Idem Nkpo Ekondo',
        heroSubtitle: 'Kop digital nkpo emi ye Kraken security technology.',
        getStarted: 'Tomo',
        learnMore: 'Kop Emi',
        faqTitle: 'Ntemeke Ndisiak Nnyin',
        faqSubtitle: 'Nkpo ami nnyin ikop idem Kraken computer security'
    },
    
    // International Languages (abbreviated for space)
    es: {
        home: 'Inicio',
        services: 'Servicios',
        about: 'Acerca de',
        contact: 'Contacto',
        heroTitle: 'Soluciones Elite de Ciberseguridad',
        heroSubtitle: 'Protege tus activos digitales con las tecnologías de seguridad avanzadas de Kraken.',
        getStarted: 'Comenzar',
        learnMore: 'Saber Más',
        faqTitle: 'Preguntas Frecuentes',
        faqSubtitle: 'Todo lo que necesitas saber sobre los servicios de ciberseguridad de Kraken'
    },
    
    fr: {
        home: 'Accueil',
        services: 'Services',
        about: 'À Propos',
        contact: 'Contact',
        heroTitle: 'Solutions de Cybersécurité Elite',
        heroSubtitle: 'Protégez vos actifs numériques avec les technologies de sécurité avancées de Kraken.',
        getStarted: 'Commencer',
        learnMore: 'En Savoir Plus',
        faqTitle: 'Questions Fréquentes',
        faqSubtitle: 'Tout ce que vous devez savoir sur les services de cybersécurité de Kraken'
    },
    
    de: {
        home: 'Startseite',
        services: 'Dienstleistungen',
        about: 'Über Uns',
        contact: 'Kontakt',
        heroTitle: 'Elite Cybersicherheitslösungen',
        heroSubtitle: 'Schützen Sie Ihre digitalen Assets mit Krakens fortschrittlichen Sicherheitstechnologien.',
        getStarted: 'Loslegen',
        learnMore: 'Mehr Erfahren',
        faqTitle: 'Häufige Fragen',
        faqSubtitle: 'Alles was Sie über Krakens Cybersicherheitsdienste wissen müssen'
    },
    
    zh: {
        home: '首页',
        services: '服务',
        about: '关于我们',
        contact: '联系我们',
        heroTitle: '精英网络安全解决方案',
        heroSubtitle: '使用Kraken先进的安全技术保护您的数字资产。',
        getStarted: '开始使用',
        learnMore: '了解更多',
        faqTitle: '常见问题',
        faqSubtitle: '关于Kraken网络安全服务您需要了解的一切'
    },
    
    ja: {
        home: 'ホーム',
        services: 'サービス',
        about: '会社概要',
        contact: 'お問い合わせ',
        heroTitle: 'エリートサイバーセキュリティソリューション',
        heroSubtitle: 'Krakenの高度なセキュリティ技術でデジタル資産を保護します。',
        getStarted: '開始する',
        learnMore: '詳細を見る',
        faqTitle: 'よくある質問',
        faqSubtitle: 'Krakenのサイバーセキュリティサービスについて知っておくべきこと'
    },
    
    ar: {
        home: 'الرئيسية',
        services: 'الخدمات',
        about: 'حولنا',
        contact: 'اتصل بنا',
        heroTitle: 'حلول الأمن السيبراني المتقدمة',
        heroSubtitle: 'احم أصولك الرقمية بتقنيات الأمان المتطورة من كراكن.',
        getStarted: 'ابدأ الآن',
        learnMore: 'اعرف المزيد',
        faqTitle: 'الأسئلة الشائعة',
        faqSubtitle: 'كل ما تحتاج لمعرفته عن خدمات الأمن السيبراني لكراكن'
    },
    
    pt: {
        home: 'Início',
        services: 'Serviços',
        about: 'Sobre',
        contact: 'Contato',
        heroTitle: 'Soluções Elite de Cibersegurança',
        heroSubtitle: 'Proteja seus ativos digitais com as tecnologias de segurança avançadas da Kraken.',
        getStarted: 'Começar',
        learnMore: 'Saiba Mais',
        faqTitle: 'Perguntas Frequentes',
        faqSubtitle: 'Tudo que você precisa saber sobre os serviços de cibersegurança da Kraken'
    },
    
    ru: {
        home: 'Главная',
        services: 'Услуги',
        about: 'О нас',
        contact: 'Контакты',
        heroTitle: 'Элитные решения кибербезопасности',
        heroSubtitle: 'Защитите свои цифровые активы с помощью передовых технологий безопасности Kraken.',
        getStarted: 'Начать',
        learnMore: 'Узнать больше',
        faqTitle: 'Часто задаваемые вопросы',
        faqSubtitle: 'Все что нужно знать об услугах кибербезопасности Kraken'
    },
    
    hi: {
        home: 'होम',
        services: 'सेवाएं',
        about: 'हमारे बारे में',
        contact: 'संपर्क करें',
        heroTitle: 'एलीट साइबर सुरक्षा समाधान',
        heroSubtitle: 'Kraken की उन्नत सुरक्षा प्रौद्योगिकियों के साथ अपनी डिजिटल संपत्ति की सुरक्षा करें।',
        getStarted: 'शुरू करें',
        learnMore: 'और जानें',
        faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
        faqSubtitle: 'Kraken की साइबर सुरक्षा सेवाओं के बारे में जानने योग्य सब कुछ'
    }
};

// Current language
let currentLanguage = 'en';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
        document.getElementById('languageSelect').value = currentLanguage;
    }
    
    // Update content with current language
    updateContent();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Initialize FAQ accordion
    initializeFAQ();
    
    // Initialize mobile menu
    initializeMobileMenu();
});

// Event Listeners
function initializeEventListeners() {
    // Language selector
    document.getElementById('languageSelect').addEventListener('change', function() {
        currentLanguage = this.value;
        localStorage.setItem('preferred-language', currentLanguage);
        updateContent();
    });
    
    // CTA buttons
    document.getElementById('getStartedBtn').addEventListener('click', function() {
        alert(t('getStarted') + ' - Coming Soon!');
    });
    
    document.getElementById('heroGetStarted').addEventListener('click', function() {
        alert(t('getStarted') + ' - Coming Soon!');
    });
    
    document.getElementById('heroLearnMore').addEventListener('click', function() {
        document.getElementById('faq').scrollIntoView({ behavior: 'smooth' });
    });
    
    document.getElementById('faqContactBtn').addEventListener('click', function() {
        alert(t('contact') + ' - Coming Soon!');
    });
    
    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Translation function
function t(key) {
    const translation = translations[currentLanguage] || translations.en;
    return translation[key] || translations.en[key] || key;
}

// Update content based on current language
function updateContent() {
    // Update all translatable elements
    const translatableElements = [
        'heroTitle', 'heroSubtitle', 'faqTitle', 'faqSubtitle',
        'faq1Q', 'faq1A', 'faq2Q', 'faq2A', 'faq3Q', 'faq3A',
        'faq4Q', 'faq4A', 'faq5Q', 'faq5A', 'faq6Q', 'faq6A',
        'faqCtaTitle', 'faqCtaText', 'footerDescription',
        'servicesTitle', 'threatDetection', 'incidentResponse', 'compliance',
        'companyTitle', 'about', 'careers', 'news', 'partners',
        'supportTitle', 'documentation', 'help', 'contact',
        'copyright', 'privacy', 'terms', 'cookies'
    ];
    
    translatableElements.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = t(elementId);
        }
    });
    
    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#home') link.textContent = t('home');
        if (href === '#services') link.textContent = t('services');
        if (href === '#about') link.textContent = t('about');
        if (href === '#contact') link.textContent = t('contact');
    });
    
    // Update buttons
    document.getElementById('getStartedBtn').textContent = t('getStarted');
    document.getElementById('heroGetStarted').textContent = t('getStarted');
    document.getElementById('heroLearnMore').textContent = t('learnMore');
    document.getElementById('faqContactBtn').textContent = t('contact');
}

// FAQ Accordion functionality
function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentNode;
            const answer = faqItem.querySelector('.faq-answer');
            const isActive = answer.classList.contains('active');
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
                if (otherAnswer !== answer) {
                    otherAnswer.classList.remove('active');
                    otherAnswer.previousElementSibling.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Toggle current FAQ item
            if (isActive) {
                answer.classList.remove('active');
                this.setAttribute('aria-expanded', 'false');
            } else {
                answer.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
            }
        });
        
        // Set initial aria-expanded state
        question.setAttribute('aria-expanded', 'false');
    });
}

// Mobile Menu functionality
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');
    
    mobileMenuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = this.querySelectorAll('span');
        if (mobileNav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
            mobileNav.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe FAQ items for animation
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => observer.observe(item));
    }, 100);
});

// Smooth scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button (optional enhancement)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Parallax effect for floating elements
    const floatingElements = document.querySelectorAll('.floating-shield');
    floatingElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        element.style.transform = `translateY(${rate * speed}px)`;
    });
});

// Add loading state management
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger entrance animations
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }
    }, 300);
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Any scroll-based animations or calculations here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);