'use client';

import { useEffect, useRef, useState } from 'react';
import { MousePointer2, Pointer, TextCursor } from 'lucide-react';

export default function CircleCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [type, setType] = useState('default');
  useEffect(() => {
    addEventListener('mousemove', (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    addEventListener('visibilitychange', () => {
      if (!cursorRef.current) return;
      if (document.visibilityState === 'hidden') {
        cursorRef.current.style.opacity = '0';
      } else {
        cursorRef.current.style.opacity = '1';
      }
    });

    addEventListener('mouseout', () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.opacity = '0';
    });

    addEventListener('mouseover', (e) => {
      if (!cursorRef.current) return;
      if (cursorRef.current.style.opacity === '0')
        cursorRef.current.style.opacity = '1';

      const tag = (e.target as HTMLElement).tagName.toLowerCase();
      const isClickable = !!(e.target as HTMLElement).onclick;
      if (tag === 'a' || tag === 'button' || isClickable) {
        setType('link');
      } else if (['input', 'textarea', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',].includes(tag)) {
        setType('text');
      } else {
        setType('default');
      }
    });
  }, []);

  return (
    <div
      className="size-5 rounded-full fixed top-0 left-0 pointer-events-none opacity-0 duration-100 z-[500] transition-transform ease-in-out"
      ref={cursorRef}
    >
      {type === 'default' && <MousePointer2 fill="#fff" />}
      {type === 'link' && <Pointer />}
      {type === 'text' && <TextCursor />}
    </div>
  );
}