import { style } from '@vanilla-extract/css';
import { spacing, vars, radius, shadows } from '../../theme.css';

export const baseBottomSheetTemplate = style({
  display: 'flex',
  padding: `${spacing.lg} ${spacing.xl}`,
  flexDirection: 'column',
  backgroundColor: vars.color.primitive.static.white,
  borderTopLeftRadius: radius.lg2,
  borderTopRightRadius: radius.lg2,
  boxShadow: shadows.shadow2,
  gap: spacing.md,
  maxHeight: '90vh',
  overflow: 'hidden',
  zIndex: 1000,
});

export const content = style({
  flex: 1,
  overflowY: 'auto',
  padding: `0 ${spacing['2xl']} ${spacing['2xl']}`,
});

// BottomSheetHeader Styles
export const bottomSheetHeaderWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const BottomSheetHeaderBtn = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing.xs,
});

//BottomSheetButtonSection
export const bottomSheetButtonSection = style({
  display: 'flex',
  width: '100%',
  gap: spacing.sm,
});
