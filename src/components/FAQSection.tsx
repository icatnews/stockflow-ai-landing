import React, { useState } from 'react';
import { Language, translations } from '../i18n';
import { GUMROAD_BUY_URL } from '../data';
import { ChevronDown, HelpCircle, Zap } from 'lucide-react';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
    { q: t.faq5Q, a: t.faq5A },
    { q: t.faq6Q, a: t.faq6A }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md neu-inset text-[#221E1A] text-xs font-mono font-extrabold uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C89632]" />
            <span>{t.faqHeaderBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#221E1A] tracking-tight mb-3 font-display">
            {t.faqTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#5A5348] font-medium">
            {t.faqSubtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="neu-raised rounded-2xl overflow-hidden border border-white/80 transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left font-extrabold text-sm sm:text-base text-[#221E1A] flex items-center justify-between gap-4"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C89632] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4A443C] font-medium leading-relaxed border-t border-[#C8BFB0]/40 whitespace-pre-line">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 rounded-2xl neu-gold-card text-center space-y-4">
          <h3 className="text-xl font-extrabold text-[#221E1A] font-display">
            Ready to Supercharge Your Stock Photography Workflow?
          </h3>
          <p className="text-xs sm:text-sm text-[#4A443C] font-medium max-w-xl mx-auto">
            Get instant access to StockFlow AI on Gumroad with perpetual updates and zero recurring fees.
          </p>
          <a
            href={GUMROAD_BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="neu-gold-btn inline-flex items-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-black text-[#221E1A]"
          >
            <span>{t.pricingCtaGumroad}</span>
            <Zap className="w-4 h-4 text-[#221E1A]" />
          </a>
        </div>

      </div>
    </section>
  );
};
