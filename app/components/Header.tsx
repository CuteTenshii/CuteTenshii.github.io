'use client';

import Link from 'next/link';
import pfp from '@/app/img/pfp.jpg';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg text-white py-3 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4 text-white hover:text-white" shallow>
          <Image
            src={pfp.src} alt="Avatar" className="size-10 rounded-full" draggable={false} width={40} height={40}
          />
          <h1 className="text-2xl font-bold max-md:hidden">Tenshii.moe</h1>
        </Link>
        <nav className="flex items-center">
          <button className="md:hidden mr-2" onClick={() => setOpenMenu(!openMenu)} aria-label="Toggle menu">
            {openMenu ? <X /> : <Menu />}
          </button>
          <ul
            className="hidden md:flex space-x-5 data-[open=true]:flex data-[open=true]:flex-col max-md:space-y-3 max-md:absolute max-md:bg-gray-900 p-4 md:p-0 max-md:rounded-lg max-md:top-16 max-md:right-4 max-md:shadow-md transition-all duration-300 ease-in-out"
            data-open={openMenu} aria-label="Main navigation"
          >
            <li>
              <Link href="#projects" shallow onClick={() => setOpenMenu(false)}>Projects</Link>
            </li>
            <li>
              <Link href="#stats" shallow onClick={() => setOpenMenu(false)}>Programming Stats</Link>
            </li>
            <li>
              <Link href="#setup" shallow onClick={() => setOpenMenu(false)}>Setup</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}