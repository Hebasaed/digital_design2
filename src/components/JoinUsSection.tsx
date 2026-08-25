import React from 'react';
import { Language, JobOpening } from '../types';
import { JOB_OPENINGS } from '../data/companyData';
import {
  Users,
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Award,
  HeartHandshake
} from 'lucide-react';

interface JoinUsSectionProps {
  lang: Language;
  onApplyJob: (job: JobOpening) => void;
  onOpenGeneralApply: () => void;
}

export const JoinUsSection: React.FC<JoinUsSectionProps> = ({
  lang,
  onApplyJob,
  onOpenGeneralApply
}) => {
  const isAr = lang === 'ar';

  const workBenefits = [
    {
      icon: Award,
      title: { ar: 'مشاريع تقنية وطنية كبرى', en: 'Landmark National Projects' },
      desc: { ar: 'العمل على مشاريع رقمية ضخمة تساهم في تحقيق رؤية السعودية 2030', en: 'Contributing to high-impact digital transformation and Vision 2030' }
    },
    {
      icon: GraduationCap,
      title: { ar: 'تطوير وتدريب مستمر', en: 'Continuous Certification' },
      desc: { ar: 'رعاية ودعم الحصول على الشهادات العالمية في الشبكات والسحابة والبرمجة', en: 'Company sponsorship for Cisco, AWS, Fortinet, and tech certifications' }
    },
    {
      icon: HeartHandshake,
      title: { ar: 'بيئة عمل محفزة ومرنة', en: 'Inspiring Culture & Hybrid Model' },
      desc: { ar: 'رواتب مجزية، تأمين طبي شامل من الفئة الممتازة، وبيئة تقدر الابتكار', en: 'Competitive packages, premium health insurance, and performance bonuses' }
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 relative border-b border-slate-800" id="careers">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Banner Card */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 rounded-3xl sm:rounded-[36px] p-8 sm:p-12 text-slate-950 shadow-2xl mb-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Subtle pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.2),transparent_70%)] pointer-events-none" />
          
          <div className="space-y-2 text-center md:text-start relative z-10 max-w-xl">
            <span className="text-xs font-black uppercase tracking-widest bg-slate-950/15 px-3 py-1 rounded-full text-slate-950 inline-block">
              {isAr ? 'فرص التوظيف والنمو المهني' : 'Career Opportunities & Growth'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
              {isAr ? 'انضم إلى فريق الفكر الرقمي' : 'Join the Digital Thought Team'}
            </h2>
            <p className="text-slate-900/90 text-sm sm:text-base font-medium">
              {isAr
                ? 'نبحث دائماً عن الكفاءات المتميزة والمبتكرين في مجالات البرمجيات، الشبكات، الأمن السيبراني، والتسويق الرقمي.'
                : 'We are actively scouting visionary software engineers, network architects, and growth leaders.'}
            </p>
          </div>

          <button
            onClick={onOpenGeneralApply}
            className="shrink-0 bg-slate-950 hover:bg-slate-900 text-white font-black px-8 py-4 rounded-2xl text-sm sm:text-base shadow-xl transition-all flex items-center gap-2 cursor-pointer relative z-10 group"
            id="join-us-banner-cta-btn"
          >
            <Sparkles className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
            <span>{isAr ? 'انضم إلينا الآن • تقديم سيرة ذاتية' : 'Join Us Now • Submit CV'}</span>
            {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {workBenefits.map((benefit, bIdx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={bIdx}
                className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {benefit.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {benefit.desc[lang]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Current Job Openings */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
            <Briefcase className="w-5 h-5 text-amber-400" />
            <span>{isAr ? 'الوظائف المتاحة حالياً في المملكة' : 'Current Open Positions in KSA'}</span>
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all card-hover-glow"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg">
                      {job.department[lang]}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      {job.location[lang]}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      {job.type[lang]}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {job.title[lang]}
                  </h4>

                  <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-300">
                    {job.requirements[lang].slice(0, 2).map((req, rIdx) => (
                      <span key={rIdx} className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                        <span>{req}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onApplyJob(job)}
                  className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>{isAr ? 'التقديم على هذه الوظيفة' : 'Apply for Position'}</span>
                  {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
