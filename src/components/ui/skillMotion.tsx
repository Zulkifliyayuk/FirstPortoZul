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

  type TransitionProps = {
    duration: number;
    repeat: number;
    ease: string;
    times?: number[];
  };

  const transition: TransitionProps = {
    duration: 20,
    repeat: Infinity,
    ease: 'linear',
  };

  const animationPoints: Record<number, { offset: string; time: number }> = {
    4: { offset: '4%', time: 0.96 },
    8: { offset: '8%', time: 0.92 },
    16: { offset: '16%', time: 0.84 },
    20: { offset: '20%', time: 0.8 },
    25: { offset: '25%', time: 0.75 },
    33: { offset: '33%', time: 0.67 },
    37: { offset: '37%', time: 0.63 },
    41: { offset: '41%', time: 0.59 },
    50: { offset: '50%', time: 0.5 },
    58: { offset: '58%', time: 0.42 },
    64: { offset: '64%', time: 0.36 },
    66: { offset: '66%', time: 0.34 },
    75: { offset: '75%', time: 0.25 },
    80: { offset: '80%', time: 0.2 },
    83: { offset: '83%', time: 0.17 },
    90: { offset: '90%', time: 0.1 },
    92: { offset: '92%', time: 0.08 },
    94: { offset: '94%', time: 0.06 },
  };

  let animate;

  if (start === 0) {
    animate = {
      offsetDistance: ['0%', '50%', '50%', '100%'],
    };
    transition.times = [0, 0.5, 0.5, 1];
  } else if (start in animationPoints) {
    const { offset, time } = animationPoints[start];
    animate = {
      offsetDistance: [offset, '100%', '0%', offset],
    };
    transition.times = [0, time, time, 1];
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
