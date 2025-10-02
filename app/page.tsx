import { Metadata } from 'next';
import pfp from './img/pfp.webp';
import Projects from '@/app/components/Projects';
import React from 'react';
import Header from '@/app/components/Header';
import WakapiStats from '@/app/components/WakapiStats';
import Setup from '@/app/components/Setup';
import Footer from '@/app/components/Footer';
import Hero from '@/app/components/Hero';

export default function Page() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Projects/>
      <WakapiStats />
      <Setup />
      <Footer />
    </React.Fragment>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Tenshii.moe';
  const description = 'Tenshii\'s personal website, a 18 years old developer from France.\nI code things, and sometimes it\'s useful :3';

  return {
    metadataBase: new URL('https://tenshii.moe'),
    title,
    description,
    icons: {
      icon: pfp.src,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      images: [pfp.src],
    },
    twitter: {
      creator: '@CuteTenshii',
      site: '@CuteTenshii',
      card: 'summary',
      title,
      description,
      images: [pfp.src],
    },
  };
}
