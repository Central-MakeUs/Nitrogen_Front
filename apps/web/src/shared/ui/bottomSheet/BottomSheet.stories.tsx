import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import { BottomSheet } from './BottomSheet';
import { Button } from '../button';
import { getFigmaUrl } from '@/shared/config/figma';
import { LoginBottomSheetTemplate } from './templates/LoginBottomSheetTemplate';
import { CategoryBottomSheetTemplate, Category } from './templates/CategoryBottomSheetTemplate';
import { IconPickerBottomSheetTemplate } from './templates/IconPickerBottomSheetTemplate';
import { DatePickerBottomSheetTemplate } from './templates/DatePickerBottomSheetTemplate';
import { CalendarBottomSheetTemplate } from './templates/CalendarBottomSheetTemplate';
import { ExpenseFormBottomSheetTemplate } from './templates/ExpenseFormBottomSheetTemplate';

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

export const IconPickerTemplate: Story = {
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

export const DatePickerTemplate: Story = {
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
            날짜 선택 열기
          </Button>

          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <DatePickerBottomSheetTemplate
              onClose={() => setIsOpen(false)}
              onConfirm={() => {
                alert('날짜 선택 완료');
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

export const CalendarTemplate: Story = {
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
            소비일 수정 열기
          </Button>

          <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <CalendarBottomSheetTemplate
              onClose={() => setIsOpen(false)}
              onConfirm={() => {
                alert('소비일 수정 완료');
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

const expenseCategories: Category[] = [
  { id: '1', icon: 'shopping', label: '간식' },
  { id: '2', icon: 'coin', label: '자기계발비' },
  { id: '3', icon: 'percent', label: '감식' },
  { id: '4', icon: 'shopping', label: '카테고리명' },
  { id: '5', icon: 'shopping', label: '간식' },
  { id: '6', icon: 'coin', label: '자기계발비' },
  { id: '7', icon: 'percent', label: '감식' },
];

export const ExpenseFormTemplate: Story = {
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
            <ExpenseFormBottomSheetTemplate
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
