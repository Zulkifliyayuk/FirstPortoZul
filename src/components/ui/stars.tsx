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
  { topMd: 554, leftMd: 1145, top: 581, left: 152 },
  { topMd: 487, leftMd: 1314, top: 563, left: 264 },
  { topMd: 566, leftMd: 1390, top: 567, left: 342 },
  { topMd: 374, leftMd: 1362, top: 262, left: 346 },
  { topMd: 269, leftMd: 1310, top: 372, left: 346 },
];
const baseStarsContactStatic = [{ topMd: 501, leftMd: 731 }];

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
            top: adjustClamp(star.top, star.topMd, 1442),
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
            top: star.topMd,
            left: star.leftMd,
            width: adjustClamp(4, 7.25, 1442),
            height: adjustClamp(4, 7.25, 1442),
          }}
        />
      ))}
    </>
  );
};
