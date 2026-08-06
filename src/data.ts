import { CoreModule, PricingTier, TrendItem, FAQItem } from './types';

export const GUMROAD_BUY_URL = 'https://novaflowlabs.gumroad.com/l/stockflow-pro';

export const CORE_MODULES: CoreModule[] = [
  {
    id: 'decode-ai',
    name: 'DeCode AI',
    title: 'Visual Reverse Engineering Engine',
    subtitle: 'Upload images or videos to instantly extract high-commercial AI prompts',
    description: 'Deconstruct top-performing commercial stock photos and videos. Generate exact prompts optimized for Midjourney V6, Luma Dream Machine, and Flux.',
    iconName: 'Sparkles',
    badge: 'MODULE 01',
    features: [
      'Visual feature & lighting extraction',
      'Midjourney V6 & Flux prompt output',
      'Video camera motion prompt breakdown for Luma',
      'High-commercial stock concept replication'
    ],
    ctaText: 'Try DeCode AI Demo'
  },
  {
    id: 'stocksensei-x',
    name: 'StockSensei X',
    title: 'Batch Metadata & CSV Automation',
    subtitle: 'Drag-and-drop up to 40 files to generate SEO Titles & 49 IPTC keywords',
    description: 'Auto-generate high-converting SEO Titles, Descriptions, and exact 49 IPTC keywords per image. Export 1-click 5-column CSV files ready for instant Adobe Stock & Shutterstock upload.',
    iconName: 'FileSpreadsheet',
    badge: 'MODULE 02',
    features: [
      'Batch process up to 40 images simultaneously',
      'Exact 49 high-converting Adobe Stock tags',
      '5-Column CSV export (Filename, Title, Desc, Keywords, Category)',
      '100% compliant with Adobe Stock & Shutterstock guidelines'
    ],
    ctaText: 'Generate Batch CSV'
  },
  {
    id: 'photocoach',
    name: 'PhotoCoach',
    title: 'Shooting Guide & Quality Audit',
    subtitle: 'AI commercial scoring system with real-time feedback & reshoot advice',
    description: 'Get instant commercial viability scores (0-100%) before uploading. Receive granular feedback on lighting, composition, buyer copy space, and actionable reshoot guidelines.',
    iconName: 'Camera',
    badge: 'MODULE 03',
    features: [
      'Instant commercial acceptance score (0-100%)',
      'Lighting, focus, & color balance analysis',
      'Copy space & background versatility evaluation',
      'Actionable studio & field reshoot guidelines'
    ],
    ctaText: 'Evaluate Photo Score'
  },
  {
    id: 'trend-sniper',
    name: 'Trend Sniper',
    title: 'Global Market Intelligence',
    subtitle: 'Real-time insights into upcoming global holidays & high-demand trends',
    description: 'Stay ahead of the stock market. AI scans global search volumes to deliver upcoming seasonal trends, holiday themes, and high-demand commercial keywords to shoot before competitors.',
    iconName: 'TrendingUp',
    badge: 'MODULE 04',
    features: [
      'Seasonal trend forecasts (60 days in advance)',
      'Holiday & cultural event shooting calendars',
      'Search volume growth metrics (+300% keywords)',
      'Direct keyword export to StockSensei X'
    ],
    ctaText: 'Explore Market Trends'
  }
];

export const TREND_ITEMS: TrendItem[] = [
  {
    id: 'trend-1',
    title: 'Q3 E-Commerce & Logistics Automation',
    category: 'Commercial & Tech',
    growth: '+380% Search Volume',
    season: 'Upcoming Peak: Sep - Nov',
    keywords: ['logistics', 'delivery courier', 'cardboard box', 'fulfillment center', 'warehouse worker', 'package scanning', 'supply chain', 'smart automation'],
    demandScore: 98,
    description: 'High demand for authentic parcel delivery, smart warehouse robotics, and small business shipping interactions.',
    targetPlatforms: ['Adobe Stock', 'Shutterstock', 'Getty Images']
  },
  {
    id: 'trend-2',
    title: 'ESG Green Energy & Clean Tech Workspace',
    category: 'Business & Eco',
    growth: '+290% Search Volume',
    season: 'Year-Round High Demand',
    keywords: ['solar panels', 'clean energy', 'sustainable office', 'green tech', 'recycle concept', 'wind turbine', 'eco friendly product', 'carbon neutral'],
    demandScore: 95,
    description: 'Corporate buyers actively searching for sustainability concepts, solar installations, and eco-conscious office teams.',
    targetPlatforms: ['Adobe Stock', 'Freepik', 'Wirestock']
  },
  {
    id: 'trend-3',
    title: 'AI Human Collaboration & Remote Work',
    category: 'AI & Corporate',
    growth: '+420% Search Volume',
    season: 'Current Top Trend',
    keywords: ['ai workplace', 'future of work', 'digital nomad', 'collaborative team', 'data analytics', 'cybersecurity', 'smart home desk', 'edison bulb minimalism'],
    demandScore: 99,
    description: 'Modern hybrid office setups, minimalist creative desks, and humans working with AI dashboards.',
    targetPlatforms: ['Adobe Stock', 'Shutterstock', 'iStock']
  },
  {
    id: 'trend-4',
    title: 'Autumn Wellness, Mental Health & Cosy Lifestyle',
    category: 'Lifestyle & Healthcare',
    growth: '+240% Search Volume',
    season: 'Upcoming Peak: Oct - Dec',
    keywords: ['mindfulness', 'meditation', 'warm coffee mug', 'cozy home', 'mental wellness', 'autumn curtain sunlight', 'skincare serum', 'pastel interior'],
    demandScore: 92,
    description: 'Soft lighting, tranquil home interiors, warm pastel tones, and personal wellness product placement.',
    targetPlatforms: ['Adobe Stock', 'Getty Images', 'Wirestock']
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'creator-tier',
    title: 'Creator License',
    price: '$29',
    originalPrice: '$59',
    period: 'one-time payment',
    description: 'Perfect for individual stock photographers & digital artists starting out.',
    features: [
      'DeCode AI Visual Reverse Engineering',
      'StockSensei X Metadata & Title Generator',
      'Batch CSV Export (Up to 15 files/batch)',
      'Exact 49 Adobe Stock Tagging',
      'Lifetime Updates & Zero Monthly Fees',
      'Instant License Key via Gumroad'
    ],
    ctaText: 'Get Creator License',
    ctaUrl: GUMROAD_BUY_URL,
    isPopular: false
  },
  {
    id: 'pro-suite',
    title: 'Pro Lifetime Suite',
    price: '$49',
    originalPrice: '$99',
    period: 'one-time payment',
    badge: 'BEST VALUE - 50% OFF',
    description: 'The complete AI power suite for serious stock contributors & studio teams.',
    features: [
      'Everything in Creator License',
      'Full PhotoCoach Commercial Quality & Reshoot Advisor',
      'Trend Sniper Global Market Intelligence Radar',
      'Batch CSV Export (Up to 40 files/batch)',
      'Video Motion Prompt Decoding for Luma & Flow',
      'Priority Speed AI Processing (NVIDIA / Gemini)',
      'Commercial License for Studio Teams'
    ],
    ctaText: 'Get Pro Lifetime Suite',
    ctaUrl: GUMROAD_BUY_URL,
    isPopular: true
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does StockFlow AI guarantee 49 tags for Adobe Stock?',
    answer: 'Adobe Stock allows a maximum of 49 keywords per submission. StockFlow AI uses vision AI to identify the core subject, secondary context, commercial intent, and technical attributes, sorting them by commercial search weight to output exactly 49 IPTC tags formatted for instant CSV upload.'
  },
  {
    id: 'faq-2',
    question: 'How does the 1-click batch CSV export work with Adobe Stock & Shutterstock?',
    answer: 'StockSensei X outputs a standardized 5-column CSV (Filename, Title, Description, Keywords, Category). Simply upload your image files to Adobe Stock or Shutterstock, click "Upload CSV", and all titles, descriptions, and 49 tags populate automatically!'
  },
  {
    id: 'faq-3',
    question: 'What is DeCode AI and how does visual reverse engineering work?',
    answer: 'DeCode AI analyzes top-selling stock photos or videos on Adobe Stock, Getty, or Freepik, breaking down the lighting, lens angle, subject details, and color palette into precise prompt formulas for Midjourney V6, Luma, and Flux.'
  },
  {
    id: 'faq-4',
    question: 'How does PhotoCoach evaluate commercial quality and give reshoot advice?',
    answer: 'PhotoCoach checks contrast, sharpness, noise, background clutter, buyer copy space, and commercial demand. It gives a 0-100% score and highlights actionable improvements like "Add 20% copy space on left" or "Adjust fill lighting on subject face".'
  },
  {
    id: 'faq-5',
    question: 'How do I activate StockFlow AI after buying on Gumroad?',
    answer: 'Once you purchase on Gumroad, you will receive an instant License Key in your order confirmation email. Enter your key inside StockFlow AI for lifetime access with no recurring subscription.'
  },
  {
    id: 'faq-6',
    question: 'Is my photo data kept private and secure?',
    answer: 'Yes! Image processing occurs client-side and via secure encrypted AI calls. Your original photos and generated prompt recipes are never stored or trained on by external third parties.'
  }
];

