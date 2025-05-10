import React from 'react';

type BoxBackgroundProps = {
  widht: number;
  height: number;
};

export const BoxBackground: React.FC<BoxBackgroundProps> = ({
  widht = 73,
  height = 73,
}) => {
  return (
    <div className='relative flex flex-col'>
      <div className='flex flex-row'>
        <div
          className='border-t border-l border-neutral-300/5'
          style={{
            width: widht + 1,
            height: height + 1,
          }}
        ></div>

        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className='border-t border-r border-l border-neutral-300/5'
            style={{
              width: widht,
              height: height + 1,
            }}
          ></div>
        ))}

        <div
          className='h-[74px] w-[74px] border-t border-r border-neutral-300/5'
          style={{
            width: widht + 1,
            height: height + 1,
          }}
        ></div>
      </div>

      {Array.from({ length: 5 }).map((_, irow) => (
        <div className='flex flex-row' key={irow}>
          <div
            className='border-t border-b border-l border-neutral-300/5'
            style={{
              width: widht + 1,
              height: height,
            }}
          ></div>

          {Array.from({ length: 8 }).map((_, icol) => (
            <div
              key={icol}
              className='border border-neutral-300/5'
              style={{
                width: widht,
                height: height,
              }}
            ></div>
          ))}

          <div
            className='border-t border-r border-b border-neutral-300/5'
            style={{
              width: widht + 1,
              height: height,
            }}
          ></div>
        </div>
      ))}

      <div className='flex flex-row'>
        <div
          className='border-b border-l border-neutral-300/5'
          style={{
            width: widht + 1,
            height: height + 1,
          }}
        ></div>

        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className='border-r border-b border-l border-neutral-300/5'
            style={{
              width: widht,
              height: height + 1,
            }}
          ></div>
        ))}

        <div
          className='border-r border-b border-neutral-300/5'
          style={{
            width: widht + 1,
            height: height + 1,
          }}
        ></div>
      </div>
    </div>
  );
};
