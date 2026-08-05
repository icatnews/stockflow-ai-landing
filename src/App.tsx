import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ModulesGrid } from './components/ModulesGrid';
import { LiveWorkspace } from './components/LiveWorkspace';
import { DualEngineSection } from './components/DualEngineSection';
import { ApiKeyAndFaqSection } from './components/ApiKeyAndFaqSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { ApiKeyModal } from './components/ApiKeyModal';
import { Language } from './i18n';

export default function App() {
  const [lang, setLang] = useState<Language>('zh'); // Default to Traditional Chinese as requested by user
  const [isFullWidthWindow, setIsFullWidthWindow] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [activeModuleTab, setActiveModuleTab] = useState<
    'decode-ai' | 'stocksensei-x' | 'photocoach' | 'trend-sniper'
  >('decode-ai');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleSaveApiKeys = (nvidiaKey: string, geminiKey: string) => {
    if (nvidiaKey || geminiKey) {
      showToast(
        lang === 'en'
          ? 'API Keys configured! NVIDIA Free AI active ⚡'
          : lang === 'zh'
          ? 'API 密鑰設置成功！已啟用免費 NVIDIA 視覺 AI 引擎 ⚡'
          : 'API 密钥设置成功！已启用免费 NVIDIA 视觉 AI 引擎 ⚡'
      );
    } else {
      showToast(
        lang === 'en'
          ? 'API Keys cleared.'
          : lang === 'zh'
          ? '已清除所有 API 密鑰。'
          : '已清除所有 API 密钥。'
      );
    }
  };

  const handleSelectLang = (newLang: Language) => {
    setLang(newLang);
    const toastMsg =
      newLang === 'en'
        ? 'Switched to English 🇺🇸'
        : newLang === 'zh'
        ? '已切換至繁體中文 🇹🇼'
        : '已切换至简体中文 🇨🇳';
    showToast(toastMsg);
  };

  const handlePopout = () => {
    window.open(window.location.href, '_blank');
    showToast(
      lang === 'en'
        ? 'Opened in new tab 🚀'
        : lang === 'zh'
        ? '已於新分頁獨立開啟 🚀'
        : '已在新标签页独立打开 🚀'
    );
  };

  const handleToggleWindowMode = () => {
    setIsFullWidthWindow((prev) => !prev);
    showToast(
      !isFullWidthWindow
        ? (lang === 'en' ? 'Expanded Full-Width View 🖥️' : lang === 'zh' ? '切換至全螢幕寬版視窗 🖥️' : '切换至全屏宽版窗口 🖥️')
        : (lang === 'en' ? 'Standard Centered View 📐' : lang === 'zh' ? '切換至標準置中視窗 📐' : '切换至标准居中窗口 📐')
    );
  };

  const handleResetWindow = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(
      lang === 'en'
        ? 'Window state reset & refreshed 🔄'
        : lang === 'zh'
        ? '視窗狀態已重置 🔄'
        : '窗口状态已重置 🔄'
    );
  };

  const handleSelectModuleTab = (
    tabId: 'decode-ai' | 'stocksensei-x' | 'photocoach' | 'trend-sniper'
  ) => {
    setActiveModuleTab(tabId);
    const demoSection = document.getElementById('interactive-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#EAE4D9] text-[#221E1A] p-2 sm:p-6 md:p-8 flex flex-col justify-between selection:bg-[#E0AF4B]/40 selection:text-[#221E1A]">
      
      {/* Neumorphic Main Outer Frame */}
      <div className={`${isFullWidthWindow ? 'w-full' : 'max-w-7xl'} mx-auto w-full neu-frame p-3 sm:p-6 md:p-8 flex flex-col justify-between flex-1 relative transition-all duration-300`}>
        
        {/* Top Sticky Header & Navigation */}
        <Header
          lang={lang}
          onSelectLang={handleSelectLang}
          isFullWidthWindow={isFullWidthWindow}
          onToggleWindowMode={handleToggleWindowMode}
          onPopout={handlePopout}
          onResetWindow={handleResetWindow}
          onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-1 space-y-12">
          
          {/* Hero Section */}
          <Hero
            lang={lang}
            onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
          />

          {/* 4 Core Software Modules Grid */}
          <ModulesGrid lang={lang} onSelectModuleTab={handleSelectModuleTab} />

          {/* Interactive Live AI Studio Workspace */}
          <LiveWorkspace
            lang={lang}
            activeTab={activeModuleTab}
            onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
          />

          {/* Dual-Engine Smart Scheduling & Anti-Freeze Protection Feature */}
          <DualEngineSection lang={lang} />

          {/* Software Pricing & API Key Mode + Featured FAQ + 3-Step Quick Start */}
          <ApiKeyAndFaqSection
            lang={lang}
            onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
          />

          {/* Full FAQ Section */}
          <FAQSection lang={lang} />

        </main>

        {/* Footer */}
        <Footer
          lang={lang}
          onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        />

      </div>

      {/* API Key Modal */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        lang={lang}
        onSaveKeys={handleSaveApiKeys}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
}
