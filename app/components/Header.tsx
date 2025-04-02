'use client';

import { usePathname, useRouter } from '@/utils/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function Header() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;
  const links = [
    {
      name: t('WhatIUse'),
      url: '#what-i-use'
    },
    {
      name: t('Projects'),
      url: '#projects'
    },
    {
      name: t('Contact'),
      url: '#contact'
    }
  ];
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-center md:justify-between px-8 py-4 backdrop-blur">
      <div>
        <span role="link" className="cursor-pointer text-2xl font-bold max-md:hidden" onClick={() => {
          scroll(0, 0);
        }}>
          Yuuto
          <span className="text-base text-gray-500">.dev</span>
        </span>
        <select onChange={(e) => {
          router.push(pathname, { locale: e.target.value });
        }} className="ml-4 cursor-pointer bg-none border-none" defaultValue={locale}>
          <option value="en">🇺🇸</option>
          <option value="fr">🇫🇷</option>
        </select>
      </div>
      <nav>
        <ul className="flex gap-6">
          {links.map(link => (
            <li key={link.url}>
              <a href={link.url} className="text-gray-100 duration-150 hover:text-gray-400">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