export interface PresetSampleItem {
  id: string;
  name: string;
  title: string;
  categoryTag: string;
  badge: string;
  imageUrl?: string;
  // Module 1: DeCode AI
  aiStrategy: string;
  generalPrompt: string;
  mjPrompt: string;
  // Module 2: StockSensei X
  bestTitle: string;
  seoOption1: string;
  seoOption2: string;
  keywordsArray: string[];
  category: string;
  // Module 3: PhotoCoach (2 Parts: How to shoot + Quality critique)
  score: number;
  photoCoach: {
    // Part 1: 教導如何拍攝該照片 (Shooting Guide)
    shootingGuide: {
      equipment: string;
      lightingSetup: string;
      compositionTip: string;
      colorPalette: string;
    };
    // Part 2: 評價優缺點與改進指導 (Quality Critique & Reshoot)
    qualityCritique: {
      strengths: string;
      flawsAndWeaknesses: string;
      lightingScore: string;
      compositionScore: string;
      reshootAdvice: string;
    };
  };
}

export const PRESET_SHOWCASE_SAMPLES: PresetSampleItem[] = [
  {
    id: 'sample-lightbulb',
    name: 'Light_bulb_hovering_over_laptop.jpg',
    title: '💡 科技靈感燈泡與筆電',
    categoryTag: '科技與抽象 AI',
    badge: '熱門榜首 #01',
    imageUrl: '/samples/Light_bulb_hovering_over_laptop.jpg',
    aiStrategy: '這幅視覺作品融合了現代科技與抽象創意。畫面核心是一台打開的筆記型電腦，其上方懸浮著一顆發光的傳統燈泡，象徵著靈感 (Inspiration) 與創新 (Innovation) 的迸發。螢幕湧現數據網絡與幾何圖形，採用深冷藍與溫暖黃暈散景對比。',
    generalPrompt: 'A cinematic digital illustration of a glowing incandescent light bulb floating above an open laptop keyboard. Colorful digital icons, data streams, and a world map burst out from the screen. The background is a dark, moody blue space filled with vibrant orange and red bokeh light circles. Sharp focus on the bulb and laptop, wide-angle perspective, futuristic technology concept, high contrast, high resolution, 8k.',
    mjPrompt: 'A futuristic concept of digital innovation, an open laptop on a dark surface with a bright glowing light bulb floating above the keyboard, holographic icons of email, data, and eyes emerging from the screen, cosmic background with blue and orange bokeh effects, cinematic lighting, hyper-realistic, detailed textures, 8k, volumetric lighting --ar 16:9 --v 6.0',
    bestTitle: 'Digital Innovation and Tech Idea Concept with Glowing Bulb Floating Over Laptop',
    seoOption1: 'Futuristic Technology Innovation Illustration with Laptop and Light Bulb',
    seoOption2: 'Global Data Analytics and Artificial Intelligence Creative Idea Concept',
    keywordsArray: [
      'light bulb', 'laptop', 'idea', 'innovation', 'technology', 'digital', 'glowing', 'computer',
      'inspiration', 'future', 'data', 'analytics', 'network', 'cyber', 'concept', 'creative',
      'futuristic', 'abstract', 'holographic', 'icons', 'email', 'world map', 'bokeh', 'bokeh light',
      'keyboard', 'illustration', '3d', 'render', 'business', 'solution', 'intelligence', 'artificial',
      'ai', 'development', 'software', 'screen', 'communication', 'global', 'connectivity', 'bright',
      'contrast', 'blue', 'orange', 'modern', 'marketing', 'banner', 'background', 'high resolution'
    ],
    category: '4 (Technology)',
    score: 98,
    photoCoach: {
      shootingGuide: {
        equipment: '建議相機鏡頭：35mm 或 50mm f/1.8 大光圈定焦鏡，配合穩固三腳架。',
        lightingSetup: '主光源採 45 度側面暖光投射於主體，背景加設深藍色 LED 氛圍燈及大光圈散景星芒光斑。',
        compositionTip: '採用三分法將發光燈泡置於畫面黃金交叉點，筆電鍵盤形成自然的空間引導線。',
        colorPalette: '深琥珀橘 (Warm Amber) 與深海藍 (Deep Navy) 主副色彩對比組合。'
      },
      qualityCritique: {
        strengths: '光影對比度極佳，燈泡燈絲亮部細節保留完整，背景散景顆粒極具商業張力。',
        flawsAndWeaknesses: '筆電鍵盤邊緣若加強局部暗部層次，可減少光暈擴散干擾。',
        lightingScore: '98/100 • 暖色燈絲與深藍背景對比強烈。',
        compositionScore: '99/100 • 體積光效果顯著，主體引導極佳。',
        reshootAdvice: '商業需求極高，適合科技 AI、創業與大數據行銷主視覺。'
      }
    }
  },
  {
    id: 'sample-books-laptop',
    name: 'Isometric_books_on_laptop.jpg',
    title: '📚 數據科學與電子學習',
    categoryTag: '教育與大數據',
    badge: '熱銷爆款 #02',
    imageUrl: '/samples/Isometric_books_on_laptop.jpg',
    aiStrategy: '採用等角透視 (Isometric) 展現現代數據科學與數位學習概念。畫面以開展筆記型電腦為底座，上方疊放標註 DATA SCIENCE 與 CODE 的書籍，四周環繞霓虹 UI 圖表。',
    generalPrompt: 'An isometric 3D digital illustration of an open laptop keyboard with a neat stack of colorful textbooks on top labelled DATA SCIENCE, FUTURE LEARNING, and CODE. Floating neon glowing user interface analytics charts, line graphs, and data icons around the laptop. Dark cyan moody background with soft particle lights, futuristic e-learning concept, high resolution, 8k.',
    mjPrompt: 'Futuristic e-learning concept, isometric view of open laptop with stacked colorful books, neon glowing analytics dashboard, code and data science labels, dark teal background, volumetric lighting, high quality, 8k --ar 16:9 --v 6.0',
    bestTitle: 'Digital Education and Data Science Concept with Laptop and Stack of Books',
    seoOption1: 'E-learning and Data Science Education Concept with Laptop and Books',
    seoOption2: 'Futuristic Online Learning Illustration with Digital Data Analytics and Code Books',
    keywordsArray: [
      'online', 'education', 'data', 'science', 'learning', 'laptop', 'books', 'stack',
      'digital', 'coding', 'programming', 'technology', 'future', 'electronic', 'e-learning',
      'school', 'university', 'tutorial', 'internet', 'study', 'computer', 'academic',
      'course', 'information', 'analytics', 'software', 'development', 'knowledge',
      'library', 'platform', 'virtual', 'interactive', 'innovative', 'interface',
      'graphic', 'illustration', 'isometric', 'neon', 'glow', 'background',
      'professional', 'training', 'skill', 'career', 'intelligence', 'business', 'web', 'research', 'modern'
    ],
    category: '4 (Technology & Education)',
    score: 99,
    photoCoach: {
      shootingGuide: {
        equipment: '矢量繪圖軟體或 3D 渲染器（C4D / Blender / Octane Render）。',
        lightingSetup: '體積光與霓虹邊緣光（Neon Edge Glow），營造發光數位圖表質感。',
        compositionTip: '精確 45 度等角透視 (Isometric Grid)，保持圖形俐落對齊。',
        colorPalette: '暗青色 (Teal Navy) 搭配青綠色與粉紫自發光元件。'
      },
      qualityCritique: {
        strengths: '圖示與字樣清晰無誤，向量線條精準，留白區域適合文字排版。',
        flawsAndWeaknesses: '書本背面的陰影可略微加深以提升立體深度。',
        lightingScore: '99/100 • 高對比霓虹色調，向量與 3D 發光質感突出。',
        compositionScore: '98/100 • 結構完美平衡，角落留白充裕適合疊加文字。',
        reshootAdvice: '適合線上課程、大數據教學平台及商業圖庫熱門圖素材。'
      }
    }
  },
  {
    id: 'sample-courier',
    name: 'Handshake_between_businessmen.jpg',
    title: '📦 電商包裹物流交接',
    categoryTag: '物流與電商',
    badge: '高轉換率 #03',
    imageUrl: '/samples/Handshake_between_businessmen.jpg',
    aiStrategy: '電商與快遞物流高需求題材。主體明確，焦點集中於快遞員遞交包裹手勢，畫面明亮且專業。無品牌商標問題，通過商業圖庫高審查標準。',
    generalPrompt: 'Close-up shot of a courier in a blue shirt handing a brown cardboard package to a client in a modern office. Sharp focus on hands and package texture. Bright minimalist interior with green plants in soft background --v 6.0 --ar 3:2',
    mjPrompt: 'Medium shot tracking forward as a delivery courier hands a brown cardboard package to a smiling customer, natural office lighting, high contrast, 8k --v 6.0',
    bestTitle: 'Delivery Courier Handing Cardboard Box Package to Customer in Office',
    seoOption1: 'E-commerce Parcel Logistics Delivery Service Handover Close-up',
    seoOption2: 'Professional Small Business Shipping and Parcel Delivery Interaction',
    keywordsArray: [
      'delivery', 'courier', 'package', 'cardboard', 'box', 'handover', 'logistics', 'e-commerce',
      'shipping', 'service', 'office', 'customer', 'business', 'parcel', 'hand', 'transfer',
      'professional', 'retail', 'supply chain', 'fulfillment', 'express', 'mail', 'post',
      'receiving', 'client', 'worker', 'distribution', 'commercial', 'store', 'transportation',
      'order', 'purchase', 'container', 'box', 'worker', 'smiling', 'interior', 'indoor',
      'modern', 'authentic', 'occupational', 'job', 'activity', 'workflow', 'concept', 'trust'
    ],
    category: '3 (Business & Industry)',
    score: 99,
    photoCoach: {
      shootingGuide: {
        equipment: '全片幅單眼 + 85mm f/1.4 人像鏡頭，捕捉真實手部細節與景深。',
        lightingSetup: '高調柔和自然光，搭配柔光傘補足快遞員手部與紙箱紋理。',
        compositionTip: '特寫交接動作，紙箱置於中央三分線上，背景綠植溫暖虛化。',
        colorPalette: '牛皮紙原色 (Kraft Brown) 與快遞藍 (Courier Blue) 品牌色。'
      },
      qualityCritique: {
        strengths: '焦點精準停留在紙箱纖維與交接雙手，無任何潛在商標侵權風險。',
        flawsAndWeaknesses: '背景可稍微減少雜物，讓眼神更集中於物流交接動作。',
        lightingScore: '99/100 • 商業棚拍級均勻光影，無刺眼陰影線。',
        compositionScore: '98/100 • 包裹遞交手勢形成極佳的引導線。',
        reshootAdvice: '絕佳熱銷素材！請確保服裝及紙箱無任何商標外露即可直接上架。'
      }
    }
  },
  {
    id: 'sample-ai-robot',
    name: 'Cute_fluffy_brain_elves.jpg',
    title: '🤖 智慧醫療與 AI 機器人',
    categoryTag: 'AI 醫療科技',
    badge: '精選範例 #04',
    imageUrl: '/samples/Cute_fluffy_brain_elves.jpg',
    aiStrategy: '融合現代智慧醫療與人形 AI 機器人助手概念。醫師與光學半透明機器人共同研討 3D 全像人體器官掃描圖，象徵先進精準醫療與科技人文結合。',
    generalPrompt: 'A female doctor in a white coat consulting with a friendly humanoid medical AI robot looking at a floating blue holographic 3D brain scan in a high-tech modern hospital room, cinematic lighting, ultra-detailed, 8k.',
    mjPrompt: 'Futuristic medical technology, female doctor and sleek white AI robot examining floating blue hologram of brain scan, bright sterile hospital laboratory, volumetric sunlight, 8k, photorealistic --ar 16:9 --v 6.0',
    bestTitle: 'Female Doctor with AI Medical Robot Analyzing Holographic Brain Scan',
    seoOption1: 'Futuristic AI Healthcare Innovation with Doctor and Assistant Robot',
    seoOption2: 'High Tech Digital Medicine Concept with Holographic Brain Diagnostics',
    keywordsArray: [
      'doctor', 'medical', 'ai', 'robot', 'healthcare', 'hologram', 'brain', 'scan',
      'hospital', 'futuristic', 'technology', 'diagnostic', 'science', 'consultation', 'innovation', 'digital',
      'assistant', 'humanoid', 'laboratory', 'medicine', 'health', 'clinic', 'smart', 'intelligence',
      'artificial', 'research', 'patient', 'examination', 'professional', 'female', 'white coat', 'screen',
      '3d', 'holographic', 'data', 'biotechnology', 'cyborg', 'nanotechnology', 'modern', 'clean', 'bright',
      'stethoscope', 'interface', 'care', 'treatment', 'future', 'discovery', 'solution', 'precision'
    ],
    category: '7 (Healthcare & Science)',
    score: 97,
    photoCoach: {
      shootingGuide: {
        equipment: '50mm f/1.2 鏡頭，配合高階 3D 合成或預先繪製的全像投影片。',
        lightingSetup: '高潔淨無塵室冷白光 (5600K)，搭配全像投影處的藍綠色發光補光。',
        compositionTip: '醫師與機器人分置兩側形成對角平衡，全像光學掃描像置於中央。',
        colorPalette: '純潔白 (Clinic White) 與醫學藍 (Holo Cyan)。'
      },
      qualityCritique: {
        strengths: '呈現高品質未來科技感，光學投影細節真實自然。',
        flawsAndWeaknesses: '機器人材質金屬反光若再收斂 10%，畫面會更具親和力。',
        lightingScore: '97/100 • 潔淨醫學高調光影，搭配鮮明全像投影對比。',
        compositionScore: '96/100 • 醫護人員與 AI 助手互動良好。',
        reshootAdvice: '生醫科技與藥廠買家高度喜愛，商業吸引力極高。'
      }
    }
  },
  {
    id: 'sample-green-energy',
    name: 'Hands_arranging_wooden_gears.jpg',
    title: '🌱 永續綠能與太陽能電廠',
    categoryTag: 'ESG 綠能永續',
    badge: '高需求趨勢 #05',
    imageUrl: '/samples/Hands_arranging_wooden_gears.jpg',
    aiStrategy: '年度搜尋暴增 +290% 的 ESG 永續環保題材。夕陽黃金時刻照射廣袤的太陽能板矩陣，工程師手持平板記錄數據，主題宏大且商業渲染力強。',
    generalPrompt: 'A female clean energy engineer holding a digital tablet inspecting vast solar panel field array during golden hour sunset, dramatic warm sunlight flare, wind turbines in background, high contrast, wide-angle cinematic shot.',
    mjPrompt: 'ESG clean energy engineer inspecting solar panels at sunset, wind turbines in distance, golden hour warm lighting, high detailed photorealism, commercial stock photography style --ar 16:9 --v 6.0',
    bestTitle: 'Solar Panel Array Farm Inspection by Renewable Energy Female Engineer at Sunset',
    seoOption1: 'ESG Clean Sustainable Solar Energy Farm and Green Technology Concept',
    seoOption2: 'Renewable Power Infrastructure Inspection with Solar Panels and Wind Turbines',
    keywordsArray: [
      'solar panels', 'renewable energy', 'engineer', 'clean energy', 'sunset', 'golden hour', 'green technology', 'esg',
      'sustainability', 'solar power', 'wind turbines', 'farm', 'field', 'inspection', 'tablet', 'female',
      'photovoltaic', 'eco friendly', 'carbon neutral', 'climate change', 'environment', 'electric', 'grid', 'future',
      'alternative', 'power plant', 'generation', 'sustainable', 'industry', 'worker', 'professional', 'sky', 'clouds',
      'sun flare', 'technology', 'infrastructure', 'energy transition', 'green economy', 'conservation', 'resources', 'innovation',
      'outdoors', 'modern', 'efficiency', 'smart grid', 'development', 'ecology', 'nature'
    ],
    category: '3 (Business & Industry)',
    score: 98,
    photoCoach: {
      shootingGuide: {
        equipment: '24mm 超廣角鏡頭，低角度俯仰拍攝，突出太陽能陣列的大氣景深。',
        lightingSetup: '利用日落黃金時刻 (Golden Hour) 逆光透射，形成暖金光暈與太陽能板鏡面反射。',
        compositionTip: '透過太陽能板排列的消失點幾何線條引導觀眾視覺至工程師主體。',
        colorPalette: '暖黃金與太陽能晶片深藍對比色。'
      },
      qualityCritique: {
        strengths: '日落光暈非常迷人，展現強烈情緒溫暖感與企業責任氣勢。',
        flawsAndWeaknesses: '工作安全帽上請確保無任何工程公司品牌標誌。',
        lightingScore: '98/100 • 黃金時刻逆光效果戲劇感十足。',
        compositionScore: '97/100 • 太陽能板幾何消失線延伸良好。',
        reshootAdvice: '企業 ESG 報告必備高頻下載素材，前景可預留標題排版空間。'
      }
    }
  },
  {
    id: 'sample-business-meeting',
    name: 'Detailer_polishing_red_car_hood.jpg',
    title: '💼 跨國企業戰略簡報',
    categoryTag: '商業與團隊',
    badge: '經典必備 #06',
    imageUrl: '/samples/Detailer_polishing_red_car_hood.jpg',
    aiStrategy: '多元族群現代商務團隊圍繞木質會議桌專注研討大數據分析圖表。自然採光透入高層玻璃辦公室，呈現信任、專業與高生產力視覺。',
    generalPrompt: 'Diverse team of young corporate executives in modern glass office collaborating over laptop analytics screen, smiling authentic interaction, soft natural window light, depth of field.',
    mjPrompt: 'Authentic modern business team meeting in sunlit open plan office, diverse corporate group discussing strategy, soft warm interior lighting, high resolution stock photo --ar 16:9 --v 6.0',
    bestTitle: 'Diverse Business Team Collaborating in Sunlit Modern Conference Office Room',
    seoOption1: 'Corporate Strategy Discussion and Data Analytics Meeting with Executive Team',
    seoOption2: 'Professional Office Collaboration and Tech Startup Brainstorming Session',
    keywordsArray: [
      'business', 'team', 'meeting', 'collaboration', 'office', 'diverse', 'corporate', 'executives',
      'laptop', 'strategy', 'analytics', 'discussion', 'professional', 'group', 'startup', 'colleagues',
      'brainstorming', 'working', 'communication', 'glass office', 'modern', 'interior', 'conference', 'partnership',
      'success', 'people', 'young', 'multicultural', 'career', 'employment', 'management', 'planning', 'data',
      'technology', 'growth', 'finance', 'consulting', 'interaction', 'cooperation', 'workplace', 'company', 'leader',
      'presentation', 'dashboard', 'desk', 'smiling', 'authentic', 'commercial'
    ],
    category: '3 (Business)',
    score: 96,
    photoCoach: {
      shootingGuide: {
        equipment: '50mm f/1.4 鏡頭，捕捉團隊眼神互動與自然專注表情。',
        lightingSetup: '高樓落地窗自然大側光為主，搭配室內溫暖平衝 Fill Light。',
        compositionTip: '中景環形構圖，以筆電數據螢幕為對焦重點，背景人物維持淺景深。',
        colorPalette: '商務灰藍與原木暖黃。'
      },
      qualityCritique: {
        strengths: '多元族群面貌真實自然，無擺拍僵硬感，商業吸引力十足。',
        flawsAndWeaknesses: '筆電螢幕上的圖表可替換為更高對比的商業 UI 畫面。',
        lightingScore: '96/100 • 柔和窗光呈現健康自然膚色。',
        compositionScore: '95/100 • 團隊層次豐富，焦點明確。',
        reshootAdvice: '畫面左上角留白區域適合廣告文案寫作，商業價值高。'
      }
    }
  },
  {
    id: 'sample-gourmet-coffee',
    name: 'Hands_typing_on_silver_laptop.jpg',
    title: '☕ 精品咖啡手沖與生活美學',
    categoryTag: '美食與飲食',
    badge: '美學特選 #07',
    imageUrl: '/samples/Hands_typing_on_silver_laptop.jpg',
    aiStrategy: '暗調沉穩質感咖啡視覺。熱水由細口壺淋入咖啡濾紙，水氣與咖啡香氣蒸騰而上，搭配磨豆機與復古木桌，呈現高質感咖啡館風格。',
    generalPrompt: 'Macro shot of barista hand pouring hot water from a gooseneck kettle onto ground coffee in a glass dripper, steam rising, warm dark rustic wooden coffee shop table background, cinematic moody lighting, sharp detail.',
    mjPrompt: 'Moody dark food photography of artisanal pour over coffee drip, steam rising from fresh brew, warm directional sunlight, gooseneck kettle, high contrast, 8k, detailed texture --ar 3:2 --v 6.0',
    bestTitle: 'Barista Hand Pouring Hot Water with Gooseneck Kettle for Pour Over Coffee Brew',
    seoOption1: 'Artisanal Coffee Shop Barista Brew Process with Steam Drip Glass Filter',
    seoOption2: 'Dark Rustic Moody Food Photography of Fresh Coffee Bean Brewing',
    keywordsArray: [
      'coffee', 'pour over', 'barista', 'brew', 'kettle', 'steam', 'drip', 'filter',
      'hot', 'beverage', 'cafe', 'coffee shop', 'rustic', 'wooden table', 'dark moody', 'macro',
      'artisan', 'specialty coffee', 'handcraft', 'aroma', 'morning', 'drink', 'fresh', 'beans',
      'preparation', 'glass dripper', 'gooseneck', 'water', 'pour', 'lifestyle', 'gourmet', 'relax',
      'cozy', 'warm lighting', 'detail', 'texture', 'espresso', 'roast', 'caffeine', 'food photography',
      'break', 'refreshment', 'minimalist', 'aesthetic', 'hospitality', 'restaurant', 'table'
    ],
    category: '6 (Food & Drink)',
    score: 98,
    photoCoach: {
      shootingGuide: {
        equipment: '100mm f/2.8 Macro 微距鏡頭，高速度快門 (1/500s) 凝結水滴細節。',
        lightingSetup: '單一硬質輪廓光 (Rim Light) 從背側 45 度打入，精確突出蒸氣與水流細節。',
        compositionTip: '微距特寫濾杯水流噴濺點，背景深色木質進行暗角處理。',
        colorPalette: '深濃縮咖啡棕與黑木暗調。'
      },
      qualityCritique: {
        strengths: '背光精確將熱氣蒸氣顆粒輪廓勾勒得極其生動誘人。',
        flawsAndWeaknesses: '壺嘴邊緣若能增加少許金屬反光，細節會更加精緻。',
        lightingScore: '98/100 • 輪廓光極佳地勾勒出蒸氣與水滴微觀細節。',
        compositionScore: '97/100 • 精準微距對焦營造高雅咖啡美學。',
        reshootAdvice: '社群媒體、精品咖啡雜誌與餐飲品牌極愛之圖片類型。'
      }
    }
  },
  {
    id: 'sample-fitness-smartwatch',
    name: 'Dome_security_camera.jpg',
    title: '🏃 智慧手錶與運動健康',
    categoryTag: '運動與健康',
    badge: '運動爆款 #08',
    imageUrl: '/samples/Dome_security_camera.jpg',
    aiStrategy: '戶外晨跑運動員抬起手腕檢視智慧手錶心率與跑步里程，背景晨曦光暈點綴，汗水與專注眼神傳遞出堅持與健康生活方式。',
    generalPrompt: 'Close-up on athlete arm wearing modern smartwatch checking heart rate metric during morning outdoor jog, golden sunrise glow, sweat drops on skin, energetic atmosphere, high speed shutter.',
    mjPrompt: 'Action commercial stock photo of marathon runner checking digital smartwatch metrics at sunrise, athletic gear, sweat drops, warm dramatic lens flare, 8k resolution --ar 16:9 --v 6.0',
    bestTitle: 'Athlete Runner Checking Heart Rate Smartwatch Metric During Sunrise Jog',
    seoOption1: 'Smart Watch Fitness Tracking Concept with Outdoor Sports Runner',
    seoOption2: 'Wearable Technology Health Analytics and Cardio Workout Session',
    keywordsArray: [
      'smartwatch', 'athlete', 'runner', 'jogging', 'fitness', 'health', 'heart rate', 'metrics',
      'wearable', 'technology', 'workout', 'cardio', 'sunrise', 'morning', 'outdoor', 'sports',
      'exercise', 'training', 'marathon', 'active', 'lifestyle', 'wrist', 'device', 'app',
      'tracker', 'performance', 'sweat', 'energy', 'vitality', 'wellness', 'man', 'woman',
      'stamina', 'motivation', 'gear', 'wearable tech', 'digital', 'screen', 'pulse', 'distance',
      'calorie', 'step counter', 'fit', 'body', 'healthy', 'recreation', 'coastal path'
    ],
    category: '10 (Sports & Health)',
    score: 97,
    photoCoach: {
      shootingGuide: {
        equipment: '70-200mm f/2.8 望遠鏡頭，高速連拍壓縮日出背景。',
        lightingSetup: '利用晨光 Sunrise 逆光形成肌膚汗水高光亮斑，手錶螢幕使用補光板防發黑。',
        compositionTip: '手臂抬起形成斜向對角動態線，手錶介面佔據黃金交叉點。',
        colorPalette: '晨曦暖橘與活力黑矽膠。'
      },
      qualityCritique: {
        strengths: '汗水顆粒與晨光高光立體感十足，充滿體能挑戰衝勁。',
        flawsAndWeaknesses: '請檢查手錶顯示螢幕圖案是否涉及專利介面侵權。',
        lightingScore: '97/100 • 晨光逆光亮點刻畫肌理與汗水細緻。',
        compositionScore: '96/100 • 動態斜線構圖傳遞出節奏感與速度。',
        reshootAdvice: '穿戴式裝置與健康 App 商業廣告最熱門素材。'
      }
    }
  },
  {
    id: 'sample-3d-finance-dashboard',
    name: 'Mooncakes.jpg',
    title: '📊 3D 立體金融與數位貨幣',
    categoryTag: '金融與 3D 插畫',
    badge: '高單價 #09',
    imageUrl: '/samples/Mooncakes.jpg',
    aiStrategy: '3D 立體透視 (Isometric) 金融分析與數位貨幣金幣上升圖表。極具科技感的藍金漸層，適合銀行、Fintech 廣告與加密貨幣投資平台。',
    generalPrompt: 'Isometric 3D render of financial analytics growth chart with floating gold coins, digital bank cards, and glowing bar graphs on dark blue glossy surface, clean lighting, high detail.',
    mjPrompt: '3D isometric fintech dashboard, gold coins rising, financial stock market growth graph, neon blue technology background, Octane render style, highly detailed 8k --ar 16:9 --v 6.0',
    bestTitle: 'Isometric 3D Fintech Analytics Dashboard with Gold Coins and Growth Bar Chart',
    seoOption1: 'Digital Banking and Financial Stock Market Investment Growth Concept',
    seoOption2: 'Cryptocurrency Trading Platform 3D Graphic with Analytics Dashboard',
    keywordsArray: [
      'fintech', 'finance', '3d', 'isometric', 'dashboard', 'analytics', 'growth', 'chart',
      'gold coins', 'cryptocurrency', 'bitcoin', 'investment', 'stock market', 'banking', 'digital',
      'money', 'wealth', 'profit', 'trading', 'economy', 'business', 'technology', 'graph',
      'revenue', 'currency', 'success', 'future', 'crypto', 'blockchain', 'capital', 'exchange',
      'commercial', 'illustration', 'render', 'octane', 'glossy', 'blue', 'gold', 'financial',
      'management', 'market', 'payment', 'credit card', 'app', 'ui', 'concept', 'innovation'
    ],
    category: '3 (Finance & Tech)',
    score: 99,
    photoCoach: {
      shootingGuide: {
        equipment: 'Octane / Redshift 3D 光線追蹤渲染器（非實拍相機）。',
        lightingSetup: '高質感金屬反射物理材質，雙向藍金漸層主控燈光。',
        compositionTip: '標準 3D 等角投影格線，金幣與上升柱狀圖呈現由左至右遞增。',
        colorPalette: '皇室精緻藍 (Royal Blue) 與 24K 閃耀金 (24K Gold)。'
      },
      qualityCritique: {
        strengths: '光線追蹤金屬材質極致擬真，柱狀圖高升意象極具說服力。',
        flawsAndWeaknesses: '背景暗部可加入微弱的網絡點線粒子以增強科技氛圍。',
        lightingScore: '99/100 • 物理反射極致完美，極富商業奢華質感。',
        compositionScore: '98/100 • 經典金融增長透視，深受企業買家青睞。',
        reshootAdvice: '全球金融 SaaS、銀行廣告與加密貨幣平台高單價熱銷款。'
      }
    }
  },
  {
    id: 'sample-minimal-interior',
    name: 'minimalist_nordic_workspace.jpg',
    title: '🏡 極簡木質居家與遠距工作',
    categoryTag: '生活風格與室內',
    badge: '溫暖質感 #10',
    imageUrl: '/samples/minimalist_nordic_workspace.jpg',
    aiStrategy: '北歐極簡質感 Home Office 工作區。溫暖晨光透過薄紗窗簾灑在木質桌面上，桌上擺放著 MacBook、綠色多肉植物與陶瓷咖啡杯，呈現安寧專注的質感生活。',
    generalPrompt: 'Nordic minimalist home office workspace with wooden desk, laptop, ceramic mug, and green succulent plant in warm morning sunlight through sheer curtains, clean cozy indoor interior photography.',
    mjPrompt: 'Minimalist Scandinavian home office desk, warm morning sunlight casting sheer curtain shadows, laptop, coffee cup, indoor potted plant, soft beige wall, editorial style stock photo --ar 16:9 --v 6.0',
    bestTitle: 'Minimalist Nordic Home Office Workspace with Wooden Desk and Laptop in Sunlit Room',
    seoOption1: 'Cozy Remote Work Home Desk Setup with Soft Morning Sunlight',
    seoOption2: 'Scandinavian Interior Design Workspace with Laptop and Potted Plant',
    keywordsArray: [
      'home office', 'workspace', 'minimalist', 'nordic', 'scandinavian', 'desk', 'laptop', 'wooden',
      'sunlight', 'morning', 'curtain', 'shadow', 'plant', 'succulent', 'ceramic mug', 'coffee',
      'cozy', 'interior', 'remote work', 'freelancer', 'lifestyle', 'peaceful', 'clean', 'simple',
      'design', 'home', 'working', 'aesthetic', 'beige', 'neutral tones', 'soft lighting', 'indoor',
      'quiet', 'focus', 'creativity', 'study', 'stationery', 'notebook', 'modern', 'calm',
      'warmth', 'atmosphere', 'comfort', 'decor', 'architecture', 'room', 'table'
    ],
    category: '2 (Buildings & Interiors)',
    score: 97,
    photoCoach: {
      shootingGuide: {
        equipment: '35mm 廣角鏡頭，俯拍或平拍捕捉整體空間靜謐感。',
        lightingSetup: '天然陽光穿過百葉窗或薄紗窗簾，於木質桌面投射幾何光影條紋。',
        compositionTip: '極簡留白，主體 MacBook 與咖啡杯適度置於畫面右下方。',
        colorPalette: '大地暖米色 (Warm Beige) 與原木天然紋理。'
      },
      qualityCritique: {
        strengths: '窗簾幾何陰影增添強烈藝術質感，畫面清新寧靜。',
        flawsAndWeaknesses: '筆電上蓋的品牌 Logo 必須透過修圖徹底撫平抹除。',
        lightingScore: '97/100 • 柔和漫射自然日光，勾勒優雅質感生活。',
        compositionScore: '98/100 • 頂部與周圍留白充裕，非常適合雜誌刊頭排版。',
        reshootAdvice: '遠距工作、個人部落格與質感生活用品買家必備款。'
      }
    }
  }
];

