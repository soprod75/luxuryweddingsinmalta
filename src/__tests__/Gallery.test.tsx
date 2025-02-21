import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Gallery from '../components/Gallery';

describe('Gallery', () => {
  it('renders gallery filters', () => {
    render(<Gallery />);
    
    expect(screen.getByText('Tous')).toBeInTheDocument();
    expect(screen.getByText('Mariages de Luxe')).toBeInTheDocument();
    expect(screen.getByText('Mariages Intimistes')).toBeInTheDocument();
    expect(screen.getByText('Mariages en Bord de Mer')).toBeInTheDocument();
  });

  it('filters images when category is selected', () => {
    render(<Gallery />);
    
    const luxuryFilter = screen.getByText('Mariages de Luxe');
    fireEvent.click(luxuryFilter);
    
    // Add expectations based on your filtered content
  });
});