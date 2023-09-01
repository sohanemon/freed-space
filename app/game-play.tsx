import { ComponentProps } from 'react';
import { cn } from '@sohanemon/utils';

import { Text } from '@/components/ui/text';
import { Images } from '@/components/images';

interface GamePlayProps extends ComponentProps<'div'> {}

export default function GamePlay({ className, ...props }: GamePlayProps) {
  return (
    <center className="mx-auto max-w-[1800px] translate-x-0 translate-y-0">
      <div className={cn('container relative', className)} {...props}>
        <Text center intent={'title'}>
          Introduction to gameplay
        </Text>
        <Images.lotusSm className="absolute inset-x-0 -top-4 m-auto w-[175px]" />
        <Images.lotusXl className="fixed -top-16  right-0 m-auto w-[524px]" />
        compt
      </div>
    </center>
  );
}
