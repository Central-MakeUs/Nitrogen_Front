import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { vars, spacing } from '../theme.css';

export const container = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    transition: 'background-color 0.15s ease-out',
    outline: 'none',
    border: 'none',
    backgroundColor: vars.color.bg.surface.secondary.default,
  },
  variants: {
    size: {
      lg: {
        gap: spacing.sm2,
        padding: `${spacing.lg2} ${spacing['2xl']}`,
        borderRadius: vars.radius.sm2,
        border: `1px solid ${vars.color.border.default}`,
        ':disabled': {
          backgroundColor: vars.color.primitive.static.white,
          color: vars.color.text.primary,
        },
        ':hover': {
          backgroundColor: vars.color.bg.surface.secondary.hover,
          color: vars.color.text.primary,
        },
        ':active': {
          backgroundColor: vars.color.bg.surface.secondary.hover,
          color: vars.color.text.secondary,
        },
        ':default': {
          backgroundColor: vars.color.bg.surface.secondary.default,
          color: vars.color.text.primary,
        },
      },
      sm: {
        gap: spacing.sm,
        padding: `${spacing.xs2} 2.6rem`,
        justifyContent: 'space-between',
        backgroundColor: vars.color.primitive.static.white,

        ':disabled': {
          color: vars.color.text.secondary,
        },
        ':hover': {
          color: vars.color.text.tertiary,
        },
        ':active': {
          color: vars.color.text.tertiary,
        },
        ':default': {
          color: vars.color.text.secondary,
        },
      },
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

export const content = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing.sm2,
});

export const checkIcon = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.6rem',
    height: '1.6rem',
    flexShrink: 0,
  },
  variants: {
    selected: {
      true: {
        color: vars.color.icon.brand,
      },
      false: {
        color: vars.color.icon.subtle,
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export const chevronIcon = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.6rem',
    height: '1.6rem',
    flexShrink: 0,
    color: vars.color.icon.subtle,
  },
  variants: {
    selected: {
      true: {
        color: vars.color.icon.brand,
      },
      false: {
        color: vars.color.icon.tertiary,
      },
    },
  },
});
