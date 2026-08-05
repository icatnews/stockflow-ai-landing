export type Language = 'en' | 'zh' | 'zh-cn';

export interface CoreModule {
  id: 'decode-ai' | 'stocksensei-x' | 'photocoach' | 'trend-sniper';
  name: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
  features: string[];
  ctaText: string;
}

export interface PricingTier {
  id: string;
  title: string;
  price: string;
  originalPrice: string;
  period: string;
  badge?: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
  isPopular?: boolean;
}

export interface TrendItem {
  id: string;
  title: string;
  category: string;
  growth: string;
  season: string;
  keywords: string[];
  demandScore: number;
  description: string;
  targetPlatforms: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
