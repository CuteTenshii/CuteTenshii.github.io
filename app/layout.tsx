import './globals.css';
import PlausibleProvider from 'next-plausible';
import { JetBrains_Mono } from 'next/font/google';
import bg from '@/app/img/bg.jpg';
import React from 'react';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export default async function Layout({ children }: { children: React.ReactNode, }) {
  return (
    <html lang="en" dir="ltr" className={`${jetBrainsMono.className} antialiased`} style={{
      ['--background' as string]: `url(${bg.src})`,
    }}>
      <body>
        <PlausibleProvider domain="tenshii.moe" scriptProps={{
          src: 'https://analytics.tenshii.moe/js/script.outbound-links.js',
          // @ts-ignore
          'data-api': 'https://analytics.tenshii.moe/api/record',
        }}>
          {children}
        </PlausibleProvider>
      </body>
    </html>
  );
}