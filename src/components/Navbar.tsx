import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Language } from '../types';
import { 
  Phone, 
  Menu, 
  X, 
  Sparkles, 
  Globe, 
  Calculator, 
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  ShieldCheck
} from 'lucide-react';
import { companyDetails } from '../data/content';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenConsultation: () => void;
  onOpenQuote: () => void;
  onOpenJoin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenConsultation,
  onOpenQuote,
  onOpenJoin,
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

  const navLinks = [
    { id: 'home', label: { ar: 'الرئيسية', en: 'Home' }, href: '#home' },
    { id: 'services', label: { ar: 'خدماتنا', en: 'Services' }, href: '#services' },
    { id: 'projects', label: { ar: 'المشاريع الحالية', en: 'Projects' }, href: '#projects' },
    { id: 'pricing', label: { ar: 'عروض الأسعار', en: 'Pricing & Quotes' }, href: '#pricing' },
    { id: 'reviews', label: { ar: 'آراء العملاء', en: 'Reviews' }, href: '#reviews' },
    { id: 'careers', label: { ar: 'انضم إلينا', en: 'Careers' }, href: '#careers' },
    { id: 'contact', label: { ar: 'تواصل معنا', en: 'Contact' }, href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group cursor-pointer">
            <Logo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-slate-300 hover:text-amber-400 transition-colors py-1 relative group"
              >
                {link.label[lang]}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
              </a>
            ))}
          </nav>

          {/* Action CTAs and Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher Button (AR | EN) */}
            <button
              id="lang-switcher-btn"
              onClick={onToggleLang}
              className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-amber-500/50 px-3.5 py-2 rounded-full text-xs font-bold transition-all shadow-sm group"
              title={lang === 'ar' ? 'Switch to English' : 'التحويل للغة العربية'}
            >
              <Globe className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-45 transition-transform" />
              <span className={lang === 'ar' ? 'text-amber-400' : 'text-slate-400'}>AR</span>
              <span className="text-slate-600">|</span>
              <span className={lang === 'en' ? 'text-amber-400' : 'text-slate-400'}>EN</span>
            </button>

            {/* Quick Quote Button */}
            <button
              id="quick-quote-nav-btn"
              onClick={onOpenQuote}
              className="hidden md:flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-600/50 px-3.5 py-2 rounded-full text-xs font-semibold transition-all hover:border-amber-400/40"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'ar' ? 'اطلب عرض سعر' : 'Get a Quote'}</span>
            </button>

            {/* Free Consultation Main Button */}
            <button
              id="nav-consultation-btn"
              onClick={onOpenConsultation}
              className="flex items-center gap-2 gold-gradient-bg text-slate-950 px-4 py-2 rounded-full text-xs font-extrabold shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}</span>
            </button>
          </div>

          {/* Mobile hamburger & mobile lang toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-lang-btn"
              onClick={onToggleLang}
              className="bg-slate-900 border border-slate-700 text-slate-200 px-2.5 py-1.5 rounded-full text-xs font-bold"
            >
              {lang === 'ar' ? 'EN' : 'عربي'}
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/80 border border-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-4 pb-6 mt-2 shadow-2xl space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-amber-400 font-medium py-2 px-3 rounded-lg hover:bg-slate-900/80 text-sm flex items-center justify-between"
              >
                <span>{link.label[lang]}</span>
                {lang === 'ar' ? <ArrowLeft className="w-4 h-4 text-slate-500" /> : <ArrowRight className="w-4 h-4 text-slate-500" />}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full gold-gradient-bg text-slate-950 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'ar' ? 'طلب استشارة مجانية' : 'Book Free Consultation'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full bg-slate-900 border border-slate-700 text-white py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>{lang === 'ar' ? 'طلب عرض سعر فوري' : 'Instant Price Quotation'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoin();
              }}
              className="w-full bg-amber-500/10 border border-amber-500/30 text-amber-400 py-2.5 rounded-xl font-medium text-xs flex items-center justify-center gap-2"
            >
              <span>{lang === 'ar' ? 'انضم إلى فريق الفكر الرقمي' : 'Join Our Creative Team'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
