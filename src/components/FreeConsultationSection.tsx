import React, { useState } from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import {
  Sparkles,
  Phone,
  Mail,
  User,
  Building,
  CheckCircle2,
  Calendar,
  Clock,
  Shield,
  Send,
  Zap,
  Gift
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface FreeConsultationSectionProps {
  lang: Language;
  onBookSuccess?: (lead: { name: string; phone: string; email: string; company: string; service: string }) => void;
}

export const FreeConsultationSection: React.FC<FreeConsultationSectionProps> = ({
  lang,
  onBookSuccess
}) => {
  const isAr = lang === 'ar';
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('full-suite');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !email) return;

    if (onBookSuccess) {
      onBookSuccess({ name, phone, email, company, service });
    }

    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const consultationPerks = [
    {
      title: { ar: 'جلسة استشارية مجانية 100%', en: '100% Free 30-Min Session' },
      desc: { ar: 'مع كبار مهندسي النظم والبنية التحتية والبرمجيات في السعودية', en: 'With senior cloud, infrastructure, and software architects' }
    },
    {
      title: { ar: 'تشخيص فني وتدقيق أمني أولي', en: 'Technical & Security Diagnostic' },
      desc: { ar: 'تحليل شامل للثغرات الحالية واحتياجات التحول الرقمي', en: 'Complete architectural review and compliance roadmap' }
    },
    {
      title: { ar: 'عرض سعر ومواصفات تفصيلي', en: 'Detailed Scope & Price Quotation' },
      desc: { ar: 'جدول زمني واضح ومخطط هندسي للتنفيذ دون أي التزام مالي', en: 'Transparent milestones and itemized BOM without obligation' }
    },
    {
      title: { ar: 'خصم خاص 15% على التنفيذ', en: 'Exclusive 15% Implementation Discount' },
      desc: { ar: 'قسيمة خصم مباشرة عند التعاقد على أي من باقاتنا', en: 'Instant voucher applied to any chosen corporate package' }
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative border-b border-slate-800" id="consultation">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-3xl sm:rounded-[36px] p-6 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Background Ambient Aura */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Offer Details & Value Proposition */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/40 text-amber-400 font-bold px-4 py-1.5 rounded-full text-xs">
                <Gift className="w-4 h-4 text-amber-400" />
                <span>{isAr ? 'عرض حصري للمؤسسات والشركات' : 'Exclusive Enterprise Offer'}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {isAr ? (
                  <>
                    احصل على <span className="text-amber-400">استشارة تقنية مجانية</span> وعرض سعر مخصص لمشروعك
                  </>
                ) : (
                  <>
                    Claim Your <span className="text-amber-400">Free Tech Consultation</span> & Custom Quote
                  </>
                )}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {isAr
                  ? 'سواء كنت تؤسس مقراً جديداً، أو ترغب في بناء تطبيق ذكي، أو تحديث شبكاتك وكاميرات المراقبة، خبراؤنا جاهزون لتقديم دراسة فنية شاملة مجاناً بدون أي التزام.'
                  : 'Whether establishing a new corporate data center, engineering an app, or securing compliance, our lead engineers deliver a turnkey evaluation without obligation.'}
              </p>

              {/* Perks List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {consultationPerks.map((perk, pIdx) => (
                  <div
                    key={pIdx}
                    className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-4 space-y-1"
                  >
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{perk.title[lang]}</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed ps-6">
                      {perk.desc[lang]}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct Support Strip */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{isAr ? 'الرقم الموحد:' : 'Direct Helpline:'}</span>
                  <span dir="ltr" className="text-white font-bold">{COMPANY_INFO.phoneDisplay}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>{COMPANY_INFO.email}</span>
                </div>
              </div>

            </div>

            {/* Right Column: Lead Capture Box (Phone, Email, Details) */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl border border-slate-100" id="consultation-form-wrapper">
                
                {submitted ? (
                  <div className="text-center py-10 space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">
                      {isAr ? 'تم حجز استشارتك بنجاح! 🎉' : 'Consultation Booked Successfully! 🎉'}
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      {isAr
                        ? `شكراً لتواصلك معنا. تم إرسال تفاصيل التأكيد إلى ${email}. سيقوم مستشارنا بالاتصال بك على الرقم ${phone} خلال أقل من 24 ساعة.`
                        : `Thank you. Confirmation sent to ${email}. Our consultant will contact you at ${phone} within 24 hours.`}
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="bg-slate-900 text-white font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-slate-800 transition-all cursor-pointer"
                      >
                        {isAr ? 'حجز استشارة أخرى لمشروع جديد' : 'Book Another Session'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="border-b border-slate-100 pb-3 mb-2">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                        {isAr ? 'احجز استشارتك واطلب عرض السعر' : 'Book Free Session & Get Quote'}
                      </h3>
                      <p className="text-slate-500 text-xs mt-1">
                        {isAr ? 'املأ الحقول أدناه لتحديد موعد الجلسة الفنية' : 'Fill in the fields to schedule your consultation'}
                      </p>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isAr ? 'الاسم الكريم / ممثل المنشأة' : 'Full Name / Representative'}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          placeholder={isAr ? 'مثال: م. عبد الله الشهري' : 'e.g. Abdullah Al-Shehri'}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 ps-9 pe-3 text-slate-900 text-xs sm:text-sm font-medium outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                          id="consultation-name-input"
                        />
                      </div>
                    </div>

                    {/* Phone Number (Crucial Request) */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isAr ? 'رقم الجوال للتواصل' : 'Mobile Phone Number'} <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          required
                          dir="ltr"
                          placeholder="05XXXXXXXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 ps-9 pe-3 text-slate-900 text-xs sm:text-sm font-medium outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-start"
                          id="consultation-phone-input"
                        />
                      </div>
                    </div>

                    {/* Email (Crucial Request) */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isAr ? 'البريد الإلكتروني' : 'Email Address'} <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          required
                          dir="ltr"
                          placeholder="name@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 ps-9 pe-3 text-slate-900 text-xs sm:text-sm font-medium outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-start"
                          id="consultation-email-input"
                        />
                      </div>
                    </div>

                    {/* Company & Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          {isAr ? 'اسم الشركة / المنشأة' : 'Company Name'}
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-slate-400">
                            <Building className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            placeholder={isAr ? 'شركة ...' : 'Company Inc'}
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 ps-9 pe-3 text-slate-900 text-xs sm:text-sm font-medium outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                            id="consultation-company-input"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          {isAr ? 'مجال المشروع' : 'Project Domain'}
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-slate-800 text-xs sm:text-sm font-medium outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 cursor-pointer"
                          id="consultation-service-select"
                        >
                          <option value="full-suite">{isAr ? 'استشارة عامة شاملة' : 'Full Architecture Review'}</option>
                          <option value="apps">{isAr ? 'تطوير موقع أو تطبيق' : 'Web / App Development'}</option>
                          <option value="data-center">{isAr ? 'مركز بيانات وشبكات' : 'Data Center & Cabling'}</option>
                          <option value="cctv">{isAr ? 'كاميرات وأنظمة أمنية' : 'CCTV & Access Control'}</option>
                          <option value="security">{isAr ? 'أمن سيبراني وسحابة' : 'Cybersecurity & Cloud'}</option>
                          <option value="marketing">{isAr ? 'تسويق رقمي ونمو' : 'Digital Marketing'}</option>
                          <option value="sla">{isAr ? 'عقد صيانة ودعم فني' : 'Annual SLA Support'}</option>
                        </select>
                      </div>
                    </div>

                    {/* Brief Note */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isAr ? 'تفاصيل إضافية عن المشروع (اختياري)' : 'Additional Notes (Optional)'}
                      </label>
                      <textarea
                        rows={2}
                        placeholder={isAr ? 'أذكر نبذة عن أهداف مشروعك، الموقع، أو المتطلبات الخاصة...' : 'Briefly describe your goals, location, or technical requirements...'}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 text-xs sm:text-sm font-medium outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 resize-none"
                        id="consultation-notes-input"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-amber-500 hover:to-amber-600 hover:text-slate-950 text-white font-extrabold py-3.5 rounded-xl text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
                      id="consultation-submit-btn"
                    >
                      <Sparkles className="w-4 h-4 text-amber-400 group-hover:text-slate-950 transition-colors" />
                      <span>{isAr ? 'تأكيد طلب الاستشارة المجانية وعرض السعر' : 'Confirm Free Consultation & Quote'}</span>
                      <Send className="w-4 h-4" />
                    </button>

                    <p className="text-center text-[11px] text-slate-400">
                      {isAr
                        ? '🔒 سرية تامة ومحمية بموجب اتفاقية عدم إفصاح NDA عند الطلب.'
                        : '🔒 Fully confidential & NDA compliant upon request.'}
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
