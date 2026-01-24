import type { Meta, StoryObj } from '@storybook/nextjs';
import { Badge } from './Badge';
import { getFigmaUrl } from '@/shared/config/figma';
import { IcMonth } from 'public/icons';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: getFigmaUrl('396-3461'),
    },
    docs: {
      description: {
        component: '라벨과 아이콘을 표시하는 뱃지 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '뱃지 라벨 텍스트',
    },
    icon: {
      control: false,
      description: '뱃지 아이콘 (ReactNode)',
    },
    size: {
      control: 'radio',
      options: ['md', 'lg'],
      description: '뱃지 크기',
    },
    backgroundColor: {
      control: 'color',
      description: '뱃지 배경색',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '만족도 낮음',
  },
};

export const WithIcon: Story = {
  args: {
    label: '뱃지',
    icon: <IcMonth />,
  },
};

export const SizeMd: Story = {
  args: {
    label: '중간 크기',
    size: 'md',
  },
};

export const SizeLg: Story = {
  args: {
    label: '큰 크기',
    size: 'lg',
  },
};
