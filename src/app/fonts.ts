import localFont from 'next/font/local';

export const arialNarrow = localFont({
  src: [
    {
      path: '../../public/fonts/ArialNarrow.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ArialNarrowItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/ArialNarrowBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ArialNarrowBoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-arial-narrow',
  display: 'swap',
});

export const daVinci = localFont({
  src: [
    {
      path: '../../public/fonts/TRJNDaVinci-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TRJNDaVinci-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TRJNDaVinci-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/TRJNDaVinci-Italic.woff',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-da-vinci',
  display: 'swap',
});
