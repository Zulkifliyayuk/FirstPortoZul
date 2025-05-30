'use client';

import React from 'react';

import { adjustClamp } from '@/components/layout/functions';
import { PeopleSayBottom } from '@/components/ui/peopleSayBottom';
import { PeopleSayTop } from '@/components/ui/peopleSayTop';

import { cn } from '@/lib/utils';

const PeopleSayMarque = () => {
  return (
    <div
      id='About'
      className={cn('relative mx-auto my-0', 'scroll-mt-10')}
      style={{
        width: adjustClamp(360, 1442, 1442),
      }}
    >
      {/* Cloud */}
      <div
        className='absolute -top-[17.5%] -left-[66.7%] z-110 rounded-full bg-[#8144DF99] [filter:blur(425.21px)] md:top-[3.2%] md:left-[74.2%]'
        style={{
          width: adjustClamp(240, 518, 1442),
          height: adjustClamp(239, 517, 1442),
        }}
      ></div>

      {/* section */}

      <div
        className='mx-auto pt-10 md:pt-20'
        style={{
          width: adjustClamp(320, 739, 1442),
        }}
      >
        {/* heading */}
        <div className='text-center'>
          <h2 className='text-display-sm md:text-display-2xl leading-9.5 font-extrabold text-neutral-100 md:leading-15'>
            What People Say About Me
          </h2>
          <p className='md:text-md font-regular mt-4 text-sm text-neutral-200'>
            Hear from clients and colleagues about their experiences working
            with me.
          </p>
        </div>
      </div>

      {/* content */}
      <div className='relative mt-8 mb-10 md:mt-12 md:mb-20'>
        <PeopleSayTop />
        <PeopleSayBottom />
        <div className='relative inset-y-0 left-0 w-[25%] bg-gradient-to-r from-neutral-600 to-transparent'></div>
        <div className='relative inset-y-0 right-0 w-[25%] bg-gradient-to-l from-neutral-600 to-transparent'></div>
      </div>
    </div>
  );
};

export default PeopleSayMarque;
