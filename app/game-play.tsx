'use client';

import { ComponentProps, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Motion from '@sohanemon/motion';
import { cn } from '@sohanemon/utils';

import { Text } from '@/components/ui/text';
import { Icons } from '@/components/icons';
import { Images } from '@/components/images';

interface GamePlayProps extends ComponentProps<'div'> {}

export default function GamePlay({ className, ...props }: GamePlayProps) {
  const [tab, setTab] = useState(tabs[0].label);
  return (
    <center className="mx-auto max-w-[1800px] translate-x-0 translate-y-0">
      <div className={cn('container relative', className)} {...props}>
        <Text center intent={'title'}>
          Introduction to gameplay
        </Text>
        <Images.lotusSm className="absolute inset-x-0 -top-4 m-auto w-[175px]" />
        <Images.lotusXl className="[&>img]:object-con tain  fixed -top-16 right-0 m-auto w-[524px]" />
        <Tabs.Root onValueChange={setTab} defaultValue={tabs[0].label}>
          <Tabs.List className="my-8 space-x-20">
            {tabs.map((el) => (
              <Tabs.Trigger
                className="group relative inline-flex items-center gap-2"
                value={el.label}
              >
                <el.icon className="group-aria-selected:text-accent w-7 text-white" />
                <Text
                  variant="lg/bold/default"
                  className="group-aria-selected:text-accent"
                >
                  {el.label}
                </Text>
                {el.label === tab && (
                  <Motion
                    layoutId="underline"
                    className="bg-accent absolute inset-x-0 -bottom-4 mx-auto h-1 w-12 rounded-full "
                  />
                )}
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
    icon: Icons.globe,
  },
  {
    label: 'Introduction to Fragment Gaming',
    icon: Icons.plugin,
  },
];
