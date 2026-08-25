import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import {
  Globe,
  Phone,
  Mail,
  Menu,
  X,
  Sparkles,
  Clock,
  MapPin
} from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenConsultation: () => void;
  onOpenQuote: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  onOpenConsultation,
  onOpenQuote,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAr = lang === 'ar';

  const navLinks = [
    { id: 'hero', label: { ar: 'الرئيسية', en: 'Home' }, href: '#hero' },
    { id: 'services', label: { ar: 'خدماتنا', en: 'Services' }, href: '#services' },
    { id: 'projects', label: { ar: 'المشاريع الحالية', en: 'Projects' }, href: '#projects' },
    { id: 'consultation', label: { ar: 'استشارة مجانية', en: 'Free Consultation' }, href: '#consultation' },
    { id: 'pricing', label: { ar: 'عروض الأسعار', en: 'Pricing' }, href: '#pricing' },
    { id: 'reviews', label: { ar: 'آراء العملاء', en: 'Reviews' }, href: '#reviews' },
    { id: 'careers', label: { ar: 'انضم إلينا', en: 'Join Us' }, href: '#careers' },
    { id: 'contact', label: { ar: 'اتصل بنا', en: 'Contact' }, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Strip */}
      <div className="bg-slate-950 text-slate-300 border-b border-slate-800/80 px-4 sm:px-8 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>{isAr ? 'عرض خاص: استشارة تقنية مجانية + خصم 15%' : 'Exclusive Offer: Free Tech Consultation + 15% Off'}</span>
            </div>
            <div className="hidden lg:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{isAr ? 'دعم فني واستجابة 24/7' : '24/7 Rapid SLA Response'}</span>
            </div>
          </div>

          <div className="flex items-center gap-5 text-[11px] sm:text-xs text-slate-300">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              id="topbar-phone-link"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span dir="ltr" className="font-semibold">{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              id="topbar-email-link"
            >
              <Mail className="w-3 h-3 text-amber-500" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="hidden md:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-amber-500" />
              <span>{isAr ? 'الرياض • جدة' : 'Riyadh • Jeddah'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-amber-500/20 py-3'
            : 'bg-slate-900 border-b-4 border-amber-500 py-3.5'
        }`}
        id="main-nav-bar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group" id="navbar-logo-btn">
            <Logo size="md" lang={lang} />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-amber-400 font-bold bg-amber-500/10'
                      : 'text-slate-200 hover:text-amber-300 hover:bg-slate-800/60'
                  }`}
                >
                  {link.label[lang]}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action CTAs & Language Switcher */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* AR / EN Switcher Button */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/30 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm group"
              id="lang-switch-button"
              title={isAr ? 'التحويل للغة الإنجليزية' : 'Switch to Arabic'}
            >
              <Globe className="w-3.5 h-3.5 text-amber-400 group-hover:text-slate-900 transition-colors" />
              <span className="tracking-wider">{isAr ? 'AR | EN' : 'EN | AR'}</span>
            </button>

            {/* Free Consultation CTA */}
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all cursor-pointer transform hover:-translate-y-0.5"
              id="header-free-consultation-btn"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>{isAr ? 'استشارة مجانية' : 'Free Consultation'}</span>
            </button>

            {/* Price Quote CTA (Desktop) */}
            <button
              onClick={onOpenQuote}
              className="hidden md:inline-flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-3.5 py-2 rounded-xl text-xs font-bold transition-all"
              id="header-price-quote-btn"
            >
              <span>{isAr ? 'طلب عرض سعر' : 'Get Quote'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 border border-slate-700 focus:outline-none"
              id="mobile-menu-toggle-btn"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-slate-950 border-t border-slate-800 px-6 py-5 space-y-3">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-amber-400 hover:bg-slate-900 transition-colors"
                >
                  {link.label[lang]}
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:hidden gap-2 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2"
                id="mobile-menu-consultation-btn"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isAr ? 'احجز استشارة مجانية الآن' : 'Book Free Consultation Now'}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 rounded-xl text-sm border border-slate-700"
                id="mobile-menu-quote-btn"
              >
                <span>{isAr ? 'اطلب عرض سعر مخصص' : 'Request Custom Price Quote'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
