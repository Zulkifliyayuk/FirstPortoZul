'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { adjustClamp } from '@/components/layout/functions';
import { BoxBackground } from '@/components/ui/boxBackground';
import { BoxBorder } from '@/components/ui/boxBorder';
import Button from '@/components/ui/button';
import { Stars } from '@/components/ui/stars';

import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <div
      className={cn(
        'relative mx-auto my-0 flex w-full flex-col items-center pt-26 md:pt-55.5',
        'scroll-mt-10'
      )}
      style={{
        width: adjustClamp(360, 1442, 1442),
      }}
      id='Home'
    >
      {/* STARS - with more spacing */}
      <Stars />

      {/* Cloud */}
      <div
        className='absolute top-[40.32%] left-[35.3%] z-50 rounded-full bg-[#8243EA66] [filter:blur(325.21px)] md:top-[35.4%] md:left-[67.7%]'
        style={{
          width: adjustClamp(407, 692, 1442),
          height: adjustClamp(407, 692, 1442),
        }}
      ></div>

      {/* box-background */}
      <div className='absolute right-0 bottom-0 z-0'>
        <BoxBackground widht={145} height={145} />
      </div>

      {/* Content */}
      <div className='flex-center relative z-10 mx-5 my-0 max-w-239 flex-wrap'>
        <div className='min-w-33.5 rounded-full bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.25 leading-7.5 shadow-[0px_4px_24px_0px_#8746EB52]'>
          <div className='md:text-md fond-medium rounded-full bg-neutral-500 px-4 py-2 text-xs leading-4 text-neutral-100 md:px-6 md:leading-7.5'>
            👨 Alex’s Portfolio
          </div>
        </div>

        {/* sm show case */}
        <h1 className='text-display-xl md:text-display-3xl tracking--2 mt-5 flex max-w-239 flex-wrap items-center justify-center gap-y-4 text-center leading-12 font-bold text-neutral-100 sm:hidden md:mt-6 md:hidden md:leading-18 md:font-extrabold md:tracking-normal'>
          <span className='mr-4'>I</span>
          <span className='mr-4'>am</span>
          <span className='mr-2'>a</span>

          {['Front-', 'End Developer'].map((word, index) => (
            <span
              key={index}
              className='bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.5'
            >
              <div className='relative bg-neutral-600 pt-2 pb-2'>
                <BoxBorder />
                <span className='block bg-gradient-to-r from-[#DC49A6] to-[#8746EB] bg-clip-text px-2 py-1 text-transparent'>
                  {word}
                </span>
              </div>
            </span>
          ))}

          <span className='mr-4 ml-2'>&</span>
          <span className='mr-4'>Web</span>
          <span>Programming Instructor</span>
        </h1>

        {/* sm-md show case */}
        <h1 className='text-display-xl md:text-display-3xl tracking--2 mt-5 hidden max-w-239 flex-wrap items-center justify-center gap-y-4 text-center leading-12 font-bold text-neutral-100 sm:flex md:mt-6 md:hidden md:leading-18 md:font-extrabold md:tracking-normal'>
          <span className='mr-4'>I</span>
          <span className='mr-4'>am</span>
          <span className='mr-2'>a</span>

          {['Front-End Developer'].map((word, index) => (
            <span
              key={index}
              className='bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.5'
            >
              <div className='relative bg-neutral-600 pt-2 pb-2'>
                <BoxBorder />
                <span className='block bg-gradient-to-r from-[#DC49A6] to-[#8746EB] bg-clip-text px-2 py-1 text-transparent'>
                  {word}
                </span>
              </div>
            </span>
          ))}

          <span className='mr-4 ml-2'>&</span>
          <span className='mr-4'>Web</span>
          <span>Programming Instructor</span>
        </h1>

        {/* md show case */}
        <h1 className='text-display-xl md:text-display-3xl tracking--2 mt-5 hidden max-w-239 flex-wrap items-center justify-center gap-y-4 text-center leading-12 font-bold text-neutral-100 md:mt-6 md:flex md:leading-18 md:font-extrabold md:tracking-normal'>
          <span className='mr-4'>I</span>
          <span className='mr-4'>am</span>
          <span className='mr-2'>a</span>

          <span className='flex bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.5'>
            {['Front-End Developer'].map((word, index) => (
              <div key={index} className='relative bg-neutral-600 pt-2 pb-2'>
                <BoxBorder />
                {/* word */}
                <span className='block bg-gradient-to-r from-[#DC49A6] to-[#8746EB] bg-clip-text px-2 py-1 text-transparent'>
                  {word}
                </span>
              </div>
            ))}
          </span>

          <span className='mr-4 ml-2'>&</span>
          <span className='mr-4'>Web</span>
          <span>Programming Instructor</span>
        </h1>

        <h3 className='md:text-md font-regular mt-5 max-w-239 text-center text-sm leading-6 text-neutral-200 md:mt-6 md:leading-7.5'>
          Hi, I’m Alex, a passionate web developer with over{' '}
          <span className='md:text-md text-sm leading-6 font-bold text-neutral-100 md:leading-7.5 md:font-semibold'>
            3 years of experience
          </span>{' '}
          in creating responsive websites. I also teach aspiring developers to
          master modern web programming and bring their ideas to life.
        </h3>
      </div>
      <div className='relative'>
        <div className='px-5'>
          <Button
            asChild
            size='default'
            className='absolute left-1/2 z-100 mt-5 w-80 -translate-x-1/2 md:mt-6 md:w-51.5'
          >
            <Link
              href='#Projects'
              className='text-md relative flex w-full items-center leading-7.5 font-medium text-neutral-100'
            >
              View Portfolio
            </Link>
          </Button>
        </div>
        <Image
          src='/images/Waves.png'
          alt='waves'
          width={1442.6}
          height={380.7}
          className='relative top-[0] z-70 mt-13 items-center justify-center object-cover md:mt-0'
          style={{
            objectFit: 'cover',
            width: adjustClamp(427.72, 1442.6, 1442.6),
            height: adjustClamp(100.33, 380.7, 1442.6),
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
