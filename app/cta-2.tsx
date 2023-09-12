import Img from '@sohanemon/next-image';
import { cn } from '@sohanemon/utils';
import { ComponentProps } from 'react';

import { Button } from '@/components/ui/button';

interface Cta2Props extends ComponentProps<'div'> {}

export default function Cta2({ className, ...props }: Cta2Props) {
  return (
    <div className="mx-auto w-fit translate-x-0">
      <Img
        src="/public/assets/images/lotus-round.svg"
        className="absolute bottom-0 left-8 z-10 w-[294px] translate-y-1/2 max-md:hidden"
      />
      <div
        className={cn(
          'scrollbar-hidden container relative grid h-fit grid-cols-2 overflow-hidden rounded-3xl bg-white px-0 md:h-[400px]',
          className
        )}
        {...props}
      >
        <div className="self-center p-8 md:px-20">
          <p className="text-[34px] font-semibold text-black ">
            GET FREE COLLECTIONFOR FIRST TRANSACTION
          </p>
          <Button className="mt-4 rounded-lg md:mt-10">Join Now</Button>
        </div>
        <div className="bg-secondary origin-left scale-150 rounded-l-full max-md:hidden" />
        <Img
          className=" fixed bottom-0 w-[430px] drop-shadow-2xl max-md:hidden  md:right-12"
          aspectRatio="435/515"
          src="/public/assets/images/temple.svg"
        />
      </div>
    </div>
  );
}
