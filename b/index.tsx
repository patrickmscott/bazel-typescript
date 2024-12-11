import * as React from 'react';
import { MyType, type VariantProps } from '@bazeltesting/a';

export type AnotherType = VariantProps<typeof MyType>;

const Icon = React.forwardRef<SVGSVGElement, AnotherType>(
  ({...props}, ref) => {
    return (
      <svg></svg>
    );
  }
);
