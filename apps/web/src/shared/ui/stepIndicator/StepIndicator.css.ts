import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../theme.css';

export const stepIndicatorContainer = style({
  display: 'flex',
  gap: '0.6rem',
  alignItems: 'flex-end',
  justifyContent: 'center',
  padding: '0.6rem 1.8rem',
});

export const stepIndicatorItem = recipe({
  base: {
    height: '4px',
    flex: 1,
    borderRadius: '1px',
  },
  variants: {
    state: {
      active: {
        backgroundColor: vars.color.indicator.active,
      },
      default: {
        backgroundColor: vars.color.indicator.default,
      },
    },
  },
  defaultVariants: {
    state: 'default',
  },
});
