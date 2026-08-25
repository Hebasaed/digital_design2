import React, { useState } from 'react';
import { Language, PricingPlan } from '../types';
import { pricingPlans } from '../data/content';
import { 
  Check, 
  Sparkles, 
  Calculator, 
  HelpCircle, 
  ArrowLeft, 
  ArrowRight, 
  Zap, 
  ShieldAlert, 
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PriceOfferSectionProps {
  lang: Language;
  onSelectPlan: (plan: PricingPlan) => void;
  onOpenCustomQuote: () => void;
}

export const PriceOfferSection: React.FC<PriceOfferSectionProps> = ({
  lang,
  onSelectPlan,
  onOpenCustomQuote,
}) => {
  const [projectScope, setProjectScope] = useState<'standard' | 'enterprise'>('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [estimateClientPhone, setEstimateClientPhone] = useState('');
  const [estimateClientEmail, setEstimateClientEmail] = useState('');
  const [quoteSent, setQuoteSent] = useState(false);

  const addonsList = [
    { id: 'payment', name: { ar: 'ربط بوابات الدفع (مدى + أبل باي + تمارا)', en: 'Saudi Payment Gateway (Mada, Apple Pay, Tamara)' }, price: 1500 },
    { id: 'seo', name: { ar: 'تهيئة محركات البحث المتقدمة (SEO) وتصدر جوجل', en: 'Advanced SEO & Google #1 Ranking Optimization' }, price: 2200 },
    { id: 'mobile_app', name: { ar: 'إصدار تطبيق جوال مرافق (iOS & Android)', en: 'Companion Mobile Apps (iOS & Android Native)' }, price: 5800 },
    { id: 'ai_bot', name: { ar: 'شات بوت ذكاء اصطناعي تفاعلي للواتساب والموقع', en: 'WhatsApp & Web AI Chatbot Automation' }, price: 2900 },
    { id: 'security_audit', name: { ar: 'تدقيق أمني واختبار اختراق وشهادة امتثال', en: 'Cybersecurity Penetration Testing & NCA Audit' }, price: 3400 },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const basePrice = projectScope === 'standard' ? 4900 : 11500;
  const addonsTotal = selectedAddons.reduce((acc, currId) => {
    const item = addonsList.find(a => a.id === currId);
    return acc + (item ? item.price : 0);
  }, 0);
  const totalCalculated = basePrice + addonsTotal;

  const handleSendEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!estimateClientPhone && !estimateClientEmail) return;
    setQuoteSent(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#F59E0B', '#FBBF24', '#10B981'],
    });
  };

  return (
    <section id="pricing" className="py-20 bg-[#0A1120] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'عروض الأسعار والباقات' : 'Transparent Pricing & Plans'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {lang === 'ar' ? (
              <>
                عروض أسعار واضحة <span className="gold-gradient-text">تناسب طموح مشروعك</span>
              </>
            ) : (
              <>
                Clear Packages & <span className="gold-gradient-text">Instant Quotation Engine</span>
              </>
            )}
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {lang === 'ar'
              ? 'باقات مدروسة مع إمكانية تفصيل عرض سعر مخصص يلبي متطلبات شركتك بدقة دون أي تكاليف خفية.'
              : 'Choose from our proven enterprise packages or build an instant custom estimation with zero hidden fees.'}
          </p>
        </div>

        {/* 3 Main Pricing Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {pricingPlans.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-slate-900 border-2 border-amber-500 shadow-2xl shadow-amber-500/10 lg:-translate-y-2'
                    : 'bg-slate-900/80 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 gold-gradient-bg text-slate-950 px-4 py-1 rounded-full text-xs font-extrabold shadow-md uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{lang === 'ar' ? 'الباقة الأكثر طلباً في المملكة' : 'Most Popular Choice'}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{plan.title[lang]}</h3>
                    <span className="text-xs text-amber-400/80 bg-amber-500/10 px-2.5 py-1 rounded-lg font-medium">
                      {plan.suitableFor[lang]}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                    {plan.tagline[lang]}
                  </p>

                  {/* Price Box */}
                  <div className="mb-6 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-black text-amber-400">
                        {plan.priceSAR.toLocaleString()}
                      </span>
                      <span className="text-xs font-bold text-slate-300">
                        {lang === 'ar' ? 'ريال سعودي' : 'SAR'}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {plan.period[lang]}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      {lang === 'ar' ? 'المزايا المشمولة:' : "What's Included:"}
                    </div>
                    {plan.features[lang].map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-4 rounded-2xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 ${
                    isPopular
                      ? 'gold-gradient-bg text-slate-950 shadow-lg shadow-amber-500/20 hover:brightness-110'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>{lang === 'ar' ? 'اختيار هذه الباقة وطلب العرض' : 'Select Plan & Request Quotation'}</span>
                  {lang === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Custom Quotation & Instant Estimator Widget */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Calculator Options */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'حاسبة التكلفة التقديرية الفورية' : 'Instant Estimate Configurator'}</span>
                </div>
                <h3 className="text-2xl font-black text-white">
                  {lang === 'ar' ? 'خصص نطاق مشروعك واحصل على تسعير فوري' : 'Configure Custom Scope & Get Instant Pricing'}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {lang === 'ar' ? 'حدد نوع المشروع والخدمات الإضافية لمعاينة التكلفة التقديرية' : 'Select your primary base framework and optional enterprise add-ons.'}
                </p>
              </div>

              {/* Scope radio options */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setProjectScope('standard')}
                  className={`p-3.5 rounded-2xl border text-start transition-all ${
                    projectScope === 'standard'
                      ? 'bg-amber-500/15 border-amber-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="font-bold text-xs sm:text-sm text-white">
                    {lang === 'ar' ? 'موقع أو منصة قياسية' : 'Standard Web / Portal'}
                  </div>
                  <div className="text-[11px] text-amber-400 mt-0.5">
                    {lang === 'ar' ? 'قاعدة: 4,900 ر.س' : 'Base: 4,900 SAR'}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setProjectScope('enterprise')}
                  className={`p-3.5 rounded-2xl border text-start transition-all ${
                    projectScope === 'enterprise'
                      ? 'bg-amber-500/15 border-amber-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="font-bold text-xs sm:text-sm text-white">
                    {lang === 'ar' ? 'منصة متقدمة / متجر شامل' : 'Advanced Enterprise SaaS'}
                  </div>
                  <div className="text-[11px] text-amber-400 mt-0.5">
                    {lang === 'ar' ? 'قاعدة: 11,500 ر.س' : 'Base: 11,500 SAR'}
                  </div>
                </button>
              </div>

              {/* Addons checkboxes */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-300">
                  {lang === 'ar' ? 'إضافات ومزايا متخصصة:' : 'Specialized Add-ons:'}
                </div>
                <div className="space-y-2">
                  {addonsList.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-slate-800 border-amber-500/60 text-white'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                            isChecked ? 'bg-amber-500 border-amber-500 text-slate-950 font-bold' : 'border-slate-700'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-xs">{addon.name[lang]}</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-amber-400 shrink-0">
                          +{addon.price.toLocaleString()} {lang === 'ar' ? 'ر.س' : 'SAR'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Price Output & Client Submission Form */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="text-xs text-slate-400 mb-1">
                  {lang === 'ar' ? 'إجمالي التقدير الأولي للمشروع:' : 'Initial Project Estimation:'}
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-black gold-gradient-text">
                    {totalCalculated.toLocaleString()}
                  </span>
                  <span className="text-sm font-bold text-slate-300">
                    {lang === 'ar' ? 'ريال سعودي' : 'SAR'}
                  </span>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-[11px] text-slate-400 mb-6">
                  {lang === 'ar'
                    ? '💡 يشمل هذا التقدير الاستضافة السحابية لعام كامل، شهادة الحماية، والتدريب المجاني لفريقك.'
                    : '💡 Includes 1-year cloud hosting, SSL, documentation, and staff training.'}
                </div>

                {quoteSent ? (
                  <div className="bg-emerald-950/50 border border-emerald-500/40 rounded-2xl p-5 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                    <div className="text-sm font-bold text-white">
                      {lang === 'ar' ? 'تم إرسال العرض التقديري لبريدك وجوالك!' : 'Estimate Sent to Your Contact!'}
                    </div>
                    <p className="text-xs text-slate-400">
                      {lang === 'ar' ? 'سيتواصل معك مهندس التسعير في شركة الفكر الرقمي خلال 30 دقيقة.' : 'Our estimation engineer will follow up with official PDF proposal.'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSendEstimate} className="space-y-3">
                    <div className="text-xs font-bold text-white">
                      {lang === 'ar' ? 'استلم العرض الرسمي بصيغة PDF على جوالك:' : 'Receive Official PDF Proposal:'}
                    </div>
                    
                    <input
                      type="tel"
                      required
                      value={estimateClientPhone}
                      onChange={(e) => setEstimateClientPhone(e.target.value)}
                      placeholder={lang === 'ar' ? 'رقم الجوال (05XXXXXXXX)' : 'Phone (05XXXXXXXX)'}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-500"
                    />

                    <input
                      type="email"
                      required
                      value={estimateClientEmail}
                      onChange={(e) => setEstimateClientEmail(e.target.value)}
                      placeholder={lang === 'ar' ? 'البريد الإلكتروني للشركة' : 'Corporate Email'}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-500"
                    />

                    <button
                      type="submit"
                      className="w-full gold-gradient-bg text-slate-950 py-3.5 rounded-xl font-extrabold text-xs hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>{lang === 'ar' ? 'إرسال العرض المالي الرسمي لي الآن' : 'Send Official Quotation Now'}</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="pt-4 border-t border-slate-900 mt-4 text-center">
                <button
                  onClick={onOpenCustomQuote}
                  className="text-xs text-amber-400 hover:text-amber-300 font-bold underline"
                >
                  {lang === 'ar' ? 'هل لديك كراسة شروط ومواصفات خاصة؟ اضغط هنا' : 'Have a custom RFP / tender doc? Click here'}
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
