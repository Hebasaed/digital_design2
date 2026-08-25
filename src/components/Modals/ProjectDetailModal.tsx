import React from 'react';
import { Language, ProjectItem } from '../../types';
import { X, MapPin, Building2, CheckCircle2, Sparkles, ArrowLeft, ArrowRight, Layers, ExternalLink } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  lang: Language;
  onRequestSimilar: (project: ProjectItem) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  lang,
  onRequestSimilar,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full shadow-2xl relative my-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 p-2 rounded-full bg-slate-950/80 backdrop-blur-md text-slate-300 hover:text-white border border-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project HD Header Banner */}
        <div className="relative aspect-[16/9] bg-slate-950">
          <img
            src={project.image}
            alt={project.title[lang]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Badges on image */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
            {project.status === 'in_progress' ? (
              <span className="bg-amber-500 text-slate-950 px-3 py-1 rounded-full text-xs font-black shadow-lg">
                {project.statusLabel[lang]}
              </span>
            ) : (
              <span className="bg-emerald-500 text-slate-950 px-3 py-1 rounded-full text-xs font-black shadow-lg">
                {project.statusLabel[lang]}
              </span>
            )}
            <span className="bg-slate-900/90 text-white px-3 py-1 rounded-full text-xs font-bold border border-white/10">
              {project.categoryLabel[lang]}
            </span>
          </div>

          <div className="absolute bottom-4 right-6 left-6 text-white">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium mb-1">
              <Building2 className="w-4 h-4" />
              <span>{project.client[lang]}</span>
              <span>•</span>
              <MapPin className="w-3.5 h-3.5" />
              <span>{project.location[lang]}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black">{project.title[lang]}</h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              {lang === 'ar' ? 'نبذة عن المشروع ونطاق التنفيذ:' : 'Project Overview & Scope:'}
            </h4>
            <p className="text-slate-200 text-sm leading-relaxed">
              {project.description[lang]}
            </p>
          </div>

          {/* Impact Metrics Card */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">
                {lang === 'ar' ? 'أبرز نتائج ومؤشرات الأداء المحققة:' : 'Impact & Key Outcomes:'}
              </div>
              <div className="text-sm font-black text-emerald-400 mt-0.5">
                {project.impactMetrics[lang]}
              </div>
            </div>
          </div>

          {/* Technologies Stack */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              {lang === 'ar' ? 'التقنيات والأنظمة المستخدمة:' : 'Technologies & Tech Stack:'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 border border-slate-700 text-amber-300 text-xs px-3 py-1 rounded-lg font-mono font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project);
              }}
              className="w-full sm:w-auto gold-gradient-bg text-slate-950 px-6 py-3 rounded-xl font-extrabold text-xs sm:text-sm hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'ar' ? 'طلب تنفيذ مشروع مماثل' : 'Request Similar Project'}</span>
              {lang === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-300 px-5 py-3 rounded-xl text-xs font-bold transition-all"
            >
              {lang === 'ar' ? 'إغلاق' : 'Close'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
