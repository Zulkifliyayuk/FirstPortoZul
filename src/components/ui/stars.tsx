'use client';

import React, { useEffect, useState } from 'react';

const baseStars = [
  { top: 15, left: 10 },
  { top: 55, left: 15 },
  { top: 95, left: 25 },
  { top: 25, left: 60 },
  { top: 40, left: 75 },
  { top: 65, left: 88 },
  { top: 85, left: 92 },
  { top: 8, left: 12 },
  { top: 5, left: 28 },
  { top: 18, left: 10 },
  { top: 20, left: 20 },
  { top: 14, left: 32 },
  { top: 38, left: 44 },
  { top: 46, left: 52 },
  { top: 33, left: 63 },
  { top: 43, left: 35 },
  { top: 50, left: 50 },
  { top: 90, left: 78 },
  { top: 93, left: 68 },
  { top: 74, left: 90 },
  { top: 83, left: 93 },
  { top: 97, left: 76 },
  { top: 79, left: 96 },
  { top: 81, left: 86 },
  { top: 68, left: 98 },
  { top: 75, left: 80 },
  { top: 72, left: 82 },
  { top: 67, left: 84 },
  { top: 62, left: 87 },
  { top: 55, left: 83 },
  { top: 40, left: 95 },
];

export const Stars = () => {
  const [stars, setStars] = useState<
    { id: number; top: number; left: number }[]
  >([]);

  useEffect(() => {
    const randomizedStars = baseStars.map((star, index) => {
      const topVariation = (Math.random() - 0.5) * 4;
      const leftVariation = (Math.random() - 0.5) * 4;
      return {
        id: index,
        top: Math.min(98, Math.max(2, star.top + topVariation)),
        left: Math.min(98, Math.max(2, star.left + leftVariation)),
      };
    });
    setStars(randomizedStars);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className='absolute size-1 rounded-full bg-neutral-300/40 md:size-[7.2px]'
          style={{ top: `${star.top}%`, left: `${star.left}%` }}
        />
      ))}
    </>
  );
};
