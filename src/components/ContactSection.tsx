import React, { useState } from 'react';
import { Language } from '../types';
import { FAQS, COMPANY_INFO } from '../data/companyData';
import {
  HelpCircle,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  onOpenConsultation
}) => {
  const isAr = lang === 'ar';
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactPhone || !contactEmail) return;

    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => {
      setSubmitted(false);
      setContactName('');
      setContactPhone('');
      setContactEmail('');
      setContactMsg('');
    }, 4000);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-950 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* FAQs Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-xs text-amber-400 font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isAr ? 'الأسئلة الشائعة والمعلومات' : 'Frequently Asked Questions'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white">
            {isAr ? 'إجابات على استفساراتكم' : 'Everything You Need to Know'}
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-3 mb-20">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-start flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <span>{faq.question[lang]}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 animate-fadeIn">
                    {faq.answer[lang]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Us Form & Location Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info: Branches in KSA */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {isAr ? 'المقر الرئيسي والفروع' : 'Headquarters & Regional Hubs'}
              </span>

              <h3 className="text-2xl font-black text-white">
                {isAr ? 'يسعدنا استقبالكم أو خدمتكم في أي وقت' : 'We Welcome Your Inquiries'}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isAr
                  ? 'مكاتبنا متواجدة في العاصمة الرياض والمنطقة الغربية مع فرق مهندسين ميدانيين تغطي كافة مدن المملكة العربية السعودية.'
                  : 'Operating main executive and engineering hubs in Riyadh & Jeddah with field teams deployed Kingdom-wide.'}
              </p>

              {/* Branch Details */}
              <div className="space-y-4 pt-2 text-xs text-slate-300">
                <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60 space-y-1">
                  <div className="font-bold text-amber-400 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    <span>{isAr ? 'الفرع الرئيسي - الرياض' : 'Main HQ - Riyadh'}</span>
                  </div>
                  <p className="text-slate-300 ps-5">
                    {isAr ? 'حي الياسمين، تقاطع طريق الملك فهد مع طريق الثمامة' : 'Al Yasmin District, King Fahd Rd & Al Thumama'}
                  </p>
                </div>

                <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60 space-y-1">
                  <div className="font-bold text-amber-400 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    <span>{isAr ? 'فرع المنطقة الغربية - جدة' : 'Western Region - Jeddah'}</span>
                  </div>
                  <p className="text-slate-300 ps-5">
                    {isAr ? 'طريق الأمير سلطان، حي الروضة' : 'Prince Sultan Rd, Al Rawdah District'}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">{isAr ? 'الرقم الموحد المباشر' : 'Unified Helpline'}</div>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-base font-black text-white hover:text-amber-400 transition-colors" dir="ltr">
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">{isAr ? 'البريد الإلكتروني للشركات' : 'Corporate Inquiries'}</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-white hover:text-amber-400 transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{isAr ? 'ساعات العمل: الأحد - الخميس 8:00 ص - 6:00 م' : 'Sun - Thu: 8:00 AM - 6:00 PM'}</span>
              </span>
            </div>
          </div>

          {/* Right Info: Direct Message Box */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-black text-slate-900 mb-1">
              {isAr ? 'أرسل رسالتك أو استفسارك المباشر' : 'Send a Direct Message'}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mb-6">
              {isAr ? 'فريق خدمة العملاء جاهز للرد على استفساراتكم ومناقشة عروض الأسعار.' : 'Our customer team is available to answer inquiries and process quotation requests.'}
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-base">{isAr ? 'تم إرسال رسالتك بنجاح!' : 'Message Sent Successfully!'}</h4>
                <p className="text-xs text-emerald-700">
                  {isAr ? 'شكراً لتواصلك، سيتواصل معك ممثلنا في أقرب وقت.' : 'Thank you. Our team will get back to you promptly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {isAr ? 'الاسم الكامل' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      placeholder={isAr ? 'أدخل اسمك الكريم' : 'Enter your name'}
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 text-xs sm:text-sm outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {isAr ? 'رقم الجوال' : 'Phone Number'} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      placeholder="05XXXXXXXX"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 text-xs sm:text-sm outline-none focus:border-amber-500 text-start"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isAr ? 'البريد الإلكتروني' : 'Email Address'} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    dir="ltr"
                    placeholder="name@example.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 text-xs sm:text-sm outline-none focus:border-amber-500 text-start"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isAr ? 'تفاصيل الرسالة أو المشروع' : 'Message Details'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={isAr ? 'اكتب تفاصيل استفسارك أو متطلبات مشروعك...' : 'Type your project details or questions here...'}
                    value={contactMsg}
                    onChange={(e) => setContactMsg(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 text-xs sm:text-sm outline-none focus:border-amber-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{isAr ? 'إرسال الرسالة الآن' : 'Send Message Now'}</span>
                  <Send className="w-4 h-4 text-amber-400" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
