'use client';

import React from 'react';

import { SectionHorizontal } from '@/components/layout/section';
import { ExperienceCard } from '@/components/ui/experienceCard';

import { experienceData } from '@/app/constants/experienceData';

const Experiences = () => {
  return (
    <SectionHorizontal
      title='Experience in Front-End Development'
      subtitle=' I have experience developing 30+ web projects across various
          industries, including marketplaces, health, fashion, sports, and more.
          Implemented 1000+ responsive web pages with interactive features and
          smooth animations'
      left={620}
      right={513}
      id='Projects'
    >
      <div className='flex-center flex flex-wrap gap-x-8 gap-y-8 md:gap-x-6 md:gap-y-12'>
        {experienceData.map((dataExperience, index) => (
          <ExperienceCard
            key={index}
            imagePage={dataExperience.imagePage}
            descriptionPage={dataExperience.descriptionPage}
            url={dataExperience.url}
          />
        ))}
      </div>
    </SectionHorizontal>
  );
};

export default Experiences;
