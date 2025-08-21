'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Quick loading time for fonts, images, and other resources
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete?.();
    }, 700); // 0.7 seconds loading time

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999]"
          style={{ backgroundColor: 'rgb(240, 146, 51)' }}
          initial={{ 
            filter: 'blur(0px)',
            opacity: 1 
          }}
          exit={{ 
            filter: 'blur(20px)',
            opacity: 0,
            transition: { 
              duration: 0.3, 
              ease: [0.25, 0.1, 0.25, 1],
              filter: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
            }
          }}
        />
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
