import React from 'react';
import { Language, translations } from '../i18n';
import { GUMROAD_BUY_URL } from '../data';
import { Logo } from './Logo';
import { ShieldCheck, ArrowUp, Key } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenApiKeyModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenApiKeyModal }) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-12 pt-12 pb-8 border-t border-[#C8BFB0]/80 text-[#5A5348] text-xs">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <Logo size="sm" />
              <span className="font-extrabold text-lg text-[#221E1A] font-display">
                StockFlow <span className="text-[#059669]">AI</span>
              </span>
            </div>
            <p className="text-[#5A5348] leading-relaxed max-w-sm font-medium">
              {t.footerDesc}
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#059669] font-mono font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Gumroad Verified AI Software Partner</span>
            </div>
          </div>

          {/* Core Software Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-mono font-extrabold text-[#221E1A] uppercase tracking-wider mb-3">
              Software Modules
            </h4>
            <ul className="space-y-2 text-[#5A5348] font-bold">
              <li><a href="#modules" className="hover:text-[#059669] transition-colors">DeCode AI (Reverse Engineering)</a></li>
              <li><a href="#modules" className="hover:text-[#059669] transition-colors">StockSensei X (49 Tags & CSV)</a></li>
              <li><a href="#modules" className="hover:text-[#059669] transition-colors">PhotoCoach (Commercial Audit)</a></li>
              <li><a href="#modules" className="hover:text-[#059669] transition-colors">Trend Sniper (Market Radar)</a></li>
              {onOpenApiKeyModal && (
                <li>
                  <button
                    onClick={onOpenApiKeyModal}
                    className="hover:text-[#059669] transition-colors text-emerald-700 flex items-center gap-1 font-mono text-[11px]"
                  >
                    <Key className="w-3 h-3 text-emerald-600" />
                    <span>API Key Configuration (NVIDIA / Gemini)</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-extrabold text-[#221E1A] uppercase tracking-wider mb-3">
              Get StockFlow AI
            </h4>
            <p className="text-[#5A5348] font-medium">
              One-time payment for lifetime access with perpetual updates.
            </p>
            <a
              href={GUMROAD_BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="neu-gold-btn px-4 py-2.5 text-xs font-black inline-flex items-center gap-2"
            >
              <span>{t.pricingCtaGumroad}</span>
            </a>
          </div>

        </div>

        {/* Disclaimer Note */}
        <div className="p-4 rounded-xl neu-inset text-[11px] text-[#5A5348] mb-8 leading-relaxed font-medium">
          {t.footerDisclaimer}
        </div>

        {/* Bottom Copyright & Scroll Top */}
        <div className="pt-4 border-t border-[#C8BFB0] flex flex-wrap items-center justify-between gap-4 text-[11px] text-[#5A5348] font-bold">
          <div>{t.footerCopyright}</div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#059669] transition-colors font-mono font-bold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
