import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

interface NavigationProps {
  onSectionClick: (section: string) => void;
}

export function Navigation({ onSectionClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const handleSectionClick = (section: string) => {
    if (isHomePage) {
      onSectionClick(section);
      setIsMenuOpen(false);
    } else {
      window.location.href = `/#${section}`;
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="logo">
              <span className="logo-w">W</span>
              <span className="logo-text">eddings</span>
              <span className="logo-text ml-2">
                <span className="logo-luxury">Luxury in Malta</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleSectionClick('about')} className="nav-link">
              {t('navigation.about')}
            </button>
            <button onClick={() => handleSectionClick('services')} className="nav-link">
              {t('navigation.services')}
            </button>
            <Link to="/portfolio" className="nav-link">
              {t('navigation.portfolio')}
            </Link>
            <Link to="/pricing" className="nav-link">
              {t('navigation.pricing')}
            </Link>
            <Link to="/journal" className="nav-link">
              {t('navigation.journal')}
            </Link>
            <Link to="/temoignages" className="nav-link">
              {t('navigation.testimonials')}
            </Link>
            <button onClick={() => handleSectionClick('contact')} className="nav-link">
              {t('navigation.contact')}
            </button>
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => handleSectionClick('about')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50"
            >
              {t('navigation.about')}
            </button>
            <button 
              onClick={() => handleSectionClick('services')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50"
            >
              {t('navigation.services')}
            </button>
            <Link 
              to="/portfolio" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.portfolio')}
            </Link>
            <Link 
              to="/pricing" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.pricing')}
            </Link>
            <Link 
              to="/journal" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.journal')}
            </Link>
            <Link 
              to="/temoignages" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.testimonials')}
            </Link>
            <button 
              onClick={() => handleSectionClick('contact')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50"
            >
              {t('navigation.contact')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}