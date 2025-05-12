'use client';

import React from 'react';

import { adjustClamp } from '@/components/layout/functions';
import { BoxBackground } from '@/components/ui/boxBackground';
import { ContactForm } from '@/components/ui/contactForm';
import { Stars } from '@/components/ui/stars';

import { cn } from '@/lib/utils';

const FormContact = () => {
  return (
    <div
      id='Contact'
      className={cn('relative mx-auto my-0', 'scroll-mt-10')}
      style={{
        width: adjustClamp(360, 1442, 1442),
      }}
    >
      {/* STARS - spaced out */}
      <Stars />

      {/* box-background */}
      <div className='absolute right-0 bottom-0 z-0 translate-x-[40px] translate-y-[65px]'>
        <BoxBackground widht={73} height={73} />
      </div>

      {/* Cloud */}
      <div
        className='absolute -right-1/5 -bottom-[80px] z-1 rounded-full bg-[#8243EA66] [filter:blur(250px)] md:-bottom-[80px]'
        style={{
          width: adjustClamp(471, 766, 1442),
          height: adjustClamp(471, 766, 1442),
        }}
      ></div>

      <div className='mx-auto py-10 md:py-20'>
        <div className='flex-center md:flex-between flex-wrap gap-x-55.75 gap-y-6'>
          <div
            style={{
              width: adjustClamp(320, 457, 1208),
            }}
          >
            <h2 className='text-display-sm md:text-display-2xl leading-9.5 font-extrabold text-neutral-100 md:leading-15'>
              Contact Me
            </h2>
            <p className='md:text-md font-regular mt-3 text-sm leading-6 text-neutral-200 md:leading-7.5'>
              Feel free to drop a message for any inquiries or collaborations.
            </p>
          </div>
          <div
            className={cn(
              'z-130 rounded-4xl border border-[#262626]/40 bg-[#262626]/40 backdrop-blur-[40px]',
              ''
            )}
            style={{
              width: adjustClamp(320, 480, 1208),
            }}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
