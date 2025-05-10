import React from 'react';

export const BoxBorder = () => {
  return (
    <>
      {/* box top left */}
      <div className='absolute top-0 left-0 h-[10px] w-[19px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.25'>
        <div className='size-full bg-neutral-100'></div>
      </div>
      {/* box top right */}
      <div className='absolute top-0 right-0 h-[10px] w-[19px] translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.25'>
        <div className='size-full bg-neutral-100'></div>
      </div>

      {/* box bottom right */}
      <div className='absolute right-0 bottom-0 h-[10px] w-[19px] translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.25'>
        <div className='size-full bg-neutral-100'></div>
      </div>

      {/* box bottom left */}
      <div className='absolute bottom-0 left-0 h-[10px] w-[19px] -translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.25'>
        <div className='size-full bg-neutral-100'></div>
      </div>
    </>
  );
};
