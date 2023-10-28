import React from 'react';
import RSmart from '../RSmart/RSmart';

interface IAccordionProps {
  className?: string;
  children?: React.ReactNode;
}

const RAccordion = ({ className, children, ...args }: IAccordionProps) => {
  return (
    <RSmart {...args} componentType="div" className={className}>
      {children}
    </RSmart>
  );
};

export default RAccordion;
