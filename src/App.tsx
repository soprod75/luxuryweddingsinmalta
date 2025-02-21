import React from 'react';
import { Instagram, Facebook, Mail, Phone, MessageCircle } from 'lucide-react';
import { SEO } from './components/SEO';
import { AnimatedSection } from './components/AnimatedSection';
import { ContactForm } from './components/ContactForm';
import { ScrollProgress } from './components/ScrollProgress';
import { Navigation } from './components/Navigation';
import { FloatingContact } from './components/FloatingContact';
import { FAQ } from './components/FAQ';
import { services } from './data/services';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const aboutBio = t('about.bio', { returnObjects: true });
  const expertiseItems = t('about.expertise.items', { returnObjects: true });

  return (
    <>
      <SEO 
        title={t('hero.title')}
        description={t('hero.subtitle')}
      />
      <ScrollProgress />
      <FloatingContact />
      <Navigation onSectionClick={scrollToSection} />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt={t('hero.imageAlt')}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-serif mb-4">{t('hero.title')}</h1>
              <p className="text-xl md:text-2xl max-w-2xl font-light">
                {t('hero.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Sofiane Benhariz"
                  className="rounded-lg shadow-xl w-full h-[600px] object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-serif mb-6">{t('about.title')}</h2>
                <h3 className="text-xl text-gray-700 mb-4 font-light uppercase tracking-wider">
                  {t('about.subtitle')}
                </h3>
                <div className="space-y-4 text-gray-600 font-light">
                  {Array.isArray(aboutBio) && aboutBio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8">
                  <h4 className="font-serif text-xl mb-4">{t('about.expertise.title')}</h4>
                  <ul className="space-y-2">
                    {Array.isArray(expertiseItems) && expertiseItems.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif mb-4">{t('services.title')}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('services.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={t(`services.items.${service.id}.title`)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-3">{t(`services.items.${service.id}.title`)}</h3>
                    <p className="text-gray-600">{t(`services.items.${service.id}.description`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl font-serif text-center mb-12">{t('contact.title')}</h2>
              <div className="max-w-3xl mx-auto">
                <div className="bg-gray-50 rounded-lg shadow-lg p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-serif mb-4">{t('contact.subtitle')}</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Mail size={20} className="text-gray-600" />
                          <span className="text-gray-600">contact@luxuryweddingsinmalta.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone size={20} className="text-gray-600" />
                          <span className="text-gray-600">+356 XXX XXXX</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MessageCircle size={20} className="text-green-600" />
                          <a 
                            href="https://wa.me/33611640781" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 transition-colors"
                          >
                            WhatsApp: +33 611640781
                          </a>
                        </div>
                        <div className="flex space-x-4">
                          <a 
                            href="https://www.instagram.com/luxuryweddingsinmalta" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-600 hover:text-gray-900 transition-colors" 
                            aria-label="Suivez-nous sur Instagram"
                          >
                            <Instagram size={24} />
                          </a>
                          <a 
                            href="https://www.facebook.com/luxuryweddingsinmalta" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-600 hover:text-gray-900 transition-colors" 
                            aria-label="Suivez-nous sur Facebook"
                          >
                            <Facebook size={24} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-serif mb-4">Luxury Weddings in Malta</h2>
              <p className="text-gray-400 uppercase tracking-wider text-sm">Creating Unforgettable Celebrations</p>
              <div className="mt-8">
                <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Luxury Weddings in Malta. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;