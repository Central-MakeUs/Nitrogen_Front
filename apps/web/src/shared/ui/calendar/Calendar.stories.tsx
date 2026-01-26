import type { Meta, StoryObj } from '@storybook/nextjs';
import { Calendar } from './Calendar';
import { getFigmaUrl } from '@/shared/config/figma';
import { fn } from '@storybook/test';

/**
 * 바텀시트 용 캘린더 컴포넌트
 *
 * - 바텀시트 내에서 날짜를 선택할 때 사용
 * - 월 네비게이션으로 이전/다음 달 이동 가능
 */
const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: getFigmaUrl('1672-7098'),
    },
    docs: {
      description: {
        component: '바텀시트에서 사용되는 날짜 선택 캘린더입니다. 날짜를 클릭하여 선택합니다.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '390px', padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  args: {
    onDateSelect: fn(),
  },
  argTypes: {
    currentDate: {
      table: { disable: true },
    },
    onDateSelect: {
      description: '날짜 클릭 시 호출되는 콜백',
    },
  },
  render: ({ currentDate, ...args }) => (
    <Calendar
      key={currentDate?.toString()}
      {...args}
      currentDate={currentDate ? new Date(currentDate) : undefined}
    />
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
