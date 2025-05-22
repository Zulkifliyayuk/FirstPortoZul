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
    radiusImages = Math.min(styleWidth, styleHeight) / 2 - 5;
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

  let animate;

  if (start === 0) {
    animate = {
      offsetDistance: ['0%', '50%', '50%', '100%'],
    };
    transition.times = [0, 0.5, 0.5, 1];
  } else {
    const offset = `${start}%`;
    const time = (100 - start) / 100;
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
