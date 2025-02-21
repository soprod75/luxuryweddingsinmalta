import { useState } from 'react';
import { motion } from 'framer-motion';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageLoader({ src, alt, className = '' }: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}