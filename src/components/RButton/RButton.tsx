import React from 'react';
import RSmart from '../RSmart/RSmart';

interface IButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const RButton = ({ className, children, ...args }: IButtonProps) => {
  return (
    <RSmart {...args} componentType="button" className={className}>
      {children}
    </RSmart>
  );
};

export default RButton;
