import React from 'react';
// import './Button.scss';

interface ISmartOwn<E extends React.ElementType> {
  componentType: E;
  className?: string;
  children?: React.ReactNode;
}

type SmartProps<E extends React.ElementType> = ISmartOwn<E> &
  Omit<React.ComponentProps<E>, keyof ISmartOwn<E>>;

const RSmart = <E extends React.ElementType>({
  componentType,
  children,
  ...args
}: SmartProps<E>) => {
  const Component = componentType as React.ElementType;
  return <Component {...args}>{children}</Component>;
};

export default RSmart;
