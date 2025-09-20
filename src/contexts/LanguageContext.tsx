import React, { createContext, useContext, useState, ReactNode } from 'react';

// 20 Languages: 10 Nigerian + 10 International
export const languages = {
  // Nigerian Languages
  'ha': 'Hausa',
  'yo': 'Yorùbá', 
  'ig': 'Igbo',
  'ff': 'Fulfulde',
  'kr': 'Kanuri',
  'tiv': 'Tiv',
  'ijc': 'Izon (Ijaw)',
  'bin': 'Edo',
  'nup': 'Nupe',
  'efi': 'Efik',
  
  // International Languages
  'en': 'English',
  'es': 'Español',
  'fr': 'Français',
  'de': 'Deutsch',
  'zh': '中文',
  'ja': '日本語',
  'ar': 'العربية',
  'pt': 'Português',
  'ru': 'Русский',
  'hi': 'हिंदी'
};

export type LanguageCode = keyof typeof languages;

export const translations = {
  en: {
    // Header
    navigation: 'Navigation',
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
    
    // Footer
    footerDescription: 'Advanced cybersecurity solutions protecting organizations worldwide from sophisticated cyber threats.',
    threatDetection: 'Threat Detection',
    incidentResponse: 'Incident Response',
    compliance: 'Compliance Management',
    company: 'Company',
    careers: 'Careers',
    news: 'News & Insights',
    partners: 'Partners',
    support: 'Support',
    documentation: 'Documentation',
    help: 'Help Center',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    cookies: 'Cookie Policy',
    copyright: '© 2024 Kraken Cybersecurity. All rights reserved.',
    language: 'Language'
  },
  
  // Sample translations for other languages (abbreviated for space)
  es: {
    navigation: 'Navegación',
    home: 'Inicio',
    services: 'Servicios',
    about: 'Acerca de',
    contact: 'Contacto',
    heroTitle: 'Soluciones Elite de Ciberseguridad',
    heroSubtitle: 'Protege tus activos digitales con las tecnologías de seguridad avanzadas de Kraken.',
    getStarted: 'Comenzar',
    learnMore: 'Saber Más',
    faqTitle: 'Preguntas Frecuentes',
    language: 'Idioma'
  },
  
  fr: {
    navigation: 'Navigation',
    home: 'Accueil',
    services: 'Services',
    about: 'À Propos',
    contact: 'Contact',
    heroTitle: 'Solutions de Cybersécurité Elite',
    heroSubtitle: 'Protégez vos actifs numériques avec les technologies de sécurité avancées de Kraken.',
    getStarted: 'Commencer',
    learnMore: 'En Savoir Plus',
    faqTitle: 'Questions Fréquentes',
    language: 'Langue'
  }
  
  // Note: In a real application, all languages would have complete translations
};

interface LanguageContextType {
  currentLanguage: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('en');

  const setLanguage = (lang: LanguageCode) => {
    setCurrentLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const t = (key: string): string => {
    const translation = translations[currentLanguage] || translations.en;
    return (translation as any)[key] || key;
  };

  React.useEffect(() => {
    const saved = localStorage.getItem('preferred-language') as LanguageCode;
    if (saved && languages[saved]) {
      setCurrentLanguage(saved);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};