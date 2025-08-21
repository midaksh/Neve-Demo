'use client';

import React from "react";
import { motion } from "framer-motion";
import payloadData from "../../../data/payload.json";

const iconSize = 24;

const SocialIcon: React.FC<{ label: string }> = ({ label }) => {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    role: "presentation" as const,
    "aria-hidden": true as unknown as undefined,
    width: iconSize,
    height: iconSize,
    style: { display: "block" } as React.CSSProperties,
  };

  switch (label.toLowerCase()) {
    case "facebook":
      return (
        <svg {...common}>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.628 3.875 10.35 9.101 11.647v-7.98H6.627V12H9.1v-1.58c0-4.084 1.849-5.978 5.859-5.978.76 0 2.072.15 2.608.298v3.324a15 15 0 0 0-1.386-.044c-1.967 0-2.728.745-2.728 2.683V12h3.92l-.673 3.667h-3.247v8.245C19.396 23.195 24 18.135 24 12c0-6.627-5.373-12-12-12" fill="currentColor"></path>
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.628 3.875 10.35 9.101 11.647v-7.98H6.627V12H9.1v-1.58c0-4.084 1.849-5.978 5.859-5.978.76 0 2.072.15 2.608.298v3.324a15 15 0 0 0-1.386-.044c-1.967 0-2.728.745-2.728 2.683V12h3.92l-.673 3.667h-3.247v8.245C19.396 23.195 24 18.135 24 12c0-6.627-5.373-12-12-12" fill="currentColor"></path>
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0M7.12 20.452H3.558V8.995H7.12zM5.34 7.434a2.064 2.064 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125m15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457z" fill="currentColor"></path>
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common}>
          <path d="M17.073 0h-4.045v16.348c0 1.948-1.556 3.548-3.492 3.548s-3.491-1.6-3.491-3.548c0-1.913 1.52-3.478 3.388-3.548V8.696C5.319 8.766 2 12.139 2 16.348 2 20.59 5.388 24 9.57 24c4.184 0 7.572-3.443 7.572-7.652V7.965A9.37 9.37 0 0 0 22.5 9.774V5.67c-3.042-.105-5.427-2.61-5.427-5.67" fill="currentColor"></path>
        </svg>
      );
    default:
      return null;
  }
};

