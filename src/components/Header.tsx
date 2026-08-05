import React from 'react';
import { Language, translations } from '../i18n';
import { GUMROAD_BUY_URL } from '../data';
import { Logo } from './Logo';
import { ExternalLink, Maximize2, Minimize2, RotateCcw, ShieldCheck, Key } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onSelectLang: (lang: Language) => void;
  isFullWidthWindow: boolean;
  onToggleWindowMode: () => void;
  onPopout: () => void;
  onResetWindow: () => void;
  onOpenApiKeyModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onSelectLang,
  isFullWidthWindow,
  onToggleWindowMode,
  onPopout,
  onResetWindow,
  onOpenApiKeyModal
}) => {
  const t = translations[lang];

  return (
    <header className="sticky top-0 z-40 bg-[#EAE4D9]/90 backdrop-blur-md border border-white/70 px-4 py-3 sm:px-6 mb-8 rounded-2xl shadow-[6px_6px_16px_#c2bbb0,-6px_-6px_16px_#ffffff] transition-all">
      <div className="flex items-center justify-between gap-4">
        
        {/* Brand Logo & Title */}
        <a href="#" className="flex items-center gap-3 group">
          <Logo size="md" className="group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl text-[#221E1A] tracking-tight font-display">
                StockFlow <span className="text-[#059669]">AI</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-black tracking-wider bg-[#221E1A] text-[#10B981] rounded-md uppercase">
                {t.hubSub}
              </span>
            </div>
            <span className="text-[11px] text-[#6C655A] font-medium hidden sm:inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#059669] inline" /> Gumroad Verified Release
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-[#4A443C]">
          <a href="#modules" className="hover:text-[#059669] transition-colors">
            {t.navModules}
          </a>
          <a href="#interactive-demo" className="hover:text-[#059669] transition-colors flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
            {t.navStudio}
          </a>
          <a href="#value" className="hover:text-[#059669] transition-colors">
            {t.navValue}
          </a>
          <a href="#pricing" className="hover:text-[#059669] transition-colors">
            {t.navPricing}
          </a>
          <a href="#faq" className="hover:text-[#059669] transition-colors">
            {t.navFAQ}
          </a>
          <a
            href="https://instantflow.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#059669] transition-all flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#E0D8C9]/70 hover:bg-[#D8CFBF] border border-[#C8BFB0]/80 text-[#221E1A] font-extrabold shadow-xs hover:border-[#059669]/40"
            title="InstantFlow"
          >
            {t.navInstantFlow}
          </a>
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Gumroad Direct Action Pill */}
          <a
            href={GUMROAD_BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-xl bg-[#221E1A] text-emerald-400 hover:text-emerald-300 font-mono text-xs font-black flex items-center gap-1.5 shadow-sm transition-all hover:scale-105"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Get Lifetime Pass</span>
          </a>

          {/* Language Switcher Pill [ EN | 繁 | 簡 ] */}
          <div className="flex items-center gap-0.5 p-1 rounded-xl neu-inset text-xs font-bold text-[#6C655A]">
            <button
              onClick={() => onSelectLang('en')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                lang === 'en' ? 'bg-[#221E1A] text-emerald-400 font-extrabold shadow-sm' : 'hover:text-[#221E1A]'
              }`}
              title="English"
            >
              EN
            </button>
            <button
              onClick={() => onSelectLang('zh')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                lang === 'zh' ? 'bg-[#221E1A] text-emerald-400 font-extrabold shadow-sm' : 'hover:text-[#221E1A]'
              }`}
              title="繁體中文"
            >
              繁
            </button>
            <button
              onClick={() => onSelectLang('zh-cn')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                lang === 'zh-cn' ? 'bg-[#221E1A] text-emerald-400 font-extrabold shadow-sm' : 'hover:text-[#221E1A]'
              }`}
              title="简体中文"
            >
              簡
            </button>
          </div>

          {/* Window Buttons */}
          <div className="hidden lg:flex items-center gap-1.5 border-l border-[#C8BFB0] pl-2">
            <button
              onClick={onPopout}
              className="w-8 h-8 rounded-lg neu-inset text-[#4A443C] hover:text-[#221E1A] transition-all flex items-center justify-center text-xs font-bold"
              title={lang === 'en' ? 'Open in New Tab' : '新分頁開啟'}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onToggleWindowMode}
              className="w-8 h-8 rounded-lg neu-inset text-[#4A443C] hover:text-[#221E1A] transition-all flex items-center justify-center text-xs font-bold"
              title={lang === 'en' ? 'Toggle Full Width' : '切換全螢幕寬度'}
            >
              {isFullWidthWindow ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onResetWindow}
              className="w-8 h-8 rounded-lg neu-inset text-[#4A443C] hover:text-red-600 transition-all flex items-center justify-center text-xs font-bold"
              title={lang === 'en' ? 'Reset Page View' : '重置頁面'}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* CTA Button */}
          <a
            href={GUMROAD_BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="neu-gold-btn px-4 py-2 text-xs sm:text-sm flex items-center gap-2 group"
          >
            <span>{t.ctaHeroBtn}</span>
          </a>

        </div>

      </div>
    </header>
  );
};
