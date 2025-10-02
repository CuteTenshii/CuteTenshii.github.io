import React from 'react';
import Image from 'next/image';

export default function Setup() {
  return (
    <div className="container mx-auto px-4 py-8 pt-28" id="setup">
      <h2 className="text-3xl font-bold text-center mb-8">Setup</h2>
      <div className="max-w-7xl mx-auto grid gap-8">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 relative">
          <Image
            src="https://raw.githubusercontent.com/CuteTenshii/dotfiles/refs/heads/master/desktop.png" draggable={false}
            alt="Desktop Setup" width={800} height={450}
            className="absolute inset-0 rounded-lg mb-4 size-full object-cover z-0 opacity-20 object-top"
          />
          <div className="z-10 relative">
            <h3 className="text-2xl font-semibold mb-4">Development Environment</h3>
            <p className="mb-4">I use a PC with the following specifications:</p>
            <ul className="list-disc list-inside mb-4">
              <li><span className="font-bold">OS:</span> Arch Linux with Hyprland</li>
              <li><span className="font-bold">CPU:</span> AMD Ryzen 7 2700 Eight-Core Processor @ 3.20 GHz</li>
              <li><span className="font-bold">RAM:</span> 32 GB</li>
              <li><span className="font-semibold">GPU:</span> NVIDIA GeForce RTX 3060 Ti</li>
              <li>
                <span className="font-bold">Storage:</span>
                <ul className="list-disc list-inside ml-6">
                  <li>PNY CS900 960GB</li>
                  <li>Samsung SSD 870 QVO 1TB</li>
                </ul>
              </li>
            </ul>
            <p>I also have a secondary laptop:</p>
            <ul className="list-disc list-inside mt-4">
              <li><span className="font-bold">Model:</span> HP EliteBook 840 G3</li>
              <li><span className="font-bold">OS:</span> macOS Sequoia</li>
              <li><span className="font-bold">CPU:</span> Dual-Core Intel Core i5 @ 2.50 GHz</li>
              <li><span className="font-bold">RAM:</span> 16 GB</li>
              <li><span className="font-bold">Storage:</span> Samsung MZNLN256HAJQ 256GB</li>
            </ul>
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
    </div>
  );
}