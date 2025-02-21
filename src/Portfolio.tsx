import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { FloatingContact } from './components/FloatingContact';

interface PortfolioItem {
  url: string;
  title: string;
  category: string;
  description: string;
  details: {
    venue: string;
    guests: string;
    highlights: string[];
  };
}

function Portfolio() {
  const [selectedImage, setSelectedImage] = React.useState<PortfolioItem | null>(null);
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const portfolioGallery = [
    {
      url: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: t('portfolio.items.palazzo.title'),
      category: t('portfolio.categories.luxury'),
      description: t('portfolio.items.palazzo.description'),
      details: {
        venue: t('portfolio.items.palazzo.venue'),
        guests: t('portfolio.items.palazzo.guests'),
        highlights: t('portfolio.items.palazzo.highlights', { returnObjects: true })
      }
    },
    {
      url: "https://images.unsplash.com/photo-1544945582-3b466d874eac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: t('portfolio.items.yacht.title'),
      category: t('portfolio.categories.luxury'),
      description: t('portfolio.items.yacht.description'),
      details: {
        venue: t('portfolio.items.yacht.venue'),
        guests: t('portfolio.items.yacht.guests'),
        highlights: t('portfolio.items.yacht.highlights', { returnObjects: true })
      }
    },
    {
      url: "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: t('portfolio.items.villa.title'),
      category: t('portfolio.categories.intimate'),
      description: t('portfolio.items.villa.description'),
      details: {
        venue: t('portfolio.items.villa.venue'),
        guests: t('portfolio.items.villa.guests'),
        highlights: t('portfolio.items.villa.highlights', { returnObjects: true })
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation onSectionClick={scrollToSection} />
      <FloatingContact />

      {/* Hero Section */}
      <div className="relative h-[60vh] pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt={t('portfolio.hero.imageAlt')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{t('portfolio.hero.title')}</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-light">
              {t('portfolio.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioGallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-lg overflow-hidden group h-[500px] cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="inline-block px-4 py-2 bg-gold/90 rounded-full text-sm font-medium tracking-wider mb-4">
                    {image.category}
                  </span>
                  <h3 className="text-2xl font-serif mb-4">{image.title}</h3>
                  <p className="text-sm text-white/90 line-clamp-3 mb-4">
                    {image.description}
                  </p>
                  <div className="flex items-center text-sm text-white/80">
                    <span className="mr-4">{image.details.venue}</span>
                    <span>{image.details.guests}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-xl bg-black/50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ×
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-white bg-black/70 p-6 rounded-lg backdrop-blur-sm">
              <span className="inline-block px-4 py-2 bg-gold/90 rounded-full text-sm font-medium tracking-wider mb-4">
                {selectedImage.category}
              </span>
              <h3 className="text-2xl font-serif mb-4">{selectedImage.title}</h3>
              <p className="text-white/90 mb-6">{selectedImage.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-gold mb-2 font-medium">{t('portfolio.venue')}</h4>
                  <p className="text-white/80">{selectedImage.details.venue}</p>
                </div>
                <div>
                  <h4 className="text-gold mb-2 font-medium">{t('portfolio.capacity')}</h4>
                  <p className="text-white/80">{selectedImage.details.guests}</p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-gold mb-3 font-medium">{t('portfolio.highlights')}</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {selectedImage.details.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-white/80 flex items-center">
                      <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Portfolio;