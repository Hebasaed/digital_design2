import React, { useState } from 'react';
import { Language, ProjectItem } from '../types';
import { PROJECTS_DATA } from '../data/companyData';
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  ExternalLink,
  Layers,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';

interface ProjectsSectionProps {
  lang: Language;
  onSelectProject: (project: ProjectItem) => void;
  onOpenQuote: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  lang,
  onSelectProject,
  onOpenQuote
}) => {
  const isAr = lang === 'ar';
  const [filter, setFilter] = useState<'all' | 'in_progress' | 'completed'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesStatus = filter === 'all' || project.status === filter;
    const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;
    return matchesStatus && matchesCategory;
  });

  const categories = [
    { id: 'all', label: { ar: 'كافة المشاريع', en: 'All Projects' } },
    { id: 'cloud', label: { ar: 'مراكز البيانات والشبكات', en: 'Data Center & Network' } },
    { id: 'mobile', label: { ar: 'التطبيقات والمواقع', en: 'Web & Mobile Apps' } },
    { id: 'security', label: { ar: 'المراقبة والأمن', en: 'Security & CCTV' } },
    { id: 'marketing', label: { ar: 'التسويق والمتاجر', en: 'Ecommerce & Growth' } },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-950 relative border-b border-slate-800" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-xs text-amber-400 font-bold">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{isAr ? 'سجل الإنجاز والمشاريع' : 'Portfolio & Realizations'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              {isAr ? (
                <>
                  المشاريع الحالية <span className="text-amber-400">وقصص النجاح</span>
                </>
              ) : (
                <>
                  Current Projects & <span className="text-amber-400">Success Stories</span>
                </>
              )}
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {isAr
                ? 'استعرض أحدث أعمالنا ومشاريعنا الجاري تنفيذها في الرياض، جدة، والمنطقة الشرقية، والمصممة وفق أرقى معايير التقنية العالمية.'
                : 'Discover our ongoing and landmark implementations delivered across Riyadh, Jeddah, and the Eastern Province.'}
            </p>
          </div>

          {/* Status Tabs Switcher */}
          <div className="flex items-center bg-slate-900 border border-slate-800 p-1.5 rounded-2xl shrink-0 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {isAr ? 'الكل' : 'All'}
            </button>
            <button
              onClick={() => setFilter('in_progress')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                filter === 'in_progress'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-emerald-400 hover:text-emerald-300'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{isAr ? 'جاري التنفيذ' : 'In Progress'}</span>
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === 'completed'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {isAr ? 'تم الإنجاز' : 'Completed'}
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                categoryFilter === cat.id
                  ? 'bg-slate-800 text-amber-400 border-amber-500/50 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const isOngoing = project.status === 'in_progress';
            return (
              <div
                key={project.id}
                className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 card-hover-glow group shadow-xl"
              >
                {/* Project Image Box with HD Photo */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-4 end-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold shadow-md backdrop-blur-md ${
                        isOngoing
                          ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                          : 'bg-slate-900/80 text-amber-300 border border-amber-500/30'
                      }`}
                    >
                      {isOngoing && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />}
                      <span>{project.statusLabel[lang]}</span>
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-4 start-4">
                    <span className="bg-slate-900/90 text-slate-200 border border-slate-700/80 text-[11px] font-semibold px-3 py-1 rounded-lg backdrop-blur-sm">
                      {project.categoryLabel[lang]}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location & Client */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2.5">
                      <span className="font-medium text-slate-300">{project.client[lang]}</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3 h-3 text-amber-500" />
                        <span>{project.location[lang]}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-amber-400 transition-colors leading-snug line-clamp-2">
                      {project.title[lang]}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description[lang]}
                    </p>

                    {/* Impact Metric Highlight */}
                    <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-2.5 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-xs font-bold text-emerald-300">
                        {project.impactMetrics[lang]}
                      </span>
                    </div>
                  </div>

                  <div>
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 3).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-slate-800 text-slate-300 border border-slate-700 text-[10px] px-2 py-0.5 rounded-md font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[10px] text-slate-400 self-center">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Details Button */}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="w-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white font-bold py-2.5 rounded-xl text-xs sm:text-sm border border-slate-700 hover:border-amber-500 transition-all flex items-center justify-center gap-1.5 cursor-pointer group-hover:shadow-md"
                    >
                      <span>{isAr ? 'عرض تفاصيل المشروع التقنية' : 'View Technical Specifications'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Request Project CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-8 py-4 rounded-2xl text-sm sm:text-base shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all cursor-pointer"
            id="projects-request-quote-btn"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>{isAr ? 'هل تود تنفيذ مشروع مماثل؟ اطلب عرض سعر الآن' : 'Want to execute a similar project? Get a Quote'}</span>
            {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </div>

      </div>
    </section>
  );
};
