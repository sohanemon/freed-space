import { forwardRef } from 'react';
import { cn } from '@sohanemon/utils';

import { TextProps, TextVariantsType } from '@/types/text.types';

import { textVariants } from './variants/text.variants';

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      className,
      as,
      center,
      variant = 'default/default/default',
      intent,
      ...props
    },
    ref
  ) => {
    const [size, weight, color] = intent
      ? []
      : (variant?.split('/') as [
          TextVariantsType['size'],
          TextVariantsType['weight'],
          TextVariantsType['color']
        ]);
    const Comp = as || 'p';
    return (
      <Comp
        className={cn(
          textVariants({ color, size, weight, intent, className }),
          { 'text-center mx-auto': center }
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

export { Text, textVariants };
