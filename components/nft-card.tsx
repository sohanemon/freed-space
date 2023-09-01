import { ComponentProps } from 'react';
import Img from '@sohanemon/next-image';
import { cn } from '@sohanemon/utils';

import { Text } from './ui/text';

interface NftCardProps extends ComponentProps<'div'> {}

export default function NftCard({ className, ...props }: NftCardProps) {
  return (
    <div className={cn('bg-card rounded-lg p-3.5', className)} {...props}>
      <Img src="/public/assets/images/roof.png" />
      <Text variant="lg/bold/black" className="mb-1 mt-4">
        平安符
      </Text>
      <Text variant="sm/default/mutedBlack">
        提高阳气辟邪循环，比较少见，比较珍贵，是高级版的朱砂
      </Text>
    </div>
  );
}
