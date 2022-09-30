import {DefaultSeoProps} from 'next-seo';

export const GA_TRACKING_ID = 'UA-149277070-2';

export const DESCRIPTION = 'The Burning Crusade Classic Rogue Community';

export const FREQ = 1400;

export const SEO: DefaultSeoProps = {
  defaultTitle: 'Silent Shadows',
  titleTemplate: '%s | Silent Shadows',
  description: DESCRIPTION,
  canonical: 'https://www.silentshadows.net/',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    site_name: 'Silent Shadows',
    url: 'https://www.silentshadows.net/',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: 'favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'mask-icon',
      href: '/favicon/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
  ],
  additionalMetaTags: [
    {
      name: 'msapplication-TileColor',
      content: '#da532c',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
};
