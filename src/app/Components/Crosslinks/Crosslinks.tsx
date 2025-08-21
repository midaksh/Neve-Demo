'use client';

import React from 'react';
import { motion } from 'framer-motion';
import payloadData from '../../../data/payload.json';

const Crosslinks: React.FC = () => {
  const { crosslinks } = payloadData;

  return (
    <section
      className="flex flex-col md:pt-[var(--size-sm)] md:pb-[var(--size-lg] pt-[var(--size-sm)] pb-[var(--size-xs)]"
    >
      <div className="flex flex-col md:grid md:grid-cols-2 gap-[10px]">
        {crosslinks.map((link, index) => {
          const defaultBgColor = link.style === 'alt' ? 'var(--ui-accent)' : 'var(--color-fg)';
          const defaultTextColor = link.style === 'alt' ? 'var(--color-fg)' : 'var(--color-bg)';

          return (
            <a
              key={index}
              href={link.url}
              className="crosslink flex flex-col"
              style={{
                backgroundColor: defaultBgColor,
                color: defaultTextColor,
                justifyContent: 'space-between',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--ui-contrast)';
                e.currentTarget.style.color = 'var(--color-fg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = defaultBgColor;
                e.currentTarget.style.color = defaultTextColor;
              }}
            >
              <div
                  className="crosslink__inner p md:pb-[var(--size-sm)] md:pt-[var(--size-lg)] md:pl-[var(--size-sm)] md:pr-[var(--size-md)] pb-[var(--size-xs)] pt-[var(--size-sm)] px-[var(--size-xs)]"
                  style={{
                    flex: 1,
                  }}
              >
                <motion.p
                  className="text-header text-[1rem] md:text-[var(--size-sm)]"
                  style={{
                    fontFamily: 'Arial Narrow, sans-serif',
                  }}
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
                    delay: index * 0.2,
                    filter: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
                  }}
                >
                  {link.label}
                </motion.p>

                {/* Title + Arrow wrapper controlled ONLY by CSS media queries */}
                <div className="crosslink__titlewrap">
                  <motion.h3
                    className="text-title-crosslinks crosslink__titletext md:text-[70px] text-[35px]"
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
                      delay: index * 0.2 + 0.1,
                      filter: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
                    }}
                  >
                    {link.title}
                  </motion.h3>
                  <div>
                    <motion.span 
                      className="crosslink__arrow md:ml-[15px] md:h-6 md:w-14 h-[0.65rem] w-[1.5rem]"
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
                        delay: index * 0.2 + 0.2,
                        filter: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
                      }}
                    />
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Crosslinks;
