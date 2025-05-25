import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ButtonPower from './buttonPower';
import { adjustClamp } from '../layout/functions';

type ExperienceCardProps = {
  imagePage: string;
  descriptionPage: string;
  url: string;
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  descriptionPage,
  imagePage,
  url,
}) => {
  return (
    <Link href={url}>
      <div
        className='group flex max-h-[616px] cursor-pointer flex-col rounded-2xl'
        style={{
          width: adjustClamp(320, 370, 1208),
        }}
      >
        <div className='relative max-h-[320px] overflow-hidden rounded-4xl md:max-h-[370px]'>
          <Image
            src={imagePage}
            alt={imagePage}
            width={320}
            height={320}
            style={{
              width: adjustClamp(320, 370, 1208),
              height: adjustClamp(320, 370, 1208),
              touchAction: 'auto',
            }}
            className='transform transition-transform duration-300 ease-in-out group-hover:scale-105'
          />

          {/* detail hover */}
          <div className='absolute top-[202px] left-[199px] hidden md:group-hover:block'>
            <div className='h-[100px] w-[100px] -rotate-[5.57deg] rounded-full bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.5'>
              <div className='md:text-md flex-center h-full w-full rounded-full bg-neutral-500 leading-7.5 text-neutral-100'>
                Detail
              </div>
            </div>
          </div>
        </div>

        <div className='mt-3 flex flex-col gap-2 md:mt-4 md:gap-3'>
          <h3 className='text-lg leading-8 font-bold text-neutral-100'>
            Landing Page
          </h3>
          <div className='[&>*]:font-regular flex-start flex gap-2 [&>*]:items-center [&>*]:justify-center [&>*]:rounded-full [&>*]:border [&>*]:border-neutral-300 [&>*]:px-4 [&>*]:py-1 [&>*]:text-sm [&>*]:leading-6 [&>*]:text-[#FFFFFF]'>
            <div>React</div>
            <div>HTML</div>
            <div>CSS</div>
          </div>
          <h4 className='font-regular md:text-md line-clamp-2 text-sm leading-6 text-neutral-200 md:leading-7.5'>
            {descriptionPage}
          </h4>
        </div>
        <ButtonPower asChild className='mt-3 md:mt-10'>
          <div className='inline-flex gap-1.5'>
            <span className='text-md flex items-center bg-gradient-to-r from-[#DC49A6] to-[#8746EB] bg-clip-text leading-7.5 font-bold text-transparent md:text-lg md:leading-8'>
              Visit
            </span>
            <span className='flex items-center'>
              <Image
                src='/icons/Arrow-up.svg'
                alt='Arrow'
                width={12}
                height={12}
              />
            </span>
          </div>
        </ButtonPower>
      </div>
    </Link>
  );
};
