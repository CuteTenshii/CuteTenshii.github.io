import '../globals.css';
import PlausibleProvider from 'next-plausible';
import { Fira_Code } from 'next/font/google';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/utils/i18n/routing';
import { notFound } from 'next/navigation';

const firaCode = Fira_Code({ subsets: ['latin'] });

export default async function Layout({ children, params }: {
  children: React.ReactNode,
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return notFound();

  return (
    <html lang={locale} dir="ltr" className={`${firaCode.className} antialiased`}>
      <body>
        <PlausibleProvider domain="yuuto.dev" customDomain="https://analytics.yuuto.dev" selfHosted trackOutboundLinks>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </PlausibleProvider>
      </body>
    </html>
  );
}