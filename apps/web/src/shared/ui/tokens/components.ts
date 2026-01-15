import { semanticColors } from './semantic';
import { spacing, radius } from './spacing';
import { primitiveColors } from './colors';

export const buttonTokens = {
  radius: {
    default: radius.sm,
  },
  color: {
    bg: {
      primary: {
        default: semanticColors.bg.surface.primary.default,
        hover: semanticColors.bg.surface.primary.hover,
        active: semanticColors.bg.surface.primary.active,
      },
      secondary: {
        default: semanticColors.bg.surface.secondary.default,
        hover: semanticColors.bg.surface.secondary.hover,
        active: semanticColors.bg.surface.secondary.active,
      },
      brand: {
        default: semanticColors.bg.brand.default,
        hover: semanticColors.bg.brand.hover,
        active: semanticColors.bg.brand.active,
      },
      disable: semanticColors.bg.disable,
    },
    text: {
      primary: {
        default: semanticColors.text.onBrand,
        hover: semanticColors.text.tertiary,
        active: semanticColors.text.tertiary,
      },
      secondary: {
        default: semanticColors.text.primary,
        hover: semanticColors.text.primary,
        active: semanticColors.text.primary,
      },
      onBrand: semanticColors.text.onBrand,
      disabled: semanticColors.text.onDisabled,
    },
    border: {
      default: semanticColors.border.default,
      hover: semanticColors.border.strong,
      active: semanticColors.border.strong,
      success: semanticColors.border.brand,
      danger: semanticColors.border.danger,
      brand: semanticColors.text.brand,
    },
    icon: {
      primary: {
        default: semanticColors.icon.primary,
        hover: semanticColors.icon.primary,
        active: semanticColors.icon.primary,
      },
      secondary: {
        default: semanticColors.icon.secondary,
        hover: semanticColors.icon.primary,
        active: semanticColors.icon.primary,
      },
      brand: {
        default: semanticColors.icon.primary,
        hover: semanticColors.icon.primary,
        active: semanticColors.icon.primary,
      },
    },
  },
  spacing: {
    gap: spacing.sm2,
    xDefault: spacing.sm2,
    yDefault: spacing.lg,
  },
  line: {
    default: radius.xs2,
  },
} as const;

export const badgeTokens = {
  color: primitiveColors.static.white,
  radius: {
    default: radius.xs2,
  },
  text: {
    size: {
      md: '0.75rem',
    },
  },
  spacing: {
    padding: {
      x: spacing.sm,
      y: spacing.xs,
    },
    gap: spacing.xs,
  },
} as const;

export const inputTokens = {
  color: primitiveColors.static.white,
  radius: {
    default: radius.sm,
  },
  text: {
    size: {
      md: '1rem',
    },
  },
  padding: {
    xDefault: spacing.sm2,
    yDefault: spacing.lg,
  },
} as const;

export const cardTokens = {
  color: {
    text: {
      primary: semanticColors.text.primary,
      secondary: semanticColors.text.secondary,
      tertiary: semanticColors.text.tertiary,
    },
    bg: {
      default: semanticColors.bg.surface.secondary.default,
      hover: semanticColors.bg.disable,
    },
  },
  padding: {
    xDefault: spacing['2xl'],
    yDefault: spacing.lg,
  },
} as const;

export const calendarTokens = {
  color: {
    bg: {
      default: 'transparent',
      active: semanticColors.bg.surface.secondary.default,
    },
    text: {
      primary: semanticColors.text.secondary,
      active: semanticColors.text.primary,
      secondary: semanticColors.text.tertiary,
    },
    brand: {
      default: semanticColors.bg.brand.default,
      active: semanticColors.bg.brand.default,
    },
    border: semanticColors.border.default,
  },
  spacing: {
    gap: spacing.xs2,
    gap2: spacing.sm,
    padding: {
      x: spacing.md,
      y: spacing.md,
    },
  },
  radius: {
    default: radius.xl,
  },
} as const;

