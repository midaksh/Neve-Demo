'use client';

import React, { useEffect, useRef, useState } from 'react';
import payloadData from '../../../data/payload.json';

const Welcome: React.FC = () => {
  const { welcome, gallery } = payloadData;
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (buttonsRef.current) observer.observe(buttonsRef.current);

    return () => observer.disconnect();
  }, []);

  // Carousel scroll handling
  const handleCarouselScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const itemWidth = carouselRef.current.scrollWidth / gallery.items.length;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(Math.min(newIndex, gallery.items.length - 1));
    }
  };

  // Handle progress bar click to skip to specific image
  const handleProgressBarClick = (index: number) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.scrollWidth / gallery.items.length;
      const scrollPosition = index * itemWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  // Split the text for mobile read more functionality
  // const fullText = "At the heart of Linecheck 2025 lies a powerful, transformative force: music. Not just as sound, but as a presence — a living, breathing force that shapes and changes us. This year, Linecheck expands into the wider realm of performing arts, inviting you to listen more deeply, feel more fully, and discover beauty in unexpected forms. From November 17 to 22, the festival returns to Milan and Bologna with a programme that unfolds as both a meeting for the music industry and a stage for sonic exploration — a space where new voices, bold ideas and shared experiences come to life.";
  
  // const shortText = "At the heart of Linecheck 2025 lies a powerful, transformative force: music. Not just as sound, but as a presence — a living, breathing force that shapes and changes us.";
  
  // const remainingText = "This year, Linecheck expands into the wider realm of performing arts, inviting you to listen more deeply, feel more fully, and discover beauty in unexpected forms. From November 17 to 22, the festival returns to Milan and Bologna with a programme that unfolds as both a meeting for the music industry and a stage for sonic exploration — a space where new voices, bold ideas and shared experiences come to life.";

  return (
    <section className="md:pt-[20px] pt-[30px] md:pb-[60px]">
      <div className="w-full mx-auto flex flex-col items-start-start gap-[10px]">
        {/* Title */}
        <h2 
          ref={titleRef}
          className="text-header blur-slide-left md:text-[var(--size-md)] text-xl"
          style={{ fontFamily: 'Arial Narrow, sans-serif' }}
        >
          {welcome.title}
        </h2>
        
        {/* Rich Text with Read More functionality for mobile */}
        <div 
          ref={descriptionRef}
          className="text-welcome-subText blur-slide-left"
          style={{ fontFamily: 'Da Vinci, sans-serif' }}
        >
          {/* Desktop: Show full text */}
          <p className="hidden md:block">
            At the heart of <strong>Linecheck 2025</strong> lies a powerful, transformative force: music. Not just as 
            sound, but as a presence — a living, breathing force that shapes and changes us. This year, 
            Linecheck expands into the wider realm of performing arts, inviting you to listen more 
            deeply, feel more fully, and discover beauty in unexpected forms. From <strong>November 17 to 
            22</strong>, the festival returns to <strong>Milan</strong> and <strong>Bologna</strong> with a programme that unfolds as both a 
            <strong> meeting</strong> for the music industry and a <strong>stage</strong> for sonic exploration — a space where new 
            voices, bold ideas and shared experiences come to life.
          </p>

          {/* Mobile: Show truncated text with read more */}
          <div className="md:hidden">
            {!isExpanded ? (
              <p>
                At the heart of <strong>Linecheck 2025</strong> lies a powerful, transformative force: music. Not just as 
                sound, but as a presence — a...
                <br />
                <span 
                  className="text-welcome-subText cursor-pointer font-bold"
                  style={{ color: 'var(--click-c)', marginTop: '20px', display: 'block' }}
                  onClick={() => setIsExpanded(true)}
                >
                  Read more +
                </span>
              </p>
            ) : (
              <p>
                At the heart of <strong>Linecheck 2025</strong> lies a powerful, transformative force: music. Not just as 
                sound, but as a presence — a living, breathing force that shapes and changes us. This year, Linecheck expands into the wider realm of performing arts, inviting you to listen more 
                deeply, feel more fully, and discover beauty in unexpected forms. From <strong>November 17 to 
                22</strong>, the festival returns to <strong>Milan</strong> and <strong>Bologna</strong> with a programme that unfolds as both a 
                <strong> meeting</strong> for the music industry and a <strong>stage</strong> for sonic exploration — a space where new 
                voices, bold ideas and shared experiences come to life.
                <br />
                <span 
                  className="text-welcome-subText cursor-pointer font-bold"
                  style={{ color: 'var(--click-c)', marginTop: '20px', display: 'block' }}
                  onClick={() => setIsExpanded(false)}
                >
                  Read less -
                </span>
              </p>
            )}
          </div>
        </div>

        {/* CTA Buttons */}
        <div 
          ref={buttonsRef}
          className="inline-flex gap-[10px] py-[10px] blur-slide-left"
        >
          {welcome.ctas.map((cta, index) => {
            // Define button styles based on label
            let defaultBgColor, defaultTextColor;
            
            switch (cta.label) {
              case 'Get tickets':
                defaultBgColor = 'var(--color-fg)';
                defaultTextColor = 'var(--color-bg)';
                break;
              case 'Festival':
                defaultBgColor = 'var(--ui-accent)';
                defaultTextColor = 'var(--color-fg)';
                break;
              case 'Meeting':
                defaultBgColor = 'var(--ui-25)';
                defaultTextColor = 'var(--color-fg)';
                break;
              default:
                defaultBgColor = 'var(--color-fg)';
                defaultTextColor = 'var(--color-bg)';
            }

            return (
              <a
                key={index}
                href={cta.url}
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
                  color: defaultTextColor,
                  backgroundColor: defaultBgColor,
                  display: "inline-flex",   
                  alignItems: "center",    
                  justifyContent: "center", 
                  transition: 'all 0.2s ease'
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
                {cta.label}
              </a>
            );
          })}
        </div>

        {/* Gallery Section Photos */}
        <div className="w-full">
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div 
              ref={carouselRef}
              className="w-full h-[300px] overflow-x-auto scrollbar-hide"
              onScroll={handleCarouselScroll}
              style={{
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth'
              }}
            >
              <div className="flex gap-[10px] h-full">
                {gallery.items.map((item, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 scroll-snap-align-start"
                    style={{
                      scrollSnapAlign: 'start',
                      width: '90%',
                      height: '100%'
                    }}
                  >
                    <img
                      src={item.thumb}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover grayscale-effect"
                      style={{ willChange: 'filter' }}
                      srcSet={item.srcset.join(', ')}
                      sizes="90vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Bar - Outside Carousel */}
          <div className="md:hidden w-full pt-[var(--size-md)] pb-[var(--size-md)]">
            <div className="flex">
              {gallery.items.map((_, index) => (
                <div
                  key={index}
                  className="flex-1 h-[0.1rem] cursor-pointer transition-all duration-300 ease-out"
                  style={{
                    backgroundColor: index <= currentIndex ? 'var(--ui-accent)' : 'var(--color-fg)'
                  }}
                  onClick={() => handleProgressBarClick(index)}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:flex flex-col gap-[10px]">
            {/* First row - 4 columns */}
            <div className="grid grid-cols-4 gap-[10px]">
              {gallery.items.slice(0, 4).map((item, index) => (
                <div key={index} className="aspect-video overflow-hidden">
                  <img
                    src={item.thumb}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover grayscale-effect"
                    style={{ willChange: 'filter' }}
                    srcSet={item.srcset.join(', ')}
                    sizes="25vw"
                  />
                </div>
              ))}
            </div>

            {/* Second row - 2 columns */}
            <div className="grid grid-cols-2 gap-[10px]">
              {gallery.items.slice(4, 6).map((item, index) => (
                <div key={index + 4} className="aspect-video overflow-hidden">
                  <img
                    src={item.thumb}
                    alt={`Gallery image ${index + 5}`}
                    className="w-full h-full object-cover grayscale-effect"
                    style={{ willChange: 'filter' }}
                    srcSet={item.srcset.join(', ')}
                    sizes="50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
