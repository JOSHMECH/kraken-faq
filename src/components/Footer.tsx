import React from 'react';
import { Shield, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const serviceLinks = [
    { name: t('threatDetection'), href: '#threat-detection' },
    { name: t('incidentResponse'), href: '#incident-response' },
    { name: t('compliance'), href: '#compliance' },
  ];

  const companyLinks = [
    { name: t('about'), href: '#about' },
    { name: t('careers'), href: '#careers' },
    { name: t('news'), href: '#news' },
    { name: t('partners'), href: '#partners' },
  ];

  const supportLinks = [
    { name: t('documentation'), href: '#docs' },
    { name: t('help'), href: '#help' },
    { name: t('contact'), href: '#contact' },
  ];

  const legalLinks = [
    { name: t('privacy'), href: '#privacy' },
    { name: t('terms'), href: '#terms' },
    { name: t('cookies'), href: '#cookies' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="cyber-glow p-2 rounded-lg">
                <Shield className="w-8 h-8 text-primary animate-pulse-glow" />
              </div>
              <span className="text-2xl font-bold text-glow">
                KRAKEN
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              {t('footerDescription')}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="cyber-glow p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              {t('services')}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              {t('company')}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              {t('support')}
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            {t('copyright')}
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;