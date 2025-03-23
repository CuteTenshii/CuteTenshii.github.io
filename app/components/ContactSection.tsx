import {
  SiDiscord,
} from '@icons-pack/react-simple-icons';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="flex h-screen flex-col items-center justify-center gap-8 px-6">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p>
          Do you want to contact me? Here are some ways to do so.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-4 text-center text-xl font-bold">
            <SiDiscord className="size-8" />
            <h2>Discord</h2>
          </div>
          <Link
            href="https://discord.com/users/269415459735076864" target="_blank"
            className="p-3 rounded-lg bg-gray-800 text-white"
          >
            @its.yuuto
          </Link>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-4 text-center text-xl font-bold">
            <Mail className="size-8" />
            <h2>Mail</h2>
          </div>
          <Link href="mailto:notyuuto@outlook.com" className="p-3 rounded-lg bg-gray-800 text-white">
            notyuuto@outlook.com
          </Link>
        </div>
      </div>
    </section>
  );
}
