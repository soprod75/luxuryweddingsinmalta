import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <h1 className="text-4xl font-serif text-gray-900 mb-4">
              Oops! Une erreur est survenue
            </h1>
            <p className="text-gray-600 mb-8">
              Nous sommes désolés, quelque chose s'est mal passé. Veuillez réessayer.
            </p>
            <a
              href="/"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800"
              onClick={() => window.location.reload()}
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}