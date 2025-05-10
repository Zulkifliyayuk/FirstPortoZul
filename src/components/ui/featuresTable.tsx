import { Icon } from '@iconify/react';
import React from 'react';

import { featuresData } from '@/app/constants/featuresData';

export const FeaturesTable = () => {
  return (
    <div className='mt-8 min-w-[320px] rounded-3xl bg-neutral-500 px-2.5 py-6 md:mt-12 md:px-6'>
      <div className='grid min-w-[300px] grid-cols-[minmax(187px,370.67px)_minmax(56.5px,370.67px)_minmax(56.5px,370.67px)]'>
        {/* <!-- First row --> */}
        <div className='bg-gradient col-span-3 rounded-full'>
          <div className='grid w-full grid-cols-[minmax(187px,370.67px)_minmax(56.5px,370.67px)_minmax(56.5px,370.67px)] grid-rows-1 text-sm font-semibold text-neutral-100 md:text-base md:font-bold'>
            <div className='flex-center py-3 md:py-3.25'>
              <p>Skill</p>
            </div>
            <div className='flex-center py-3 md:py-3.25'>
              <p>Me</p>
            </div>
            <div className='flex-center py-3 md:py-3.25'>
              <p>Others</p>
            </div>
          </div>
        </div>
        {/* another row */}
        {featuresData.map((Data, index) => {
          const isLast = index === featuresData.length - 1;

          const borderClass = isLast ? '' : 'border-b border-neutral-400';

          return (
            <React.Fragment key={Data.name}>
              <div
                key={Data.name}
                className={`flex-center ${borderClass} md:text-md py-6 text-center text-sm leading-6 font-semibold text-neutral-100 md:py-5.25 md:leading-7.5`}
              >
                <p>{Data.name}</p>
              </div>
              <div className={`flex-center ${borderClass} py-6 md:py-5.25`}>
                <div className='bg-gradient flex-center size-5 rounded-full md:size-7'>
                  <Icon icon='stash:check-solid' width='20' height='20' />
                </div>
              </div>
              <div className={`flex-center ${borderClass} py-6 md:py-5.25`}>
                <div className='flex-center size-5 rounded-full bg-neutral-300 md:size-7'>
                  <Icon icon='charm:cross' width='16' height='16' />
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
