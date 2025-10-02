import Image from 'next/image';
import pfp from '@/app/img/pfp.jpg';

export default function Projects() {
  const projects = [
    {
      name: 'Miwa.lol',
      description: 'A modern and customizable biolinks website, already used by more than 1,200 users!',
      link: 'https://miwa.lol',
      image: 'https://miwa.lol/images/miwa-256.png',
      builtWith: <>Next.js, Tailwind CSS, PostgreSQL, ... <a href="https://help.miwa.lol/misc/open-source/#website">more details</a></>,
    },
    {
      name: 'Tenshii.moe',
      description: 'My personal website, you are currently on it!',
      link: 'https://tenshii.moe',
      image: pfp.src,
      builtWith: 'Next.js, TypeScript, Tailwind CSS',
    },
    {
      name: 'Deezer Discord RPC',
      description: 'A Discord RPC for Deezer',
      link: 'https://github.com/CuteTenshii/deezer-discord-rpc',
      image: 'https://github.com/CuteTenshii/deezer-discord-rpc/raw/master/screenshots/rpc.png',
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
      name: 'Spotify Downloader',
      description: 'A Python script to download music straight from Spotify servers',
      link: 'https://github.com/CuteTenshii/spotify-downloader',
      image: null,
      builtWith: 'Python, pywidevine, ffmpeg',
    },
    {
      name: 'dotfiles',
      description: 'My dotfiles for Arch Linux, with Hyprland, zsh, kitty...',
      link: 'https://github.com/CuteTenshii/dotfiles',
      image: 'https://github.com/CuteTenshii/dotfiles/raw/master/desktop.png',
      builtWith: 'config files',
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-28" id="projects">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div>
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => {
            return (
              <div
                key={project.name}
                className="block border border-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
              >
                {project.image && (
                  <a href={project.link} target="_blank" rel="noopener">
                    <Image
                      src={project.image} alt={`${project.name} Logo`} draggable={false} width={64} height={64}
                      className="h-28 w-auto mb-4 mx-auto float-right"
                    />
                  </a>
                )}
                <h3 className="text-xl font-semibold mb-2">
                  <a href={project.link} target="_blank" rel="noopener">
                    {project.name}
                  </a>
                </h3>
                <p className="text-gray-400">{project.description}</p>
                {project.builtWith && (
                  <p className="text-gray-500 text-sm mt-2">
                    Built with: {project.builtWith}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}