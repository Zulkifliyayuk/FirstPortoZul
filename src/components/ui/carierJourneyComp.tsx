'use client';

import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

import { useInView } from '../hooks/useInView';

type detail = {
  detail: string;
};

type CarierJourneyDataProps = {
  index: number;
  job: string;
  time: string;
  place: string;
  details: detail[];
};

type CarierJourneyElement = React.ReactElement<CarierJourneyDataProps>;

type CarierJourneyElementProps = {
  children: CarierJourneyElement | CarierJourneyElement[];
};

export const Cariers: React.FC<CarierJourneyElementProps> = ({ children }) => {
  return (
    <div className='relative grid grid-cols-[1.75rem_auto] gap-x-2 md:grid-cols-[3rem_auto] md:gap-x-6'>
      <div className='absolute inset-y-0 left-[0.875rem] w-1 -translate-x-1/2 md:left-[1.5rem] md:w-1.25'>
        {/* panjang garis = auto terhenti dengan last child line-decoration */}
        <div className='h-full w-full rounded-full bg-gradient-to-b from-[#DC49A6] to-[#8746EB]' />
      </div>
      {/* Elemen anak */}
      {React.Children.map(children, (child, idx) =>
        React.cloneElement(child, { index: idx + 1 })
      )}
    </div>
  );
};

export const CarierJourneyComp: React.FC<CarierJourneyDataProps> = ({
  index,
  job,
  place,
  time,
  details,
}) => {
  const { ref, isInView } = useInView();

  return (
    <>
      {/* left column */}
      <div
        className={cn(
          'group relative mb-0 last:mb-0 md:mb-0 [&:nth-last-child(2)]:mb-0',
          //target child
          '[&:nth-last-child(2)>.line-decoration]:scale-y-100'
        )}
      >
        {/* line decoration */}
        <div
          className={cn(
            'line-decoration absolute top-0 bottom-0 left-1/2 w-1.5 origin-bottom -translate-x-1/2 rounded-full bg-neutral-600 transition-all duration-[2500ms] md:w-2.5',

            isInView ? 'scale-y-0' : 'scale-y-100'
          )}
        />

        {/* index circle */}
        <span className='bg-primary-100 absolute inset-x-0 left-1/2 aspect-square size-5 -translate-x-1/2 rounded-full p-1.25 shadow-[0px_4px_24px_0px_#8746EB52] md:size-6 md:p-1.5'>
          <div className='bg-gradient flex size-full rounded-full' />
        </span>
      </div>

      {/* right column */}
      <div ref={ref}>
        <CardJourney
          index={index}
          job={job}
          time={time}
          place={place}
          details={details}
        />
      </div>
    </>
  );
};

export const CardJourney: React.FC<CarierJourneyDataProps> = ({
  index,
  details,
  job,
  place,
  time,
}) => {
  return (
    <div
      className='mb-4 rounded-4xl bg-neutral-500 p-3 md:mb-6 md:p-6'
      id={index.toString()}
    >
      <h3 className='text-md md:text-display-xs leading-7.5 font-bold text-neutral-100 md:leading-9'>
        {job}
      </h3>
      <div className='md:text-md font-regular mt-3 flex flex-wrap items-center gap-3 text-sm leading-6 text-neutral-100 md:mt-5 md:gap-1.5 md:leading-7.5'>
        <div className='flex gap-1.5'>
          <Image
            src='/icons/company.png'
            alt='sms'
            width={24}
            height={24}
            className='size-5 md:size-6'
          />
          {place}
        </div>
        <span className='px-1.5 max-md:hidden'>
          <div className='min-h-1 min-w-1 rounded-full bg-neutral-100'></div>
        </span>
        <div className='flex gap-1.5'>
          <Image
            src='/icons/calendar.png'
            alt='sms'
            width={24}
            height={24}
            className='size-5 md:size-6'
          />
          {time}
        </div>
      </div>
      {details.map((detail, index) => (
        <div
          key={index}
          className='md:text-md font-regular mt-3 flex items-center gap-2 text-sm leading-6 text-neutral-200 md:mt-5 md:leading-7.5'
        >
          <div className='min-h-1 min-w-1 rounded-full bg-neutral-200'></div>
          {detail.detail}
        </div>
      ))}
    </div>
  );
};
