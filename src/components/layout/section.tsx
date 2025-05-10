import React from 'react';

import { adjustFlexLeft, adjustFlexRight } from '@/components/layout/functions';

type SectionProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  id?: string;
  left?: number;
  right?: number;
};

export const SectionHorizontal: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
  left = 604,
  right = 604,
}) => {
  return (
    <div className='custom-container py-10 md:py-20' id={id}>
      {/* heading */}
      <div className='flex flex-wrap gap-3 md:gap-6.75'>
        <div
          className='text-display-sm md:text-display-2xl leading-9.5 font-bold text-neutral-100 md:leading-15 md:font-extrabold'
          style={adjustFlexLeft(left, right, 320)}
        >
          {title}
        </div>
        <div
          className='md:text-md font-regular text-sm leading-6 text-neutral-200 md:text-right md:leading-7.5'
          style={adjustFlexRight(left, right, 320)}
        >
          {subtitle}
        </div>
      </div>

      {/* content */}
      <div className='flex-center mt-8 md:mt-12'>{children}</div>
    </div>
  );
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
}) => {
  return (
    <div className='custom-container py-10 md:py-20' id={id}>
      {/* heading */}
      <div className='text-center'>
        <h2 className='text-display-sm md:text-display-2xl font-extrabold text-neutral-100'>
          {title}
        </h2>
        <p className='md:text-md font-regular mt-4 text-sm text-neutral-200'>
          {subtitle}
        </p>
      </div>

      {/* content */}
      <div className='mt-8 md:mt-12'>{children}</div>
    </div>
  );
};
