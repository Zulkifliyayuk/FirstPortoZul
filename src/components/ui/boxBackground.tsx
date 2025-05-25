'use client';

import { adjustClamp } from '../layout/functions';
// import React from 'react';

type BoxBackgroundProps = {
  width: number;
  height: number;
};

export const BoxBackground: React.FC<BoxBackgroundProps> = ({
  width,
  height,
}) => {
  return (
    <div className='relative flex flex-col'>
      <div className='flex flex-row'>
        <div
          className='border-neutral-300/10'
          style={{
            width: adjustClamp(78 + 1, width + 1, 1442),
            height: adjustClamp(78 + 1, height + 1, 1442),
          }}
        ></div>

        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className='border-r border-l border-neutral-300/10'
            style={{
              width: adjustClamp(78, width, 1442),
              height: adjustClamp(78 + 1, height + 1, 1442),
            }}
          ></div>
        ))}

        <div
          className='border-none border-neutral-300/10'
          style={{
            width: adjustClamp(78 + 1, width + 1, 1442),
            height: adjustClamp(78 + 1, height + 1, 1442),
          }}
        ></div>
      </div>

      {Array.from({ length: 7 }).map((_, irow) => (
        <div className='flex flex-row' key={irow}>
          <div
            className='border-t border-b border-neutral-300/10'
            style={{
              width: adjustClamp(78 + 1, width + 1, 1442),
              height: adjustClamp(78, height, 1442),
            }}
          ></div>

          {Array.from({ length: 8 }).map((_, icol) => (
            <div
              key={icol}
              className='border border-neutral-300/10'
              style={{
                width: adjustClamp(78, width, 1442),
                height: adjustClamp(78, height, 1442),
              }}
            ></div>
          ))}

          <div
            className='border-t border-b border-neutral-300/10'
            style={{
              width: adjustClamp(78 + 1, width + 1, 1442),
              height: adjustClamp(78, height, 1442),
            }}
          ></div>
        </div>
      ))}

      <div className='flex flex-row'>
        <div
          className='border-none border-neutral-300/10'
          style={{
            width: adjustClamp(78 + 1, width + 1, 1442),
            height: adjustClamp(78 + 1, height + 1, 1442),
          }}
        ></div>

        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className='border-r border-l border-neutral-300/10'
            style={{
              width: adjustClamp(78, width, 1442),
              height: adjustClamp(78 + 1, height + 1, 1442),
            }}
          ></div>
        ))}

        <div
          className='border-none border-neutral-300/10'
          style={{
            width: adjustClamp(78 + 1, width + 1, 1442),
            height: adjustClamp(78 + 1, height + 1, 1442),
          }}
        ></div>
      </div>
    </div>
  );
};

export const BoxBackgroundContactForm: React.FC<BoxBackgroundProps> = ({
  width,
  height,
}) => {
  return (
    <div className='relative flex flex-col'>
      <div className='flex flex-row'>
        <div
          className='border-neutral-300/'
          style={{
            width: adjustClamp(40 + 1, width + 1, 1442),
            height: adjustClamp(40 + 1, height + 1, 1442),
          }}
        ></div>

        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className='border-r border-l border-neutral-300/10'
            style={{
              width: adjustClamp(40, width, 1442),
              height: adjustClamp(40 + 1, height + 1, 1442),
            }}
          ></div>
        ))}

        <div
          className='border-none border-neutral-300/10'
          style={{
            width: adjustClamp(40 + 1, width + 1, 1442),
            height: adjustClamp(40 + 1, height + 1, 1442),
          }}
        ></div>
      </div>

      {Array.from({ length: 4 }).map((_, irow) => (
        <div className='flex flex-row' key={irow}>
          <div
            className='border-t border-b border-neutral-300/10'
            style={{
              width: adjustClamp(40 + 1, width + 1, 1442),
              height: adjustClamp(40, height, 1442),
            }}
          ></div>

          {Array.from({ length: 8 }).map((_, icol) => (
            <div
              key={icol}
              className='border border-neutral-300/10'
              style={{
                width: adjustClamp(40, width, 1442),
                height: adjustClamp(40, height, 1442),
              }}
            ></div>
          ))}

          <div
            className='border-t border-b border-neutral-300/10'
            style={{
              width: adjustClamp(40 + 1, width + 1, 1442),
              height: adjustClamp(40, height, 1442),
            }}
          ></div>
        </div>
      ))}

      <div className='flex flex-row'>
        <div
          className='border-none border-neutral-300/10'
          style={{
            width: adjustClamp(40 + 1, width + 1, 1442),
            height: adjustClamp(40 + 1, height + 1, 1442),
          }}
        ></div>

        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className='border-r border-l border-neutral-300/10'
            style={{
              width: adjustClamp(40, width, 1442),
              height: adjustClamp(40 + 1, height + 1, 1442),
            }}
          ></div>
        ))}

        <div
          className='border-none border-neutral-300/10'
          style={{
            width: adjustClamp(40 + 1, width + 1, 1442),
            height: adjustClamp(40 + 1, height + 1, 1442),
          }}
        ></div>
      </div>
    </div>
  );
};
