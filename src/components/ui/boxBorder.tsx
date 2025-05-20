import React from 'react';

import { adjustClamp } from '../layout/functions';

export const BoxBorder = () => {
  return (
    <>
      {/* box top left */}
      <div
        className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.25'
        style={{
          width: adjustClamp(6, 19.45, 1442),
          height: adjustClamp(7, 10.23, 1442),
        }}
      >
        <div className='size-full bg-neutral-100'></div>
      </div>
      {/* box top right */}
      <div
        className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.25'
        style={{
          width: adjustClamp(6, 19.45, 1442),
          height: adjustClamp(7, 10.23, 1442),
        }}
      >
        <div className='size-full bg-neutral-100'></div>
      </div>

      {/* box bottom right */}
      <div
        className='absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.25'
        style={{
          width: adjustClamp(6, 19.45, 1442),
          height: adjustClamp(7, 10.23, 1442),
        }}
      >
        <div className='size-full bg-neutral-100'></div>
      </div>

      {/* box bottom left */}
      <div
        className='absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.25'
        style={{
          width: adjustClamp(6, 19.45, 1442),
          height: adjustClamp(7, 10.23, 1442),
        }}
      >
        <div className='size-full bg-neutral-100'></div>
      </div>
    </>
  );
};

export const BoxBorderEndDeveloper = () => {
  return (
    <>
      {/* box top left */}
      <div
        className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.25'
        style={{
          width: adjustClamp(8.85, 19.45, 1442),
          height: adjustClamp(6.91, 10.23, 1442),
        }}
      >
        <div className='size-full bg-neutral-100'></div>
      </div>
      {/* box top right */}
      <div
        className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.25'
        style={{
          width: adjustClamp(8.85, 19.45, 1442),
          height: adjustClamp(6.91, 10.23, 1442),
        }}
      >
        <div className='size-full bg-neutral-100'></div>
      </div>

      {/* box bottom right */}
      <div
        className='absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.25'
        style={{
          width: adjustClamp(8.85, 19.45, 1442),
          height: adjustClamp(6.91, 10.23, 1442),
        }}
      >
        <div className='size-full bg-neutral-100'></div>
      </div>

      {/* box bottom left */}
      <div
        className='absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.25'
        style={{
          width: adjustClamp(8.85, 19.45, 1442),
          height: adjustClamp(6.91, 10.23, 1442),
        }}
      >
        <div className='size-full bg-neutral-100'></div>
      </div>
    </>
  );
};
