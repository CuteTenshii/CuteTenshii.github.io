import { Metadata } from 'next';
import pfp from './img/pfp.jpg';
import Image from 'next/image';
import { SiDiscord, SiDiscordHex } from '@icons-pack/react-simple-icons';
import { Mail } from 'lucide-react';

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="relative flex h-screen lg:h-screen flex-col items-center justify-center text-center gap-4">
          <Image
            src={pfp} alt="Avatar" className="mx-auto mb-8 size-48 rounded-full" draggable={false}
            width={192} height={192} quality={100}
          />
          <h1 className="text-4xl font-bold">Hi! I&apos;m Tenshii</h1>
          <span className="text-lg text-gray-500">formerly known as Yuuto</span>
          <p>A 18 yo developer from France.</p>
        </div>
        <div className="relative flex min-h-screen flex-col items-start justify-center px-4 max-lg:pb-15">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold">Who am I?</h2>
            <p className="mt-4 leading-7">
              I am a self-taught developer with a passion for programming.<br/>
              I started coding at the age of 11, and have been learning ever since.
            </p>
          </div>
          <div className="w-full h-1 from-gray-800 to-transparent bg-gradient-to-r my-4"></div>
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold">What do I do?</h2>
            <p className="mt-4 leading-7">
              I&apos;m working mostly on web development (React, Next.js…), APIs (Express, Gin…).<br/>
              Since the last weeks, I&apos;ve been learning Go and the Gin framework.<br/>
            </p>
          </div>
          <div className="w-full h-1 from-gray-800 to-transparent bg-gradient-to-r my-4"></div>
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold">What am I working on?</h2>
            <p className="mt-4 leading-7">
              I&apos;m currently working on <a href="https://miwa.lol/?utm_source=tenshii.moe" className="font-semibold">Miwa.lol</a>{' '}
              <Image
                src="https://miwa.lol/_next/static/media/miwa-48.346d071b.png" width={48} height={48} className="w-6 h-7 pb-1 inline"
                alt="Miwa.lol Logo" draggable={false}
              />, a very customizable biolinks website.<br/>
              I recommend you to check it out :)
            </p>
          </div>
          <div className="w-full h-1 from-gray-800 to-transparent bg-gradient-to-r my-4"></div>
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold">Where can you find me?</h2>
            <div className="mt-4 leading-7">
              You want to contact me? You can reach me on Discord or by email:
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <a className="flex items-center gap-2 text-white no-underline" href="https://discord.com/users/269415459735076864" target="_blank" rel="noopener noreferrer">
                  <SiDiscord className="size-6" color={SiDiscordHex} />
                  @cutetenshii
                </a>
                <a className="flex items-center gap-2 text-white no-underline" href="mailto:tenshii@tenshii.moe">
                  <Mail className="size-6" />
                  tenshii@tenshii.moe
                </a>
                <a className="flex items-center gap-2 text-white no-underline" href="https://miwa.lol/tenshii" target="_blank">
                  <Image
                    src="https://miwa.lol/_next/static/media/miwa-48.346d071b.png" width={48} height={48} className="size-6"
                    alt="Miwa.lol Logo" draggable={false}
                  />
                  miwa.lol/tenshii
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center text-md text-gray-500 lg:hidden">
        Scroll down to know more about me!
      </div>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Tenshii.moe';
  const description = 'Tenshii\'s personal website, a 17 years old developer from France.\nI code things and sometimes it\'s good';

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
