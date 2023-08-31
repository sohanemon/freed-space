import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Images } from '@/components/images';

interface CategoriesProps extends ComponentProps<'div'> {}

export default function Categories({ className, ...props }: CategoriesProps) {
  return (
    <div className={cn('container relative', className)} {...props}>
      <Text center intent={'title'}>
        NFT All Categories
      </Text>
      <Images.lotusSm className="absolute inset-x-0 -top-4 m-auto w-[175px]" />
      <div className="my-14  flex justify-center gap-4">
        <Images.lotusLg className="absolute left-0 top-16 w-[321px] -translate-x-1/2" />
        <Button variant="sm/accent" className="px-7 uppercase">
          all
        </Button>
        {tabs.map((el) => (
          <Button variant="sm/outline" className="min-w-[80px] px-3 uppercase">
            {el}
          </Button>
        ))}
      </div>
    </div>
  );
}

const tabs = ['ordinary', 'high quality', 'rare', 'legend', 'more+'];
