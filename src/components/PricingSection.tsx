import React, { useState } from 'react';
import { Language, PricingPlan } from '../types';
import { PRICING_PLANS } from '../data/companyData';
import {
  Check,
  Sparkles,
  Zap,
  Calculator,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  Receipt,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PricingSectionProps {
  lang: Language;
  onSelectPlan: (plan: PricingPlan) => void;
  onOpenCustomQuote: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  lang,
  onSelectPlan,
  onOpenCustomQuote
}) => {
  const isAr = lang === 'ar';

  // Quick interactive cost calculator state
  const [hasWebsite, setHasWebsite] = useState(true);
  const [hasMobileApp, setHasMobileApp] = useState(false);
  const [cameraCount, setCameraCount] = useState<number>(8);
  const [hasDataCenter, setHasDataCenter] = useState(false);
  const [hasSEO, setHasSEO] = useState(true);
  const [slaMonths, setSlaMonths] = useState<number>(6);
  const [calcSuccess, setCalcSuccess] = useState(false);

  // Dynamic estimate calculation
  const calculateTotal = () => {
    let total = 0;
    if (hasWebsite) total += 4500;
    if (hasMobileApp) total += 9500;
    total += cameraCount * 650;
    if (hasDataCenter) total += 14000;
    if (hasSEO) total += 3200;
    total += slaMonths * 1200;
    return total;
  };

  const totalEstimate = calculateTotal();
  const discountedTotal = Math.round(totalEstimate * 0.85); // 15% discount offer

  const handleRequestCustomQuotation = () => {
    setCalcSuccess(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => {
      onOpenCustomQuote();
      setCalcSuccess(false);
    }, 1200);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-900 relative border-b border-slate-800" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-xs text-amber-400 font-bold">
            <Receipt className="w-3.5 h-3.5" />
            <span>{isAr ? 'عروض وباقات الأسعار التنافسية' : 'Corporate Packages & Transparent Pricing'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {isAr ? (
              <>
                عروض أسعار <span className="text-amber-400">مرنة وشفافة</span>
              </>
            ) : (
              <>
                Flexible & Transparent <span className="text-amber-400">Price Proposals</span>
              </>
            )}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {isAr
              ? 'نقدم باقات متكاملة تلبي تطلعات الشركات الناشئة والمتوسطة والمشاريع الكبرى في المملكة مع ضمان الجودة والدعم الفني المدار.'
              : 'Turnkey price packages designed for startups, SMEs, and large organizations with guaranteed SLAs and official warranties.'}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-slate-800/95 border-2 border-amber-500 shadow-2xl shadow-amber-500/10 scale-100 lg:-translate-y-2'
                    : 'bg-slate-800/60 border border-slate-700 hover:border-slate-600'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 start-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs px-4 py-1 rounded-full shadow-lg">
                    {isAr ? '⭐ الخيار الأكثر طلباً للشركات' : '⭐ Most Popular Enterprise Choice'}
                  </div>
                )}

                <div>
                  {/* Plan Title & Tagline */}
                  <div className="border-b border-slate-700/80 pb-5 mb-6">
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                      {plan.title[lang]}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {plan.tagline[lang]}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-amber-400">
                      {plan.priceSAR.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      {isAr ? 'ريال سعودي' : 'SAR'}
                    </span>
                    <span className="text-[11px] text-slate-400 ps-1 font-normal">
                      / {plan.period[lang]}
                    </span>
                  </div>

                  {/* Suitable For */}
                  <div className="bg-slate-900/70 rounded-xl p-3 mb-6 text-xs text-slate-300 border border-slate-800">
                    <span className="font-bold text-amber-400">{isAr ? 'مناسب لـ: ' : 'Best for: '}</span>
                    {plan.suitableFor[lang]}
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {isAr ? 'المزايا والمواصفات المشمولة:' : 'Included Specifications:'}
                    </p>
                    {plan.features[lang].map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-4 rounded-2xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/25'
                        : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                    }`}
                  >
                    <span>{isAr ? 'اطلب هذا العرض الآن' : 'Select This Package'}</span>
                    {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </button>
                  <p className="text-center text-[10px] text-slate-400 mt-2">
                    {isAr ? 'شامل الدعم الفني وضمان التنفيذ' : 'Includes warranty & dedicated SLA'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Custom Quotation Builder / Price Estimator */}
        <div className="bg-slate-950 border-2 border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden" id="custom-quote-builder">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold mb-1">
                <Calculator className="w-4 h-4" />
                <span>{isAr ? 'حاسبة التكلفة التقديرية الفورية' : 'Instant Interactive Price Estimator'}</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                {isAr ? 'صمم باقة مشروعك المخصصة واحصل على تقدير مباشر' : 'Build Your Custom Architecture & Estimate'}
              </h3>
            </div>
            
            <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1.5 rounded-full font-bold">
              {isAr ? 'خصم فوري 15% مطبق' : '15% Instant Discount Applied'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
            
            {/* Options Checkboxes */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <label className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-3.5 rounded-2xl cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={hasWebsite}
                  onChange={(e) => setHasWebsite(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500 bg-slate-800 border-slate-700"
                />
                <div className="text-xs">
                  <div className="font-bold text-white">{isAr ? 'موقع إلكتروني تعريفي متطور' : 'Corporate Web Platform'}</div>
                  <div className="text-slate-400 text-[11px]">+4,500 {isAr ? 'ر.س' : 'SAR'}</div>
                </div>
              </label>

              <label className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-3.5 rounded-2xl cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={hasMobileApp}
                  onChange={(e) => setHasMobileApp(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500 bg-slate-800 border-slate-700"
                />
                <div className="text-xs">
                  <div className="font-bold text-white">{isAr ? 'تطبيق جوال ذكي (iOS & Android)' : 'Mobile App (iOS & Android)'}</div>
                  <div className="text-slate-400 text-[11px]">+9,500 {isAr ? 'ر.س' : 'SAR'}</div>
                </div>
              </label>

              <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl">
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-bold text-white">{isAr ? 'كاميرات مراقبة CCTV معتمدة' : 'Certified CCTV Cameras'}</span>
                  <span className="text-amber-400 font-bold">{cameraCount} {isAr ? 'كاميرات' : 'Units'}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="32"
                  step="4"
                  value={cameraCount}
                  onChange={(e) => setCameraCount(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div className="text-[10px] text-slate-400 mt-1">
                  {cameraCount * 650} {isAr ? 'ر.س (شامل التوريد والتركيب والبرمجة)' : 'SAR (Turnkey IP 4K)'}
                </div>
              </div>

              <label className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-3.5 rounded-2xl cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={hasDataCenter}
                  onChange={(e) => setHasDataCenter(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500 bg-slate-800 border-slate-700"
                />
                <div className="text-xs">
                  <div className="font-bold text-white">{isAr ? 'تجهيز غرفة سيرفر وشبكة ألياف' : 'Server Room & Fiber Backbone'}</div>
                  <div className="text-slate-400 text-[11px]">+14,000 {isAr ? 'ر.س' : 'SAR'}</div>
                </div>
              </label>

              <label className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-3.5 rounded-2xl cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={hasSEO}
                  onChange={(e) => setHasSEO(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500 bg-slate-800 border-slate-700"
                />
                <div className="text-xs">
                  <div className="font-bold text-white">{isAr ? 'حملات تسويق رقمي وسيو SEO' : 'SEO & Ads Growth Strategy'}</div>
                  <div className="text-slate-400 text-[11px]">+3,200 {isAr ? 'ر.س' : 'SAR'}</div>
                </div>
              </label>

              <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl">
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-bold text-white">{isAr ? 'عقد دعم فني مدار SLA' : 'Managed SLA Support'}</span>
                  <span className="text-amber-400 font-bold">{slaMonths} {isAr ? 'أشهر' : 'Months'}</span>
                </div>
                <select
                  value={slaMonths}
                  onChange={(e) => setSlaMonths(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg py-1 px-2 text-xs text-white outline-none"
                >
                  <option value={0}>{isAr ? 'بدون عقد صيانة إضافي' : 'No extra SLA'}</option>
                  <option value={3}>{isAr ? '3 أشهر دعم مدار (3,600 ر.س)' : '3 Months (3,600 SAR)'}</option>
                  <option value={6}>{isAr ? '6 أشهر دعم مدار (7,200 ر.س)' : '6 Months (7,200 SAR)'}</option>
                  <option value={12}>{isAr ? 'سنة كاملة دعم مدار (14,400 ر.س)' : '12 Months (14,400 SAR)'}</option>
                </select>
              </div>

            </div>

            {/* Total Calculation Display Card */}
            <div className="lg:col-span-4 bg-slate-900 border border-amber-500/30 rounded-3xl p-6 text-center space-y-4 shadow-xl">
              <span className="text-xs font-bold text-slate-400">
                {isAr ? 'التكلفة الإجمالية التقديرية' : 'Estimated Investment'}
              </span>

              <div>
                <div className="text-xs text-slate-400 line-through">
                  {totalEstimate.toLocaleString()} {isAr ? 'ر.س' : 'SAR'}
                </div>
                <div className="text-3xl sm:text-4xl font-black text-amber-400">
                  {discountedTotal.toLocaleString()}{' '}
                  <span className="text-xs font-normal text-slate-300">{isAr ? 'ر.س' : 'SAR'}</span>
                </div>
                <p className="text-[11px] text-emerald-400 font-semibold mt-1">
                  {isAr ? 'وفرت 15% بموجب العرض الحالي' : 'Saved 15% with current promotion'}
                </p>
              </div>

              <button
                onClick={handleRequestCustomQuotation}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black py-3.5 rounded-xl text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="pricing-request-custom-quote-btn"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isAr ? 'طلب عرض سعر رسمي بهذه المواصفات' : 'Request Official PDF Proposal'}</span>
              </button>

              <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>{isAr ? 'يشمل زيارة ميدانية مجانية للموقع' : 'Includes free on-site survey'}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
