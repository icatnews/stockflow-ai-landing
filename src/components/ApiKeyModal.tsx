import React, { useState } from 'react';
import { Key, Lock, X, ExternalLink, Save, Trash2, CheckCircle2 } from 'lucide-react';
import { Language } from '../i18n';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSaveKeys?: (nvidiaKey: string, geminiKey: string) => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({
  isOpen,
  onClose,
  lang,
  onSaveKeys
}) => {
  const [nvidiaKey, setNvidiaKey] = useState<string>('nvapi-9x8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f');
  const [geminiKey, setGeminiKey] = useState<string>('AIzaSyA1b2C3d4E5f6G7h8I9j0K1l2M3n4O5p6Q');
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleUpdateKeys = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSaveKeys) {
      onSaveKeys(nvidiaKey, geminiKey);
    }
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleDisconnect = () => {
    setNvidiaKey('');
    setGeminiKey('');
    if (onSaveKeys) {
      onSaveKeys('', '');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Container matching Image 2 Software Design */}
      <div className="relative w-full max-w-md bg-[#0F0E13] border border-zinc-800 rounded-3xl p-6 sm:p-8 text-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] font-sans">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Icon */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
            <Key className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black tracking-tight font-display text-white mb-1">
            API Configuration
          </h3>
          <p className="text-xs text-zinc-400 font-medium">
            {lang === 'en'
              ? 'NVIDIA API prioritized by default — 100% free with ultra-fast analysis!'
              : '系統優先採用 NVIDIA API，無費用爭議且分析速度極快！'}
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleUpdateKeys} className="space-y-5">
          
          {/* NVIDIA API KEY Field */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-mono font-extrabold">
              <span className="text-emerald-400 flex items-center gap-1">
                ★ NVIDIA API KEY ({lang === 'en' ? 'Preferred / Free' : '優先選用'})
              </span>
              <span className="text-zinc-500 text-[10px]">nvapi-...</span>
            </div>

            <div className="relative flex items-center">
              <div className="absolute left-3.5 text-emerald-500 pointer-events-none">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type="password"
                value={nvidiaKey}
                onChange={(e) => setNvidiaKey(e.target.value)}
                placeholder="nvapi-..."
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-950/90 border border-emerald-500/40 text-emerald-300 font-mono text-xs focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all placeholder:text-zinc-600"
              />
            </div>
            <p className="text-[11px] text-zinc-500 font-medium leading-tight">
              {lang === 'en'
                ? 'System uses 100% free NVIDIA vision models after setup, avoiding Gemini API costs.'
                : '填寫後系統將 100% 採用 NVIDIA 視覺模型分析，避免產生 Gemini 費用。'}
            </p>
          </div>

          {/* GEMINI API KEY Field */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-mono font-extrabold">
              <span className="text-indigo-400">
                GEMINI API KEY ({lang === 'en' ? 'Backup / Default' : '備用/預設'})
              </span>
              <span className="text-zinc-500 text-[10px]">AIza... / AQ...</span>
            </div>

            <div className="relative flex items-center">
              <div className="absolute left-3.5 text-indigo-400 pointer-events-none">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type="password"
                value={geminiKey}
                onChange={(e) => setGeminiKey(e.target.value)}
                placeholder="AIza... / AQ..."
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-950/90 border border-zinc-800 text-indigo-200 font-mono text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-zinc-600"
              />
            </div>
          </div>

          {/* Primary Action Button: Update Keys */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all active:scale-[0.99]"
          >
            {savedSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Keys Saved Successfully!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Update Keys</span>
              </>
            )}
          </button>

          {/* External Key Retrieval Links */}
          <div className="flex items-center justify-between pt-1 text-xs font-extrabold font-mono">
            <a
              href="https://build.nvidia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
            >
              <span>GET NVIDIA KEY</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href="https://aistudio.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
            >
              <span>GET GEMINI KEY</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Disconnect Button */}
          <div className="pt-2 border-t border-zinc-900">
            <button
              type="button"
              onClick={handleDisconnect}
              className="w-full py-2.5 rounded-xl border border-red-900/40 text-red-400 hover:bg-red-950/30 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>DISCONNECT ALL API KEYS</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
