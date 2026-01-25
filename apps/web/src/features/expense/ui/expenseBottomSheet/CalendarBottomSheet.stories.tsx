import type { Meta, StoryObj } from '@storybook/nextjs';
import { BottomSheet } from '@/shared/ui/bottomSheet';
import { Button } from '@/shared/ui';
import { CalendarBottomSheetTemplate } from './CalendarBottomSheet';
import { useModal } from '@/shared/hooks';

const meta: Meta<typeof CalendarBottomSheetTemplate> = {
  title: 'Components/BottomSheet/CalendarBottomSheet',
  component: CalendarBottomSheetTemplate,
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
            소비일 수정 열기
          </Button>

          <BottomSheet isOpen={isOpen} onClose={closeModal}>
            <CalendarBottomSheetTemplate
              onClose={closeModal}
              onConfirm={() => {
                alert('소비일 수정 완료');
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
