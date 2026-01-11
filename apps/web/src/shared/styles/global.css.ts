import { globalStyle, globalFontFace } from '@vanilla-extract/css';
import '../ui/theme.css';

globalFontFace('SUIT', {
  src: 'url("/fonts/SUIT-Variable.woff2") format("woff2")',
  fontWeight: '100 900',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
});

globalStyle('html, body', {
  maxWidth: '100vw',
  overflowX: 'hidden',
  fontFamily: '"SUIT", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});
