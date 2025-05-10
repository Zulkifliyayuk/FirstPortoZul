'use client';

import React from 'react';

import { Section } from '@/components/layout/section';
import AccordionFAQ from '@/components/ui/accordionFAQ';

import { FAQData } from '@/app/constants/faqData';

const FrequentlyAsk = () => {
  return (
    <Section
      title='Frequently Asked Question'
      subtitle='Find answers to some of the frequently asked questions below.'
      id='FAQ'
    >
      <div className='mt-8 flex flex-col gap-4 md:mt-12 md:gap-5'>
        {FAQData.map((dataFAQ, index) => (
          <AccordionFAQ
            key={index}
            id={`accordion-${index}`}
            title={dataFAQ.title}
            description={dataFAQ.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default FrequentlyAsk;
