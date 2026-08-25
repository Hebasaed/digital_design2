import React, { useState } from 'react';
import { Language, ReviewItem } from '../types';
import { REVIEWS_DATA } from '../data/companyData';
import {
  Star,
  Quote,
  ShieldCheck,
  PlusCircle,
  Sparkles,
  Building,
  CheckCircle2
} from 'lucide-react';

interface ReviewsSectionProps {
  lang: Language;
  onOpenAddReview: () => void;
  customReviews?: ReviewItem[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  lang,
  onOpenAddReview,
  customReviews = []
}) => {
  const isAr = lang === 'ar';
  const allReviews = [...customReviews, ...REVIEWS_DATA];

  return (
    <section className="py-16 sm:py-24 bg-slate-950 relative border-b border-slate-800" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-xs text-amber-400 font-bold">
              <Quote className="w-3.5 h-3.5" />
              <span>{isAr ? 'شهادات نعتز بها' : 'Client Testimonials & Feedback'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              {isAr ? (
                <>
                  ماذا يقول <span className="text-amber-400">شركاء النجاح</span> عنا؟
                </>
              ) : (
                <>
                  What Our <span className="text-amber-400">Enterprise Clients</span> Say
                </>
              )}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {isAr
                ? 'نفخر بثقة نخبة المنشآت والشركات في المملكة العربية السعودية التي اعتمدت على الفكر الرقمي لتحقيق تحولها التقني وتأمين شبكاتها.'
                : 'Trusted by leading enterprises, government contractors, and high-growth brands across the Kingdom.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAddReview}
              className="bg-slate-800 hover:bg-slate-700 text-amber-400 hover:text-amber-300 border border-slate-700 hover:border-amber-500/40 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shadow-md"
              id="reviews-add-review-btn"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{isAr ? 'أضف تقييم تجربتك' : 'Write a Client Review'}</span>
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {allReviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 card-hover-glow relative overflow-hidden group shadow-xl"
            >
              {/* Giant background decorative quote watermark */}
              <div className="absolute -top-4 -left-4 text-slate-800/30 text-8xl font-serif italic select-none pointer-events-none group-hover:text-amber-500/10 transition-colors">
                “
              </div>

              <div className="relative z-10 space-y-4">
                {/* Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] text-slate-400 font-medium">
                    {review.date[lang]}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                  "{review.content[lang]}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3.5">
                  <img
                    src={review.avatar}
                    alt={review.name[lang]}
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/40 bg-slate-800"
                  />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                      <span>{review.name[lang]}</span>
                      {review.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" title={isAr ? 'عميل موثق' : 'Verified Client'} />
                      )}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {review.role[lang]} • <span className="text-amber-400">{review.company[lang]}</span>
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 rounded-full">
                  <ShieldCheck className="w-3 h-3" />
                  <span>{isAr ? 'مشروع معتمد' : 'Verified'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-around gap-6 text-center text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-amber-400">+120</span>
            <span className="text-start">{isAr ? 'شركة ومؤسسة في المملكة' : 'Enterprises across KSA'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-amber-400">4.9/5</span>
            <span className="text-start">{isAr ? 'متوسط تقييم جودة الخدمة' : 'Average Service Rating'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-amber-400">100%</span>
            <span className="text-start">{isAr ? 'التزام بمواعيد التسليم' : 'On-time Delivery Rate'}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
