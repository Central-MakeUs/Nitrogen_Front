import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '0.8rem 1.8rem',
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  width: '100%',
  alignItems: 'center',
});

export const leftSection = style({
  justifySelf: 'start',
});

export const centerSection = style({
  justifySelf: 'center',
});

export const rightSection = style({
  justifySelf: 'end',
});
