import plugin from 'tailwindcss/plugin';
import { type Config } from 'tailwindcss';

const fontSize = {
  sm: 'var(--fr-typography-font-size-sm)',
  md: 'var(--fr-typography-font-size-md)',
  lg: 'var(--fr-typography-font-size-lg)',
  xl: 'var(--fr-typography-font-size-xl)',
  '2xl': 'var(--fr-typography-font-size-2xl)',
  '3xl': 'var(--fr-typography-font-size-3xl)',
};

const lineHeight = {
  sm: 'var(--fr-typography-line-height-sm)',
  md: 'var(--fr-typography-line-height-md)',
  lg: 'var(--fr-typography-line-height-lg)',
  xl: 'var(--fr-typography-line-height-xl)',
  '2xl': 'var(--fr-typography-line-height-2xl)',
  '3xl': 'var(--fr-typography-line-height-2xl)',
};

const fontWeight = {
  regular: 'var(--fr-typography-font-weight-regular)',
  medium: 'var(--fr-typography-font-weight-medium)',
  semibold: 'var(--fr-typography-font-weight-semibold)',
  bold: 'var(--fr-typography-font-weight-bold)',
  // Aliases for ease of use
  body: 'var(--fr-typography-font-weight-body)',
  button: 'var(--fr-typography-font-weight-button)',
  heading: 'var(--fr-typography-font-weight-heading)',
};

const fontFamily = {
  sans: 'var(--fr-typography-font-sans)',
  code: 'var(--fr-typography-font-code)',
};

export const theme: Config['theme'] = {
  fontFamily,
  fontSize: {
    sm: [
      fontSize.sm,
      { lineHeight: lineHeight.sm, fontWeight: fontWeight.regular },
    ],
    md: [
      fontSize.md,
      { lineHeight: lineHeight.md, fontWeight: fontWeight.regular },
    ],
    lg: [
      fontSize.lg,
      { lineHeight: lineHeight.lg, fontWeight: fontWeight.regular },
    ],
    xl: [
      fontSize.xl,
      { lineHeight: lineHeight.xl, fontWeight: fontWeight.regular },
    ],
    '2xl': [
      fontSize['2xl'],
      { lineHeight: lineHeight['2xl'], fontWeight: fontWeight.regular },
    ],
    '3xl': [
      fontSize['3xl'],
      { lineHeight: lineHeight['3xl'], fontWeight: fontWeight.regular },
    ],
  },
  fontWeight,
  lineHeight,
  extend: {
    keyframes: {
      fade: {
        from: { opacity: '0' },
        to: { opacity: '1' },
      },
      zoom: {
        from: { transform: 'scale(0.9)' },
        to: { transform: 'scale(1)' },
      },
      'slide-left': {
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0)' },
      },
      'bg-blur': {
        from: {
          background: 'rgba(0 0 0 / 0)',
          'backdrop-filter': 'blur(0)',
        },
        to: {
          background: 'rgba(0 0 0 / .3)',
          'backdrop-filter': 'blur(4px)',
        },
      },
    },
  },
};

export const fractusPlugin = plugin(() => {}, {
  theme,
});
