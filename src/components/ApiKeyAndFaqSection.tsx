import React, { useState } from 'react';
import { Language, translations } from '../i18n';
import { GUMROAD_BUY_URL } from '../data';
import {
  Key,
  HelpCircle,
  ExternalLink,
  ShoppingCart,
  Globe,
  CheckCircle2,
  Zap,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ApiKeyAndFaqSectionProps {
  lang: Language;
  onOpenApiKeyModal: () => void;
}

export const ApiKeyAndFaqSection: React.FC<ApiKeyAndFaqSectionProps> = ({
  lang,
  onOpenApiKeyModal
}) => {
  const t = translations[lang];

  // Q1 & Q2 from user request + additional FAQs
  const faqList = [
    { q: t.faqQ1, a: t.faqA1 },
    { q: t.faqQ2, a: t.faqA2 },
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq3Q, a: t.faq3A }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="pricing" className="py-8 scroll-mt-16 space-y-12">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Two Column Grid: Left [Pricing & API Key Mode] | Right [Featured FAQ] */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Block: 【軟體定價與 API Key 模式說明】 */}
          <div className="neu-raised p-6 sm:p-8 rounded-3xl border border-white/80 flex flex-col justify-between space-y-6 relative overflow-hidden bg-[#EAE4D9]/80">
            <div>
              {/* Badge & Title */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md neu-inset text-[#221E1A] text-xs font-mono font-extrabold uppercase mb-4">
                <Key className="w-3.5 h-3.5 text-[#C89632]" />
                <span>{t.apiKeyModeBadge}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#221E1A] tracking-tight mb-3 font-display leading-tight">
                {t.apiKeyModeTitle}
              </h3>

              {/* Prominent $49 USD Lifetime Price Banner */}
              <div className="my-4 p-4 rounded-2xl bg-[#221E1A] text-white border border-[#E0AF4B]/50 shadow-md flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] font-mono text-[#E0AF4B] font-extrabold uppercase tracking-wider">
                    {lang === 'en' ? 'LIFETIME LICENSE PRICE' : lang === 'zh' ? '終身授權買斷價' : '终身授权买断价'}
                  </div>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-3xl sm:text-4xl font-black font-mono text-[#E0AF4B] tracking-tight">$49</span>
                    <span className="text-xs font-extrabold font-mono text-zinc-300">USD</span>
                    <span className="text-[10px] text-zinc-400 font-medium ml-1 hidden sm:inline">
                      ({lang === 'en' ? 'One-time payment • Perpetual access' : '一次付費・終身永久使用'})
                    </span>
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-[#E0AF4B] text-[#221E1A] font-black text-xs font-mono shadow-sm shrink-0">
                  {lang === 'en' ? '$49 ONE-TIME' : '$49 美金買斷'}
                </div>
              </div>

              {/* Main Body Text */}
              <p className="text-xs sm:text-sm text-[#4A443C] font-medium leading-relaxed mb-6 neu-inset p-4 rounded-2xl bg-[#E0D8C9]/60 border border-[#C8BFB0]/50">
                {t.apiKeyModeDesc}
              </p>

              {/* 3 Core Points */}
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-[#221E1A]">
                  <CheckCircle2 className="w-4 h-4 text-[#C89632] shrink-0 mt-0.5" />
                  <span>{t.apiKeyPoint1}</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-[#221E1A]">
                  <CheckCircle2 className="w-4 h-4 text-[#C89632] shrink-0 mt-0.5" />
                  <span>{t.apiKeyPoint2}</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-[#221E1A]">
                  <CheckCircle2 className="w-4 h-4 text-[#C89632] shrink-0 mt-0.5" />
                  <span>{t.apiKeyPoint3}</span>
                </li>
              </ul>
            </div>

            {/* Quick Action Bar inside Left Card */}
            <div className="pt-4 border-t border-[#C8BFB0]/50 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] font-mono text-[#5A5348] font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                100% Client-Side API Key Storage
              </span>
              <a
                href={GUMROAD_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-dark-btn px-4 py-2 text-xs font-black inline-flex items-center gap-1.5"
              >
                <span>{lang === 'en' ? 'Get License ($49 USD)' : lang === 'zh' ? '獲取終身授權 ($49 美金)' : '获取终身授权 ($49 美金)'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Block: 【精選常見問答 (FAQ)】 */}
          <div className="neu-raised p-6 sm:p-8 rounded-3xl border border-white/80 flex flex-col justify-between space-y-6 bg-[#EAE4D9]/80">
            <div>
              {/* Badge & Title */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md neu-inset text-[#221E1A] text-xs font-mono font-extrabold uppercase mb-4">
                <HelpCircle className="w-3.5 h-3.5 text-[#C89632]" />
                <span>{t.featuredFaqBadge}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#221E1A] tracking-tight mb-4 font-display">
                {t.featuredFaqTitle}
              </h3>

              {/* Accordion FAQ List */}
              <div className="space-y-3">
                {faqList.map((faq, idx) => {
                  const isOpen = openIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl neu-inset overflow-hidden border border-[#C8BFB0]/40 transition-all bg-[#E0D8C9]/40"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 text-left font-extrabold text-xs sm:text-sm text-[#221E1A] flex items-center justify-between gap-3 hover:text-[#C89632] transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-[#221E1A] text-[#E0AF4B] font-mono text-[10px] flex items-center justify-center shrink-0">
                            Q{idx + 1}
                          </span>
                          <span>{faq.q}</span>
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#C89632] shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs text-[#4A443C] font-medium leading-relaxed border-t border-[#C8BFB0]/40 pl-11 whitespace-pre-line">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Note */}
            <div className="pt-2 text-[11px] text-[#5A5348] font-medium flex items-center justify-between">
              <span>{lang === 'en' ? 'Have more questions?' : '還有其他疑問？'}</span>
              <a
                href="#faq"
                className="text-[#C89632] hover:underline font-bold font-mono text-xs"
              >
                {lang === 'en' ? 'View Full FAQ ➔' : '查看完整 FAQ ➔'}
              </a>
            </div>
          </div>

        </div>

        {/* 下方極簡「3步快速引導教學 (Quick Start)」 */}
        <div className="mt-12 neu-gold-card p-6 sm:p-10 rounded-3xl space-y-8 relative overflow-hidden border border-[#E0AF4B]/50">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#221E1A] text-[#E0AF4B] text-xs font-mono font-extrabold uppercase mb-1">
              <Zap className="w-3.5 h-3.5 text-[#E0AF4B]" />
              <span>{t.quickStartBadge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#221E1A] tracking-tight font-display">
              {t.quickStartTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#4A443C] font-semibold">
              {t.quickStartSubtitle}
            </p>
          </div>

          {/* 3 Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            
            {/* Step 1: Purchase License & Direct Web App Access */}
            <div className="neu-raised p-6 rounded-2xl border border-white/80 flex flex-col justify-between space-y-4 bg-[#EAE4D9]">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-[#221E1A] text-[#E0AF4B] font-mono text-sm font-black flex items-center justify-center">
                    {t.qsStep1Num}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-mono text-[10px] font-bold border border-emerald-500/30">
                    WEB APP • 免下載
                  </span>
                </div>
                <h4 className="text-base font-black text-[#221E1A] font-display">
                  {t.qsStep1Title}
                </h4>
                <p className="text-xs text-[#5A5348] font-medium leading-relaxed">
                  {t.qsStep1Desc}
                </p>

                {/* Direct Web App URL Pill */}
                <div className="p-2.5 rounded-xl bg-[#E0D8C9]/80 border border-[#C8BFB0]/60 flex items-center justify-between gap-2 text-[11px] text-[#221E1A] font-mono font-bold">
                  <span className="flex items-center gap-1.5 truncate text-[#C89632]">
                    <Globe className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">stockflow-pro.pages.dev</span>
                  </span>
                  <a
                    href="https://stockflow-pro.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-zinc-800 hover:text-black font-sans font-black underline shrink-0"
                  >
                    開啟 ➔
                  </a>
                </div>
              </div>

              <a
                href={GUMROAD_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-dark-btn w-full py-2.5 text-center text-xs font-bold inline-flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-3.5 h-3.5 text-[#E0AF4B]" />
                <span>{t.qsStep1Btn}</span>
              </a>
            </div>

            {/* Step 2: Get Free API Key (External Links) */}
            <div className="neu-raised p-6 rounded-2xl border border-white/80 flex flex-col justify-between space-y-4 bg-[#EAE4D9]">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-[#221E1A] text-[#E0AF4B] font-mono text-sm font-black flex items-center justify-center">
                    {t.qsStep2Num}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#E0D8C9] text-[#221E1A] font-mono text-[10px] font-bold">
                    STEP 2
                  </span>
                </div>
                <h4 className="text-base font-black text-[#221E1A] font-display">
                  {t.qsStep2Title}
                </h4>
                <p className="text-xs text-[#5A5348] font-medium leading-relaxed">
                  {t.qsStep2Desc}
                </p>
              </div>

              {/* External Portal Links Buttons */}
              <div className="space-y-2">
                <a
                  href="https://build.nvidia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-[#1A1816] text-[#76B900] hover:bg-[#25221F] transition-all text-xs font-mono font-bold flex items-center justify-between border border-[#76B900]/40 shadow-sm"
                >
                  <span className="truncate">{t.qsStep2NvidiaBtn}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>

                <a
                  href="https://aistudio.google.com/app/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-[#1A1816] text-[#4285F4] hover:bg-[#25221F] transition-all text-xs font-mono font-bold flex items-center justify-between border border-[#4285F4]/40 shadow-sm"
                >
                  <span className="truncate">{t.qsStep2GeminiBtn}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>

            {/* Step 3: Enter Key & Launch */}
            <div className="neu-raised p-6 rounded-2xl border border-white/80 flex flex-col justify-between space-y-4 bg-[#EAE4D9]">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-[#221E1A] text-[#E0AF4B] font-mono text-sm font-black flex items-center justify-center">
                    {t.qsStep3Num}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#E0D8C9] text-[#221E1A] font-mono text-[10px] font-bold">
                    STEP 3
                  </span>
                </div>
                <h4 className="text-base font-black text-[#221E1A] font-display">
                  {t.qsStep3Title}
                </h4>
                <p className="text-xs text-[#5A5348] font-medium leading-relaxed">
                  {t.qsStep3Desc}
                </p>
              </div>

              <button
                onClick={onOpenApiKeyModal}
                className="neu-gold-btn w-full py-2.5 text-center text-xs font-black text-[#221E1A] inline-flex items-center justify-center gap-2 shadow-sm"
              >
                <Key className="w-3.5 h-3.5 text-[#221E1A]" />
                <span>{t.qsStep3Btn}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
