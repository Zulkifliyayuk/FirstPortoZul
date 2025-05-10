import React from 'react';

type ImpactStatisticProps = {
  rate: string;
  name: string;
  background: boolean;
};

const CircleValue: React.FC<ImpactStatisticProps> = ({
  name,
  rate,
  background,
}) => {
  return (
    <div className='size-37 rounded-full bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.25 md:size-68.25'>
      <div
        className={`flex size-full flex-col items-center justify-center gap-1.5 rounded-full md:gap-2 ${
          background ? '' : 'bg-neutral-500'
        }`}
      >
        <h3 className='text-display-sm md:text-display-2xl font-extrabold text-neutral-100'>
          {rate}
        </h3>
        <p className='md:text-md font-regular text-center text-sm text-neutral-100'>
          {name}
        </p>
      </div>
    </div>
  );
};

export default CircleValue;
