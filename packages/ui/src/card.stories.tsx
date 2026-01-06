import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Documentation',
    href: 'https://turbo.build',
    children: 'Find in-depth information about Turbo features and API.',
  },
};
