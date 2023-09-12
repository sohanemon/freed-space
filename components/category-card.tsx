import { ComponentProps } from 'react';
import Img from '@sohanemon/next-image';
import { cn } from '@sohanemon/utils';

import { Button } from './ui/button';
import { Text } from './ui/text';

interface CategoryCardProps extends ComponentProps<'div'> {
  idx: number;
  label: string;
  text: string;
  bg: string;
  textcolor?: string;
}

export default function CategoryCard({
  className,
  ...props
}: CategoryCardProps) {
  return (
    <div className={cn('bg-card relative rounded-lg', className)} {...props}>
      <Img
        src="/public/assets/images/card-header.svg"
        className="absolute inset-0"
        aspectRatio="275/110"
      />
      <Text center variant="lg/bold/black" className="relative z-10 mt-6 ">
        赤霄
      </Text>
      <Img
        src={`/public/assets/images/element/${props.idx}.png`}
        className="mx-auto mb-4 mt-1 w-28 py-4"
      />
      <Button
        className="mx-auto block px-8"
        variant="sm/ghost"
        style={{
          color: props.textcolor,
          background: props.bg,
        }}
      >
        稀有
      </Button>
      <Text variant="default/default/mutedBlack" className="px-7 pb-7 pt-3.5">
        {props.text}
      </Text>
    </div>
  );
}
