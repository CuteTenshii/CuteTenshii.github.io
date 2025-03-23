import { Metadata } from 'next';
import pfp from '../img/pfp.jpg';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import WhatIUseSection from '../components/WhatIUseSection';
import { getLocale } from 'next-intl/server';

const title = 'Yuuto.dev';
const description = 'A 17 yo developer from France. I make stuff and sometimes I publish it on the internet';
export const metadata: Metadata = {
  metadataBase: new URL('https://yuuto.dev'),
  title,
  description,
  icons: {
    icon: pfp.src,
  },
  openGraph: {
    title,
    description,
    images: [pfp.src],
  },
  twitter: {
    creator: '@YuutoGoat',
    site: '@YuutoGoat',
    card: 'summary',
    title,
    description,
    images: [pfp.src],
  },
};

export default async function Page() {
  const locale = await getLocale();

  return (
    <>
      <Header locale={locale} />
      <MainSection />
      <WhatIUseSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
