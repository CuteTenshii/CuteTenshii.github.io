import { Metadata } from 'next';
import pfp from '../img/pfp.jpg';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import WhatIUseSection from '../components/WhatIUseSection';
import { getMessages } from 'next-intl/server';
import CircleCursor from '@/app/components/CircleCursor';

export default function Page() {
  return (
    <>
      <CircleCursor />
      <Header />
      <MainSection />
      <WhatIUseSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const title = 'Yuuto.dev';
  const description = messages.OgDescription;

  return {
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
    alternates: {
      languages: {
        en: 'https://yuuto.dev/en',
        fr: 'https://yuuto.dev/fr',
      }
    }
  };
}
