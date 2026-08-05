import React from 'react';
import { Language, translations } from '../i18n';
import { Cpu, Sparkles, RefreshCw, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

interface DualEngineSectionProps {
  lang: Language;
}

export const DualEngineSection: React.FC<DualEngineSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="dual-engine" className="py-8 scroll-mt-16 space-y-6">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Outer Neumorphic Card */}
        <div className="neu-raised p-6 sm:p-10 rounded-3xl border border-white/80 bg-[#EAE4D9] space-y-8 relative overflow-hidden">
          
          {/* Subtle Ambient Background Accent */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#E0AF4B]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header & Title */}
          <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
            <div className="neu-inset text-[#C89632] px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-wider uppercase inline-flex items-center gap-2 bg-[#E0D8C9]/80 border border-[#C8BFB0]/50">
              <Cpu className="w-3.5 h-3.5 text-[#E0AF4B]" />
              <span>{t.dualEngineBadge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#221E1A] tracking-tight font-display leading-tight">
              {t.dualEngineTitle}
            </h2>

            <p className="text-xs sm:text-sm text-[#5A5348] font-medium leading-relaxed">
              {t.dualEngineSubtitle}
            </p>
          </div>

          {/* 3 Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            
            {/* Highlight 1: Gemini 100% Free Default */}
            <div className="neu-inset p-6 rounded-2xl border border-[#C8BFB0]/50 bg-[#E0D8C9]/60 flex flex-col justify-between space-y-4 hover:border-[#E0AF4B]/50 transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl neu-raised bg-[#EAE4D9] flex items-center justify-center border border-white/80">
                    <Sparkles className="w-5 h-5 text-[#E0AF4B]" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 font-mono text-[10px] font-bold border border-emerald-500/30">
                    {t.dualEngineF1Tag}
                  </span>
                </div>

                <h3 className="text-base font-black text-[#221E1A] font-display">
                  {t.dualEngineF1Title}
                </h3>

                <p className="text-xs text-[#4A443C] font-medium leading-relaxed">
                  {t.dualEngineF1Desc}
                </p>
              </div>

              <div className="pt-2 border-t border-[#C8BFB0]/40 flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Gemini 3.6 Flash Native API</span>
              </div>
            </div>

            {/* Highlight 2: Seamless NVIDIA Failover */}
            <div className="neu-inset p-6 rounded-2xl border border-[#C8BFB0]/50 bg-[#E0D8C9]/60 flex flex-col justify-between space-y-4 hover:border-[#E0AF4B]/50 transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl neu-raised bg-[#EAE4D9] flex items-center justify-center border border-white/80">
                    <RefreshCw className="w-5 h-5 text-[#221E1A]" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-950 text-amber-300 font-mono text-[10px] font-bold border border-amber-500/30">
                    {t.dualEngineF2Tag}
                  </span>
                </div>

                <h3 className="text-base font-black text-[#221E1A] font-display">
                  {t.dualEngineF2Title}
                </h3>

                <p className="text-xs text-[#4A443C] font-medium leading-relaxed">
                  {t.dualEngineF2Desc}
                </p>
              </div>

              <div className="pt-2 border-t border-[#C8BFB0]/40 flex items-center gap-1.5 text-[11px] font-bold text-[#221E1A]">
                <Zap className="w-3.5 h-3.5 text-[#E0AF4B] shrink-0" />
                <span>NVIDIA Vision Backup Engine</span>
              </div>
            </div>

            {/* Highlight 3: Dynamic Throttle Pacing */}
            <div className="neu-inset p-6 rounded-2xl border border-[#C8BFB0]/50 bg-[#E0D8C9]/60 flex flex-col justify-between space-y-4 hover:border-[#E0AF4B]/50 transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl neu-raised bg-[#EAE4D9] flex items-center justify-center border border-white/80">
                    <ShieldCheck className="w-5 h-5 text-emerald-700" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-zinc-900 text-zinc-200 font-mono text-[10px] font-bold border border-zinc-700">
                    {t.dualEngineF3Tag}
                  </span>
                </div>

                <h3 className="text-base font-black text-[#221E1A] font-display">
                  {t.dualEngineF3Title}
                </h3>

                <p className="text-xs text-[#4A443C] font-medium leading-relaxed">
                  {t.dualEngineF3Desc}
                </p>
              </div>

              <div className="pt-2 border-t border-[#C8BFB0]/40 flex items-center gap-1.5 text-[11px] font-bold text-zinc-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Rate-Limit & Cooling Shield</span>
              </div>
            </div>

          </div>

          {/* Bottom Summary Bar */}
          <div className="p-4 rounded-2xl bg-[#221E1A] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium border border-[#E0AF4B]/30">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-zinc-200 font-bold">
                {lang === 'en' 
                  ? '99.9% High Availability Guaranteed for 40-Item Batches' 
                  : lang === 'zh' 
                  ? '強大防爆架構，40 張大批量產穩定度達 99.9%' 
                  : '强大防爆架构，40 张大批量产稳定度达 99.9%'}
              </span>
            </div>
            <div className="text-[11px] text-[#E0AF4B] font-mono font-bold">
              {lang === 'en' ? 'GEMINI 3.6 FLASH + NVIDIA AI CO-PROCESSING' : 'GEMINI 3.6 FLASH + NVIDIA AI 雙晶片協同'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
