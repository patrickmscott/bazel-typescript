import * as React from 'react';
import { iconClass, type VariantProps } from '@bazeltesting/a';

export type AnotherType = VariantProps<typeof iconClass>;

const Icon = React.forwardRef<SVGSVGElement, AnotherType>(
  ({...props}, ref) => {
    return (
      <svg></svg>
    );
  }
);
