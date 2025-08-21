'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import payloadData from '../../../data/payload.json';
import ReleasedPrice from './ReleasedPrice';

const Tickets: React.FC = () => {
  const { tickets } = payloadData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredTooltip, setHoveredTooltip] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const VISIBLE_COUNT = 3;
  const maxIndex = Math.max(0, tickets.items.length - VISIBLE_COUNT);

  const scrollToNext = () => setCurrentIndex(prev => Math.min(prev + VISIBLE_COUNT, maxIndex));
  const scrollToPrev = () => setCurrentIndex(prev => Math.max(prev - VISIBLE_COUNT, 0));

  return (
    <section 
      className="w-full md:pt-[var(--size-sm)] md:pb-[var(--size-lg))] pt-0 pb-0"
    >
      {/* Title and Description */}
      <div className="flex flex-col gap-[10px] md:text-[[var(--size-md)] text-xl">
        <motion.h2 
        className="text-header" style={{ fontFamily: 'Arial Narrow, sans-serif' }}
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
          {tickets.title}
        </motion.h2>
        <motion.div 
        className="text-tickets-subText" 
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
          filter: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
        }}
        >
          {/* Desktop: Show full text */}
          <p className="hidden md:block">
            {tickets.description}
          </p>

          {/* Mobile: Show truncated text with read more */}
          <div className="md:hidden">
            {!isExpanded ? (
              <p>
                Ready to join us? Discover all available ticket types and passes now on sale. Take advantage of the best...
                <br />
                <span 
                  className="text-tickets-subText cursor-pointer font-bold"
                  style={{ color: 'var(--click-c)', marginTop: '20px', display: 'block' }}
                  onClick={() => setIsExpanded(true)}
                >
                  Read more +
                </span>
              </p>
            ) : (
              <p>
                Ready to join us? Discover all available ticket types and passes now on sale. Take advantage of the best release deals and experience both the conference and the festival at the most convenient price.
                <br />
                <span 
                  className="text-tickets-subText cursor-pointer font-bold"
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

      {/* Navigation and Tickets Items */}
      <div className="flex flex-col gap-[20px] pt-[20px]">
        {/* Navigation Arrows - Desktop Only */}
        <div className="hidden md:flex justify-end">
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
              <img src="/Arrow-serif.svg" alt="Left Arrow" width={35} height={10}  style={{ filter: 'brightness(0) saturate(100%) invert(1)', transform: 'scaleX(-1)' }} />
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
              <img src="/Arrow-serif.svg" alt="Right Arrow" width={35} height={10} style={{ filter: 'brightness(0) saturate(100%) invert(1)' }} />
            </button>
          </div>
        </div>

        {/* Tickets Items - Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-[10px] items-start">
          {tickets.items.slice(currentIndex, currentIndex + VISIBLE_COUNT).map((item, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col self-start"
              style={{ backgroundColor: 'var(--ui-25)', padding: 'var(--size-sm)' }}
              initial={{ 
                filter: 'blur(15px)', 
                opacity: 0,
              }}
              whileInView={{ 
                filter: 'blur(0px)', 
                opacity: 1,
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.1, 0.25, 1], 
                delay: index * 0.1,
                filter: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
              }}
            >
              {/* Venue, Date and Tooltip Container */}
              <div className="flex flex-row gap-[var(--size-sm)]" style={{ marginBottom: '10px' }}>
                <span className="text-ticket-header " style={{ fontFamily: 'Arial Narrow, sans-serif' }}>
                  {item.venue}
                </span>
                <span className="text-ticket-header" style={{ fontFamily: 'Arial Narrow, sans-serif', color: 'var(--ui-accent)' }}>|</span>
                <span className="text-ticket-header" style={{ fontFamily: 'Arial Narrow, sans-serif' }}>
                  {(() => {
                    const dateStr = item.date || item.dateRange?.[0];
                    if (dateStr) {
                      const date = new Date(dateStr);
                      return `${date.getDate()}.${date.getMonth() + 1}`;
                    }
                    return '';
                  })()}
                </span>
                <span className="text-ticket-header" style={{ fontFamily: 'Arial Narrow, sans-serif', color: 'var(--ui-accent)' }}>|</span>
                <div className="relative flex items-center">
                  <svg 
                    width="17" 
                    height="17" 
                    viewBox="0 0 16 16" 
                    fill="currentColor"
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredTooltip(index)}
                    onMouseLeave={() => setHoveredTooltip(null)}
                    style={{ color: 'var(--color-fg)', marginTop: '-2px' }}
                  >
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <text x="8" y="12" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">i</text>
                  </svg>
                  
                  {/* Tooltip */}
                  {hoveredTooltip === index && (
                    <div 
                      className="absolute z-10 bg-gray-800 text-white p-[15px] w-lg"
                      style={{
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginTop: '10px'
                      }}
                    >
                      <div className="text-sm leading-relaxed">
                        {item.tooltip}
                      </div>
                      {/* Arrow pointing up */}
                      <div 
                        className="absolute w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-transparent border-b-gray-800"
                        style={{
                          top: '-8px',
                          left: '50%',
                          transform: 'translateX(-50%)'
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Title, Pricing and CTA Container */}
              <div className="flex flex-col gap-[var(--size-sm)]">
                {/* Title */}
                <h3 className="text-subText"
                  style={{fontFamily: 'Da Vinci, sans-serif'}}
                >
                  {item.title}
                </h3>

                {/* Pricing */}
                <div className="flex flex-col gap-[var(--size-sm)]">
                  {item.prices.map((price, priceIndex) => (
                    <div key={priceIndex}>
                      <ReleasedPrice release={price.release} price={price.price} soldOut={price.soldOut} />
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <a
                  href={item.buyUrl}
                  className="block w-full text-center py-[10px] px-[20px]"
                  style={{ 
                    fontFamily: 'Arial Narrow, sans-serif',
                    color: 'var(--color-bg)',
                    backgroundColor: 'var(--color-fg)',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: '400',
                    letterSpacing: '0.01em',
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
                  Get tickets
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tickets Items - Mobile Vertical Stack */}
        <div className="md:hidden flex flex-col gap-[10px] w-full pt-[var(--size-md)] pb-[var(--size-lg)]">
          {tickets.items.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col w-full"
              style={{ backgroundColor: 'var(--ui-25)', padding: 'var(--size-sm)' }}
              initial={{ 
                filter: 'blur(15px)', 
                opacity: 0,
              }}
              whileInView={{ 
                filter: 'blur(0px)', 
                opacity: 1,
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.1, 0.25, 1], 
                delay: index * 0.1,
                filter: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
              }}
            >
              {/* Venue and Date Container */}
              <div className="flex flex-row gap-[var(--size-sm)]" style={{ marginBottom: '10px' }}>
                <span className="text-ticket-header" style={{ fontFamily: 'Arial Narrow, sans-serif' }}>
                  {item.venue}
                </span>
                <span className="text-ticket-header" style={{ fontFamily: 'Arial Narrow, sans-serif', color: 'var(--ui-accent)' }}>|</span>
                <span className="text-ticket-header" style={{ fontFamily: 'Arial Narrow, sans-serif' }}>
                  {(() => {
                    const dateStr = item.date || item.dateRange?.[0];
                    if (dateStr) {
                      const date = new Date(dateStr);
                      return `${date.getDate()}.${date.getMonth() + 1}`;
                    }
                    return '';
                  })()}
                </span>
              </div>

              {/* Title, Pricing and CTA Container */}
              <div className="flex flex-col gap-[var(--size-sm)]">
                {/* Title */}
                <h3 className="text-subText"
                  style={{fontFamily: 'Da Vinci, sans-serif'}}
                >
                  {item.title}
                </h3>

                {/* Pricing */}
                <div className="flex flex-col gap-[var(--size-sm)]">
                  {item.prices.map((price, priceIndex) => (
                    <div key={priceIndex}>
                      <ReleasedPrice release={price.release} price={price.price} soldOut={price.soldOut} />
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <a
                  href={item.buyUrl}
                  className="block w-full text-center py-[10px] px-[20px]"
                  style={{ 
                    fontFamily: 'Arial Narrow, sans-serif',
                    color: 'var(--color-bg)',
                    backgroundColor: 'var(--color-fg)',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: '400',
                    letterSpacing: '0.01em',
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
                  Get tickets
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tickets;
