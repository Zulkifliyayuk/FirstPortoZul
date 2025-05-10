import React from 'react';

import { Section } from '@/components/layout/section';
import { CarierJourneyComp, Cariers } from '@/components/ui/carierJourneyComp';

import { carierJourneyData } from '@/app/constants/carierJourneyData';

const CarierJourney = () => {
  return (
    <Section
      title='Career Journey'
      subtitle='A visual timeline of key milestones and experiences from over the years.'
    >
      <Cariers>
        {carierJourneyData.map((item, index) => (
          <CarierJourneyComp index={index} key={index} {...item} />
        ))}
      </Cariers>
    </Section>
  );
};

export default CarierJourney;
