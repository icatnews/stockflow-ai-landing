import React from 'react';
import { Language, translations } from '../i18n';
import { CORE_MODULES, GUMROAD_BUY_URL } from '../data';
import { Sparkles, FileSpreadsheet, Camera, TrendingUp, CheckCircle2, ArrowRight, Zap } from 'lucide-react';

interface ModulesGridProps {
  lang: Language;
  onSelectModuleTab?: (tabId: 'decode-ai' | 'stocksensei-x' | 'photocoach' | 'trend-sniper') => void;
}

export const ModulesGrid: React.FC<ModulesGridProps> = ({ lang, onSelectModuleTab }) => {
  const t = translations[lang];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#221E1A]" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6 text-[#221E1A]" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-[#221E1A]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#221E1A]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#221E1A]" />;
    }
  };

  const getModuleBullets = (moduleId: string) => {
    switch (moduleId) {
      case 'decode-ai':
        return [t.m1Bullet1, t.m1Bullet2, t.m1Bullet3];
      case 'stocksensei-x':
        return [t.m2Bullet1, t.m2Bullet2, t.m2Bullet3];
      case 'photocoach':
        return [t.m3Bullet1, t.m3Bullet2, t.m3Bullet3];
      case 'trend-sniper':
        return [t.m4Bullet1, t.m4Bullet2, t.m4Bullet3];
      default:
        return [];
    }
  };

  const getModuleName = (moduleId: string) => {
    switch (moduleId) {
      case 'decode-ai': return t.m1Name;
      case 'stocksensei-x': return t.m2Name;
      case 'photocoach': return t.m3Name;
      case 'trend-sniper': return t.m4Name;
      default: return '';
    }
  };

  const getModuleTitle = (moduleId: string) => {
    switch (moduleId) {
      case 'decode-ai': return t.m1Title;
      case 'stocksensei-x': return t.m2Title;
      case 'photocoach': return t.m3Title;
      case 'trend-sniper': return t.m4Title;
      default: return '';
    }
  };

  const getModuleDesc = (moduleId: string) => {
    switch (moduleId) {
      case 'decode-ai': return t.m1Desc;
      case 'stocksensei-x': return t.m2Desc;
      case 'photocoach': return t.m3Desc;
      case 'trend-sniper': return t.m4Desc;
      default: return '';
    }
  };

  return (
    <section id="modules" className="py-12 scroll-mt-16">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md neu-inset text-[#221E1A] text-xs font-mono font-extrabold uppercase mb-3">
          <Zap className="w-3.5 h-3.5 text-[#C89632]" />
          <span>{t.modulesHeaderBadge}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#221E1A] tracking-tight mb-3 font-display">
          {t.modulesTitle}
        </h2>
        <p className="text-sm sm:text-base text-[#5A5348] font-medium">
          {t.modulesSubtitle}
        </p>
      </div>

      {/* 4 Core Modules Neumorphic Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {CORE_MODULES.map((module) => {
          const name = getModuleName(module.id);
          const title = getModuleTitle(module.id);
          const desc = getModuleDesc(module.id);
          const bullets = getModuleBullets(module.id);

          return (
            <div
              key={module.id}
              className="neu-raised p-6 sm:p-8 flex flex-col justify-between group border border-white/80 hover:border-[#E0AF4B] transition-all duration-300"
            >
              <div>
                {/* Module Top Bar */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E0AF4B] to-[#C89632] flex items-center justify-center shadow-[4px_4px_10px_#c2bbb0,-4px_-4px_10px_#ffffff] group-hover:scale-105 transition-transform">
                      {getIcon(module.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-black text-[#C89632] tracking-wider uppercase">
                        {module.badge}
                      </span>
                      <h3 className="text-xl font-extrabold text-[#221E1A] font-display">
                        {name}
                      </h3>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-bold bg-[#221E1A] text-[#E0AF4B] rounded-md">
                    Pro AI
                  </span>
                </div>

                {/* Subtitle / Headline */}
                <h4 className="text-sm font-extrabold text-[#9E731B] mb-2 font-display">
                  {title}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4A443C] mb-6 leading-relaxed font-medium">
                  {desc}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-8">
                  {bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#221E1A] font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#C89632] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-[#C8BFB0]/50 flex items-center justify-between gap-3">
                <a
                  href="#interactive-demo"
                  onClick={() => onSelectModuleTab?.(module.id)}
                  className="text-xs font-extrabold text-[#9E731B] hover:text-[#221E1A] flex items-center gap-1.5 transition-colors"
                >
                  <span>{module.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={GUMROAD_BUY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl neu-inset text-[#221E1A] hover:text-[#C89632] text-xs font-extrabold transition-all"
                >
                  Unlock Module ➔
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
