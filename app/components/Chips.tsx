'use client';

import { useState } from 'react';

export default function Chips({ items, onChange }: ChipsProps) {
  // The labels of the selected chips
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <button
          key={index}
          aria-label={item}
          aria-current={selected.includes(item)}
          className="p-2 rounded-lg text-white cursor-pointer bg-gray-800 aria-[current=true]:bg-gray-700"
          onClick={() => {
            if (selected.includes(item)) {
              setSelected(selected.filter(i => i !== item));
              onChange?.(selected.filter(i => i !== item));
            } else {
              setSelected([...selected, item]);
              onChange?.([...selected, item]);
            }
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

interface ChipsProps {
  items: string[];
  onChange?: (selected: string[]) => void;
}
