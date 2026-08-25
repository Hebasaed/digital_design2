import React, { useState } from 'react';
import { Language, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/companyData';
import {
  Smartphone,
  Server,
  ShieldCheck,
  Lock,
  TrendingUp,
  Headphones,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectService,
  onOpenConsultation
}) => {
  const isAr = lang === 'ar';
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Smartphone':
        return Smartphone;
      case 'Server':
        return Server;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Lock':
        return Lock;
      case 'TrendingUp':
        return TrendingUp;
      case 'Headphones':
        return Headphones;
      default:
        return Zap;
    }
  };

  const allTags = ['all', 'Web & Mobile', 'Data Center', 'CCTV & Security', 'Cloud & Cyber', 'Marketing', 'SLA Support'];

  return (
    <section className="py-16 sm:py-24 bg-slate-900/60 relative border-b border-slate-800" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-xs text-amber-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAr ? 'منظومة حلولنا الرقمية المتطورة' : 'Our Advanced Digital Suite'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {isAr ? (
              <>
                خدمات متكاملة تصنع <span className="text-amber-400">الفارق لشركتك</span>
              </>
            ) : (
              <>
                Integrated Services Driving <span className="text-amber-400">Enterprise Growth</span>
              </>
            )}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {isAr
              ? 'نجمع بين الخبرة الهندسية والبنية التقنية المتينة لنقدم لعملائنا في كافة مناطق المملكة العربية السعودية حلولاً مبتكرة ترفع الكفاءة التشغيلية وتحمي أصولهم الرقمية.'
              : 'Combining enterprise engineering with robust IT foundations to deliver tailored digital solutions across all regions of Saudi Arabia.'}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 card-hover-glow group shadow-xl relative overflow-hidden"
              >
                {/* Subtle top amber glow line on hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Icon + Starting Price */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="text-[11px] font-bold bg-slate-900/90 text-amber-300 border border-slate-700 px-3 py-1.5 rounded-full">
                      {service.startingPrice[lang]}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors leading-snug">
                    {service.title[lang]}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {service.shortDesc[lang]}
                  </p>

                  {/* Features Checklist */}
                  <div className="space-y-2.5 mb-6 pt-3 border-t border-slate-700/60">
                    {service.features[lang].slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-900/80 text-slate-400 px-2 py-0.5 rounded-md font-mono">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>{isAr ? 'تفاصيل وطلب' : 'Details & Order'}</span>
                    {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Custom Requirement */}
        <div className="mt-12 bg-gradient-to-r from-slate-800 via-slate-850 to-slate-800 border border-slate-700 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-start">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {isAr ? 'هل لديك مشروع خاص أو متطلبات برمجية وبنية تحتية محددة؟' : 'Have custom specifications or large enterprise requirements?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {isAr ? 'يقوم فريقنا الهندسي بتصميم حلول مخصصة تلائم حجم أعمالك بدقة.' : 'Our architectural team designs tailored IT setups matching your operational footprint.'}
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-2xl text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center gap-2 cursor-pointer"
            id="services-custom-rfp-btn"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isAr ? 'طلب استشارة ومقترح فني' : 'Request Technical Proposal'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
