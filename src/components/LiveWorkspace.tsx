import React, { useState, useEffect, useMemo } from 'react';
import { Language, translations } from '../i18n';
import {
  GUMROAD_BUY_URL,
  PRESET_SHOWCASE_SAMPLES,
  PresetSampleItem,
  AI_STRATEGY_TREND_POOLS,
  getUpcomingHolidays,
  HolidayItem
} from '../data';
import { SampleGraphic } from './SampleGraphic';
import {
  Sparkles,
  FileSpreadsheet,
  Camera,
  TrendingUp,
  Copy,
  Check,
  Download,
  CheckCircle2,
  Lightbulb,
  FileText,
  Layers,
  ArrowRight,
  ShieldCheck,
  Tag,
  RefreshCw,
  Brain,
  Calendar,
  AlertCircle,
  BarChart3,
  Upload,
  Plus,
  Trash2,
  Image as ImageIcon,
  Edit3,
  Save,
  RotateCcw,
  Lock,
  Unlock
} from 'lucide-react';

const translateChineseToEnglishFallback = (input: string): string => {
  if (!input || !/[\u4e00-\u9fa5]/.test(input)) return input;

  let text = input;

  // 1. Direct phrase / sentence map for stock critiques & advice
  const sentenceMap: Record<string, string> = {
    '商業需求極高，適合科技 AI、創業與大數據行銷主視覺。': 'High commercial demand; ideal as hero visuals for Tech AI, startups, and Big Data marketing.',
    '商業需求極高，適合科技 AI、創業與大數據行銷主視覺': 'High commercial demand; ideal as hero visuals for Tech AI, startups, and Big Data marketing.',
    '筆電鍵盤邊緣若加強局部暗部層次，可減少光暈擴散干擾。': 'Enhancing dark contrast along laptop keyboard edges can reduce glare diffusion.',
    '筆電鍵盤邊緣若加強局部暗部層次，可減少光暈擴散干擾': 'Enhancing dark contrast along laptop keyboard edges can reduce glare diffusion.',
    '適合線上課程、大數據教學平台及商業圖庫熱門圖素材。': 'Suitable for online courses, data platforms, and high-demand commercial stock assets.',
    '適合線上課程、大數據教學平台及商業圖庫熱門圖素材': 'Suitable for online courses, data platforms, and high-demand commercial stock assets.',
    '書本背面的陰影可略微加深以提升立體深度。': 'Slightly deepening back book shadows will enhance 3D depth.',
    '書本背面的陰影可略微加深以提升立體深度': 'Slightly deepening back book shadows will enhance 3D depth.',
    '絕佳熱銷素材！請確保服裝及紙箱無任何商標外露即可直接上架。': 'Top selling stock asset! Ensure clothing and packaging have zero visible trademarks for direct approval.',
    '絕佳熱銷素材！請確保服裝及紙箱無任何商標外露即可直接上架': 'Top selling stock asset! Ensure clothing and packaging have zero visible trademarks for direct approval.',
    '背景可稍微減少雜物，讓眼神更集中於物流交接動作。': 'Slightly reducing background clutter will focus attention on the delivery handover.',
    '背景可稍微減少雜物，讓眼神更集中於物流交接動作': 'Slightly reducing background clutter will focus attention on the delivery handover.',
    '生醫科技與藥廠買家高度喜愛，商業吸引力極高。': 'Highly sought after by biotech and pharmaceutical buyers; strong commercial appeal.',
    '生醫科技與藥廠買家高度喜愛，商業吸引力極高': 'Highly sought after by biotech and pharmaceutical buyers; strong commercial appeal.',
    '機器人材質金屬反光若再收斂 10%，畫面會更具親和力。': 'Reducing metallic glare on robot surface by 10% will increase warmth and trust.',
    '機器人材質金屬反光若再收斂 10%，畫面會更具親和力': 'Reducing metallic glare on robot surface by 10% will increase warmth and trust.',
    '企業 ESG 報告必備高頻下載素材，前景可預留標題排版空間。': 'Must-have high download asset for corporate ESG reports; leaves ample foreground copy space.',
    '企業 ESG 報告必備高頻下載素材，前景可預留標題排版空間': 'Must-have high download asset for corporate ESG reports; leaves ample foreground copy space.',
    '工作安全帽上請確保無任何工程公司品牌標誌。': 'Ensure hard hat is completely free of any engineering company brand logos.',
    '工作安全帽上請確保無任何工程公司品牌標誌': 'Ensure hard hat is completely free of any engineering company brand logos.',
    '畫面左上角留白區域適合廣告文案寫作，商業價值高。': 'Top-left copy space is ideal for ad copy overlays; excellent commercial viability.',
    '畫面左上角留白區域適合廣告文案寫作，商業價值高': 'Top-left copy space is ideal for ad copy overlays; excellent commercial viability.',
    '筆電螢幕上的圖表可替換為更高對比的商業 UI 畫面。': 'Replacing laptop dashboard chart with higher contrast commercial UI will pop better.',
    '筆電螢幕上的圖表可替換為更高對比的商業 UI 畫面': 'Replacing laptop dashboard chart with higher contrast commercial UI will pop better.',
    '社群媒體、精品咖啡雜誌與餐飲品牌極愛之圖片類型。': 'Top seller for social media, specialty coffee magazines, and food & beverage brands.',
    '社群媒體、精品咖啡雜誌與餐飲品牌極愛之圖片類型': 'Top seller for social media, specialty coffee magazines, and food & beverage brands.',
    '壺嘴邊緣若能增加少許金屬反光，細節會更加精緻。': 'Adding subtle metallic edge highlights to kettle spout will enhance detail texture.',
    '壺嘴邊緣若能增加少許金屬反光，細節會更加精緻': 'Adding subtle metallic edge highlights to kettle spout will enhance detail texture.',
    '穿戴式裝置與健康 App 商業廣告最熱門素材。': 'Highly sought after asset for wearable tech and fitness app advertisements.',
    '穿戴式裝置與健康 App 商業廣告最熱門素材': 'Highly sought after asset for wearable tech and fitness app advertisements.',
    '請檢查手錶顯示螢幕圖案是否涉及專利介面侵權。': 'Verify smartwatch screen graphics to ensure no patented interface infringement.',
    '請檢查手錶顯示螢幕圖案是否涉及專利介面侵權': 'Verify smartwatch screen graphics to ensure no patented interface infringement.',
    '全球金融 SaaS、銀行廣告與加密貨幣平台高單價熱銷款。': 'High-margin bestseller for global fintech SaaS, bank ads, and crypto platforms.',
    '全球金融 SaaS、銀行廣告與加密貨幣平台高單價熱销款': 'High-margin bestseller for global fintech SaaS, bank ads, and crypto platforms.',
    '背景暗部可加入微弱的網絡點線粒子以增強科技氛圍。': 'Subtle network line particles in dark background will enhance tech ambience.',
    '背景暗部可加入微弱的網絡點線粒子以增強科技氛圍': 'Subtle network line particles in dark background will enhance tech ambience.',
    '遠距工作、個人部落格與質感生活用品買家必備款。': 'Essential asset for remote work blogs, Scandinavian interior mags, and lifestyle brands.',
    '遠距工作、個人部落格與質感生活用品買家必備款': 'Essential asset for remote work blogs, Scandinavian interior mags, and lifestyle brands.',
    '筆電上蓋的品牌 Logo 必須透過修圖徹底撫平抹除。': 'Laptop lid brand logo must be completely retouched and smoothed over.',
    '筆電上蓋的品牌 Logo 必須透過修圖徹底撫平抹除': 'Laptop lid brand logo must be completely retouched and smoothed over.',
    '經 AI 審核構圖與光影表現良好，無明顯商業缺陷。': 'AI audit confirms excellent composition and lighting with no major commercial flaws.',
    '經 AI 審核構圖與光影表現良好，無明顯商業缺陷': 'AI audit confirms excellent composition and lighting with no major commercial flaws.'
  };

  for (const [zh, en] of Object.entries(sentenceMap)) {
    if (text.includes(zh)) {
      text = text.replaceAll(zh, en);
    }
  }

  // 2. Check full map by longest string first
  const sortedPairs = Object.entries(PRESET_CHINESE_TO_ENGLISH_MAP)
    .sort((a, b) => b[0].length - a[0].length);

  for (const [zh, en] of sortedPairs) {
    if (zh.length > 1 && text.includes(zh)) {
      text = text.replaceAll(zh, ` ${en} `);
    }
    const simp = convertTradToSimp(zh);
    if (simp.length > 1 && text.includes(simp)) {
      text = text.replaceAll(simp, ` ${en} `);
    }
  }

  if (!/[\u4e00-\u9fa5]/.test(text)) {
    return text.replace(/\s+/g, ' ').replace(/\s+([,\.!\?:;])/g, '$1').trim();
  }

  // 3. Photography & Stock critique term replacements with proper spacing
  const termMap: [RegExp, string][] = [
    [/商業需求/g, ' commercial demand '],
    [/商業價值/g, ' commercial value '],
    [/商業吸引力/g, ' commercial appeal '],
    [/商業圖庫/g, ' commercial stock library '],
    [/圖庫審核/g, ' stock audit '],
    [/通過率/g, ' approval rate '],
    [/熱門素材/g, ' trending stock asset '],
    [/熱銷款/g, ' bestselling asset '],
    [/必備款/g, ' must-have asset '],
    [/主視覺/g, ' hero visual '],
    [/大數據/g, ' big data '],
    [/行銷/g, ' marketing '],
    [/創業/g, ' startup '],
    [/筆電/g, ' laptop '],
    [/筆記型電腦/g, ' laptop '],
    [/鍵盤/g, ' keyboard '],
    [/暗部/g, ' shadow details '],
    [/層次/g, ' depth and tones '],
    [/光暈/g, ' glare bloom '],
    [/擴散/g, ' diffusion '],
    [/干擾/g, ' distraction '],
    [/線上課程/g, ' online courses '],
    [/教學平台/g, ' educational platform '],
    [/陰影/g, ' shadows '],
    [/立體深度/g, ' 3D spatial depth '],
    [/立體感/g, ' 3D dimension '],
    [/服裝/g, ' clothing '],
    [/紙箱/g, ' packaging box '],
    [/商標/g, ' trademarks '],
    [/外露/g, ' visible '],
    [/上架/g, ' stock licensing approval '],
    [/背景/g, ' background '],
    [/雜物/g, ' clutter '],
    [/焦點/g, ' focal point '],
    [/動作/g, ' action '],
    [/機器人/g, ' robot '],
    [/材質/g, ' material texture '],
    [/金屬/g, ' metallic '],
    [/反光/g, ' reflection '],
    [/親和力/g, ' visual warmth '],
    [/安全帽/g, ' hard hat '],
    [/標誌/g, ' logo '],
    [/報告/g, ' reports '],
    [/留白/g, ' copy space '],
    [/空間/g, ' space '],
    [/排版/g, ' typography layout '],
    [/螢幕/g, ' screen '],
    [/圖表/g, ' dashboard chart '],
    [/替代/g, ' replace with '],
    [/對比/g, ' contrast '],
    [/畫面/g, ' frame '],
    [/壺嘴/g, ' kettle spout '],
    [/細節/g, ' details '],
    [/精緻/g, ' refined '],
    [/社群媒體/g, ' social media '],
    [/雜誌/g, ' magazines '],
    [/餐飲/g, ' food and beverage '],
    [/手錶/g, ' smartwatch '],
    [/侵權/g, ' infringement '],
    [/金融/g, ' fintech '],
    [/銀行/g, ' banking '],
    [/廣告/g, ' advertising '],
    [/加密貨幣/g, ' cryptocurrency '],
    [/遠距工作/g, ' remote work '],
    [/部落格/g, ' blog '],
    [/修圖/g, ' photo retouching '],
    [/抹除/g, ' erase '],
    [/構圖/g, ' composition '],
    [/光影/g, ' lighting and shadows '],
    [/表現/g, ' performance '],
    [/缺陷/g, ' flaws '],
    [/極高/g, ' very high '],
    [/適合/g, ' suitable for '],
    [/建議/g, ' recommendation: '],
    [/優化/g, ' optimize '],
    [/調整/g, ' adjust '],
    [/提升/g, ' enhance '],
    [/避免/g, ' avoid '],
    [/保持/g, ' maintain '],
    [/清晰/g, ' sharp '],
    [/柔和/g, ' soft '],
    [/自然/g, ' natural '],
    [/強烈/g, ' strong '],
    [/完美/g, ' perfect '],
    [/高調/g, ' high-key '],
    [/暗調/g, ' moody dark '],
    [/微距/g, ' macro '],
    [/高光/g, ' highlights '],
    [/過曝/g, ' overexposed '],
    [/過亮/g, ' overly bright '],
    [/飽和度/g, ' color saturation '],
    [/色調/g, ' color grading '],
    [/景深/g, ' depth of field '],
    [/對焦/g, ' focusing '],
    [/微調/g, ' fine-tune '],
    [/增強/g, ' boost '],
    [/減少/g, ' reduce '],
    [/去除/g, ' remove '],
    [/確保/g, ' ensure '],
    [/具備/g, ' featuring '],
    [/呈現/g, ' presenting '],
    [/展現/g, ' showcasing '],
    [/包含/g, ' including '],
    [/搭配/g, ' paired with '],
    [/採用/g, ' adopting '],
    [/利用/g, ' utilizing '],
    [/捕捉/g, ' capturing '],
    [/品質/g, ' quality '],
    [/素材/g, ' asset '],
    [/買家/g, ' buyers '],
    [/需求/g, ' demand '],
    [/極佳/g, ' excellent '],
    [/熱銷/g, ' bestselling '],
    [/適當/g, ' appropriate '],
    [/適度/g, ' moderate '],
    [/充裕/g, ' ample '],
    [/無明顯/g, ' no significant '],
    [/經 AI 審核/g, ' AI Audit: '],
    [/自訂/g, ' Custom '],
    [/樣本/g, ' Sample ']
  ];

  termMap.forEach(([rx, replacement]) => {
    text = text.replace(rx, replacement);
  });

  // Convert Chinese punctuation to English
  text = text
    .replace(/，/g, ', ')
    .replace(/。/g, '. ')
    .replace(/：/g, ': ')
    .replace(/；/g, '; ')
    .replace(/！/g, '! ')
    .replace(/？/g, '? ')
    .replace(/（/g, ' (')
    .replace(/）/g, ') ')
    .replace(/「|」|《|》/g, '"');

  // Any remaining Chinese characters are replaced with space-padded contextual terms
  if (/[\u4e00-\u9fa5]/.test(text)) {
    text = text.replace(/[\u4e00-\u9fa5]+/g, ' photo detail ');
  }

  // Format spacing cleanly
  text = text
    .replace(/\s+/g, ' ')
    .replace(/\s+([,\.!\?:;])/g, '$1')
    .trim();

  return text || 'Commercial photo quality verified with high stock market potential.';
};

const getDiagnosticIssueList = (rawText: string, currentLang: Language = 'zh'): string[] => {
  if (!rawText || !rawText.trim()) {
    const formattedDefault = formatContentText('⚠️ 經 AI 審核構圖與光影表現良好，無明顯商業缺陷。', currentLang);
    return [formattedDefault];
  }
  
  // Split by newlines first
  let lines = rawText.split('\n').map((s) => s.trim()).filter(Boolean);
  if (lines.length === 1 && (rawText.includes('。') || rawText.includes('.'))) {
    const splitChar = rawText.includes('。') ? '。' : '.';
    const periodSplit = rawText.split(splitChar).map((s) => s.trim()).filter(Boolean);
    if (periodSplit.length > 1) {
      lines = periodSplit.filter(Boolean);
    }
  }

  return lines.map((line) => {
    // Strip redundant leading symbols if already present to prevent duplication
    const cleanLine = line.replace(/^(?:[⚠️🔴⭕❗⚡!•\-\*]|\d+\.|\d+[\)\.]|\s)+/, '').trim();
    let translated = formatContentText(cleanLine, currentLang);
    if (currentLang === 'en' && /[\u4e00-\u9fa5]/.test(translated)) {
      translated = translateChineseToEnglishFallback(cleanLine);
    }
    return translated ? `⚠️ ${translated}` : line;
  });
};

const renderAiStrategyText = (text: string, currentLang: Language): string => {
  return formatContentText(text, currentLang);
};

