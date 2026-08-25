import React from 'react';
import { Language } from '../types';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Globe,
  ArrowUp,
  Heart
} from 'lucide-react';

interface FooterProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onToggleLang,
  onOpenConsultation
}) => {
  const isAr = lang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs relative">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info & Vision */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" lang={lang} />
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md pt-2">
              {isAr
                ? 'شركة الفكر الرقمي (DT-KSA / RT-KSA) - شريكك الاستراتيجي في المملكة العربية السعودية للحلول الرقمية المتكاملة، مراكز البيانات، البنية التحتية، والأنظمة الأمنية المعتمدة.'
                : 'Digital Thought Company - Premier enterprise digital transformation, data center engineering, certified CCTV security, and managed IT services in Saudi Arabia.'}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] text-slate-300">
              <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">
                {isAr ? 'س.ت: 1010789452' : 'CR: 1010789452'}
              </span>
              <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">
                {isAr ? 'الرقم الضريبي: 31045892100003' : 'VAT: 31045892100003'}
              </span>
              <span className="bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 px-3 py-1 rounded-lg flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                {isAr ? 'معتمد HCIS والدفاع المدني' : 'HCIS & MOI Compliant'}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {isAr ? 'روابط سريعة' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'الرئيسية' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'خدماتنا الرقمية' : 'Digital Services'}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'المشاريع الحالية' : 'Current Projects'}
                </a>
              </li>
              <li>
                <a href="#consultation" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'عرض الاستشارة المجانية' : 'Free Consultation'}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'عروض الأسعار' : 'Pricing & Offers'}
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'التوظيف وانضم إلينا' : 'Join Us / Careers'}
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {isAr ? 'الحلول التقنية' : 'Solutions'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>{isAr ? 'تصميم وتطوير التطبيقات' : 'Web & Mobile Apps'}</li>
              <li>{isAr ? 'مراكز البيانات والشبكات' : 'Data Center & Cabling'}</li>
              <li>{isAr ? 'كاميرات المراقبة والأمن' : 'CCTV & Access Control'}</li>
              <li>{isAr ? 'الأمن السيبراني والسحابة' : 'Cybersecurity & Cloud'}</li>
              <li>{isAr ? 'التسويق الرقمي وسيو SEO' : 'Digital Growth & SEO'}</li>
              <li>{isAr ? 'عقود الدعم المدار SLA' : 'Managed IT Support'}</li>
            </ul>
          </div>

          {/* Contact Details & Direct Action */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {isAr ? 'تواصل مباشر' : 'Direct Line'}
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span dir="ltr" className="font-bold">{COMPANY_INFO.phoneDisplay}</span>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-snug">{COMPANY_INFO.addressAr}</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-2.5 rounded-xl text-xs shadow-md transition-all cursor-pointer"
            >
              {isAr ? 'احجز استشارتك المجانية الآن' : 'Book Free Consultation'}
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Bar (Copyright & Language Switch) */}
      <div className="bg-slate-900 border-t border-slate-800/80 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            {isAr
              ? `جميع الحقوق محفوظة © ${new Date().getFullYear()} لشركة الفكر الرقمي لتقنية المعلومات والحلول الذكية (DT-KSA / RT-KSA)`
              : `All rights reserved © ${new Date().getFullYear()} Digital Thought IT & Smart Solutions Company (DT-KSA / RT-KSA)`}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 text-slate-300 hover:text-amber-400 font-bold cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{isAr ? 'English Language' : 'اللغة العربية'}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-amber-400 flex items-center justify-center transition-colors cursor-pointer"
              title={isAr ? 'العودة لأعلى الصفحة' : 'Scroll to top'}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
