import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { testimonials } from './data/testimonials';
import { TestimonialCard } from './components/TestimonialCard';
import { Navigation } from './components/Navigation';
import { FloatingContact } from './components/FloatingContact';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image: string;
  location: string;
  date: string;
  videoUrl: string;
  highlights: string[];
  venue: {
    name: string;
    description: string;
    capacity: string;
    features: string[];
  };
}

function VideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = React.useState<Testimonial | null>(null);
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onSectionClick={scrollToSection} />
      <FloatingContact />

      {/* Hero Section */}
      <div className="relative h-[60vh] pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt={t('testimonials.hero.imageAlt')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white px-4">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">{t('testimonials.hero.title')}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
              {t('testimonials.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="space-y-8">
                <div 
                  className="relative h-64 cursor-pointer group rounded-lg overflow-hidden shadow-lg"
                  onClick={() => setSelectedVideo(testimonial)}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-gray-900 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-serif mb-2">{testimonial.name}</h3>
                    <p className="text-sm opacity-90">{testimonial.location}</p>
                  </div>
                </div>
                <TestimonialCard testimonial={testimonial} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl">
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={selectedVideo.videoUrl}
                title={selectedVideo.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button
              className="absolute top-4 right-4 text-white text-xl bg-black/50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVideo(null);
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}

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

export default VideoTestimonials;