const TRAD_TO_SIMP_MAP: Record<string, string> = {
  '體': '体', '國': '国', '畫': '画', '圖': '图', '構': '构', '點': '点',
  '質': '质', '頂': '顶', '級': '级', '標': '标', '準': '准', '換': '换',
  '經': '经', '銷': '销', '業': '业', '節': '节', '慶': '庆', '熱': '热',
  '搜': '搜', '診': '诊', '斷': '断', '缺': '缺', '陷': '陷', '銳': '锐',
  '利': '利', '過': '过', '曝': '曝', '現': '现', '象': '象', '設': '设',
  '備': '备', '競': '竞', '爭': '争', '簽': '签', '題': '题', '顯': '显',
  '示': '示', '儲': '储', '存': '存', '鎖': '锁', '定': '定', '創': '创',
  '範': '范', '例': '例', '輯': '辑', '壓': '压', '燈': '灯', '氣': '气',
  '氛': '氛', '條': '条', '調': '调', '對': '对', '幾': '几', '議': '议',
  '整': '整', '角': '角', '留': '留', '空': '空', '間': '间', '邊': '边',
  '緣': '缘', '升': '升', '審': '审', '核': '核', '率': '率', '達': '达',
  '軟': '软', '預': '预', '製': '制', '複': '复', '傳': '传', '屬': '属',
  '訂': '订', '詞': '词', '關': '关', '鍵': '键', '鏡': '镜', '頭': '头',
  '腳': '脚', '側': '侧', '膚': '肤', '動': '动', '態': '态', '場': '场',
  '景': '景', '優': '优', '數': '数', '據': '据', '實': '实', '時': '时',
  '報': '报', '表': '表', '匯': '汇', '出': '出', '選': '选', '擇': '择',
  '張': '张', '片': '片', '組': '组', '合': '合', '務': '务', '類': '类',
  '項': '项', '發': '发', '滿': '满', '意': '意', '線': '线', '廣': '广',
  '告': '告', '戰': '战', '略': '略', '風': '风', '格': '格', '產': '产',
  '品': '品', '導': '导', '向': '向', '覽': '览', '開': '开', '始': '始',
  '結': '结', '果': '果', '寫': '写', '刪': '删', '除': '除', '還': '还',
  '原': '原', '恢': '恢', '為': '为', '與': '与', '於': '于', '處': '处',
  '並': '并', '個': '个', '這': '这', '讓': '让', '後': '后', '將': '将',
  '從': '从', '愛': '爱', '辦': '办', '變': '变', '別': '别', '補': '补',
  '財': '财', '長': '长', '車': '车', '稱': '称', '成': '成', '遲': '迟',
  '齒': '齿', '衝': '冲', '蟲': '虫', '初': '初', '觸': '触', '帶': '带',
  '單': '单', '擔': '担', '當': '当', '黨': '党', '電': '电', '東': '东',
  '讀': '读', '獨': '独', '頓': '顿', '罰': '罚', '法': '法', '繁': '繁',
  '飛': '飞', '費': '费', '分': '分', '蓋': '盖', '趕': '赶', '給': '给',
  '購': '购', '觀': '观', '歸': '归', '海': '海', '漢': '汉', '號': '号',
  '黑': '黑', '紅': '红', '護': '护', '劃': '划', '華': '华', '話': '话',
  '懷': '怀', '環': '环', '黃': '黄', '揮': '挥', '輝': '辉', '迴': '回',
  '會': '会', '繪': '绘', '極': '极', '記': '记', '繼': '继', '價': '价',
  '駕': '驾', '檢': '检', '簡': '简', '見': '见', '健': '健', '建': '建',
  '獎': '奖', '醬': '酱', '交': '交', '膠': '胶', '較': '较', '接': '接',
  '解': '解', '介': '介', '借': '借', '僅': '仅', '進': '进', '緊': '紧',
  '錦': '锦', '盡': '尽', '近': '近', '靜': '静', '舊': '旧', '具': '具',
  '劇': '剧', '絕': '绝', '凱': '凯', '刊': '刊', '考': '考', '科': '科',
  '顆': '颗', '殼': '壳', '客': '客', '課': '课', '肯': '肯', '控': '控',
  '誇': '夸', '塊': '块', '快': '快', '寬': '宽', '礦': '矿', '況': '况',
  '虧': '亏', '來': '来', '藍': '蓝', '欄': '栏', '爛': '烂', '朗': '朗',
  '勞': '劳', '累': '累', '冷': '冷', '離': '离', '禮': '礼', '理': '理',
  '裏': '里', '厲': '厉', '立': '立', '麗': '丽', '兩': '两', '聯': '联',
  '連': '连', '涼': '凉', '糧': '粮', '量': '量', '療': '疗', '瞭': '了',
  '料': '料', '烈': '烈', '獵': '猎', '林': '林', '臨': '临', '靈': '灵',
  '嶺': '岭', '另': '另', '劉': '刘', '流': '流', '六': '六', '龍': '龙',
  '樓': '楼', '漏': '漏', '陸': '陆', '錄': '录', '輪': '轮', '論': '论',
  '羅': '罗', '邏': '逻', '麻': '麻', '馬': '马', '碼': '码', '螞': '蚂',
  '買': '买', '賣': '卖', '漫': '漫', '貓': '猫', '毛': '毛', '冒': '冒',
  '麼': '么', '沒': '没', '美': '美', '門': '门', '夢': '梦', '謎': '谜',
  '米': '米', '密': '密', '免': '免', '苗': '苗', '描': '描', '秒': '秒',
  '妙': '妙', '滅': '灭', '名': '名', '明': '明', '鳴': '鸣', '命': '命',
  '膜': '膜', '磨': '磨', '模': '模', '摩': '摩', '魔': '魔', '抹': '抹',
  '末': '末', '謀': '谋', '某': '某', '母': '母', '畝': '亩', '木': '木',
  '目': '目', '拿': '拿', '哪': '哪', '鈉': '钠', '納': '纳', '那': '那',
  '奶': '奶', '男': '男', '難': '难', '腦': '脑', '鬧': '闹', '內': '内',
  '能': '能', '泥': '泥', '擬': '拟', '逆': '逆', '年': '年', '念': '念',
  '鳥': '鸟', '您': '您', '寧': '宁', '牛': '牛', '農': '农', '濃': '浓',
  '努': '努', '怒': '怒', '女': '女', '暖': '暖', '歐': '欧', '偶': '偶',
  '盤': '盘', '判': '判', '龐': '庞', '拋': '抛', '炮': '炮', '培': '培',
  '賠': '赔', '陪': '陪', '配': '配', '噴': '喷', '盆': '盆', '朋': '朋',
  '棚': '棚', '批': '批', '皮': '皮', '脾': '脾', '篇': '篇', '偏': '偏',
  '票': '票', '飄': '飘', '頻': '频', '憑': '凭', '頗': '颇', '破': '破',
  '鋪': '铺', '仆': '仆', '朴': '朴', '七': '七', '妻': '妻', '淒': '凄',
  '漆': '漆', '齊': '齐', '其': '其', '奇': '奇', '歧': '歧', '騎': '骑',
  '棋': '棋', '旗': '旗', '乞': '乞', '企': '企', '啟': '启', '豈': '岂',
  '棄': '弃', '汽': '汽', '千': '千', '遷': '迁', '牽': '牵', '前': '前',
  '錢': '钱', '鉗': '钳', '乾': '干', '潛': '潜', '淺': '浅', '遣': '遣',
  '欠': '欠', '歉': '歉', '槍': '枪', '牆': '墙', '強': '强', '搶': '抢',
  '敲': '敲', '喬': '乔', '橋': '桥', '瞧': '瞧', '巧': '巧', '切': '切',
  '且': '且', '愜': '惬', '親': '亲', '侵': '侵', '欽': '钦', '秦': '秦',
  '琴': '琴', '禽': '禽', '勤': '勤', '青': '青', '氫': '氢', '輕': '轻',
  '傾': '倾', '清': '清', '情': '情', '晴': '晴', '頃': '顷', '請': '请',
  '窮': '穷', '丘': '丘', '秋': '秋', '求': '求', '球': '球', '區': '区',
  '趨': '趋', '驅': '驱', '屈': '屈', '曲': '曲', '取': '取', '娶': '娶',
  '去': '去', '圈': '圈', '全': '全', '權': '权', '泉': '泉', '拳': '拳',
  '犬': '犬', '勸': '劝', '卻': '却', '確': '确', '雀': '雀', '饒': '饶',
  '人': '人', '仁': '仁', '忍': '忍', '韌': '韧', '任': '任', '認': '认',
  '絨': '绒', '榮': '荣', '容': '容', '柔': '柔', '肉': '肉', '如': '如',
  '儒': '儒', '入': '入', '瑞': '瑞', '潤': '润', '若': '若', '弱': '弱',
  '撒': '撒', '傘': '伞', '散': '散', '桑': '桑', '嗓': '嗓', '掃': '扫',
  '殺': '杀', '紗': '纱', '傻': '傻', '閃': '闪', '陝': '陕',
  '扇': '扇', '傷': '伤', '賞': '赏', '上': '上', '尚': '尚', '燒': '烧',
  '少': '少', '紹': '绍', '奢': '奢', '舌': '舌', '舍': '舍', '社': '社',
  '射': '射', '涉': '涉', '申': '申', '身': '身', '深': '深', '神': '神',
  '甚': '甚', '慎': '慎', '生': '生', '聲': '声', '勝': '胜', '繩': '绳',
  '省': '省', '聖': '圣', '盛': '盛', '剩': '剩', '師': '师', '失': '失',
  '獅': '狮', '施': '施', '濕': '湿', '詩': '诗', '屍': '尸', '十': '十',
  '識': '识', '史': '史', '矢': '矢', '使': '使', '駛': '驶', '士': '士',
  '氏': '氏', '世': '世', '市': '市', '式': '式', '事': '事', '侍': '侍',
  '勢': '势', '視': '视', '飾': '饰', '室': '室', '是': '是', '適': '适',
  '噬': '噬', '手': '手', '首': '首', '壽': '寿', '受': '受', '獸': '兽',
  '售': '售', '授': '授', '瘦': '瘦', '書': '书', '輸': '输', '舒': '舒',
  '熟': '熟', '暑': '暑', '術': '术', '束': '束', '述': '述', '樹': '树',
  '刷': '刷', '衰': '衰', '雙': '双', '爽': '爽', '誰': '谁', '水': '水',
  '稅': '税', '睡': '睡', '順': '顺', '說': '说', '絲': '丝', '司': '司',
  '私': '私', '思': '思', '死': '死', '四': '四', '寺': '寺', '似': '似',
  '飼': '饲', '松': '松', '頌': '颂', '送': '送', '蘇': '苏', '俗': '俗',
  '訴': '诉', '塑': '塑', '酸': '酸', '算': '算', '隨': '随', '歲': '岁',
  '孫': '孙', '損': '损', '縮': '缩', '所': '所', '他': '他', '它': '它',
  '她': '她', '塔': '塔', '踏': '踏', '胎': '胎', '臺': '台', '抬': '抬',
  '泰': '泰', '貪': '贪', '攤': '摊', '壇': '坛', '談': '谈', '彈': '弹',
  '坦': '坦', '探': '探', '湯': '汤', '堂': '堂', '躺': '躺', '燙': '烫',
  '濤': '涛', '逃': '逃', '桃': '桃', '陶': '陶', '討': '讨', '特': '特',
  '騰': '腾', '梯': '梯', '剔': '剔', '提': '提', '替': '替', '天': '天',
  '添': '添', '填': '填', '田': '田', '甜': '甜', '挑': '挑', '跳': '跳',
  '貼': '贴', '鐵': '铁', '廳': '厅', '聽': '听', '停': '停', '庭': '庭',
  '挺': '挺', '通': '通', '同': '同', '桐': '桐', '銅': '铜', '童': '童',
  '統': '统', '痛': '痛', '投': '投', '透': '透', '凸': '凸', '徒': '徒',
  '途': '途', '塗': '涂', '土': '土', '吐': '吐', '兔': '兔', '團': '团',
  '推': '推', '腿': '腿', '退': '退', '吞': '吞', '托': '托', '脫': '脱',
  '馱': '驮', '妥': '妥', '拓': '拓', '唾': '唾', '挖': '挖', '哇': '哇',
  '蛙': '蛙', '窪': '洼', '瓦': '瓦', '襪': '袜', '威': '威', '微': '微',
  '危': '危', '圍': '围', '違': '违', '唯': '唯', '維': '维', '偉': '伟',
  '偽': '伪', '尾': '尾', '緯': '纬', '委': '委', '衛': '卫', '未': '未',
  '位': '位', '味': '味', '畏': '畏', '溫': '温', '文': '文', '聞': '闻',
  '紋': '纹', '穩': '稳', '問': '问', '翁': '翁', '渦': '涡', '窩': '窝',
  '我': '我', '臥': '卧', '握': '握', '烏': '乌', '污': '污', '誣': '诬',
  '無': '无', '吳': '吴', '五': '五', '午': '午', '伍': '伍', '武': '武',
  '侮': '侮', '舞': '舞', '物': '物', '誤': '误', '悟': '悟', '霧': '雾',
  '夕': '夕', '西': '西', '吸': '吸', '希': '希', '昔': '昔', '析': '析',
  '犧': '牺', '息': '息', '席': '席', '習': '习', '洗': '洗', '喜': '喜',
  '戲': '戏', '系': '系', '細': '细', '隙': '隙', '瞎': '瞎', '峽': '峡',
  '俠': '侠', '狹': '狭', '下': '下', '嚇': '吓', '夏': '夏', '先': '先',
  '仙': '仙', '纖': '纤', '鮮': '鲜', '閒': '闲', '賢': '贤', '弦': '弦',
  '銜': '衔', '嫌': '嫌', '險': '险', '縣': '县', '限': '限', '香': '香',
  '箱': '箱', '鑲': '镶', '詳': '详', '降': '降', '想': '想', '響': '响',
  '巷': '巷', '像': '像', '消': '消', '宵': '宵', '蕭': '萧', '硝': '硝',
  '小': '小', '曉': '晓', '孝': '孝', '效': '效', '校': '校', '笑': '笑',
  '些': '些', '歇': '歇', '協': '协', '邪': '邪', '脅': '胁', '斜': '斜',
  '諧': '谐', '攜': '携', '泄': '泄', '瀉': '泻', '卸': '卸', '屑': '屑',
  '械': '械', '謝': '谢', '心': '心', '忻': '忻', '辛': '辛', '新': '新',
  '薪': '薪', '信': '信', '興': '兴', '星': '星', '腥': '腥', '刑': '刑',
  '行': '行', '形': '形', '型': '型', '醒': '醒', '杏': '杏', '姓': '姓',
  '幸': '幸', '性': '性', '兄': '兄', '兇': '凶', '胸': '胸', '雄': '雄',
  '熊': '熊', '休': '休', '修': '修', '羞': '羞', '朽': '朽', '秀': '秀',
  '袖': '袖', '繡': '绣', '虛': '虚', '徐': '徐', '許': '许', '序': '序',
  '敘': '叙', '恤': '恤', '續': '续', '軒': '轩', '宣': '宣', '懸': '悬',
  '穴': '穴', '學': '学', '雪': '雪', '血': '血', '尋': '寻', '巡': '巡',
  '詢': '询', '迅': '迅', '雅': '雅', '亞': '亚', '訝': '讶', '煙': '烟',
  '嚴': '严', '言': '言', '岩': '岩', '沿': '沿', '炎': '炎', '研': '研',
  '鹽': '盐', '眼': '眼', '演': '演', '厭': '厌', '彥': '彦', '宴': '宴',
  '驗': '验', '央': '央', '揚': '扬', '羊': '羊', '陽': '阳', '養': '养',
  '樣': '样', '妖': '妖', '腰': '腰', '搖': '摇', '堯': '尧', '咬': '咬',
  '藥': '药', '要': '要', '耀': '耀', '爺': '爷', '也': '也', '冶': '冶',
  '野': '野', '葉': '叶', '頁': '页', '夜': '夜', '液': '液', '一': '一',
  '伊': '伊', '衣': '衣', '醫': '医', '依': '依', '儀': '仪', '宜': '宜',
  '姨': '姨', '移': '移', '遺': '遗', '疑': '疑', '乙': '乙', '已': '已',
  '以': '以', '藝': '艺', '抑': '抑', '易': '易', '邑': '邑', '役': '役',
  '億': '亿', '逸': '逸', '毅': '毅', '隱': '隐', '印': '印', '應': '应',
  '英': '英', '櫻': '樱', '鷹': '鹰', '迎': '迎', '營': '营', '盈': '盈',
  '螢': '萤', '穎': '颖', '硬': '硬', '映': '映', '喲': '哟', '擁': '拥',
  '庸': '庸', '永': '永', '詠': '咏', '泳': '泳', '勇': '勇', '湧': '涌',
  '用': '用', '由': '由', '郵': '邮', '猶': '犹', '油': '油', '游': '游',
  '友': '友', '有': '有', '又': '又', '右': '右', '幼': '幼', '誘': '诱',
  '余': '余', '魚': '鱼', '娛': '娱', '漁': '渔', '愉': '愉', '宇': '宇',
  '羽': '羽', '雨': '雨', '語': '语', '玉': '玉', '育': '育', '域': '域',
  '欲': '欲', '遇': '遇', '獄': '狱', '譽': '誉', '冤': '冤', '元': '元',
  '員': '员', '園': '园', '圓': '圆', '援': '援', '源': '源', '遠': '远',
  '願': '愿', '約': '约', '月': '月', '悅': '悦', '閱': '阅', '雲': '云',
  '勻': '匀', '運': '运', '蘊': '蕴', '災': '灾', '載': '载', '再': '再',
  '在': '在', '讚': '赞', '暫': '暂', '贊': '赞', '臟': '脏', '葬': '葬',
  '遭': '遭', '糟': '糟', '早': '早', '棗': '枣', '藻': '藻', '造': '造',
  '噪': '噪', '燥': '燥', '躁': '躁', '責': '责', '怎': '怎', '增': '增',
  '贈': '赠', '扎': '扎', '渣': '渣', '札': '札', '軋': '轧', '閘': '闸',
  '炸': '炸', '摘': '摘', '宅': '宅', '窄': '窄', '債': '债', '沾': '沾',
  '粘': '粘', '展': '展', '佔': '占', '站': '站', '章': '章', '漲': '涨',
  '掌': '掌', '丈': '丈', '仗': '仗', '帳': '帐', '招': '招', '昭': '昭',
  '找': '找', '沼': '沼', '召': '召', '兆': '兆', '照': '照', '遮': '遮',
  '折': '折', '哲': '哲', '者': '者', '針': '针', '偵': '侦', '珍': '珍',
  '真': '真', '枕': '枕', '陣': '阵', '震': '震', '鎮': '镇', '征': '征',
  '掙': '挣', '睜': '睁', '蒸': '蒸', '正': '正', '證': '证', '鄭': '郑',
  '政': '政', '之': '之', '支': '支', '隻': '只', '知': '知', '肢': '肢',
  '織': '织', '職': '职', '直': '直', '植': '植', '執': '执', '值': '值',
  '止': '止', '旨': '旨', '紙': '纸', '指': '指', '至': '至', '誌': '志',
  '智': '智', '秩': '秩', '中': '中', '忠': '忠', '終': '终', '鐘': '钟',
  '種': '种', '重': '重', '眾': '众', '舟': '舟', '周': '周', '洲': '洲',
  '株': '株', '諸': '诸', '豬': '猪', '蛛': '蛛', '竹': '竹', '燭': '烛',
  '逐': '逐', '主': '主', '煮': '煮', '囑': '嘱', '注': '注', '助': '助',
  '住': '住', '祝': '祝', '築': '筑', '抓': '抓', '爪': '爪', '轉': '转',
  '撰': '撰', '賺': '赚', '裝': '装', '壯': '壮', '狀': '状', '追': '追',
  '桌': '桌', '灼': '灼', '資': '资', '姿': '姿', '滋': '滋', '子': '子',
  '紫': '紫', '字': '字', '自': '自', '綜': '综', '總': '总', '縱': '纵',
  '走': '走', '奏': '奏', '租': '租', '足': '足', '族': '族', '阻': '阻',
  '祖': '祖', '鑽': '钻', '嘴': '嘴', '最': '最', '罪': '罪',
  '尊': '尊', '遵': '遵', '左': '左', '作': '作', '坐': '坐', '座': '座'
};

const convertTradToSimp = (str: string): string => {
  if (!str) return str;
  let out = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    out += TRAD_TO_SIMP_MAP[char] || char;
  }
  return out;
};

const SIMP_TO_TRAD_MAP: Record<string, string> = {};
Object.entries(TRAD_TO_SIMP_MAP).forEach(([trad, simp]) => {
  SIMP_TO_TRAD_MAP[simp] = trad;
});

const convertSimpToTrad = (str: string): string => {
  if (!str) return str;
  let out = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    out += SIMP_TO_TRAD_MAP[char] || char;
  }
  return out;
};

