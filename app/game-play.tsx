'use client';

import { ComponentProps } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Img from '@sohanemon/next-image';
import { cn } from '@sohanemon/utils';

import { Text } from '@/components/ui/text';
import { Images } from '@/components/images';

import Globe from '../public/assets/images/globe.svg';
import Plugin from '../public/assets/images/plugin.svg';

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
        <Tabs.Root>
          <Tabs.List className="my-8 space-x-20">
            {tabs.map((el) => (
              <Tabs.Trigger
                className="group inline-flex items-center gap-2"
                value={el.label}
              >
                {/* {el.icon} */}
                {/* <el.icon className="group-aria-selected:text-accent w-7 text-white" /> */}
                <Text
                  variant="lg/bold/default"
                  className="group-aria-selected:text-accent"
                >
                  {el.label}
                </Text>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <Tabs.Content value=""></Tabs.Content>
        </Tabs.Root>
      </div>
    </center>
  );
}

const tabs = [
  {
    label: 'Introduction to Huazang World',
    icon: <Globe />,
  },
  {
    label: 'Introduction to Fragment Gaming',
    icon: <Plugin />,
  },
];
