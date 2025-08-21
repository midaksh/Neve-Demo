import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'arial-narrow': ['Arial Narrow', 'Arial', 'sans-serif'],
        'da-vinci': ['Da Vinci', 'serif'],
      },
      fontSize: {
        'header': ['20px', {
          lineHeight: '0.9',
          letterSpacing: '-0.03em',
          fontWeight: '400',
        }],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};

export default config;
