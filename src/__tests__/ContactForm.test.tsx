import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '../components/ContactForm';

vi.mock('@formspree/react', () => ({
  useForm: () => [
    { errors: [], submitting: false },
    vi.fn()
  ]
}));

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />);
    
    expect(screen.getByPlaceholderText('Votre Nom')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Votre Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Date de Mariage Souhaitée')).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Nombre d'Invités Estimé")).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Votre Message')).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    render(<ContactForm />);
    
    const submitButton = screen.getByText('Envoyer le Message');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Votre Nom')).toBeInvalid();
      expect(screen.getByPlaceholderText('Votre Email')).toBeInvalid();
      expect(screen.getByPlaceholderText('Votre Message')).toBeInvalid();
    });
  });
});