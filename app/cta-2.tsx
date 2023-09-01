import { ComponentProps } from 'react';
import Img from '@sohanemon/next-image';
import { cn } from '@sohanemon/utils';

import { Button } from '@/components/ui/button';

interface Cta2Props extends ComponentProps<'div'> {}

export default function Cta2({ className, ...props }: Cta2Props) {
  return (
    <div className="translate-x-0">
      <Img
        src="/public/assets/images/lotus-round.svg"
        className="absolute bottom-0 left-8 w-[294px] translate-y-1/2"
      />
      <div
        className={cn(
          'container grid h-[400px] grid-cols-2 overflow-hidden rounded-3xl bg-white px-0',
          className
        )}
        {...props}
      >
        <div className="self-center px-20">
          <p className="text-[34px] font-semibold text-black">
            GET FREE COLLECTIONFOR FIRST TRANSACTION
          </p>
          <Button className="mt-10 rounded-lg">Join Now</Button>
        </div>
        <div className="bg-secondary origin-left scale-150 rounded-l-full" />
        <Img
          className=" fixed bottom-0 right-0 w-[430px] -translate-x-3/4  drop-shadow-2xl"
          aspectRatio="435/515"
          src="/public/assets/images/temple.svg"
        />
        ImI
      </div>
    </div>
  );
}
