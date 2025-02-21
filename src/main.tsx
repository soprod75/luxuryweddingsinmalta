import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Analytics } from './components/Analytics';
import { CookieConsent } from './components/CookieConsent';
import App from './App';
import Pricing from './Pricing';
import Portfolio from './Portfolio';
import Journal from './Journal';
import VideoTestimonials from './VideoTestimonials';
import './i18n';
import './index.css';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

createRoot(root).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <Analytics />
          <CookieConsent />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/temoignages" element={<VideoTestimonials />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>
);