'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import payloadData from '../../../data/payload.json';

const CARD_WIDTH = 420; // image+text approximate width including padding
const CARD_GAP = 10;
const VISIBLE_COUNT = 3;

const Newshighlights: React.FC = () => {
  const { newsHighlights } = payloadData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselCurrentIndex, setCarouselCurrentIndex] = useState(0);

  const maxIndex = Math.max(0, newsHighlights.items.length - VISIBLE_COUNT);

  const scrollToNext = () => setCurrentIndex(prev => Math.min(prev + VISIBLE_COUNT, maxIndex));
  const scrollToPrev = () => setCurrentIndex(prev => Math.max(prev - VISIBLE_COUNT, 0));

  // Mobile carousel scroll handling
  const handleCarouselScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const itemWidth = carouselRef.current.scrollWidth / newsHighlights.items.length;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setCarouselCurrentIndex(Math.min(newIndex, newsHighlights.items.length - 1));
    }
  };

  // Handle progress bar click to skip to specific news item
  const handleProgressBarClick = (index: number) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.scrollWidth / newsHighlights.items.length;
      const scrollPosition = index * itemWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCarouselCurrentIndex(index);
    }
  };

  return (
    <section
      className="flex flex-col"
      style={{
        paddingTop: 'var(--size-lg)',
        paddingBottom: 'var(--size-md)',
      }}
    >
      <div className="w-full mx-auto flex flex-col items-start-start gap-[10px]">
        {/* Title */}
        <motion.h2 
          className="text-header md:text-[][var(--size-md)] text-xl"
          style={{ fontFamily: 'Arial Narrow, sans-serif' }}
          initial={{ 
            filter: 'blur(15px)', 
            opacity: 0, 
            x: -30,
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
          {newsHighlights.title}
        </motion.h2>
        
        {/* Description */}
        <motion.p 
          className="text-news-subText"
          style={{ fontFamily: 'Da Vinci, sans-serif' }}
          initial={{ 
            filter: 'blur(15px)', 
            opacity: 0, 
            x: -30,
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
          {/* Desktop: Show full description */}
          <span className="hidden md:inline">{newsHighlights.description}</span>
          
          {/* Mobile: Show truncated text with read more */}
          <span className="md:hidden">
            Discover all the latest from Linecheck — from upcoming Music Meeting and Festival highlights to fresh new
            {!isExpanded ? (
              <>
                ...
                <br />
                <span
                  className="text-news-subText cursor-pointer font-bold"
                  style={{ color: 'var(--click-c)', marginTop: '20px', display: 'block' }}
                  onClick={() => setIsExpanded(true)}
                >
                  Read more +
                </span>
              </>
            ) : (
              <>, trends, buzz, and the voices shaping the music ecosystem.
                <br />
                <span
                  className="text-news-subText cursor-pointer font-bold"
                  style={{ color: 'var(--click-c)', marginTop: '20px', display: 'block' }}
                  onClick={() => setIsExpanded(false)}
                >
                  Read less -
                </span>
              </>
            )}
          </span>
        </motion.p>

        {/* All News CTA Button and Navigation */}
        <motion.div 
          className="flex items-center justify-between w-full md:pt-[10px] pt-[var(--size-md)] pb-[var(--size-sm)] md:pb-0"
          initial={{ 
            filter: 'blur(15px)', 
            opacity: 0, 
            x: -30,
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
        >
          {/* Mobile: Full width CTA button */}
          <div className="md:hidden w-full">
            <a
              href={newsHighlights.cta.url}
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
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--ui-contrast)';
                e.currentTarget.style.color = 'var(--color-fg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-fg)';
                e.currentTarget.style.color = 'var(--color-bg)';
              }}
            >
              {newsHighlights.cta.label}
            </a>
          </div>

          {/* Desktop: Original layout with navigation arrows */}
          <div className="hidden md:flex items-center justify-between w-full">
            <div className="inline-flex gap-[10px]">
              <a
                href={newsHighlights.cta.url}
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
                  display: 'inline-flex',   
                alignItems: 'center',    
                justifyContent: 'center', 
                transition: 'all 0.2s ease'
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
              {newsHighlights.cta.label}
            </a>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-[1px]">
            <button 
              onClick={scrollToPrev}
              disabled={currentIndex === 0}
              className="btn--nav justify-center"
                style={{ 
                  backgroundColor: currentIndex === 0 ? '#7f7e7e' : 'var(--color-fg)',
                  color: 'var(--color-bg)'
                }}
              onMouseEnter={(e) => { if (currentIndex > 0) { e.currentTarget.style.backgroundColor = 'var(--color-fg)'; e.currentTarget.style.color = 'var(--color-bg)'; } }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = currentIndex === 0 ? '#7f7e7e' : 'var(--color-fg)'; e.currentTarget.style.color = 'var(--color-bg)'; }}
            >
                <img src="/Arrow-serif.svg" alt="Left Arrow" width={35} height={10} className="grayscale-effect" style={{ filter: 'brightness(0) saturate(100%) invert(1)', transform: 'scaleX(-1)' }} />
            </button>
            <button 
              onClick={scrollToNext}
              disabled={currentIndex >= maxIndex}
              className="btn--nav justify-center"
                style={{ 
                  backgroundColor: currentIndex >= maxIndex ? '#7f7e7e' : 'var(--color-fg)',
                  color: 'var(--color-bg)'
                }}
                onMouseEnter={(e) => { if (currentIndex < maxIndex) { e.currentTarget.style.backgroundColor = 'var(--color-fg)'; e.currentTarget.style.color = 'var(--color-bg)'; } }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = currentIndex >= maxIndex ? '#7f7e7e' : 'var(--color-fg)'; e.currentTarget.style.color = 'var(--color-bg)'; }}
              >
                <img src="/Arrow-serif.svg" alt="Right Arrow" width={35} height={10} className="grayscale-effect" style={{ filter: 'brightness(0) saturate(100%) invert(1)' }} />
            </button>
          </div>
        </div>
        </motion.div>

        {/* News Carousel */}
        <div className="w-full overflow-hidden py-[10px]">
          {/* Mobile Carousel */}
          <div className="md:hidden">
          <div
              ref={carouselRef}
              className="w-full overflow-x-auto scrollbar-hide"
              onScroll={handleCarouselScroll}
            style={{
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth'
            }}
          >
            <div className="flex gap-[10px] h-full">
            {newsHighlights.items.slice(0, 6).map((item, index) => (
              <div 
                key={index}
                    className="flex-shrink-0 scroll-snap-align-start"
                    style={{
                      scrollSnapAlign: 'start',
                      width: '90%',
                      height: 'auto'
                    }}
              >
                <a href={item.url} className="block flex flex-col gap-[1rem]">
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4 / 3', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <img 
                      src={item.image} 
                      alt={item.imageAlt || item.title} 
                          className="grayscale-effect"
                      style={{ display: 'block', objectFit: 'cover', width: '100%', height: '100%', maxWidth: '100%', fontStyle: 'italic' }}
                    />
                    {/* Date Label */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 'var(--size-xs)',
                        left: 'var(--size-xs)',
                        width: 'auto',
                        textTransform: 'uppercase',
                        fontSize: 'var(--f-20)',
                        paddingLeft: 'var(--size-xs)',
                        paddingRight: 'var(--size-xs)',
                        backgroundColor: 'var(--color-fg)',
                        color: 'var(--color-bg)',
                        fontFamily: 'Arial Narrow, sans-serif'
                      }}
                    >
                      {item.dateLabel}
                    </div>
                  </div>

                  {/* Meta + Title */}
                      <motion.div 
                        className="pl-[10px] pr-[20px] pb-[20px] flex flex-col gap-[1rem]"
                        initial={{ 
                          filter: 'blur(15px)', 
                          opacity: 0, 
                          y: -30,
                        }}
                        whileInView={{ 
                          filter: 'blur(0px)', 
                          opacity: 1, 
                          y: 0,
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                          duration: 1.2, 
                          ease: [0.25, 0.1, 0.25, 1], 
                          delay: 0.2,
                          filter: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
                        }}
                      >
                        <div className="flex flex-wrap md:gap-[1rem] gap-[0.75rem]">
                          {item.categories.map((cat, i) => (
                            <span
                              key={i}
                              className="text-header text-xl"
                              style={{ fontFamily: 'Arial Narrow, sans-serif', color: 'var(--color-fg)' }}
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                        <h1 className='text-tiles-subText'
                          style={{ fontFamily: 'Da Vinci, sans-serif', color: 'var(--color-fg)' }}
                        >
                          {item.title}
                        </h1>
                      </motion.div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Bar - Outside Carousel */}
          <div className="md:hidden w-full" style={{ paddingTop: 'var(--size-sm)' }}>
            <div className="flex">
              {newsHighlights.items.slice(0, 6).map((_, index) => (
                <div
                  key={index}
                  className="flex-1 h-[0.1rem] cursor-pointer transition-all duration-300 ease-out"
                  style={{
                    backgroundColor: index <= carouselCurrentIndex ? 'var(--ui-accent)' : 'var(--color-fg)'
                  }}
                  onClick={() => handleProgressBarClick(index)}
                />
              ))}
            </div>
          </div>

          {/* Desktop Carousel */}
          <div className="hidden md:block">
            <div
              className="flex gap-[10px] will-change-transform"
              style={{
                transform: `translateX(-${currentIndex * (CARD_WIDTH + CARD_GAP)}px)`,
                transition: 'transform 400ms var(--ease-out-quad)'
              }}
            >
              {newsHighlights.items.slice(0, 6).map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex-shrink-0"
                  style={{ minWidth: `${CARD_WIDTH}px`, width: `${CARD_WIDTH}px` }}
                  initial={{ 
                    filter: 'blur(15px)', 
                    opacity: 0, 
                    y: -30,
                  }}
                  whileInView={{ 
                    filter: 'blur(0px)', 
                    opacity: 1, 
                    y: 0,
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.25, 0.1, 0.25, 1], 
                    delay: index * 0.1,
                    filter: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
                  }}
                >
                  <a href={item.url} className="block flex flex-col gap-[1rem]">
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: '4 / 3', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                      <img 
                        src={item.image} 
                        alt={item.imageAlt || item.title} 
                        className="grayscale-effect"
                        style={{ display: 'block', objectFit: 'cover', width: '100%', height: '100%', maxWidth: '100%', fontStyle: 'italic' }}
                      />
                      {/* Date Label */}
                      <motion.div
                        style={{
                          position: 'absolute',
                          top: 'var(--size-xs)',
                          left: 'var(--size-xs)',
                          width: 'auto',
                          textTransform: 'uppercase',
                          fontSize: 'var(--f-20)',
                          paddingLeft: 'var(--size-xs)',
                          paddingRight: 'var(--size-xs)',
                          backgroundColor: 'var(--color-fg)',
                          color: 'var(--color-bg)',
                          fontFamily: 'Arial Narrow, sans-serif'
                        }}
                        initial={{ 
                          filter: 'blur(15px)', 
                          opacity: 0, 
                          y: -30,
                        }}
                        whileInView={{ 
                          filter: 'blur(0px)', 
                          opacity: 1, 
                          y: 0,
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                          duration: 1.2, 
                          ease: [0.25, 0.1, 0.25, 1], 
                          delay: index * 0.1 + 0.2,
                          filter: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
                        }}
                      >
                        {item.dateLabel}
                      </motion.div>
                    </div>

                    {/* Meta + Title */}
                    <motion.div 
                      className="pl-[10px] pr-[20px] pb-[20px] flex flex-col gap-[1rem]"
                      initial={{ 
                        filter: 'blur(15px)', 
                        opacity: 0, 
                        y: -30,
                      }}
                      whileInView={{ 
                        filter: 'blur(0px)', 
                        opacity: 1, 
                        y: 0,
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        duration: 1.2, 
                        ease: [0.25, 0.1, 0.25, 1], 
                        delay: index * 0.1 + 0.4,
                        filter: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
                      }}
                    >
                    <div className="flex flex-wrap gap-[1rem]">
                      {item.categories.map((cat, i) => (
                        <span
                          key={i}
                          className="text-header"
                          style={{ fontFamily: 'Arial Narrow, sans-serif', color: 'var(--color-fg)' }}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h1 className='text-tiles-subText'
                      style={{ fontFamily: 'Da Vinci, sans-serif', color: 'var(--color-fg)' }}
                    >
                      {item.title}
                    </h1>
                    </motion.div>
                </a>
                </motion.div>
              ))}
              </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Newshighlights;

