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
    snapPoints: {
      control: 'object',
      description: '스냅 포인트 배열 (화면 높이 비율, 0~1)',
      table: {
        defaultValue: { summary: '[0.9, 0.5, 0]' },
      },
    },
    initialSnap: {
      control: 'number',
      description: '초기 스냅 포인트',
      table: {
        defaultValue: { summary: '0.5' },
      },
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
      const [isOpen, setIsOpen] = useState(true); // 디버깅: true로 변경

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

          <BottomSheet
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            snapPoints={[0.5, 0]}
            initialSnap={0.5}>
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