// Module 4: AI 智慧策略大腦 (全球市場情報)
export interface MarketTrendCategory {
  id: string;
  title: string;
  subtitle: string;
}

export interface SeasonalKeyword {
  word: string;
}

export interface MasterHolidayItem {
  id: string;
  fixedMonth: number; // 1 - 12
  fixedDay: number;   // 1 - 31
  nameZh: string;
  nameEn: string;
  keywords: string[];
}

export interface HolidayItem {
  id: string;
  nameZh: string;
  nameEn: string;
  keywords: string[];
  monthDayStr?: string;
}

export interface StrategyBrainDataset {
  source: string;
  trendingThemes: {
    id: string;
    title: string;
    description: string;
  }[];
  seasonalKeywords: string[];
  expertAdvice: string;
}

// Adobe Stock & Shutterstock Trend Insight Data Pools
export const AI_STRATEGY_TREND_POOLS: StrategyBrainDataset[] = [
  {
    source: 'Adobe Stock 2026 Q3 商業視覺熱搜趨勢',
    trendingThemes: [
      {
        id: 'theme-a1',
        title: '永續綠能與零廢棄生活',
        description: '環保包裝、零廢棄與綠色能源（太陽能/風力）的視覺呈現。'
      },
      {
        id: 'theme-a2',
        title: '生成式 AI 工作流',
        description: '創意人士使用 AI 工具進行設計、程式碼與協作的科技場景。'
      },
      {
        id: 'theme-a3',
        title: '心理健康與正念福祉',
        description: '冥想、正念、居家平靜環境與暖陽身心靈影像。'
      }
    ],
    seasonalKeywords: [
      'Generative AI',
      'Sustainability',
      'Wellness',
      'Authentic Life',
      'Diversity',
      'Eco-friendly',
      'Smart Tech',
      'Hybrid Work',
      'Minimalism',
      'Vibrant Natural Light'
    ],
    expertAdvice: 'Adobe Stock 最新數據顯示：企業對「真實人物運用 AI 輔助工作」與「永續減碳包裝」需求較去年同期大漲 140%，投稿請著重自然光感與多樣性面孔。'
  },
  {
    source: 'Shutterstock 2026 全球高搜尋量關鍵字榜',
    trendingThemes: [
      {
        id: 'theme-s1',
        title: '高齡科技與智慧銀髮健康',
        description: '樂齡族群使用智慧穿戴裝置、健康管理與活力退休生活的溫馨紀錄。'
      },
      {
        id: 'theme-s2',
        title: '極簡商務與遠距混合辦公',
        description: '現代化咖啡館、風格居家工作室與無紙化高效辦公空間。'
      },
      {
        id: 'theme-s3',
        title: '在地文化傳統與現代創新',
        description: '將傳統節慶元素（如茶藝、手作）融合現代視覺美學的質感攝影。'
      }
    ],
    seasonalKeywords: [
      'Silver Economy',
      'Smart Healthcare',
      'Modern Workspace',
      'Remote Freedom',
      'Cultural Fusion',
      'Clean Aesthetics',
      'High Tech',
      'Gen Z Lifestyle',
      'Active Senior',
      'Cozy Ambience'
    ],
    expertAdvice: 'Shutterstock 買家目前極需「銀髮族活潑科技生活」與「混合辦公質感空間」，上傳時請保留頂部或側邊留白 (Negative Space)，方便設計師加字。'
  },
  {
    source: 'Getty Images 2026 亞洲與全球企業行銷熱點',
    trendingThemes: [
      {
        id: 'theme-g1',
        title: '綠色供應鏈與 ESG 企業責任',
        description: '工廠綠能轉型、碳中和認證與企業永續發展的宏觀商業攝影。'
      },
      {
        id: 'theme-g2',
        title: '微型創業與個人品牌時代',
        description: '創作者經濟、手作工坊、podcast 錄音室與風格小店的職人紀錄。'
      },
      {
        id: 'theme-g3',
        title: '沉浸式虛擬娛樂與 Web3 體驗',
        description: 'AR/VR 科技體驗、電競比賽與數位孿生技術的酷炫未來感燈光。'
      }
    ],
    seasonalKeywords: [
      'ESG Carbon Neutral',
      'Creator Economy',
      'Artisan Workshop',
      'AR VR Tech',
      'Cyberpunk Lighting',
      'Micro Entrepreneur',
      'Sustainable Industry',
      'Digital Nomad',
      'Gen AI Design',
      'Futuristic City'
    ],
    expertAdvice: 'Getty Images 商業報告指出：ESG 企業形象與個人品牌職人攝影在亞洲地區下載量極高，建議畫面著重細節特寫與柔和情緒燈光。'
  },
  {
    source: 'Freepik & Microstock 2026 電商熱搜焦點',
    trendingThemes: [
      {
        id: 'theme-f1',
        title: '質感 3D 擬真元素與立體展示台',
        description: '適用於電商包裝設計、3D 產品渲染與時尚美妝展台背景。'
      },
      {
        id: 'theme-f2',
        title: '極致有機自然與純素飲食',
        description: '有機農場、原型食物、純素美妝與純淨天然成分特寫質感。'
      },
      {
        id: 'theme-f3',
        title: '微旅行與露營野奢風潮',
        description: '高質感豪華露營 (Glamping)、戶外咖啡、車泊生活與大自然探索。'
      }
    ],
    seasonalKeywords: [
      '3D Product Podiums',
      'Organic Vegan',
      'Clean Beauty',
      'Glamping Lifestyle',
      'Outdoor Exploration',
      'E-commerce Banner',
      'Natural Texture',
      'Pastel Aesthetic',
      'Nordic Interior',
      'Healthy Food'
    ],
    expertAdvice: 'Freepik 圖庫數據指出：為電商廣告預留構圖留白 (Negative Space) 的 3D 展台與露營野營主題下載量極高，標籤請務必加入繁體與英文雙語標籤。'
  },
  {
    source: 'Adobe Stock 節慶預熱與第四季商業預測',
    trendingThemes: [
      {
        id: 'theme-q4-1',
        title: '跨文化家庭聚會與溫馨節慶',
        description: '跨國家庭、暖色調居家晚餐、溫馨燈光與歡慶時刻的親密紀錄。'
      },
      {
        id: 'theme-q4-2',
        title: '智慧城市與自動化物流電商',
        description: '智慧快遞、無人機送貨、物流倉儲自動化與電子商務繁忙季節。'
      },
      {
        id: 'theme-q4-3',
        title: '秋冬溫暖美學與質感生活',
        description: '羊毛衫、熱飲咖啡、金色落葉與舒適居家閱讀氛圍。'
      }
    ],
    seasonalKeywords: [
      'Festive Celebration',
      'Warm Family Gathering',
      'Smart Logistics',
      'E-commerce Delivery',
      'Cozy Autumn',
      'Warm Lighting',
      'Holiday Season',
      'Winter Hygge',
      'Golden Glow',
      'Retail Peak'
    ],
    expertAdvice: '第四季節慶與電商大促前的 2-3 個月是買家下單高峰期！請提早 60 天完成萬聖節、雙11、黑色星期五與聖誕節素材的審核上架。'
  }
];

