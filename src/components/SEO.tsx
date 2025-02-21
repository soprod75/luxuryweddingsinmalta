import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

export function SEO({ 
  title, 
  description, 
  image = "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-4.0.3",
  type = "website" 
}: SEOProps) {
  const location = useLocation();
  const canonicalUrl = `https://luxuryweddingsinmalta.com${location.pathname}`;
  
  return (
    <Helmet>
      {/* Balises standards */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Luxury Weddings in Malta" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:locale:alternate" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Autres métadonnées importantes */}
      <meta name="geo.region" content="MT" />
      <meta name="geo.placename" content="Malta" />
      <meta name="author" content="Sofiane Benhariz" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Luxury Weddings in Malta",
          "image": image,
          "description": description,
          "@id": "https://luxuryweddingsinmalta.com",
          "url": "https://luxuryweddingsinmalta.com",
          "telephone": "+33611640781",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "MT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 35.9375,
            "longitude": 14.3754
          },
          "sameAs": [
            "https://www.instagram.com/luxuryweddingsinmalta",
            "https://www.facebook.com/luxuryweddingsinmalta"
          ]
        })}
      </script>
    </Helmet>
  );
}