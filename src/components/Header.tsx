import React, { useState } from 'react';
import { Shield, Menu, X, Globe } from 'lucide-react';
import { useLanguage, languages, LanguageCode } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t('home'), href: '#home' },
    { name: t('services'), href: '#services' },
    { name: t('about'), href: '#about' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4" aria-label={t('navigation')}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="cyber-glow p-2 rounded-lg">
              <Shield className="w-8 h-8 text-primary animate-pulse-glow" />
            </div>
            <span className="text-2xl font-bold text-glow">
              KRAKEN
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Language Selector & CTA */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="btn-ghost-cyber">
                  <Globe className="w-4 h-4 mr-2" />
                  {languages[currentLanguage]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="cyber-card w-48 max-h-64 overflow-y-auto">
                {Object.entries(languages).map(([code, name]) => (
                  <DropdownMenuItem
                    key={code}
                    onClick={() => setLanguage(code as LanguageCode)}
                    className={`cursor-pointer hover:bg-accent ${
                      currentLanguage === code ? 'bg-accent text-accent-foreground' : ''
                    }`}
                  >
                    {name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="btn-cyber hidden md:inline-flex">
              {t('getStarted')}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 mt-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="btn-cyber mt-4">
                {t('getStarted')}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;