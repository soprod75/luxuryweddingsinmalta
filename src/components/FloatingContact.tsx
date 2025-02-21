import React, { useState } from 'react';
import { Calendar, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-8 left-8 z-50 flex items-center space-x-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-lg shadow-xl p-6 max-w-md"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-serif mb-4">Prenez rendez-vous</h3>
            <div className="space-y-4">
              <a
                href="https://calendly.com/votre-lien"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
              >
                <Calendar size={20} />
                <span>Réserver une consultation</span>
              </a>
              <a
                href="https://wa.me/33611640781"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-600 hover:text-green-700"
              >
                <MessageCircle size={20} />
                <span>WhatsApp: +33 611640781</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors flex items-center space-x-2"
      >
        <Calendar size={20} />
        <span className="font-medium">Contact</span>
      </motion.button>
    </div>
  );
}