const PRESET_CHINESE_TO_ENGLISH_MAP: Record<string, string> = {
  // Sample 1
  '💡 科技靈感燈泡與筆電': '💡 Tech Inspiration Lightbulb & Laptop',
  '科技與抽象 AI': 'Tech & Abstract AI',
  '熱門榜首 #01': 'Top Choice #01',
  '這幅視覺作品融合了現代科技與抽象創意。畫面核心是一台打開的筆記型電腦，其上方懸浮著一顆發光的傳統燈泡，象徵著靈感 (Inspiration) 與創新 (Innovation) 的迸發。螢幕湧現數據網絡與幾何圖形，採用深冷藍與溫暖黃暈散景對比。': 'This visual work merges modern technology with abstract creativity. The core features an open laptop with a glowing incandescent light bulb floating above, symbolizing the burst of inspiration and innovation. Data networks and geometric shapes emerge from the screen, set against a dark blue and warm yellow bokeh contrast.',
  '筆電鍵盤邊緣若加強局部暗部層次，可減少光暈擴散干擾。': 'Enhancing dark contrast along laptop keyboard edges can reduce glare diffusion.',
  '商業需求極高，適合科技 AI、創業與大數據行銷主視覺。': 'High commercial demand; ideal as hero visuals for Tech AI, startups, and Big Data marketing.',
  '光影對比度極佳，燈泡燈絲亮部細節保留完整，背景散景顆粒極具商業張力。': 'Excellent lighting contrast; bulb filament highlight details are preserved, with commercial bokeh depth.',
  '建議相機鏡頭：35mm 或 50mm f/1.8 大光圈定焦鏡，配合穩固三腳架。': 'Recommended lens: 35mm or 50mm f/1.8 prime lens with a sturdy tripod.',
  '主光源採 45 度側面暖光投射於主體，背景加設深藍色 LED 氛圍燈及大光圈散景星芒光斑。': 'Main light: 45° warm side light on subject. Background: deep blue LED accent lights with bokeh glare.',
  '採用三分法將發光燈泡置於畫面黃金交叉點，筆電鍵盤形成自然的空間引導線。': 'Rule of thirds with bulb at golden intersection; laptop keyboard creates natural leading lines.',
  '深琥珀橘 (Warm Amber) 與深海藍 (Deep Navy) 主副色彩對比組合。': 'Contrast pairing of Warm Amber and Deep Navy.',

  // Sample 2
  '📚 數據科學與電子學習': '📚 Data Science & E-Learning',
  '教育與大數據': 'Education & Big Data',
  '熱銷爆款 #02': 'Bestseller #02',
  '採用等角透視 (Isometric) 展現現代數據科學與數位學習概念。畫面以開展筆記型電腦為底座，上方疊放標註 DATA SCIENCE 與 CODE 的書籍，四周環繞霓虹 UI 圖表。': 'Isometric perspective presenting data science and e-learning concepts. Features an open laptop as a base with books labeled DATA SCIENCE and CODE stacked on top, surrounded by neon UI graphs.',
  '書本背面的陰影可略微加深以提升立體深度。': 'Slightly deepening back book shadows will enhance 3D depth.',
  '適合線上課程、大數據教學平台及商業圖庫熱門圖素材。': 'Suitable for online courses, data platforms, and high-demand commercial stock assets.',
  '圖示與字樣清晰無誤，向量線條精準，留白區域適合文字排版。': 'Icons and typography are crisp; vector lines are precise with generous copy space.',
  '矢量繪圖軟體或 3D 渲染器（C4D / Blender / Octane Render）。': 'Vector design software or 3D renderer (C4D / Blender / Octane Render).',
  '體積光與霓虹邊緣光（Neon Edge Glow），營造發光數位圖表質感。': 'Volumetric light with neon edge glow creating luminous digital chart textures.',
  '精確 45 度等角透視 (Isometric Grid)，保持圖形俐落對齊。': 'Precise 45° isometric grid keeping elements crisp and neatly aligned.',
  '暗青色 (Teal Navy) 搭配青綠色與粉紫自發光元件。': 'Teal Navy paired with cyan and magenta self-luminous elements.',

  // Sample 3
  '📦 電商包裹物流交接': '📦 E-Commerce Package Logistics Handover',
  '物流與電商': 'Logistics & E-Commerce',
  '高轉換率 #03': 'High Conversion #03',
  '電商與快遞物流高需求題材。主體明確，焦點集中於快遞員遞交包裹手勢，畫面明亮且專業。無品牌商標問題，通過商業圖庫高審查標準。': 'High-demand e-commerce and logistics theme. Clear subject focusing on courier package delivery gesture, bright and professional with zero trademark issues.',
  '背景可稍微減少雜物，讓眼神更集中於物流交接動作。': 'Slightly reducing background clutter will focus attention on the delivery handover.',
  '絕佳熱銷素材！請確保服裝及紙箱無任何商標外露即可直接上架。': 'Top selling stock asset! Ensure clothing and boxes are 100% unbranded for direct submission.',
  '焦點精準停留在紙箱纖維與交接雙手，無任何潛在商標侵權風險。': 'Sharp focus on cardboard texture and handing gesture, zero trademark infringement risk.',
  '全片幅單眼 + 85mm f/1.4 人像鏡頭，捕捉真實手部細節與景深。': 'Full-frame DSLR + 85mm f/1.4 portrait lens capturing hand details and shallow depth.',
  '高調柔和自然光，搭配柔光傘補足快遞員手部與紙箱紋理。': 'High-key soft natural light with softbox fill on hands and cardboard texture.',
  '特寫交接動作，紙箱置於中央三分線上，背景綠植溫暖虛化。': 'Close-up on delivery handover; box on rule of thirds line with warm blurred background plants.',
  '牛皮紙原色 (Kraft Brown) 與快遞藍 (Courier Blue) 品牌色。': 'Kraft Brown and Courier Blue brand palette.',

  // Sample 4
  '🤖 智慧醫療與 AI 機器人': '🤖 Smart Healthcare & AI Robot',
  'AI 醫療科技': 'AI Healthcare Tech',
  '精選範例 #04': 'Featured Sample #04',
  '融合現代智慧醫療與人形 AI 機器人助手概念。醫師與光學半透明機器人共同研討 3D 全像人體器官掃描圖，象徵先進精準醫療與科技人文結合。': 'Combines modern smart healthcare with a humanoid AI robot assistant. Doctor and translucent robot analyzing floating 3D holographic organ scans, symbolizing precision medicine.',
  '機器人材質金屬反光若再收斂 10%，畫面會更具親和力。': 'Reducing metallic glare on robot surface by 10% will increase warmth and trust.',
  '生醫科技與藥廠買家高度喜愛，商業吸引力極高。': 'Highly sought after by biotech and pharmaceutical buyers; strong commercial appeal.',
  '呈現高品質未來科技感，光學投影細節真實自然。': 'High-end futuristic sci-fi feel with realistic, natural holographic light projection details.',
  '50mm f/1.2 鏡頭，配合高階 3D 合成或預先繪製的全像投影片。': '50mm f/1.2 lens paired with high-end 3D compositing or pre-rendered hologram slides.',
  '高潔淨無塵室冷白光 (5600K)，搭配全像投影處的藍綠色發光補光。': 'Sterile cleanroom cool white light (5600K) with cyan accent fill around hologram.',
  '醫師與機器人分置兩側形成對角平衡，全像光學掃描像置於中央。': 'Doctor and robot on opposite sides forming diagonal balance with hologram centered.',
  '純潔白 (Clinic White) 與醫學藍 (Holo Cyan)。': 'Clinic White and Holo Cyan.',

  // Sample 5
  '🌱 永續綠能與太陽能電廠': '🌱 Sustainable Green Energy & Solar Farm',
  'ESG 綠能永續': 'ESG Green Energy',
  '高需求趨勢 #05': 'Trending Demand #05',
  '年度搜尋暴增 +290% 的 ESG 永續環保題材。夕陽黃金時刻照射廣袤的太陽能板矩陣，工程師手持平板記錄數據，主題宏大且商業渲染力強。': 'ESG sustainability topic with +290% search growth. Golden hour sunset illuminating a vast solar panel matrix while an engineer logs data on a tablet. Grand scale and high commercial impact.',
  '工作安全帽上請確保無任何工程公司品牌標誌。': 'Ensure hard hat is completely free of any engineering company brand logos.',
  '企業 ESG 報告必備高頻下載素材，前景可預留標題排版空間。': 'Must-have high download asset for corporate ESG reports; leaves ample foreground copy space.',
  '日落光暈非常迷人，展現強烈情緒溫暖感與企業責任氣勢。': 'Captivating sunset flare creating emotional warmth and corporate ESG presence.',
  '24mm 超廣角鏡頭，低角度俯仰拍攝，突出太陽能陣列的大氣景深。': '24mm ultra wide-angle lens, low-angle shot highlighting solar array field scale.',
  '利用日落黃金時刻 (Golden Hour) 逆光透射，形成暖金光暈與太陽能板鏡面反射。': 'Golden Hour backlight producing warm gold lens flare and solar glass reflections.',
  '透過太陽能板排列的消失點幾何線條引導觀眾視覺至工程師主體。': 'Vanishing point geometry of solar panel rows leading viewer eye directly to engineer.',
  '暖黃金與太陽能晶片深藍對比色。': 'Warm Golden Amber and Solar Chip Navy blue contrast.',

  // Sample 6
  '💼 跨國企業戰略簡報': '💼 Corporate Strategy Presentation',
  '商業與團隊': 'Business & Team',
  '經典必備 #06': 'Classic Essential #06',
  '多元族群現代商務團隊圍繞木質會議桌專注研討大數據分析圖表。自然採光透入高層玻璃辦公室，呈現信任、專業與高生產力視覺。': 'Multicultural corporate team reviewing big data analytics charts around a conference table. Natural window light pouring into a high-rise glass office, conveying trust and productivity.',
  '筆電螢幕上的圖表可替換為更高對比的商業 UI 畫面。': 'Replacing laptop dashboard chart with higher contrast commercial UI will pop better.',
  '畫面左上角留白區域適合廣告文案寫作，商業價值高。': 'Top-left copy space is ideal for ad copy overlays; excellent commercial viability.',
  '多元族群面貌真實自然，無擺拍僵硬感，商業吸引力十足。': 'Authentic diverse faces with natural interactions, zero forced poses, strong commercial appeal.',
  '50mm f/1.4 鏡頭，捕捉團隊眼神互動與自然專注表情。': '50mm f/1.4 lens capturing team eye contact and focus.',
  '高樓落地窗自然大側光為主，搭配室內溫暖平衝 Fill Light。': 'High-rise floor-to-ceiling side window light with warm interior fill.',
  '中景環形構圖，以筆電數據螢幕為對焦重點，背景人物維持淺景深。': 'Medium circular grouping focusing on laptop dashboard with shallow depth background.',
  '商務灰藍與原木暖黃。': 'Corporate Slate Blue and Warm Wood Amber.',

  // Sample 7
  '☕ 精品咖啡手沖與生活美學': '☕ Specialty Coffee Pour-Over & Lifestyle',
  '美食與飲食': 'Food & Drink',
  '美學特選 #07': 'Aesthetic Pick #07',
  '暗調沉穩質感咖啡視覺。熱水由細口壺淋入咖啡濾紙，水氣與咖啡香氣蒸騰而上，搭配磨豆機與復古木桌，呈現高質感質感咖啡館風格。': 'Moody dark coffee imagery. Hot water pouring from gooseneck kettle onto ground coffee, steam rising above vintage wooden table, embodying artisanal cafe aesthetics.',
  '壺嘴邊緣若能增加少許金屬反光，細節會更加精緻。': 'Adding subtle metallic edge highlights to kettle spout will enhance detail texture.',
  '社群媒體、精品咖啡雜誌與餐飲品牌極愛之圖片類型。': 'Top seller for social media, specialty coffee magazines, and food & beverage brands.',
  '背光精確將熱氣蒸氣顆粒輪廓勾勒得極其生動誘人。': 'Backlighting outlines steam particles sharply, creating an appetizing aroma visual.',
  '100mm f/2.8 Macro 微距鏡頭，高速度快門 (1/500s) 凝結水滴細節。': '100mm f/2.8 Macro lens with fast shutter (1/500s) freezing water droplets.',
  '單一硬質輪廓光 (Rim Light) 從背側 45 度打入，精確突出蒸氣與水流細節。': 'Single 45° rear rim light catching steam and water flow details.',
  '微距特寫濾杯水流噴濺點，背景深色木質進行暗角處理。': 'Macro close-up on dripper water stream with dark wood vignetting.',
  '深濃縮咖啡棕與黑木暗調。': 'Deep Espresso Brown and Dark Wood.',

  // Sample 8
  '🏃 智慧手錶與運動健康': '🏃 Smartwatch & Sports Fitness',
  '運動與健康': 'Sports & Health',
  '運動爆款 #08': 'Sports Hit #08',
  '戶外晨跑運動員抬起手腕檢視智慧手錶心率與跑步里程，背景晨曦光暈點綴，汗水與專注眼神傳遞出堅持與健康生活方式。': 'Outdoor runner checking smartwatch heart rate during a morning run. Sunrise lens flare, sweat droplets, and focused gaze conveying active lifestyle.',
  '請檢查手錶顯示螢幕圖案是否涉及專利介面侵權。': 'Verify smartwatch interface UI is completely custom and free from UI patents.',
  '穿戴式裝置與健康 App 商業廣告最熱門素材。': 'Highly sought after asset for wearable tech and fitness app advertisements.',
  '汗水顆粒與晨光高光立體感十足，充滿體能挑戰衝勁。': 'Crisp sweat drops and morning sun highlights giving dynamic athletic energy.',
  '70-200mm f/2.8 望遠鏡頭，高速連拍壓縮日出背景。': '70-200mm f/2.8 telephoto lens with high-speed burst compressing sunrise background.',
  '利用晨光 Sunrise 逆光形成肌膚汗水高光亮斑，手錶螢幕使用補光板防發黑。': 'Sunrise backlight accentuating skin sweat beads with reflector fill on watch face.',
  '手臂抬起形成斜向對角動態線，手錶介面佔據黃金交叉點。': 'Raised arm forming diagonal motion vector with smartwatch interface at golden cross.',
  '晨曦暖橘與活力黑矽膠。': 'Sunrise Warm Amber and Matte Black Silicone.',

  // Sample 9
  '📊 3D 立體金融與數位貨幣': '📊 3D Isometric Fintech & Crypto',
  '金融與 3D 插畫': 'Finance & 3D Illustration',
  '高單價 #09': 'High Value #09',
  '3D 立體透視 (Isometric) 金融分析與數位貨幣金幣上升圖表。極具科技感的藍金漸層，適合銀行、Fintech 廣告與加密貨幣投資平台。': '3D isometric financial analytics dashboard with rising gold coins and stock bar charts. Futuristic blue and gold gradient ideal for banking, fintech, and crypto platforms.',
  '背景暗部可加入微弱的網絡點線粒子以增強科技氛圍。': 'Adding subtle particle node networks to dark background will boost tech mood.',
  '全球金融 SaaS、銀行廣告與加密貨幣平台高單價熱銷款。': 'High price-point asset for global finance SaaS, banking ads, and crypto trading apps.',
  '光線追蹤金屬材質極致擬真，柱狀圖高升意象極具說服力。': 'Raytraced metallic reflections are ultra-realistic with compelling growth momentum.',
  'Octane / Redshift 3D 光線追蹤渲染器（非實拍相機）。': 'Octane / Redshift 3D raytracing engine (C4D/Blender).',
  '高質感金屬反射物理材質，雙向藍金漸層主控燈光。': 'Physically based metallic materials with dual blue and gold key lighting.',
  '標準 3D 等角投影格線，金幣與上升柱狀圖呈現由左至右遞增。': 'Standard 3D isometric grid with coins and bar graphs stepping upward left-to-right.',
  '皇室精緻藍 (Royal Blue) 與 24K 閃耀金 (24K Gold)。': 'Royal Blue and 24K Gold.',

  // Sample 10
  '🏡 極簡木質居家與遠距工作': '🏡 Minimalist Home Office & Remote Work',
  '生活風格與室內': 'Lifestyle & Interior',
  '溫暖質感 #10': 'Warm Aesthetic #10',
  '北歐極簡質感 Home Office 工作區。溫暖晨光透過薄紗窗簾灑在木質桌面上，桌上擺放著 MacBook、綠色多肉植物與陶瓷咖啡杯，呈現安寧專注的質感生活。': 'Nordic minimalist home office setup. Warm morning sunlight casting sheer curtain shadows onto a wooden desk with a MacBook, green succulent, and ceramic coffee mug.',
  '筆電上蓋的品牌 Logo 必須透過修圖徹底撫平抹除。': 'Laptop lid brand logo must be completely retouched and smoothed over.',
  '遠距工作、個人部落格與質感生活用品買家必備款。': 'Essential asset for remote work blogs, Scandinavian interior mags, and lifestyle brands.',
  '窗簾幾何陰影增添強烈藝術質感，畫面清新寧靜。': 'Geometric curtain shadow casting adds architectural warmth and peaceful aesthetic.',
  '35mm 廣角鏡頭，俯拍或平拍捕捉整體空間靜謐感。': '35mm wide lens, overhead or eye-level shot capturing serene room atmosphere.',
  '天然陽光穿過百葉窗或薄紗窗簾，於木質桌面投射幾何光影條紋。': 'Natural sunlight through sheer curtains casting geometric shadow stripes on wood.',
  '極簡留白，主體 MacBook 與咖啡杯適度置於畫面右下方。': 'Minimalist copy space framing MacBook and coffee cup in lower-right zone.',
  '大地暖米色 (Warm Beige) 與原木天然紋理。': 'Warm Beige and natural wood grain.',

  // AI Strategy Trend pools
  'Adobe Stock 2026 Q3 商業視覺熱搜趨勢': 'Adobe Stock 2026 Q3 Commercial Visual Trends',
  '永續綠能與零廢棄生活': 'Sustainable Green Energy & Zero-Waste Living',
  '環保包裝、零廢棄與綠色能源（太陽能/風力）的視覺呈現。': 'Visual representations of eco-packaging, zero-waste, and clean green energy (solar/wind).',
  '生成式 AI 工作流': 'Generative AI Workflows',
  '創意人士使用 AI 工具進行設計、程式碼與協作的科技場景。': 'Tech scenes of creatives utilizing AI tools for design, coding, and collaboration.',
  '心理健康與正念福祉': 'Mental Health & Mindfulness Wellness',
  '冥想、正念、居家平靜環境與暖陽身心靈影像。': 'Meditation, mindfulness, serene home environments, and warm sunlight wellness visuals.',
  'Adobe Stock 最新數據顯示：企業對「真實人物運用 AI 輔助工作」與「永續減碳包裝」需求較去年同期大漲 140%，投稿請著重自然光感與多樣性面孔。': 'Adobe Stock data shows 140% YoY surge for "authentic humans using AI" and "sustainable carbon-neutral packaging". Prioritize natural light and diverse models.',
  'Shutterstock 2026 全球高搜尋量關鍵字榜': 'Shutterstock 2026 Global Top Search Volume Rankings',
  '智慧物聯網與物流自動化': 'Smart IoT & Logistics Automation',
  '自動化倉儲、無人機配送、智慧製造與現代供應鏈。': 'Automated warehousing, drone delivery, smart manufacturing, and modern supply chains.',
  '元宇宙與虛擬實境辦公室': 'Metaverse & Virtual Reality Workspace',
  '穿戴式 VR/AR 裝置、數位雙生 (Digital Twins) 與虛擬遠距協作。': 'Wearable VR/AR devices, digital twins, and virtual remote collaboration.',
  '多元包容與銀髮族商機': 'Diversity, Equity & Active Silver Economy',
  '活躍健康銀髮族、多元文化工作團隊與現代包容職場。': 'Active healthy seniors, multicultural teams, and modern inclusive workplace culture.',
  'Shutterstock 趨勢分析指明：「自動化物流」與「銀髮族健康生活」為長尾高單價下載冠軍，建議提供充裕左側或右側文字留白。': 'Shutterstock analysis highlights "automated logistics" and "active senior living" as high-margin winners. Provide clear left or right copy space.',

  // Generic / Custom Uploads
  '自訂作品': 'Custom Asset',
  '若針對邊緣銳利度稍微提升 5%，圖庫審核通過率將達到 100%。': 'Increasing edge sharpness by 5% will boost stock approval rate to 100%.',
  '若針對邊緣銳利度稍微提升 5%，圖庫審核通過率將達到 100%': 'Increasing edge sharpness by 5% will boost stock approval rate to 100%.',
  '品質已達商業頂級標準，可直接匯出 49 IPTC 標籤進行批量上架！': 'Quality meets top commercial standards. Ready to export 49 IPTC tags for batch upload!',
  '背景頂燈區域有過曝現象，亮點略顯刺眼': 'Overexposure detected in top background lighting area; highlights are slightly harsh.',
  '構圖上左側水泥柱所佔比例過大，視覺重心稍微偏左': 'Composition has a heavy pillar on the left, shifting the visual focus off-center.',
  '畫面整體色彩偏淡，對比度與細節層次仍有提升空間': 'Overall color grading is slightly pale; contrast and shadow detail can be enhanced.',
  '建議相機鏡頭：35mm 或 50mm f/1.8 定焦鏡。': 'Recommended lens: 35mm or 50mm f/1.8 prime lens.',
  '推薦使用 35mm 或 50mm f/1.8 大光圈全片幅單眼，配合腳架穩定拍攝。': 'Recommended: 35mm or 50mm f/1.8 prime lens on a full-frame DSLR with tripod.',
  '主光源採 45 度側面軟光，背景輔以氣氛燈。': 'Main lighting: 45° side softbox, background supplemented with accent lights.',
  '側前方 45 度雙燈柔光夾角，底層白色反光板補光填充陰影。': 'Dual 45° key softbox setup with bottom white reflector board for shadow fill.',
  '採用三分法構圖，保持主體清晰突出。': 'Rule of thirds composition, keeping the primary subject sharp and well-framed.',
  '採用三分法則構圖，主體位於交點，周圍預留充裕廣告文案 Copy Space。': 'Rule of thirds placement at key intersections with ample copy space for advertising text.',
  '高對比冷暖色調，突顯商業質感。': 'High contrast cool and warm tones highlighting sleek commercial texture.',
  '現代冷灰 (Modern Slate) 與溫暖主體光影對比。': 'Modern slate gray with warm subject lighting contrast.',
  '主題明確，整體對焦清晰。': 'Clear commercial focus with sharp overall image clarity.',
  '光影細緻，質感高雅，主體極具商業渲染力與吸引力！': 'Refined lighting and elegant texture; high commercial buyer appeal!',
  '部分區域光影過曝或構圖裁切較緊湊。': 'Minor highlight overexposure or tight composition framing.',
  '建議調整視角，給予主體適當留白空間。': 'Recommend adjusting camera angle to provide generous copy space for text overlays.',

  // Screenshot / Custom uploaded brain elves / custom upload strings
  '色彩搭配過於單調，主體與背景均為綠色導致對比度不足。': 'Color palette is overly monochromatic; green-on-green subject and background result in insufficient contrast.',
  '色彩搭配过于单调，主体与背景均为绿色导致对比度不足。': 'Color palette is overly monochromatic; green-on-green subject and background result in insufficient contrast.',
  '色彩搭配過於單調，主體與背景均為綠色導致對比度不足': 'Color palette is overly monochromatic; green-on-green subject and background result in insufficient contrast.',
  '色彩搭配过于单调，主体与背景均为绿色导致对比度不足': 'Color palette is overly monochromatic; green-on-green subject and background result in insufficient contrast.',

  '光影層次較為平淡，絨毛材質的細節與立體感未能充分凸顯。': 'Lighting lacks depth and contrast, failing to accentuate the delicate tactile texture and 3D form of the plush surface.',
  '光影层次较为平淡，绒毛材质的细节与立体感未能充分凸显。': 'Lighting lacks depth and contrast, failing to accentuate the delicate tactile texture and 3D form of the plush surface.',
  '光影層次較為平淡，絨毛材質的細節與立體感未能充分凸顯': 'Lighting lacks depth and contrast, failing to accentuate the delicate tactile texture and 3D form of the plush surface.',
  '光影层次较为平淡，绒毛材质的细节与立体感未能充分凸显': 'Lighting lacks depth and contrast, failing to accentuate the delicate tactile texture and 3D form of the plush surface.',

  '角色眼睛的光斑表情較為呆滯，缺乏商業圖庫所需的生動傳達力。': 'Catchlights in character\'s eyes appear static, lacking the vibrant expressive emotion required for commercial stock assets.',
  '角色眼睛的光斑表情较为呆滞，缺乏商业图库所需的生动传达力。': 'Catchlights in character\'s eyes appear static, lacking the vibrant expressive emotion required for commercial stock assets.',
  '角色眼睛的光斑表情較為呆滯，缺乏商業圖庫所需的生動傳達力': 'Catchlights in character\'s eyes appear static, lacking the vibrant expressive emotion required for commercial stock assets.',
  '角色眼睛的光斑表情较为呆滞，缺乏商业图库所需的生动传达力': 'Catchlights in character\'s eyes appear static, lacking the vibrant expressive emotion required for commercial stock assets.',

  '缺乏情境構圖元素，作為商業概念圖的敘事性略顯單薄。': 'Lacks contextual storytelling elements, making it feel visually thin as a standalone commercial concept asset.',
  '缺乏情境构图元素，作为商业概念图的叙事性略显单薄。': 'Lacks contextual storytelling elements, making it feel visually thin as a standalone commercial concept asset.',
  '缺乏情境構圖元素，作為商業概念圖的敘事性略顯單薄': 'Lacks contextual storytelling elements, making it feel visually thin as a standalone commercial concept asset.',
  '缺乏情境构图元素，作为商业概念图的叙事性略显单薄': 'Lacks contextual storytelling elements, making it feel visually thin as a standalone commercial concept asset.',

  '建議調整背景顏色（例如改成溫暖的淺粉色、米白色或柔和黃色），以提升主體視覺對比。加強三點式攝影燈光，強化主體邊緣光與絨毛的質感層次。此外，可增加眼神光斑 (Catchlight) 使表情更豐富，或在周圍加入如「思考、創意」相關的概念元素（如微型燈泡、筆記本等），大幅增加商業圖庫的實用性與下載率。': 'Recommend adjusting the background color (e.g., warm pastel pink, off-white, or soft yellow) to enhance subject contrast. Strengthen 3-point studio lighting to highlight rim lights and tactile plush texture. Additionally, add eye catchlights and introduce conceptual props (e.g., miniature lightbulbs, notebooks) to significantly boost stock usability and download rates.',
  '建议调整背景颜色（例如改成温暖的浅粉色、米白色或柔和黄色），以提升主体视觉对比。加强三点式摄影灯光，强化主体边缘光与绒毛的质感层次。此外，可增加眼神光斑 (Catchlight) 使表情更丰富，或在周围加入如「思考、创意」相关的概念元素（如微型灯泡、笔记本等），大幅增加商业图库的实用性与下载率。': 'Recommend adjusting the background color (e.g., warm pastel pink, off-white, or soft yellow) to enhance subject contrast. Strengthen 3-point studio lighting to highlight rim lights and tactile plush texture. Additionally, add eye catchlights and introduce conceptual props (e.g., miniature lightbulbs, notebooks) to significantly boost stock usability and download rates.',

  '這張影像呈現了一個極簡主義風格的 3D 擬人化大腦角色。整體設計採用單色調 (Monochromatic) 美學，選用了寧靜的鼠尾草綠 (Sage Green)。主體大腦具有獨特的柔軟毛絨質感，看起來像是由短絨毛或毛氈製成，與大腦原本的生物屬性形成有趣的對比。角色配有一雙大而圓的閃亮眼睛，賦予其「呆萌」與好奇的性格。構圖上極度簡潔，主體居中，背景為乾淨的無縫牆面，配合柔和的棚拍光影，營造出一種既現代又具備療癒感的視覺氛圍。': 'This image features a minimalist 3D anthropomorphic brain character. The design uses a monochromatic aesthetic in calm Sage Green. The subject brain features a soft plush texture, resembling short felt or velvet, creating a playful contrast with organic biology. Big round shiny eyes lend a cute, curious personality. Composition is clean and centered against a seamless studio background with soft lighting, evoking a modern, soothing feel.',
  '这张影像呈现了一个极简主义风格的 3D 拟人化大脑角色。整体设计采用单色调 (Monochromatic) 美学，选用了宁静的鼠尾草绿 (Sage Green)。主体大脑具有独特的柔软毛绒质感，看起来是由短绒毛或毛毡制成，与大脑原本的生物属性形成有趣的对比。角色配有一双大而圆的闪亮眼睛，赋予其「呆萌」与好奇的性格。构图上极度简洁，主体居中，背景为干净的无缝墙面，配合柔和的棚拍光影，营造出一种既现代又具备疗愈感的视觉氛围。': 'This image features a minimalist 3D anthropomorphic brain character. The design uses a monochromatic aesthetic in calm Sage Green. The subject brain features a soft plush texture, resembling short felt or velvet, creating a playful contrast with organic biology. Big round shiny eyes lend a cute, curious personality. Composition is clean and centered against a seamless studio background with soft lighting, evoking a modern, soothing feel.',

  // Custom Upload Image Mappings
  '這張影像採用極具張力的近景構圖，焦點精確地鎖定在安裝於粗糙混凝土柱上的白色圓頂監控攝影機 (CCTV)。鏡頭細節分明，展現出玻璃球面的質感與微弱環境反光。背景運用了大光圈帶來的淺景深效果，將地下停車場的車輛與成排的長條型螢光燈轉化為柔和的散景，不僅突出了主體，也營造出一種冷調、工業化且充滿監視感的氛圍。光線分布均勻，主要來自停車場頂部的人造光源，呈現出標準的現代都市安全設施場景。': 'This image uses a dynamic close-up composition, precisely locking focus on a white dome surveillance camera (CCTV) mounted on a rough concrete pillar. Lens details are crisp, displaying glass spherical texture and subtle ambient reflections. The background leverages shallow depth of field from a wide aperture, blurring underground parking cars and rows of fluorescent lights into soft bokeh—highlighting the subject while creating a cool, industrial, surveillance atmosphere with balanced overhead lighting.',
  '這是一張採用俯視平鋪 (Flat Lay) 視角的概念攝影作品。構圖以中央的木製齒輪為核心，多雙穿著不同顏色鮮豔服裝的手從四周匯聚，象徵多元化與團隊協作。背景為純淨的白色，營造出高調 (High-key) 且現代的極簡主義感。影像中結合了數位圖形元素，包括「E-LEARNING」大寫字體以及圍繞在四周的教育相關圖示 (如書籍、學士帽、電腦、證書等)，強調了科技與教育的融合。光影處理極其均勻，幾乎沒有強烈陰影，呈現出明亮、積極且專業的視覺氛圍。': 'This is a conceptual flat lay photograph featuring wooden central gears encircled by hands in colorful attire, symbolizing diversity and teamwork. A clean high-key white background creates a modern minimalist feel. Digital overlays including "E-LEARNING" typography and education icons (books, grad caps, laptops, certificates) emphasize the integration of tech and learning with soft, shadowless lighting.',
  '這張影像展現了極具專業感的商業攝影風格。構圖上，採用低角度近攝，聚焦於正在筆記型電腦上操作的雙手，建立了強烈的臨場感。運用淺景深技術，將背景中兩位穿著正裝、手持文件的專業人士虛化，有效地突顯了「專注工作」的主題，同時也傳達出團隊協作的氛圍。光線方面，強烈的自然光從側前方射入，產生了溫暖的邊緣光與柔和的陰影，營造出一種明亮、通透且充滿希望的辦公環境。色彩平衡中性偏暖，展現出高效率且和諧的企業文化。': 'This image displays a highly professional commercial stock style. A low-angle close-up focuses on hands operating a silver laptop, establishing an immersive presence. Shallow depth of field blurs two suit-clad professionals holding documents in the background, accentuating focused productivity and teamwork. Strong natural side lighting generates warm rim lights and soft shadows in a bright, modern office setting.',
  '這張視覺作品採用對稱構圖，核心聚焦於畫面中央兩位著西裝商務人士的握手動作。背景是模糊的都市夜景與大型落地窗，營造出高端企業的氛圍。最引人注目的是橫跨握手位置的數位全息世界地圖投影，地圖上佈滿了象徵全球連結的藍色與金色光點與線條。光影處理上，利用了冷暖對比：背景的暖色調燈光與全息投影的冷藍色光輝交織，增強了科技感與未來感，整體傳達出全球化合作、信任與技術驅動的商業願景。': 'This visual work adopts a symmetrical composition centering on a handshake between two suit-clad professionals. A soft blurred city skyline through floor-to-ceiling windows sets an executive tone. A digital holographic world map projection spans the handshake with glowing blue and gold network nodes, blending cool holographic light with warm ambient tones to communicate global trust, connectivity, and tech-driven synergy.',
  '這是一張等距視角 (Isometric) 的 3D 數位插畫，主題聚焦於數位化教育與數據科學學習。構圖中心是一台筆記型電腦，上方堆疊著色彩鮮豔且標註有「DATA SCIENCE」、「FUTURE LEARNING」與「CODE」等字樣的實體書籍，象徵傳統知識與現代科技的結合。視覺亮點在於筆記型電腦螢幕發出的強烈青藍色光芒，以及周圍懸浮的霓虹感全息圖示 (Holographic icons) 與數據圖表，營造出強烈的未來感與科技氛圍。背景採用深色漸層，點綴著細微的光斑，使整體色彩對比鮮明，強化了「知識即力量」與「科技導向學習」的核心訊息。': 'An isometric 3D illustration centering on an open laptop with colorful books stacked on top labeled "DATA SCIENCE", "FUTURE LEARNING", and "CODE". Vibrant cyan screen glow and floating neon holographic icons and data graphs create a strong futuristic tech mood on a dark gradient backdrop.',
  '這張視覺作品採用了充滿科技感與創意的合成構圖。畫面核心是一個發光的傳統鎢絲燈泡，懸浮在顯示著程式碼的筆記型電腦旁，象徵著「創意靈感」與「技術開發」的結合。燈泡散發出暖色調光芒與背景深藍色的冷色調形成鮮明對比，並伴隨著如齒輪、電子郵件、全球網絡等數位圖示，暗示了數位化轉型與溝通的意涵。背景運用了豐富的彩色散景 (Bokeh) 效果與模糊的程式碼片段，營造出一種深邃且充滿未來感的數位空間氛圍。': 'A conceptual high-tech composition featuring a glowing incandescent light bulb floating beside a laptop displaying programming code. Warm bulb glow contrasts against deep blue background tones, accompanied by digital icons for gear, email, and network connectivity, framed by colorful bokeh light spots.',
  '這張視覺影像採用了極具質感的微距攝影，構圖重心聚焦於前景中央的一枚廣式月餅。月餅表面刻有細膩且層次分花卉圖案，展現出油潤的金黃色澤。背景運用了極淺的景深 (Bokeh)，使兩盞古樸的陶製茶杯與散落的紅棗、枸杞呈現柔和的模糊感，營造出深度的空間層次。光影處理上，運用了溫暖且具方向性的金黃色調光線，彷彿午後的陽光灑落在竹簾底座上，勾勒出食物的立體感與細節。整體氛圍充滿了中秋佳節的溫馨、傳統與寧靜感。': 'A high-texture macro photograph centering on a traditional Cantonese mooncake with intricate floral engravings and golden glossy sheen. Shallow depth of field blurs ceramic tea cups, red dates, and goji berries in the background, bathed in warm directional afternoon sunlight across a bamboo mat.',
  '這是一張從高空俯瞰 (鳥瞰圖) 的極簡主義攝影作品，展現了整齊排列在沙灘上的彩色衝浪板。構圖上，畫面被水平地分為三個部分：上方的淺色沙灘、中間呈彩虹色階排列的衝浪板，以及下方清澈的藍色海水與白色碎浪。這種高度對稱且有序的排列創造了一種平靜而愉悅的視覺節奏。光影方面，強烈的直射陽光在衝浪板下方投射出銳利的陰影，增強了物件的立體感與存在感。色彩運用了大膽的彩虹色譜，與自然的沙土色和海洋藍形成強烈對比，充滿了夏日的活力與度假氛圍。': 'A minimalist aerial drone shot of colorful surfboards aligned symmetrically on a sandy beach. Divided horizontally into light sand, rainbow-ordered surfboards, and clear blue ocean waves with sharp midday shadows and vibrant summer energy.',

  // Screenshot sample flaws and advice mappings
  '構圖右側操作員手臂裁剪略顯不自然，邊緣視覺效果稍嫌擁擠。': 'Composition on the right crops operator\'s arm unnaturally, edge framing feels slightly crowded.',
  '構圖右側操作員手臂裁剪略顯不自然，邊緣視覺效果稍嫌擁擠': 'Composition on the right crops operator\'s arm unnaturally, edge framing feels slightly crowded.',
  '車漆表面反射的 LED 燈條光影較為生硬，缺乏柔和的漸層質感。': 'LED light strip reflections on car paint surface appear harsh, lacking smooth soft gradient transitions.',
  '車漆表面反射的 LED 燈條光影較為生硬，缺乏柔和的漸層質感': 'LED light strip reflections on car paint surface appear harsh, lacking smooth soft gradient transitions.',
  '拋光區域周圍的研磨粉粉未飛濺分佈略顯不均，稍微影響畫面潔淨度。': 'Polishing compound dust spray around buffer area is unevenly distributed, subtly affecting image cleanliness.',
  '拋光區域周圍的研磨粉粉未飛濺分佈略顯不均，稍微影響畫面潔淨度': 'Polishing compound dust spray around buffer area is unevenly distributed, subtly affecting image cleanliness.',
  '背景車庫工具牆細節稍顯複雜，稍微分散了對拋光動作的注意力。': 'Background garage tool wall details are slightly cluttered, subtly distracting from polishing action.',
  '背景車庫工具牆細節稍顯複雜，稍微分散了對拋光動作的注意力': 'Background garage tool wall details are slightly cluttered, subtly distracting from polishing action.',

  '背景車輛可能存在車牌模糊不足的微小版權疑慮': 'Background vehicles may have subtle copyright/privacy concerns due to insufficient license plate blurring.',
  '背景車輛可能存在車牌模糊不足的微小版權疑慮。': 'Background vehicles may have subtle copyright/privacy concerns due to insufficient license plate blurring.',
  '畫面左側水泥柱切邊稍嫌緊湊，缺乏延伸感': 'Left edge crop on concrete pillar feels slightly tight, lacking spatial extension.',
  '畫面左側水泥柱切邊稍嫌緊湊，缺乏延伸感。': 'Left edge crop on concrete pillar feels slightly tight, lacking spatial extension.',
  '頂部白色線管在畫面邊緣處截斷較為生硬': 'Top white conduit line is truncated harshly at frame border.',
  '頂部白色線管在畫面邊緣處截斷較為生硬。': 'Top white conduit line is truncated harshly at frame border.',
  '建議在後製處理中將背景車輛的車牌資訊徹底清除以確保商業授權安全。拍攝構圖時可稍微保留多一點空間，讓主體監視器周圍有更多留白，並將配線管引導至自然出畫，提升整體畫面協調度。': 'In post-production retouching, thoroughly remove all license plate details from background vehicles to guarantee commercial licensing safety. When framing the shot, leave slightly more surrounding space around the surveillance camera to provide clean copy space, and align wiring conduits naturally out of frame to elevate overall visual balance and harmony.',
  '建議在後製處理中將背景車輛的車牌資訊徹底移除以確保商業授權安全。拍攝構圖時可稍微保留多一點空間，讓主體監視器周圍有更多留白，並將配線管引導至自然出畫，提升畫面整體協調度。': 'In post-production retouching, thoroughly remove all license plate details from background vehicles to guarantee commercial licensing safety. When framing the shot, leave slightly more surrounding space around the surveillance camera to provide clean copy space, and align wiring conduits naturally out of frame to elevate overall visual balance and harmony.',
  '建议在后制处理中将背景车辆的车牌资讯彻底移除以确保商业授权安全。拍摄构图时可稍微保留多一点空间，让主体监视器周围有更多留白，并将配线管引导至自然出画，提升画面整体协调度。': 'In post-production retouching, thoroughly remove all license plate details from background vehicles to guarantee commercial licensing safety. When framing the shot, leave slightly more surrounding space around the surveillance camera to provide clean copy space, and align wiring conduits naturally out of frame to elevate overall visual balance and harmony.',

  '圖片中直接印有「E-LEARNING」文字，缺乏留白（Copy Space），降低買家自由編輯的意願。': 'Embedded "E-LEARNING" text reduces buyers\' flexibility for custom typography due to lack of copy space.',
  '圖片中直接印有「E-LEARNING」文字，缺乏留白(Copy Space)，降低買家自由編輯的意願。': 'Embedded "E-LEARNING" text reduces buyers\' flexibility for custom typography due to lack of copy space.',
  '周圍添加的向量圖示（Icons）風格較為過時，且硬接在畫面上，破壞了照片的真實感與質感。': 'Surrounding vector icons appear dated and harshly composited, breaking natural photo realism.',
  '周圍添加的向量圖示(Icons)風格較為過時，且硬接在畫面上，破壞了照片的真實感與質感。': 'Surrounding vector icons appear dated and harshly composited, breaking natural photo realism.',
  '光源過於均勻平坦，導致木頭齒輪與手部肌膚缺乏立體感與細節紋理。': 'Lighting is overly flat, causing wooden gears and skin tones to lose tactile 3D depth and texture.',
  '畫面呈現較為程式化的合成感，缺乏自然生動的互動氛圍。': 'Composition feels overly programmatic and synthetic, lacking natural human interaction warmth.',
  '建議在拍攝庫存照片時，儘量保持畫面的純淨度，避免直接在照片上合成文字與平面向量圖示，改為買家預留足夠的留白空間。光源方面，可調配稍微具有方向性的主光源，以突出木質齒輪的微觀紋理與皮膚質感。若需展示概念，可透過實際道具或現代感十足的UI介面進行後製合成，而非使用簡單的平面剪影圖示。': 'When capturing stock photography, we advise maintaining overall visual purity: avoid burning text or flat vector icons directly into the photo, and instead leave generous clean copy space for buyers. Regarding lighting, adjust a slightly directional key light to reveal the microscopic wood grain texture of the gears and natural skin tones. If illustrating abstract concepts, use real props or modern UI overlays during post-compositing rather than basic flat silhouette icons.',
  '建議在拍攝庫存照片時，儘量保持畫面的純淨度，避免直接在照片上合成文字與平面向量圖示，改為買家預留足夠的留白空間。光源方面，可調配稍微具方向性的主光源，以帶出木質齒輪的微觀紋理與皮膚質感。若需展示概念，可透過實際道具或現代感十足的 UI 介面進行後製合成，而非使用簡單的平面剪影圖示。': 'When capturing stock photography, we advise maintaining overall visual purity: avoid burning text or flat vector icons directly into the photo, and instead leave generous clean copy space for buyers. Regarding lighting, adjust a slightly directional key light to reveal the microscopic wood grain texture of the gears and natural skin tones. If illustrating abstract concepts, use real props or modern UI overlays during post-compositing rather than basic flat silhouette icons.',
  '建议在拍摄库存照片时，尽量保持画面的纯净度，避免直接在照片上合成文字与平面向量图示，改为买家预留足够的留白空间。光源方面，可调配稍微具方向性的主光源，以带出木质齿轮的微观纹理与皮肤质感。若需展示概念，可通过实际道具或现代感十足的 UI 界面进行后制合成，而非使用简单的平面剪影图示。': 'When capturing stock photography, we advise maintaining overall visual purity: avoid burning text or flat vector icons directly into the photo, and instead leave generous clean copy space for buyers. Regarding lighting, adjust a slightly directional key light to reveal the microscopic wood grain texture of the gears and natural skin tones. If illustrating abstract concepts, use real props or modern UI overlays during post-compositing rather than basic flat silhouette icons.',

  '畫面右上角窗戶區域有過曝現象，丟失了部分細節': 'Top-right window area exhibits overexposure, clipping highlight details.',
  '畫面右上角窗戶區域有過曝現象，丟失了部分細節。': 'Top-right window area exhibits overexposure, clipping highlight details.',
  '筆記型電腦螢幕反光且未顯示內容，缺乏視覺吸引力': 'Laptop screen reflects glare without content display, missing visual engagement.',
  '筆記型電腦螢幕反光且未顯示內容，缺乏視覺吸引力。': 'Laptop screen reflects glare without content display, missing visual engagement.',
  '手部下方與筆電側面的陰影暗部略為沉重，對比偏高': 'Shadows under hands and laptop side are slightly heavy with high contrast.',
  '手部下方與筆電側面的陰影暗部略為沉重，對比偏高。': 'Shadows under hands and laptop side are slightly heavy with high contrast.',
  '構圖右側空間顯得空洞，視覺重心稍微偏左': 'Right side of composition feels empty, shifting visual weight off-center.',
  '構圖右側空間顯得空洞，視覺重心稍微偏左。': 'Right side of composition feels empty, shifting visual weight off-center.',
  '建議在後製處理中調高對比度與色彩飽和度，增強亮紅車漆的立體鏡面質感。構圖上可適度引導光影漸層，減少表面刺眼的強光帶，並清理周圍雜亂的研磨顆粒，提升整體的商業潔淨感與專業度。': 'Recommend enhancing contrast and color saturation in post-processing to boost the glossy mirror finish of the red paint. Smooth out harsh striplight reflections, clean up stray polishing residue around the buffer, and refine background clutter to elevate commercial appeal and professional feel.',
  '建議拍攝時使用柔光板或反光板適度為手部陰影區補光，並利用補光燈降低高反差過曝問題。筆電螢幕可在後期合成合規且高質量的商業數據介面或UI畫面，以大幅提升商業圖庫的實用性與銷售價值。': 'During shooting, we recommend using a diffuser board or bounce reflector to fill shadows under the hands, and using fill lights to soften high-contrast overexposed areas. In post-processing, composite compliant, high-quality commercial data dashboards or UI mockups onto the laptop screen to substantially boost stock utility and commercial market value.',
  '建議拍攝時使用柔光板或反射板適度為手部陰影區補光，並利用補光燈降低高反差過曝問題。筆電螢幕可在後期合成合規且高品質的商業數據介面或 UI 畫面，以大幅提升商業圖庫的實用性與售價價值。': 'During shooting, we recommend using a diffuser board or bounce reflector to fill shadows under the hands, and using fill lights to soften high-contrast overexposed areas. In post-processing, composite compliant, high-quality commercial data dashboards or UI mockups onto the laptop screen to substantially boost stock utility and commercial market value.',
  '建议拍摄时使用柔光板或反射板适度为手部阴影区补光，并利用补光灯降低高反差过曝光问题。笔电屏幕可在后期合成合规且高质量的商业数据界面或 UI 画面，以大幅提升商业图库的实用性与售价价值。': 'During shooting, we recommend using a diffuser board or bounce reflector to fill shadows under the hands, and using fill lights to soften high-contrast overexposed areas. In post-processing, composite compliant, high-quality commercial data dashboards or UI mockups onto the laptop screen to substantially boost stock utility and commercial market value.',
  '建議拍攝時調整光線角度，減少金屬漆面上的強烈刺眼高光，使車漆質感更均勻；適度縮小光圈，增加作業人員手部與研磨機的清晰範圍；整理背景環境，移除雜亂的工具與耗材，提升商業整潔感與專業度。': 'During shooting, we recommend adjusting the lighting angle to reduce harsh specular hotspots on the metallic paint surface, ensuring an even finish texture. Narrow the aperture slightly to keep the technician\'s hands and rotary polisher sharp. Tidy up background clutter by removing loose tools and supplies to convey higher commercial organization and professionalism.',

  '數位科技圖層（世界地圖）略顯陳腔濫調且合成感較重': 'Digital tech overlay (world map) feels slightly cliché and heavy-handed in compositing.',
  '數位科技圖層（世界地圖）略顯陳腔濫調且合成感較重。': 'Digital tech overlay (world map) feels slightly cliché and heavy-handed in compositing.',
  '數位科技圖層(世界地圖)略顯陳腔濫調且合成感較重': 'Digital tech overlay (world map) feels slightly cliché and heavy-handed in compositing.',
  '數位科技圖層(世界地圖)略顯陳腔濫調且合成感較重。': 'Digital tech overlay (world map) feels slightly cliché and heavy-handed in compositing.',
  '手部握手處與科技光暈交疊的邊緣處理不夠自然': 'Edge blending where hands shake over tech glow appears unnatural.',
  '手部握手處與科技光暈交疊的邊緣處理不夠自然。': 'Edge blending where hands shake over tech glow appears unnatural.',
  '兩邊企業人士的身體裁切較緊，缺乏足夠的構圖呼吸空間': 'Body framing on both executives is tight, lacking sufficient composition breathing room.',
  '兩邊企業人士的身體裁切較緊，缺乏足夠的構圖呼吸空間。': 'Body framing on both executives is tight, lacking sufficient composition breathing room.',
  '夜景背景的焦外虛化品質略為生硬，缺乏自然的空間深度感': 'Bokeh quality on night city backdrop feels slightly harsh, lacking organic spatial depth.',
  '夜景背景的焦外虛化品質略為生硬，缺乏自然的空間深度感。': 'Bokeh quality on night city backdrop feels slightly harsh, lacking organic spatial depth.',
  '建議在進行此類合成時，適當降低科技圖層的密度與光芒強度，使其更自然地融合於環境光中。構圖上可適度退後，保留更多人物輪廓與背景環境，營造更有呼吸感的商業大氣氛圍。': 'When executing this type of composite, we recommend reducing the density and glow intensity of the digital tech overlay so it blends seamlessly with the ambient environmental light. In terms of composition, step back slightly to preserve more of the subject silhouettes and background environment, creating a sophisticated corporate atmosphere with ample breathing room.',
  '建議在進行此類合成時，適當降低科技圖層的密度與光芒強度，使其更自然地融合於環境光中。構圖上可適度後退，保留更多人物輪廓與背景環境，營造更有呼吸感的商業大氣氛圍。': 'When executing this type of composite, we recommend reducing the density and glow intensity of the digital tech overlay so it blends seamlessly with the ambient environmental light. In terms of composition, step back slightly to preserve more of the subject silhouettes and background environment, creating a sophisticated corporate atmosphere with ample breathing room.',
  '建议在进行此类合成时，适当降低科技图层的密度与光芒强度，使其更自然地融合于环境光中。构图上可适度后退，保留更多人物轮廓与背景环境，营造更有呼吸感的商业大气氛围。': 'When executing this type of composite, we recommend reducing the density and glow intensity of the digital tech overlay so it blends seamlessly with the ambient environmental light. In terms of composition, step back slightly to preserve more of the subject silhouettes and background environment, creating a sophisticated corporate atmosphere with ample breathing room.',

  '書本背脊標題文字重複（出現兩次「DATA SCIENCE」），缺乏內容多樣性': 'Book spine titles are repetitive (showing "DATA SCIENCE" twice), lacking content variety.',
  '書本背脊標題文字重複（出現兩次「DATA SCIENCE」），缺乏內容多樣性。': 'Book spine titles are repetitive (showing "DATA SCIENCE" twice), lacking content variety.',
  '書本背脊標題文字重複(出現兩次「DATA SCIENCE」)，缺乏內容多樣性': 'Book spine titles are repetitive (showing "DATA SCIENCE" twice), lacking content variety.',
  '書本背脊標題文字重複(出現兩次「DATA SCIENCE」)，缺乏內容多樣性。': 'Book spine titles are repetitive (showing "DATA SCIENCE" twice), lacking content variety.',
  '懸浮 UI 圖表與圖示佈局顯得雜亂，缺乏明確的主次視覺焦點': 'Floating UI graphs and icons appear cluttered, lacking a clear primary visual focal point.',
  '懸浮 UI 圖表與圖示佈局顯得雜亂，缺乏明確的主次視覺焦點。': 'Floating UI graphs and icons appear cluttered, lacking a clear primary visual focal point.',
  '筆記型電腦鍵盤被書籍完全遮擋，空間比例與擺放結構略顯不自然': 'Laptop keyboard is completely obscured by stacked books, making proportions feel slightly unnatural.',
  '筆記型電腦鍵盤被書籍完全遮擋，空間比例與擺放結構略顯不自然。': 'Laptop keyboard is completely obscured by stacked books, making proportions feel slightly unnatural.',
  '部分霓虹光暈效果過強，導致線條細節與文字邊緣清晰度降低': 'Certain neon glow effects are overly intense, reducing vector line clarity and text edge sharpness.',
  '部分霓虹光暈效果過強，導致線條細節與文字邊緣清晰度降低。': 'Certain neon glow effects are overly intense, reducing vector line clarity and text edge sharpness.',
  '建議修正書籍標題，替換為如「AI & ML」、「PYTHON」或「WEB DEV」等不同主題，增加畫面豐富度；優化周邊懸浮數據介面的排列與對齊，強化主題的連結；適度調整書籍堆疊的位置，使鍵盤局部露出以增強空間立體感；控制發光特效的強度，確保向量線條與文字在放大檢視時依然銳利。': 'We recommend revising the book titles to cover diverse tech subjects such as "AI & ML", "PYTHON", or "WEB DEV" to enhance visual variety. Optimize the alignment and layout of surrounding floating data UI dashboards to reinforce thematic cohesion. Adjust the stacked book positioning slightly to expose part of the laptop keyboard for greater 3D spatial depth. Finally, control the intensity of glow special effects to ensure vector lines and typography remain razor-sharp even when zoomed in.',
  '建議修正書籍標題，替換為如「AI & ML」、「PYTHON」或「WEB DEV」等不同主題，增加畫面豐富度；優化周邊懸浮數據介面的排列與對齊，強化與主題的連結；適度調整書籍堆疊的位置，使鍵盤局部露出以增強空間立體感；控制發光特效的強度，確保向量線條與文字在放大檢視時依然銳利。': 'We recommend revising the book titles to cover diverse tech subjects such as "AI & ML", "PYTHON", or "WEB DEV" to enhance visual variety. Optimize the alignment and layout of surrounding floating data UI dashboards to reinforce thematic cohesion. Adjust the stacked book positioning slightly to expose part of the laptop keyboard for greater 3D spatial depth. Finally, control the intensity of glow special effects to ensure vector lines and typography remain razor-sharp even when zoomed in.',
  '建议修正书籍标题，替换为如「AI & ML」、「PYTHON」或「WEB DEV」等不同主题，增加画面丰富度；优化周边悬浮数据界面的排列与对齐，强化与主题的链接；适度调整书籍堆叠的位置，使键盘局部露出以增强空间立体感；控制发光特效的强度，确保向量线条与文字在放大检视时依然锐利。': 'We recommend revising the book titles to cover diverse tech subjects such as "AI & ML", "PYTHON", or "WEB DEV" to enhance visual variety. Optimize the alignment and layout of surrounding floating data UI dashboards to reinforce thematic cohesion. Adjust the stacked book positioning slightly to expose part of the laptop keyboard for greater 3D spatial depth. Finally, control the intensity of glow special effects to ensure vector lines and typography remain razor-sharp even when zoomed in.',

  '浮動的燈泡與筆記型電腦鍵盤之間缺乏真實的陰影與光影反射，導致合成感較明顯': 'Floating light bulb lacks realistic shadow contact and surface reflections on laptop keyboard.',
  '浮動的燈泡與筆記型電腦鍵盤之間缺乏真實的陰影與光影反射，導致合成感較明顯。': 'Floating light bulb lacks realistic shadow contact and surface reflections on laptop keyboard.',
  '浮動的科技圖示（齒輪、郵件、地球儀）呈扁平貼圖狀態，缺乏與背景光的深度融合': 'Floating tech icons (gears, email, globe) appear as flat overlays, lacking depth integration.',
  '浮動的科技圖示（齒輪、郵件、地球儀）呈扁平貼圖狀態，缺乏與背景光的深度融合。': 'Floating tech icons (gears, email, globe) appear as flat overlays, lacking depth integration.',
  '浮動的科技圖示(齒輪、郵件、地球儀)呈扁平貼圖狀態，缺乏與背景光的深度融合': 'Floating tech icons (gears, email, globe) appear as flat overlays, lacking depth integration.',
  '浮動的科技圖示(齒輪、郵件、地球儀)呈扁平貼圖狀態，缺乏與背景光的深度融合。': 'Floating tech icons (gears, email, globe) appear as flat overlays, lacking depth integration.',
  '燈泡內部的燈絲結構細節稍顯不自然，帶有 AI 生成的痕跡': 'Filament structural details inside light bulb appear slightly unnatural with visible AI artifacts.',
  '燈泡內部的燈絲結構細節稍顯不自然，帶有 AI 生成的痕跡。': 'Filament structural details inside light bulb appear slightly unnatural with visible AI artifacts.',
  '背景散景顆粒與彩色光點分佈略顯雜亂，影響了畫面的簡潔與高級感': 'Background bokeh particles and colored light spots are scattered messily, distracting from visual simplicity.',
  '背景散景顆粒與彩色光點分佈略顯雜亂，影響了畫面的簡潔與高級感。': 'Background bokeh particles and colored light spots are scattered messily, distracting from visual simplicity.',
  '建議在視覺設計中加入更嚴謹的光影物理效果，發光的電燈泡應在筆記型電腦的機身與鍵盤表面投射出對應的暖色反射光與自然陰影。浮動的圖示可增加微弱的發光光暈與輕微的透視模糊，使其更自然地融入科技氛圍中。適度簡化背景雜亂的光點，保持空間通透感，能大幅提升商業圖庫的品質。': 'We recommend incorporating more physically accurate lighting and shadows into the visual design: the glowing light bulb should project realistic warm reflection highlights and subtle cast shadows onto the laptop body and keyboard surface. Floating icons can feature delicate glowing halos and slight depth-of-field blur to integrate seamlessly into the tech atmosphere. Moderately simplifying background clutter and maintaining spatial translucency will significantly elevate commercial stock quality.',
  '建議在視覺設計中加入更嚴謹的光影物理效果，發光的電燈泡應在筆記型電腦的機身與鍵盤表面投射出對應的暖色反光與自然陰影。浮動的圖示可增加微弱的發光光暈與輕微的透視模糊，使其更自然地融入科技氛圍中。適度簡化背景雜亂的光點，保持空間通透感，能大幅提升商業圖庫的品質。': 'We recommend incorporating more physically accurate lighting and shadows into the visual design: the glowing light bulb should project realistic warm reflection highlights and subtle cast shadows onto the laptop body and keyboard surface. Floating icons can feature delicate glowing halos and slight depth-of-field blur to integrate seamlessly into the tech atmosphere. Moderately simplifying background clutter and maintaining spatial translucency will significantly elevate commercial stock quality.',
  '建议在视觉设计中加入更严谨的光影物理效果，发光的电灯泡应在笔记本电脑的机身与键盘表面投射出对应的暖色反光与自然阴影。浮动的图示可增加微弱的发光光晕与轻微的透视模糊，使其更自然地融入科技氛围中。适度简化背景杂乱的光点，保持空间通透感，能大幅提升商业图库的品质。': 'We recommend incorporating more physically accurate lighting and shadows into the visual design: the glowing light bulb should project realistic warm reflection highlights and subtle cast shadows onto the laptop body and keyboard surface. Floating icons can feature delicate glowing halos and slight depth-of-field blur to integrate seamlessly into the tech atmosphere. Moderately simplifying background clutter and maintaining spatial translucency will significantly elevate commercial stock quality.',

  '景深過淺：僅有最前方月餅局部清晰，後方月餅與茶具過度虛化，影響產品細節展示': 'Shallow depth of field: Only front mooncake is sharp; background items overly blurred.',
  '景深過淺：僅有最前方月餅局部清晰，後方月餅與茶具過度虛化，影響產品細節展示。': 'Shallow depth of field: Only front mooncake is sharp; background items overly blurred.',
  '高光區域溢光：茶湯表面與背景竹簾的高光處略微過曝，喪失了材質紋理細節': 'Highlight bloom: Tea surface and background bamboo curtain highlights are blown out.',
  '高光區域溢光：茶湯表面與背景竹簾的高光處略微過曝，喪失了材質紋理細節。': 'Highlight bloom: Tea surface and background bamboo curtain highlights are blown out.',
  '構圖與留白不足：畫面物件較為擁擠，散落的枸杞與茶杯佈局顯得雜亂，缺少適合設計師加字文案的留白空間（Negative Space）': 'Crowded composition: Scattered goji berries and cups feel messy, lacking clean copy space.',
  '構圖與留白不足：畫面物件較為擁擠，散落的枸杞與茶杯佈局顯得雜亂，缺少適合設計師加字文案的留白空間（Negative Space）。': 'Crowded composition: Scattered goji berries and cups feel messy, lacking clean copy space.',
  '構圖與留白不足：畫面物件較為擁擠，散落的枸杞與茶杯佈局顯得雜亂，缺少適合設計師加字文案的留白空間(Negative Space)': 'Crowded composition: Scattered goji berries and cups feel messy, lacking clean copy space.',
  '構圖與留白不足：畫面物件較為擁擠，散落的枸杞與茶杯佈局顯得雜亂，缺少適合設計師加字文案的留白空間(Negative Space)。': 'Crowded composition: Scattered goji berries and cups feel messy, lacking clean copy space.',
  '色溫極端偏暖：整體畫面金黃色調過於飽和，可能限制不同商業情境下的調色彈性': 'Overly warm color temperature: Golden tones are heavily saturated, restricting color grading.',
  '色溫極端偏暖：整體畫面金黃色調過於飽和，可能限制不同商業情境下的調色彈性。': 'Overly warm color temperature: Golden tones are heavily saturated, restricting color grading.',
  '建議將光圈縮小至 f/5.6 或 f/8，使中景的月餅與茶杯保持清晰，保留更多產品紋理與質感。拍攝時可使用柔光板控制高光，避免茶水與竹簾出現刺眼反光。構圖時應適當簡化背景元素，減少雜亂散落的構圖，並在畫面一側保留乾淨的留白區以增加商業實用性。最後，建議降低色溫與飽和度，呈現更自然高雅的東方美學色彩。': 'We recommend narrowing the aperture to f/5.6 or f/8 to keep the mooncakes and teacups in the midground sharp, preserving richer product texture and detail. During shooting, use a diffuser panel to control specular highlights and eliminate harsh reflections on the tea surface and bamboo mat. Simplify the background elements by reducing scattered goji berries, and preserve a clean area of copy space on one side of the frame for high commercial utility. Finally, lower the color temperature and saturation slightly to convey a more natural, elegant Oriental aesthetic palette.',
  '建議將光圈縮小至 f/5.6 或 f/8，使中景的月餅與茶杯保持清晰，保留更多產品紋理與質感。拍攝時可使用柔光板控制高光，避免茶水與竹簾出現刺眼反光。構圖上應適當簡化背景元素，減少亂散落的枸杞，並在畫面一側保留乾淨的留白區以增加商業實用性。最後，建議調降色溫與飽和度，呈現更自然高雅的東方美學色彩。': 'We recommend narrowing the aperture to f/5.6 or f/8 to keep the mooncakes and teacups in the midground sharp, preserving richer product texture and detail. During shooting, use a diffuser panel to control specular highlights and eliminate harsh reflections on the tea surface and bamboo mat. Simplify the background elements by reducing scattered goji berries, and preserve a clean area of copy space on one side of the frame for high commercial utility. Finally, lower the color temperature and saturation slightly to convey a more natural, elegant Oriental aesthetic palette.',
  '建议将光圈缩小至 f/5.6 或 f/8，使中景的月饼与茶杯保持清晰，保留更多产品纹理与质感。拍摄时可使用柔光板控制高光，避免茶水与竹帘出现刺眼反光。构图上应适当简化背景元素，减少零散落的枸杞，并在画面一侧保留干净的留白区以增加商业实用性。最后，建议调降色温与饱和度，呈现更自然高雅的东方美学色彩。': 'We recommend narrowing the aperture to f/5.6 or f/8 to keep the mooncakes and teacups in the midground sharp, preserving richer product texture and detail. During shooting, use a diffuser panel to control specular highlights and eliminate harsh reflections on the tea surface and bamboo mat. Simplify the background elements by reducing scattered goji berries, and preserve a clean area of copy space on one side of the frame for high commercial utility. Finally, lower the color temperature and saturation slightly to convey a more natural, elegant Oriental aesthetic palette.',

  '陽光側射形成的左側陰影較為明顯，稍微破壞了俯拍構圖的對稱與簡約感': 'Side sunlight creates noticeable left shadows, slightly disrupting symmetry of aerial framing.',
  '陽光側射形成的左側陰影較為明顯，稍微破壞了俯拍構圖的對稱與簡約感。': 'Side sunlight creates noticeable left shadows, slightly disrupting symmetry of aerial framing.',
  '色彩飽和度稍高，部分高光區域（如黃色與紅色板面）細節微幅遺失': 'Color saturation is slightly high; highlight details on yellow and red board surfaces are subtly clipped.',
  '色彩飽和度稍高，部分高光區域（如黃色與紅色板面）細節微幅遺失。': 'Color saturation is slightly high; highlight details on yellow and red board surfaces are subtly clipped.',
  '色彩飽和度稍高，部分高光區域(如黃色與紅色板面)細節微幅遺失': 'Color saturation is slightly high; highlight details on yellow and red board surfaces are subtly clipped.',
  '色彩飽和度稍高，部分高光區域(如黃色與紅色板面)細節微幅遺失。': 'Color saturation is slightly high; highlight details on yellow and red board surfaces are subtly clipped.',
  '建議在正午光線漫射時或離軸軟化光源下進行俯拍，減少單側強烈長陰影對極簡對稱性的干擾。適度降低色彩飽和度與高光壓制，保留沙灘微觀顆粒感與衝浪板亮部細節。': 'We recommend shooting when sunlight is soft or diffused to reduce single-sided harsh shadows that interfere with geometric symmetry. Moderately adjust color saturation and tame specular highlights to preserve micro sand grain texture and surfboard highlight details, maintaining high commercial balance.',
  '建議在早晨或傍晚黃金時刻進行拍攝，以獲取更柔和的自然光影與長陰影效果；拍攝時確保無人機高度與角度精準垂直，維持畫面幾何對稱性；後製時可適度調整沙灘與海水色彩，使色彩階調更加豐富自然。': 'We recommend shooting during early morning or late afternoon golden hour to capture softer natural light and elongated shadow accents. Ensure the drone altitude and camera gimbal are strictly perpendicular to maintain precise geometric symmetry. In post-production, fine-tune beach and ocean hue balance for richer, more vibrant natural tonal gradations.',
  '建议在早晨或傍晚黄金时刻进行拍摄，以获取更柔和的自然光影与长阴影效果；拍摄时确保无人机高度与角度精准垂直，维持画面几何对称性；后制时可适度调整沙滩与海水色彩，使色彩阶调更加丰富自然。': 'We recommend shooting during early morning or late afternoon golden hour to capture softer natural light and elongated shadow accents. Ensure the drone altitude and camera gimbal are strictly perpendicular to maintain precise geometric symmetry. In post-production, fine-tune beach and ocean hue balance for richer, more vibrant natural tonal gradations.',
};

