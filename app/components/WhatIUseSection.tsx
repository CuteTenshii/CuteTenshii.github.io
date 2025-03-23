'use client';

import {
  SiArchlinux, SiArchlinuxHex,
  SiBun,
  SiCloudflare,
  SiCloudflareHex,
  SiDocker,
  SiDockerHex,
  SiGithub,
  SiInsomnia, SiInsomniaHex, SiMacos,
  SiNextdotjs,
  SiReact,
  SiReactHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiWebstorm
} from '@icons-pack/react-simple-icons';
import Chips from '@/app/components/Chips';
import { useState } from 'react';

export default function WhatIUseSection() {
  const items = [
    {
      name: 'WebStorm', icon: <SiWebstorm color="#fbfe51" />, link: 'https://www.jetbrains.com/webstorm/',
      use: 'IDE for JavaScript development', category: 'Development'
    },
    {
      name: 'React', icon: <SiReact color={SiReactHex} />, link: 'https://react.dev/',
      use: 'Frontend library', category: 'Development'
    },
    {
      name: 'Tailwind CSS', icon: <SiTailwindcss color={SiTailwindcssHex} />, link: 'https://tailwindcss.com/',
      use: 'Utility-first CSS framework', category: 'Development'
    },
    {
      name: 'GitHub', icon: <SiGithub color="#fff" />, link: 'https://github.com/',
      use: 'Version control', category: 'Development'
    },
    {
      name: 'Cloudflare', icon: <SiCloudflare color={SiCloudflareHex} />, link: 'https://www.cloudflare.com/',
      use: 'CDN, DDoS protection, DNS, etc.', category: 'Tools'
    },
    {
      name: 'Docker', icon: <SiDocker color={SiDockerHex} />, link: 'https://www.docker.com/',
      use: 'Containerization', category: 'Tools'
    },
    {
      name: 'Next.js', icon: <SiNextdotjs color="#fff" />, link: 'https://nextjs.org/',
      use: 'React framework for SSR and SSG', category: 'Development'
    },
    {
      name: 'Bun', icon: <SiBun color="#fff" />, link: 'https://bun.sh/',
      use: 'Fast JavaScript bundler, runtime and package manager', category: 'Development'
    },
    {
      name: 'Insomnia', icon: <SiInsomnia color={SiInsomniaHex} />, link: 'https://insomnia.rest/',
      use: 'API client', category: 'Tools'
    },
    {
      name: 'Arch Linux', icon: <SiArchlinux color={SiArchlinuxHex} />, link: 'https://archlinux.org',
      use: 'A Linux distribution. Main OS.', category: 'Operating Systems'
    },
    {
      name: 'macOS Ventura', icon: <SiMacos color="#fff" />, link: 'https://apps.apple.com/us/app/macos-ventura/id1638787999',
      use: 'Apple\'s OS. I use it on my hackintosh', category: 'Operating Systems'
    }
  ];
  const [filteredItems, setFilteredItems] = useState(items);

  return (
    <section id="what-i-use" className="relative flex min-h-screen flex-col items-center justify-center pt-20 mx-3 text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">What do I use?</h1>
        <p>
          Here are some of the software and tools I use on a daily basis.
        </p>
      </div>
      <Chips items={['Development', 'Operating Systems', 'Tools']} onChange={(selected) => {
        const newItems = items.filter(item => selected.includes(item.category));
        if (!selected.length) return setFilteredItems(items);
        setFilteredItems(newItems);
      }} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {filteredItems.map((item, index) => (
          <div key={index} className="flex text-left items-center gap-4 p-4 bg-gray-800 rounded-lg w-full md:max-w-96">
            <div className="size-6">{item.icon}</div>
            <div>
              <a href={item.link} target="_blank" rel="noreferrer" className="font-bold">{item.name}</a>
              <p>{item.use}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
