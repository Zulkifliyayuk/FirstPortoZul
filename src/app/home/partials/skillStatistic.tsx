'use client';
import React from 'react';

import { useInView } from '@/components/hooks/useInView';
import {
  adjustClamp,
  adjustFlexLeft,
  adjustFlexRight,
} from '@/components/layout/functions';
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
        className='absolute z-110 rounded-full bg-[#8144DF]/60 [filter:blur(125.21px)] md:[filter:blur(285.21px)]'
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
        <div className='flex flex-wrap items-center gap-6 md:gap-26'>
          {/* left column */}
          <div style={adjustFlexLeft(587, 573, 320)}>
            <BackCircle />
          </div>

          {/* right column */}
          <div className='flex-end' style={adjustFlexRight(587, 573, 320)}>
            <div className='my-[45.5px] flex size-full flex-col gap-5'>
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
