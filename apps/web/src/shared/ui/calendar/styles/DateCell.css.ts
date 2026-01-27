import { recipe } from '@vanilla-extract/recipes';
import { vars, typography, shadows } from '@/shared/ui/theme.css';

// 외부 셀 컨테이너 (클릭 영역)
export const dateCellWrapper = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '0.5rem',
  },
  variants: {
    size: {
      md: {
        width: '4.8rem',
        height: '4.8rem',
      },
      lg: {
        width: '4.8rem',
        height: '5.2rem',
      },
    },
    showText: {
      true: {
        flexDirection: 'column',
        gap: '0.3rem',
        height: 'auto',
        minHeight: '5.2rem',
      },
      false: {},
    },
  },
  defaultVariants: {
    size: 'md',
    showText: false,
  },
});

// 내부 날짜 badge (배경색 적용 영역)
export const dateBadge = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vars.radius.sm,
    transition: 'background-color 0.15s ease-out',
    color: vars.color.text.secondary,
  },
  variants: {
    size: {
      md: {
        width: '3.2rem',
        height: '3.2rem',
        ...typography.body.b4,
      },
      lg: {
        width: '3.2rem',
        height: '3.2rem',
        ...typography.body.b5,
      },
    },
    selected: {
      true: {},
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
  compoundVariants: [
    {
      variants: { size: 'md', selected: true },
      style: {
        backgroundColor: vars.color.bg.brand.default,
        color: vars.color.text.onBrand,
        ':hover': {
          backgroundColor: vars.color.bg.brand.hover,
        },
      },
    },
    {
      variants: { size: 'lg', selected: true },
      style: {
        backgroundColor: 'white',
        color: vars.color.text.primary,
        boxShadow: shadows.shadow2,
      },
    },
  ],
  defaultVariants: {
    selected: false,
    today: false,
    size: 'md',
  },
});

// 날짜 아래 텍스트 스타일
export const dateText = recipe({
  base: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: '-0.01em',
  },
  variants: {
    size: {
      md: {},
      lg: {
        ...typography.body.description,
        color: vars.color.text.secondary,
      },
    },
    isOutsideMonth: {
      true: {
        color: vars.color.text.tertiary,
      },
      false: {},
    },
    selected: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { size: 'lg', isOutsideMonth: true },
      style: {
        color: 'transparent',
      },
    },
    {
      variants: { size: 'lg', selected: true },
      style: {
        color: vars.color.text.primary,
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    isOutsideMonth: false,
    selected: false,
  },
});
