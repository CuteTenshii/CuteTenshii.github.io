import Image from 'next/image';
import pfp from '@/app/img/pfp.webp';
import React from 'react';

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center text-center gap-4 h-[80vh] px-4 max-md:flex-col lg:flex-col">
      <Image
        src={pfp} alt="Avatar" className="mx-auto mb-3 size-38 md:size-48 rounded-full" draggable={false} width={192} height={192}
      />

      <div className="flex flex-col items-center max-w-2xl">
        <h1 className="text-4xl mb-5 font-bold">Hi! I&apos;m Tenshii :)</h1>
        <p className="mb-0.5">A 18 yo developer from France 🇫🇷</p>
        <p className="mb-5">Scroll down to know more about me ^~^</p>

        <p>
          I&apos;m building{' '}
          <a href="https://miwa.lol" target="_blank" className="space-x-2">
            <Image
              src="https://miwa.lol/images/miwa-48.png" alt="Miwa.lol logo" className="inline size-6 mr-2"
              draggable={false} width={24} height={24}
            />
            <span>Miwa.lol</span>
          </a>, a modern and customizable link-in-bio website, which is a good alternative to Linktree and others!
        </p>
        <span className="text-sm mt-0.5 md:mt-1.5 text-gray-400">Trusted by more than 1,7k users, and still growing!</span>
      </div>
    </div>
  );
}