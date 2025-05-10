import Image from 'next/image';
import React from 'react';

type PeopleSayCardProps = {
  name: string;
  job: string;
  comment: string;
  linkImage: string;
};

export const PeopleSayCard: React.FC<PeopleSayCardProps> = ({
  name,
  job,
  linkImage,
  comment,
}) => {
  return (
    <div className='w-75.5 rounded-2xl bg-neutral-500 p-0.25 hover:bg-gradient-to-r hover:from-[#DC49A6] hover:to-[#8746EB] md:w-125'>
      <div className='flex h-full w-full flex-col gap-3 rounded-2xl bg-neutral-500 px-4 py-3.75 md:gap-5 md:px-5 md:py-4.75'>
        <div className='flex flex-row gap-2 md:gap-4'>
          <div>
            <Image
              src={linkImage}
              alt='profilePhoto'
              width={48}
              height={48}
              className='size-12 rounded-full md:size-15'
            />
          </div>
          <div className='items-center'>
            <p className='md:text-md text-sm leading-6 font-bold text-neutral-100 md:leading-7.5'>
              {name}
            </p>
            <p className='font-regular md:text-md mt-[3px] text-sm leading-6 text-neutral-200 md:leading-7.5'>
              {job}
            </p>
          </div>
        </div>
        <div>
          <p className='font-regular md:text-md line-clamp-5 items-center text-sm leading-6 text-neutral-200 md:line-clamp-4 md:leading-7.5'>
            {comment}
          </p>
        </div>
      </div>
    </div>
  );
};
