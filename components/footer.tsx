import { ComponentProps } from 'react';
import Link from 'next/link';
import Img from '@sohanemon/next-image';
import { cn } from '@sohanemon/utils';

import { siteConfig } from '@/config/site';

import Brand from './brand';
import { Text } from './ui/text';

interface FooterProps extends ComponentProps<'div'> {}

export default function Footer({ className, ...props }: FooterProps) {
  return (
    <div className="relative">
      <div className={cn('bg-secondary  py-10', className)} {...props}>
        <Img
          src="/public/assets/images/lotus-footer.svg"
          aspectRatio="558/328"
          className="absolute inset-x-0 bottom-0 mx-auto w-[500px] opacity-5"
        />
        <Brand className="mb-12 block text-center text-black" />
        <div className="flex items-center justify-center gap-12">
          {siteConfig.nav.map((navItem) => (
            <Link href={navItem.href} key={navItem.title}>
              <Text className="uppercase text-black">{navItem.title}</Text>
            </Link>
          ))}
        </div>
        <hr className="my-10 border-black/10" />
        <Text center variant="sm/default/black">
          @2022NFT. All rights reserved{' '}
        </Text>
      </div>
    </div>
  );
}
