import {
  SiDiscord,
} from '@icons-pack/react-simple-icons';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations();

  return (
    <section id="contact" className="flex h-screen flex-col items-center justify-center gap-8 px-6">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold">{t('Contact')}</h1>
        <p>
          {t('ContactDescription')}
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
          <Link href="mailto:yuuto@yuuto.dev" className="p-3 rounded-lg bg-gray-800 text-white">
            yuuto@yuuto.dev
          </Link>
        </div>
      </div>
    </section>
  );
}
