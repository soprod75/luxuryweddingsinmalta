import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navigation } from './components/Navigation';
import { FloatingContact } from './components/FloatingContact';
import { SEO } from './components/SEO';

function Pricing() {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pricingPackages = [
    {
      title: t('pricing.packages.luxury.title'),
      price: t('pricing.packages.luxury.price'),
      description: t('pricing.packages.luxury.description'),
      features: t('pricing.packages.luxury.features', { returnObjects: true }),
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: t('pricing.packages.expat.title'),
      price: t('pricing.packages.expat.price'),
      description: t('pricing.packages.expat.description'),
      features: t('pricing.packages.expat.features', { returnObjects: true }),
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: t('pricing.packages.intimate.title'),
      price: t('pricing.packages.intimate.price'),
      description: t('pricing.packages.intimate.description'),
      features: t('pricing.packages.intimate.features', { returnObjects: true }),
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={t('pricing.hero.title')}
        description={t('pricing.hero.subtitle')}
      />
      <Navigation onSectionClick={scrollToSection} />
      <FloatingContact />

      {/* Hero Section */}
      <div className="relative h-[60vh] pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt={t('pricing.hero.imageAlt')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{t('pricing.hero.title')}</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-light">{t('pricing.hero.subtitle')}</p>
          </div>
        </div>
      </div>

      {/* Pricing Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-serif">{pkg.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6 text-center">
                    <div className="text-2xl font-serif text-gold mb-2">{pkg.price}</div>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {Array.isArray(pkg.features) && pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <Star className="w-5 h-5 mr-2 text-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/#contact"
                    className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    {t('pricing.contactButton')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="fixed bottom-8 right-8 bg-white/90 text-gray-900 px-6 py-3 rounded-full shadow-lg hover:bg-white transition-colors z-40"
      >
        {t('common.backToHome')}
      </Link>
    </div>
  );
}

export default Pricing;