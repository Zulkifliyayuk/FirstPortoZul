'use client';

import React, { useRef, useState, useEffect } from 'react';

export const SkillMotionBackground: React.FC<React.ComponentProps<'div'>> = ({
  ...restProps
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  // Ambil ukuran aktual dari elemen setelah render
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

  if (styleWidth && styleHeight) {
    cx = styleWidth / 2;
    cy = styleHeight / 2;
    radius = Math.min(styleWidth, styleHeight) / 2 - 20;
  }

  return (
    <div ref={ref} style={{ position: 'relative', ...restProps.style }}>
      <svg
        width={styleWidth}
        height={styleHeight}
        viewBox={`0 0 ${styleWidth} ${styleHeight}`}
      >
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke='#242424'
          strokeWidth='2'
          fill='transparent'
        />
      </svg>
    </div>
  );
};
