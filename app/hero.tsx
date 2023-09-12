import Img from '@sohanemon/next-image';
import { cn } from '@sohanemon/utils';
import { ComponentProps } from 'react';

import { Text } from '@/components/ui/text';

interface HeroProps extends ComponentProps<'div'> {}

export default function Hero({ className, ...props }: HeroProps) {
  return (
    <section className="bg-secondary pt-32">
      <div className={cn('', className, {})} {...props}>
        <Text center intent={'heading'}>
          Hua ZangNET COLLECTIONFOR YOU World Yuan UniverseThree Holy Halls
        </Text>
        <Text center variant="lg/default/mutedBlack" className="mt-5 max-md:text-base">
          Discover NFTs by category, track the latest drops and follow the
          collections you love. Enjoyit
        </Text>

        <Img src="/public/assets/images/gods.svg" aspectRatio="1109/641" />
      </div>
    </section>
  );
}
