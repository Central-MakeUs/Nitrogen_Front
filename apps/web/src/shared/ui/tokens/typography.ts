export const fontFamily = {
  suit: '"SUIT", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
} as const;

export const fontWeight = {
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const fontSize = {
  b1: '0.6875rem',
  b2: '0.75rem',
  b3: '0.875rem',
  b4: '1rem',
  b5: '1.125rem',
  h1: '0.75rem',
  h2: '0.875rem',
  h3: '1rem',
  h4: '1.125rem',
  t1: '1.25rem',
  t2: '1.375rem',
  t3: '1.625rem',
  t4: '2rem',
} as const;

export const lineHeight = {
  b1: '0.825rem',
  b2: '1.2rem',
  b3: '1.225rem',
  b4: '1.2rem',
  b5: '1.35rem',
  h1: '0.936rem',
  h2: '1.092rem',
  h3: '1.248rem',
  h4: '1.404rem',
  t1: '1.5rem',
  t2: '1.7875rem',
  t3: '2.275rem',
  t4: '2.4rem',
} as const;

export const letterSpacing = {
  none: '0',
  tight: '-0.01rem',
} as const;

export const typography = {
  title: {
    t4: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: '2.4rem',
      letterSpacing: '0',
      fontFamily: fontFamily.suit,
    },
    t3: {
      fontSize: '1.625rem',
      fontWeight: 700,
      lineHeight: '2.275rem',
      letterSpacing: '0',
      fontFamily: fontFamily.suit,
    },
    t2: {
      fontSize: '1.375rem',
      fontWeight: 700,
      lineHeight: '1.7875rem',
      letterSpacing: '0',
      fontFamily: fontFamily.suit,
    },
    t1: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: '1.5rem',
      letterSpacing: '0',
      fontFamily: fontFamily.suit,
    },
  },
  head: {
    h4: {
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: '1.404rem',
      letterSpacing: '-0.01125rem',
      fontFamily: fontFamily.suit,
    },
    h3: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '1.248rem',
      letterSpacing: '-0.01rem',
      fontFamily: fontFamily.suit,
    },
    h2: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: '1.092rem',
      letterSpacing: '-0.00875rem',
      fontFamily: fontFamily.suit,
    },
    h1: {
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: '0.936rem',
      letterSpacing: '-0.0075rem',
      fontFamily: fontFamily.suit,
    },
  },
  body: {
    b5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: '1.35rem',
      letterSpacing: '-0.01125rem',
      fontFamily: fontFamily.suit,
    },
    b4: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '1.2rem',
      letterSpacing: '-0.01rem',
      fontFamily: fontFamily.suit,
    },
    b3: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.225rem',
      letterSpacing: '-0.00875rem',
      fontFamily: fontFamily.suit,
    },
    b2: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: '1.2rem',
      letterSpacing: '-0.0075rem',
      fontFamily: fontFamily.suit,
    },
    b1: {
      fontSize: '0.6875rem',
      fontWeight: 500,
      lineHeight: '0.825rem',
      letterSpacing: '-0.006875rem',
      fontFamily: fontFamily.suit,
    },
  },
} as const;

export type Typography = typeof typography;
export type FontSize = typeof fontSize;
export type FontWeight = typeof fontWeight;
