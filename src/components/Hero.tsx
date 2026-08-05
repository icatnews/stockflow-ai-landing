import React from 'react';
import { Language, translations } from '../i18n';
import { GUMROAD_BUY_URL } from '../data';
import { ArrowRight, Zap, CheckCircle2, Star, Key, Cpu } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenApiKeyModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenApiKeyModal }) => {
  const t = translations[lang];

  return (
    <section className="relative pt-4 pb-12 overflow-hidden">
      
      {/* Background Subtle Warm Gold/Green Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#10B981]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center px-4">
        
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0D8C9] border border-white/60 text-[#221E1A] text-xs font-extrabold mb-6 shadow-[4px_4px_10px_#c2bbb0,-4px_-4px_10px_#ffffff]">
          <Star className="w-3.5 h-3.5 fill-[#C89632] text-[#C89632]" />
          <span>{t.heroBadge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#221E1A] tracking-tight leading-[1.15] mb-6 font-display">
          StockFlow AI - <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] via-[#10B981] to-[#C89632]">Analyze, Prompt, Rank, Sell.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#4A443C] font-medium max-w-3xl mx-auto mb-8 leading-relaxed">
          {t.heroSubtitle}
        </p>

        {/* Interactive Preset Showcase Banner matching Image 1 */}
        <div className="max-w-2xl mx-auto mb-8 p-3.5 rounded-2xl bg-[#221E1A] text-white border border-emerald-500/30 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs font-black text-emerald-400 flex items-center gap-1.5">
                <span>{lang === 'en' ? 'Live Preset Workshop' : '網頁實機 AI 工作坊'}</span>
                <span className="px-1.5 py-0.2 text-[9px] bg-emerald-500 text-black font-extrabold rounded">100% FREE PREVIEW</span>
              </div>
              <p className="text-[11px] text-zinc-300 font-medium">
                {lang === 'en'
                  ? 'No installation or login required. Select real stock samples to view DeCode AI prompts & 49 SEO tags.'
                  : '免安裝登入，直接在瀏覽器點選範例照片，即刻預覽提示詞拆解與 49 個 SEO 標籤。'}
              </p>
            </div>
          </div>
          <a
            href="#interactive-demo"
            className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs shrink-0 flex items-center gap-1.5 transition-all shadow-md active:scale-95"
          >
            <ArrowRight className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Try Demo Now' : '立即測試四大模組'}</span>
          </a>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href={GUMROAD_BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="neu-gold-btn px-8 py-4 text-base sm:text-lg flex items-center gap-2.5 font-black text-[#221E1A]"
          >
            <span>{t.heroCtaPrimary}</span>
            <ArrowRight className="w-5 h-5 text-[#221E1A]" />
          </a>

          <a
            href="#interactive-demo"
            className="neu-dark-btn px-7 py-4 text-base sm:text-lg flex items-center gap-2"
          >
            <Zap className="w-5 h-5 text-[#10B981]" />
            <span>{t.heroCtaSecondary}</span>
          </a>
        </div>

        {/* Feature Highlights Pills */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm font-extrabold text-[#38332C] mb-12 border-y border-[#C8BFB0]/60 py-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#059669]" />
            <span>100% Adobe Stock & Shutterstock Compatible</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#059669]" />
            <span>Exact 49 High-Converting IPTC Keywords</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#059669]" />
            <span>Support Free NVIDIA API & Gemini API</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#059669]" />
            <span>Lifetime License • No Monthly Subscription</span>
          </div>
        </div>

        {/* 4 Neumorphic Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="neu-raised p-5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#059669] font-mono mb-1">
              {t.heroStat1Val}
            </div>
            <div className="text-xs text-[#6C655A] font-bold">{t.heroStat1Lbl}</div>
          </div>

          <div className="neu-raised p-5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#059669] font-mono mb-1">
              {t.heroStat2Val}
            </div>
            <div className="text-xs text-[#6C655A] font-bold">{t.heroStat2Lbl}</div>
          </div>

          <div className="neu-raised p-5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#059669] font-mono mb-1">
              {t.heroStat3Val}
            </div>
            <div className="text-xs text-[#6C655A] font-bold">{t.heroStat3Lbl}</div>
          </div>

          <div className="neu-raised p-5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#059669] font-mono mb-1">
              {t.heroStat4Val}
            </div>
            <div className="text-xs text-[#6C655A] font-bold">{t.heroStat4Lbl}</div>
          </div>
        </div>

      </div>
    </section>
  );
};
