'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import payloadData from '../../../data/payload.json';

const Manifesto: React.FC = () => {
  const { manifesto } = payloadData;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full" 
    style={{ paddingTop: 'var(--size-sm)', paddingBottom: 'var(--size-lg)' }}
    >
      <div className="flex flex-col lg:flex-row lg:items-end gap-[20px]">
        {/* Left Column - Image */}
        <div className="lg:w-1/2">
          <img
            src={manifesto.image.src}
            srcSet={manifesto.image.srcset.join(', ')}
            alt="Linecheck 2025 Manifesto"
            style={{

              display: 'block',
              objectFit: 'cover',
              width: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              fontStyle: 'italic',
              height: 'auto',
              maxWidth: '100%'
            }}
            className="md:aspect-[16/9] aspect-square"
          />
        </div>

        {/* Right Column - Content */}
        <div className="lg:w-1/2 md:pr-[var(--size-md)] pr-0"  
        >
          <div 
            className="flex flex-col"
            style={{ gap: 'var(--size-sm)' }}
          >
            {/* Manifesto Content */}
            <div 
              className="flex flex-col"
              style={{ gap: 'var(--size-xs)' }}
            >
              <motion.h2 
                className="text-header md:text-[[var(--size-md)] text-xl" 
                style={{ fontFamily: 'Arial Narrow, sans-serif' }}
                initial={{ 
                  filter: 'blur(15px)', 
                  opacity: 0, 
                  x: -15,
                }}
                whileInView={{ 
                  filter: 'blur(0px)', 
                  opacity: 1, 
                  x: 0,
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.25, 0.1, 0.25, 1],
                  filter: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
                }}
              >
                {manifesto.title}
              </motion.h2>
              <motion.div 
                className='text-tiles-subText'
                style={{ fontFamily: 'Da Vinci, sans-serif' }}
                initial={{ 
                  filter: 'blur(15px)', 
                  opacity: 0, 
                  x: -15,
                }}
                whileInView={{ 
                  filter: 'blur(0px)', 
                  opacity: 1, 
                  x: 0,
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.25, 0.1, 0.25, 1], 
                  delay: 0.2,
                  filter: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
                }}
              >
                {/* Desktop: Show full text */}
                <p className="hidden md:block">
                  {manifesto.excerpt}
                </p>

                {/* Mobile: Show truncated text with read more */}
                <div className="md:hidden">
                  {!isExpanded ? (
                    <p>
                      At the heart of Linecheck 2025 lies a powerful, transformative force: music. Not just as sound, but as a presence — a...
                      <br />
                      <span 
                        className="text-tiles-subText cursor-pointer font-bold"
                        style={{ color: 'var(--click-c)', marginTop: '20px', display: 'block' }}
                        onClick={() => setIsExpanded(true)}
                      >
                        Read more +
                      </span>
                    </p>
                  ) : (
                    <p>
                      At the heart of Linecheck 2025 lies a powerful, transformative force: music. Not just as sound, but as a presence — a living, breathing force that shapes and changes us. This year, the festival expands to explore the larger spectrum of performing arts, extending an invitation to listen, feel, and experience beauty in all its forms.
                      <br />
                      <span 
                        className="text-tiles-subText cursor-pointer font-bold"
                        style={{ color: 'var(--click-c)', marginTop: '20px', display: 'block' }}
                        onClick={() => setIsExpanded(false)}
                      >
                        Read less -
                      </span>
                    </p>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Mobile: Full width CTA button */}
            <div className="md:hidden w-full pt-[var(--size-md)] pb-[var(--size-sm)]">
              <motion.a
                href={manifesto.cta.url}
                className="w-full"
                style={{
                  height: '40px',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  textAlign: 'center',
                  fontFamily: 'Arial Narrow, sans-serif',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: '400',
                  letterSpacing: '0.01em',
                  color: 'var(--color-bg)',
                  backgroundColor: 'var(--color-fg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
                initial={{ 
                  filter: 'blur(15px)', 
                  opacity: 0, 
                  x: -15,
                }}
                whileInView={{ 
                  filter: 'blur(0px)', 
                  opacity: 1, 
                  x: 0,
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.25, 0.1, 0.25, 1], 
                  delay: 0.4,
                  filter: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--ui-contrast)';
                  e.currentTarget.style.color = 'var(--color-fg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-fg)';
                  e.currentTarget.style.color = 'var(--color-bg)';
                }}
              >
                {manifesto.cta.label}
              </motion.a>
            </div>

            {/* Desktop: Original CTA button */}
            <motion.a
              href={manifesto.cta.url}
              className="hidden md:inline-flex"
              style={{
                height: '40px',
                paddingLeft: '20px',
                paddingRight: '20px',
                textAlign: 'center',
                fontFamily: 'Arial Narrow, sans-serif',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '400',
                letterSpacing: '0.01em',
                color: 'var(--color-bg)',
                backgroundColor: 'var(--color-fg)',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                alignSelf: 'flex-start'
              }}
              initial={{ 
                filter: 'blur(15px)', 
                opacity: 0, 
                x: -15,
              }}
              whileInView={{ 
                filter: 'blur(0px)', 
                opacity: 1, 
                x: 0,
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.1, 0.25, 1], 
                delay: 0.4,
                filter: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--ui-contrast)';
                e.currentTarget.style.color = 'var(--color-fg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-fg)';
                e.currentTarget.style.color = 'var(--color-bg)';
              }}
            >
              {manifesto.cta.label}
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
