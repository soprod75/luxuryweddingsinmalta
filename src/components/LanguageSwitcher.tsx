import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback((lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    localStorage.setItem('i18nextLng', lng);
  }, [i18n]);

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('fr')}
        className={`lang-btn ${i18n.language === 'fr' ? 'active' : ''}`}
        aria-label="Changer la langue en français"
      >
        FR
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
        aria-label="Change language to English"
      >
        EN
      </button>
    </div>
  );
}