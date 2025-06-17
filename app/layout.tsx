import './globals.css';
import PlausibleProvider from 'next-plausible';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export default async function Layout({ children }: { children: React.ReactNode, }) {
  return (
    <html lang="en" dir="ltr" className={`${jetBrainsMono.className} antialiased`}>
      <body>
        <PlausibleProvider domain="tenshii.moe" customDomain="https://analytics.tenshii.moe" selfHosted trackOutboundLinks>
          {children}
        </PlausibleProvider>
      </body>
    </html>
  );
}