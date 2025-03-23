import pfp from '../img/pfp.jpg';
import Image from 'next/image';

export default function MainSection() {
  return (
    <section id="main">
      <div className="relative flex h-screen flex-col items-center justify-center text-center">
        <div className="max-w-lg space-y-4">
          <Image
            src={pfp} alt="Avatar" className="mx-auto mb-8 size-48 rounded-full" draggable={false}
            width={192} height={192} quality={100}
          />
          <h1 className="text-4xl font-bold">Hi! I&apos;m Yuuto</h1>
          <p>
            I&apos;m a 17 yo developer from France.
          </p>
        </div>
        <div className="absolute bottom-24">
          <span className="text-sm text-gray-500">
            Scroll down to see my projects
          </span>
        </div>
      </div>
    </section>
  );
}
