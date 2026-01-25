import { style } from '@vanilla-extract/css';
import { radius, spacing, vars } from '@/shared/ui/theme.css';

export const wrapper = style({
  display: 'flex',
  padding: `${spacing.md} ${spacing.lg}`,
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: spacing.sm2,
  borderRadius: radius.sm2,
  background: vars.color.bg.base,
});

export const badgeList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: spacing.sm,
});

export const badgeButton = style({
  padding: 0,
  border: 'none',
  background: 'none',
  cursor: 'pointer',
});