// Master List of Global Holidays (Fixed or approximate Month & Day)
export const MASTER_GLOBAL_HOLIDAYS: MasterHolidayItem[] = [
  {
    id: 'hol-jan-1',
    fixedMonth: 1,
    fixedDay: 1,
    nameZh: '元旦跨年慶祝',
    nameEn: 'New Year Day',
    keywords: ['New Year 2027', 'Celebration', 'Champagne', 'Fireworks', 'Countdown', 'Fresh Start']
  },
  {
    id: 'hol-jan-15',
    fixedMonth: 1,
    fixedDay: 15,
    nameZh: '農曆春節備貨',
    nameEn: 'Lunar New Year Prep',
    keywords: ['Lunar New Year', 'Chinese New Year', 'Red Envelope', 'Dragon Dance', 'Family Gathering', 'Lantern']
  },
  {
    id: 'hol-feb-14',
    fixedMonth: 2,
    fixedDay: 14,
    nameZh: '西洋情人節',
    nameEn: 'Valentine Day',
    keywords: ['Valentine Day', 'Romantic Dinner', 'Red Roses', 'Heart Shape', 'Couple Love', 'Chocolate Box']
  },
  {
    id: 'hol-mar-8',
    fixedMonth: 3,
    fixedDay: 8,
    nameZh: '國際婦女節',
    nameEn: 'International Women Day',
    keywords: ['Women Day', 'Female Empowerment', 'Diversity', 'Equal Rights', 'Floral Gift', 'Inspiring Woman']
  },
  {
    id: 'hol-mar-20',
    fixedMonth: 3,
    fixedDay: 20,
    nameZh: '春分賞櫻季',
    nameEn: 'Cherry Blossom Season',
    keywords: ['Cherry Blossom', 'Sakura Season', 'Spring Equinox', 'Hanami Picnic', 'Floral Bloom', 'Japan Spring']
  },
  {
    id: 'hol-apr-12',
    fixedMonth: 4,
    fixedDay: 12,
    nameZh: '復活節與春季備貨',
    nameEn: 'Easter Spring Season',
    keywords: ['Easter Eggs', 'Easter Bunny', 'Spring Pastel', 'Egg Hunt', 'Family Celebration', 'Spring Bloom']
  },
  {
    id: 'hol-apr-22',
    fixedMonth: 4,
    fixedDay: 22,
    nameZh: '世界地球日',
    nameEn: 'Earth Day',
    keywords: ['Earth Day', 'Environmental Protection', 'Recycling', 'Planting Trees', 'Clean Energy', 'Green Planet']
  },
  {
    id: 'hol-may-1',
    fixedMonth: 5,
    fixedDay: 1,
    nameZh: '國際勞動節',
    nameEn: 'International Labor Day',
    keywords: ['Labor Day', 'Workers Union', 'Craftsmanship', 'Workforce', 'Employment', 'Industry']
  },
  {
    id: 'hol-may-10',
    fixedMonth: 5,
    fixedDay: 10,
    nameZh: '母親節感恩季',
    nameEn: 'Mother Day',
    keywords: ['Mother Day', 'Maternal Love', 'Carnation Flowers', 'Family Hug', 'Gift Box', 'Warm Home']
  },
  {
    id: 'hol-jun-1',
    fixedMonth: 6,
    fixedDay: 1,
    nameZh: '國際兒童節',
    nameEn: 'Children Day',
    keywords: ['Children Day', 'Happy Childhood', 'Toys and Games', 'Playground', 'Smiling Kids', 'Creativity']
  },
  {
    id: 'hol-jun-15',
    fixedMonth: 6,
    fixedDay: 15,
    nameZh: '父親節與端午節',
    nameEn: 'Father Day & Dragon Boat',
    keywords: ['Father Day', 'Dragon Boat Festival', 'Zongzi', 'Paternal Love', 'Traditional Festival', 'Gentleman Gift']
  },
  {
    id: 'hol-jul-4',
    fixedMonth: 7,
    fixedDay: 4,
    nameZh: '美國獨立紀念日',
    nameEn: 'US Independence Day',
    keywords: ['4th of July', 'Independence Day', 'Fireworks', 'Patriotic', 'American Flag', 'Summer BBQ']
  },
  {
    id: 'hol-jul-14',
    fixedMonth: 7,
    fixedDay: 14,
    nameZh: '法國國慶日',
    nameEn: 'Bastille Day',
    keywords: ['Bastille Day', 'French National Day', 'Eiffel Tower', 'French Flag', 'Paris Celebration', 'Tri-color']
  },
  {
    id: 'hol-jul-30',
    fixedMonth: 7,
    fixedDay: 30,
    nameZh: '國際友誼日',
    nameEn: 'International Day of Friendship',
    keywords: ['Friendship', 'Friends Forever', 'Togetherness', 'Youth Group', 'Diverse Friends', 'Smiling Hug']
  },
  {
    id: 'hol-aug-1',
    fixedMonth: 8,
    fixedDay: 1,
    nameZh: '世界母乳哺育週',
    nameEn: 'World Breastfeeding Week',
    keywords: ['Breastfeeding', 'Maternal Health', 'Mother and Infant', 'Newborn Care', 'Family Bonding', 'Nurturing']
  },
  {
    id: 'hol-aug-8',
    fixedMonth: 8,
    fixedDay: 8,
    nameZh: '88父親節',
    nameEn: 'Father Celebration',
    keywords: ['Father Day', 'Family Honor', 'Parenting', 'Dad Gift', 'Warm Portrait', 'Respect']
  },
  {
    id: 'hol-aug-15',
    fixedMonth: 8,
    fixedDay: 15,
    nameZh: '七夕情人節',
    nameEn: 'Tanabata Festival',
    keywords: ['Tanabata', 'Star Festival', 'Romantic', 'Japanese Tradition', 'Bamboo Wish Cards', 'Summer Night']
  },
  {
    id: 'hol-aug-20',
    fixedMonth: 8,
    fixedDay: 20,
    nameZh: '開學季準備',
    nameEn: 'Back to School Season',
    keywords: ['Back to School', 'Students', 'Classroom Supplies', 'Backpack', 'E-Learning', 'Textbooks']
  },
  {
    id: 'hol-aug-25',
    fixedMonth: 8,
    fixedDay: 25,
    nameZh: '夏季海灘度假',
    nameEn: 'Summer Beach Vacation',
    keywords: ['Beach Vacation', 'Summer Tropics', 'Ocean Wave', 'Sunglasses', 'Palm Trees', 'Resort Relaxation']
  },
  {
    id: 'hol-sep-7',
    fixedMonth: 9,
    fixedDay: 7,
    nameZh: '美國勞工節週末',
    nameEn: 'US Labor Day Weekend',
    keywords: ['Labor Day Weekend', 'End of Summer', 'BBQ Party', 'Family Picnic', 'Road Trip', 'Long Weekend']
  },
  {
    id: 'hol-sep-15',
    fixedMonth: 9,
    fixedDay: 15,
    nameZh: '中秋節聚會',
    nameEn: 'Mid-Autumn Festival',
    keywords: ['Mid-Autumn Festival', 'Mooncake', 'Full Moon', 'Lanterns', 'Family Reunion', 'Chinese Tradition']
  },
  {
    id: 'hol-sep-20',
    fixedMonth: 9,
    fixedDay: 20,
    nameZh: '慕尼黑啤酒節預熱',
    nameEn: 'Oktoberfest Prep',
    keywords: ['Oktoberfest', 'Bavarian Beer', 'Pretzel', 'Tradition Costume', 'Festival Celebration', 'Prost']
  },
  {
    id: 'hol-sep-23',
    fixedMonth: 9,
    fixedDay: 23,
    nameZh: '秋分與豐收季',
    nameEn: 'Autumn Harvest',
    keywords: ['Autumn Harvest', 'Fallen Leaves', 'Pumpkin Season', 'Warm Sweaters', 'Cozy Vibe', 'Golden Maple']
  },
  {
    id: 'hol-oct-1',
    fixedMonth: 10,
    fixedDay: 1,
    nameZh: '世界咖啡日',
    nameEn: 'World Coffee Day',
    keywords: ['World Coffee Day', 'Espresso Art', 'Coffee Beans', 'Cozy Cafe', 'Barista', 'Morning Routine']
  },
  {
    id: 'hol-oct-10',
    fixedMonth: 10,
    fixedDay: 10,
    nameZh: '雙十慶典',
    nameEn: 'Double Tenth Day',
    keywords: ['Double Tenth Day', 'National Day', 'Celebration Parade', 'Flag Ceremony', 'Fireworks', 'Festive Banner']
  },
  {
    id: 'hol-oct-15',
    fixedMonth: 10,
    fixedDay: 15,
    nameZh: '萬聖節商業備貨',
    nameEn: 'Halloween Stocking Prep',
    keywords: ['Halloween Stocking', 'Jack O Lantern', 'Spooky Creative', 'Costume Party', 'Haunted House', 'Pumpkin Carving']
  },
  {
    id: 'hol-oct-31',
    fixedMonth: 10,
    fixedDay: 31,
    nameZh: '萬聖節狂歡',
    nameEn: 'Halloween Night',
    keywords: ['Halloween', 'Pumpkin', 'Trick or Treat', 'Spooky Vibe', 'Gothic Costume', 'Candy Bucket']
  },
  {
    id: 'hol-nov-11',
    fixedMonth: 11,
    fixedDay: 11,
    nameZh: '雙11購物狂歡節',
    nameEn: 'Single Day Shopping Sale',
    keywords: ['Singles Day', '1111 Shopping', 'E-Commerce Sale', 'Shopping Cart', 'Express Delivery', 'Discount Banner']
  },
  {
    id: 'hol-nov-20',
    fixedMonth: 11,
    fixedDay: 20,
    nameZh: '感恩節備貨',
    nameEn: 'Thanksgiving Prep',
    keywords: ['Thanksgiving Prep', 'Roasted Turkey', 'Autumn Pumpkin Pie', 'Family Dinner Table', 'Grateful Harvest', 'Warm Lighting']
  },
  {
    id: 'hol-nov-27',
    fixedMonth: 11,
    fixedDay: 27,
    nameZh: '黑色星期五大促',
    nameEn: 'Black Friday Sale',
    keywords: ['Black Friday', 'Mega Sale', 'Shopping Mall', 'Discount Tag', 'Holiday Shopping', 'Retail Rush']
  },
  {
    id: 'hol-dec-1',
    fixedMonth: 12,
    fixedDay: 1,
    nameZh: '聖誕節行銷檔期',
    nameEn: 'Christmas Marketing Season',
    keywords: ['Christmas Marketing', 'Holiday Gifts', 'Xmas Tree', 'Winter Snow', 'Santa Claus', 'Festive Lights']
  },
  {
    id: 'hol-dec-25',
    fixedMonth: 12,
    fixedDay: 25,
    nameZh: '聖誕節',
    nameEn: 'Christmas Day',
    keywords: ['Christmas Day', 'Merry Christmas', 'Wrapped Presents', 'Snowy Cottage', 'Fireplace', 'Ornaments']
  },
  {
    id: 'hol-dec-31',
    fixedMonth: 12,
    fixedDay: 31,
    nameZh: '跨年倒數與新年夜',
    nameEn: 'New Year Eve Countdown',
    keywords: ['New Years Eve', 'Countdown 2027', 'Midnight Fireworks', 'Champagne Toast', 'Confetti Party', 'Glittering Night']
  }
];

