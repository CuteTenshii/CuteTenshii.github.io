import type { Metadata } from 'next';
import './globals.css';
import PlausibleProvider from 'next-plausible';
import { JetBrains_Mono } from 'next/font/google';
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import pfp from '@/app/img/pfp.webp';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export default async function Layout({ children }: { children: React.ReactNode, }) {
  return (
    <html lang="en" dir="ltr" className={`${jetBrainsMono.className} antialiased`}>
      <body>
        <PlausibleProvider domain="tenshii.moe" scriptProps={{
          src: 'https://analytics.tenshii.moe/js/script.outbound-links.js',
          // @ts-ignore
          'data-api': 'https://analytics.tenshii.moe/api/record',
        }}>
          <Header />
          {children}
          <Footer />
        </PlausibleProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL('https://tenshii.moe'),
  title: {
    template: '%s - Tenshii.moe',
    default: 'Tenshii.moe',
  },
  openGraph: {
    type: 'website',
    images: [pfp.src],
  },
  twitter: {
    card: 'summary',
    creator: '@CuteTenshii',
    site: '@CuteTenshii',
    images: [pfp.src],
  },
};