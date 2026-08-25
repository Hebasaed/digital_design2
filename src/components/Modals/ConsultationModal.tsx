import React, { useState } from 'react';
import { Language } from '../../types';
import { X, Sparkles, Send, ShieldCheck, Check, Phone, Mail, User, Building, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('app');
  const [preferredTime, setPreferredTime] = useState('morning');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#FDE047', '#10B981'],
      });
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 left-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <h3 className="text-2xl font-black text-white">
              {lang === 'ar' ? 'تم حجز جلستك الاستشارية بنجاح!' : 'Consultation Booked Successfully!'}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
              {lang === 'ar'
                ? `شكراً لك أ. ${name || 'الكريم'}. قام فريق شركة الفكر الرقمي بجدولة استشارتك التقنية. سيتواصل معك مستشارنا عبر الهاتف والواتساب لتأكيد الموعد وإرسال رابط الاجتماع.`
                : `Thank you! Our technical lead has received your request and will reach out via WhatsApp/Phone shortly.`}
            </p>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-xs text-amber-400 text-start space-y-1.5">
              <div className="font-bold text-white mb-1">
                {lang === 'ar' ? 'ملخص الحجز:' : 'Booking Summary:'}
              </div>
              <div>• {lang === 'ar' ? `رقم الجوال المسجل: ${phone}` : `Phone: ${phone}`}</div>
              <div>• {lang === 'ar' ? `البريد الإلكتروني: ${email}` : `Email: ${email}`}</div>
              <div>• {lang === 'ar' ? `الموعد المفضل: ${preferredTime === 'morning' ? 'صباحاً (9ص - 1م)' : 'مساءً (4م - 9م)'}` : `Preferred: ${preferredTime}`}</div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="gold-gradient-bg text-slate-950 px-8 py-3 rounded-xl font-bold text-sm shadow-md"
            >
              {lang === 'ar' ? 'إغلاق ومتابعة التصفح' : 'Close and Continue'}
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'ar' ? 'استشارة تقنية مجانية 100%' : '100% Free Strategy Session'}</span>
            </div>

            <h3 className="text-2xl font-black text-white mb-2">
              {lang === 'ar' ? 'احجز جلستك الاستشارية مع خبرائنا' : 'Book Your Free Consultation'}
            </h3>

            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              {lang === 'ar'
                ? 'جلسة استراتيجية مخصصة لمدة 30 دقيقة لمناقشة فكرة مشروعك، المتطلبات الفنية، والجدول الزمني والتكلفة التقديرية.'
                : '30-minute tailored technical advisory session covering architecture, budget feasibility, and roadmap.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {lang === 'ar' ? 'الاسم الكريم' : 'Full Name'} *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute top-3.5 right-3.5 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'ar' ? 'أ. سلطان القحطاني' : 'Sultan Al-Qahtani'}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl pr-10 pl-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {lang === 'ar' ? 'رقم الجوال (واتساب)' : 'Mobile (WhatsApp)'} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute top-3.5 right-3.5 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="05XXXXXXXX"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pr-10 pl-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {lang === 'ar' ? 'البريد الإلكتروني' : 'Email'} *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute top-3.5 right-3.5 pointer-events-none" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pr-10 pl-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {lang === 'ar' ? 'مجال المشروع الرئيسي' : 'Project Domain'}
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white outline-none focus:border-amber-500"
                  >
                    <option value="app">{lang === 'ar' ? 'تطبيق جوال (iOS & Android)' : 'Mobile App'}</option>
                    <option value="web">{lang === 'ar' ? 'موقع أو متجر إلكتروني' : 'Website / E-Commerce'}</option>
                    <option value="infra">{lang === 'ar' ? 'بنية تحتية ومراكز بيانات' : 'Infrastructure & Cloud'}</option>
                    <option value="security">{lang === 'ar' ? 'أمن سيبراني وكاميرات' : 'Cybersecurity & CCTV'}</option>
                    <option value="marketing">{lang === 'ar' ? 'تسويق رقمي وحملات إعلانية' : 'Growth Marketing'}</option>
                    <option value="ai">{lang === 'ar' ? 'ذكاء اصطناعي وأتمتة' : 'AI & Automation'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {lang === 'ar' ? 'الوقت المفضل للتواصل' : 'Preferred Call Time'}
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white outline-none focus:border-amber-500"
                  >
                    <option value="morning">{lang === 'ar' ? 'الفترة الصباحية (9:00 ص - 1:00 م)' : 'Morning (9 AM - 1 PM)'}</option>
                    <option value="evening">{lang === 'ar' ? 'الفترة المسائية (4:00 م - 9:00 م)' : 'Evening (4 PM - 9 PM)'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {lang === 'ar' ? 'نبذة عن فكرة المشروع أو الاستفسار' : 'Project Brief / Notes'}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={lang === 'ar' ? 'اكتب باختصار ما تود مناقشته في الجلسة...' : 'Briefly describe your goals...'}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full gold-gradient-bg text-slate-950 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="inline-block animate-spin">⏳</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>{lang === 'ar' ? 'تأكيد حجز الاستشارة المجانية' : 'Confirm Free Session'}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'ar' ? 'نحترم خصوصية بياناتك وتوقيع اتفاقية سرية المعلومات (NDA) متاح' : 'NDA & Strict confidentiality guaranteed'}</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
