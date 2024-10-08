import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button Atomic',
  tags: ['autodocs'],
};

export const Primary: StoryObj<typeof meta> = {
  args: {
    variant: 'btn-primary',
    children: 'Button-Primary',
    classNames: 'p-7',
  },
};

export const Success: StoryObj<typeof meta> = {
  args: {
    variant: 'btn-success',
    children: 'Button-Success',
    classNames: 'text-bold',
  },
  render: (args) => (
    <Button {...args} style={{ borderRadius: '20px' }}>
      Success
    </Button>
  ),
};
export const Others: StoryObj<typeof meta> = {
  render: () => (
    <div>
      <Button variant='' style={{ color: 'inherit' }}>
        OTHER
      </Button>
    </div>
  ),
};

export default meta;
