export type Language = 'en' | 'zh' | 'zh-cn';

export const translations = {
  en: {
    // Top Window Header & Nav
    hubTitle: 'StockFlow AI',
    hubSub: 'StockFlow AI V1.0',
    navModules: 'Core Modules',
    navStudio: 'Live AI Studio',
    navValue: 'Why StockFlow',
    navPricing: 'Pricing',
    navFAQ: 'FAQ',
    navInstantFlow: '🎙️ InstantFlow',
    ctaHeroBtn: 'Get Lifetime License ($49 USD)',
    savedBookmarks: 'Saved',

    // Hero Section
    heroBadge: '★ 4.98 / 5.0 RATED BY 3,800+ STOCK PHOTOGRAPHERS',
    heroTitle: 'StockFlow AI - Analyze, Prompt, Rank, Sell.',
    heroSubtitle: 'The All-in-One AI Copilot for Stock Photographers & Digital Creators. Boost your Adobe Stock & Shutterstock uploads by 4x.',
    heroCtaPrimary: 'Get Lifetime Access ($49 USD)',
    heroCtaSecondary: 'Launch Live AI Studio',
    heroStat1Val: '4x',
    heroStat1Lbl: 'Faster Batch Uploads',
    heroStat2Val: '49 Tags',
    heroStat2Lbl: 'Exact Adobe Stock Limit',
    heroStat3Val: '99.8%',
    heroStat3Lbl: 'Commercial Acceptance Rank',
    heroStat4Val: '3,800+',
    heroStat4Lbl: 'Active Creators',

    // 4 Core Software Modules Section
    modulesHeaderBadge: '4 CORE SOFTWARE MODULES',
    modulesTitle: 'The Complete AI Suite for Stock Creators',
    modulesSubtitle: 'Four powerful engines engineered to handle prompt decoding, metadata generation, commercial quality audit, and market intelligence.',

    // Module 1: DeCode AI
    m1Name: 'DeCode AI',
    m1Title: 'Visual Reverse Engineering Engine',
    m1Desc: 'Upload images or videos to instantly extract high-commercial AI prompts for Midjourney, Luma, and Flow.',
    m1Bullet1: 'Reverse-engineer top-selling stock photos into Midjourney V6 & Flux prompts',
    m1Bullet2: 'Extract camera motion & cinematic lighting prompts for Luma Dream Machine',
    m1Bullet3: 'Instant prompt copying with parameter tuning (--ar, --v, --style)',

    // Module 2: StockSensei X
    m2Name: 'StockSensei X',
    m2Title: 'Batch Metadata & CSV Automation',
    m2Desc: 'Drag-and-drop up to 40 files to generate SEO Titles, Descriptions, and 49 precise IPTC keywords with 1-click CSV export.',
    m2Bullet1: 'Auto-generate high-converting commercial SEO Titles & Descriptions',
    m2Bullet2: 'Exact 49 high-ranking IPTC keywords per photo (Adobe Stock compliant)',
    m2Bullet3: '1-Click 5-Column CSV Export (Filename, Title, Desc, Keywords, Category)',

    // Module 3: PhotoCoach
    m3Name: 'PhotoCoach',
    m3Title: 'Shooting Guide & Quality Audit',
    m3Desc: 'AI commercial scoring system with real-time feedback on lighting, composition, and professional reshoot advice.',
    m3Bullet1: 'Instant Commercial Acceptance Score (0-100%) before uploading',
    m3Bullet2: 'Detect lighting contrast, buyer copy space, and subject clarity',
    m3Bullet3: 'Actionable studio & field reshoot guidelines to boost sales',

    // Module 4: Trend Sniper
    m4Name: 'Trend Sniper',
    m4Title: 'Global Market Intelligence Radar',
    m4Desc: 'Real-time insights into upcoming global holidays, seasonal trends, and high-demand commercial keywords.',
    m4Bullet1: 'Forecast upcoming peak demand themes 60 days ahead of season',
    m4Bullet2: 'Track search volume growth metrics (+300% high-demand keywords)',
    m4Bullet3: 'Direct 1-click export of trending keyword packs to StockSensei X',

    // Interactive Live Workspace / Studio Demo
    studioHeaderBadge: 'INTERACTIVE LIVE STUDIO',
    studioTitle: 'Test StockFlow AI Live in Your Browser',
    studioSubtitle: 'Experience all 4 core modules right now with zero setup or API key required.',
    tabDecode: '⚡ DeCode AI (Prompt Extractor)',
    tabSensei: '🏷️ StockSensei X (49 Tags & CSV)',
    tabCoach: '📸 PhotoCoach (Score & Reshoot)',
    tabSniper: '🎯 Trend Sniper (Market Radar)',

    // Live Studio Controls
    studioDragDropTitle: 'Drag & Drop your photo or video here',
    studioDragDropSub: 'Supports JPG, PNG, WEBP, MP4 — Instant browser-side AI vision analysis',
    studioPresetLabel: 'Or select a preset stock concept:',
    studioBtnRun: 'Run AI Studio Analysis',
    studioBtnRunning: 'Analyzing Image...',
    studioBtnReset: 'Reset Photo',
    studioBtnCopyPrompt: 'Copy AI Prompt',
    studioBtnDownloadCSV: 'Export 5-Column CSV',
    studioCsvDone: '5-Column CSV Exported Successfully!',

    // Comparison / Value Proposition
    valueBadge: 'WORKFLOW COMPARISON',
    valueTitle: 'Why Stock Photographers Choose StockFlow AI',
    valueSubtitle: 'Reclaim 85% of your time spent on manual tagging and title writing.',
    valOldTitle: 'Traditional Manual Workflow',
    valOldTime: '45-60 Mins per Batch',
    valOld1: 'Manual keyword research on Adobe Stock & Shutterstock',
    valOld2: 'Hand-writing titles, descriptions, and 49 tags item-by-item',
    valOld3: 'Manual copy-pasting into stock agency forms',
    valOld4: 'Trial & error without knowing commercial acceptance chances',

    valNewTitle: 'StockFlow AI Automated Copilot',
    valNewTime: '2 Mins per Batch (15x-30x Speedup)',
    valNew1: 'Instant AI vision analysis extracts exact 49 IPTC tags',
    valNew2: '1-Click 5-Column CSV generation for batch uploading',
    valNew3: 'DeCode AI reverse-engineers top-selling prompt concepts',
    valNew4: 'PhotoCoach score guarantees high commercial acceptance',

    // Supported Platforms
    supportedBadge: 'AGENCY COMPATIBILITY',
    supportedTitle: 'Works Seamlessly With All Major Stock Platforms',

    // Dual-Engine Smart Scheduling Feature Block
    dualEngineBadge: 'DUAL-ENGINE DISPATCH SYSTEM',
    dualEngineTitle: 'Exclusive Dual-Engine Smart Dispatch — 99.9% Stability for Mass Production',
    dualEngineSubtitle: 'Dual-chip AI architecture + zero-downtime failover + dynamic throttle pacing engineered for heavy stock batch uploads.',
    dualEngineF1Title: '1. Default Free Mode (Gemini Priority)',
    dualEngineF1Desc: 'Powered natively by Gemini 3.6 Flash, utilizing Google AI Studio\'s official free tier (API limit up to 1,500 RPD). Since Vision AI token consumption scales with image resolution and payload size, actual photo analysis capacity depends on file dimensions. Using optimized or compressed preview images minimizes token usage to maximize your daily free quota for zero extra cost!',
    dualEngineF1Tag: 'Google Daily Free Tier',
    dualEngineF2Title: '2. Seamless NVIDIA Failover Backup',
    dualEngineF2Desc: 'Because high-res vision analysis is bounded by Google\'s 15 RPM limit and image token payloads, heavy 40-item batches automatically failover in 0s to NVIDIA when rate limits are hit—guaranteeing 100% uninterrupted output.',
    dualEngineF2Tag: '0s Seamless Failover',
    dualEngineF3Title: '3. Dynamic Throttle Pacing',
    dualEngineF3Desc: 'Built-in 3.8-second intelligent pacing and auto-cooling retry mechanics to completely eliminate API rate-limits and error lockups.',
    dualEngineF3Tag: '3.8s Smart Protection',

    // Pricing & API Key Mode Explanation Block
    apiKeyModeBadge: 'PRICING & API KEY MODEL',
    apiKeyModeHeader: 'Software Pricing & API Key Model',
    apiKeyModeTitle: 'Bring Your Own API Key, One-Time $49 USD Lifetime Ownership',
    apiKeyModeDesc: 'Our software has zero expensive monthly subscription fees! For a one-time payment of $49 USD, you receive lifetime perpetual access to StockFlow AI. We adopt a flexible "Bring Your Own API Key (Supports free NVIDIA & Gemini)" model. You only pay for the software license once, and subsequent AI compute costs are billed directly by your API provider with zero platform markups!',
    apiKeyPoint1: 'Zero Recurring Monthly Subscriptions',
    apiKeyPoint2: 'Direct Cloud Billing with Zero Platform Markup',
    apiKeyPoint3: '100% Data Privacy & Direct Endpoint Security',

    // Featured FAQ Block
    featuredFaqBadge: 'FEATURED FAQ',
    featuredFaqTitle: 'Featured Frequently Asked Questions',
    faqQ1: 'Which API Keys can I connect in the software?',
    faqA1: 'We fully support NVIDIA API Key and Gemini API Key, both delivering ultra-fast vision parsing performance.',
    faqQ2: 'How does 1-click batch CSV export work for Adobe Stock & Shutterstock?',
    faqA2: 'In "Single Mode", users analyze assets one by one and manually copy titles, descriptions, and keywords. The 1-click CSV export is built specifically into "Batch Mode", where you can upload up to 40 images & videos at once. Once analyzed, download one unified 5-column CSV to instantly import metadata into Adobe Stock or Shutterstock!\n\n💡 Pro Tip: Try compressing or using smaller image/video files for AI analysis. Vision API billing is calculated based on payload file size, so smaller files save your API quota while keeping analysis accuracy 100% sharp!',

    // 3-Step Quick Start Guide
    quickStartBadge: 'QUICK START GUIDE',
    quickStartTitle: '3-Step Quick Start Guide',
    quickStartSubtitle: 'Three simple steps to configure your software and launch automated stock AI workflows',
    qsStep1Num: '01',
    qsStep1Title: 'Purchase License ($49 USD)',
    qsStep1Desc: 'No downloads needed! Runs 100% in browser. Pay a one-time fee of $49 USD on Gumroad for lifetime access, your License Key, and web app link (https://stockflow-pro.pages.dev/).',
    qsStep1Btn: 'Go to Gumroad to Get License ($49 USD) 🛒',

    qsStep2Num: '02',
    qsStep2Title: 'Click Buttons to Get API Key',
    qsStep2Desc: 'Click the official buttons below to request free API Keys (enjoy generous daily free quotas):',
    qsStep2NvidiaBtn: 'Get NVIDIA API Key (Free Recommended) ⚡',
    qsStep2GeminiBtn: 'Get Google Gemini API Key 🔑',

    qsStep3Num: '03',
    qsStep3Title: 'Enter Key & Instantly Launch',
    qsStep3Desc: 'Paste your API Key into "API Key Settings" in the app to instantly unlock automated 49-tag CSV generation!',
    qsStep3Btn: 'Configure Key in App 🚀',
    pricingTitle: 'Lifetime Access. Zero Monthly Fees.',
    pricingSubtitle: 'One-time payment for perpetual access to StockFlow AI with instant license key delivery.',
    pricingGuarantee: '30-Day Risk-Free Guarantee • Instant License Key Activation',
    pricingCtaGumroad: 'Buy StockFlow AI on Gumroad ➔',

    // FAQ Section
    faqBadge: 'GOT QUESTIONS?',
    faqHeaderBadge: 'FREQUENTLY ASKED QUESTIONS',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Everything you need to know about StockFlow AI, Gumroad licensing, API key setup, and Adobe Stock compatibility.',
    faq1Q: 'How does StockFlow AI guarantee 49 tags for Adobe Stock?',
    faq1A: 'Adobe Stock allows a maximum of 49 keywords per submission. StockFlow AI uses vision AI to identify the core subject, secondary context, commercial intent, and technical attributes, sorting them by commercial search weight to output exactly 49 IPTC tags formatted for instant CSV upload.',
    faq2Q: 'How does 1-click batch CSV export work for Adobe Stock & Shutterstock?',
    faq2A: 'In "Single Mode", users analyze assets one by one and manually copy titles, descriptions, and keywords. The 1-click CSV export is built specifically into "Batch Mode", where you can upload up to 40 images & videos at once. Once analyzed, download one unified 5-column CSV to instantly import metadata into Adobe Stock or Shutterstock!\n\n💡 Pro Tip: Try compressing or using smaller image/video files for AI analysis. Vision API billing is calculated based on payload file size, so smaller files save your API quota while keeping analysis accuracy 100% sharp!',
    faq3Q: 'Do I need to connect my own API key to use the software?',
    faq3A: 'Yes! StockFlow AI supports binding your own API key for maximum speed and zero recurring subscription fees. You can connect a 100% free NVIDIA API key (recommended default with zero costs) or a Gemini API key. The software prioritizes the free NVIDIA API to avoid any unexpected charges!',
    faq4Q: 'What is DeCode AI and how does visual reverse engineering work?',
    faq4A: 'DeCode AI analyzes top-selling stock photos or videos on Adobe Stock, Getty, or Freepik, breaking down the lighting, lens angle, subject details, and color palette into precise prompt formulas for Midjourney V6, Luma, and Flux.',
    faq5Q: 'How does PhotoCoach evaluate commercial quality and give reshoot advice?',
    faq5A: 'PhotoCoach checks contrast, sharpness, noise, background clutter, buyer copy space, and commercial demand. It gives a 0-100% score and highlights actionable improvements like "Add 20% copy space on left" or "Adjust fill lighting on subject face".',
    faq6Q: 'How do I activate StockFlow AI after buying on Gumroad?',
    faq6A: 'Once you purchase on Gumroad, you will receive an instant License Key in your order confirmation email. Enter your key inside StockFlow AI for lifetime access with no recurring subscription.',

    // Footer
    footerDesc: 'StockFlow AI is the premier AI copilot built for stock photographers, video creators, and AI digital artists.',
    footerCopyright: '© 2026 StockFlow AI. All rights reserved. Powered by NVIDIA & Gemini Vision AI.',
    footerDisclaimer: 'StockFlow AI is an independent software tool and is not affiliated with, endorsed by, or sponsored by Adobe, Shutterstock, Getty Images, or Midjourney.'
  },

  zh: {
    // Top Window Header & Nav
    hubTitle: 'StockFlow AI',
    hubSub: 'StockFlow AI V1.0',
    navModules: '四大核心模組',
    navStudio: '實機工作坊',
    navValue: '效益對比',
    navPricing: '軟體售價',
    navFAQ: '常見問題',
    navInstantFlow: '🎙️ InstantFlow 極速語音',
    ctaHeroBtn: '立即取得 StockFlow AI 獨立版',
    savedBookmarks: '已收藏',

    // Hero Section
    heroBadge: '★ 4.98 / 5.0 超高好評・超 3,800+ 位圖庫創作者一致推薦',
    heroTitle: 'StockFlow AI - 視覺解密・智慧打標・商業高排・極速獲利',
    heroSubtitle: '專為圖庫攝影師與 AI 數位創作者打造的全方位 AI 智慧助手。讓您的 Adobe Stock 與 Shutterstock 上傳效率直升 4 倍！',
    heroCtaPrimary: '立即購買 StockFlow AI 獨立版',
    heroCtaSecondary: '免費體驗線上 AI 工作坊',
    heroStat1Val: '4 倍+',
    heroStat1Lbl: '批次上傳極速提升',
    heroStat2Val: '49 個',
    heroStat2Lbl: '精準符合 Adobe Stock 上限標籤',
    heroStat3Val: '99.8%',
    heroStat3Lbl: '商業高排名權重',
    heroStat4Val: '3,800+',
    heroStat4Lbl: '全球活躍創作者使用',

    // 4 Core Software Modules Section
    modulesHeaderBadge: '4 大核心 AI 軟體模組',
    modulesTitle: '圖庫創作者的全能 AI 智慧工作流',
    modulesSubtitle: '內建四大專利級 AI 引擎，涵蓋提示詞反向拆解、批次詮釋資料生成、商業品質審查與全球市場趨勢雷達。',

    // Module 1: DeCode AI
    m1Name: 'DeCode AI',
    m1Title: '視覺反向工程解密引擎',
    m1Desc: '拖曳或上傳照片/影片，即刻拆解商業爆款提示詞，支援 Midjourney、Luma 與 Flow。',
    m1Bullet1: '反向拆解熱門 Top-Sale 圖庫照片為 Midjourney V6 與 Flux 精準提示詞',
    m1Bullet2: '解析影片鏡頭運鏡軌跡與光影參數，輸出 Luma Dream Machine 提示詞',
    m1Bullet3: '一鍵複製 Prompt，支援進階參數調校 (--ar, --v, --style)',

    // Module 2: StockSensei X
    m2Name: 'StockSensei X',
    m2Title: '批次詮釋資料與 CSV 自動化引擎',
    m2Desc: '一次拖曳高達 40 張作品，一鍵自動生成高權重 SEO 標題、說明描述與 49 個 IPTC 標籤並匯出 CSV。',
    m2Bullet1: '自動生成高搜尋權重之商業 SEO 標題 (Titles) 與詳細 Descriptions',
    m2Bullet2: '精準計算並生成符合上限之 49 個熱門 IPTC 關鍵字 (100% 符合規範)',
    m2Bullet3: '支援 1 鍵匯出標準 5 欄位相容 CSV (Filename, Title, Desc, Keywords, Category)',

    // Module 3: PhotoCoach
    m3Name: 'PhotoCoach',
    m3Title: '商業品質評分與補拍建議顧問',
    m3Desc: 'AI 商業賣相即時評分系統，針對光影、構圖留白與熱銷買家需求給予專業補拍建議。',
    m3Bullet1: '上傳前即時預測商業通過率與過審得分 (0-100% Score)',
    m3Bullet2: '精確檢測光影對比、主體清晰度與買家文字留白空間 (Copy Space)',
    m3Bullet3: '提供具體可執行的攝影棚與外景補拍修正指導，大幅提高下單轉換率',

    // Module 4: Trend Sniper
    m4Name: 'Trend Sniper',
    m4Title: '全球圖庫市場趨勢狙擊雷達',
    m4Desc: '即時掌握全球節慶、季節性熱門趨勢與高需求商業關鍵字，搶先同行提前佈局。',
    m4Bullet1: '提前 60 天預測全球節慶與季度熱銷視覺主題',
    m4Bullet2: '追蹤關鍵字搜尋增長指標 (+300% 爆款關鍵字)',
    m4Bullet3: '支援 1 鍵將熱門關鍵字包匯入至 StockSensei X 進行批量打標',

    // Interactive Live Workspace / Studio Demo
    studioHeaderBadge: '網頁實機 AI 工作坊',
    studioTitle: '免安裝登入，直接在瀏覽器免費測試四大模組',
    studioSubtitle: '無需設定 API Key，即刻體驗 StockFlow AI 的強大圖庫自動化威力。',
    tabDecode: '⚡ DeCode AI (提示詞拆解)',
    tabSensei: '🏷️ StockSensei X (49標籤與CSV)',
    tabCoach: '📸 PhotoCoach (評分與補拍)',
    tabSniper: '🎯 Trend Sniper (市場雷達)',

    // Live Studio Controls
    studioDragDropTitle: '拖曳或點擊上傳您的作品照片進行 AI 智慧分析',
    studioDragDropSub: '支援 JPG, PNG, WEBP, MP4 — 純前端極速視覺分析，免費測試',
    studioPresetLabel: '或選擇預設商業主題照片：',
    studioBtnRun: '執行 AI 模組智慧分析',
    studioBtnRunning: '正在 AI 分析作品中...',
    studioBtnReset: '重置作品',
    studioBtnCopyPrompt: '複製 AI 提示詞',
    studioBtnDownloadCSV: '下載 5 欄位 CSV 報表',
    studioCsvDone: '已成功匯出 5 欄位 CSV 報表！',

    // Comparison / Value Proposition
    valueBadge: '工作流效率對比',
    valueTitle: '為什麼全球圖庫創作者選擇 StockFlow AI',
    valueSubtitle: '省下 85% 耗費在手動打標、發想標題與重複上傳的時間。',
    valOldTitle: '傳統人工手動打標上傳',
    valOldTime: '每批需耗時 45-60 分鐘',
    valOld1: '逐張在 Adobe Stock / Shutterstock 搜尋研究熱門關鍵字',
    valOld2: '手動耗時撰寫標題、說明描述與湊滿 49 個標籤',
    valOld3: '複製貼上至各大圖庫平台欄位，耗時且容易生倦怠',
    valOld4: '無法預知圖片商業過審率，退件風險高',

    valNewTitle: 'StockFlow AI 智慧 Copilot 自動化',
    valNewTime: '每批僅需 2 分鐘 (效率提升 15x-30x)',
    valNew1: 'AI 視覺辨識即時自動產生符合極限之 49 個高權重標籤',
    valNew2: '1 鍵生成標準 5 欄位 CSV，各大圖庫直接批次匯入',
    valNew3: 'DeCode AI 精準拆解熱銷爆款靈感，創作不卡關',
    valNew4: 'PhotoCoach 事前評分，確保高商業通過率與高下單率',

    // Supported Platforms
    supportedBadge: '各大圖庫平台完美相容',
    supportedTitle: '產出報表可直攻全球主流圖庫平台批次上傳',

    // Dual-Engine Smart Scheduling Feature Block
    dualEngineBadge: '獨家雙引擎智慧調度系統',
    dualEngineTitle: '獨家雙引擎智慧調度，穩定度 99.9% 的量產神器',
    dualEngineSubtitle: '智能雙晶片架構 + 備援自動切換 + 動態防爆節流，打造 40 張大批量的極致穩定體驗。',
    dualEngineF1Title: '1. 預設 100% 免費模式 (Gemini 優先)',
    dualEngineF1Desc: '預設採用 Gemini 3.6 Flash，享 Google AI Studio 官方每日免費額度（API 請求上限最高 1,500 RPD）。由於 Vision 視覺分析會依照片解析度與檔案大小消耗圖片 Token，實際可分析張數視圖檔大小而定。建議搭配適度壓縮圖檔，即可大幅節省額度，輕鬆實現日常單張精修與批次分析零額外 API 費用！',
    dualEngineF1Tag: 'Google 官方免費額度',
    dualEngineF2Title: '2. 無縫 NVIDIA 備援與爆量保護',
    dualEngineF2Desc: '由於 Vision 圖片分析受限於官方 15 RPM（每分鐘請求數）與圖片 Token 消耗，當您進行 40 張大批量處理或觸發頻率上限時，系統會自動零秒無縫切換至 NVIDIA 備援引擎，確保素材 100% 順利產出不中斷。',
    dualEngineF2Tag: '0 秒無縫切換',
    dualEngineF3Title: '3. 動態防爆節流 (Dynamic Throttle Pacing)',
    dualEngineF3Desc: '內置 3.8 秒智慧間隔與自動冷卻重試機制，徹底揮別 API 卡死與報錯體驗。',
    dualEngineF3Tag: '3.8s 智慧防護',

    // Pricing & API Key Mode Explanation Block
    apiKeyModeBadge: '軟體定價與 API KEY 模式說明',
    apiKeyModeHeader: '軟體定價與 API Key 模式說明',
    apiKeyModeTitle: '自備 API Key，買斷價 $49 美金終身擁有',
    apiKeyModeDesc: '本軟體零月租訂閱費！一次性支付 $49 美金即可享有 StockFlow AI 終身永久使用權。我們採用「自備 API Key（支援免費 NVIDIA 與 Gemini）」的靈活模式，您只需一次付費，後續的 AI 分析算力費用直接由您與 API 供應商（如 NVIDIA/Google）結算，用多少付多少，免受平台溢價剝削！',
    apiKeyPoint1: '零月租訂閱費，一次付費 $49 美金終身享用',
    apiKeyPoint2: '算力直連 NVIDIA / Google，享原廠超低算力資費',
    apiKeyPoint3: '獨家私人 API Endpoint，資料隱私安全 100% 不外洩',

    // Featured FAQ Block
    featuredFaqBadge: '精選常見問答 (FAQ)',
    featuredFaqTitle: '精選常見問答 (FAQ)',
    faqQ1: '我可以在軟體中綁定哪些 API Key？',
    faqA1: '目前全面支援 NVIDIA API Key 與 Gemini API Key，皆可提供超高速的視覺解析體驗。',
    faqQ2: '批次量產 (Batch) 的 CSV 導出如何配合 Adobe Stock 與 Shutterstock 批次上傳？',
    faqA2: '「單張精修 (Single)」模式主要是單張進行 AI 分析並提供點擊複製標題與關鍵字；而 1 鍵導出 CSV 的功能屬於「批次量產 (Batch)」模式！您可以一次拖曳最多 40 個檔案（照片與影片皆可混合上傳），由 AI 批次分析完成後，即可直接下載標準 CSV 檔案，一次導入 Adobe Stock 或 Shutterstock 平台完成自動填單！\n\n💡【創作者 API 省錢極重要提醒】：由於 Vision AI API 的計費主要是根據上傳圖檔與影片的檔案大小計算，強烈建議您在上傳分析時儘量選擇較小尺寸或適度壓縮後的檔案，這樣能大幅省下您的 API 算力額度與費用，且完全不影響 AI 的判讀精準度！',

    // 3-Step Quick Start Guide
    quickStartBadge: '3 步快速引導教學',
    quickStartTitle: '3步快速引導教學 (Quick Start)',
    quickStartSubtitle: '簡單三步驟，快速完成軟體配置並開始 AI 智慧自動化上架',
    qsStep1Num: '01',
    qsStep1Title: '購買授權 ($49 美金)',
    qsStep1Desc: '免下載安裝！本軟體為純網頁版，至 Gumroad 完成 $49 美金一次性付費後，即可獲得終身專屬 License Key 與軟體網址（https://stockflow-pro.pages.dev/），直接在瀏覽器開啟使用。',
    qsStep1Btn: '前往 Gumroad 購買授權 ($49 美金) 🛒',

    qsStep2Num: '02',
    qsStep2Title: '點擊按鈕獲取 API Key',
    qsStep2Desc: '點擊下方按鈕前往官方 Portal 免費申領 API Key（享每日免費額度）：',
    qsStep2NvidiaBtn: '獲取 NVIDIA API Key (免費推薦) ⚡',
    qsStep2GeminiBtn: '獲取 Google Gemini API Key 🔑',

    qsStep3Num: '03',
    qsStep3Title: '填入軟體即刻啟動',
    qsStep3Desc: '將複製好的 Key 貼入軟體「API 密鑰設置」中，即刻解鎖全自動批次 AI 分析與 49 標籤產出！',
    qsStep3Btn: '開啓軟體密鑰設置 🚀',

    // Pricing Section
    pricingBadge: 'GUMROAD 獨立版限時優惠',
    pricingTitle: '買斷終身使用・零月費無訂閱負擔',
    pricingSubtitle: '一次性付費即可獲得 StockFlow AI 終身版與專屬 License Key，享未來免費更新。',
    pricingGuarantee: '30 天無風險退款保證 • 下單即時交付專屬 License Key',
    pricingCtaGumroad: '前往 Gumroad 購買 StockFlow AI 終身版 ➔',

    // FAQ Section
    faqBadge: '常見問題解答',
    faqHeaderBadge: '常見問題解答',
    faqTitle: '創作者熱門疑問解答',
    faqSubtitle: '了解 StockFlow AI 如何運作、Gumroad 序號啟用、API 密鑰設置與 49 個標籤相容性細節。',
    faq1Q: 'StockFlow AI 如何保證精準輸出 49 個標籤以符合 Adobe Stock 上限？',
    faq1A: 'Adobe Stock 單張作品最高僅允許 49 個關鍵字。StockFlow AI 透過 AI 視覺精準辨識主體、情境、商業意圖與技術屬性，並依據商業搜尋權重排序，精準輸出 49 個 IPTC 標籤，可直接填入 CSV 匯入檔。',
    faq2Q: '批次量產 (Batch) 的 CSV 報表如何配合 Adobe Stock 與 Shutterstock 批次上傳？',
    faq2A: '「單張精修 (Single)」模式主要是單張進行 AI 分析並提供點擊複製標題與關鍵字；而 1 鍵導出 CSV 的功能屬於「批次量產 (Batch)」模式！您可以一次拖曳最多 40 個檔案（照片與影片皆可混合上傳），由 AI 批次分析完成後，即可直接下載標準 CSV 檔案，一次導入 Adobe Stock 或 Shutterstock 平台完成自動填單！\n\n💡【創作者 API 省錢極重要提醒】：由於 Vision AI API 的計費主要是根據上傳圖檔與影片的檔案大小計算，強烈建議您在上傳分析時儘量選擇較小尺寸或適度壓縮後的檔案，這樣能大幅省下您的 API 算力額度與費用，且完全不影響 AI 的判讀精準度！',
    faq3Q: '使用本軟體時，是否需要綁定自己的 API Key？費用如何計算？',
    faq3A: '是的！StockFlow AI 支援綁定使用者自己的 API Key 以提供最高效能與零訂閱月費負擔。您可以綁定「免費的 NVIDIA API Key」（系統預設優先採用，無任何額外費用）或 Gemini API Key。軟體會 100% 優先採用 NVIDIA API 進行分析，徹底避免費用爭議！',
    faq4Q: 'DeCode AI 視覺反向工程是如何運作的？',
    faq4A: 'DeCode AI 能分析 Adobe Stock、Getty 或 Freepik 上的熱銷圖庫照片或影片，自動拆解其光影角度、鏡頭語言、主體細節與配色調性，轉換為 Midjourney V6、Luma 與 Flux 的精準 Prompt。',
    faq5Q: 'PhotoCoach 如何給予商業品質評分與補拍建議？',
    faq5A: 'PhotoCoach 會檢測照片的對比度、清晰度、背景雜訊、買家文字留白空間 (Copy Space) 與市場需求，給出 0-100% 的商業得分，並給出具體的攝影指導（例如：「建議左側增加 20% 留白」、「調整補光燈」）。',
    faq6Q: '在 Gumroad 購買後，要如何啟用軟體？',
    faq6A: '在 Gumroad 完成一次性付款後，您的確認郵件中將立即包含專屬 License Key。只需在 StockFlow AI 軟體中輸入 key 即可開啟終身版完整功能，享有未來免費更新。',

    // Footer
    footerDesc: 'StockFlow AI 專為圖庫攝影師、影片創作者與 AI 數位藝術家打造的終極 AI 智慧助手。',
    footerCopyright: '© 2026 StockFlow AI. 版權所有。由 NVIDIA & Gemini Vision AI 技術驅動。',
    footerDisclaimer: 'StockFlow AI 為獨立開發之自動化工具，與 Adobe Stock、Shutterstock、Getty Images 或 Midjourney 無官方隸屬關係。'
  },

  'zh-cn': {
    // Top Window Header & Nav
    hubTitle: 'StockFlow AI',
    hubSub: 'StockFlow AI V1.0',
    navModules: '四大核心模块',
    navStudio: '实机工作坊',
    navValue: '效益对比',
    navPricing: '软件售价',
    navFAQ: '常见问题',
    navInstantFlow: '🎙️ InstantFlow 极速语音',
    ctaHeroBtn: '立即获取 StockFlow AI 独立版',
    savedBookmarks: '已收藏',

    // Hero Section
    heroBadge: '★ 4.98 / 5.0 超高好评・超 3,800+ 位图库创作者一致推荐',
    heroTitle: 'StockFlow AI - 视觉解密・智慧打标・商业高排・极速获利',
    heroSubtitle: '专为图库摄影师与 AI 数字创作者打造的全方位 AI 智慧助手。让您的 Adobe Stock 与 Shutterstock 上传效率直升 4 倍！',
    heroCtaPrimary: '立即购买 StockFlow AI 独立版',
    heroCtaSecondary: '免费体验在线 AI 工作坊',
    heroStat1Val: '4 倍+',
    heroStat1Lbl: '批次上传极速提升',
    heroStat2Val: '49 个',
    heroStat2Lbl: '精准符合 Adobe Stock 上限标签',
    heroStat3Val: '99.8%',
    heroStat3Lbl: '商业高排名权重',
    heroStat4Val: '3,800+',
    heroStat4Lbl: '全球活跃创作者使用',

    // 4 Core Software Modules Section
    modulesHeaderBadge: '4 大核心 AI 软件模块',
    modulesTitle: '图库创作者的全能 AI 智慧工作流',
    modulesSubtitle: '内置四大专利级 AI 引擎，涵盖提示词反向拆解、批次诠释资料生成、商业品质审查与全球市场趋势雷达。',

    // Module 1: DeCode AI
    m1Name: 'DeCode AI',
    m1Title: '视觉反向工程解密引擎',
    m1Desc: '拖拽或上传照片/视频，即刻拆解商业爆款提示词，支持 Midjourney、Luma 与 Flow。',
    m1Bullet1: '反向拆解热门 Top-Sale 图库照片为 Midjourney V6 与 Flux 精准提示词',
    m1Bullet2: '解析视频镜头运镜轨迹与光影参数，输出 Luma Dream Machine 提示词',
    m1Bullet3: '一键复制 Prompt，支持进阶参数调校 (--ar, --v, --style)',

    // Module 2: StockSensei X
    m2Name: 'StockSensei X',
    m2Title: '批次诠释资料与 CSV 自动化引擎',
    m2Desc: '一次拖拽高达 40 张作品，一键自动生成高权重 SEO 标题、说明描述与 49 个 IPTC 标签并导出 CSV。',
    m2Bullet1: '自动生成高搜索权重之商业 SEO 标题 (Titles) 与详细 Descriptions',
    m2Bullet2: '精准计算并生成符合上限之 49 个热门 IPTC 关键字 (100% 符合规范)',
    m2Bullet3: '支持 1 键导出标准 5 栏位兼容 CSV (Filename, Title, Desc, Keywords, Category)',

    // Module 3: PhotoCoach
    m3Name: 'PhotoCoach',
    m3Title: '商业品质评分与补拍建议顾问',
    m3Desc: 'AI 商业卖相即时评分系统，针对光影、构图留白与热销买家需求给予专业补拍建议。',
    m3Bullet1: '上传前即时预测商业通过率与过审得分 (0-100% Score)',
    m3Bullet2: '精确检测光影对比、主体清晰度与买家文字留白空间 (Copy Space)',
    m3Bullet3: '提供具体可执行的摄影棚与外景补拍修正指导，大幅提高下单转换率',

    // Module 4: Trend Sniper
    m4Name: 'Trend Sniper',
    m4Title: '全球图库市场趋势狙击雷达',
    m4Desc: '即时掌握全球节庆、季节性热门趋势与高需求商业关键字，抢先同行提前布局。',
    m4Bullet1: '提前 60 天预测全球节庆与季度热销视觉主题',
    m4Bullet2: '追踪关键字搜索增长指标 (+300% 爆款关键字)',
    m4Bullet3: '支持 1 键将热门关键字包导入至 StockSensei X 进行批量打标',

    // Interactive Live Workspace / Studio Demo
    studioHeaderBadge: '网页实机 AI 工作坊',
    studioTitle: '免安装登录，直接在浏览器免费测试四大模块',
    studioSubtitle: '无需设定 API Key，即刻体验 StockFlow AI 的强大图库自动化威力。',
    tabDecode: '⚡ DeCode AI (提示词拆解)',
    tabSensei: '🏷️ StockSensei X (49标签与CSV)',
    tabCoach: '📸 PhotoCoach (评分与补拍)',
    tabSniper: '🎯 Trend Sniper (市场雷达)',

    // Live Studio Controls
    studioDragDropTitle: '拖拽或点击上传您的作品照片进行 AI 智慧分析',
    studioDragDropSub: '支持 JPG, PNG, WEBP, MP4 — 纯前端极速视觉分析，免费测试',
    studioPresetLabel: '或选择预设商业主题照片：',
    studioBtnRun: '执行 AI 模块智慧分析',
    studioBtnRunning: '正在 AI 分析作品中...',
    studioBtnReset: '重置作品',
    studioBtnCopyPrompt: '复制 AI 提示词',
    studioBtnDownloadCSV: '下载 5 栏位 CSV 报表',
    studioCsvDone: '已成功导出 5 栏位 CSV 报表！',

    // Comparison / Value Proposition
    valueBadge: '工作流效率对比',
    valueTitle: '为什么全球图库创作者选择 StockFlow AI',
    valueSubtitle: '省下 85% 耗费在手动打标、发想标题与重复上传的时间。',
    valOldTitle: '传统人工手动打标上传',
    valOldTime: '每批需耗时 45-60 分钟',
    valOld1: '逐张在 Adobe Stock / Shutterstock 搜索研究热门关键字',
    valOld2: '手动耗时撰写标题、说明描述与凑满 49 个标签',
    valOld3: '复制粘贴至各大图库平台栏位，耗时且容易生倦怠',
    valOld4: '无法预知图片商业过审率，退件风险高',

    valNewTitle: 'StockFlow AI 智慧 Copilot 自动化',
    valNewTime: '每批仅需 2 分钟 (效率提升 15x-30x)',
    valNew1: 'AI 视觉识别即时自动产生符合极限之 49 个高权重标签',
    valNew2: '1 键生成标准 5 栏位 CSV，各大图库直接批次导入',
    valNew3: 'DeCode AI 精准拆解热销爆款灵感，创作不卡关',
    valNew4: 'PhotoCoach 事前评分，确保高商业通过率与高下单率',

    // Supported Platforms
    supportedBadge: '各大图库平台完美兼容',
    supportedTitle: '产出报表可直攻全球主流图库平台批次上传',

    // Dual-Engine Smart Scheduling Feature Block
    dualEngineBadge: '独家双引擎智慧调度系统',
    dualEngineTitle: '独家双引擎智慧调度，稳定度 99.9% 的量产神器',
    dualEngineSubtitle: '智能双芯片架构 + 备援自动切换 + 动态防爆节流，打造 40 张大批量的极致稳定体验。',
    dualEngineF1Title: '1. 默认 100% 免费模式 (Gemini 优先)',
    dualEngineF1Desc: '默认采用 Gemini 3.6 Flash，享 Google AI Studio 官方每日免费额度（API 请求上限最高 1,500 RPD）。由于 Vision 视觉分析会依照片分辨率与文件大小消耗图片 Token，实际可分析张数视图档大小而定。建议搭配适度压缩图档，即可大幅节省额度，轻松实现日常单张精修与批次分析零额外 API 费用！',
    dualEngineF1Tag: 'Google 官方免费额度',
    dualEngineF2Title: '2. 无缝 NVIDIA 备援与爆量保护',
    dualEngineF2Desc: '由于 Vision 图片分析受限于官方 15 RPM（每分钟请求数）与图片 Token 消耗，当您进行 40 张大批量处理或触发频率上限时，系统会自动零秒无缝切换至 NVIDIA 备援引擎，确保素材 100% 顺利产出不中断。',
    dualEngineF2Tag: '0 秒无缝切换',
    dualEngineF3Title: '3. 动态防爆节流 (Dynamic Throttle Pacing)',
    dualEngineF3Desc: '内置 3.8 秒智慧间隔与自动冷却重试机制，彻底挥别 API 卡死与报错体验。',
    dualEngineF3Tag: '3.8s 智慧防护',

    // Pricing & API Key Mode Explanation Block
    apiKeyModeBadge: '软件定价与 API KEY 模式说明',
    apiKeyModeHeader: '软件定价与 API Key 模式说明',
    apiKeyModeTitle: '自备 API Key，买断价 $49 美金终身拥有',
    apiKeyModeDesc: '本软件零月租订阅费！一次性支付 $49 美金即可享有 StockFlow AI 终身永久使用权。我们采用“自备 API Key（支持免费 NVIDIA 与 Gemini）”的灵活模式，您只需一次付费，后续的 AI 分析算力费用直接由您与 API 供应商（如 NVIDIA/Google）结算，用多少付多少，免受平台溢价剥削！',
    apiKeyPoint1: '零月租订阅费，一次付费 $49 美金终身享用',
    apiKeyPoint2: '算力直连 NVIDIA / Google，享原厂超低算力资费',
    apiKeyPoint3: '独家私人 API Endpoint，数据隐私安全 100% 不外泄',

    // Featured FAQ Block
    featuredFaqBadge: '精选常见问答 (FAQ)',
    featuredFaqTitle: '精选常见问答 (FAQ)',
    faqQ1: '我可以在软件中绑定哪些 API Key？',
    faqA1: '目前全面支持 NVIDIA API Key 与 Gemini API Key，皆可提供超高速的视觉解析体验。',
    faqQ2: '批次量产 (Batch) 的 CSV 导出如何配合 Adobe Stock 与 Shutterstock 批次上传？',
    faqA2: '“单张精修 (Single)”模式主要是单张进行 AI 分析并提供点击复制标题与关键字；而 1 键导出 CSV 的功能属于“批次量产 (Batch)”模式！您可以一次拖拽最多 40 个文件（照片与视频皆可混合上传），由 AI 批次分析完成后，即可直接下载标准 CSV 文件，一次导入 Adobe Stock 或 Shutterstock 平台完成自动填单！\n\n💡【创作者 API 省钱极重要提醒】：由于 Vision AI API 的计费主要是根据上传图档与视频的文件大小计算，强烈建议您在上传分析时尽量选择较小尺寸或适度压缩后的文件，这样能大幅省下您的 API 算力额度与费用，且完全不影响 AI 的判读精准度！',

    // 3-Step Quick Start Guide
    quickStartBadge: '3 步快速引导教学',
    quickStartTitle: '3步快速引导教学 (Quick Start)',
    quickStartSubtitle: '简单三步骤，快速完成软件配置并开始 AI 智慧自动化上架',
    qsStep1Num: '01',
    qsStep1Title: '购买授权 ($49 美金)',
    qsStep1Desc: '免下载安装！本软件为纯网页版，至 Gumroad 完成 $49 美金一次性付费后，即可获得终身专属 License Key 与软件网址（https://stockflow-pro.pages.dev/），直接在浏览器开启使用。',
    qsStep1Btn: '前往 Gumroad 购买授权 ($49 美金) 🛒',

    qsStep2Num: '02',
    qsStep2Title: '点击按钮获取 API Key',
    qsStep2Desc: '点击下方按钮前往官方 Portal 免费申领 API Key（享每日免费额度）：',
    qsStep2NvidiaBtn: '获取 NVIDIA API Key (免费推荐) ⚡',
    qsStep2GeminiBtn: '获取 Google Gemini API Key 🔑',

    qsStep3Num: '03',
    qsStep3Title: '填入软件即刻启动',
    qsStep3Desc: '将复制好的 Key 粘贴入软件“API 密钥设置”中，即刻解锁全自动批次 AI 分析与 49 标签产出！',
    qsStep3Btn: '开启软件密钥设置 🚀',

    // Pricing Section
    pricingBadge: 'GUMROAD 独立版限时优惠',
    pricingTitle: '买断终身使用・零月费无订阅负担',
    pricingSubtitle: '一次性付费即可获得 StockFlow AI 终身版与专属 License Key，享未来免费更新。',
    pricingGuarantee: '30 天无风险退款保证 • 下单即时交付专属 License Key',
    pricingCtaGumroad: '前往 Gumroad 购买 StockFlow AI 终身版 ➔',

    // FAQ Section
    faqBadge: '常见问题解答',
    faqHeaderBadge: '常见问题解答',
    faqTitle: '创作者热门疑问解答',
    faqSubtitle: '了解 StockFlow AI 如何运作、Gumroad 序号启用、API 密钥设置与 49 个标签兼容性细节。',
    faq1Q: 'StockFlow AI 如何保证精准输出 49 个标签以符合 Adobe Stock 上限？',
    faq1A: 'Adobe Stock 单张作品最高仅允许 49 个关键字。StockFlow AI 通过 AI 视觉精准识别主体、情境、商业意向与技术属性，并依据商业搜索权重排序，精准输出 49 个 IPTC 标签，可直接填入 CSV 导入档。',
    faq2Q: '批次量产 (Batch) 的 CSV 报表如何配合 Adobe Stock 与 Shutterstock 批次上传？',
    faq2A: '“单张精修 (Single)”模式主要是单张进行 AI 分析并提供点击复制标题与关键字；而 1 键导出 CSV 的功能属于“批次量产 (Batch)”模式！您可以一次拖拽最多 40 个文件（照片与视频皆可混合上传），由 AI 批次分析完成后，即可直接下载标准 CSV 文件，一次导入 Adobe Stock 或 Shutterstock 平台完成自动填单！\n\n💡【创作者 API 省钱极重要提醒】：由于 Vision AI API 的计费主要是根据上传图档与视频的文件大小计算，强烈建议您在上传分析时尽量选择较小尺寸或适度压缩后的文件，这样能大幅省下您的 API 算力额度与费用，且完全不影响 AI 的判读精准度！',
    faq3Q: '使用本软件时，是否需要绑定自己的 API Key？费用如何计算？',
    faq3A: '是的！StockFlow AI 支持绑定用户自己的 API Key 以提供最高性能与零订阅月费负担。您可以绑定“免费的 NVIDIA API Key”（系统默认优先采用，无任何额外费用）或 Gemini API Key。软件会 100% 优先采用 NVIDIA API 进行分析，彻底避免费用争议！',
    faq4Q: 'DeCode AI 视觉反向工程是如何运作的？',
    faq4A: 'DeCode AI 能分析 Adobe Stock、Getty 或 Freepik 上的热销图库照片或视频，自动拆解其光影角度、镜头语言、主体细节与配色调性，转换为 Midjourney V6、Luma 与 Flux 的精准 Prompt。',
    faq5Q: 'PhotoCoach 如何给予商业品质评分与补拍建议？',
    faq5A: 'PhotoCoach 会检测照片的对比度、清晰度、背景杂讯、买家文字留白空间 (Copy Space) 与市场需求，给出 0-100% 的商业得分，并给出具体的摄影指导（例如：“建议左侧增加 20% 留白”、“调整补光灯”）。',
    faq6Q: '在 Gumroad 购买后，要如何启用软件？',
    faq6A: '在 Gumroad 完成一次性付款后，您的确认邮件中将立即包含专属 License Key。只需在 StockFlow AI 软件中输入 key 即可开启终身版完整功能，享有未来免费更新。',

    // Footer
    footerDesc: 'StockFlow AI 专为图库摄影师、视频创作者与 AI 数字艺术家打造的终极 AI 智慧助手。',
    footerCopyright: '© 2026 StockFlow AI。版权所有。由 NVIDIA & Gemini Vision AI 技术驱动。',
    footerDisclaimer: 'StockFlow AI 为独立开发之自动化工具，与 Adobe Stock、Shutterstock、Getty Images 或 Midjourney 无官方隶属关系。'
  }
};
