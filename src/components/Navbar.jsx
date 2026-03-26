import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const navLinks = [
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.resume'), path: '/resume' },
  ];

  const isActive = (path) => location.pathname === path || (path === '/about' && location.pathname === '/');

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Dunia Portfolio
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link font-medium ${isActive(link.path) ? 'text-indigo-600 after:w-full' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full border border-slate-300 text-sm font-semibold hover:bg-slate-100 transition-colors uppercase"
            >
              {i18n.language}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleLanguage}
              className="mr-4 px-2 py-1 rounded-full border border-slate-300 text-xs font-semibold uppercase"
            >
              {i18n.language}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-indigo-600"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path) ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
