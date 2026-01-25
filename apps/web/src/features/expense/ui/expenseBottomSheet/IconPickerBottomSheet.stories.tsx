import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import { BottomSheet } from '@/shared/ui/bottomSheet';
import { Button } from '@/shared/ui';
import { IconPickerBottomSheetTemplate } from './IconPickerBottomSheet';
import { Category } from './CategoryBottomSheet';

const meta: Meta<typeof IconPickerBottomSheetTemplate> = {
  title: 'Components/BottomSheet/IconPickerBottomSheet',
  component: IconPickerBottomSheetTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Default: Story = {
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
            아이콘 선택 열기
          </Button>

          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <IconPickerBottomSheetTemplate
              categories={mockCategories}
              selectedId={selectedId}
              onSelect={(category) => setSelectedId(category.id)}
              onClose={() => setIsOpen(false)}
              onConfirm={() => {
                alert(`선택된 아이콘: ${selectedId}`);
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
