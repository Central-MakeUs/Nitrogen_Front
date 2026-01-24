import { style } from '@vanilla-extract/css';
import { spacing } from '../../theme.css';

export const baseBottomSheetTemplate = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.md,
});

export const content = style({
  flex: 1,
  overflowY: 'auto',
  padding: `0 ${spacing['2xl']} ${spacing['2xl']}`,
});

// BottomSheetHeader Styles
export const bottomSheetHeaderWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const headerIcon = style({
  width: '2.4rem',
  height: '2.4rem',
});

export const BottomSheetHeaderBtn = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing.xs,
  whiteSpace: 'nowrap',
  border: 'none',
});

//BottomSheetButtonSection
export const bottomSheetButtonSection = style({
  display: 'flex',
  width: '100%',
  gap: spacing.sm,
});
