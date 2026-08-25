import React, { useState } from 'react';
import { Language } from '../types';
import { 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Send, 
  Star, 
  Award,
  Layers,
  PhoneCall,
  Check
} from 'lucide-react';
import { companyDetails } from '../data/content';
import confetti from 'canvas-confetti';

interface HeroProps {
  lang: Language;
  onOpenConsultation: () => void;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenConsultation,
  onOpenQuote,
}) => {
  const [quickPhone, setQuickPhone] = useState('');
  const [quickEmail, setQuickEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone && !quickEmail) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#F59E0B', '#FDE047', '#38BDF8', '#10B981'],
      });
    }, 600);
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#070D18] border-b border-slate-800/80"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Hero Copy (Left col in LTR / Right col in RTL) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 bg-slate-900/90 border border-amber-500/30 rounded-full px-4 py-1.5 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-bold text-amber-400">
                {lang === 'ar'
                  ? 'شريكك الاستراتيجي للحلول الرقمية والتقنية في المملكة 🇸🇦'
                  : 'Your Strategic Digital & Tech Partner in Saudi Arabia 🇸🇦'}
              </span>
            </div>

            {/* Catchy Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.2] tracking-tight">
              {lang === 'ar' ? (
                <>
                  نحول رؤيتك إلى <br />
                  <span className="gold-gradient-text">إنجازات رقمية رائدة</span> تتصدر السوق
                </>
              ) : (
                <>
                  Transforming Your Vision into <br />
                  <span className="gold-gradient-text">Pioneering Tech Realities</span>
                </>
              )}
            </h1>

            {/* Value Proposition Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {lang === 'ar'
                ? 'شركة الفكر الرقمي (RT-KSA) تقدم منظومة متكاملة من تصميم وتطوير التطبيقات، المواقع والمنصات الذكية، البنية التحتية ومراكز البيانات، وحملات التسويق الرقمي عالية العائد.'
                : 'Digital Thought (RT-KSA) delivers an enterprise ecosystem spanning custom mobile & web apps, cloud infrastructure, AI automation, cybersecurity, and high-ROI digital marketing.'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-free-consultation-btn"
                onClick={onOpenConsultation}
                className="gold-gradient-bg text-slate-950 px-6 py-3.5 rounded-2xl font-extrabold text-sm sm:text-base shadow-xl shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'ar' ? 'احجز استشارتك المجانية الآن' : 'Book Free Strategy Session'}</span>
                {lang === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>

              <button
                id="hero-price-quote-btn"
                onClick={onOpenQuote}
                className="bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all flex items-center gap-2 hover:border-amber-400/50"
              >
                <span>{lang === 'ar' ? 'اطلب عرض سعر فوري' : 'Get Instant Pricing Quote'}</span>
              </button>
            </div>

            {/* Micro Trust Proofs */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-amber-400">+{companyDetails.completedProjects}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  {lang === 'ar' ? 'مشروع منجز بنجاح' : 'Delivered Projects'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white">+{companyDetails.experienceYears}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  {lang === 'ar' ? 'سنوات خبرة بالسوق' : 'Years Experience'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">{companyDetails.clientSatisfaction}%</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  {lang === 'ar' ? 'نسبة رضا العملاء' : 'Client Satisfaction'}
                </div>
              </div>
            </div>

          </div>

          {/* Right Card: Quick Consultation & Instant Free Advice Offer */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              
              {/* Subtle top glow line */}
              <div className="absolute top-0 left-0 right-0 h-1 gold-gradient-bg" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">
                      {lang === 'ar' ? 'عرض استشارة مجانية' : 'Free Consultation Offer'}
                    </h3>
                    <p className="text-xs text-amber-400 font-medium">
                      {lang === 'ar' ? 'جلسة تقنية استراتيجية مجانية بقيمة 1,200 ر.س' : 'Complimentary Tech Session (Valued at 1,200 SAR)'}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full font-bold">
                  {lang === 'ar' ? 'متاح اليوم' : 'Available Today'}
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                {lang === 'ar'
                  ? 'اترك رقم جوالك أو بريدك وسيقوم كبير مهندسينا بالتواصل معك ودراسة فكرة مشروعك وتقديم خطة تنفيذية مجانية.'
                  : 'Leave your phone number or email, and our senior technical lead will contact you to evaluate your project roadmap.'}
              </p>

              {submitted ? (
                <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-3 animate-in zoom-in-95">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-base">
                    {lang === 'ar' ? 'تم استلام طلبك بنجاح!' : 'Request Received Successfully!'}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {lang === 'ar'
                      ? 'سيقوم مستشارنا التقني بالتواصل معك عبر الواتساب أو الاتصال خلال 15 دقيقة.'
                      : 'Our technical advisor will reach out via WhatsApp or phone within 15 minutes.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-amber-400 underline font-medium hover:text-amber-300 pt-2"
                  >
                    {lang === 'ar' ? 'إرسال طلب آخر' : 'Submit another request'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      {lang === 'ar' ? 'رقم الجوال (مع كود الدولة)' : 'Phone Number (with country code)'} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={quickPhone}
                      onChange={(e) => setQuickPhone(e.target.value)}
                      placeholder={lang === 'ar' ? 'مثال: 055XXXXXXX أو 9665XXXXXXX+' : '+966 5X XXX XXXX'}
                      className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      {lang === 'ar' ? 'البريد الإلكتروني' : 'Business Email'} *
                    </label>
                    <input
                      type="email"
                      required
                      value={quickEmail}
                      onChange={(e) => setQuickEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>

                  {/* Special Offer Highlight */}
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-xs font-semibold text-amber-300">
                        {lang === 'ar' ? 'عرض حصري: خصم 15% على أول عقد تطوير' : 'Exclusive: 15% discount on your first project'}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded">
                      -15%
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full gold-gradient-bg text-slate-950 py-3.5 rounded-xl font-extrabold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="inline-block animate-spin">⏳</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{lang === 'ar' ? 'احصل على الاستشارة المجانية وعرض السعر' : 'Get Free Consultation & Quote'}</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      {lang === 'ar' ? 'سرية تامة لبياناتك' : '100% Confidential'}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      {lang === 'ar' ? 'بدون أي التزام مالي' : 'Zero Commitment'}
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
