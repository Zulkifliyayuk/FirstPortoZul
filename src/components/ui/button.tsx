import { Slot } from '@radix-ui/react-slot';
import React from 'react';

import { cn } from '@/lib/utils';

interface ButtonProps extends React.ComponentProps<'button'> {
  size: 'default' | 'icon';

  className?: string;
  asChild?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  size = 'default',

  asChild = false,
  children,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button';

  const baseClass =
    'flex justify-center items-center shrink-0 cursor-pointer disabled:pointer-events-none disabled:opacity-50 bg-gradient text-neutral-100 rounded-full hover:shadow-[0_0_17px_rgba(135,70,235,0.32)]';

  const sizeClass = {
    default: 'h-12',
    icon: 'size-10',
  }[size];

  return (
    <Comp
      data-slot='button'
      className={cn(baseClass, sizeClass, className)}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default Button;
