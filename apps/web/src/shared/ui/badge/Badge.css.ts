import { style } from '@vanilla-extract/css';
import { spacing, radius } from '../theme.css';

export const badge = style({
  gap: spacing.xs,
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: radius.xs,
  padding: `${spacing.xs} ${spacing.sm}`,
});

export const icon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.2rem',
  height: '1.2rem',
});
