import pfp from '../img/pfp.jpg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function MainSection() {
  const t = useTranslations();

  return (
    <section id="main">
      <div className="relative flex h-screen flex-col items-center justify-center text-center">
        <div className="max-w-lg space-y-4">
          <Image
            src={pfp} alt="Avatar" className="mx-auto mb-8 size-48 rounded-full" draggable={false}
            width={192} height={192} quality={100}
          />
          <h1 className="text-4xl font-bold">{t('Hi')} Yuuto</h1>
          <p>
            {t('Description')}
          </p>
        </div>
        <div className="absolute bottom-24">
          <span className="text-sm text-gray-500">
            {t('ScrollDown')}
          </span>
        </div>
      </div>
    </section>
  );
}
