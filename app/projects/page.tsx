import { Metadata } from 'next';
import Image from 'next/image';
import pfp from '@/app/img/pfp.webp';

export default function Page() {
  const projects = [
    {
      name: 'Miwa.lol',
      description: 'A modern and customizable biolinks website, already used by more than 1,600 users!',
      link: 'https://miwa.lol',
      image: 'https://miwa.lol/images/miwa-256.png',
      builtWith: <>Next.js, Tailwind, Go (API), PostgreSQL... <a href="https://help.miwa.lol/misc/open-source/#website" target="_blank">more details</a></>,
    },
    {
      name: 'Tenshii.moe',
      description: 'My personal website, you are currently on it!',
      link: 'https://tenshii.moe',
      image: pfp.src,
      builtWith: 'Next.js, TypeScript, Tailwind',
    },
    {
      name: 'Deezer Discord RPC',
      description: 'A Discord RPC for Deezer',
      link: 'https://github.com/CuteTenshii/deezer-discord-rpc',
      image: 'https://raw.githubusercontent.com/CuteTenshii/deezer-discord-rpc/refs/heads/master/.github/screenshots/rpc.png',
      builtWith: 'Electron, TypeScript',
    },
    {
      name: 'guns.lol solver',
      description: 'Reverse engineering of the PoW used to record views on guns.lol profile pages. In the README you can read a detailed explanation of how the PoW works.',
      link: 'https://github.com/CuteTenshii/guns-solver',
      image: null,
      builtWith: 'Go',
    },
    {
      name: 'Crunchyroll Downloader',
      description: 'A Go program to download episodes from Crunchyroll. Merges video and audio segments (and optionally subtitles) into a MKV container.',
      link: 'https://github.com/CuteTenshii/crunchyroll-downloader',
      image: null,
      builtWith: 'Go, gowidevine',
    },
    {
      name: 'dotfiles',
      description: 'My dotfiles for Arch Linux, with Hyprland, zsh, kitty... It also includes some scripts I made for my VPS',
      link: 'https://github.com/CuteTenshii/dotfiles',
      image: 'https://raw.githubusercontent.com/CuteTenshii/dotfiles/master/desktop.png',
      builtWith: 'config files',
    },
    {
      name: 'Paradise Bay server',
      description: 'Reverse-engineering of the custom protocol of the 2015 "Paradise Bay" game ',
      link: 'https://github.com/CuteTenshii/paradise-bay-server',
      image: null,
      builtWith: 'Go',
    },
    {
      name: 'favicon',
      description: 'A Cloudflare Worker that serve a website\'s favicon from a given website URL',
      link: 'https://github.com/CuteTenshii/favicon',
      image: null,
      builtWith: 'TypeScript, Cloudflare Workers',
    },
    {
      name: 'Pixel World',
      description: 'A collaborative pixel art board on the earth\'s map, similar to Wplace but not vibecoded',
      link: 'https://pixelworld.place',
      image: 'https://pixelworld.place/assets/icons/icon-256.png',
      builtWith: 'React (front), Go (backend + WS), PostgreSQL...',
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-16" id="projects">
      <h2 className="text-3xl font-bold text-center mb-5">Projects</h2>
      <p className="text-center mb-8">
        A few projects I&apos;ve worked on. You can see more on my{' '}
        <a href="https://github.com/CuteTenshii" target="_blank" rel="noopener">GitHub</a>.
      </p>

      <div>
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => {
            return (
              <div
                key={project.name}
                className="border relative border-gray-600 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 flex gap-2 has-[img]:flex-row-reverse justify-between backdrop-blur-lg"
              >
                {project.image && (
                  <a href={project.link} target="_blank" rel="noopener" className="block shrink-0">
                    <Image
                      src={project.image} alt={`${project.name} Logo`} draggable={false} width={112} height={112}
                      className="w-auto h-full max-lg:w-full object-cover lg:h-28 mx-auto max-lg:absolute max-lg:inset-0 z-0 max-lg:opacity-40 rounded-lg"
                    />
                  </a>
                )}
                <div className="z-10">
                  <h3 className="text-xl font-semibold mb-2">
                    <a href={project.link} target="_blank" rel="noopener">{project.name}</a>
                  </h3>

                  <p className="text-gray-300">{project.description}</p>
                  {project.builtWith && (
                    <p className="text-gray-400 text-sm mt-2">Built with: {project.builtWith}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A few projects I&apos;ve worked on. You can see more on my GitHub: https://github.com/CuteTenshii',
};