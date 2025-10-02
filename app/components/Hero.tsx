import Image from 'next/image';
import pfp from '@/app/img/pfp.jpg';
import React from 'react';

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center text-center gap-4 h-[80vh] px-8 max-md:flex-col lg:flex-col">
      <Image
        src={pfp} alt="Avatar" className="mx-auto mb-8 size-48 rounded-full" draggable={false}
        width={192} height={192}
      />
      <div className="flex flex-col items-center gap-4 max-w-2xl">
        <h1 className="text-4xl font-bold">Hi! I&apos;m Tenshii :)</h1>
        <div className="space-y-1.5">
          <p>A 18 yo developer from France 🇫🇷</p>
          <p>Scroll down to see my projects ^~^</p>
        </div>
        <p className="text-lg">
          I build{' '}
          <a href="https://miwa.lol" target="_blank" className="space-x-2">
            <Image
              src="https://miwa.lol/images/miwa-48.png" alt="Miwa.lol logo" className="inline size-6 rounded-full mr-2"
              draggable={false} width={24} height={24}
            />
            <span>Miwa.lol</span>
          </a>, a modern and customizable biolinks website, and is a good alternative to Linktree and others!
          <span className="mt-2 text-sm text-gray-400">Trusted by more than 1,200 users, and still growing!</span>
        </p>
      </div>
    </div>
  );
}