export const toggleTokens = {
  color: {
    bg: {
      disable: 'transparent',
      base: semanticColors.bg.neutral.default,
      primary: {
        default: semanticColors.bg.surface.secondary.default,
        hover: semanticColors.bg.surface.secondary.hover,
        active: semanticColors.bg.surface.secondary.active,
      },
      secondary: {
        default: semanticColors.bg.neutral.default,
        hover: semanticColors.bg.neutral.hover,
        active: semanticColors.bg.surface.secondary.active,
      },
      brand: {
        default: semanticColors.bg.brand.default,
        hover: semanticColors.bg.brand.hover,
        active: semanticColors.bg.brand.active,
      },
    },
    icon: {
      primary: {
        default: semanticColors.icon.primary,
        hover: semanticColors.icon.primary,
        active: semanticColors.icon.primary,
      },
      secondary: {
        default: semanticColors.icon.secondary,
        hover: semanticColors.icon.primary,
        active: semanticColors.icon.primary,
      },
      brand: {
        default: semanticColors.icon.primary,
        hover: semanticColors.icon.primary,
        active: semanticColors.icon.primary,
      },
    },
    text: {
      primary: {
        default: semanticColors.text.onBrand,
        hover: semanticColors.text.tertiary,
        active: semanticColors.text.tertiary,
      },
      secondary: {
        default: semanticColors.text.primary,
        hover: semanticColors.text.primary,
        active: semanticColors.text.primary,
      },
      onBrand: semanticColors.text.onBrand,
      disabled: semanticColors.text.onDisabled,
    },
    border: {
      default: semanticColors.border.default,
      hover: semanticColors.border.strong,
      active: semanticColors.border.strong,
      active2: semanticColors.border.brand,
      danger: semanticColors.border.danger,
    },
  },
  radius: {
    default: radius.xs2,
  },
  spacing: {
    gap: spacing.sm2,
    xDefault: spacing.sm2,
    yDefault: spacing.lg,
  },
  line: {
    default: radius.xs2,
  },
} as const;

export const topbarTokens = {
  icon: {
    color: {
      default: semanticColors.icon.secondary,
    },
  },
  text: {
    color: {
      primary: semanticColors.text.primary,
    },
  },
} as const;

export const totalBarTokens = {
  padding: {
    xDefault: spacing.xl,
    yDefault: spacing.md,
  },
  color: {
    text: {
      primary: semanticColors.text.primary,
      secondary: semanticColors.text.secondary,
      tertiary: semanticColors.text.tertiary,
    },
    bg: {
      primary: semanticColors.bg.surface.secondary.default,
      secondary: semanticColors.bg.disable,
    },
  },
} as const;

export const navigationTokens = {
  item: {
    spacing: {
      radius: radius.full,
      xDefault: spacing['2xl'],
      xDefault2: spacing.md,
      gap: spacing.xs2,
    },
    color: {
      bg: {
        active: semanticColors.bg.surface.primary.default,
        hover: semanticColors.bg.surface.primary.hover,
        default: 'transparent',
      },
      icon: {
        active: semanticColors.icon.primary,
        default: semanticColors.icon.subtle,
      },
      text: {
        active: semanticColors.icon.primary,
        default: semanticColors.icon.subtle,
      },
    },
  },
  bar: {
    color: {
      bg: semanticColors.bg.base,
    },
    spacing: {
      radius: radius.full,
      xDefault: spacing.xs2,
      xDefault2: spacing.xs2,
      gap: radius.sm,
    },
  },
} as const;

export const pickerTokens = {
  color: {
    bg: {
      active: semanticColors.bg.neutral.default,
      default: 'transparent',
    },
    text: {
      active: semanticColors.text.primary,
      default: semanticColors.text.secondary,
    },
  },
  radius: {
    corner: radius.sm2,
  },
} as const;

export const chipsTokens = {
  color: {
    bg: semanticColors.bg.surface.secondary.default,
    text: {
      default: semanticColors.text.secondary,
    },
    border: semanticColors.border.default,
  },
  radius: {
    default: radius.full,
  },
  spacing: {
    padding: {
      x: spacing.sm2,
      y: spacing.xs2,
    },
    gap: spacing.xs,
  },
} as const;

export type ButtonTokens = typeof buttonTokens;
export type BadgeTokens = typeof badgeTokens;
export type InputTokens = typeof inputTokens;
export type CardTokens = typeof cardTokens;
export type CalendarTokens = typeof calendarTokens;
export type ToggleTokens = typeof toggleTokens;
export type TopbarTokens = typeof topbarTokens;
export type TotalBarTokens = typeof totalBarTokens;
export type NavigationTokens = typeof navigationTokens;
export type PickerTokens = typeof pickerTokens;
export type ChipsTokens = typeof chipsTokens;
