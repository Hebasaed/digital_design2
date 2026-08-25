import React, { useState } from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import {
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  Mail,
  Zap,
  Award,
  Users,
  Briefcase,
  TrendingUp,
  Cpu
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  lang: Language;
  onOpenConsultation: () => void;
  onOpenQuote: () => void;
  onQuickBook: (data: { phone: string; email: string; service: string }) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenConsultation,
  onOpenQuote,
  onQuickBook
}) => {
  const isAr = lang === 'ar';
  const [quickPhone, setQuickPhone] = useState('');
  const [quickEmail, setQuickEmail] = useState('');
  const [quickService, setQuickService] = useState('all');
  const [submitted, setSubmitted] = useState(false);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone || !quickEmail) return;

    onQuickBook({
      phone: quickPhone,
      email: quickEmail,
      service: quickService
    });

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setQuickPhone('');
      setQuickEmail('');
    }, 4000);
  };

  const metrics = [
    {
      value: '+12',
      label: { ar: 'عاماً من الريادة والخبرة', en: 'Years Experience' },
      icon: Award
    },
    {
      value: '+240',
      label: { ar: 'مشروعاً رقمياً منجزاً', en: 'Projects Delivered' },
      icon: Briefcase
    },
    {
      value: '+120',
      label: { ar: 'شريكاً وعميلاً استراتيجياً', en: 'Enterprise Clients' },
      icon: Users
    },
    {
      value: '99.4%',
      label: { ar: 'نسبة رضا العملاء', en: 'Client Satisfaction' },
      icon: TrendingUp
    }
  ];

  return (
    <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800" id="hero">
      {/* Background Decor Gradients & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.12),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,41,59,0.7),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 pb-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Captivating Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* National Tag & Tech Badge */}
            <div className="inline-flex items-center gap-2.5 bg-slate-800/90 border border-amber-500/30 rounded-full px-4 py-1.5 text-xs text-amber-300 font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>
                {isAr
                  ? 'رؤية المملكة 2030 • شريكك المعتمد للتحول والحلول الرقمية'
                  : 'Saudi Vision 2030 • Certified Enterprise Digital Partner'}
              </span>
            </div>

            {/* Main Catchy Title for Clients */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.18] tracking-tight">
                {isAr ? (
                  <>
                    نحن نبني <span className="text-amber-400">المستقبل الرقمي</span> <br />
                    بأعلى معايير الابتكار والاحترافية
                  </>
                ) : (
                  <>
                    We Build <span className="text-amber-400">Digital Futures</span> <br />
                    With Engineering Precision
                  </>
                )}
              </h1>
              
              <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
                {isAr
                  ? 'منظومة تقنية متكاملة في المملكة العربية السعودية: تصميم وتطوير المنصات والتطبيقات الذكية، مراكز البيانات والشبكات، الأنظمة الأمنية والمراقبة CCTV المعتمدة، والتسويق الرقمي عالي الأثر.'
                  : 'Comprehensive IT & Digital solutions in Saudi Arabia: custom web/mobile platforms, data center infrastructure, certified CCTV & cybersecurity, and high-ROAS digital marketing.'}
              </p>
            </div>

            {/* Quick Core Benefits Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs text-slate-200">
              <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/80 rounded-xl p-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isAr ? 'عقود معتمدة رسمياً' : 'Official Certifications'}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/80 rounded-xl p-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isAr ? 'امتثال أمني وسيبراني' : 'NCA Compliance'}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/80 rounded-xl p-2.5 col-span-2 sm:col-span-1">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isAr ? 'دعم مدار SLA 24/7' : '24/7 Managed SLA'}</span>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onOpenConsultation}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-6 sm:px-8 py-4 rounded-2xl text-sm sm:text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center gap-2.5 group cursor-pointer"
                id="hero-primary-cta"
              >
                <Sparkles className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
                <span>{isAr ? 'احجز استشارتك المجانية الآن' : 'Claim Free Consultation Now'}</span>
                {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>

              <a
                href="#projects"
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold border border-slate-700 hover:border-amber-500/40 px-6 py-4 rounded-2xl text-sm sm:text-base transition-all flex items-center gap-2"
                id="hero-view-projects-btn"
              >
                <Briefcase className="w-4 h-4 text-amber-400" />
                <span>{isAr ? 'استعرض المشاريع الحالية' : 'Explore Current Projects'}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Free Consultation & Fast Contact Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl shadow-2xl border-4 border-amber-500/20 p-6 sm:p-8 relative text-slate-900 card-hover-glow" id="hero-quick-consultation-card">
              
              {/* Special Offer Ribbon */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full inline-block mb-1">
                    {isAr ? 'عرض مجاني للمنشآت والشركات' : 'Free Enterprise Offer'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {isAr ? 'استشارة تقنية مجانية' : 'Free Tech Consultation'}
                  </h3>
                </div>
                <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center font-black text-slate-950 text-xl shadow-lg shadow-amber-500/30">
                  %
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm mb-5 leading-relaxed">
                {isAr
                  ? 'اترك رقم جوالك وبريدك الإلكتروني، وسيقوم أحد كبار مستشارينا بالتواصل معك لتشخيص متطلباتك وتقديم خطة عمل مخصصة مجاناً.'
                  : 'Enter your phone number & email to connect with our senior IT architect for a complimentary technical audit & project roadmap.'}
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-6 text-center space-y-2 animate-fadeIn">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-base">
                    {isAr ? 'تم استلام طلبك بنجاح!' : 'Request Received Successfully!'}
                  </h4>
                  <p className="text-xs text-emerald-700">
                    {isAr
                      ? 'سيتواصل معك مهندسنا المختص خلال 24 ساعة عبر الهاتف والبريد.'
                      : 'Our dedicated IT consultant will contact you within 24 hours.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleHeroSubmit} className="space-y-4">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {isAr ? 'رقم الجوال (السعودية)' : 'Mobile Phone (KSA)'} <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        placeholder="05X XXX XXXX"
                        value={quickPhone}
                        onChange={(e) => setQuickPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 ps-10 pe-4 text-slate-900 text-sm font-medium outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-start"
                        id="hero-phone-input"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {isAr ? 'البريد الإلكتروني للعمل' : 'Business Email Address'} <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        dir="ltr"
                        placeholder="name@company.com"
                        value={quickEmail}
                        onChange={(e) => setQuickEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 ps-10 pe-4 text-slate-900 text-sm font-medium outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-start"
                        id="hero-email-input"
                      />
                    </div>
                  </div>

                  {/* Service selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {isAr ? 'مجال الخدمة المطلوب' : 'Service Domain of Interest'}
                    </label>
                    <select
                      value={quickService}
                      onChange={(e) => setQuickService(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-3 text-slate-800 text-xs sm:text-sm font-medium outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all cursor-pointer"
                      id="hero-service-select"
                    >
                      <option value="all">{isAr ? 'جميع الخدمات والحلول الرقمية' : 'All Digital & IT Solutions'}</option>
                      <option value="apps">{isAr ? 'تصميم وتطوير المواقع والتطبيقات' : 'Web & Mobile App Development'}</option>
                      <option value="infrastructure">{isAr ? 'تجهيز مراكز البيانات والشبكات' : 'Data Center & Network Setup'}</option>
                      <option value="security">{isAr ? 'كاميرات المراقبة والأنظمة الأمنية' : 'CCTV & Physical Security'}</option>
                      <option value="cloud">{isAr ? 'الأمن السيبراني والسحابة' : 'Cybersecurity & Cloud Systems'}</option>
                      <option value="marketing">{isAr ? 'التسويق الرقمي وإدارة الحملات' : 'Digital Marketing & SEO'}</option>
                      <option value="sla">{isAr ? 'عقود الصيانة والدعم الفني السنوي' : 'Annual IT SLA & Maintenance'}</option>
                    </select>
                  </div>

                  {/* Special Bonus Badge */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center justify-between">
                    <span className="text-amber-900 text-xs font-bold">
                      {isAr ? '🎁 خصم 15% إضافي عند التعاقد خلال هذا الأسبوع' : '🎁 Extra 15% discount for bookings this week'}
                    </span>
                    <span className="text-amber-700 font-extrabold text-xs">KSA</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl text-sm sm:text-base shadow-lg shadow-slate-900/20 hover:shadow-slate-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                    id="hero-submit-consultation-btn"
                  >
                    <span>{isAr ? 'اطلب استشارتك المجانية وعرض السعر' : 'Get Free Consultation & Quote'}</span>
                    {isAr ? <ArrowLeft className="w-4 h-4 text-amber-400" /> : <ArrowRight className="w-4 h-4 text-amber-400" />}
                  </button>
                </form>
              )}

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  {isAr ? 'بياناتك مشفرة ومحمية 100%' : '100% Encrypted & Private'}
                </span>
                <span>{isAr ? 'استجابة خلال 24 ساعة' : 'Response in 24h'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Key Metrics Strip */}
        <div className="mt-14 pt-10 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/50 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 hover:border-amber-500/30 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    {item.label[lang]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
