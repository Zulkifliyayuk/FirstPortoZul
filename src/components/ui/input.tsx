import React from 'react';

import { cn } from '@/lib/utils';

export const Input = ({
  className,
  type,
  ...props
}: React.ComponentProps<'input'>) => {
  return (
    <input
      type={type}
      className={cn(
        'md:text-md font-regular h-12 w-full rounded-2xl bg-neutral-500 px-3 py-3 text-sm leading-6 outline-none placeholder:text-neutral-200 md:px-4 md:py-2.25 md:leading-7.5',
        'focus:ring-secondary-300 focus:ring-[1px]',
        className
      )}
      {...props}
    />
  );
};
