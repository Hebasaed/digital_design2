import React, { useState } from 'react';
import { Language, JobOpening } from '../../types';
import { X, Briefcase, Check, Sparkles, Upload, User, Mail, Phone, Link2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  selectedJob?: JobOpening | null;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  lang,
  selectedJob,
}) => {
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [positionApplied, setPositionApplied] = useState(selectedJob?.id || 'frontend');
  const [coverNote, setCoverNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#38BDF8', '#10B981'],
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
              {lang === 'ar' ? 'تم استلام طلب التوظيف بنجاح!' : 'Application Submitted!'}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
              {lang === 'ar'
                ? `شكراً لاهتمامك بالانضمام إلى فريق شركة الفكر الرقمي (RT-KSA). سيقوم قسم الموارد البشرية بمراجعة ملفك والتواصل معك لتحديد موعد المقابلة الأولى.`
                : `Thank you for your interest in joining RT-KSA Digital Thought. Our talent acquisition team will review your credentials and get back to you shortly.`}
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
              <Briefcase className="w-4 h-4" />
              <span>{lang === 'ar' ? 'بوابة المواهب والتوظيف' : 'Careers & Talent Gateway'}</span>
            </div>

            <h3 className="text-2xl font-black text-white mb-1">
              {selectedJob
                ? `${lang === 'ar' ? 'التقديم على: ' : 'Applying for: '} ${selectedJob.title[lang]}`
                : lang === 'ar'
                ? 'انضم إلى فريق الفكر الرقمي'
                : 'Join Digital Thought Team'}
            </h3>

            <p className="text-xs text-slate-400 mb-6">
              {lang === 'ar'
                ? 'نبحث دائماً عن المبتكرين. شاركنا بياناتك ومعرض أعمالك للانضمام لأحدث المشاريع.'
                : 'We are constantly on the lookout for top-tier talent across Saudi Arabia and the region.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {lang === 'ar' ? 'الاسم الثلاثي' : 'Full Name'} *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute top-3.5 right-3.5 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder={lang === 'ar' ? 'عبدالله الحربي' : 'Abdullah Al-Harbi'}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl pr-10 pl-4 py-2 text-xs text-white outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute top-3.5 right-3.5 pointer-events-none" />
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="dev@example.com"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pr-10 pl-4 py-2 text-xs text-white outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {lang === 'ar' ? 'رقم الجوال' : 'Phone Number'} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute top-3.5 right-3.5 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="05XXXXXXXX"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pr-10 pl-4 py-2 text-xs text-white outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {lang === 'ar' ? 'رابط السيرة الذاتية أو معرض الأعمال (GitHub / LinkedIn / Behance)' : 'Portfolio / GitHub / LinkedIn URL'} *
                </label>
                <div className="relative">
                  <Link2 className="w-4 h-4 text-slate-500 absolute top-3.5 right-3.5 pointer-events-none" />
                  <input
                    type="url"
                    required
                    value={portfolioLink}
                    onChange={(e) => setPortfolioLink(e.target.value)}
                    placeholder="https://linkedin.com/in/... or https://github.com/..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl pr-10 pl-4 py-2 text-xs text-white outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {lang === 'ar' ? 'رسالة تعريفية موجزة' : 'Cover Note'}
                </label>
                <textarea
                  rows={2}
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                  placeholder={lang === 'ar' ? 'تحدث بإيجاز عن خبراتك وأبرز المشاريع التي قمت بتطويرها...' : 'Brief summary of your background and achievements...'}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full gold-gradient-bg text-slate-950 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-amber-500/20"
              >
                {lang === 'ar' ? 'إرسال طلب الانضمام الآن' : 'Submit Application Now'}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
