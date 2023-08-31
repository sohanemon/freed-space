import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';
import Img from '@/components/ui/img';
import { Placeholder } from '@/components/ui/placeholder';
import { Text } from '@/components/ui/text';

interface HeroProps extends ComponentProps<'div'> {}

export default function Hero({ className, ...props }: HeroProps) {
  return (
    <>
      <div className={cn('', className, {})} {...props}>
        <Text center intent={'heading'}>
          Hua ZangNET COLLECTIONFOR YOU World Yuan UniverseThree Holy Halls
        </Text>
        <Text center variant="lg/default/mutedBlack" className="mt-5">
          Discover NFTs by category, track the latest drops and follow the
          collections you love. Enjoyit
        </Text>
        <Img src="/public/assets/images/gods.svg" />
      </div>
    </>
  );
}
