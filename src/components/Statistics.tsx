import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

export function Statistics() {
  const { t } = useTranslation();
  const stats = [
    { label: t('statistics.weddings'), value: '200+' },
    { label: t('statistics.experience'), value: '20' },
    { label: t('statistics.venues'), value: '50+' },
    { label: t('statistics.satisfaction'), value: '100%' }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="bg-gray-50 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-5xl font-serif mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-gray-600 uppercase tracking-wider text-sm">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}