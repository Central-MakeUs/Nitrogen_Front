import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/ui/theme.css';
import { radius, spacing } from '@/shared/ui/tokens/spacing';

export const textStyle = style({
  color: vars.color.text.primary,
  margin: '1rem 0',
});

export const btnWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.md,
  marginBottom: '3.2rem',
});

export const loginBtn = recipe({
  base: {
    display: 'flex',
    width: '100%',
    height: '4.8rem',
    padding: `${spacing.md} ${spacing['2xl']}`,
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    borderRadius: radius.sm2,
  },
  variants: {
    social: {
      kakako: {
        background: '#F9DC00',
        color: vars.color.text.primary,
      },
      apple: {
        background: '#131417',
        color: vars.color.bg.surface.secondary.default,
      },
    },
  },
});
