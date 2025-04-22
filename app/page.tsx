import { Metadata } from 'next';
import pfp from './img/pfp.jpg';
import MainSection from './components/MainSection';
import CircleCursor from '@/app/components/CircleCursor';

export default function Page() {
  return (
    <>
      <CircleCursor />
      <MainSection />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Yuuto.dev';
  const description = 'Yuuto\'s personal website, a 17 years old developer from France.\nI code things and sometimes it\'s good';

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
  };
}
