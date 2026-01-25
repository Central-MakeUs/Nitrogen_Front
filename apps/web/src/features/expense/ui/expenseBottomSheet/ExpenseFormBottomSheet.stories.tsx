import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import { BottomSheet } from '@/shared/ui/bottomSheet';
import { Button } from '@/shared/ui';
import { ExpenseFormBottomSheet } from './ExpenseFormBottomSheet';
import { useModal } from '@/shared/hooks';

const meta: Meta<typeof ExpenseFormBottomSheet> = {
  title: 'Components/BottomSheet/ExpenseFormBottomSheet',
  component: ExpenseFormBottomSheet,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const TemplateDemo = () => {
      const { isOpen, openModal, closeModal } = useModal();
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
          <Button variant='brand' onClick={openModal}>
            소비 입력 열기
          </Button>

          <BottomSheet isOpen={isOpen} onClose={closeModal}>
            <ExpenseFormBottomSheet
              amount={amount}
              onAmountChange={(value) => setAmount(Number(value))}
              usage={usage}
              onUsageChange={setUsage}
              selectedDate={selectedDate}
              onDateClick={() => alert('날짜 선택')}
              selectedCategoryId={selectedCategoryId}
              onCategorySelect={(category) => setSelectedCategoryId(category.id)}
              onMoreCategoryClick={() => alert('더보기 클릭')}
              satisfactionLabel='만족도 낮음'
              satisfactionEmoji='😒'
              onDelete={() => alert('삭제')}
              onClose={closeModal}
              onConfirm={() => {
                alert('소비 입력 완료');
                closeModal();
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
