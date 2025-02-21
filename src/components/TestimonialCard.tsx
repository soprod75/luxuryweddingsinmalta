import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    text: string;
    rating: number;
    image: string;
    location: string;
    date: string;
    highlights: string[];
    venue: {
      name: string;
      description: string;
      capacity: string;
      features: string[];
    };
  };
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-elegant overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-64">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-current" />
            ))}
          </div>
          <h3 className="text-xl font-serif">{testimonial.name}</h3>
          <div className="flex items-center text-sm mt-1 text-white/90">
            <span>{testimonial.location}</span>
            <span className="mx-2">•</span>
            <span>{testimonial.date}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-6">
          <h4 className="font-serif text-lg mb-2">{testimonial.venue.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.venue.description}</p>
          <div className="mt-2 text-sm text-gray-500">
            Capacité : {testimonial.venue.capacity}
          </div>
        </div>
        <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Points forts du lieu :</h4>
          <div className="grid grid-cols-2 gap-2">
            {testimonial.venue.features.map((feature, i) => (
              <div key={i} className="text-sm text-gray-600 flex items-center">
                <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                {feature}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <h4 className="font-semibold text-gray-900">Moments magiques :</h4>
          <div className="grid grid-cols-1 gap-2">
            {testimonial.highlights.map((highlight, i) => (
              <div key={i} className="text-sm text-gray-600 flex items-center">
                <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}