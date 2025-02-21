import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Heart, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { FloatingContact } from './components/FloatingContact';
import { SEO } from './components/SEO';

function Journal() {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const posts = [
    {
      id: 1,
      title: "L'Art du Mariage de Luxe à Malte",
      date: "15 Mars 2024",
      category: "Mariages Signature",
      excerpt: "Découvrez les secrets d'un mariage d'exception dans les plus beaux lieux de Malte. Une immersion dans l'univers du luxe et du raffinement méditerranéen.",
      image: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      likes: 324,
      comments: 42,
      author: "Sofiane Benhariz",
      readTime: "8"
    },
    {
      id: 2,
      title: "Gastronomie Méditerranéenne",
      date: "10 Mars 2024",
      category: "Art Culinaire",
      excerpt: "Entre tradition maltaise et innovation française, nos chefs étoilés réinventent la gastronomie méditerranéenne pour des réceptions d'exception.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      likes: 256,
      comments: 28,
      author: "Chef Marco Vella",
      readTime: "6"
    },
    {
      id: 3,
      title: "Célébration au Coucher du Soleil",
      date: "5 Mars 2024",
      category: "Mariages en Mer",
      excerpt: "Une expérience unique à bord d'un yacht de luxe dans le Grand Port de Malte. Quand le soleil se couche sur les remparts dorés de La Valette.",
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      likes: 289,
      comments: 35,
      author: "Sofiane Benhariz",
      readTime: "7"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Inspirations & Tendances - Luxury Weddings in Malta"
        description="Découvrez nos articles inspirants sur les mariages de luxe à Malte, les dernières tendances et nos conseils d'experts."
      />
      <Navigation onSectionClick={scrollToSection} />
      <FloatingContact />

      {/* Hero Section */}
      <div className="relative h-[60vh] pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Inspirations mariage de luxe à Malte"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-serif mb-6"
            >
              Inspirations & Tendances
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
            >
              Découvrez nos articles inspirants sur les mariages de luxe à Malte
            </motion.p>
          </div>
        </div>
      </div>

      {/* Journal Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-elegant group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                    <span>{post.readTime} min de lecture</span>
                  </div>
                  <h3 className="text-2xl font-serif mb-3 group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1 text-rose-500" />
                        {post.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1 text-blue-500" />
                        {post.comments}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      Par {post.author}
                    </span>
                  </div>
                  <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                    Lire la suite
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Journal;