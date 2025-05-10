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
  let radius = 0;
  let path = '';

  if (styleWidth && styleHeight) {
    cx = styleWidth / 2;
    cy = styleHeight / 2;
    radius = Math.min(styleWidth, styleHeight) / 2 - 20;
    path = `M ${cx},${cy - radius} a ${radius},${radius} 0 1,1 -0.1,0`;
  }

  let animate;
  if (start === 25) {
    animate = {
      offsetDistance: ['25%', '50%', '75%', '100%', '0%', '25%'],
    };
  } else if (start === 50) {
    animate = {
      offsetDistance: ['50%', '100%', '0%', '50%'],
    };
  } else if (start === 0) {
    animate = {
      offsetDistance: ['0%', '50%', '50%', '100%'],
    };
  } else if (start === 75) {
    animate = {
      offsetDistance: ['75%', '100%', '0%', '25%', '50%', '75%'],
    };
  } else if (start === 20) {
    animate = {
      offsetDistance: ['20%', '40%', '60%', '80%', '100%', '0%', '20%'],
    };
  }

  const transition: any = {
    duration: 15,
    repeat: Infinity,
    ease: 'linear',
  };

  if (start === 25) {
    transition.times = [0, 0.25, 0.5, 0.75, 0.75, 1];
  } else if (start === 50) {
    transition.times = [0, 0.5, 0.5, 1];
  } else if (start === 0) {
    transition.times = [0, 0.5, 0.5, 1];
  } else if (start === 75) {
    transition.times = [0, 0.25, 0.25, 0.5, 0.75, 1];
  } else if (start === 20) {
    transition.times = [0, 0.2, 0.4, 0.6, 0.8, 0.8, 1];
  }

  return (
    <div ref={ref} style={{ position: 'relative', ...restProps.style }}>
      {img ? (
        <motion.div
          style={{
            ...circleImage,
            ...(path && {
              offsetPath: `path("${path}")`,
            }),
          }}
          animate={animate}
          transition={transition}
          className='rounded-md bg-gradient-to-r from-[#DC49A6] to-[#8746EB] p-0.25'
        >
          <div className='flex-center size-full items-center justify-center rounded-md bg-neutral-500'>
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
            ...(path && { offsetPath: `path('${path}')` }),
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
