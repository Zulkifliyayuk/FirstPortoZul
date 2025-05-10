'use client';
import { motion } from 'framer-motion';
import React from 'react';

import { PeopleSayCard } from '@/components/ui/peopleSayCard';

import { peopleSayData } from '@/app/constants/peopleSayData';

export const PeopleSayTop = () => {
  const duplicatedData = [...peopleSayData, ...peopleSayData];
  return (
    <div>
      {/* marquee-top */}
      <div className='group relative flex h-53.75 w-full overflow-hidden md:h-60.75'>
        <motion.div
          layoutId='box1'
          className='animate-marqueeMinus flex flex-row gap-4 group-hover:[animation-play-state:paused] md:gap-5'
          initial={{ x: '0%' }}
          animate={{ x: ['0%', '-50%', '0%', '-50%'] }}
          transition={{
            duration: 50,
            times: [0, 1, 1, 2],
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {duplicatedData.map((DataSay, index) => (
            <PeopleSayCard
              key={`${DataSay.name}-${index}`}
              name={DataSay.name}
              job={DataSay.job}
              comment={DataSay.comment}
              linkImage={DataSay.linkImage}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
