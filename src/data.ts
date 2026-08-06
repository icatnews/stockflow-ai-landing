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
    id: 'sample-cute-brain',
    name: 'Cute_fluffy_brain_elves.jpg',
    title: 'Cute fluffy brain elves',
    categoryTag: '3D Illustration & AI',
    badge: '3D #01',
    imageUrl: '/samples/Cute_fluffy_brain_elves.jpg',
    aiStrategy: 'A cute, anthropomorphic 3D human brain character with large, expressive glossy eyes. The brain has a soft, fuzzy, plush texture like felt or short fur. The entire image follows a monochromatic sage green color palette. Minimalist composition with the brain centered on a smooth, solid green background. Soft studio lighting with subtle shadows at the base, high-quality 3D digital rendering, whimsical and playful aesthetic.',
    generalPrompt: 'A cute, anthropomorphic 3D human brain character with large, expressive glossy eyes. The brain has a soft, fuzzy, plush texture like felt or short fur. The entire image follows a monochromatic sage green color palette. Minimalist composition with the brain centered on a smooth, solid green background. Soft studio lighting with subtle shadows at the base, high-quality 3D digital rendering, whimsical and playful aesthetic.',
    mjPrompt: 'A cute 3D stylized human brain character, large glossy googly eyes, fuzzy soft plush texture, velvet material, sage green monochrome color palette, minimalist studio background, soft diffused lighting, centered composition, clean aesthetic, high detail, Octane render, C4D --ar 9:16 --v 6.0',
    bestTitle: 'Cute Anthropomorphic 3D Human Brain Character with Soft Plush Fuzzy Texture',
    seoOption1: 'Sage Green 3D Brain Plush Character Illustration for AI and Mental Wellness',
    seoOption2: 'Whimsical Minimalist 3D Brain Elf Avatar with Velvet Surface and Big Glossy Eyes',
    keywordsArray: [
      'brain', 'cute', 'character', '3d', 'illustration', 'plush', 'fuzzy', 'sage green',
      'monochrome', 'anthropomorphic', 'eyes', 'googly eyes', 'mind', 'mental health', 'wellness',
      'psychology', 'ai', 'intelligence', 'creativity', 'idea', 'soft', 'texture', 'velvet',
      'felt', 'toy', 'mascot', 'avatar', 'minimalist', 'centered', 'green', 'render',
      'c4d', 'octane', 'studio lighting', 'whimsical', 'playful', 'biology', 'neuroscience',
      'thinking', 'smart', 'concept', 'digital art', 'clean', 'modern', '3d render'
    ],
    category: '4 (Technology)',
    score: 99,
    photoCoach: {
      shootingGuide: {
        equipment: '3D 繪圖與渲染軟體 (Blender / C4D / Octane Render)。',
        lightingSetup: '柔和棚拍三點式燈光 (3-Point Studio Lighting)，突顯絨毛立體質感。',
        compositionTip: '單一主體極簡置中構圖，下方微弱接觸陰影強化沉浸真實感。',
        colorPalette: '鼠尾草綠 (Sage Green) 單色系調色板。'
      },
      qualityCritique: {
        strengths: '絨毛材質與水汪汪大眼睛視覺吸睛度極高，非常適合 AI 議題與心理健康題材。',
        flawsAndWeaknesses: '建議可為背景加入微弱的質感粒子或漸層，增加空間層次。',
        lightingScore: '99/100 • 柔和均勻工作室燈光，材質層次分明。',
        compositionScore: '98/100 • 置中極簡結構，給予大量留白空間。',
        reshootAdvice: '絕佳 AI 與創意發想熱門題材，商業圖庫高下載率素材。'
      }
    }
  },
  {
    id: 'sample-car-detailer',
    name: 'Detailer_polishing_red_car_hood.jpg',
    title: 'Detailer polishing red car hood',
    categoryTag: 'Automotive & Service',
    badge: 'Commercial #02',
    imageUrl: '/samples/Detailer_polishing_red_car_hood.jpg',
    aiStrategy: 'This image showcases a highly professional automotive detailing process. The composition uses a close-up angle focusing on gloved hands operating a rotary buffer polisher, creating strong visual contrast against deep red metallic paint. Striplight reflections across the glossy hood highlight a mirror finish.',
    generalPrompt: 'Close-up shot of professional car detailer polishing a glossy red metallic car hood with rotary buffer machine, strip light reflection on reflective mirror finish paint, hands in black nitrile gloves, automotive workshop background, commercial stock photo style --v 6.0 --ar 16:9',
    mjPrompt: 'Commercial stock photograph of auto detailer buffing glossy red luxury car hood, bright strip light reflections, hands wearing black work gloves holding orbital polisher, professional auto detailing shop background, hyper-realistic, 8k resolution --ar 16:9 --v 6.0',
    bestTitle: 'Professional Detailer Polishing Glossy Red Metallic Car Hood with Rotary Buffer',
    seoOption1: 'Auto Detailing Service Buffer Machine Polishing Red Vehicle Hood Close-up',
    seoOption2: 'Automotive Paint Protection and Mirror Finish Coating Maintenance Concept',
    keywordsArray: [
      'detailer', 'car', 'polishing', 'red', 'hood', 'auto detailing', 'buffer', 'polisher',
      'rotary', 'paint', 'glossy', 'metallic', 'vehicle', 'automotive', 'service', 'maintenance',
      'workshop', 'garage', 'gloves', 'hands', 'work', 'care', 'shine', 'mirror finish',
      'reflection', 'striplight', 'coating', 'waxing', 'protection', 'craftsmanship', 'professional',
      'commercial', 'clean', 'restoration', 'luxury car', 'automobile', 'equipment', 'action'
    ],
    category: '3 (Business & Industry)',
    score: 98,
    photoCoach: {
      shootingGuide: {
        equipment: '全片幅單眼 + 85mm f/1.8 鏡頭，特寫研磨拋光動態。',
        lightingSetup: '長條燈條 (Strip Light) 鏡面反射，凸顯紅色漆面高質感。',
        compositionTip: '特寫研磨機與對角車蓋線條，引導視覺至細膩車漆細節。',
        colorPalette: '艷麗深紅 (Crimson Red) 與專業黑 (Workwear Black)。'
      },
      qualityCritique: {
        strengths: '漆面鏡面反光與研磨機動作感極強，極富商業修車與美容價值。',
        flawsAndWeaknesses: '可清理周圍微小研磨飛沫，使畫面更加乾淨俐落。',
        lightingScore: '98/100 • 燈條鏡面高光線條非常專業優美。',
        compositionScore: '97/100 • 動作對角線張力十足。',
        reshootAdvice: '汽車美容保養與高階鍍膜服務首選廣告素材。'
      }
    }
  },
  {
    id: 'sample-dome-camera',
    name: 'Dome_security_camera.jpg',
    title: 'Dome security camera',
    categoryTag: 'Security & Tech',
    badge: 'Tech #03',
    imageUrl: '/samples/Dome_security_camera.jpg',
    aiStrategy: 'This image uses a dynamic close-up composition, precisely locking focus on a white dome surveillance camera (CCTV) mounted on a rough concrete pillar. Lens details are crisp, displaying glass spherical texture and subtle ambient reflections. The background leverages shallow depth of field from a wide aperture.',
    generalPrompt: 'Close-up shot of a white dome security CCTV surveillance camera mounted on a concrete wall in an underground parking garage, blurred fluorescent ceiling lights in background, cool industrial aesthetic, sharp lens focus, 8k --v 6.0 --ar 16:9',
    mjPrompt: 'Modern white dome security camera mounted on concrete column, shallow depth of field, background blurred underground parking lot with cool lighting, crisp lens reflection, surveillance security technology, photorealistic --ar 16:9 --v 6.0',
    bestTitle: 'White Dome Security Surveillance Camera Mounted on Concrete Wall in Garage',
    seoOption1: 'CCTV Dome Surveillance Security Camera Close-up with Blurred Background',
    seoOption2: 'Modern Commercial Property Security Protection and Video Monitoring Concept',
    keywordsArray: [
      'dome camera', 'security', 'cctv', 'surveillance', 'camera', 'monitoring', 'protection',
      'safety', 'concrete', 'garage', 'parking lot', 'lens', 'reflection', 'glass', 'white',
      'industrial', 'pillar', 'wall', 'tech', 'technology', 'system', 'commercial', 'modern',
      'shallow depth of field', 'blurred background', 'fluorescent', 'lights', 'urban', 'property'
    ],
    category: '4 (Technology)',
    score: 97,
    photoCoach: {
      shootingGuide: {
        equipment: '50mm 或 85mm 定焦鏡頭，大光圈 f/2.0 營造背景散景。',
        lightingSetup: '地下停車場頂部冷色日光燈頂光，搭配微弱側光打亮玻璃鏡頭。',
        compositionTip: '將鏡頭置於畫面黃金焦點，引導背景燈光形成流暢延伸。',
        colorPalette: '工業灰 (Concrete Grey) 與純淨白 (Camera White)。'
      },
      qualityCritique: {
        strengths: '圓頂玻璃反光細節與背景散景虛化效果極佳，商業科技感強烈。',
        flawsAndWeaknesses: '混凝土牆面細節可稍微提高對比度增加材質立體感。',
        lightingScore: '97/100 • 冷色調工業光影，氣氛烘托到位。',
        compositionScore: '96/100 • 主體對焦極致銳利，散景自然。',
        reshootAdvice: '安防監控、智慧建築與警政安全題材極佳素材。'
      }
    }
  },
  {
    id: 'sample-wooden-gears',
    name: 'Hands_arranging_wooden_gears.jpg',
    title: 'Hands arranging wooden gears',
    categoryTag: 'Business & Innovation',
    badge: 'Concept #04',
    imageUrl: '/samples/Hands_arranging_wooden_gears.jpg',
    aiStrategy: 'This is a conceptual flat lay photograph featuring wooden central gears encircled by hands in colorful attire, symbolizing diversity and teamwork. A clean high-key white background creates a modern minimalist feel. Digital overlays including "E-LEARNING" typography and education icons emphasize the integration of tech and learning.',
    generalPrompt: 'Top-down flat lay view of multiple diverse hands placing interconnected wooden gears together on a clean white background, teamwork, collaboration, engineering and innovation concept, modern stock photography --ar 16:9 --v 6.0',
    mjPrompt: 'Conceptual flat lay photograph of hands assembling wooden gear cogwheels, teamwork and mechanical coordination concept, bright high-key white studio backdrop, soft natural shadows, high quality --ar 16:9 --v 6.0',
    bestTitle: 'Diverse Hands Assembling Interconnected Wooden Gears on White Background',
    seoOption1: 'Teamwork and Business Innovation Concept with Wooden Gear Cogs Flat Lay',
    seoOption2: 'Collaborative Problem Solving and Mechanics Concept with People Hands',
    keywordsArray: [
      'hands', 'wooden gears', 'gears', 'cogs', 'teamwork', 'collaboration', 'flat lay',
      'top down', 'white background', 'innovation', 'engineering', 'mechanics', 'connection',
      'integration', 'diversity', 'cooperation', 'business', 'concept', 'strategy', 'education',
      'problem solving', 'coordination', 'minimalist', 'clean', 'high key', 'interconnected'
    ],
    category: '3 (Business & Industry)',
    score: 98,
    photoCoach: {
      shootingGuide: {
        equipment: '垂直俯拍 (Top-Down Flat Lay) 支架 + 35mm 定焦鏡頭。',
        lightingSetup: '雙側大型柔光箱 (Softbox) 提供均勻無死角的高調白光。',
        compositionTip: '齒輪置於中央，雙手呈放射狀環繞擺放，創造幾何對稱感。',
        colorPalette: '原木質感 (Natural Wood) 與極簡白 (Studio White)。'
      },
      qualityCritique: {
        strengths: '概念清晰明確，非常適合企業團隊合作、ESG 與工程創新宣傳。',
        flawsAndWeaknesses: '手部陰影可適度柔化，保持俯拍平面的純淨感。',
        lightingScore: '98/100 • 明亮均勻高調棚拍光 shadowless。',
        compositionScore: '98/100 • 俯拍幾何對稱平衡良好。',
        reshootAdvice: '商業簡報與企業教育訓練絕佳圖庫素材。'
      }
    }
  },
  {
    id: 'sample-typing-laptop',
    name: 'Hands_typing_on_silver_laptop.jpg',
    title: 'Hands typing on silver laptop',
    categoryTag: 'Office & Work',
    badge: 'Workplace #05',
    imageUrl: '/samples/Hands_typing_on_silver_laptop.jpg',
    aiStrategy: 'This image displays a highly professional commercial stock style. A low-angle close-up focuses on hands operating a silver laptop, establishing an immersive presence. Shallow depth of field blurs two suit-clad professionals holding documents in the background, accentuating focused productivity.',
    generalPrompt: 'Low-angle close-up of hands typing on a modern silver laptop keyboard, shallow depth of field with blurred business professionals collaborating in background office setting, natural side window lighting, professional stock photo --ar 16:9 --v 6.0',
    mjPrompt: 'Authentic workplace photograph, person typing on aluminum laptop keyboard, foreground hands focus, corporate colleagues in suits talking in soft blurred background, sunlit office environment, 8k resolution --ar 16:9 --v 6.0',
    bestTitle: 'Hands Typing on Silver Laptop Keyboard with Blurred Business Professionals in Office',
    seoOption1: 'Corporate Workplace Productivity Typing on Laptop Close-up',
    seoOption2: 'Professional Business Finance and Data Analysis Workspace Interaction',
    keywordsArray: [
      'hands', 'typing', 'laptop', 'silver', 'keyboard', 'office', 'business', 'workplace',
      'productivity', 'corporate', 'professional', 'low angle', 'close up', 'shallow depth of field',
      'colleagues', 'collaboration', 'suits', 'finance', 'technology', 'computer', 'work',
      'document', 'window light', 'modern office', 'executive', 'data', 'working'
    ],
    category: '3 (Business)',
    score: 97,
    photoCoach: {
      shootingGuide: {
        equipment: '50mm f/1.4 鏡頭，低角度視角緊扣鍵盤打字動作。',
        lightingSetup: '大型窗戶側面自然光，為手部與鍵盤拉出優雅輪廓光。',
        compositionTip: '手部與鍵盤佔據前景 2/3，背景同事保持軟虛化景深。',
        colorPalette: '銀灰 (Aluminum Silver) 與溫暖辦公室採光。'
      },
      qualityCritique: {
        strengths: '打字真實感與背景團隊氛圍融合自然，商業萬用素材。',
        flawsAndWeaknesses: '筆電上蓋與螢幕請確保完全無商標或專利 UI 外露。',
        lightingScore: '97/100 • 柔和自然側光質感優良。',
        compositionScore: '96/100 • 前景集中，背景層次豐富。',
        reshootAdvice: '軟體開發、遠距工作與企業官網首頁首選背景圖。'
      }
    }
  },
  {
    id: 'sample-handshake',
    name: 'Handshake_between_businessmen.jpg',
    title: 'Handshake between businessmen',
    categoryTag: 'Business & Corporate',
    badge: 'Corporate #06',
    imageUrl: '/samples/Handshake_between_businessmen.jpg',
    aiStrategy: 'This visual work adopts a symmetrical composition centering on a handshake between two suit-clad professionals. A soft blurred city skyline through floor-to-ceiling windows sets an executive tone. A digital holographic world map projection spans the handshake with glowing blue and gold network nodes.',
    generalPrompt: 'Symmetrical medium shot of two professional businessmen in dark suits shaking hands in front of floor-to-ceiling office window with blurred city skyline background, glowing digital holographic world map overlay, corporate agreement concept --ar 16:9 --v 6.0',
    mjPrompt: 'Corporate partnership handshake, two executives in suits shaking hands, high rise office window with city view backdrop, digital network holographic overlay connecting hands, professional lighting, 8k resolution --ar 16:9 --v 6.0',
    bestTitle: 'Business Executives Shaking Hands in High-Rise Office with City View',
    seoOption1: 'Corporate Partnership Handshake Agreement with Digital Tech Overlay',
    seoOption2: 'International Global Business Deal and Trust Concept with Shaking Hands',
    keywordsArray: [
      'handshake', 'businessmen', 'executives', 'suits', 'corporate', 'agreement', 'partnership',
      'deal', 'trust', 'office', 'window', 'city skyline', 'high rise', 'holographic', 'world map',
      'global', 'network', 'connection', 'international', 'collaboration', 'business', 'success',
      'symmetrical', 'professional', 'finance', 'merger', 'contract'
    ],
    category: '3 (Business)',
    score: 99,
    photoCoach: {
      shootingGuide: {
        equipment: '50mm f/1.8 定焦鏡頭，對焦於雙手握手中心點。',
        lightingSetup: '窗外自然天光逆光，搭配室內暖色輪廓光，突顯西裝質感。',
        compositionTip: '中央對稱握手構圖，兩側人物輪廓形成穩固架構。',
        colorPalette: '深海藍 (Navy Suit) 與夕陽金光 (Golden Hour Glow)。'
      },
      qualityCritique: {
        strengths: '握手姿態與高樓背景展現極強的信任感與國際企業視野。',
        flawsAndWeaknesses: '可適度微調科技光暈透明度，使其與西裝光影更貼合。',
        lightingScore: '99/100 • 逆光輪廓光勾勒極佳，大氣磅礡。',
        compositionScore: '98/100 • 中央對稱，具備極高視覺權威感。',
        reshootAdvice: '跨國合作、企業簽約與金融投顧必備萬用圖檔。'
      }
    }
  },
  {
    id: 'sample-isometric-books',
    name: 'Isometric_books_on_laptop.jpg',
    title: 'Isometric books on laptop',
    categoryTag: 'Education & Data',
    badge: 'E-Learning #07',
    imageUrl: '/samples/Isometric_books_on_laptop.jpg',
    aiStrategy: 'An isometric 3D illustration centering on an open laptop with colorful books stacked on top labeled "DATA SCIENCE", "FUTURE LEARNING", and "CODE". Vibrant cyan screen glow and floating neon holographic icons and data graphs create a strong futuristic tech mood on a dark gradient backdrop.',
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
      'graphic', 'illustration', 'isometric', 'neon', 'glow', 'background'
    ],
    category: '4 (Technology & Education)',
    score: 99,
    photoCoach: {
      shootingGuide: {
        equipment: '3D 向量繪圖與渲染器 (Blender / Octane Render)。',
        lightingSetup: '霓虹發光體 (Neon Glow) 與體積光 (Volumetric Light)。',
        compositionTip: '精確 45 度等角透視 (Isometric Grid)，結構俐落對齊。',
        colorPalette: '暗青色 (Teal Navy) 搭配粉紫與青綠發光線條。'
      },
      qualityCritique: {
        strengths: '數據文字與標題極其清晰，呈現頂級數位學習與大數據教育質感。',
        flawsAndWeaknesses: '可增加微小浮點顆粒增強數位科技感。',
        lightingScore: '99/100 • 霓虹發光質感高調吸引眼球。',
        compositionScore: '98/100 • 等角透視結構完美平衡。',
        reshootAdvice: '線上課程平台、程式教學與 AI 大數據熱銷圖素材。'
      }
    }
  },
  {
    id: 'sample-lightbulb',
    name: 'Light_bulb_hovering_over_laptop.jpg',
    title: 'Light bulb hovering over laptop',
    categoryTag: 'Technology & AI',
    badge: 'Hot #08',
    imageUrl: '/samples/Light_bulb_hovering_over_laptop.jpg',
    aiStrategy: 'A conceptual high-tech composition featuring a glowing incandescent light bulb floating beside a laptop displaying programming code. Warm bulb glow contrasts against deep blue background tones, accompanied by digital icons for gear, email, and network connectivity, framed by colorful bokeh light spots.',
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
      'ai', 'development', 'software', 'screen', 'communication', 'global', 'connectivity'
    ],
    category: '4 (Technology)',
    score: 98,
    photoCoach: {
      shootingGuide: {
        equipment: '35mm 定焦鏡頭搭配 3D 合成發光元件。',
        lightingSetup: '暖橘發光電燈泡與深藍背景色溫大反差對比。',
        compositionTip: '三分法將發光燈泡置於視覺焦點，筆電鍵盤形成自然延伸。',
        colorPalette: '深琥珀橘 (Warm Amber) 與深海藍 (Deep Navy)。'
      },
      qualityCritique: {
        strengths: '冷暖色調強烈對比，燈絲與散景顆粒極富商業張力。',
        flawsAndWeaknesses: '筆電鍵盤細節可適度壓低光暈以增強對焦銳利度。',
        lightingScore: '98/100 • 琥珀光與深藍背景冷暖對比極佳。',
        compositionScore: '99/100 • 主體引導流暢大氣。',
        reshootAdvice: '科技創新、創業主題與 AI 行銷主視覺熱銷款。'
      }
    }
  },
  {
    id: 'sample-mooncakes',
    name: 'Mooncakes.jpg',
    title: 'Mooncakes',
    categoryTag: 'Food & Culture',
    badge: 'Festive #09',
    imageUrl: '/samples/Mooncakes.jpg',
    aiStrategy: 'A high-texture macro photograph centering on a traditional Cantonese mooncake with intricate floral engravings and golden glossy sheen. Shallow depth of field blurs ceramic tea cups, red dates, and goji berries in the background, bathed in warm directional afternoon sunlight across a bamboo mat.',
    generalPrompt: 'Macro close-up photograph of traditional golden Cantonese mooncakes with intricate pattern engravings on bamboo mat, tea cup and dried goji berries in soft blurred background, warm directional sunlight, mid-autumn festival food photography --ar 3:2 --v 6.0',
    mjPrompt: 'Traditional Chinese mooncakes on rustic wooden tray, warm afternoon window sunlight, steam rising from ceramic tea cup, dark moody oriental aesthetic, macro texture details, 8k photorealistic --ar 3:2 --v 6.0',
    bestTitle: 'Traditional Golden Cantonese Mooncakes with Tea and Mid-Autumn Festival Decor',
    seoOption1: 'Mid-Autumn Festival Mooncake Macro Food Photography with Tea',
    seoOption2: 'Traditional Chinese Bakery Mooncakes on Bamboo Mat with Warm Sunlight',
    keywordsArray: [
      'mooncakes', 'mooncake', 'mid-autumn festival', 'chinese', 'traditional', 'bakery', 'tea',
      'goji berries', 'bamboo mat', 'golden', 'macro', 'food photography', 'oriental', 'culture',
      'festive', 'delicacy', 'pastry', 'warm sunlight', 'close up', 'texture', 'engraving'
    ],
    category: '6 (Food & Drink)',
    score: 98,
    photoCoach: {
      shootingGuide: {
        equipment: '100mm f/2.8 Macro 微距鏡頭，特寫月餅雕花紋理。',
        lightingSetup: '午後斜射溫暖自然光，打亮金黃餅皮油亮質感。',
        compositionTip: '月餅置於前景中央，背景茶具與枸杞形成溫馨文化氛圍。',
        colorPalette: '金黃餅皮 (Golden Brown) 與竹編原色 (Bamboo Tan)。'
      },
      qualityCritique: {
        strengths: '雕花紋理與油脂光澤細緻逼真，傳統節慶文化氛圍濃郁。',
        flawsAndWeaknesses: '背景物件可適度簡化，為設計師預留更多加字留白區。',
        lightingScore: '98/100 • 溫暖自然日光完美凸顯食品食慾感。',
        compositionScore: '97/100 • 微距質感極佳。',
        reshootAdvice: '中秋節慶、傳統糕餅與東方文化廣告熱銷素材。'
      }
    }
  },
  {
    id: 'sample-surfboards',
    name: 'Surfboards_on_sandy_beach.jpg',
    title: 'Surfboards on sandy beach',
    categoryTag: 'Travel & Lifestyle',
    badge: 'Outdoor #10',
    imageUrl: '/samples/Surfboards_on_sandy_beach.jpg',
    aiStrategy: 'A minimalist aerial drone shot of colorful surfboards aligned symmetrically on a sandy beach. Divided horizontally into light sand, rainbow-ordered surfboards, and clear blue ocean waves with sharp midday shadows and vibrant summer energy.',
    generalPrompt: 'Top-down aerial drone photograph of vibrant colorful surfboards arranged neatly in a row on a golden sandy beach next to turquoise ocean waves, bright summer sunlight, crisp shadows, tropical vacation aesthetic --ar 16:9 --v 6.0',
    mjPrompt: 'Aerial view of surfboards lined up on beach shoreline, ocean water turquoise waves crashing on sand, colorful summer surf aesthetic, sharp shadows, high resolution stock photo --ar 16:9 --v 6.0',
    bestTitle: 'Aerial Top-Down View of Colorful Surfboards Lined Up on Sandy Beach',
    seoOption1: 'Summer Tropical Beach Aerial Drone Photo with Surfboards and Turquoise Sea',
    seoOption2: 'Surfing Lifestyle Vacation Concept with Ocean Waves and Surfboards on Sand',
    keywordsArray: [
      'surfboards', 'surfboard', 'beach', 'sand', 'sandy', 'aerial', 'drone', 'top down',
      'ocean', 'sea', 'turquoise', 'waves', 'summer', 'vacation', 'tropical', 'colorful',
      'line up', 'symmetry', 'travel', 'lifestyle', 'outdoor', 'recreation', 'water sports'
    ],
    category: '10 (Sports & Travel)',
    score: 98,
    photoCoach: {
      shootingGuide: {
        equipment: '航拍無人機 90 度垂直俯拍 (Vertical Top-Down Drone Shot)。',
        lightingSetup: '頂部強烈正午陽光，為衝浪板拉出俐落短陰影。',
        compositionTip: '沙灘、衝浪板與海浪三分橫向結構，色彩呈彩虹對稱排列。',
        colorPalette: '金黃沙灘 (Golden Sand) 與碧藍海水 (Turquoise Ocean)。'
      },
      qualityCritique: {
        strengths: '色彩繽紛且幾何排列對稱性極佳，夏日度假氣息迎面而來。',
        flawsAndWeaknesses: '海水與沙灘交界處可微調高光，保留浪花細節。',
        lightingScore: '98/100 • 正午天光對比鮮明，色彩飽和。',
        compositionScore: '99/100 • 幾何排列俯拍，視覺震撼力十足。',
        reshootAdvice: '旅遊海報、夏日特賣與戶外運動主題首選圖片。'
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



