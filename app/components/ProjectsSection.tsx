import miwa from '../img/miwa.png';
import yuuto from '../img/yuuto.png';
import bkfrapi from '../img/bkfrapi.png';
import { Fragment } from 'react';
import Image from 'next/image';

type Technology = 'Next.js' | 'Tailwind' | 'Node.js' | 'TypeScript' | 'Electron' | 'React' |
  'Vercel' | 'Axios';

export default function ProjectsSection() {
  const projects: {
    name: string;
    description: string;
    image: string;
    url: string;
    madeWith: Technology[];
  }[] = [
    {
      name: 'Miwa.lol',
      description: 'Miwa.lol is a bio links website that allows you to create a modern and customizable page to share your social media links.',
      image: miwa.src,
      url: 'https://miwa.lol/?utm_source=yuuto.dev&utm_medium=projects',
      madeWith: ['Next.js', 'Tailwind']
    },
    {
      name: 'Deezer Discord RPC',
      description: 'Deezer Discord RPC is a Discord Rich Presence that displays the song you are listening to on Deezer.',
      image: 'https://raw.githubusercontent.com/JustYuuto/deezer-discord-rpc/master/screenshots/rpc.png',
      url: 'https://github.com/JustYuuto/deezer-discord-rpc',
      madeWith: ['Node.js', 'TypeScript', 'Electron']
    },
    {
      name: 'Yuuto.dev',
      description: 'My personal website, made with Vite, React and Tailwind.',
      image: yuuto.src,
      url: 'https://yuuto.dev',
      madeWith: ['Next.js', 'React', 'Tailwind', 'Vercel']
    },
    {
      name: 'Burger King FR API',
      description: 'A npm package for the French Burger King.',
      image: bkfrapi.src,
      url: 'https://www.npmjs.com/package/burger-king-fr-api',
      madeWith: ['Node.js', 'Axios']
    }
  ];
  const links: { [key in Technology]: string; } = {
    'Next.js': 'https://nextjs.org',
    'Tailwind': 'https://tailwindcss.com',
    'Node.js': 'https://nodejs.org',
    'TypeScript': 'https://www.typescriptlang.org',
    'Electron': 'https://www.electronjs.org',
    'React': 'https://react.dev',
    'Vercel': 'https://vercel.com',
    'Axios': 'https://axios-http.com',
  };

  return (
    <section id="projects">
      <div className="relative flex min-h-screen flex-col items-center justify-center pt-20 text-center">
        <div className="max-w-lg space-y-4">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p>Here&apos;s a list of some of the projects I&apos;ve worked on.</p>
        </div>
        <div className="mx-4 my-8 grid grid-cols-1 gap-8 xl:grid-cols-2">
          {projects.map(project => (
            <div
              key={project.url}
              className="relative flex w-full flex-col space-y-4 rounded-lg border p-4 text-left xl:w-[38rem] shadow-md bg-gray-900/.5"
            >
              <Image
                src={project.image} alt={project.name} className="mx-auto w-auto object-contain h-80"
                draggable={false} width={640} height={320}
              />
              <div className="flex items-center justify-between">
                <h2 className="truncate text-2xl font-bold" title={project.name}>{project.name}</h2>
                <a href={project.url} className="text-blue-500 duration-150 hover:text-blue-400" target="_blank">
                  View project
                </a>
              </div>
              <p>{project.description}</p>
              {project.madeWith && (
                <div className="flex space-x-2 text-sm text-gray-500">
                  <span>
                    Made with&nbsp;
                    {project.madeWith.map(tech => (
                      <Fragment key={tech}>
                        {links[tech] ? (
                          <a href={links[tech]} className="text-blue-500 duration-150 hover:text-blue-400" target="_blank">
                            {tech}
                          </a>
                        ) : tech}
                        {project.madeWith?.indexOf(tech) !== project.madeWith.length - 1 ? (
                          project.madeWith?.indexOf(tech) === project.madeWith.length - 2 ? ' & ' : ', '
                        ) : ''}
                      </Fragment>
                    ))}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
