'use client';

import { adjustClamp } from '../layout/functions';

const baseStarsHomeDinamic = [
  { topMd: 135, leftMd: 97, top: 80, left: 86 },
  { topMd: 344, leftMd: 190, top: 310, left: 27 },
  { topMd: 139, leftMd: 947, top: 100, left: 297 },
  { topMd: 218, leftMd: 1166, top: 227, left: 306 },
  { topMd: 376, leftMd: 1302, top: 308, left: 320 },
  { topMd: 525, leftMd: 1295, top: 468, left: 340 },
];
const baseStarsHomeStatic = [
  { topMd: 576, leftMd: 329 },
  { topMd: 707, leftMd: 99 },
  { topMd: 678, leftMd: 1083 },
];

const baseStarsContactDinamic = [
  { bottomMd: 38, leftMd: 1145, bottom: 8, left: 152 },
  { bottomMd: 105, leftMd: 1314, bottom: 26, left: 264 },
  { bottomMd: 26, leftMd: 1390, bottom: 22, left: 342 },
  { bottomMd: 218, leftMd: 1362, bottom: 155, left: 346 },
  { bottomMd: 323, leftMd: 1310, bottom: 217, left: 346 },
];
const baseStarsContactStatic = [{ bottomMd: 91, leftMd: 731 }];

export const Stars = () => {
  return (
    <>
      {baseStarsHomeDinamic.map((star, index) => (
        <div
          key={index}
          className='absolute rounded-full bg-neutral-300/40'
          style={{
            top: adjustClamp(star.top, star.topMd, 1442),
            left: adjustClamp(star.left, star.leftMd, 1442),
            width: adjustClamp(4, 7.5, 1442),
            height: adjustClamp(4, 7.5, 1442),
          }}
        />
      ))}

      {baseStarsHomeStatic.map((star, index) => (
        <div
          key={index}
          className='absolute hidden rounded-full bg-neutral-300/40 md:block'
          style={{
            top: star.topMd,
            left: star.leftMd,
            width: adjustClamp(4, 7.5, 1442),
            height: adjustClamp(4, 7.5, 1442),
          }}
        />
      ))}
    </>
  );
};

export const StarsContactForm = () => {
  return (
    <>
      {baseStarsContactDinamic.map((star, index) => (
        <div
          key={index}
          className='absolute rounded-full bg-neutral-300/40'
          style={{
            bottom: adjustClamp(star.bottom, star.bottomMd, 1442),
            left: adjustClamp(star.left, star.leftMd, 1442),
            width: adjustClamp(4, 7.25, 1442),
            height: adjustClamp(4, 7.25, 1442),
          }}
        />
      ))}

      {baseStarsContactStatic.map((star, index) => (
        <div
          key={index}
          className='absolute hidden rounded-full bg-neutral-300/40 md:block'
          style={{
            bottom: star.bottomMd,
            left: star.leftMd,
            width: adjustClamp(4, 7.25, 1442),
            height: adjustClamp(4, 7.25, 1442),
          }}
        />
      ))}
    </>
  );
};
