'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { adjustClamp } from '@/components/layout/functions';

import { socialMediaData } from '@/app/constants/social-media-data';

export const Footers = () => {
  return (
    <div
      className='relative z-120 mx-auto my-0 bg-neutral-500'
      style={{
        width: adjustClamp(360, 1442, 1442),
      }}
    >
      <div
        className='mx-auto py-10 md:py-6.5'
        style={{
          width: adjustClamp(320, 1160, 1442),
        }}
      >
        <div className='flex-between flex-wrap-reverse gap-x-20 gap-y-6'>
          <div
            className='inline-flex items-center gap-4'
            style={{
              width: adjustClamp(129, 144, 1442),
            }}
          >
            <Image src='/images/logoVector.png' alt='' width={40} height={40} />
            <span className='md:text-md font-regular text-sm leading-6 text-neutral-200 md:leading-7.5'>
              © alex2024
            </span>
          </div>
          <div
            className='inline-flex gap-4'
            style={{
              width: adjustClamp(152, 176, 1442),
            }}
          >
            {socialMediaData.map((socialData) => (
              <Link
                key={socialData.alt}
                href={socialData.href}
                className='flex-center h-10 w-10 rounded-full border border-neutral-400 md:h-12 md:w-12'
              >
                <Image
                  src={socialData.src}
                  alt={socialData.alt}
                  className='md:h-7.2 md:w-7.2 h-6 w-6'
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