const Footer: React.FC = () => {
  const { footer } = payloadData;
  const creditLinkStyle: React.CSSProperties = {
    color: "var(--color-bg)",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "var(--underline-color)",
    textDecorationThickness: "var(--underline-thickness)",
    textUnderlineOffset: "var(--underline-offset)",
    transition: "var(--t-btns)",
    ["--underline-color" as string]: "currentcolor",
  };

  const handleCreditHoverIn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget as HTMLAnchorElement;
    el.style.setProperty("--underline-color", "transparent");
    el.style.color = "var(--ui-accent-contrast)";
  };

  const handleCreditHoverOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget as HTMLAnchorElement;
    el.style.setProperty("--underline-color", "currentcolor");
    el.style.color = "var(--color-bg)";
  };

  return (
    <footer
      className="px-[10px]"
      style={{ backgroundColor: "var(--color-fg)", color: "var(--color-bg)" }}
    >
      <motion.div
        className="flex flex-col gap-[var(--size-xs)]"
        style={{ paddingTop: "var(--size-lg)", paddingBottom: "var(--size-sm)" }}
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
        <span
          className="text-header"
          style={{ color: "var(--color-bg)", fontFamily: "Arial Narrow, sans-serif" }}
        >
          {footer.newsletter.label}
        </span>

        {/* Desktop View */}
        <a
          href={footer.newsletter.url}
          target="_blank"
          rel="noopener noreferrer"
          className="crosslink crosslink--nohovercolor hidden md:flex items-center gap-[var(--size-sm)]"
          style={{ color: "var(--color-bg)" }}
          aria-label={footer.newsletter.cta}
        >
          <span className="crosslink__arrow" aria-hidden="true" />
          <span className="text-title-crosslinks text-[70px]" style={{ color: "var(--color-bg)", fontFamily: "Da Vinci, serif" }}>
            {footer.newsletter.cta}
          </span>
        </a>

        {/* Mobile View */}
        <a
          href={footer.newsletter.url}
          target="_blank"
          rel="noopener noreferrer"
          className="crosslink crosslink--nohovercolor md:hidden flex items-center"
          style={{ color: "var(--color-bg)" }}
          aria-label={footer.newsletter.cta}
        >
          <span className="text-title-crosslinks text-[40px]" style={{ color: "var(--color-bg)", fontFamily: "Da Vinci, serif" }}>
            {footer.newsletter.cta}
            <span className="md:hidden">→</span>
          </span>
        </a>
      </motion.div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: "var(--accent)" }} />

      {/* Links grid */}
      <div
        style={{ paddingTop: "var(--size-md)", paddingBottom: "var(--size-lg)" }}
      >
        <div
          className="flex md:grid flex-col w-full"
          style={{
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "var(--size-md)",
            alignItems: "flex-start",
            color: "var(--color-bg)",
            fontFamily: "Arial Narrow, sans-serif",
          }}
        >
          {/* Column 1: Primary */}
          <motion.div 
          className="flex flex-col gap-[var(--size-sm)]"
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
            {footer.menus.primary.map((item, idx) => (
              item.disabled ? (
                <span
                  key={idx}
                  className="text-header"
                  style={{ color: "var(--color-bg)", opacity: 0.5, fontFamily: "Arial Narrow, sans-serif" }}
                >
                  {item.label}
                </span>
              ) : (
                <a
                  key={idx}
                  href={item.url}
                  className="text-header"
                  style={{ color: "var(--color-bg)", fontFamily: "Arial Narrow, sans-serif" }}
                >
                  {item.label}
                </a>
              )
            ))}
          </motion.div>

          {/* Column 2: Meeting & Festival */}
          <motion.div 
          className="flex flex-col"
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
            <span className="text-header" style={{ color: "var(--ui-50)" }}>
              {footer.menus.meetingFestival.label}
            </span>
            {footer.menus.meetingFestival.items.map((group: Record<string, unknown>, gIdx: number) => (
              <div
                key={gIdx}
                className="flex flex-col gap-[var(--size-xs)]"
                style={{
                  marginTop:
                    gIdx === 0
                      ? "var(--size-sm)"
                      : ["partners", "venues", "past editions"].includes((group.label as string || "").toLowerCase())
                      ? "var(--size-2xs)"
                      : "var(--size-sm)",
                }}
              >
                {group.children ? (
                  <>
                    <a
                      href={(group.url as string) || "#"}
                      className="text-header"
                      style={{ color: "var(--color-bg)" }}
                    >
                      {group.label as string}
                    </a>
                    <div className="flex flex-col gap-[var(--size-2xs)]">
                      {(group.children as Record<string, unknown>[]).map((child: Record<string, unknown>, cIdx: number) => (
                        (child.disabled as boolean) ? (
                          <span key={cIdx} style={{ color: "var(--color-bg)", opacity: 0.5, fontSize: "var(--f-15)" }}>
                            {child.label as string}
                          </span>
                        ) : (
                          <a key={cIdx} href={child.url as string} style={{ color: "var(--color-bg)", fontSize: "var(--f-15)" }}>
                            {child.label as string}
                          </a>
                        )
                      ))}
                    </div>
                  </>
                ) : (
                  (() => {
                    const specialLabels = ["partners", "venue", "venues", "past editions"]; // font-size --f-20 + uppercase
                    const isSpecial = specialLabels.includes((group.label as string || "").toLowerCase());
                    const baseStyle: React.CSSProperties = {
                      color: "var(--color-bg)",
                      fontSize: isSpecial ? "var(--f-20)" : "var(--f-15)",
                      textTransform: isSpecial ? "uppercase" : "none",
                    };
                    if (group.disabled as boolean) {
                      return (
                        <span style={{ ...baseStyle, opacity: 0.5, gap: "var(--size-2xs)" }}>
                          {group.label as string}
                        </span>
                      );
                    }
                    return (
                      <a href={(group.url as string) || "#"} style={baseStyle}>
                        {group.label as string}
                      </a>
                    );
                  })()
                )}
              </div>
            ))}
          </motion.div>

          {/* Column 3: Info */}
          <motion.div 
          className="flex flex-col gap-[var(--size-sm)] w-full md:w-auto"
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
            <span className="text-header" style={{ color: "var(--ui-50)" }}>
              {footer.menus.info.label}
            </span>
            <div className="flex flex-col gap-[var(--size-2xs)]">
              {footer.menus.info.items.map((item, idx) => (
                <a key={idx} href={item.url} style={{ color: "var(--color-bg)", fontSize: "var(--f-15)" }}>
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 4: Legal */}
          <motion.div 
          className="flex flex-col gap-[var(--size-sm)]"
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
            <span className="text-header" style={{ color: "var(--ui-50)" }}>
              {footer.menus.legal.label}
            </span>
            <div className="flex flex-col gap-[var(--size-2xs)]">
              {footer.menus.legal.items.map((item, idx) => (
                item.disabled ? (
                  <span key={idx} style={{ color: "var(--color-bg)", opacity: 0.5, fontSize: "var(--f-15)" }}>
                    {item.label}
                  </span>
                ) : (
                  <a key={idx} href={item.url} target={item.target || undefined} style={{ color: "var(--color-bg)", fontSize: "var(--f-15)" }}>
                    {item.label}
                  </a>
                )
              ))}
            </div>
          </motion.div>

          {/* Column 5: Empty spacer to honor 6th column for FOLLOW US - Hidden on mobile */}
          <div className="hidden md:block" />

          {/* Column 6: Social */}
          <motion.div 
          className="flex flex-col gap-[var(--size-sm)]"
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
            <span className="text-header" style={{ color: "var(--color-bg)" }}>
              FOLLOW US
            </span>
            <div className="flex items-center gap-[var(--size-sm)]" style={{ color: "var(--color-bg)" }}>
              {footer.social.map((s, idx) => (
                <a key={idx} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ color: "var(--color-bg)" }}>
                  <SocialIcon label={s.label} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom row: partners logo and credits - stacked on mobile */}
      <motion.div 
      style={{ paddingTop: "var(--size-md)", paddingBottom: "var(--size-lg)" }}
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
        <div className="flex md:flex-row flex-col gap-[var(--size-md)]">
          {/* Partners logo section */}
          <div className="flex flex-col gap-[var(--size-sm)] items-start md:flex-1">
            <span
              className="text-header"
              style={{ color: "var(--color-bg)", fontSize: "var(--f-15)", fontFamily: "Arial Narrow, sans-serif", textTransform: "none" }}
            >
              {footer.partnersLogo.label}
            </span>
            <a href={footer.partnersLogo.url} target="_blank" rel="noopener noreferrer" aria-label={footer.partnersLogo.label}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 429.17 143.51" role="presentation" aria-hidden={true} style={{ display: "block", height: 36, color: "var(--color-bg)" }}>
                <path d="M239.82 124.3h11.11c3.38 0 5.54 2.3 5.54 5.76 0 3-1.26 5.76-6.44 5.76h-10.21Zm0-3.6v-9.85h10c3.69 0 5.4 2 5.4 5s-1.26 4.9-5.85 4.9Zm19.44-5.35c0-5-4-8.1-10.53-8.1h-13v32.17h13.86c6.66 0 10.89-3.42 10.89-9.36 0-4.81-2.88-7.38-6.26-8V122c2.66-.9 5-2.7 5-6.66m-29 13.36v-21.45h-4.05v21.46c0 5.22-2.7 7.74-8.28 7.74s-8.28-2.52-8.28-7.74v-21.46h-4v21.46c0 6.57 3.73 11.34 12.33 11.34s12.33-4.77 12.33-11.34m-55.44-21.46v32.17h4v-14.89h17.19v14.89h4v-32.17h-4v13.68h-17.13v-13.68ZM404 89.42h4.05V63h.09l16.06 26.41h4.95V57.25h-4.05v26.5h-.1l-16-26.5h-5Zm-20.56-3c-8.1 0-11.7-6.21-11.7-13.14s3.6-13.09 11.7-13.09 11.7 6.16 11.7 13.09-3.6 13.14-11.7 13.14m0 3.6c9.45 0 15.75-7.06 15.75-16.74s-6.3-16.69-15.75-16.69-15.75 7-15.75 16.69 6.3 16.74 15.75 16.74m-24.93-.63h4.05V57.25h-4.05Zm-18.86 0h4.05V60.85h10.71v-3.6H329v3.6h10.71Zm-27.92-11.62L317.44 61h.09l5.72 16.79Zm12.82 3.6 2.84 8h4.18l-11.83-32.12h-4.5l-11.88 32.17h4.18l2.84-8Zm-45.9-24.12 11.25 32.17h4.46l11.25-32.17h-4.28l-9.18 28.12-9.18-28.12Zm-16.42 29.2c-8.1 0-11.7-6.21-11.7-13.14s3.6-13.09 11.7-13.09 11.7 6.16 11.7 13.09-3.6 13.14-11.7 13.14m0 3.6c9.45 0 15.77-7.05 15.77-16.74s-6.3-16.69-15.75-16.69-15.75 7-15.75 16.69 6.3 16.74 15.75 16.74m-46-.63h4.05V63h.09l16.07 26.41h4.95V57.25h-4.05v26.5h-.09l-16.07-26.5h-4.95Zm-31.18 0h4.05V63h.09l16.09 26.42h4.95V57.25h-4.05v26.5h-.09l-16.06-26.5h-5Zm-10.17 0h4V57.25h-4Zm129.31-71.55h4.05c-.76-6.12-5.8-11.25-13.68-11.25-8.82 0-14.89 7-14.89 16.69s6.07 16.74 14.89 16.74c7.92 0 13-5.13 13.68-12.24h-4.05c-.27 4.05-2.88 8.64-9.63 8.64-7.65 0-10.84-6.61-10.84-13.14s3.19-13.09 10.84-13.09c6.71 0 9.05 4.59 9.63 7.65m-33.7 21.55h4.05V7.25h-4.05Zm-16.7-18.76c-4.72-1.17-8.19-1.76-8.19-6 0-2.66 2.43-4.41 7-4.41 5.08 0 7.51 2.25 8.1 6.57h4.05c-.54-6.66-5.31-10.17-12.15-10.17-7.11 0-11 3.37-11 8.46 0 6.25 5.76 7.92 10.58 9 7.2 1.67 9.58 2.48 9.58 6.89 0 2.88-2 5.44-7.56 5.44-6.75 0-9.45-3.42-9.9-7.83h-4.05c.45 7.38 6.35 11.43 13.95 11.43 8.15 0 11.61-4.36 11.61-9 0-7.34-4.72-8.55-12-10.35m-17.5 8.05V7.25h-4.05v21.46c0 5.22-2.7 7.74-8.28 7.74s-8.28-2.52-8.28-7.74V7.25h-4v21.46c0 6.57 3.73 11.34 12.33 11.34s12.33-4.77 12.33-11.34m-61.54 10.71h4V13h.16l9.72 26.46h3.6L202 13h.09v26.42h4V7.25h-5.54L190.54 34h-.09L180.37 7.25h-5.53ZM123.9 143.51c-12 0-21.21-9.57-21.53-22.33-.31-12.08-7.07-24.83-18.53-27.43-2.81-.64-13-.5-15.89-1C56.71 91 49 81.09 49.71 69.39a21.63 21.63 0 0 1 20.9-20.34c8.14-.18 21.12-4.62 26.28-11.1a25.15 25.15 0 0 0 5.45-15.76c.18-11.09 6.19-19.85 16.72-21.84 11.85-2.23 24.56 6.43 26.24 18.85C147 31.39 138 42.93 126.09 44a61 61 0 0 0-11.33 1.92c-10.88 4.48-21.54 12.4-21.54 26.17 0 12.29 18.14 27.09 30.86 27.44a21.58 21.58 0 0 1 21 18c2.46 13.64-7.66 26.05-21.23 26.05" fill="currentColor"></path>
                <path d="M145.65 71.81a20.68 20.68 0 1 1-41.34-.16c0-11.62 9.32-21.05 20.66-21a20.88 20.88 0 0 1 20.68 21.19m-52.87 50.59a20.67 20.67 0 1 1-41.32-.16c.06-11.61 9.32-21 20.65-21a20.88 20.88 0 0 1 20.67 21.19M20.66 143a20.9 20.9 0 0 0 20.66-21.1V70.14A20.9 20.9 0 0 0 20.66 49 20.9 20.9 0 0 0 0 70.14v51.76A20.9 20.9 0 0 0 20.66 143M47.81 28.72a21 21 0 0 1 15.08 6.39 18.9 18.9 0 0 0 13.56 5.75 19.41 19.41 0 0 0 19.17-19.61A19.41 19.41 0 0 0 76.45 1.63a18.9 18.9 0 0 0-13.56 5.75 21 21 0 0 1-15.08 6.39 21 21 0 0 1-15.09-6.39 18.9 18.9 0 0 0-13.56-5.75A19.41 19.41 0 0 0 0 21.25a19.4 19.4 0 0 0 19.16 19.61 18.9 18.9 0 0 0 13.56-5.75 21 21 0 0 1 15.09-6.39" fill="currentColor"></path>
              </svg>
            </a>
          </div>

          {/* Credits section */}
          <div className="md:flex-1" style={{ color: "var(--color-bg)", fontSize: "var(--f-15)", fontFamily: "Arial Narrow, sans-serif" }}>
            {(() => {
              const bylineText = (footer.credits.byline || "").replace(/^by\s+/i, "");
              const designName = (footer.credits.design.label || "").replace(/^Design by\s+/i, "");
              // const codeText = footer.credits.code.map((c: any) => c.label).join(" + ");
              return (
                <>
                  <p style={{ margin: 0 }}>
                    {footer.credits.copyright} by {" "}
                    <a
                      href={footer.credits.bylineUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={creditLinkStyle}
                      onMouseEnter={handleCreditHoverIn}
                      onMouseLeave={handleCreditHoverOut}
                    >
                      {bylineText}
                    </a>
                  </p>
                  <p style={{ margin: 0 }}>
                    Design by {" "}
                    <a
                      href={footer.credits.design.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={creditLinkStyle}
                      onMouseEnter={handleCreditHoverIn}
                      onMouseLeave={handleCreditHoverOut}
                    >
                      {designName}
                    </a>
                    . Code by {footer.credits.code.map((c: Record<string, unknown>, i: number) => (
                      <React.Fragment key={i}>
                        <a
                          href={c.url as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={creditLinkStyle}
                          onMouseEnter={handleCreditHoverIn}
                          onMouseLeave={handleCreditHoverOut}
                        >
                          {c.label as string}
                        </a>
                        {i < footer.credits.code.length - 1 ? " + " : ""}
                      </React.Fragment>
                    ))}
                  </p>
                </>
              );
            })()}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
