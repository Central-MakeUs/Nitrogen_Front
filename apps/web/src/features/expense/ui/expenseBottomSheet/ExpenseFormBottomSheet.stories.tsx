import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import { BottomSheet } from '@/shared/ui/bottomSheet';
import { Button } from '@/shared/ui';
import { ExpenseFormBottomSheet, Category } from './ExpenseFormBottomSheet';

const meta: Meta<typeof ExpenseFormBottomSheet> = {
  title: 'Components/BottomSheet/ExpenseFormBottomSheet',
  component: ExpenseFormBottomSheet,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const expenseCategories: Category[] = [
  { id: '1', icon: 'shopping', label: '간식' },
  { id: '2', icon: 'coin', label: '자기계발비' },
  { id: '3', icon: 'percent', label: '감식' },
  { id: '4', icon: 'shopping', label: '카테고리명' },
  { id: '5', icon: 'shopping', label: '간식' },
  { id: '6', icon: 'coin', label: '자기계발비' },
  { id: '7', icon: 'percent', label: '감식' },
];

export const Default: Story = {
  render: () => {
    const TemplateDemo = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [amount, setAmount] = useState<number>(23000);
      const [usage, setUsage] = useState<string>('');
      const [selectedDate] = useState<Date>(new Date(2026, 11, 31));
      const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>('3');

      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}>
          <Button variant='brand' onClick={() => setIsOpen(true)}>
            소비 입력 열기
          </Button>

          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <ExpenseFormBottomSheet
              amount={amount}
              onAmountChange={(value) => setAmount(Number(value))}
              usage={usage}
              onUsageChange={setUsage}
              selectedDate={selectedDate}
              onDateClick={() => alert('날짜 선택')}
              categories={expenseCategories}
              selectedCategoryId={selectedCategoryId}
              onCategorySelect={(category) => setSelectedCategoryId(category.id)}
              onMoreCategoryClick={() => alert('더보기 클릭')}
              satisfactionLabel='만족도 낮음'
              satisfactionEmoji='😒'
              onDelete={() => alert('삭제')}
              onClose={() => setIsOpen(false)}
              onConfirm={() => {
                alert('소비 입력 완료');
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
