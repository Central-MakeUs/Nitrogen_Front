import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { vars, typography } from '@/shared/ui/theme.css';

// 외부 셀 컨테이너 (클릭 영역)
export const dateCellWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '4.8rem',
  height: '4.8rem',
  cursor: 'pointer',
  padding: '0.5rem',
});

// 내부 날짜 badge (배경색 적용 영역)
export const dateBadge = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3.2rem',
    height: '3.2rem',
    borderRadius: vars.radius.sm,
    transition: 'background-color 0.15s ease-out',
    color: vars.color.text.secondary,
    ...typography.body.b4,
  },
  variants: {
    selected: {
      true: {
        backgroundColor: vars.color.bg.brand.default,
        color: vars.color.text.onBrand,
        ':hover': {
          backgroundColor: vars.color.bg.brand.hover,
        },
      },
      false: {},
    },
    today: {
      true: {
        border: `1px solid ${vars.color.border.default}`,
      },
    },
    isOutsideMonth: {
      true: {
        color: vars.color.text.tertiary,
        cursor: 'default',
      },
    },
  },
  defaultVariants: {
    selected: false,
    today: false,
  },
});
