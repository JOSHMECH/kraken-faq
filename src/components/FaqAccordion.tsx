import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqAccordion = () => {
  const { t } = useLanguage();

  const faqItems = [
    {
      id: 'item-1',
      question: t('faq1Q'),
      answer: t('faq1A'),
    },
    {
      id: 'item-2', 
      question: t('faq2Q'),
      answer: t('faq2A'),
    },
    {
      id: 'item-3',
      question: t('faq3Q'), 
      answer: t('faq3A'),
    },
    {
      id: 'item-4',
      question: t('faq4Q'),
      answer: t('faq4A'),
    },
    {
      id: 'item-5',
      question: t('faq5Q'),
      answer: t('faq5A'),
    },
    {
      id: 'item-6',
      question: t('faq6Q'),
      answer: t('faq6A'),
    },
  ];

  return (
    <section className="py-20 px-6" id="faq">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            {t('faqTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('faqSubtitle')}
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion 
          type="single" 
          collapsible 
          className="space-y-4"
          defaultValue="item-1"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="cyber-card border-none"
              style={{ 
                animationDelay: `${index * 100}ms` 
              }}
            >
              <AccordionTrigger 
                className="text-left text-lg font-semibold hover:text-primary transition-colors duration-300 hover:no-underline py-6 px-6"
                aria-expanded="false"
              >
                <span className="pr-4">{item.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-300" />
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed px-6 pb-6">
                <div className="pt-2">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Still have questions? Our cybersecurity experts are here to help.
          </p>
          <button className="btn-cyber">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;