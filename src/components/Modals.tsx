import React, { useState } from 'react';
import { Language, ProjectItem, ServiceItem, PricingPlan, JobOpening, ReviewItem } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import {
  X,
  Sparkles,
  Phone,
  Mail,
  User,
  Building,
  CheckCircle2,
  Send,
  Upload,
  Star,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Briefcase,
  FileText,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';

// 1. Consultation Modal
interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialService?: string;
  onSuccess?: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialService = 'all',
  onSuccess
}) => {
  if (!isOpen) return null;
  const isAr = lang === 'ar';

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(initialService);
  const [preferredDate, setPreferredDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !email) return;
    setSubmitted(true);
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    if (onSuccess) onSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border-2 border-amber-500/40 rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative text-white max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 end-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white">
              {isAr ? 'تم تأكيد طلب الاستشارة المجانية! 🎉' : 'Consultation Booked Successfully! 🎉'}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {isAr
                ? `شكراً لك. سيتواصل معك أحد كبار مهندسينا على رقمك ${phone} والبريد ${email} خلال 24 ساعة لتقديم الجلسة وتحديد متطلبات مشروعك مجاناً.`
                : `Thank you. Our senior architect will contact you at ${phone} and ${email} within 24 hours.`}
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3 rounded-xl text-sm"
              >
                {isAr ? 'حسناً، إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-b border-slate-800 pb-4">
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold mb-1">
                <Sparkles className="w-4 h-4" />
                <span>{isAr ? 'عرض خاص ومجاني 100%' : '100% Free Consultation Offer'}</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                {isAr ? 'حجز جلسة استشارية تقنية' : 'Book Free Tech Consultation'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {isAr
                  ? 'اترك رقم جوالك وبريدك الإلكتروني لتحديد موعد الجلسة ومناقشة مشروعك'
                  : 'Enter your phone & email to schedule an in-depth architecture evaluation'}
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {isAr ? 'الاسم الكريم' : 'Full Name'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder={isAr ? 'اسمك الكريم' : 'Your Name'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl py-2.5 ps-9 pe-3 text-white text-xs sm:text-sm outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {isAr ? 'رقم الجوال (السعودية)' : 'Mobile Phone Number'} <span className="text-amber-400">*</span>
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
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl py-2.5 ps-9 pe-3 text-white text-xs sm:text-sm outline-none focus:border-amber-500 text-start"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {isAr ? 'البريد الإلكتروني' : 'Email Address'} <span className="text-amber-400">*</span>
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
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl py-2.5 ps-9 pe-3 text-white text-xs sm:text-sm outline-none focus:border-amber-500 text-start"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {isAr ? 'الشركة / الجهة' : 'Company Name'}
                </label>
                <input
                  type="text"
                  placeholder={isAr ? 'شركة ...' : 'Company LLC'}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white text-xs outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {isAr ? 'مجال الخدمة' : 'Service Domain'}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white text-xs outline-none focus:border-amber-500"
                >
                  <option value="all">{isAr ? 'استشارة تقنية عامة' : 'General Tech Review'}</option>
                  <option value="apps">{isAr ? 'تطبيقات ومواقع' : 'Web & Mobile Apps'}</option>
                  <option value="data-center">{isAr ? 'مراكز بيانات وشبكات' : 'Data Center & Network'}</option>
                  <option value="cctv">{isAr ? 'كاميرات وأنظمة أمنية' : 'CCTV & Security'}</option>
                  <option value="cloud">{isAr ? 'أمن سيبراني وسحابة' : 'Cybersecurity & Cloud'}</option>
                  <option value="marketing">{isAr ? 'تسويق رقمي' : 'Digital Marketing'}</option>
                </select>
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-xs text-amber-300 flex items-center justify-between">
              <span>{isAr ? 'خصم 15% إضافي مطبق على التعاقد' : 'Special 15% voucher applied'}</span>
              <span className="font-bold text-amber-400">VIP</span>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 rounded-xl text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isAr ? 'تأكيد الحجز المجاني الآن' : 'Confirm Free Consultation Now'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// 2. Project Detail Modal
interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  lang: Language;
  onRequestQuote: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  lang,
  onRequestQuote
}) => {
  if (!project) return null;
  const isAr = lang === 'ar';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border-2 border-slate-700 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-white">
        <button
          onClick={onClose}
          className="absolute top-5 end-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-slate-950">
          <img
            src={project.image}
            alt={project.title[lang]}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 start-4 bg-slate-900/90 text-amber-300 border border-amber-500/40 text-xs font-bold px-3 py-1.5 rounded-xl backdrop-blur-sm">
            {project.statusLabel[lang]}
          </div>
        </div>

        {/* Meta Header */}
        <div className="space-y-3 mb-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="text-amber-400 font-bold">{project.client[lang]}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              {project.location[lang]}
            </span>
            <span>•</span>
            <span className="bg-slate-800 px-2.5 py-0.5 rounded-md text-slate-300">
              {project.categoryLabel[lang]}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
            {project.title[lang]}
          </h3>
        </div>

        {/* Description */}
        <div className="space-y-4 mb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
          <h4 className="font-bold text-white text-base">
            {isAr ? 'نطاق العمل والمواصفات الفنية:' : 'Technical Scope & Delivery:'}
          </h4>
          <p>{project.description[lang]}</p>

          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400">{isAr ? 'الأثر المحقق للمشروع' : 'Key Project Outcome'}</div>
              <div className="text-sm font-bold text-emerald-300">{project.impactMetrics[lang]}</div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2">
            {isAr ? 'التقنيات والأنظمة المستخدمة:' : 'Technologies & Equipment:'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t, idx) => (
              <span key={idx} className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-lg text-xs font-mono text-amber-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition-colors"
          >
            {isAr ? 'إغلاق' : 'Close'}
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isAr ? 'طلب عرض سعر لمشروع مماثل' : 'Request Similar Project Proposal'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// 3. Price Quote Request Modal
interface PriceQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  selectedPlan?: PricingPlan | null;
}

export const PriceQuoteModal: React.FC<PriceQuoteModalProps> = ({
  isOpen,
  onClose,
  lang,
  selectedPlan
}) => {
  if (!isOpen) return null;
  const isAr = lang === 'ar';

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !email) return;
    setSubmitted(true);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border-2 border-amber-500/40 rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative text-white">
        <button
          onClick={onClose}
          className="absolute top-5 end-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-2xl font-black text-white">
              {isAr ? 'تم استلام طلب عرض السعر! 🎉' : 'Quotation Request Sent! 🎉'}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              {isAr
                ? `سيتم إرسال عرض السعر الفني والمالي المفصل (PDF) إلى بريدك ${email} والتواصل على ${phone}.`
                : `A detailed technical and commercial proposal (PDF) will be dispatched to ${email}.`}
            </p>
            <button
              onClick={onClose}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-2.5 rounded-xl text-xs mt-2"
            >
              {isAr ? 'إغلاق' : 'Close'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {isAr ? 'طلب عرض سعر رسمي' : 'Official Quotation Request'}
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                {selectedPlan ? selectedPlan.title[lang] : isAr ? 'طلب مقترح مالي وفني' : 'Financial & Technical Proposal'}
              </h3>
              {selectedPlan && (
                <div className="text-amber-400 font-extrabold text-lg mt-1">
                  {selectedPlan.priceSAR.toLocaleString()} {isAr ? 'ريال سعودي' : 'SAR'}
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {isAr ? 'رقم الجوال' : 'Phone Number'} <span className="text-amber-400">*</span>
              </label>
              <input
                type="tel"
                required
                dir="ltr"
                placeholder="05XXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white text-xs sm:text-sm outline-none focus:border-amber-500 text-start"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {isAr ? 'البريد الإلكتروني' : 'Email Address'} <span className="text-amber-400">*</span>
              </label>
              <input
                type="email"
                required
                dir="ltr"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white text-xs sm:text-sm outline-none focus:border-amber-500 text-start"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {isAr ? 'اسم المنشأة' : 'Company / Entity'}
              </label>
              <input
                type="text"
                placeholder={isAr ? 'شركة ...' : 'Company name'}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white text-xs sm:text-sm outline-none focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 rounded-xl text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{isAr ? 'إرسال طلب عرض السعر الآن' : 'Send Quote Request'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// 4. Job Application Modal
interface JobApplyModalProps {
  job: JobOpening | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const JobApplyModal: React.FC<JobApplyModalProps> = ({
  job,
  isOpen,
  onClose,
  lang
}) => {
  if (!isOpen) return null;
  const isAr = lang === 'ar';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !email) return;
    setSubmitted(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border-2 border-amber-500/40 rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative text-white">
        <button
          onClick={onClose}
          className="absolute top-5 end-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-2xl font-black text-white">
              {isAr ? 'تم استلام طلب التوظيف بنجاح! 🚀' : 'Application Received! 🚀'}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              {isAr
                ? `شكراً لاهتمامك بالانضمام إلى فريق الفكر الرقمي. ستقوم إدارة الموارد البشرية بمراجعة ملفك والتواصل معك على ${email}.`
                : `Thank you. Our Talent Acquisition team will review your profile and reach out via ${email}.`}
            </p>
            <button
              onClick={onClose}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-2.5 rounded-xl text-xs mt-2"
            >
              {isAr ? 'إغلاق' : 'Close'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {isAr ? 'الانضمام لفريق الفكر الرقمي' : 'Join Digital Thought Team'}
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                {job ? job.title[lang] : isAr ? 'تقديم سيرة ذاتية عامة' : 'General Application'}
              </h3>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {isAr ? 'الاسم الكامل' : 'Full Name'} <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={isAr ? 'أدخل اسمك الكريم' : 'Your full name'}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white text-xs sm:text-sm outline-none focus:border-amber-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {isAr ? 'رقم الجوال' : 'Phone'} <span className="text-amber-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  dir="ltr"
                  placeholder="05XXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white text-xs sm:text-sm outline-none focus:border-amber-500 text-start"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {isAr ? 'البريد الإلكتروني' : 'Email'} <span className="text-amber-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  dir="ltr"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white text-xs sm:text-sm outline-none focus:border-amber-500 text-start"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {isAr ? 'رابط لينكدإن أو معرض الأعمال (GitHub / Portfolio)' : 'LinkedIn or Portfolio URL'}
              </label>
              <input
                type="url"
                dir="ltr"
                placeholder="https://linkedin.com/in/username"
                value={portfolio}
                onChange={(e) => setPortfolio(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white text-xs sm:text-sm outline-none focus:border-amber-500 text-start"
              />
            </div>

            <div className="border border-dashed border-slate-700 rounded-xl p-4 text-center text-xs text-slate-400 hover:border-amber-500/50 cursor-pointer">
              <Upload className="w-5 h-5 mx-auto mb-1 text-amber-400" />
              <span>{isAr ? 'اضغط لرفع السيرة الذاتية (PDF/DOCX)' : 'Upload Resume / CV (PDF/DOCX)'}</span>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 rounded-xl text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{isAr ? 'إرسال طلب التقديم' : 'Submit Application'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// 5. Add Review Modal
interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onAddReview: (review: ReviewItem) => void;
}

export const AddReviewModal: React.FC<AddReviewModalProps> = ({
  isOpen,
  onClose,
  lang,
  onAddReview
}) => {
  if (!isOpen) return null;
  const isAr = lang === 'ar';

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !content) return;

    const newReview: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: { ar: name, en: name },
      role: { ar: role || 'عميل معتمد', en: role || 'Verified Client' },
      company: { ar: company || 'شركة سعودية', en: company || 'Saudi Corporation' },
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      rating,
      content: { ar: content, en: content },
      date: { ar: 'الآن', en: 'Just now' },
      verified: true
    };

    onAddReview(newReview);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border-2 border-amber-500/40 rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative text-white">
        <button
          onClick={onClose}
          className="absolute top-5 end-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h3 className="text-2xl font-black text-white">
              {isAr ? 'أضف تقييم تجربتك مع الفكر الرقمي' : 'Share Your Client Feedback'}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {isAr ? 'رأيكم يهمنا ويسهم في تطوير خدماتنا المستمرة' : 'Your honest feedback powers our continuous excellence'}
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              {isAr ? 'تقييمك للخدمة' : 'Your Rating'}
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1 cursor-pointer"
                >
                  <Star
                    className={`w-7 h-7 ${
                      star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {isAr ? 'الاسم الكريم' : 'Your Name'} <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={isAr ? 'اسمك الكريم' : 'Your Name'}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white text-xs outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {isAr ? 'اسم الشركة / المنشأة' : 'Company Name'}
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder={isAr ? 'شركة ...' : 'Company LLC'}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white text-xs outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              {isAr ? 'المسمى الوظيفي' : 'Job Role / Title'}
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder={isAr ? 'مثال: مدير تقنية المعلومات' : 'e.g. IT Director'}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white text-xs outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              {isAr ? 'نص التقييم والتجربة' : 'Review Testimonial'} <span className="text-amber-400">*</span>
            </label>
            <textarea
              rows={3}
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={isAr ? 'أذكر انطباعك عن الجودة، الالتزام بالمواعيد، والدعم الفني...' : 'Describe your satisfaction regarding technical quality and delivery...'}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white text-xs outline-none focus:border-amber-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 rounded-xl text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Star className="w-4 h-4 fill-slate-950" />
            <span>{isAr ? 'نشر التقييم' : 'Post Review'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

// 6. Floating Action WhatsApp & Phone
export const FloatingActions: React.FC<{ lang: Language }> = ({ lang }) => {
  const isAr = lang === 'ar';
  const whatsappMsg = encodeURIComponent(
    isAr
      ? 'السلام عليكم ورحمة الله، أرغب في الاستفسار عن خدمات الفكر الرقمي وحجز استشارة مجانية.'
      : 'Hello, I would like to inquire about Digital Thought services and claim the free consultation.'
  );

  return (
    <div className="fixed bottom-6 end-6 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all cursor-pointer group relative"
        title={isAr ? 'محادثة مباشرة عبر واتساب' : 'Chat via WhatsApp'}
        id="floating-whatsapp-btn"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30"></span>
        <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-5.805 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </div>
  );
};
