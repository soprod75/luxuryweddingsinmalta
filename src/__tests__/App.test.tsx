import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from '../App';

describe('App', () => {
  it('renders the hero section', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    );
    
    expect(screen.getByText('Exceptional Weddings in Malta')).toBeInTheDocument();
  });

  it('renders the about section', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    );
    
    expect(screen.getByText('À propos de Sofiane Benhariz')).toBeInTheDocument();
  });
});