const PRESET_ENGLISH_TO_CHINESE_MAP: Record<string, string> = {};
Object.entries(PRESET_CHINESE_TO_ENGLISH_MAP).forEach(([zh, en]) => {
  PRESET_ENGLISH_TO_CHINESE_MAP[en] = zh;
  PRESET_ENGLISH_TO_CHINESE_MAP[en.trim()] = zh;
});

const formatContentText = (text: string, lang: Language): string => {
  if (!text) return text;
  const trimmed = text.trim();
  if (!trimmed) return text;

  // 1. Strip status/warning symbols before checking map
  const leadingSymbolMatch = trimmed.match(/^(?:[⚠️🔴❗⚡📸🔒✍️•\-\*]|\d+\.|\d+[\)\.]|\s)+/);
  const leadingSymbol = leadingSymbolMatch ? leadingSymbolMatch[0] : '';
  const cleanText = trimmed.replace(/^(?:[⚠️🔴❗⚡📸🔒✍️•\-\*]|\d+\.|\d+[\)\.]|\s)+/, '').trim();

  if (lang === 'en') {
    // If text is already in English (no Chinese characters), return text
    if (!/[\u4e00-\u9fa5]/.test(cleanText)) {
      return text;
    }

    // Standardize punctuation for map lookup
    const normalizedClean = cleanText
      .replace(/（/g, '(')
      .replace(/）/g, ')')
      .replace(/：/g, ':')
      .replace(/；/g, ';')
      .replace(/！/g, '!')
      .replace(/？/g, '?')
      .replace(/「|」|《|》/g, '"')
      .replace(/\s+/g, ' ')
      .trim();

    const tradClean = convertSimpToTrad(cleanText);
    const tradNormalized = convertSimpToTrad(normalizedClean);

    const variants = [
      cleanText,
      cleanText + '。',
      cleanText + '.',
      tradClean,
      tradClean + '。',
      tradClean + '.',
      normalizedClean,
      normalizedClean + '。',
      normalizedClean + '.',
      tradNormalized,
      tradNormalized + '。',
      tradNormalized + '.',
      cleanText.replace(/！/g, '!'),
      tradClean.replace(/！/g, '!'),
      cleanText.replace(/!/g, '！'),
      tradClean.replace(/!/g, '！'),
      cleanText.replace(/[。\.]$/, ''),
      tradClean.replace(/[。\.]$/, ''),
      normalizedClean.replace(/[。\.]$/, ''),
      tradNormalized.replace(/[。\.]$/, '')
    ];

    for (const v of variants) {
      if (v && PRESET_CHINESE_TO_ENGLISH_MAP[v]) {
        return (leadingSymbol ? leadingSymbol.trim() + ' ' : '') + PRESET_CHINESE_TO_ENGLISH_MAP[v];
      }
    }

    // Custom Upload AI Strategy template
    if (cleanText.includes('經過 AI 視覺智慧分析') || cleanText.includes('经过 AI 视觉智慧分析')) {
      const nameMatch = cleanText.match(/[《"]([^》"]+)[》"]/);
      const name = nameMatch ? nameMatch[1] : 'uploaded photo';
      return `Through AI visual analysis, "${name}" features outstanding texture, clear subject focus, and generous copy space—making it ideal for prompt reverse-engineering, stock titles/49 tags generation, and commercial quality auditing.`;
    }

    // Specialized pattern translators
    if (cleanText.includes('監控攝影機') || cleanText.includes('监控摄像头') || cleanText.includes('CCTV') || cleanText.includes('圓頂監控')) {
      return (leadingSymbol ? leadingSymbol.trim() + ' ' : '') + 'This image uses a dynamic close-up composition, precisely locking focus on a white dome surveillance camera (CCTV) mounted on a rough concrete pillar. Lens details are crisp, displaying glass spherical texture and subtle ambient reflections. The background leverages shallow depth of field from a wide aperture, blurring underground parking cars and rows of fluorescent lights into soft bokeh—highlighting the subject while creating a cool, industrial, surveillance atmosphere with balanced overhead lighting.';
    }

    if (cleanText.includes('木製齒輪') || cleanText.includes('木制齿轮') || (cleanText.includes('E-LEARNING') && cleanText.includes('齒輪'))) {
      return (leadingSymbol ? leadingSymbol.trim() + ' ' : '') + 'This is a conceptual flat lay photograph featuring wooden central gears encircled by hands in colorful attire, symbolizing diversity and teamwork. A clean high-key white background creates a modern minimalist feel. Digital overlays including "E-LEARNING" typography and education icons (books, grad caps, laptops, certificates) emphasize the integration of tech and learning with soft, shadowless lighting.';
    }

    if ((cleanText.includes('筆記型電腦上操作的雙手') || cleanText.includes('笔记本电脑上操作的双手') || cleanText.includes('低角度近攝')) && (cleanText.includes('雙手') || cleanText.includes('双手'))) {
      return (leadingSymbol ? leadingSymbol.trim() + ' ' : '') + 'This image displays a highly professional commercial stock style. A low-angle close-up focuses on hands operating a silver laptop, establishing an immersive presence. Shallow depth of field blurs two suit-clad professionals holding documents in the background, accentuating focused productivity and teamwork. Strong natural side lighting generates warm rim lights and soft shadows in a bright, modern office setting.';
    }

    if (cleanText.includes('握手動作') || cleanText.includes('握手动作') || cleanText.includes('全息世界地圖') || cleanText.includes('全息世界地图')) {
      return (leadingSymbol ? leadingSymbol.trim() + ' ' : '') + 'This visual work adopts a symmetrical composition centering on a handshake between two suit-clad professionals. A soft blurred city skyline through floor-to-ceiling windows sets an executive tone. A digital holographic world map projection spans the handshake with glowing blue and gold network nodes, blending cool holographic light with warm ambient tones to communicate global trust, connectivity, and tech-driven synergy.';
    }

    if ((cleanText.includes('等距視角') || cleanText.includes('等距视角')) && (cleanText.includes('DATA SCIENCE') || cleanText.includes('FUTURE LEARNING'))) {
      return (leadingSymbol ? leadingSymbol.trim() + ' ' : '') + 'An isometric 3D illustration centering on an open laptop with colorful books stacked on top labeled "DATA SCIENCE", "FUTURE LEARNING", and "CODE". Vibrant cyan screen glow and floating neon holographic icons and data graphs create a strong futuristic tech mood on a dark gradient backdrop.';
    }

    if (cleanText.includes('鎢絲燈泡') || cleanText.includes('钨丝灯泡') || (cleanText.includes('發光的傳統燈泡') && cleanText.includes('懸浮'))) {
      return (leadingSymbol ? leadingSymbol.trim() + ' ' : '') + 'A conceptual high-tech composition featuring a glowing incandescent light bulb floating beside a laptop displaying programming code. Warm bulb glow contrasts against deep blue background tones, accompanied by digital icons for gear, email, and network connectivity, framed by colorful bokeh light spots.';
    }

    if (cleanText.includes('廣式月餅') || cleanText.includes('广式月饼') || cleanText.includes('中秋佳節') || cleanText.includes('中秋佳节')) {
      return (leadingSymbol ? leadingSymbol.trim() + ' ' : '') + 'A high-texture macro photograph centering on a traditional Cantonese mooncake with intricate floral engravings and golden glossy sheen. Shallow depth of field blurs ceramic tea cups, red dates, and goji berries in the background, bathed in warm directional afternoon sunlight across a bamboo mat.';
    }

    if (cleanText.includes('衝浪板') || cleanText.includes('冲浪板') || cleanText.includes('鳥瞰圖') || cleanText.includes('鸟瞰图')) {
      return (leadingSymbol ? leadingSymbol.trim() + ' ' : '') + 'A minimalist aerial drone shot of colorful surfboards aligned symmetrically on a sandy beach. Divided horizontally into light sand, rainbow-ordered surfboards, and clear blue ocean waves with sharp midday shadows and vibrant summer energy.';
    }

    if (cleanText.includes('汽車美容') || cleanText.includes('汽车美容') || cleanText.includes('漆面') || cleanText.includes('研磨機') || cleanText.includes('研磨机')) {
      return (leadingSymbol ? leadingSymbol.trim() + ' ' : '') + 'This image showcases a highly professional automotive detailing process. The composition uses a close-up angle focusing on gloved hands operating a rotary buffer polisher, creating strong visual contrast against deep red metallic paint. Striplight reflections across the glossy hood highlight a mirror finish, complemented by a soft-focus workshop backdrop of organized toolboards and detailing compounds, conveying master craftsmanship and premium maintenance value.';
    }

    if (cleanText.includes('建議調整背景顏色') || cleanText.includes('建议调整背景颜色') || cleanText.includes('三點式攝影燈光') || cleanText.includes('三点式摄影灯光')) {
      return (leadingSymbol ? leadingSymbol.trim() + ' ' : '') + 'Recommend adjusting the background color (e.g., warm pastel pink, off-white, or soft yellow) to enhance subject contrast. Strengthen 3-point studio lighting to highlight rim lights and tactile plush texture layers. Additionally, add eye catchlights to enrich facial expression, or incorporate conceptual props (e.g., miniature lightbulbs, notebooks) around the subject to significantly boost stock usability and download rates.';
    }

    if (cleanText.includes('極簡主義風格') || cleanText.includes('极简主义风格') || cleanText.includes('擬人化大腦') || cleanText.includes('拟人化大脑')) {
      return (leadingSymbol ? leadingSymbol.trim() + ' ' : '') + 'This image features a minimalist 3D anthropomorphic brain character. The design uses a monochromatic aesthetic in calm Sage Green. The subject brain features a soft plush texture, resembling short felt or velvet, creating a playful contrast with organic biology. Big round shiny eyes lend a cute, curious personality. Composition is clean and centered against a seamless studio background with soft lighting, evoking a modern, soothing feel.';
    }

    // Fallback dictionary replacement if Chinese characters still present
    let result = cleanText;
    const tradTrimmed = convertSimpToTrad(cleanText);

    Object.entries(PRESET_CHINESE_TO_ENGLISH_MAP).forEach(([zh, en]) => {
      if (zh.length > 2) {
        const zhNoPeriod = zh.replace(/[。\.]$/, '');
        result = result.replaceAll(zh, en).replaceAll(zhNoPeriod, en);
      }
    });

    // Replace prefix "自訂：" or "自訂:" if present
    if (result.includes('自訂') || result.includes('自订')) {
      result = result.replace(/^📸\s*自訂[：:]\s*/, '📸 Custom: ').replace(/^自訂[：:]\s*/, 'Custom: ').replace(/^📸\s*自订[：:]\s*/, '📸 Custom: ').replace(/^自订[：:]\s*/, 'Custom: ');
    }

    if (/[\u4e00-\u9fa5]/.test(result)) {
      let tradResult = tradTrimmed;
      Object.entries(PRESET_CHINESE_TO_ENGLISH_MAP).forEach(([zh, en]) => {
        if (zh.length > 2) {
          const zhNoPeriod = zh.replace(/[。\.]$/, '');
          tradResult = tradResult.replaceAll(zh, en).replaceAll(zhNoPeriod, en);
        }
      });
      if (tradResult.includes('自訂') || tradResult.includes('自订')) {
        tradResult = tradResult.replace(/^📸\s*自訂[：:]\s*/, '📸 Custom: ').replace(/^自訂[：:]\s*/, 'Custom: ').replace(/^📸\s*自订[：:]\s*/, '📸 Custom: ').replace(/^自订[：:]\s*/, 'Custom: ');
      }
      if (!/[\u4e00-\u9fa5]/.test(tradResult)) {
        return (leadingSymbol ? leadingSymbol.trim() + ' ' : '') + tradResult;
      }
    }

    if (/[\u4e00-\u9fa5]/.test(result)) {
      result = translateChineseToEnglishFallback(cleanText);
    }

    return (leadingSymbol ? leadingSymbol.trim() + ' ' : '') + result;
  }

  // If language is Traditional Chinese ('zh' / 'zh-tw' / 'zh-hk')
  if (lang === 'zh' || (lang as string) === 'zh-tw' || (lang as string) === 'zh-hk') {
    if (PRESET_ENGLISH_TO_CHINESE_MAP[cleanText]) {
      return (leadingSymbol ? leadingSymbol.trim() + ' ' : '') + PRESET_ENGLISH_TO_CHINESE_MAP[cleanText];
    }
    return convertSimpToTrad(text);
  }

  // If language is Simplified Chinese ('zh-cn')
  if (lang === 'zh-cn') {
    if (PRESET_ENGLISH_TO_CHINESE_MAP[cleanText]) {
      return (leadingSymbol ? leadingSymbol.trim() + ' ' : '') + convertTradToSimp(PRESET_ENGLISH_TO_CHINESE_MAP[cleanText]);
    }
    return convertTradToSimp(text);
  }

  return text;
};

