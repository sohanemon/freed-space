'use client';

import * as Accordion from '@radix-ui/react-accordion';
import * as Tabs from '@radix-ui/react-tabs';
import Motion from '@sohanemon/motion';
import Img from '@sohanemon/next-image';
import { cn } from '@sohanemon/utils';
import { ComponentProps, useState } from 'react';

import { Icons } from '@/components/icons';
import { Images } from '@/components/images';
import { Text } from '@/components/ui/text';

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
        <Images.lotusXl className="fixed -top-16 right-0 m-auto w-[524px] max-md:hidden" />
        <Images.lotusCouple className="absolute -bottom-1/3 right-full m-auto w-[202px]" />
        <Tabs.Root onValueChange={setTab} defaultValue={tabs[0].label}>
          <Tabs.List className="my-12 flex gap-4 max-md:flex-col md:gap-20">
            {tabs.map((el) => (
              <Tabs.Trigger
                className="group relative inline-flex items-center gap-2"
                value={el.label}
              >
                <el.icon className="group-aria-selected:text-accent w-7 text-white" />
                <Text
                  variant="lg/bold/default"
                  className="group-aria-selected:text-accent max-md:text-sm"
                >
                  {el.label}
                </Text>
                {el.label === tab && (
                  <Motion
                    layoutId="underline"
                    className="bg-accent absolute inset-x-0 -bottom-4 mx-auto h-1 w-12 rounded-full max-md:hidden max-md:text-sm "
                  />
                )}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <Tabs.Content
            value={tabs[0]?.label}
            className="grid grid-cols-1 items-center lg:grid-cols-2"
          >
            <Img src="/public/assets/images/house.png" aspectRatio="539/390" />
            <Accordion.Root
              defaultValue={accordion[0].label}
              type="single"
              className="space-y-8 pl-16"
            >
              <div className="absolute -ml-7 h-full  w-px  translate-y-10 bg-white/20" />
              {accordion.map((item) => (
                <Accordion.Item
                  value={item.label}
                  className="flex flex-col  gap-5"
                >
                  <Accordion.Trigger className="group flex w-full items-center justify-between">
                    <div className="group-data-[state=open]:ring-accent group-data-[state=open]:bg-primary absolute  -ml-8 aspect-square  h-2.5 w-2.5 rounded-full bg-[#6DA985] ring-[4px] ring-[#6DA985]" />
                    <Text variant="xl/bold/default">{item.label}</Text>{' '}
                    <Icons.chevron />
                  </Accordion.Trigger>
                  <Accordion.Content className="data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden text-left  transition-all">
                    {item.text}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Tabs.Content>
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

const accordion = [
  {
    label: '玩法一',
    text: '玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩',
  },
  {
    label: '玩法二',
    text: '玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩',
  },
  {
    label: '玩法三',
    text: '玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩法一的介绍玩',
  },
];
