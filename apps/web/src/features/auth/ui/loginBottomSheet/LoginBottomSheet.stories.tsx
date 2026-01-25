import type { Meta, StoryObj } from '@storybook/nextjs';
import { BottomSheet } from '@/shared/ui/bottomSheet';
import { Button } from '@/shared/ui';
import { LoginBottomSheet } from './LoginBottomSheet';
import { getFigmaUrl } from '@/shared/config/figma';
import { useModal } from '@/shared/hooks';

const meta = {
  title: 'Components/BottomSheet/LoginBottomSheet',
  component: LoginBottomSheet,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: getFigmaUrl('1347-6824'),
    },
    docs: {
      description: {
        component: [
          'LoginBottomSheet는 소셜 로그인 옵션을 제공하는 바텀시트 컴포넌트입니다.',
          '',
          '## 주요 기능',
          '- 카카오 로그인과 Apple 로그인 옵션을 제공합니다.',
          '- BaseBottomSheetTemplate을 사용하여 일관된 디자인을 유지합니다.',
          '- 닫기 버튼을 포함하여 사용자가 언제든 바텀시트를 닫을 수 있습니다.',
          '',
          '## 사용 예시',
          '```tsx',
          'const [isOpen, setIsOpen] = useState(false);',
          '',
          '<Button onClick={() => setIsOpen(true)}>',
          '  로그인',
          '</Button>',
          '',
          '<BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>',
          '  <LoginBottomSheet />',
          '</BottomSheet>',
          '```',
        ].join('\n'),
      },
    },
  },
} satisfies Meta<typeof LoginBottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '기본 로그인',
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
            로그인 열기
          </Button>

          <BottomSheet isOpen={isOpen} onClose={closeModal}>
            <LoginBottomSheet onClose={closeModal} />
          </BottomSheet>
        </div>
      );
    };

    return <TemplateDemo />;
  },
  parameters: {
    docs: {
      description: {
        story:
          '카카오와 Apple 소셜 로그인 옵션을 제공하는 기본 로그인 바텀시트입니다. 사용자는 선호하는 소셜 플랫폼을 선택하여 간편하게 로그인할 수 있습니다.',
      },
    },
    story: {
      inline: false,
      height: '500px',
    },
  },
};