/**
 * Calculates upcoming holidays occurring within approximately 2.5 months (up to 75 days)
 * from the provided reference date.
 */
export function getUpcomingHolidays(now: Date = new Date()): HolidayItem[] {
  const currentYear = now.getFullYear();

  const windowDays = 75; // Look-ahead window (~2.5 months)

  const mappedWithDates = MASTER_GLOBAL_HOLIDAYS.map((hol) => {
    let occurrence = new Date(currentYear, hol.fixedMonth - 1, hol.fixedDay, 23, 59, 59);
    // If the event has already passed this year (by more than 1 day), shift to next year
    if (occurrence.getTime() < now.getTime() - 24 * 3600 * 1000) {
      occurrence = new Date(currentYear + 1, hol.fixedMonth - 1, hol.fixedDay, 23, 59, 59);
    }

    const diffMs = occurrence.getTime() - now.getTime();
    const diffDays = Math.ceil(diffMs / (1000 * 3600 * 24));

    return {
      ...hol,
      occurrence,
      diffDays,
      monthDayStr: `${hol.fixedMonth}月${hol.fixedDay}日`
    };
  });

  // Filter events happening within the next windowDays
  const upcoming = mappedWithDates
    .filter((item) => item.diffDays >= 0 && item.diffDays <= windowDays)
    .sort((a, b) => a.diffDays - b.diffDays);

  // Fallback: if window produces fewer than 4 events (rare), grab closest 6 upcoming
  if (upcoming.length < 4) {
    return mappedWithDates
      .sort((a, b) => a.diffDays - b.diffDays)
      .slice(0, 8)
      .map(({ id, nameZh, nameEn, keywords, monthDayStr }) => ({
        id,
        nameZh,
        nameEn,
        keywords,
        monthDayStr
      }));
  }

  return upcoming.map(({ id, nameZh, nameEn, keywords, monthDayStr }) => ({
    id,
    nameZh,
    nameEn,
    keywords,
    monthDayStr
  }));
}

// Initial fallback object for backwards compatibility
export const AI_STRATEGY_BRAIN_DATA = {
  trendingThemes: AI_STRATEGY_TREND_POOLS[0].trendingThemes,
  seasonalKeywords: AI_STRATEGY_TREND_POOLS[0].seasonalKeywords,
  expertAdvice: AI_STRATEGY_TREND_POOLS[0].expertAdvice,
  upcomingHolidays: getUpcomingHolidays()
};



