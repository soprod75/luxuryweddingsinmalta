import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Star, Users, Euro } from 'lucide-react';

export function VenueShowcase() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const venues = [
    {
      name: "Palazzo Parisio",
      image: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      location: "Naxxar, Malta",
      capacity: "350",
      rating: 5,
      priceRange: "€€€€",
      description: t('venues.palazzo.description'),
      features: [
        t('venues.features.gardens'),
        t('venues.features.ballroom'),
        t('venues.features.terrace')
      ]
    },
    {
      name: "Villa Bologna",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      location: "Attard, Malta",
      capacity: "250",
      rating: 5,
      priceRange: "€€€",
      description: t('venues.villa.description'),
      features: [
        t('venues.features.historic'),
        t('venues.features.pool'),
        t('venues.features.garden')
      ]
    },
    {
      name: "Luxury Yacht",
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      location: "Grand Harbour, Malta",
      capacity: "100",
      rating: 5,
      priceRange: "€€€€€",
      description: t('venues.yacht.description'),
      features: [
        t('venues.features.sunset'),
        t('venues.features.catering'),
        t('venues.features.exclusive')
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">{t('venues.title')}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{t('venues.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif">{venue.name}</h3>
                  <div className="flex items-center">
                    {Array.from({ length: venue.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {venue.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {t('venues.capacity', { count: venue.capacity })}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Euro className="w-4 h-4 mr-2" />
                    {venue.priceRange}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{venue.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">{t('venues.features.title')}</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {venue.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}