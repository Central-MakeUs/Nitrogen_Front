import { recipe } from '@vanilla-extract/recipes';
import { vars } from './theme.css';

export const button = recipe({
  base: {
    padding: `${vars.spacing.sm} ${vars.spacing.md}`,
    borderRadius: vars.borderRadius.md,
    border: 'none',
    fontSize: vars.fontSize.md,
    cursor: 'pointer',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.primary,
        color: '#fff',
      },
      secondary: {
        backgroundColor: vars.color.hover,
        color: vars.color.text,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
