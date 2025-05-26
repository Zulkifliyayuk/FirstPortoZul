import React from 'react';

type InputGroupProps = {
  children: React.ReactNode;
  errorMessage?: string;
};

export const InputGroup: React.FC<InputGroupProps> = ({
  children,
  errorMessage,
}) => {
  return (
    <div>
      <div>{children}</div>
      {errorMessage && (
        <div className='md:text-md mt-2 text-lg text-[#DC49A6]'>
          {errorMessage}
        </div>
      )}
    </div>
  );
};
