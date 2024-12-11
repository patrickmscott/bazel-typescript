import { tv } from './tv';

export { type VariantProps } from 'tailwind-variants';

export const iconClass = tv({
  base: '',
  variants: {
    look: {
      default: 'fill-current',
      gold: 'fill-icon-gold',
      info: 'fill-icon-info',
      warning: 'fill-icon-warning',
      success: 'fill-icon-success',
      inverted: 'fill-icon-neutral-inverted',
      muted: 'fill-icon-neutral-muted',
      primary: 'fill-icon-primary',
      attention: 'fill-icon-attention',
    },
    size: {
      // TODO: DESSYS either needs to support a smaller icon size
      // or update compositional components to not use size 12px icons
      xs: 'size-12 min-w-12',
      sm: 'size-icon-sm min-w-icon-sm',
      md: 'size-icon-md min-w-icon-md',
      lg: 'size-icon-lg min-w-icon-lg',
      xl: 'size-icon-xl min-w-icon-xl',
      '2xl': 'size-icon-2xl min-w-icon-2xl',
    },
    focusable: {
      true: '',
    },
  },
  compoundVariants: [
    {
      focusable: true,
      look: 'muted',
      class: [
        'focus-visible:fill-icon-primary group-focus-visible:fill-icon-primary',
        'hover:fill-icon-primary',
      ],
    },
  ],
  defaultVariants: {
    focusable: false,
    look: 'default',
    size: 'md',
  },
});
