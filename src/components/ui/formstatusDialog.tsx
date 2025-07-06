'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import Button from './button';
import { adjustClamp } from '../layout/functions';

type FormStatusDialog = {
  open: boolean;
  variant: 'success' | 'error';
  onOpenChange: (open: boolean) => void;
};
export const FormStatusDialog: React.FC<FormStatusDialog> = ({
  open,
  onOpenChange,
  variant,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !open) return null;

  return createPortal(
    <div className='flex-center fixed top-0 left-0 z-300 h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.8)]'>
      <div className='relative overflow-hidden'>
        {/* Cloud */}
        <div
          className='absolute top-1/2 left-1/2 z-110 -translate-x-1/2 -translate-y-9/10 rounded-full bg-[#8243EA66] [filter:blur(55.21px)]'
          style={{
            width: adjustClamp(189, 258, 1442),
            height: adjustClamp(189, 258, 1442),
          }}
        ></div>

        <div
          className='flex-center flex-col gap-6 rounded-2xl border border-neutral-500 bg-neutral-500 px-6 py-8 md:px-8 md:py-10'
          style={{
            width: adjustClamp(328, 479, 1208),
          }}
        >
          {variant === 'success' ? (
            <Image
              src='/icons/successIcon.png'
              alt='iconSuccess'
              width={168.82}
              height={162}
            />
          ) : (
            <Image
              src='/icons/errorIcon.png'
              alt='iconSuccess'
              width={168.82}
              height={162}
            />
          )}
          <div>
            {variant === 'success' ? (
              <>
                <p className='text-center text-lg leading-8 font-semibold text-neutral-100 md:text-xl md:leading-8.5'>
                  Message Sent Successfully!
                </p>
                <p className='md:text-md font-regular mt-2 text-center text-sm leading-6 text-neutral-200 md:leading-7.5'>
                  Thank you for reaching out. I’ll get back to you as soon as
                  possible
                </p>
              </>
            ) : (
              <>
                <p className='text-center text-lg leading-8 font-semibold text-neutral-100 md:text-xl md:leading-8.5'>
                  Message failed to send.
                </p>
                <p className='md:text-md font-regular mt-2 text-center text-sm leading-6 text-neutral-200 md:leading-7.5'>
                  An unexpected error occurred. Kindly try again in a few
                  moments.
                </p>
              </>
            )}
          </div>
          <Button
            onClick={() => onOpenChange(false)}
            size='default'
            className='w-full text-sm leading-6 font-medium'
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};
