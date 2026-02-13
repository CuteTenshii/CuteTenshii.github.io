import React from 'react';
import Image from 'next/image';
import { Cpu, Gpu, HardDrive, Laptop, MemoryStick } from 'lucide-react';

export default function Setup() {
  const specs = [
    {
      name: 'OS',
      icon: Laptop,
      value: 'Arch Linux with Hyprland',
    },
    {
      name: 'CPU',
      icon: Cpu,
      value: 'AMD Ryzen 7 2700 Eight-Core Processor @ 3.20 GHz',
    },
    {
      name: 'RAM',
      icon: MemoryStick,
      value: '32 GB',
    },
    {
      name: 'GPU',
      icon: Gpu,
      value: 'NVIDIA GeForce RTX 3060 Ti',
    },
    {
      name: 'Storage',
      icon: HardDrive,
      value: <>PNY CS900 960GB<br/>Samsung SSD 870 QVO 1TB<br/>Predator SSD GM7000 1TB</>,
    }
  ];

  return (
    <div className="container px-4 py-8 pt-28 max-w-7xl mx-auto grid gap-8" id="setup">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 relative">
        <Image
          src="https://raw.githubusercontent.com/CuteTenshii/dotfiles/refs/heads/master/desktop.png" draggable={false}
          alt="Desktop Setup" width={800} height={450}
          className="absolute inset-0 rounded-lg mb-4 size-full object-cover z-0 opacity-20 object-top blur-[1px]"
        />

        <div className="z-10 relative text-center">
          <h3 className="text-2xl font-semibold mb-4">PC Specs</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {specs.map(spec => {
              return (
                <div key={spec.name} className="flex py-4 px-2 flex-col justify-center items-center text-center">
                  <spec.icon size={32} />
                  <span className="pt-4 font-bold pb-1">{spec.name}</span>
                  <span>{spec.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-4">Software Stack</h3>
        <p className="mb-4">My development environment includes the following software:</p>
        <ul className="list-disc list-inside">
          <li><span className="font-bold">Code Editor:</span> depends on the project, but primarily WebStorm and GoLand</li>
          <li><span className="font-bold">Terminal:</span> kitty</li>
          <li><span className="font-bold">Shell:</span> Zsh with Oh My Zsh</li>
          <li><span className="font-bold">VCS:</span> Git + GitHub</li>
          <li><span className="font-bold">Web Browsing:</span> Firefox Nightly</li>
          <li><span className="font-bold">JS Runtime:</span> Bun <span className="text-xs text-gray-400">(faster and more efficient than Node.js)</span></li>
          <li><span className="font-bold">Database:</span> PostgreSQL <span className="text-xs text-gray-400">(SQLite when I don&apos;t want to bother with DB setup)</span></li>
          <li><span className="font-bold">API Testing:</span> Insomnia</li>
          <li><span className="font-bold">Communication:</span> Discord <span className="text-xs text-gray-400">(this is where I&apos;m most active)</span></li>
          <li><span className="font-bold">Music Streaming:</span> YouTube Music</li>
          <li><span className="font-bold">Password Management:</span> Bitwarden (self-hosted)</li>
          <li><span className="font-bold">Virtualization:</span> VMware Workstation Pro</li>
        </ul>
      </div>
    </div>
  );
}