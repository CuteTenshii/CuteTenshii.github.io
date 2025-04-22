import pfp from '../img/pfp.jpg';
import Image from 'next/image';
import { SiDiscord } from '@icons-pack/react-simple-icons';
import { Mail } from 'lucide-react';

export default function MainSection() {
  return (
    <section id="main">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="relative flex h-screen lg:h-screen flex-col items-center justify-center text-center gap-4">
          <Image
            src={pfp} alt="Avatar" className="mx-auto mb-8 size-48 rounded-full" draggable={false}
            width={192} height={192} quality={100}
          />
          <h1 className="text-4xl font-bold">Hi! I&apos;m Yuuto</h1>
          <p>
            A 17 yo developer from France.
          </p>
        </div>
        <div className="relative flex min-h-screen flex-col items-start justify-center px-4 mb-5">
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
              I&apos;m working mostly on web development (React, Next.js, etc.), APIs (Express, Gin, etc.).<br/>
              Since the last weeks, I&apos;ve been learning Go and the Gin framework.<br/>
            </p>
          </div>
          <div className="w-full h-1 from-gray-800 to-transparent bg-gradient-to-r my-4"></div>
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold">What am I working on?</h2>
            <p className="mt-4 leading-7">
              I am currently working on a few projects, including a Discord bot and a web app.<br/>
              I am also learning Go and the Gin framework.
            </p>
          </div>
          <div className="w-full h-1 from-gray-800 to-transparent bg-gradient-to-r my-4"></div>
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold">Where can you find me?</h2>
            <div className="mt-4 leading-7">
              You want to contact me? You can reach me on Discord or by email:
              <div className="flex items-center gap-4 mt-2">
                <a className="flex items-center gap-2" href="https://discord.com/users/269415459735076864" target="_blank" rel="noopener noreferrer">
                  <SiDiscord className="size-6" />
                  @its.yuuto
                </a>
                <a className="flex items-center gap-2" href="mailto:yuuto@yuuto.dev">
                  <Mail className="size-6" />
                  yuuto@yuuto.dev
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center text-md text-gray-500">
        Scroll down to know more about me!
      </div>
    </section>
  );
}
