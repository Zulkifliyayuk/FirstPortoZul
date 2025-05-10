import React from 'react';

import { Section } from '@/components/layout/section';
import { FeaturesTable } from '@/components/ui/featuresTable';

const Features = () => {
  return (
    <Section
      title='Why I Stand Out'
      subtitle='A showcase of my unique approach and skill set compared to conventional front-end developers'
    >
      <div>
        <FeaturesTable />
      </div>
    </Section>
  );
};

export default Features;
