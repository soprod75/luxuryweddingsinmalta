import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: 'Quand dois-je réserver ?',
      answer: 'Nous recommandons de réserver au moins 12 mois à l\'avance pour la haute saison (mai à octobre). Pour la basse saison, 6 à 8 mois peuvent suffire.'
    },
    {
      question: 'Quelles sont les formalités administratives pour se marier à Malte ?',
      answer: 'Les documents requis incluent les passeports valides, les actes de naissance et les certificats de célibat. Nous vous guidons à travers toutes les démarches administratives.'
    },
    {
      question: 'Proposez-vous des forfaits personnalisables ?',
      answer: 'Oui, tous nos forfaits sont entièrement personnalisables selon vos souhaits et votre budget. Nous créons des célébrations sur mesure.'
    },
    {
      question: 'Quelle est la meilleure période pour se marier à Malte ?',
      answer: 'La haute saison s\'étend de mai à octobre avec une météo idéale. Avril et novembre offrent également d\'excellentes conditions avec des tarifs plus avantageux.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">Questions Fréquentes</h2>
          <p className="text-xl text-gray-600">Tout ce que vous devez savoir sur nos services de mariage à Malte</p>
        </div>

        <div className="space-y-4">
          {questions.map((q, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-gray-900">{q.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {q.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}