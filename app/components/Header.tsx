import Link from 'next/link';
import pfp from '@/app/img/pfp.jpg';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg text-white py-3 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src={pfp.src} alt="Avatar" className="size-10 rounded-full" draggable={false} width={40} height={40}
          />
          <h1 className="text-2xl font-bold max-md:hidden">Tenshii.moe</h1>
        </div>
        <nav>
          <ul className="flex space-x-5">
            <li>
              <Link href="/" shallow>Home</Link>
            </li>
            <li>
              <Link href="#projects" shallow>Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}