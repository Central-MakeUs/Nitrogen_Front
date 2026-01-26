import { vars, spacing, typography } from '@/shared/ui/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: spacing.lg,
  padding: `${spacing.md} ${spacing.lg}`,
  userSelect: 'none',
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.xs,
});

export const navButton = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: spacing.xs,
  display: 'flex',
  alignItems: 'center',
  color: vars.color.icon.tertiary,
});

export const iconRotate = style({
  transform: 'rotate(180deg)',
});

export const navRow = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: spacing.md,
  gap: spacing.xs2,
  cursor: 'pointer',
});

export const navText = style({
  ...typography.head.h4,
  color: vars.color.text.primary,
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: 0,
  justifyItems: 'center',
});

export const weekdayCell = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2rem',
  color: vars.color.text.tertiary,
  ...typography.body.b2,
});

export const footer = style({
  paddingTop: spacing.md,
});
