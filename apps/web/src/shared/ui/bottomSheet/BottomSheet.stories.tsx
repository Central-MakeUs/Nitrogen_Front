import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import { BottomSheet } from './BottomSheet';
import { Button } from '../button';
import { getFigmaUrl } from '@/shared/config/figma';
import BaseBottomSheetTemplate from './templates/BaseBottomSheetTemplate';

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
  tags: ['autodocs'],
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

export const WithTemplateClose: Story = {
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
            Template (Close) 열기
          </Button>

          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <BaseBottomSheetTemplate>
              <BaseBottomSheetTemplate.Header text='카테고리' type='close' />
              <BaseBottomSheetTemplate.Content>
                <div style={{ color: '#757A87', lineHeight: 1.6 }}>
                  BaseBottomSheetTemplate을 사용한 BottomSheet 예시입니다.
                </div>
                <div style={{ color: '#757A87', lineHeight: 1.6 }}>
                  BaseBottomSheetTemplate을 사용한 BottomSheet 예시입니다.
                </div>{' '}
                <div style={{ color: '#757A87', lineHeight: 1.6 }}>
                  BaseBottomSheetTemplate을 사용한 BottomSheet 예시입니다.
                </div>{' '}
                <div style={{ color: '#757A87', lineHeight: 1.6 }}>
                  BaseBottomSheetTemplate을 사용한 BottomSheet 예시입니다.
                </div>
              </BaseBottomSheetTemplate.Content>
              <BaseBottomSheetTemplate.Button label='선택' onClick={() => setIsOpen(false)} />
            </BaseBottomSheetTemplate>
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

export const WithTemplateAdd: Story = {
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
            Template (Add) 열기
          </Button>

          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <BaseBottomSheetTemplate>
              <BaseBottomSheetTemplate.Header text='카테고리' type='add' />
              <BaseBottomSheetTemplate.Content>
                <div style={{ color: '#757A87', lineHeight: 1.6 }}>
                  BaseBottomSheetTemplate을 사용한 BottomSheet 예시입니다.
                </div>
                <div style={{ color: '#757A87', lineHeight: 1.6 }}>
                  BaseBottomSheetTemplate을 사용한 BottomSheet 예시입니다.
                </div>
              </BaseBottomSheetTemplate.Content>
              <BaseBottomSheetTemplate.Button label='선택' onClick={() => setIsOpen(false)} />
            </BaseBottomSheetTemplate>
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
