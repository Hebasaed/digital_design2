import React, { useState } from 'react';
import { Language, PricingPlan, ServiceItem } from '../../types';
import { X, Calculator, Check, Sparkles, Building2, Phone, Mail, FileText, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedPlan?: PricingPlan | null;
  preselectedService?: ServiceItem | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  lang,
  preselectedPlan,
  preselectedService,
}) => {
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [budgetRange, setBudgetRange] = useState('5k-15k');
  const [timeline, setTimeline] = useState('1month');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#10B981', '#38BDF8'],
    });
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative my-8">
        
        <button
          onClick={handleClose}
          className="absolute top-5 left-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <h3 className="text-2xl font-black text-white">
              {lang === 'ar' ? 'تم استلام طلب عرض السعر!' : 'Quotation Request Submitted!'}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
              {lang === 'ar'
                ? `سيقوم فريق التسعير الهندسي بإعداد كراسة العرض المالي والفني المفصلة وإرسالها إلى بريدك: ${clientEmail} خلال 4 ساعات عمل.`
                : `Our technical estimation team will compile a formal PDF quotation and email it to ${clientEmail} within 4 business hours.`}
            </p>

            <button
              onClick={handleClose}
              className="gold-gradient-bg text-slate-950 px-8 py-3 rounded-xl font-bold text-sm"
            >
              {lang === 'ar' ? 'إغلاق' : 'Close'}
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              <span>{lang === 'ar' ? 'طلب عرض سعر رسمي مخصص' : 'Request Formal RFQ Proposal'}</span>
            </div>

            <h3 className="text-2xl font-black text-white mb-1">
              {preselectedPlan
                ? `${lang === 'ar' ? 'طلب عرض سعر: ' : 'Quote Request: '} ${preselectedPlan.title[lang]}`
                : preselectedService
                ? `${lang === 'ar' ? 'طلب تسعير: ' : 'Quote Request: '} ${preselectedService.title[lang]}`
                : lang === 'ar'
                ? 'طلب عرض سعر من شركة الفكر الرقمي'
                : 'Request Official Proposal from RT-KSA'}
            </h3>

            <p className="text-xs text-slate-400 mb-6">
              {lang === 'ar'
                ? 'املأ النموذج لتزويدك بعرض فني ومالي وجدول زمني دقيق لمشروعك.'
                : 'Complete the form to receive a comprehensive technical & commercial breakdown.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {lang === 'ar' ? 'الاسم' : 'Contact Person'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder={lang === 'ar' ? 'محمد العتيبي' : 'Mohammed Al-Otaibi'}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {lang === 'ar' ? 'اسم المنشأة / الجهة' : 'Company Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientCompany}
                    onChange={(e) => setClientCompany(e.target.value)}
                    placeholder={lang === 'ar' ? 'شركة أو مؤسسة' : 'Company / Entity'}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {lang === 'ar' ? 'رقم الجوال' : 'Phone Number'} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="05XXXXXXXX"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {lang === 'ar' ? 'البريد الإلكتروني' : 'Email'} *
                  </label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {lang === 'ar' ? 'الميزانية المتوقعة' : 'Estimated Budget'}
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-amber-500"
                  >
                    <option value="5k-15k">{lang === 'ar' ? '5,000 - 15,000 ر.س' : '5,000 - 15,000 SAR'}</option>
                    <option value="15k-35k">{lang === 'ar' ? '15,000 - 35,000 ر.س' : '15,000 - 35,000 SAR'}</option>
                    <option value="35k-80k">{lang === 'ar' ? '35,000 - 80,000 ر.س' : '35,000 - 80,000 SAR'}</option>
                    <option value="80k+">{lang === 'ar' ? '+80,000 ر.س (مشاريع كبرى)' : '80,000+ SAR (Enterprise)'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {lang === 'ar' ? 'الجدول الزمني المطلوب' : 'Target Timeline'}
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-amber-500"
                  >
                    <option value="urgent">{lang === 'ar' ? 'عاجل (خلال أسبوعين)' : 'Urgent (Within 2 weeks)'}</option>
                    <option value="1month">{lang === 'ar' ? 'شهر واحد' : '1 Month'}</option>
                    <option value="2-3months">{lang === 'ar' ? '2 إلى 3 أشهر' : '2-3 Months'}</option>
                    <option value="flexible">{lang === 'ar' ? 'مرن حسب المتطلبات' : 'Flexible'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {lang === 'ar' ? 'شرح متطلبات ونطاق المشروع' : 'Project Scope & Requirements'}
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder={lang === 'ar' ? 'وضح الخصائص الرئيسية التي تود توافرها في المنظومة...' : 'Describe main features and deliverables...'}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full gold-gradient-bg text-slate-950 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-amber-500/20"
              >
                {lang === 'ar' ? 'إرسال طلب عرض السعر الآن' : 'Submit Quotation Request'}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
