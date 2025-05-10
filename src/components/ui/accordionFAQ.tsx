'use client';

import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';

import ButtonPower from './buttonPower';

type AccordionFAQProps = {
  title: string;
  description: string;
  id: string;
};

const AccordionFAQ: React.FC<AccordionFAQProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className={isOpen ? 'bg-gradient rounded-2xl p-0.25' : ''}>
      <ButtonPower onClick={toggleAccordion} asChild className=''>
        <div className='mx-auto my-0 flex w-full flex-col rounded-2xl bg-neutral-500 p-4 md:p-6'>
          <div className='flex-between cursor-pointer'>
            <div className='text-md mr-12 leading-7.5 font-semibold text-neutral-100 md:text-xl'>
              {title}
            </div>
            <Image
              src='/icons/Vector-down.png'
              alt='arrow-down'
              width={13.33}
              height={10}
              className={`h-full w-auto object-contain ${isOpen ? 'hidden' : 'block'} `}
            />
            <Image
              src='/icons/Vector-up.png'
              alt='arrow-up'
              width={13.33}
              height={10}
              className={`h-full w-auto object-contain ${isOpen ? 'block' : 'hidden'} `}
            />
          </div>
          <div
            ref={contentRef}
            style={{ height, transition: 'height 0.4s ease' }}
            className='overflow-hidden'
          >
            <div className='md:text-md font-regular mt-3 mr-12 leading-6 text-neutral-200 md:mt-4 md:leading-7.5'>
              {description}
            </div>
          </div>
        </div>
      </ButtonPower>
    </div>
  );
};
export default AccordionFAQ;
