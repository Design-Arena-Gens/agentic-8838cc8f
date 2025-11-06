import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Goodluck Footwear ? Logo',
  description: 'Brand logo and downloads for Goodluck Footwear.',
  metadataBase: new URL('https://agentic-8838cc8f.vercel.app'),
  openGraph: {
    title: 'Goodluck Footwear ? Logo',
    description: 'Professional logo assets and previews',
    url: 'https://agentic-8838cc8f.vercel.app',
    siteName: 'Goodluck Footwear',
    images: [
      { url: '/logo-og.png', width: 1200, height: 630, alt: 'Goodluck Footwear Logo' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goodluck Footwear ? Logo',
    description: 'Professional logo assets and previews',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
