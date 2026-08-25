export type Language = 'ar' | 'en';

export interface NavItem {
  id: string;
  label: { ar: string; en: string };
  href: string;
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: { ar: string; en: string };
  shortDesc: { ar: string; en: string };
  fullDesc: { ar: string; en: string };
  features: { ar: string[]; en: string[] };
  tags: string[];
  startingPrice: { ar: string; en: string };
}

export interface ProjectItem {
  id: string;
  title: { ar: string; en: string };
  category: 'web' | 'mobile' | 'cloud' | 'security' | 'marketing';
  categoryLabel: { ar: string; en: string };
  status: 'in_progress' | 'completed';
  statusLabel: { ar: string; en: string };
  client: { ar: string; en: string };
  location: { ar: string; en: string };
  description: { ar: string; en: string };
  image: string;
  impactMetrics: { ar: string; en: string };
  technologies: string[];
}

export interface ReviewItem {
  id: string;
  name: { ar: string; en: string };
  role: { ar: string; en: string };
  company: { ar: string; en: string };
  avatar: string;
  rating: number;
  content: { ar: string; en: string };
  date: { ar: string; en: string };
  verified: boolean;
}

export interface PricingPlan {
  id: string;
  title: { ar: string; en: string };
  tagline: { ar: string; en: string };
  priceSAR: number;
  period: { ar: string; en: string };
  popular?: boolean;
  features: { ar: string[]; en: string[] };
  suitableFor: { ar: string; en: string };
}

export interface JobOpening {
  id: string;
  title: { ar: string; en: string };
  department: { ar: string; en: string };
  type: { ar: string; en: string };
  location: { ar: string; en: string };
  experience: { ar: string; en: string };
  requirements: { ar: string[]; en: string[] };
}
