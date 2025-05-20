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
      className={cn('relative mx-auto my-0 overflow-hidden', 'scroll-mt-10')}
      style={{
        width: adjustClamp(360, 1442, 1442),
      }}
    >
      {/* STARS */}
      <StarsContactForm />

      {/* box-background */}
      <div className='absolute right-0 bottom-0 z-0 translate-x-[70px] translate-y-[65px] md:translate-x-[40px] md:translate-y-[65px]'>
        <BoxBackgroundContactForm width={75} height={75} />
      </div>

      {/* Cloud */}
      <div
        className='absolute z-1 rounded-full bg-[#8243EA]/40 [filter:blur(159px)] md:[filter:blur(425px)]'
        style={{
          width: adjustClamp(471, 866, 1442),
          height: adjustClamp(471, 864, 1442),
          top: adjustClamp(283, 149, 1442),
          left: adjustClamp(199, 748, 1442),
        }}
      ></div>

      <div className='absolute top-[172px] right-[180px] z-1 rounded-full bg-[#8243EA]/40 [filter:blur(159px)] max-md:block max-md:h-[196] max-md:w-[196px] md:hidden'></div>

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
