'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

import { adjustClamp } from '../layout/functions';

interface SkillMotionProps extends React.ComponentProps<'div'> {
  img?: string;
  start: number;
}

export const SkillMotion: React.FC<SkillMotionProps> = ({
  img,
  start,
  ...restProps
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        setSize({ width, height });
      }
    };

    const observer = new ResizeObserver(updateSize);
    const currentRef = ref.current; // ✅ Simpan ke variabel lokal

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef); // ✅ Gunakan variabel lokal
    };
  }, []);

  // Gunakan ukuran aktual
  const { width: styleWidth, height: styleHeight } = size;

  let cx = 0;
  let cy = 0;
  let radiusItems = 0;
  let radiusImages = 0;
  const strokeWidth = 2;
  let pathItems = '';
  let pathImages = '';

  if (styleWidth && styleHeight) {
    cx = styleWidth / 2;
    cy = styleHeight / 2;
    radiusItems = Math.min(styleWidth, styleHeight) / 2 - strokeWidth / 2;
    pathItems = `M ${cx},${cy - radiusItems} a ${radiusItems},${radiusItems} 0 1,1 -0.1,0`;
    radiusImages = Math.min(styleWidth, styleHeight) / 2 - 20;
    pathImages = `M ${cx},${cy - radiusImages} a ${radiusImages},${radiusImages} 0 1,1 -0.1,0`;
  }

  type transitionProps = {
    duration: number;
    repeat: number;
    ease: string;
    times?: number[];
  };

  const transition: transitionProps = {
    duration: 20,
    repeat: Infinity,
    ease: 'linear',
  };

  let animate;
  if (start === 0) {
    animate = {
      offsetDistance: ['0%', '50%', '50%', '100%'],
    };
  } else if (start === 4) {
    animate = {
      offsetDistance: ['4%', '50%', '100%', '0%', '4%'],
    };
  } else if (start === 8) {
    animate = {
      offsetDistance: [
        '8.3%',
        '16.6%',
        '24.9%',
        '33.2%',
        '41.5%',
        '50%',
        '58.3%',
        '66.6%',
        '74.9%',
        '83.2%',
        '91.5%',
        '100%',
        '0%',
        '8.3%',
      ],
    };
  } else if (start === 16) {
    animate = {
      offsetDistance: ['16%', '33%', '50%', '66%', '83%', '100%', '0%', '16%'],
    };
  } else if (start === 20) {
    animate = {
      offsetDistance: ['20%', '40%', '60%', '80%', '100%', '0%', '20%'],
    };
  } else if (start === 25) {
    animate = {
      offsetDistance: ['25%', '50%', '75%', '100%', '0%', '25%'],
    };
  } else if (start === 33) {
    animate = {
      offsetDistance: ['33%', '66%', '100%', '0%', '33%'],
    };
  } else if (start === 37) {
    animate = {
      offsetDistance: ['37%', '50%', '100%', '0%', '37%'],
    };
  } else if (start === 41) {
    animate = {
      offsetDistance: ['41.5%', '50%', '100%', '0%', '41.5%'],
    };
  } else if (start === 50) {
    animate = {
      offsetDistance: ['50%', '100%', '0%', '50%'],
    };
  } else if (start === 58) {
    animate = {
      offsetDistance: ['58%', '79%', '100%', '0%', '29%', '58%'],
    };
  } else if (start === 64) {
    animate = {
      offsetDistance: ['64%', '80%', '100%', '0%', '64%'],
    };
  } else if (start === 66) {
    animate = {
      offsetDistance: ['66%', '83%', '100%', '0%', '16%', '33%', '50%', '66%'],
    };
  } else if (start === 75) {
    animate = {
      offsetDistance: ['75%', '100%', '0%', '25%', '50%', '75%'],
    };
  } else if (start === 80) {
    animate = {
      offsetDistance: ['80%', '100%', '0%', '80%'],
    };
  } else if (start === 83) {
    animate = {
      offsetDistance: ['83%', '100%', '0%', '16%', '33%', '50%', '66%', '83%'],
    };
  } else if (start === 90) {
    animate = {
      offsetDistance: [
        '90%',
        '100%',
        '0%',
        '10%',
        '20%',
        '30%',
        '40%',
        '50%',
        '60%',
        '70%',
        '80%',
        '90%',
      ],
    };
  } else if (start === 92) {
    animate = {
      offsetDistance: ['92%', '100%', '0%', '92%'],
    };
  } else if (start === 94) {
    animate = {
      offsetDistance: ['94%', '100%', '0%', '94%'],
    };
  }

  if (start === 0) {
    transition.times = [0, 0.5, 0.5, 1];
  } else if (start === 4) {
    transition.times = [0, 0.46, 0.96, 0.96, 1];
  } else if (start === 8) {
    transition.times = [
      0, 0.083, 0.166, 0.249, 0.332, 0.415, 0.5, 0.583, 0.666, 0.749, 0.832,
      0.915, 0.915, 1,
    ];
  } else if (start === 16) {
    transition.times = [0, 0.16, 0.33, 0.5, 0.66, 0.83, 0.83, 1];
  } else if (start === 20) {
    transition.times = [0, 0.2, 0.4, 0.6, 0.8, 0.8, 1];
  } else if (start === 25) {
    transition.times = [0, 0.25, 0.5, 0.75, 0.75, 1];
  } else if (start === 33) {
    transition.times = [0, 0.33, 0.66, 0.66, 1];
  } else if (start === 37) {
    transition.times = [0, 0.13, 0.63, 0.63, 1];
  } else if (start === 41) {
    transition.times = [0, 0.085, 0.585, 0.585, 1];
  } else if (start === 50) {
    transition.times = [0, 0.5, 0.5, 1];
  } else if (start === 58) {
    transition.times = [0, 0.21, 0.42, 0.42, 0.71, 1];
  } else if (start === 64) {
    transition.times = [0, 0.16, 0.36, 0.36, 1];
  } else if (start === 66) {
    transition.times = [0, 0.16, 0.33, 0.33, 0.5, 0.66, 0.83, 1];
  } else if (start === 75) {
    transition.times = [0, 0.25, 0.25, 0.5, 0.75, 1];
  } else if (start === 80) {
    transition.times = [0, 0.2, 0.2, 1];
  } else if (start === 83) {
    transition.times = [0, 0.16, 0.16, 0.33, 0.5, 0.66, 0.83, 1];
  } else if (start === 90) {
    transition.times = [0, 0.1, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
  } else if (start === 92) {
    transition.times = [0, 0.08, 0.08, 1];
  } else if (start === 94) {
    transition.times = [0, 0.06, 0.06, 1];
  }

  return (
    <div ref={ref} style={{ position: 'relative', ...restProps.style }}>
      {img ? (
        <motion.div
          style={{
            ...circleImage,
            ...(pathImages && {
              offsetPath: `path("${pathImages}")`,
            }),
          }}
          animate={animate}
          transition={transition}
          className='rounded-md bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.25'
        >
          <div className='flex-center size-full items-center justify-center rounded-md bg-neutral-600'>
            <Image
              src={img}
              alt='iconSkill'
              width={50}
              height={50}
              className='h-7 w-auto md:h-13'
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          style={{
            ...circleDivStyle,
            ...(pathItems && { offsetPath: `path('${pathItems}')` }),
          }}
          animate={animate}
          transition={transition}
        />
      )}
    </div>
  );
};

const circleImage: React.CSSProperties = {
  top: 0,
  left: 0,
  width: adjustClamp(88, 162, 1208),
  height: adjustClamp(43, 80, 1208),
  offsetRotate: '0deg',
  position: 'absolute',
};

const circleDivStyle: React.CSSProperties = {
  width: adjustClamp(8, 16, 1208),
  height: adjustClamp(8, 16, 1208),
  top: 0,
  left: 0,
  offsetRotate: 'auto',
  backgroundColor: '#242424',
  borderRadius: '50%',
  position: 'absolute',
};
