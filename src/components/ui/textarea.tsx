import React from 'react';

import { cn } from '@/lib/utils';

export const Textarea = ({
  className,
  ...props
}: React.ComponentProps<'textarea'>) => {
  return (
    <textarea
      className={cn(
        'md:text-md font-regular h-42 w-full resize-none rounded-2xl bg-neutral-600 px-3 py-3 text-sm leading-6 outline-none placeholder:text-neutral-200 md:px-4 md:py-2.25 md:leading-7.5',
        'focus:ring-secondary-300 focus:ring-[1px]',
        className
      )}
      {...props}
    />
  );
};
