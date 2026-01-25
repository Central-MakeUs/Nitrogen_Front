import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import { BottomSheet } from './BottomSheet';
import { Button } from '../button';
import { Text } from '../text';
import { getFigmaUrl } from '@/shared/config/figma';

const meta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: getFigmaUrl('1347-6824'),
    },
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'BottomSheet 열림 상태',
    },
    transparent: {
      control: 'boolean',
      description: '백드롭 투명 여부',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const TemplateDemo = () => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}>
          <Button variant='brand' onClick={() => setIsOpen(true)}>
            BottomSheet 열기
          </Button>

          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div style={{ padding: '20px' }}>
              <Text variant='h2'>BottomSheet 내용</Text>
              <Text variant='b2'>기본 BottomSheet 컴포넌트입니다.</Text>
            </div>
          </BottomSheet>
        </div>
      );
    };

    return <TemplateDemo />;
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        height: '500px',
      },
    },
  },
};

export const Transparent: Story = {
  render: () => {
    const TemplateDemo = () => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}>
          <Button variant='brand' onClick={() => setIsOpen(true)}>
            투명 백드롭 열기
          </Button>

          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} transparent>
            <div style={{ padding: '20px' }}>
              <Text variant='h2'>투명 백드롭</Text>
              <Text variant='b2'>백드롭이 투명한 BottomSheet입니다.</Text>
            </div>
          </BottomSheet>
        </div>
      );
    };

    return <TemplateDemo />;
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        height: '500px',
      },
    },
  },
};