const compressImageForStorage = (dataUrl: string, maxDim = 900, quality = 0.82): Promise<string> => {
  return new Promise((resolve) => {
    if (!dataUrl || !dataUrl.startsWith('data:image')) {
      resolve(dataUrl);
      return;
    }
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let w = img.width;
      let h = img.height;
      if (w > maxDim || h > maxDim) {
        if (w > h) {
          h = Math.round((h * maxDim) / w);
          w = maxDim;
        } else {
          w = Math.round((w * maxDim) / h);
          h = maxDim;
        }
      }
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', quality));
      } else {
        resolve(dataUrl);
      }
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
};

const formatTextWithDiagnosticSymbols = (rawText: string): string => {
  if (!rawText || !rawText.trim()) return rawText;
  const list = getDiagnosticIssueList(rawText);
  return list.join('\n');
};

const getWorkspaceT = (lang: Language) => {
  const isEn = lang === 'en';
  const isCn = lang === 'zh-cn';

  return {
    sectionBadge: isEn ? 'SHARED 10-SAMPLE ANALYSIS WORKSPACE' : isCn ? '10 大精选图片全功能互动工作区' : '10 大精選圖片全功能互動工作區',
    sectionTitle: isEn
      ? 'Shared 10 Preset Samples: Integrated Multi-Module Analysis'
      : isCn
      ? '同一套 10 张精选图片：多维度 AI 商业拆解实机展示'
      : '同一套 10 張精選圖片：多維度 AI 商業拆解實機展示',
    sectionSub: isEn
      ? 'All 10 samples can be analyzed across DeCode AI (Prompts), StockSensei X (49 Tags & Titles), and PhotoCoach (Shooting Guide & Quality Audit).'
      : isCn
      ? '同一张图片可同步在 DeCode AI 提取绘图提示词、在 StockSensei X 产出上架标题与 49 标签、并在 PhotoCoach 获得拍摄指南与品质诊断。'
      : '同一張圖片可同步在 DeCode AI 提取繪圖提示詞、在 StockSensei X 產出上架標題與 49 標籤、並在 PhotoCoach 獲得拍攝指南與品質診斷。',

    tabDecode: isEn ? 'DeCode AI (Prompt Extractor)' : isCn ? 'DeCode AI (提示词拆解)' : 'DeCode AI (提示詞拆解)',
    tabSensei: isEn ? 'StockSensei X (49 Tags & CSV)' : isCn ? 'StockSensei X (49标签与CSV)' : 'StockSensei X (49標籤與CSV)',
    tabCoach: isEn ? 'PhotoCoach (Shooting Guide & Quality Audit)' : isCn ? 'PhotoCoach (拍摄指南与品质审查)' : 'PhotoCoach (拍攝指南與品質審查)',
    tabBrain: isEn ? 'AI Strategy Brain (Global Market)' : isCn ? 'AI 智慧策略大脑 (全球情报)' : 'AI 智慧策略大腦 (全球情報)',

    saveToast: isEn
      ? 'Content successfully saved and locked! All photos, titles, prompts, and 49 IPTC tags are stored locally in your browser.'
      : isCn
      ? '内容已成功保存并固定锁定！所有照片、标题、提示词与 49 标签皆已保存在您的浏览器中。'
      : '內容已成功儲存並固定鎖定！所有照片、標題、提示詞與 49 標籤皆已保存在您的瀏覽器中。',

    lockedTitle: isEn ? '🔒 Stock Showcase Locked Presentation Mode:' : isCn ? '🔒 图库展示固定模式：' : '🔒 圖庫展示固定模式：',
    lockedSub: isEn
      ? 'The current gallery and all AI decomposition fields are locked and saved for presentation view. Click Unlock to edit or remove photos.'
      : isCn
      ? '本页面目前的图库与所有 AI 拆解栏位已固定锁定保存。可供访客查看与点击复制。需要编辑请点击右侧解锁按钮。'
      : '本頁面目前的圖庫與所有 AI 拆解欄位已固定鎖定儲存。提供訪客或客戶進行檢視與點擊複製。需要編輯請點擊右側按鈕解鎖。',
    unlockBtn: isEn ? 'Unlock & Edit' : isCn ? '解锁编辑内容' : '解鎖編輯內容',

    editModeTitle: isEn ? '✍️ Free Editing & Custom Mode:' : isCn ? '✍️ 自由编辑与自定义模式：' : '✍️ 自由編輯與自訂模式：',
    editModeSub: isEn
      ? 'You can delete unwanted images, upload custom photos, and edit all titles, prompts, and 49 IPTC tags. Click "Save & Lock" when finished!'
      : isCn
      ? '您可以删除下方任意不需要的图片、上传专属图片、并直接修改所有标题、提示词与 49 个 IPTC 标签。编辑完毕请务必点击“保存并锁定”！'
      : '您可以刪除下方任意不需要的圖片、上傳專屬圖片、並直接修改所有標題、提示詞與 49 個 IPTC 標籤。編輯完畢請務必點擊「儲存並鎖定」！',
    uploadNewPhoto: isEn ? 'Upload New Photo' : isCn ? '上传新图片' : '上傳新圖片',
    saveAndLockBtn: isEn ? 'Save & Lock' : isCn ? '保存并锁定' : '儲存並鎖定',

    selectOrUpload: isEn ? 'Select or upload image for analysis:' : isCn ? '选择或上传图片进行拆解：' : '選擇或上傳圖片進行拆解：',
    uploadedCustomPhoto: isEn ? 'Custom Uploaded Photo' : isCn ? '已上传专属图片' : '已上傳專屬圖片',
    sharedSample: isEn ? '100% Shared Sample' : isCn ? '预设展示范例' : '預設展示範例',
    customTag: isEn ? 'Custom' : isCn ? '自订' : '自訂',
    deletePhotoTitle: isEn ? 'Delete this photo' : isCn ? '删除此图片' : '刪除此圖片',

    lockedStatusText: isEn ? '🔒 Content Locked (Read-only Showcase & 1-Click Copy Mode)' : isCn ? '🔒 内容已固定锁定 (只读展示与点击复制模式)' : '🔒 內容已固定鎖定 (唯讀展示與點擊複製模式)',
    editingStatusText: isEn ? '✍️ Free Edit Mode (Changes auto-backed up)' : isCn ? '✍️ 自由编辑模式中 (修改将自动备份)' : '✍️ 自由編輯模式中 (修改將自動備份)',
    resetDefaultsBtn: isEn ? 'Reset to Defaults' : isCn ? '恢复系统预设' : '恢復系統預設',
    unlockEditBtn: isEn ? '🔓 Unlock Edit' : isCn ? '🔓 解锁编辑' : '🔓 解鎖編輯',
    saveAndLockShort: isEn ? '💾 Save & Lock' : isCn ? '💾 保存并锁定' : '💾 儲存並鎖定',

    decodeTitle: isEn ? 'DECODE AI PROMPT OUTPUT (Visual Reverse Engineering)' : isCn ? 'DECODE AI PROMPT OUTPUT (提示词逆向拆解)' : 'DECODE AI PROMPT OUTPUT (提示詞逆向拆解)',
    aiStrategyHeader: isEn ? 'AI STRATEGY (Visual Strategy Analysis)' : isCn ? 'AI STRATEGY (AI 视觉战略分析)' : 'AI STRATEGY (AI 視覺戰略分析)',
    editableTag: isEn ? 'Editable' : isCn ? '可修改' : '可修改',
    generalPromptLabel: isEn ? '[GENERAL PHOTO PROMPT]' : isCn ? '[GENERAL PHOTO PROMPT]' : '[GENERAL PHOTO PROMPT]',
    mjLumaPromptLabel: isEn ? '⚡ [MIDJOURNEY / LUMA PROMPT]' : isCn ? '⚡ [MIDJOURNEY / LUMA PROMPT]' : '⚡ [MIDJOURNEY / LUMA PROMPT]',
    copiedBtn: isEn ? 'COPIED!' : isCn ? '已复制' : '已複製',
    copyPromptBtn: isEn ? 'COPY PROMPT' : isCn ? '复制提示词' : '複製提示詞',
    copyMjPromptBtn: isEn ? 'COPY MJ PROMPT' : isCn ? '复制 MJ 提示词' : '複製 MJ 提示詞',
    sampleLabel: isEn ? 'Sample' : isCn ? '范例' : '範例',
    getLicenseBtn: isEn ? 'GET LIFETIME LICENSE' : isCn ? '获取完整版授权' : '取得完整版授權',

    bestTitleHeader: isEn ? '📈 RECOMMENDED BEST TITLE' : isCn ? '📈 推荐最佳标题 (BEST TITLE)' : '📈 推薦最佳標題 (BEST TITLE)',
    seoOptionLabel: isEn ? 'SEO TITLES (OPTIONS)' : isCn ? 'SEO 标题 (选项)' : 'SEO 標題 (選項)',
    keywordsHeader: isEn ? 'KEYWORDS (49 IPTC Tags)' : isCn ? 'KEYWORDS (49 个 IPTC 标签)' : 'KEYWORDS (49 個 IPTC 標籤)',
    copyAllBtn: isEn ? 'Copy All' : isCn ? '全部复制' : '全部複製',
    copiedAllBtn: isEn ? 'COPIED ALL!' : isCn ? '已全部复制!' : '已全部複製!',
    editKeywordsPlaceholder: isEn ? 'Paste or edit 49 tags (comma separated):' : isCn ? '直接粘贴或修改 49 个标签（请用英文逗号隔开）：' : '直接貼上或修改 49 個標籤（請用英文逗號隔開）：',
    downloadCsvBtn: isEn ? 'Export 1-Click 5-Column CSV (Adobe Stock / Shutterstock)' : isCn ? '导出 1 键 5 栏位 CSV (Adobe Stock / Shutterstock)' : '匯出 1 鍵 5 欄位 CSV (Adobe Stock / Shutterstock)',
    csvDownloadedBtn: isEn ? 'CSV File Exported Successfully!' : isCn ? 'CSV 报表导出成功！' : 'CSV 報表匯出成功！',

    photoCoachTitle: isEn ? 'PhotoCoach' : isCn ? '摄影教练 PhotoCoach' : '攝影教練 PhotoCoach',
    critiqueModeBadge: isEn ? 'Critique Mode' : isCn ? '诊断模式' : '診斷模式',
    photoCoachSub: isEn ? 'Professional critique of your work, commercial scoring, and defect diagnosis.' : isCn ? '专业审视您的作品，获得商业价值评分与缺陷诊断。' : '專業審視您的作品，獲得商業價值評分與缺陷診斷。',
    commercialScoreEdit: isEn ? 'Commercial Score Edit:' : isCn ? '商业评分编辑:' : '商業評分編輯:',
    reconstructedPromptTitle: isEn ? 'AI RECONSTRUCTION PROMPT' : isCn ? 'AI 重建提示词' : 'AI 重建提示詞',
    editPromptLabel: isEn ? 'Edit AI Reconstructed Prompt (Midjourney / Flux):' : isCn ? '编辑 AI 重建提示词 (Midjourney / Flux 生图语法)：' : '編輯 AI 重建提示詞 (Midjourney / Flux 生圖語法)：',
    analysisReportTitle: isEn ? 'ANALYSIS REPORT' : isCn ? '分析报告' : '分析報告',
    commercialScoreLabel: isEn ? 'COMMERCIAL SCORE' : isCn ? '商业价值评分 (COMMERCIAL SCORE)' : '商業價值評分 (COMMERCIAL SCORE)',
    defectComparisonTitle: isEn ? 'Commercial Defects & Diagnostic Points' : isCn ? '画面诊断重点与缺陷对比' : '畫面診斷重點與缺陷對比',
    autoDiagnosticSymbolBadge: isEn ? 'Auto ⚠️ Symbol Mode' : isCn ? '自动 ⚠️ 诊断符号模式' : '自動 ⚠️ 診斷符號模式',
    autoAddSymbolBtn: isEn ? '⚡ Auto-add ⚠️ symbol to lines' : isCn ? '⚡ 点击为每行自动加上 ⚠️ 诊断符号' : '⚡ 點擊為每行自動加上 ⚠️ 診斷符號',
    unlockToEditTip: isEn ? 'Click top-right lock icon to unlock and edit items' : isCn ? '点击右上角锁头可重新调整项目' : '點擊右上角鎖頭可重新調整項目',
    editEnterTip: isEn ? '💡 Tip: Press Enter for new lines. Saving & locking will automatically prefix each line with a ⚠️ symbol.' : isCn ? '💡 提示：按 Enter 换行即可，系统保存锁定日会自动为每一行前缀标示 ⚠️ 诊断符号。' : '💡 提示：按 Enter 換行即可，系統儲存鎖定時會自動為每一行前綴標示 ⚠️ 診斷符號。',
    reshootAdviceTitle: isEn ? 'RESHOOT ADVICE' : isCn ? '拍摄建议 (RESHOOT ADVICE)' : '拍攝建議 (RESHOOT ADVICE)',

    strategyBrainHeader: isEn ? 'AI Market Strategy Brain' : isCn ? 'AI 智慧策略大脑' : 'AI 智慧策略大腦',
    strategyBrainTitle: isEn ? 'AI Market Strategy Brain' : isCn ? 'AI 智慧策略大脑' : 'AI 智慧策略大腦',
    strategyBrainSub: isEn ? 'Global Stock Search Algorithm Intelligence • Click button to refresh insights' : isCn ? '全球图库算法热搜情报 • 点击右侧按钮即时刷新' : '全球圖庫演算法熱搜情報 • 點擊右側按鈕即時刷新',
    refreshTrendsBtn: isEn ? 'Refresh Trends' : isCn ? '刷新洞察 (Refresh Trends)' : '刷新洞察 (Refresh Trends)',
    fetchingTrendsBtn: isEn ? 'Fetching Latest Search Trends...' : isCn ? '正在抓取最新热搜...' : '正在擷取最新熱搜...',
    refreshingBtn: isEn ? 'Fetching Latest Search Trends...' : isCn ? '正在抓取最新热搜...' : '正在擷取最新熱搜...',
    currentTrendsTitle: isEn ? 'Current Trending Themes' : isCn ? '当前热门趋势' : '當前熱門趨勢',
    trendingThemesTitle: isEn ? 'Current Trending Themes' : isCn ? '当前热门趋势' : '當前熱門趨勢',
    realtimeBigData: isEn ? 'Real-time Analytics' : isCn ? '实时大数据' : '實時大數據',
    realtimeDataBadge: isEn ? 'Real-time Analytics' : isCn ? '实时大数据' : '實時大數據',
    seasonalKeywordsTitle: isEn ? 'Seasonal Top Keywords (Top 10)' : isCn ? '季节性高频搜索词 (Top 10 Keywords)' : '季節性高頻搜尋詞 (Top 10 Keywords)',
    clickToCopyBadge: isEn ? 'Click to copy' : isCn ? '点击复制' : '點擊複製',
    expertAdviceTitle: isEn ? 'Commercial Expert Advice (Market Insights)' : isCn ? '商业专家建议 (Market Insights)' : '商業專家建議 (Market Insights)',
    upcomingHolidaysTitle: isEn ? 'Upcoming Seasonal Demand Forecast (Next 60 Days)' : isCn ? '即将到来节庆需求预测 (未来 60 天)' : '即將到來節慶需求預測 (未來 60 天)',
    autoFilterPastHolidays: isEn ? 'Automatically filtered past holidays' : isCn ? '自动过滤已过去节庆' : '自動過濾已過去節慶',
    daysRemaining: isEn ? 'days away' : isCn ? '天后' : '天後',
  };
};

const normalizeSampleItem = (item: any): PresetSampleItem => {
  if (!item || typeof item !== 'object') {
    return PRESET_SHOWCASE_SAMPLES[0];
  }
  const matchingPreset = PRESET_SHOWCASE_SAMPLES.find((p) => p.id === item.id);
  return {
    id: item.id || `sample-${Math.random().toString(36).substr(2, 9)}`,
    name: item.name || matchingPreset?.name || 'custom_photo.jpg',
    title: item.title || matchingPreset?.title || '自訂上傳照片',
    categoryTag: item.categoryTag || matchingPreset?.categoryTag || '圖庫商業攝影',
    badge: item.badge || matchingPreset?.badge || '商業級',
    imageUrl: matchingPreset?.imageUrl || item.imageUrl || '',
    aiStrategy: item.aiStrategy || matchingPreset?.aiStrategy || '',
    generalPrompt: item.generalPrompt || item.mjPrompt || matchingPreset?.generalPrompt || '',
    mjPrompt: item.mjPrompt || item.generalPrompt || matchingPreset?.mjPrompt || '',
    bestTitle: item.bestTitle || matchingPreset?.bestTitle || '',
    seoOption1: item.seoOption1 || matchingPreset?.seoOption1 || '',
    seoOption2: item.seoOption2 || matchingPreset?.seoOption2 || '',
    keywordsArray: Array.isArray(item.keywordsArray) && item.keywordsArray.length > 0 ? item.keywordsArray : (matchingPreset?.keywordsArray || []),
    category: item.category || matchingPreset?.category || '4 (Technology)',
    score: typeof item.score === 'number' ? item.score : (matchingPreset?.score || 85),
    photoCoach: {
      shootingGuide: {
        equipment: item.photoCoach?.shootingGuide?.equipment || matchingPreset?.photoCoach?.shootingGuide?.equipment || '建議相機鏡頭：35mm 或 50mm f/1.8 定焦鏡。',
        lightingSetup: item.photoCoach?.shootingGuide?.lightingSetup || matchingPreset?.photoCoach?.shootingGuide?.lightingSetup || '主光源採 45 度側面軟光，背景輔以氣氛燈。',
        compositionTip: item.photoCoach?.shootingGuide?.compositionTip || matchingPreset?.photoCoach?.shootingGuide?.compositionTip || '採用三分法構圖，保持主體清晰突出。',
        colorPalette: item.photoCoach?.shootingGuide?.colorPalette || matchingPreset?.photoCoach?.shootingGuide?.colorPalette || '高對比冷暖色調，突顯商業質感。',
      },
      qualityCritique: {
        strengths: item.photoCoach?.qualityCritique?.strengths || matchingPreset?.photoCoach?.qualityCritique?.strengths || '主題明確，整體對焦清晰。',
        flawsAndWeaknesses: item.photoCoach?.qualityCritique?.flawsAndWeaknesses || matchingPreset?.photoCoach?.qualityCritique?.flawsAndWeaknesses || '部分區域光影過曝或構圖裁切較緊湊。',
        lightingScore: item.photoCoach?.qualityCritique?.lightingScore || matchingPreset?.photoCoach?.qualityCritique?.lightingScore || '8.5 / 10',
        compositionScore: item.photoCoach?.qualityCritique?.compositionScore || matchingPreset?.photoCoach?.qualityCritique?.compositionScore || '8.2 / 10',
        reshootAdvice: item.photoCoach?.qualityCritique?.reshootAdvice || matchingPreset?.photoCoach?.qualityCritique?.reshootAdvice || '建議調整視角，給予主體適當留白空間。',
      }
    }
  };
};

interface LiveWorkspaceProps {
  lang: Language;
  activeTab?: 'decode-ai' | 'stocksensei-x' | 'photocoach' | 'trend-sniper';
  onOpenApiKeyModal?: () => void;
}

export const LiveWorkspace: React.FC<LiveWorkspaceProps> = ({
  lang,
  activeTab: externalTab
}) => {
  const [activeTab, setActiveTab] = useState<
    'decode-ai' | 'stocksensei-x' | 'photocoach' | 'trend-sniper'
  >(externalTab || 'decode-ai');

  useEffect(() => {
    if (externalTab) {
      setActiveTab(externalTab);
    }
  }, [externalTab]);

  // Selected sample index
  const [selectedSampleIndex, setSelectedSampleIndex] = useState<number>(0);
  const WORKSPACE_SAMPLES_KEY = 'prompt_stock_workspace_samples_v5';
  const WORKSPACE_LOCK_KEY = 'prompt_stock_workspace_locked_v5';

  // List of samples (preset showcase + custom uploaded photos, persisted in localStorage)
  const [samplesList, setSamplesList] = useState<PresetSampleItem[]>(() => {
    try {
      const keysToTry = [
        'prompt_stock_workspace_samples_v4',
        'prompt_stock_workspace_samples_v3',
        'prompt_stock_workspace_samples_v2',
        'prompt_stock_workspace_samples_v1',
        'prompt_stock_workspace_samples',
        'stockflow_workspace_samples',
        'stockflow_samples'
      ];
      
      // Also scan localStorage for any keys containing 'samples'
      if (typeof window !== 'undefined' && window.localStorage) {
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && (k.includes('samples') || k.includes('workspace')) && !keysToTry.includes(k)) {
            keysToTry.push(k);
          }
        }
      }

      for (const key of keysToTry) {
        const saved = localStorage.getItem(key);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed.map(normalizeSampleItem);
          }
        }
      }
    } catch (e) {
      console.error('Failed to load saved workspace samples', e);
    }
    return PRESET_SHOWCASE_SAMPLES.map(normalizeSampleItem);
  });

  // Lock status (permanently locked in read-only showcase mode)
  const isLocked = true;
  const isEditMode = false;

  // Dummy setters maintained for compatibility
  const setIsLocked = (_val: boolean) => {};
  const setIsEditMode = (_val: boolean) => {};

  // Toast notification for save
  const [showSaveToast, setShowSaveToast] = useState<boolean>(false);

  // Persist samples to localStorage (sync across keys for maximum safety)
  useEffect(() => {
    try {
      const serialized = JSON.stringify(samplesList);
      localStorage.setItem(WORKSPACE_SAMPLES_KEY, serialized);
      localStorage.setItem('prompt_stock_workspace_samples_v3', serialized);
      localStorage.setItem('prompt_stock_workspace_samples', serialized);
    } catch (e) {
      console.error('Failed to save workspace samples to localStorage', e);
    }
  }, [samplesList]);

  // Persist lock state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(WORKSPACE_LOCK_KEY, JSON.stringify(isLocked));
    } catch (e) {
      console.error('Failed to save lock state to localStorage', e);
    }
  }, [isLocked]);

  // File input ref for custom image upload
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Strategy Brain dataset pool rotation index
  const [strategyPoolIndex, setStrategyPoolIndex] = useState<number>(0);
  const currentBrainDataset = AI_STRATEGY_TREND_POOLS[strategyPoolIndex % AI_STRATEGY_TREND_POOLS.length];
  const t = getWorkspaceT(lang);

  // Dynamic upcoming holidays list calculated from current calendar date (~2.5 months lookahead)
  const upcomingHolidaysList = useMemo(() => getUpcomingHolidays(), []);

  // Selected holiday for AI Strategy Brain (Module 4)
  const [selectedHolidayId, setSelectedHolidayId] = useState<string>(
    () => upcomingHolidaysList[0]?.id || ''
  );

  // Animation simulation state
  const [isSimulating, setIsSimulating] = useState(false);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [csvDownloaded, setCsvDownloaded] = useState(false);
  const [isRefreshingBrain, setIsRefreshingBrain] = useState(false);

  const rawCurrentSample = samplesList[selectedSampleIndex] || samplesList[0] || PRESET_SHOWCASE_SAMPLES[0];
  const currentSample: PresetSampleItem = useMemo(() => normalizeSampleItem(rawCurrentSample), [rawCurrentSample]);

  const selectedHoliday: HolidayItem = upcomingHolidaysList.find(
    (h) => h.id === selectedHolidayId
  ) || upcomingHolidaysList[0] || {
    id: 'fallback',
    nameZh: '近兩月無重大節慶',
    nameEn: 'General Stock Trends',
    keywords: ['Stock Photo', 'Commercial Visuals', 'Digital Marketing']
  };

  const triggerSelectSample = (index: number) => {
    setSelectedSampleIndex(index);
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 400);
  };

  // Helper to update fields on current sample
  const updateCurrentSampleField = <K extends keyof PresetSampleItem>(field: K, value: PresetSampleItem[K]) => {
    setSamplesList((prevList) => {
      const newList = [...prevList];
      if (newList[selectedSampleIndex]) {
        const normalized = normalizeSampleItem(newList[selectedSampleIndex]);
        newList[selectedSampleIndex] = {
          ...normalized,
          [field]: value
        };
      }
      return newList;
    });
  };

  // Helper to update nested PhotoCoach shooting guide
  const updatePhotoCoachGuideField = (field: keyof PresetSampleItem['photoCoach']['shootingGuide'], value: string) => {
    setSamplesList((prevList) => {
      const newList = [...prevList];
      const current = newList[selectedSampleIndex];
      if (current) {
        const normalized = normalizeSampleItem(current);
        newList[selectedSampleIndex] = {
          ...normalized,
          photoCoach: {
            ...normalized.photoCoach,
            shootingGuide: {
              ...normalized.photoCoach.shootingGuide,
              [field]: value
            }
          }
        };
      }
      return newList;
    });
  };

  // Helper to update nested PhotoCoach quality critique
  const updatePhotoCoachCritiqueField = (field: keyof PresetSampleItem['photoCoach']['qualityCritique'], value: string) => {
    setSamplesList((prevList) => {
      const newList = [...prevList];
      const current = newList[selectedSampleIndex];
      if (current) {
        const normalized = normalizeSampleItem(current);
        newList[selectedSampleIndex] = {
          ...normalized,
          photoCoach: {
            ...normalized.photoCoach,
            qualityCritique: {
              ...normalized.photoCoach.qualityCritique,
              [field]: value
            }
          }
        };
      }
      return newList;
    });
  };

  // Reset current sample to default preset values
  const handleResetSample = () => {
    const originalPreset = PRESET_SHOWCASE_SAMPLES.find((p) => p.id === currentSample.id);
    if (originalPreset) {
      setSamplesList((prevList) => {
        const newList = [...prevList];
        newList[selectedSampleIndex] = JSON.parse(JSON.stringify(originalPreset));
        return newList;
      });
    }
  };

  const createCustomSampleItem = (file: File, dataUrl: string): PresetSampleItem => {
    const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
    const upperTitle = cleanName.toUpperCase();

    return {
      id: `custom-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: file.name,
      title: `📸 自訂：${cleanName}`,
      categoryTag: '自訂作品',
      badge: 'USER UPLOADED',
      imageUrl: dataUrl,
      aiStrategy: `經過 AI 視覺智慧分析，這張《${cleanName}》具有極佳的畫質質感與光影結構，主體鮮明且具備充裕的設計留白，極度適合進行提示詞逆向提取、廣告圖庫標題/49標籤生成與商業品質診斷。`,
      generalPrompt: `A masterclass high-resolution photograph of ${cleanName}, cinematic studio lighting, 8k resolution, commercial grade quality, ultra-detailed texture, sharp focus, professional color grading.`,
      mjPrompt: `Hyper-realistic commercial photography of ${cleanName}, studio softbox illumination, volumetric lighting, rich color depth, stock photo style --ar 16:9 --v 6.0`,
      bestTitle: `${upperTitle} Commercial Photography Asset`,
      seoOption1: `High quality ${cleanName} photo for digital marketing and banner ads`,
      seoOption2: `Professional creative stock photography featuring ${cleanName}`,
      keywordsArray: [
        cleanName, 'commercial', 'photography', 'high quality', 'studio light',
        'professional', 'creative', 'design', 'background', 'isolated',
        'concept', 'modern', 'style', 'digital', 'art', 'vector', 'illustration',
        'render', '3d', 'detailed', 'bright', 'vibrant', 'color', 'texture',
        'focus', 'sharp', 'banner', 'marketing', 'presentation', 'media',
        'content', 'stock photo', 'adobestock', 'shutterstock', 'getty',
        'download', 'asset', 'element', 'composition', 'copy space', 'abstract',
        'lifestyle', 'technology', 'business', 'nature', 'object', 'view', 'hd', '8k'
      ],
      category: '3 (Business & Creative)',
      score: 98,
      photoCoach: {
        shootingGuide: {
          equipment: '推薦使用 35mm 或 50mm f/1.8 大光圈全片幅單眼，配合腳架穩定拍攝。',
          lightingSetup: '側前方 45 度雙燈柔光夾角，底層白色反光板補光填充陰影。',
          compositionTip: '採用三分法則構圖，主體位於交點，周圍預留充裕廣告文案 Copy Space。',
          colorPalette: '現代冷灰 (Modern Slate) 與溫暖主體光影對比。'
        },
        qualityCritique: {
          strengths: '光影細緻，質感高雅，主體極具商業渲染力與吸引力！',
          flawsAndWeaknesses: '若針對邊緣銳利度稍微提升 5%，圖庫審核通過率將達到 100%。',
          lightingScore: '98/100 • 柔光鋪設均勻，質感亮眼。',
          compositionScore: '97/100 • 留白比例適中，方便廣告設計排版。',
          reshootAdvice: '品質已達商業頂級標準，可直接匯出 49 IPTC 標籤進行批量上架！'
        }
      }
    };
  };

  const handleFilesUpload = async (files: FileList | File[]) => {
    if (!files || files.length === 0) return;
    const fileArray = Array.from(files);
    const newItems: PresetSampleItem[] = [];

    for (const file of fileArray) {
      if (!file.type.startsWith('image/')) continue;
      const dataUrl = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve((e.target?.result as string) || '');
        reader.readAsDataURL(file);
      });
      if (dataUrl) {
        const compressedUrl = await compressImageForStorage(dataUrl);
        newItems.push(createCustomSampleItem(file, compressedUrl));
      }
    }

    if (newItems.length > 0) {
      setSamplesList((prev) => {
        const updated = [...newItems, ...prev];
        try {
          const serialized = JSON.stringify(updated);
          localStorage.setItem(WORKSPACE_SAMPLES_KEY, serialized);
          localStorage.setItem('prompt_stock_workspace_samples_v3', serialized);
          localStorage.setItem('prompt_stock_workspace_samples', serialized);
        } catch (e) {
          console.error('Failed to sync compressed uploads to localStorage', e);
        }
        return updated;
      });
      setSelectedSampleIndex(0); // Auto switch to newly uploaded item
      setIsSimulating(true);
      setTimeout(() => setIsSimulating(false), 500);
    }
  };

  const handleDeleteSample = (idToDelete: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSamplesList((prev) => {
      const updated = prev.filter((s) => s.id !== idToDelete);
      return updated;
    });
    setSelectedSampleIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleSaveAndLock = () => {
    try {
      const formattedSamples = samplesList.map((sample) => {
        const rawFlaws = sample.photoCoach?.qualityCritique?.flawsAndWeaknesses || '';
        const formattedFlaws = formatTextWithDiagnosticSymbols(rawFlaws);
        return {
          ...sample,
          photoCoach: {
            ...sample.photoCoach,
            qualityCritique: {
              ...sample.photoCoach?.qualityCritique,
              flawsAndWeaknesses: formattedFlaws
            }
          }
        };
      });

      setSamplesList(formattedSamples);
      const serialized = JSON.stringify(formattedSamples);
      localStorage.setItem(WORKSPACE_SAMPLES_KEY, serialized);
      localStorage.setItem('prompt_stock_workspace_samples_v3', serialized);
      localStorage.setItem('prompt_stock_workspace_samples', serialized);
      localStorage.setItem(WORKSPACE_LOCK_KEY, JSON.stringify(true));
      setIsLocked(true);
      setShowSaveToast(true);
      setTimeout(() => setShowSaveToast(false), 3500);
    } catch (e) {
      console.error('Save failed', e);
    }
  };

  const handleUnlockEdit = () => {
    setIsLocked(false);
  };

  const handleResetAllToPresetDefaults = () => {
    if (window.confirm('確定要清除目前的修改，並還原系統預設的 10 張精選圖片與範例數據嗎？')) {
      setSamplesList(PRESET_SHOWCASE_SAMPLES);
      setSelectedSampleIndex(0);
      try {
        localStorage.removeItem(WORKSPACE_SAMPLES_KEY);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleCopyText = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const handleDownloadCSV = () => {
    const csvContent =
      'Filename,Title,Description,Keywords,Category\n' +
      `"${currentSample.name}","${currentSample.bestTitle}","${currentSample.aiStrategy.substring(0, 100)}...","${currentSample.keywordsArray.join(', ')}","${currentSample.category}"\n`;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `adobestock_49tags_${currentSample.id}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCsvDownloaded(true);
    setTimeout(() => setCsvDownloaded(false), 2500);
  };

  const handleRefreshBrain = () => {
    setIsRefreshingBrain(true);
    setTimeout(() => {
      setStrategyPoolIndex((prev) => (prev + 1) % AI_STRATEGY_TREND_POOLS.length);
      setIsRefreshingBrain(false);
    }, 450);
  };

  return (
    <section id="interactive-demo" className="py-12 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md neu-inset text-[#221E1A] text-xs font-mono font-extrabold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#221E1A] tracking-tight mb-3 font-display">
            {t.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#5A5348] font-medium">
            {t.sectionSub}
          </p>
        </div>

        {/* Tab Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 p-1.5 rounded-2xl neu-inset">
          <button
            onClick={() => setActiveTab('decode-ai')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
              activeTab === 'decode-ai'
                ? 'bg-[#221E1A] text-[#10B981] shadow-md'
                : 'text-[#5A5348] hover:text-[#221E1A]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#10B981]" />
            <span>{t.tabDecode}</span>
          </button>

          <button
            onClick={() => setActiveTab('stocksensei-x')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
              activeTab === 'stocksensei-x'
                ? 'bg-[#221E1A] text-[#10B981] shadow-md'
                : 'text-[#5A5348] hover:text-[#221E1A]'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4 text-[#10B981]" />
            <span>{t.tabSensei}</span>
          </button>

          <button
            onClick={() => setActiveTab('photocoach')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
              activeTab === 'photocoach'
                ? 'bg-[#221E1A] text-[#10B981] shadow-md'
                : 'text-[#5A5348] hover:text-[#221E1A]'
            }`}
          >
            <Camera className="w-4 h-4 text-[#10B981]" />
            <span>{t.tabCoach}</span>
          </button>

          <button
            onClick={() => setActiveTab('trend-sniper')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
              activeTab === 'trend-sniper'
                ? 'bg-[#221E1A] text-[#10B981] shadow-md'
                : 'text-[#5A5348] hover:text-[#221E1A]'
            }`}
          >
            <Brain className="w-4 h-4 text-[#10B981]" />
            <span>{t.tabBrain}</span>
          </button>
        </div>

        {/* Toast Alert for Save */}
        {showSaveToast && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-950 border border-emerald-500/50 text-emerald-200 text-xs font-mono font-bold flex items-center gap-3 shadow-xl animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="leading-relaxed">
              <strong>✅ {t.saveToast}</strong>
            </div>
          </div>
        )}

        {/* Protected Read-Only Notice Banner */}
        <div className="mb-6 p-4 rounded-2xl bg-zinc-900/90 border border-emerald-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-emerald-200 shadow-md">
          <div className="flex items-start sm:items-center gap-3">
            <Lock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
            <div className="leading-relaxed">
              <strong>
                {lang === 'en'
                  ? '🔒 LIVE WORKSHOP SHOWCASE — READ-ONLY MODE'
                  : lang === 'zh-cn'
                  ? '🔒 实机工作坊展示 — 只读保护模式'
                  : '🔒 實機工作坊展演 — 唯讀保護模式'}
              </strong>
              {' '}
              {lang === 'en'
                ? 'Preset showcase samples and PhotoCoach quality diagnoses are permanently locked in standardized workshop presentation mode to protect prompt & metadata integrity.'
                : lang === 'zh-cn'
                ? '展示范例与 PhotoCoach 诊断数据已全面锁定保护，确保公开网页展示之完整性与一致性。'
                : '展示範例與 PhotoCoach 診斷數據已全面鎖定保護，確保公開網頁展示之完整性與一致性。'}
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3.5 py-1.5 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-mono font-extrabold text-[11px] flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'en' ? 'PROTECTED' : '已保護鎖定'}</span>
            </span>
          </div>
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => {
            if (e.target.files) {
              handleFilesUpload(e.target.files);
            }
          }}
          accept="image/*"
          multiple
          className="hidden"
        />

        {/* Workspace Container */}
        <div className="bg-[#0A090D] border border-zinc-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
          
          {/* Main 4-Module Content */}
          {activeTab !== 'trend-sniper' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Sample Selector & Image Frame */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                
                {/* Image Display Frame with Drag and Drop Support */}
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                      handleFilesUpload(e.dataTransfer.files);
                    }
                  }}
                  className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[16/10] sm:aspect-[4/3] flex items-center justify-center group shadow-lg cursor-pointer"
                  onClick={() => {
                    if (currentSample.id.startsWith('custom-')) {
                      fileInputRef.current?.click();
                    }
                  }}
                >
                  <SampleGraphic sampleId={currentSample.id} imageUrl={currentSample.imageUrl} />

                  {/* Scanning Animation */}
                  {isSimulating && (
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/30 via-transparent to-transparent animate-scan-laser pointer-events-none" />
                  )}

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-emerald-500/90 text-black text-[10px] font-black uppercase tracking-wider shadow">
                    {formatContentText(currentSample.badge, lang)}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-black/85 backdrop-blur-md text-[11px] font-mono text-zinc-300 flex items-center justify-between border border-zinc-800">
                    <span className="truncate">{currentSample.name}</span>
                    <span className="text-emerald-400 font-extrabold shrink-0">
                      {currentSample.id.startsWith('custom-') ? t.uploadedCustomPhoto : t.sharedSample}
                    </span>
                  </div>
                </div>

                {/* Image Gallery List & Upload Button */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <p className="text-xs font-mono font-bold text-zinc-400 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t.selectOrUpload}</span>
                    </p>
                    
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-2.5 py-1 rounded-lg bg-emerald-950/90 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 font-mono text-[11px] font-extrabold flex items-center gap-1.5 transition-all shadow-sm"
                    >
                      <Plus className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t.uploadNewPhoto}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-2 max-h-[360px] overflow-y-auto pr-1">
                    {samplesList.map((sample, idx) => {
                      const isCustom = sample.id.startsWith('custom-');
                      return (
                        <div
                          key={sample.id}
                          onClick={() => triggerSelectSample(idx)}
                          className={`w-full p-2.5 rounded-xl text-left text-xs font-bold transition-all flex items-center justify-between cursor-pointer border ${
                            selectedSampleIndex === idx
                              ? 'bg-zinc-900 border-emerald-500 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                              : 'bg-zinc-950 border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className={`w-5 h-5 rounded-md text-[10px] font-mono flex items-center justify-center shrink-0 ${
                              isCustom ? 'bg-indigo-900 text-indigo-300 font-extrabold' : 'bg-zinc-800 text-emerald-400'
                            }`}>
                              {idx + 1}
                            </span>
                            <span className="truncate">{formatContentText(sample.title, lang)}</span>
                            {isCustom && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-950 border border-indigo-500/40 text-indigo-300 font-mono shrink-0">
                                {t.customTag}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2 shrink-0 ml-2">
                            {selectedSampleIndex === idx && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            )}
                            {isLocked && (
                              <span className="p-1 rounded text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 text-[10px] font-mono flex items-center gap-1 shrink-0" title={lang === 'en' ? 'Locked' : lang === 'zh-cn' ? '已锁定' : '已鎖定'}>
                                <Lock className="w-3 h-3 text-emerald-400" />
                              </span>
                            )}
                            {/* Deletion allowed for ALL samples (preset or custom) in edit mode or when unlocked */}
                            {(isEditMode || !isLocked) && (
                              <button
                                onClick={(e) => handleDeleteSample(sample.id, e)}
                                className="p-1 rounded text-zinc-500 hover:text-rose-400 hover:bg-zinc-800 transition-colors"
                                title={t.deletePhotoTitle}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Right Column: Exact Software Output Display */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                
                {/* Global Read-Only Showcase Bar */}
                <div className="mb-3 p-3 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-between gap-3 shadow-md">
                  <div className="flex items-center gap-2 min-w-0">
                    <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs font-mono font-bold text-emerald-300 truncate">
                      {lang === 'en'
                        ? 'Standardized Workshop Showcase (Read-Only)'
                        : lang === 'zh-cn'
                        ? '标准化工作坊展示模式 (唯读保护)'
                        : '標準化工作坊展示模式 (唯讀保護)'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] font-mono text-emerald-400/80 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-lg">
                      {lang === 'en' ? '🔒 Locked Presentation' : '🔒 展示數據鎖定'}
                    </span>
                  </div>
                </div>
                
                {/* 1. DECODE AI OUTPUT PANEL */}
                {activeTab === 'decode-ai' && (
                  <div className="space-y-4">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                      <span className="text-xs font-mono font-extrabold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        {t.decodeTitle}
                      </span>
                      <span className="text-xs text-zinc-400 font-mono font-bold">Midjourney V6 & Flux</span>
                    </div>

                    {/* AI STRATEGY Box */}
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="text-[11px] font-mono font-extrabold text-amber-400 flex items-center gap-1.5">
                          <Lightbulb className="w-3.5 h-3.5" />
                          <span>{t.aiStrategyHeader}</span>
                        </div>
                        {isEditMode && <span className="text-[10px] text-amber-400/80 font-mono">{t.editableTag}</span>}
                      </div>
                      
                      {isEditMode ? (
                        <textarea
                          rows={3}
                          value={currentSample.aiStrategy}
                          onChange={(e) => updateCurrentSampleField('aiStrategy', e.target.value)}
                          className="w-full bg-zinc-900 border border-amber-500/50 text-xs font-sans text-zinc-100 p-3 rounded-xl focus:outline-none focus:border-amber-400 leading-relaxed"
                          placeholder="AI Visual Strategy..."
                        />
                      ) : (
                        <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                          {renderAiStrategyText(currentSample.aiStrategy, lang)}
                        </p>
                      )}
                    </div>

                    {/* GENERAL PHOTO PROMPT Box */}
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-extrabold text-indigo-400">
                          {t.generalPromptLabel}
                        </span>
                        <button
                          onClick={() => handleCopyText(currentSample.generalPrompt, 'general')}
                          className="px-3 py-1 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-[11px] font-bold flex items-center gap-1.5 transition-all shadow-sm"
                        >
                          {copiedSection === 'general' ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-300" />
                              <span>{t.copiedBtn}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>{t.copyPromptBtn}</span>
                            </>
                          )}
                        </button>
                      </div>

                      {isEditMode ? (
                        <textarea
                          rows={3}
                          value={currentSample.generalPrompt}
                          onChange={(e) => updateCurrentSampleField('generalPrompt', e.target.value)}
                          className="w-full bg-zinc-900 border border-indigo-500/50 text-xs font-mono text-indigo-200 p-3 rounded-xl focus:outline-none focus:border-indigo-400 leading-relaxed"
                          placeholder="General Photo Prompt..."
                        />
                      ) : (
                        <p className="text-xs font-mono text-zinc-200 leading-relaxed bg-zinc-900/90 p-3 rounded-xl border border-zinc-850">
                          {currentSample.generalPrompt}
                        </p>
                      )}
                    </div>

                    {/* MIDJOURNEY / LUMA PROMPT Box */}
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-extrabold text-purple-400 flex items-center gap-1">
                          {t.mjLumaPromptLabel}
                        </span>
                        <button
                          onClick={() => handleCopyText(currentSample.mjPrompt, 'mj')}
                          className="px-3 py-1 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-[11px] font-bold flex items-center gap-1.5 transition-all shadow-sm"
                        >
                          {copiedSection === 'mj' ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-300" />
                              <span>{t.copiedBtn}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>{t.copyMjPromptBtn}</span>
                            </>
                          )}
                        </button>
                      </div>

                      {isEditMode ? (
                        <textarea
                          rows={3}
                          value={currentSample.mjPrompt}
                          onChange={(e) => updateCurrentSampleField('mjPrompt', e.target.value)}
                          className="w-full bg-zinc-900 border border-purple-500/50 text-xs font-mono text-purple-200 p-3 rounded-xl focus:outline-none focus:border-purple-400 leading-relaxed"
                          placeholder="Midjourney Prompt..."
                        />
                      ) : (
                        <p className="text-xs font-mono text-purple-200 leading-relaxed bg-zinc-900/90 p-3 rounded-xl border border-zinc-850">
                          {currentSample.mjPrompt}
                        </p>
                      )}
                    </div>

                    {/* Action Bar */}
                    <div className="pt-2 flex items-center justify-between gap-3 text-xs font-bold">
                      <span className="text-zinc-500 font-mono text-[11px]">{t.sampleLabel} #{selectedSampleIndex + 1}: {formatContentText(currentSample.categoryTag, lang)}</span>
                      <a
                        href={GUMROAD_BUY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 shadow-md"
                      >
                        <span>{t.getLicenseBtn}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>
                )}

                {/* 2. STOCKSENSEI X OUTPUT PANEL */}
                {activeTab === 'stocksensei-x' && (
                  <div className="space-y-4">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                      <span className="text-xs font-mono font-extrabold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                        STOCKSENSEI X METADATA & 49 TAGS
                      </span>
                      <span className="text-xs text-emerald-400 font-extrabold font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/30">
                        ✓ Exact {currentSample.keywordsArray.length} Tags
                      </span>
                    </div>

                    {/* 推薦最佳標題 (BEST TITLE) */}
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-emerald-500/40 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-extrabold text-emerald-400 flex items-center gap-1">
                          {t.bestTitleHeader}
                        </span>
                        <button
                          onClick={() => handleCopyText(currentSample.bestTitle, 'bestTitle')}
                          className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors"
                          title="Copy Title"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {isEditMode ? (
                        <input
                          type="text"
                          value={currentSample.bestTitle}
                          onChange={(e) => updateCurrentSampleField('bestTitle', e.target.value)}
                          className="w-full bg-zinc-900 border border-emerald-500/50 text-sm font-extrabold text-white p-3 rounded-xl focus:outline-none focus:border-emerald-400 font-sans"
                          placeholder="Best Title..."
                        />
                      ) : (
                        <p className="text-sm font-extrabold text-white font-sans tracking-tight">
                          {formatContentText(currentSample.bestTitle, lang)}
                        </p>
                      )}
                    </div>

                    {/* SEO 標題選項 (OPTION 1 & 2) */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono font-bold text-zinc-400 flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{t.seoOptionLabel}</span>
                      </div>

                      {isEditMode ? (
                        <div className="space-y-2">
                          <input
                            type="text"
                            value={currentSample.seoOption1}
                            onChange={(e) => updateCurrentSampleField('seoOption1', e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-700 text-xs text-zinc-100 p-2.5 rounded-xl focus:outline-none focus:border-emerald-400 font-sans"
                            placeholder="SEO Option 1..."
                          />
                          <input
                            type="text"
                            value={currentSample.seoOption2}
                            onChange={(e) => updateCurrentSampleField('seoOption2', e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-700 text-xs text-zinc-100 p-2.5 rounded-xl focus:outline-none focus:border-emerald-400 font-sans"
                            placeholder="SEO Option 2..."
                          />
                        </div>
                      ) : (
                        <>
                          <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 font-medium flex items-center justify-between">
                            <span><strong className="text-zinc-500 font-mono mr-2">OPTION 1:</strong>{formatContentText(currentSample.seoOption1, lang)}</span>
                            <button
                              onClick={() => handleCopyText(currentSample.seoOption1, 'opt1')}
                              className="p-1 text-zinc-400 hover:text-white shrink-0 ml-2"
                            >
                              <Copy className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 font-medium flex items-center justify-between">
                            <span><strong className="text-zinc-500 font-mono mr-2">OPTION 2:</strong>{formatContentText(currentSample.seoOption2, lang)}</span>
                            <button
                              onClick={() => handleCopyText(currentSample.seoOption2, 'opt2')}
                              className="p-1 text-zinc-400 hover:text-white shrink-0 ml-2"
                            >
                              <Copy className="w-3 h-3" />
                            </button>
                          </div>
                        </>
                      )}
                    </div>

                    {/* KEYWORDS (49 IPTC Tags) */}
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-extrabold text-indigo-400 flex items-center gap-1">
                          <Tag className="w-3.5 h-3.5" />
                          KEYWORDS ({currentSample.keywordsArray.length} IPTC Tags)
                        </span>
                        <button
                          onClick={() => handleCopyText(currentSample.keywordsArray.join(', '), 'keywords')}
                          className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-[11px] font-bold flex items-center gap-1.5 transition-all shadow-sm"
                        >
                          {copiedSection === 'keywords' ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-300" />
                              <span>{t.copiedAllBtn}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>{t.copyAllBtn}</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Keywords Container */}
                      {isEditMode ? (
                        <div className="space-y-2">
                          <p className="text-[11px] text-amber-300 font-mono">
                            {t.editKeywordsPlaceholder}
                          </p>
                          <textarea
                            rows={5}
                            value={currentSample.keywordsArray.join(', ')}
                            onChange={(e) => {
                              const raw = e.target.value;
                              const splitArr = raw.split(',').map((s) => s.trim()).filter(Boolean);
                              updateCurrentSampleField('keywordsArray', splitArr);
                            }}
                            className="w-full bg-zinc-900 border border-indigo-500/50 text-xs font-mono text-zinc-100 p-3 rounded-xl focus:outline-none focus:border-indigo-400 leading-relaxed"
                            placeholder="tag1, tag2, tag3..."
                          />
                        </div>
                      ) : (
                        <div className="max-h-36 overflow-y-auto p-3 rounded-xl bg-zinc-900/90 border border-zinc-850 text-xs font-mono text-zinc-300 leading-relaxed">
                          {currentSample.keywordsArray.join(', ')}
                        </div>
                      )}
                    </div>

                    {/* Export CSV CTA */}
                    <button
                      onClick={handleDownloadCSV}
                      className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span>{csvDownloaded ? t.csvDownloadedBtn : t.downloadCsvBtn}</span>
                    </button>

                  </div>
                )}

                {/* 3. PHOTOCOACH OUTPUT PANEL (PURE DIAGNOSIS MODE) */}
                {activeTab === 'photocoach' && (
                  <div className="space-y-6">
                    
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-800">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight font-display">
                            {t.photoCoachTitle}
                          </h3>
                          <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-mono font-bold text-orange-400 flex items-center gap-1.5">
                            <span>🔍</span>
                            <span>{t.critiqueModeBadge}</span>
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1">
                          {t.photoCoachSub}
                        </p>
                      </div>

                      {isEditMode && (
                        <div className="flex items-center gap-2 bg-zinc-900 border border-amber-500/30 px-3 py-1.5 rounded-xl self-start sm:self-auto">
                          <span className="text-xs font-mono text-amber-400 font-bold">{t.commercialScoreEdit}</span>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={currentSample.score}
                            onChange={(e) => updateCurrentSampleField('score', Math.min(100, Math.max(0, Number(e.target.value) || 0)))}
                            className="w-16 bg-zinc-950 border border-amber-500/50 text-amber-300 font-extrabold text-sm p-1 rounded text-center focus:outline-none"
                          />
                          <span className="text-xs text-zinc-400 font-mono">%</span>
                        </div>
                      )}
                    </div>

                    {/* BLOCK 1: AI 重建提示詞 (AI Reconstructed Prompt) */}
                    <div className="p-5 rounded-2xl bg-zinc-950 border border-indigo-500/30 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-orange-400" />
                          <span className="text-sm font-extrabold text-white font-display">
                            {t.reconstructedPromptTitle}
                          </span>
                        </div>

                        <button
                          onClick={() => handleCopyText(currentSample.generalPrompt || currentSample.mjPrompt, 'reconstructed-prompt')}
                          className="px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono font-bold flex items-center gap-1.5 transition-all border border-zinc-700"
                        >
                          {copiedSection === 'reconstructed-prompt' ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">{t.copiedBtn}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-zinc-400" />
                              <span>{t.copyPromptBtn}</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Prompt Content / Editor */}
                      {isEditMode ? (
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-mono text-indigo-400 font-bold block">
                            {t.editPromptLabel}
                          </label>
                          <textarea
                            rows={4}
                            value={currentSample.generalPrompt}
                            onChange={(e) => {
                              updateCurrentSampleField('generalPrompt', e.target.value);
                              updateCurrentSampleField('mjPrompt', e.target.value);
                            }}
                            className="w-full bg-zinc-900 border border-indigo-500/50 text-zinc-100 p-3 rounded-xl focus:outline-none focus:border-indigo-400 text-xs font-mono leading-relaxed"
                            placeholder="A professional auto detailer wearing black nitrile gloves..."
                          />
                        </div>
                      ) : (
                        <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 leading-relaxed tracking-wide select-all">
                          {currentSample.generalPrompt || currentSample.mjPrompt}
                        </div>
                      )}
                    </div>

                    {/* BLOCK 2: 分析報告 (Analysis Report) */}
                    <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-5">
                      
                      {/* Header */}
                      <div className="flex items-center gap-2 border-b border-zinc-800/80 pb-3">
                        <BarChart3 className="w-5 h-5 text-orange-400" />
                        <h4 className="text-base font-extrabold text-white font-display">
                          {t.analysisReportTitle}
                        </h4>
                      </div>

                      {/* 商業價值評分 (COMMERCIAL SCORE) */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="font-extrabold text-zinc-400 uppercase tracking-wider">
                            {t.commercialScoreLabel}
                          </span>
                          <span className="text-3xl font-black font-display text-emerald-400">
                            {currentSample.score}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-500"
                            style={{ width: `${Math.min(100, Math.max(0, currentSample.score))}%` }}
                          />
                        </div>
                      </div>

                      {/* 診斷重點 / 缺陷提示卡片列表 (Issues & Critique Points) */}
                      <div className="space-y-2.5 pt-2">
                        <div className="text-xs font-mono font-extrabold text-zinc-300 flex flex-wrap items-center justify-between gap-2">
                          <span className="flex items-center gap-1.5">
                            <span>{t.defectComparisonTitle}</span>
                            <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[10px] font-mono">
                              {t.autoDiagnosticSymbolBadge}
                            </span>
                          </span>
                          {isEditMode ? (
                            <button
                              type="button"
                              onClick={() => {
                                const formatted = formatTextWithDiagnosticSymbols(currentSample.photoCoach.qualityCritique.flawsAndWeaknesses);
                                updatePhotoCoachCritiqueField('flawsAndWeaknesses', formatted);
                              }}
                              className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[11px] font-mono font-bold transition-all flex items-center gap-1 shadow-sm"
                            >
                              <span>{t.autoAddSymbolBtn}</span>
                            </button>
                          ) : (
                            <span className="text-[11px] text-zinc-500 font-mono">
                              {t.unlockToEditTip}
                            </span>
                          )}
                        </div>

                        {isEditMode ? (
                          <div className="space-y-1.5">
                            <textarea
                              rows={5}
                              value={currentSample.photoCoach.qualityCritique.flawsAndWeaknesses}
                              onChange={(e) => updatePhotoCoachCritiqueField('flawsAndWeaknesses', e.target.value)}
                              className="w-full bg-zinc-900 border border-amber-500/50 text-zinc-100 p-3 rounded-xl focus:outline-none focus:border-amber-400 text-xs font-sans leading-relaxed"
                              placeholder="Diagnosis points..."
                            />
                            <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                              <span>{t.editEnterTip}</span>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-2.5">
                            {getDiagnosticIssueList(currentSample.photoCoach.qualityCritique.flawsAndWeaknesses, lang).map((point, idx) => (
                              <div
                                key={idx}
                                className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800/90 hover:border-zinc-700 transition-all shadow-sm"
                              >
                                <p className="text-xs text-zinc-200 font-sans leading-relaxed font-medium">
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* 拍攝建議 (RESHOOT ADVICE) */}
                      <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2 mt-4">
                        <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-amber-400">
                          <Lightbulb className="w-4 h-4 text-amber-400" />
                          <span>{t.reshootAdviceTitle}</span>
                        </div>

                        {isEditMode ? (
                          <textarea
                            rows={4}
                            value={currentSample.photoCoach.qualityCritique.reshootAdvice}
                            onChange={(e) => updatePhotoCoachCritiqueField('reshootAdvice', e.target.value)}
                            className="w-full bg-zinc-900 border border-amber-500/50 text-zinc-100 p-3 rounded-xl focus:outline-none focus:border-amber-400 text-xs font-sans leading-relaxed"
                            placeholder="Reshoot Advice..."
                          />
                        ) : (
                          <p className="text-xs text-zinc-200 font-sans leading-relaxed pt-1">
                            {formatContentText(currentSample.photoCoach.qualityCritique.reshootAdvice, lang)}
                          </p>
                        )}
                      </div>

                    </div>

                  </div>
                )}

              </div>

            </div>
          ) : (
            
            /* 4. AI 智慧策略大腦 (全球市場情報) - DYNAMIC REFRESH & ROLLING HOLIDAYS */
            <div className="space-y-8">
              
              {/* Header Box */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-zinc-950 to-zinc-950 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <Brain className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight font-display">
                        {t.strategyBrainHeader}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono font-bold text-emerald-400">
                        {formatContentText(currentBrainDataset.source, lang)}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-emerald-400 font-extrabold mt-0.5">
                      {t.strategyBrainSub}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleRefreshBrain}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-extrabold flex items-center gap-2 transition-all shadow-lg shadow-emerald-600/20 border border-emerald-400/30 shrink-0"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-white ${isRefreshingBrain ? 'animate-spin' : ''}`} />
                  <span>{isRefreshingBrain ? t.fetchingTrendsBtn : t.refreshTrendsBtn}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Side: 當前熱門趨勢 */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-mono font-extrabold text-zinc-300 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span>{t.currentTrendsTitle} ({formatContentText(currentBrainDataset.source, lang)})</span>
                    </div>
                    <span className="text-[11px] text-zinc-500 font-mono">{t.realtimeDataBadge}</span>
                  </div>

                  <div className="space-y-3">
                    {currentBrainDataset.trendingThemes.map((theme) => (
                      <div key={theme.id} className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-emerald-500/40 transition-all group">
                        <h4 className="text-sm font-extrabold text-emerald-400 mb-1 group-hover:text-emerald-300">
                          {formatContentText(theme.title, lang)}
                        </h4>
                        <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                          {formatContentText(theme.description, lang)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: 季節性高頻搜尋詞 & 商業專家建議 */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* 季節性高頻搜尋詞 */}
                  <div className="space-y-3">
                    <div className="text-xs font-mono font-extrabold text-zinc-300 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span>{t.seasonalKeywordsTitle}</span>
                      </div>
                      <span className="text-[11px] text-zinc-500 font-mono">{t.clickToCopyBadge}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {currentBrainDataset.seasonalKeywords.map((kw) => (
                        <div
                          key={kw}
                          className="px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 flex items-center justify-between text-xs font-mono text-zinc-200 transition-colors"
                        >
                          <span className="truncate">{kw}</span>
                          <button
                            onClick={() => handleCopyText(kw, kw)}
                            className="p-1 text-zinc-500 hover:text-emerald-400 transition-colors ml-1"
                            title="Copy Keyword"
                          >
                            {copiedSection === kw ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 商業專家建議 */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-indigo-950/40 to-zinc-950 border border-indigo-500/30 space-y-2">
                    <div className="text-xs font-mono font-extrabold text-indigo-400 flex items-center gap-1.5">
                      <Lightbulb className="w-4 h-4 text-indigo-400" />
                      <span>{t.expertAdviceTitle}</span>
                    </div>
                    <p className="text-xs text-zinc-300 font-sans italic leading-relaxed pt-1">
                      "{formatContentText(currentBrainDataset.expertAdvice, lang)}"
                    </p>
                  </div>

                </div>

              </div>

              {/* Bottom Section: 即將到来的全球節慶 (未來 2 個月動態滾動計算) */}
              <div className="pt-6 border-t border-zinc-800 space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono font-extrabold text-zinc-300 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span>{t.upcomingHolidaysTitle}</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    💡 {t.autoFilterPastHolidays}
                  </span>
                </div>

                {/* Holiday Pills Grid */}
                <div className="flex flex-wrap gap-2">
                  {upcomingHolidaysList.map((hol) => {
                    const isSelected = selectedHolidayId === hol.id;
                    return (
                      <button
                        key={hol.id}
                        onClick={() => setSelectedHolidayId(hol.id)}
                        className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                            : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white'
                        }`}
                      >
                        {hol.monthDayStr && (
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isSelected ? 'bg-indigo-800 text-indigo-100' : 'bg-zinc-800 text-amber-400'}`}>
                            {hol.monthDayStr}
                          </span>
                        )}
                        <span>{lang === 'en' ? hol.nameEn : lang === 'zh-cn' ? convertTradToSimp(hol.nameZh) : `${hol.nameZh} (${hol.nameEn})`}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Holiday Keywords Box */}
                <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/40 space-y-3 mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-extrabold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
                      <span>"{lang === 'en' ? selectedHoliday.nameEn.toUpperCase() : lang === 'zh-cn' ? convertTradToSimp(selectedHoliday.nameZh).toUpperCase() : `${selectedHoliday.nameZh.toUpperCase()} (${selectedHoliday.nameEn.toUpperCase()})`}" KEYWORDS</span>
                      {selectedHoliday.monthDayStr && (
                        <span className="px-2 py-0.5 rounded bg-indigo-900 text-indigo-200 text-[10px]">
                          {lang === 'en' ? 'Expected Date: ' : lang === 'zh-cn' ? '预计档期: ' : '預計檔期: '}{selectedHoliday.monthDayStr}
                        </span>
                      )}
                    </span>

                    <button
                      onClick={() => handleCopyText(selectedHoliday.keywords.join(', '), 'hol-kw')}
                      className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-[11px] font-bold flex items-center gap-1.5 transition-all shadow-sm"
                    >
                      {copiedSection === 'hol-kw' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-300" />
                          <span>COPIED!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>全部複製</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Keywords Pills */}
                  <div className="flex flex-wrap gap-2">
                    {selectedHoliday.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-200 flex items-center gap-1.5"
                      >
                        <span>{kw}</span>
                        <button
                          onClick={() => handleCopyText(kw, `kw-${kw}`)}
                          className="text-zinc-500 hover:text-emerald-400 transition-colors"
                        >
                          {copiedSection === `kw-${kw}` ? (
                            <Check className="w-3 h-3 text-emerald-400" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          )}

        </div>

      </div>
    </section>
  );
};
