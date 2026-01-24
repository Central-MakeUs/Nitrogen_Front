import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import { BottomSheet } from './BottomSheet';
import { Button } from '../button';
import { getFigmaUrl } from '@/shared/config/figma';
import BaseBottomSheetTemplate from './templates/BaseBottomSheetTemplate';
import { LoginBottomSheetTemplate } from './templates/LoginBottomSheetTemplate';
import { CategoryBottomSheetTemplate, Category } from './templates/CategoryBottomSheetTemplate';

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

export const LoginTemplate: Story = {
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
            Template Login 열기
          </Button>

          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <LoginBottomSheetTemplate />
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

const mockCategories: Category[] = [
  { id: '1', icon: 'shopping', label: '간식' },
  { id: '2', icon: 'coin', label: '자기계발비' },
  { id: '3', icon: 'percent', label: '간식' },
  { id: '4', icon: 'shopping', label: '카테고리명' },
  { id: '5', icon: 'shopping', label: '간식' },
  { id: '6', icon: 'coin', label: '자기계발비' },
  { id: '7', icon: 'percent', label: '간식' },
  { id: '8', icon: 'shopping', label: '카테고리명' },
  { id: '9', icon: 'shopping', label: '간식' },
  { id: '10', icon: 'coin', label: '자기계발비' },
  { id: '11', icon: 'percent', label: '간식' },
  { id: '12', icon: 'shopping', label: '카테고리명' },
  { id: '13', icon: 'shopping', label: '간식' },
  { id: '14', icon: 'coin', label: '자기계발비' },
  { id: '15', icon: 'percent', label: '간식' },
  { id: '16', icon: 'shopping', label: '카테고리명' },
  { id: '17', icon: 'shopping', label: '카테고리명' },
  { id: '18', icon: 'shopping', label: '카테고리명' },
];

export const CategoryTemplate: Story = {
  render: () => {
    const TemplateDemo = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [selectedId, setSelectedId] = useState<string | null>('3');

      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}>
          <Button variant='brand' onClick={() => setIsOpen(true)}>
            카테고리 선택 열기
          </Button>

          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <CategoryBottomSheetTemplate
              categories={mockCategories}
              selectedId={selectedId}
              onSelect={(category) => setSelectedId(category.id)}
              onAddClick={() => alert('카테고리 추가')}
              onConfirm={() => {
                alert(`선택된 카테고리: ${selectedId}`);
                setIsOpen(false);
              }}
            />
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
        height: '600px',
      },
    },
  },
};
