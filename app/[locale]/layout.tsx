import '../globals.css';
import { Fira_Code } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/utils/i18n/routing';

const firaCode = Fira_Code({ subsets: ['latin'] });

export default async function RootLayout({ children, params }: {
  children: React.ReactNode,
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return notFound();

  return (
    <html lang={locale} dir="ltr" className={`${firaCode.className} antialiased`}>
      <body>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
