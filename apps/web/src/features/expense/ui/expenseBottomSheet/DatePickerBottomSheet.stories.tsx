import type { Meta, StoryObj } from '@storybook/nextjs';
import { BottomSheet } from '@/shared/ui/bottomSheet';
import { Button } from '@/shared/ui';
import { DatePickerBottomSheetTemplate } from './DatePickerBottomSheet';
import { useModal } from '@/shared/hooks';

const meta: Meta<typeof DatePickerBottomSheetTemplate> = {
  title: 'Components/BottomSheet/DatePickerBottomSheet',
  component: DatePickerBottomSheetTemplate,
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

      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}>
          <Button variant='brand' onClick={openModal}>
            날짜 선택 열기
          </Button>

          <BottomSheet isOpen={isOpen} onClose={closeModal}>
            <DatePickerBottomSheetTemplate
              onClose={closeModal}
              onConfirm={() => {
                alert('날짜 선택 완료');
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
