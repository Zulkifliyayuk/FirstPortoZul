import { Slot } from '@radix-ui/react-slot';
import React from 'react';

interface ButtonPowerProps extends React.ComponentProps<'button'> {
  asChild?: boolean;
  children?: React.ReactNode;
}

const ButtonPower: React.FC<ButtonPowerProps> = ({
  asChild = false,
  children,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button';

  return <Comp {...props}>{children}</Comp>;
};

export default ButtonPower;
