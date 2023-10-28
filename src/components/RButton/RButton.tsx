import React from 'react';
import RSmart from '../RSmart/RSmart';

export interface IButtonProps {
  className?: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  children?: React.ReactNode;
}

const RButton = ({ className, children, buttonProps }: IButtonProps) => {
  return (
    <RSmart {...buttonProps} componentType="button" className={className}>
      {children}
    </RSmart>
  );
};

export default RButton;
