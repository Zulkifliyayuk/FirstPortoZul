'use client';
import { motion } from 'framer-motion';
import React from 'react';

import { PeopleSayCard } from '@/components/ui/peopleSayCard';

import { peopleSayData } from '@/app/constants/peopleSayData';

export const PeopleSayBottom = () => {
  const duplicatedData = [...peopleSayData, ...peopleSayData];
  return (
    <div>
      {/* marque-bottom */}
      <div className='group relative mt-3 flex h-53.75 w-full overflow-hidden md:mt-5 md:h-60.75'>
        <motion.div
          layoutId='box2'
          className='animate-marqueePlus flex flex-row gap-4 group-hover:[animation-play-state:paused] md:gap-5'
          initial={{ x: '-50%' }}
          animate={{ x: ['-50%', '0%', '-50%', '0%'] }}
          transition={{
            // duration: 1,
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
