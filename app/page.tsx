import { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Tenshii.moe',
  description: 'Tenshii\'s personal website, a 18 years old developer from France.\nI code things, and sometimes it\'s useful :3',
};
