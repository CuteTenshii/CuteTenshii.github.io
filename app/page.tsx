import { Metadata } from 'next';
import pfp from './img/pfp.webp';
import React from 'react';
import WakapiStats from '@/app/components/WakapiStats';
import Setup from '@/app/components/Setup';
import Hero from '@/app/components/Hero';

export default function Page() {
  return (
    <React.Fragment>
      <Hero />
      <WakapiStats />
      <Setup />
    </React.Fragment>
  );
}

const title = 'Tenshii.moe';
const description = 'Tenshii\'s personal website, a 18 years old developer from France.\nI code things, and sometimes it\'s useful :3';
export const metadata: Metadata = {
  title,
  description,
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
