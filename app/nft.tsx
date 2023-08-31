import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Icons } from '@/components/icons';
import NftCard from '@/components/nft-card';

interface NftProps extends ComponentProps<'div'> {}

export default function Nft({ className, ...props }: NftProps) {
  return (
    <div
      className={cn('container flex items-center gap-10', className, {})}
      {...props}
    >
      <div className="max-w-xs">
        <Icons.bell className="mb-2.5 w-14" />
        <Text intent={'title'}>Synthetic NFT</Text>
        <Text variant="sm/default/muted" className="mb-10 mt-4">
          By obtaining fragmented NFTs, the final synthesis of a complete spell
          NFT
        </Text>
        <Button variant="default/accent">VIEW MORE</Button>
      </div>
      <div className="grid grow grid-cols-3 gap-4">
        {Array.from(Array(3)).map((el) => (
          <NftCard key={el} />
        ))}
      </div>
    </div>
  );
}
