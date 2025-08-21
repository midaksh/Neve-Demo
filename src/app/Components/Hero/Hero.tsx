'use client';

import '../../../app/globals.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import payload from '../../../data/payload.json';

interface HeroProps {
  heroData?: typeof payload.hero;
}

export default function Hero({ heroData = payload.hero }: HeroProps) {
  const { title, subtitle, images } = heroData;

  // Convert srcset arrays to string format for responsive images
  // const desktopSrcSet = images.desktop.srcset.join(', ');
  // const mobileSrcSet = images.mobile.srcset.join(', ');

  return (
    <section 
      className="hero-section relative w-full flex items-center justify-center overflow-hidden"
    >
      {/* Desktop Background Image */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src={images.desktop.src}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          style={{
            height: '100%',
            left: 0,
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            width: '100%'
          }}
        />
      </div>

      {/* Mobile Background Image */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src={images.mobile.srcset[0].split(' ')[0]}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          style={{
            height: '100%',
            left: 0,
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            width: '100%'
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <motion.h1 
            className="text-hero-title md:text-[7.5rem] text-[4.5rem]"
            style={{ 
              fontFamily: 'Da Vinci, sans-serif'
            }}
            initial={{ 
              filter: 'blur(18px)', 
              opacity: 0,
            }}
            animate={{ 
              filter: 'blur(0px)', 
              opacity: 1,
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.3,
              filter: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }
            }}
          >  
            {title}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            className="text-hero-subtitle md:text-[7.5rem] text-[5rem]"
            style={{ 
              fontFamily: 'Da Vinci, sans-serif'
            }}
            initial={{ 
              filter: 'blur(18px)', 
              opacity: 0,
            }}
            animate={{ 
              filter: 'blur(0px)', 
              opacity: 1,
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.3,
              filter: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }
            }}
          >  
            {subtitle}
          </motion.p>
        </div>
      </div>

    </section>
  );
}
