import { primitiveColors } from './colors';

export const semanticColors = {
  text: {
    primary: primitiveColors.gray[800],
    secondary: primitiveColors.gray[500],
    tertiary: primitiveColors.gray[300],
    disabled: primitiveColors.gray[200],
    brand: primitiveColors.primary[500],
    onBrand: primitiveColors.gray[0],
    onDisabled: primitiveColors.gray[400],
    status: {
      success: primitiveColors.green[300],
      warning: primitiveColors.yellow[400],
      danger: primitiveColors.red[500],
    },
    accent: {
      blue: {
        subtle: primitiveColors.blue[400],
        default: primitiveColors.gray[0],
      },
      green: {
        subtle: primitiveColors.green[400],
        default: primitiveColors.gray[0],
      },
      yellow: {
        subtle: primitiveColors.yellow[400],
        default: primitiveColors.gray[0],
      },
    },
  },
  border: {
    danger: primitiveColors.red[500],
    brand: primitiveColors.green[300],
    default: primitiveColors.gray[200],
    strong: primitiveColors.gray[800],
  },
  icon: {
    primary: primitiveColors.gray[0],
    secondary: primitiveColors.gray[800],
    subtle: primitiveColors.gray[300],
    brand: primitiveColors.primary[500],
    onBrand: primitiveColors.gray[0],
    disabled: primitiveColors.gray[400],
  },
  bg: {
    base: primitiveColors.gray[50],
    none: 'transparent',
    brand: {
      default: primitiveColors.primary[500],
      hover: primitiveColors.primary[600],
      active: primitiveColors.primary[700],
      subtle: primitiveColors.primary[100],
    },
    neutral: {
      default: primitiveColors.gray[100],
      hover: primitiveColors.gray[200],
      active: primitiveColors.gray[300],
    },
    surface: {
      primary: {
        default: primitiveColors.gray[800],
        hover: primitiveColors.gray[900],
        active: primitiveColors.gray[950],
      },
      secondary: {
        default: primitiveColors.gray[0],
        hover: primitiveColors.gray[50],
        active: primitiveColors.gray[100],
      },
    },
    disable: primitiveColors.gray[100],
    accent: {
      blue: {
        default: primitiveColors.blue[300],
        subtle: primitiveColors.blue[200],
      },
      green: {
        default: primitiveColors.green[300],
        subtle: primitiveColors.green[100],
      },
      yellow: {
        default: primitiveColors.yellow[200],
        subtle: primitiveColors.yellow[50],
      },
    },
    status: {
      success: primitiveColors.green[50],
      warning: primitiveColors.yellow[50],
      danger: primitiveColors.red[50],
    },
  },
  indicator: {
    default: primitiveColors.gray[100],
    active: primitiveColors.primary[500],
    success: primitiveColors.green[200],
    disable: primitiveColors.gray[200],
  },
} as const;

export type SemanticColors = typeof semanticColors;
