'use client';

import React from 'react';

import { adjustClamp } from '@/components/layout/functions';
import { BoxBackgroundContactForm } from '@/components/ui/boxBackground';
import { ContactForm } from '@/components/ui/contactForm';
import { StarsContactForm } from '@/components/ui/stars';

import { cn } from '@/lib/utils';

const FormContact = () => {
  return (
    <div
      id='Contact'
      className={cn('relative', 'scroll-mt-10')}
      style={{
        width: adjustClamp(360, 1442, 1442),
      }}
    >
      {/* STARS */}
      <StarsContactForm />

      {/* box-background */}
      <div className='absolute right-0 bottom-0 z-0 translate-x-[115px] translate-y-[65px] md:translate-x-[51px] md:translate-y-[73px]'>
        <BoxBackgroundContactForm width={75} height={75} />
      </div>

      {/* Cloud */}
      <div className='relative'>
        <div
          className='absolute z-1 rounded-full bg-[#8243EA]/40 [filter:blur(159px)] md:[filter:blur(185px)]'
          style={{
            width: adjustClamp(421, 875, 1442),
            height: adjustClamp(421, 425, 1442),
            top: adjustClamp(283, 49, 1442),
            left: adjustClamp(199, 848, 1442),
          }}
        ></div>
      </div>

      <div className='absolute top-[172px] right-[180px] z-1 rounded-full bg-[#8243EA]/40 [filter:blur(159px)] max-md:block max-md:h-[196] max-md:w-[196px] md:hidden'></div>

      {/* content */}
      <div
        className='mx-auto my-0 pt-10 pb-10 md:pt-20 md:pb-25'
        style={{
          width: adjustClamp(320, 1160, 1440),
        }}
      >
        <div className='flex flex-wrap items-center justify-center gap-y-6 md:justify-between'>
          {/* left section */}
          <div
            style={{
              width: adjustClamp(320, 457, 1440),
            }}
          >
            <h2 className='text-display-sm md:text-display-2xl leading-9.5 font-extrabold text-neutral-100 md:leading-15'>
              Contact Me
            </h2>
            <p className='md:text-md font-regular mt-3 text-sm leading-6 text-neutral-200 md:leading-7.5'>
              Feel free to drop a message for any inquiries or collaborations.
            </p>
          </div>

          {/* right section */}
          <div
            className={cn(
              'z-130 rounded-4xl border border-[#262626]/40 bg-[#262626]/40 backdrop-blur-[40px]',
              ''
            )}
            style={{
              width: adjustClamp(320, 480, 1440),
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
