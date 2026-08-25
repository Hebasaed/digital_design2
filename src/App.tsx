import React, { useState, useEffect } from 'react';
import { Language, ProjectItem, ServiceItem, PricingPlan, JobOpening, ReviewItem } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FreeConsultationSection } from './components/FreeConsultationSection';
import { PricingSection } from './components/PricingSection';
import { ReviewsSection } from './components/ReviewsSection';
import { JoinUsSection } from './components/JoinUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import {
  ConsultationModal,
  ProjectDetailModal,
  PriceQuoteModal,
  JobApplyModal,
  AddReviewModal,
  FloatingActions
} from './components/Modals';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Modal States
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedPlanForQuote, setSelectedPlanForQuote] = useState<PricingPlan | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isJobApplyOpen, setIsJobApplyOpen] = useState(false);
  const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);
  const [customReviews, setCustomReviews] = useState<ReviewItem[]>([]);
  const [initialConsultationService, setInitialConsultationService] = useState('all');

  // Lead success banner notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Synchronize document direction and title
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title =
      lang === 'ar'
        ? 'الفكر الرقمي | RT-KSA - حلول رقمية، تصميم، تطوير، تسويق'
        : 'Digital Thought (DT-KSA / RT-KSA) - Digital Solutions, Design, Dev & Marketing';
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleSelectService = (service: ServiceItem) => {
    setInitialConsultationService(service.id);
    setIsConsultationOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlanForQuote(plan);
    setIsQuoteOpen(true);
  };

  const handleApplyJob = (job: JobOpening) => {
    setSelectedJob(job);
    setIsJobApplyOpen(true);
  };

  const handleOpenGeneralApply = () => {
    setSelectedJob(null);
    setIsJobApplyOpen(true);
  };

  const handleAddReview = (newReview: ReviewItem) => {
    setCustomReviews((prev) => [newReview, ...prev]);
    showToast(
      lang === 'ar'
        ? 'شكراً لك! تم إضافة تقييمك بنجاح.'
        : 'Thank you! Your review has been published.'
    );
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleQuickBook = (data: { phone: string; email: string; service: string }) => {
    showToast(
      lang === 'ar'
        ? `تم حجز استشارتك بنجاح! سيتواصل معك مهندسنا على ${data.phone}`
        : `Consultation confirmed! Our engineer will call ${data.phone}`
    );
  };

  return (
    <div
      className={`min-h-screen bg-[#070D18] text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans ${
        lang === 'ar' ? 'font-[\'Cairo\']' : 'font-[\'Plus_Jakarta_Sans\']'
      }`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 start-1/2 -translate-x-1/2 z-50 bg-amber-500 text-slate-950 px-6 py-3 rounded-2xl font-bold shadow-2xl flex items-center gap-2 animate-bounce border-2 border-slate-900">
          <span>✨ {toastMessage}</span>
        </div>
      )}

      {/* Header with AR | EN toggle */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenConsultation={() => {
          setInitialConsultationService('all');
          setIsConsultationOpen(true);
        }}
        onOpenQuote={() => {
          setSelectedPlanForQuote(null);
          setIsQuoteOpen(true);
        }}
        activeSection={activeSection}
      />

      {/* Hero Section with attention-grabbing titles, stats & lead form */}
      <HeroSection
        lang={lang}
        onOpenConsultation={() => {
          setInitialConsultationService('all');
          setIsConsultationOpen(true);
        }}
        onOpenQuote={() => {
          setSelectedPlanForQuote(null);
          setIsQuoteOpen(true);
        }}
        onQuickBook={handleQuickBook}
      />

      {/* Services Section */}
      <ServicesSection
        lang={lang}
        onSelectService={handleSelectService}
        onOpenConsultation={() => {
          setInitialConsultationService('all');
          setIsConsultationOpen(true);
        }}
      />

      {/* Current Projects & Completed Case Studies */}
      <ProjectsSection
        lang={lang}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onOpenQuote={() => {
          setSelectedPlanForQuote(null);
          setIsQuoteOpen(true);
        }}
      />

      {/* Free Consultation Offer with Phone & Email Text Fields */}
      <FreeConsultationSection
        lang={lang}
        onBookSuccess={() => {
          showToast(
            lang === 'ar'
              ? 'تم استلام طلبك بنجاح وسيتواصل معك مستشارنا خلال 24 ساعة.'
              : 'Consultation request logged! We will reach out in 24 hours.'
          );
        }}
      />

      {/* Pricing Offers & Instant Calculator */}
      <PricingSection
        lang={lang}
        onSelectPlan={handleSelectPlan}
        onOpenCustomQuote={() => {
          setSelectedPlanForQuote(null);
          setIsQuoteOpen(true);
        }}
      />

      {/* Clients Reviews Section */}
      <ReviewsSection
        lang={lang}
        onOpenAddReview={() => setIsAddReviewOpen(true)}
        customReviews={customReviews}
      />

      {/* Join Us Now / Careers Section */}
      <JoinUsSection
        lang={lang}
        onApplyJob={handleApplyJob}
        onOpenGeneralApply={handleOpenGeneralApply}
      />

      {/* FAQ & Contact Us Section */}
      <ContactSection
        lang={lang}
        onOpenConsultation={() => {
          setInitialConsultationService('all');
          setIsConsultationOpen(true);
        }}
      />

      {/* Footer */}
      <Footer
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenConsultation={() => {
          setInitialConsultationService('all');
          setIsConsultationOpen(true);
        }}
      />

      {/* Floating Action WhatsApp & Phone */}
      <FloatingActions lang={lang} />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        lang={lang}
        initialService={initialConsultationService}
        onSuccess={() => {
          showToast(
            lang === 'ar'
              ? 'تم تأكيد حجز الاستشارة المجانية بنجاح!'
              : 'Free consultation booked successfully!'
          );
        }}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
        onRequestQuote={() => {
          setSelectedPlanForQuote(null);
          setIsQuoteOpen(true);
        }}
      />

      <PriceQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        lang={lang}
        selectedPlan={selectedPlanForQuote}
      />

      <JobApplyModal
        job={selectedJob}
        isOpen={isJobApplyOpen}
        onClose={() => setIsJobApplyOpen(false)}
        lang={lang}
      />

      <AddReviewModal
        isOpen={isAddReviewOpen}
        onClose={() => setIsAddReviewOpen(false)}
        lang={lang}
        onAddReview={handleAddReview}
      />
    </div>
  );
}
