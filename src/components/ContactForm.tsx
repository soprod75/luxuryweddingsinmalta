import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function ContactForm() {
  const [state, handleSubmit] = useForm("xgegklvj");
  const { t } = useTranslation();

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center p-8"
      >
        <h3 className="text-2xl font-serif mb-4">{t('contact.form.success')}</h3>
        <p className="text-gray-600">{t('contact.form.successDetails')}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder={t('contact.form.name')}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      
      <div>
        <input
          type="email"
          name="email"
          placeholder={t('contact.form.email')}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <input
          type="text"
          name="weddingDate"
          placeholder={t('contact.form.date')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none"
        />
      </div>

      <div>
        <input
          type="number"
          name="guestCount"
          placeholder={t('contact.form.guests')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none"
        />
      </div>

      <div>
        <textarea
          name="message"
          placeholder={t('contact.form.message')}
          rows={4}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none"
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
      >
        {state.submitting ? t('contact.form.sending') : t('contact.form.submit')}
      </button>
    </form>
  );
}