import type { Meta, StoryObj } from '@storybook/react';

import RButton from './RButton';

const meta = {
  title: 'Rtass/RButton',
  component: RButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
 
} satisfies Meta<typeof RButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};


