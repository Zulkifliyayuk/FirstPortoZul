'use client';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { useInView } from '@/components/hooks/useInView';
import {
  adjustClamp,
  adjustFlexLeft,
  adjustFlexRight,
} from '@/components/layout/functions';
import CircleValue from '@/components/ui/circleValue';

import { impactStatisticData } from '@/app/constants/impactStatisticData';
import { cn } from '@/lib/utils';

const ImpactStatistics = () => {
  const { ref, isInView } = useInView();

  const container = {
    hidden: { opacity: 0.1, transform: 'translateX(-30px)' },
    show: {
      opacity: 1,
      transform: 'translateX(0px)',
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
        type: 'spring',
        duration: 5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0.1, transform: 'translateX(-30px)' },
    show: { opacity: 1, transform: 'translateX(0px)' },
  };

  return (
    <section className='custom-container z-30 -mt-[71px] py-10 md:-mt-[159px] md:py-20'>
      <div className='flex-center'>
        <div
          className='bg-gradient flex-center relative z-80 cursor-pointer rounded-xl md:rounded-4xl'
          style={{
            width: adjustClamp(459, 1160, 1208),
            height: adjustClamp(126, 320, 1208),
          }}
        >
          <Image
            src='/images/photo.png'
            alt='photo'
            width={400}
            height={400}
            className='h-full w-auto object-contain'
            style={{ touchAction: 'auto' }}
          />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Icon icon='fa:play-circle' className='size-5 md:size-17' />
          </div>
        </div>
      </div>
      <div className='mt-10 flex flex-wrap gap-3 md:mt-20'>
        <h3
          className='md:text-display-2xl text-display-sm leading-9.5 font-extrabold text-neutral-100 md:leading-15'
          style={adjustFlexLeft(460, 700, 320)}
        >
          Who am I?
        </h3>
        <p
          className='font-regular md:text-md text-sm leading-6 text-neutral-200 md:leading-7.5'
          style={adjustFlexRight(460, 700, 320)}
        >
          Hi, I’m Alex, a Front-End Developer & Web Programming Instructor based
          in Jakarta. With over{' '}
          <span className='md:text-md text-sm leading-6 font-bold text-neutral-100 md:leading-7.5'>
            3 years of experience
          </span>
          , I specialize in crafting interactive, responsive, and user-friendly
          websites that deliver exceptional digital experiences. My expertise
          spans across various industries, including e-commerce, education, and
          SaaS. I am proficient in modern front-end technologies, clean coding
          practices, and performance optimization.
        </p>
      </div>
      <div ref={ref}>
        <motion.div
          className={cn(
            'flex-center mt-10 flex flex-row flex-wrap gap-3 md:mt-20 md:gap-5',
            ''
          )}
          variants={container}
          initial='hidden'
          animate={isInView ? 'show' : 'hidden'}
        >
          {impactStatisticData.map((data, index) => (
            <motion.div variants={item} key={data.name}>
              <CircleValue
                name={data.name}
                rate={data.rate}
                background={index % 2 === 1}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStatistics;
