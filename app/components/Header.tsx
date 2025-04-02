'use client';

import { Link } from '@/utils/i18n/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function Header() {
  const t = useTranslations();
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 grid grid-cols-3 max-md:grid-cols-1 gap-2 items-center justify-center md:justify-between px-8 py-4 backdrop-blur">
      <div role="link" className="cursor-pointer text-2xl font-bold max-md:text-center" onClick={() => scroll(0, 0)}>
        Yuuto
        <span className="text-base text-gray-500">.dev</span>
      </div>
      <nav className="mx-auto">
        <ul className="flex gap-3">
          {links.map((link, i) => <React.Fragment key={link.url}>
            <li>
              <a href={link.url} className="text-gray-100 duration-150 hover:text-gray-400">
                {link.name}
              </a>
            </li>
            {links.length - 1 !== i && <span className="text-gray-400">&bull;</span>}
          </React.Fragment>)}
        </ul>
      </nav>
      <div className="flex items-center justify-end gap-3 text-lg max-md:hidden">
        <Link href="/" locale="en" title="English">🇺🇸</Link>
        <span className="text-gray-400">&bull;</span>
        <Link href="/" locale="fr" title="Français">🇺🇫🇷🇷</Link>
      </div>
    </header>
  );
}
