'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import payloadData from '../../../data/payload.json';
// Font imports removed as they're not being used
import AnimatedSvg from '../AnimatedSvg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { header } = payloadData;

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setExpandedSection(null);
  };

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-white leading-[24px] w-full"
        style={{ height: '40px' }}
      >
        <div className="h-full flex items-center justify-between px-[10px] p-[10px] max-w-full">
          
          {/* Left side - TICKETS from payload (hidden when menu is open) */}
          <div className={`flex items-center ${isMenuOpen ? 'hidden' : 'md:flex hidden'}`}>
            <a 
              href={header.cta.url}
              className="text-header blur-animated header__cta text-[20px] "
              style={{ fontFamily: 'Arial Narrow, sans-serif' }}
            >
              {header.cta.label}
            </a>
          </div>

          {/* Center - Logo (centered on desktop, left on mobile) */}
          <div className="flex items-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 header__logo">
            <AnimatedSvg
              src={header.logo.svgUrl}
              alt={header.logo.ariaLabel}
              className={`h-6 w-auto logo-animate ${isMenuOpen ? 'filter brightness-0 invert' : ''}`}
            />
          </div>

          {/* Right side - MENU/CLOSE MENU button */}
          <div className="relative flex items-center text-[20px]">
            <button 
              onClick={() => isMenuOpen ? closeMenu() : setIsMenuOpen(true)}
              className="text-header blur-animated header__menu"
              style={{ fontFamily: 'Arial Narrow, sans-serif' }}
            >
              {isMenuOpen ? 'CLOSE MENU' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen navigation overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            className="header__nav open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Centered logo in overlay menu */}
            <div className="header__nav-logo">
              <AnimatedSvg
                src={header.logo.svgUrl}
                alt={header.logo.ariaLabel}
                className="h-6 w-auto logo-animate filter brightness-0 invert"
              />
            </div>

            {/* Top right CLOSE MENU */}
            <div className="header__nav-close text-[20px]">
              <button 
                onClick={closeMenu}
                className="text-header"
                style={{ fontFamily: 'Arial Narrow, sans-serif', color: 'var(--color-bg)' }}
              >
                CLOSE MENU
              </button>
            </div>
            
            <motion.div 
              className="header__nav-content md:w-full w-sm pr-10 pl-10"
              layout
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* News */}
              <div className="header__nav-item">
                <motion.a 
                  href="#"
                  className="header__nav-link"
                  onHoverStart={() => setHoveredItem('news')}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <motion.span
                    className="header__nav-text"
                    animate={{ x: hoveredItem === 'news' ? -20 : 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    news
                  </motion.span>
                  {/* Mobile-only text arrow */}
                  <span className="header__nav-arrow-text text-4xl">→</span>
                  <motion.span
                    className="header__icon-right"
                    initial={false}
                    animate={{ opacity: hoveredItem === 'news' ? 1 : 0, x: hoveredItem === 'news' ? 0 : -30 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                </motion.a>
              </div>

              {/* Tickets */}
              <div className="header__nav-item">
                <motion.a 
                  href="#"
                  className="header__nav-link"
                  onHoverStart={() => setHoveredItem('tickets')}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <motion.span
                    className="header__nav-text"
                    animate={{ x: hoveredItem === 'tickets' ? -20 : 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    tickets
                  </motion.span>
                  {/* Mobile-only text arrow */}
                  <span className="header__nav-arrow-text text-4xl">→</span>
                  <motion.span
                    className="header__icon-right"
                    initial={false}
                    animate={{ opacity: hoveredItem === 'tickets' ? 1 : 0, x: hoveredItem === 'tickets' ? 0 : -30 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                </motion.a>
              </div>

              {/* Meeting & Festival */}
              <div className={`header__nav-item ${expandedSection === 'meeting-festival' ? 'expanded' : ''}`}>
                <button 
                  className="header__nav-link header__nav-expandable"
                  onClick={() => toggleSection('meeting-festival')}
                >
                  <span className="header__nav-text">
                    meeting &festival
                    <span className="header__nav-plus-text"> {expandedSection === 'meeting-festival' ? '−' : '+'}</span>
                  </span>
                  <span className="header__nav-plus text-xs md:text-sm">
                    {expandedSection === 'meeting-festival' ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {expandedSection === 'meeting-festival' && (
                    <motion.div 
                      className="header__nav-submenu show"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ 
                        height: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                        opacity: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }
                      }}
                    >
                      <motion.div 
                        className="header__nav-subsection"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
                      >
                        <div className="header__nav-heading">FESTIVAL</div>
                        <motion.div 
                          className="header__nav-subitems"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
                        >
                          <a href="/program" className="header__nav-sublink">PROGRAM</a>
                          <a href="/artists" className="header__nav-sublink">ARTISTS</a>
                        </motion.div>
                      </motion.div>
                      
                      <motion.div 
                        className="header__nav-subsection"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
                      >
                        <div className="header__nav-heading">MEETING</div>
                        <motion.div 
                          className="header__nav-subitems"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
                        >
                          <a href="/program" className="header__nav-sublink">PROGRAM</a>
                          <a href="/area-pro" className="header__nav-sublink">AREA PRO</a>
                        </motion.div>
                      </motion.div>
                      
                      <motion.div 
                        className="header__nav-heading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1], delay: 0.7 }}
                      >
                        PARTNERS
                      </motion.div>
                      <motion.div 
                        className="header__nav-heading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1], delay: 0.8 }}
                      >
                        VENUES
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Info */}
              <div className={`header__nav-item ${expandedSection === 'info' ? 'expanded' : ''}`}>
                <button 
                  className="header__nav-link header__nav-expandable"
                  onClick={() => toggleSection('info')}
                >
                  <span className="header__nav-text">
                    info
                    <span className="header__nav-plus-text"> {expandedSection === 'info' ? '−' : '+'}</span>
                  </span>
                  <span className="header__nav-plus text-sm md:text-base">
                    {expandedSection === 'info' ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {expandedSection === 'info' && (
                    <motion.div 
                      className="header__nav-submenu show"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ 
                        height: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                        opacity: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }
                      }}
                    >
                      <motion.div 
                        className="header__nav-heading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
                      >
                        ABOUT
                      </motion.div>
                      <motion.div 
                        className="header__nav-heading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
                      >
                        F.A.Q.
                      </motion.div>
                      <motion.div 
                        className="header__nav-heading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
                      >
                        CONTACT
                      </motion.div>
                      <motion.div 
                        className="header__nav-heading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
                      >
                        PAST EDITIONS
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
