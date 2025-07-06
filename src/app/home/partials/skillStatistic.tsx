'use client';
import React from 'react';

import { useInView } from '@/components/hooks/useInView';
import { adjustClamp } from '@/components/layout/functions';
import { Section } from '@/components/layout/section';
import { BackCircle } from '@/components/ui/backCircle';

import { SkillData } from '@/app/constants/skillData';
import { cn } from '@/lib/utils';

const SkillStatistics = () => {
  const { ref, isInView } = useInView();
  return (
    <div
      id='Skills'
      className={cn('relative mx-auto my-0', 'scroll-mt-10')}
      style={{
        width: adjustClamp(360, 1442, 1442),
      }}
    >
      {/* Cloud */}
      <div
        className='absolute z-110 rounded-full bg-[#8144DF]/60 [filter:blur(156.29px)] md:[filter:blur(425.21px)]'
        style={{
          width: adjustClamp(254, 517, 1442),
          height: adjustClamp(254, 517, 1442),
          right: adjustClamp(244, 1070, 1442),
          bottom: adjustClamp(660, 382, 1442),
        }}
      ></div>

      <Section
        title='My Core Skill'
        subtitle='An overview of the key technologies and frameworks I specialize in'
      >
        <div className='flex w-full flex-wrap items-center justify-center gap-x-26 gap-y-6'>
          {/* left column */}
          <div className='flex-[5.1] basis-80'>
            <BackCircle />
          </div>

          {/* right column */}
          <div className='flex-[4.9] basis-80'>
            <div className='flex w-full flex-col gap-5'>
              {SkillData.map((data) => (
                <div key={data.name}>
                  <div className='flex-between'>
                    <p className='md:text-md text-sm leading-6 font-semibold text-neutral-100 md:leading-7.5'>
                      {data.name}
                    </p>
                    <p className='md:text-md text-sm leading-6 font-semibold text-neutral-100 md:leading-7.5'>
                      {data.rate}
                    </p>
                  </div>
                  <div className='mt-3 h-3 w-full rounded-full bg-neutral-400'>
                    <div ref={ref}>
                      <div
                        className='bg-gradient h-3 rounded-full transition-all duration-[2500ms]'
                        style={{ width: isInView ? data.rate : '0%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SkillStatistics;
