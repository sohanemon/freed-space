import { ComponentProps } from 'react';
import Img from '@sohanemon/next-image';
import { cn } from '@sohanemon/utils';

import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

interface CtaProps extends ComponentProps<'div'> {}

export default function Cta({ className, ...props }: CtaProps) {
  return (
    <div className={cn('relative z-10 bg-white', className)} {...props}>
      <section className="pb2 container flex items-center gap-10 pb-20 pt-40 max-md:flex-wrap">
        <div className="max-w-lg">
          <Text intent={'title'} className="mb-5 text-[40px] text-black ">
            Resourcies For You Getting Started
          </Text>
          <Text variant="default/default/mutedBlack">
            Lorem ipsum dolor sit amet, consectelur adipisicing elit, sed
            deciusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad nminim veniam, quis nostrud exercitation ullamco laboris
            nisl ut aliquip ex ea commodo consequat you have to understand this.
          </Text>
          <Button className="mt-10 rounded-lg">VIEW MORE</Button>
        </div>
        <div className="relative z-10">
          <Img
            src="/public/assets/images/video.png"
            aspectRatio="716/394"
            className="w-[clamp(600px,50vw,700px)]"
          />
          <div className="absolute inset-0 m-auto h-fit w-24">
            <div className="absolute inset-0 animate-ping rounded-full border border-white/50 delay-300 duration-500" />
            <div className="absolute inset-4 animate-ping rounded-full border border-white/50 duration-500" />
            <Img src="/public/assets/images/play.svg" />
          </div>
        </div>
      </section>
      <div className="absolute bottom-0 right-0 h-[88%]  w-1/2 rounded-tl-[150px] bg-[#6DA985]" />
    </div>
  );
}
