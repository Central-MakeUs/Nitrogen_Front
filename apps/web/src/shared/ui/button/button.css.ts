import { recipe } from '@vanilla-extract/recipes';
import { vars, buttonTokens, spacing, lineWidth, typography } from '../theme.css';

const buttonSizes = {
  sm: {
    paddingY: spacing.md,
    paddingX: spacing['2xl'],
  },
  md: {
    height: '3rem',
    paddingY: spacing.md,
    paddingX: spacing['2xl'],
  },
  lg: {
    height: '3.375rem',
    paddingY: spacing.md,
    paddingX: spacing['2xl'],
  },
} as const;

export const button = recipe({
  base: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: buttonTokens.spacing.gap,
    borderRadius: buttonTokens.radius.default,
    border: 'none',
    cursor: 'pointer',
    transition:
      'background-color 0.15s ease-out, border-color 0.15s ease-out, transform 0.1s ease-out',
    outline: 'none',
    ':focus-visible': {
      boxShadow: `0 0 0 2px ${vars.color.primitive.static.white}, 0 0 0 4px ${vars.color.bg.brand.default}`,
    },
    ':active': {
      transform: 'scale(0.98)',
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: buttonTokens.color.bg.primary.default,
        color: buttonTokens.color.text.onBrand,
        ':hover': {
          backgroundColor: buttonTokens.color.bg.primary.hover,
          color: buttonTokens.color.text.primary.hover,
        },
        ':active': {
          backgroundColor: buttonTokens.color.bg.primary.active,
          color: buttonTokens.color.text.primary.active,
        },
      },
      secondary: {
        backgroundColor: buttonTokens.color.bg.secondary.default,
        color: buttonTokens.color.text.secondary.default,
        border: `${lineWidth.sm} solid ${buttonTokens.color.border.default}`,
        ':hover': {
          backgroundColor: buttonTokens.color.bg.secondary.hover,
        },
        ':active': {
          backgroundColor: buttonTokens.color.bg.secondary.active,
        },
      },
      brand: {
        backgroundColor: buttonTokens.color.bg.brand.default,
        color: buttonTokens.color.text.onBrand,
        ':hover': {
          backgroundColor: buttonTokens.color.bg.brand.hover,
        },
        ':active': {
          backgroundColor: buttonTokens.color.bg.brand.active,
        },
      },
    },
    size: {
      sm: {
        padding: `${buttonSizes.sm.paddingY} ${buttonSizes.sm.paddingX}`,
        ...typography.head.h2,
      },
      md: {
        height: buttonSizes.md.height,
        padding: `${buttonSizes.md.paddingY} ${buttonSizes.md.paddingX}`,
        ...typography.head.h2,
      },
      lg: {
        height: buttonSizes.lg.height,
        padding: `${buttonSizes.lg.paddingY} ${buttonSizes.lg.paddingX}`,
        ...typography.head.h4,
      },
    },
    disabled: {
      true: {
        backgroundColor: buttonTokens.color.bg.disable,
        color: buttonTokens.color.text.disabled,
        cursor: 'not-allowed',
        pointerEvents: 'none' as const,
        transform: 'none',
        ':hover': {
          backgroundColor: buttonTokens.color.bg.disable,
        },
        ':active': {
          backgroundColor: buttonTokens.color.bg.disable,
          transform: 'none',
        },
      },
    },
  },
  compoundVariants: [
    {
      variants: { variant: 'secondary', disabled: true },
      style: {
        border: `${lineWidth.sm} solid ${buttonTokens.color.border.default}`,
      },
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
