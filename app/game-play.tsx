import { ComponentProps } from 'react';
import { cn } from '@sohanemon/utils';

import { Text } from '@/components/ui/text';

interface GamePlayProps extends ComponentProps<'div'> {}

export default function GamePlay({ className, ...props }: GamePlayProps) {
  return (
    <div className={cn('container relative', className)} {...props}>
      <Text center intent={'title'}>
        NFT All Categories
      </Text>
    </div>
  );
}
