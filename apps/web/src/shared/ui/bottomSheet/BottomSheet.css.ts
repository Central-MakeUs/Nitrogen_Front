import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../theme.css';

export const backdrop = recipe({
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
  },
  variants: {
    transparent: {
      true: {
        backgroundColor: 'transparent',
      },
      false: {
        backgroundColor: vars.color.bg.overlay,
      },
    },
  },
  defaultVariants: {
    transparent: false,
  },
});

export const wrapper = style({
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 60,
  maxWidth: '768px',
  margin: '0 auto',
});
