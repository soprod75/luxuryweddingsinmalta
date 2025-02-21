import { useTranslation } from 'react-i18next';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function InstagramFeed() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const images = [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      caption: "Mariage au Palazzo Parisio #LuxuryWedding #Malta"
    },
    {
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      caption: "Célébration intime #IntimateWedding #MaltaWedding"
    },
    {
      url: "https://images.unsplash.com/photo-1515871204537-49a5fe66a31f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      caption: "Mariage LGBTQ+ #LoveIsLove #WeddingPlanner"
    },
    {
      url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      caption: "Réception en plein air #OutdoorWedding #MaltaVenue"
    },
    {
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      caption: "Décoration florale #WeddingDecor #FloralDesign"
    },
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      caption: "Mariage oriental #OrientalWedding #LuxuryEvent"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">{t('instagram.title')}</h2>
          <p className="text-gray-600">{t('instagram.subtitle')}</p>
          <a
            href="https://instagram.com/luxuryweddingsinmalta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-gray-900 hover:text-gray-600 transition-colors"
          >
            <Instagram className="w-5 h-5 mr-2" />
            @luxuryweddingsinmalta
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/luxuryweddingsinmalta"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={image.url}
                alt={t('instagram.imageAlt')}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex flex-col items-center justify-center p-4">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity mb-2" />
                <p className="text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com/luxuryweddingsinmalta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Instagram className="w-5 h-5 mr-2" />
            {t('instagram.followUs')}
          </a>
        </div>
      </div>
    </section>
  );
}