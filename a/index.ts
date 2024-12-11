import { createTV } from 'tailwind-variants';

export const tv = createTV({});

export const MyType = tv({
  base: '',
  variants: {
    look: {
      default: 'fill-current',
    },
  },
});

export { type VariantProps } from 'tailwind-variants';
