import { ComponentProps } from 'react';
import { cn } from '@sohanemon/utils';

import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import CategoryCard from '@/components/category-card';
import { Images } from '@/components/images';
import Pagination from '@/components/pagination';

interface CategoriesProps extends ComponentProps<'div'> {}

export default function Categories({ className, ...props }: CategoriesProps) {
  return (
    <div className={cn('container relative', className)} {...props}>
      <Text center intent={'title'}>
        NFT All Categories
      </Text>
      <Images.lotusSm className="absolute inset-x-0 -top-4 m-auto w-28 md:w-[175px]" />
      <div className="my-14  flex flex-wrap justify-center gap-4">
        <Images.lotusLg className="absolute left-0 top-16  w-[321px] -translate-x-1/2" />
        <Button variant="sm/accent" className="px-7 uppercase">
          all
        </Button>

        {tabs.map((el) => (
          <Button variant="sm/outline" className="min-w-[80px] px-3 uppercase">
            {el}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8  md:grid-cols-3 lg:grid-cols-4">
        {cards.map((el) => (
          <CategoryCard {...el} key={el.idx} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

const tabs = ['ordinary', 'high quality', 'rare', 'legend', 'more+'];

const cards = [
  {
    idx: 1,
    label: '朱砂',
    text: '相传是流动的金属，翻译音译叫力泥，实际上叫做流铁。因拥有着自己的意识..',
    bg: '#7E19FF',
  },
  {
    idx: 2,
    label: '赤霄',
    text: '相传是流动的金属，翻译音译叫力泥，实际上叫做流铁。因拥有着自己的意识..',
    bg: '#1983FF',
  },
  {
    idx: 3,
    label: '大紫草',
    text: '相传是流动的金属，翻译音译叫力泥，实际上叫做流铁。因拥有着自己的意识..',
    bg: '#FFAC0D',
    textcolor: '#000000',
  },
  {
    idx: 4,
    label: '黄芪',
    text: '相传是流动的金属，翻译音译叫力泥，实际上叫做流铁。因拥有着自己的意识..',
    bg: '#EEEEEE',
    textcolor: '#333333',
  },

  {
    idx: 4,
    label: '黄芪',
    text: '相传是流动的金属，翻译音译叫力泥，实际上叫做流铁。因拥有着自己的意识..',
    bg: '#EEEEEE',
    textcolor: '#333333',
  },
  {
    idx: 3,
    label: '大紫草',
    text: '相传是流动的金属，翻译音译叫力泥，实际上叫做流铁。因拥有着自己的意识..',
    bg: '#FFAC0D',
    textcolor: '#000000',
  },
  {
    idx: 1,
    label: '朱砂',
    text: '相传是流动的金属，翻译音译叫力泥，实际上叫做流铁。因拥有着自己的意识..',
    bg: '#7E19FF',
  },
  {
    idx: 2,
    label: '赤霄',
    text: '相传是流动的金属，翻译音译叫力泥，实际上叫做流铁。因拥有着自己的意识..',
    bg: '#1983FF',
  },

  {
    idx: 4,
    label: '黄芪',
    text: '相传是流动的金属，翻译音译叫力泥，实际上叫做流铁。因拥有着自己的意识..',
    bg: '#EEEEEE',
    textcolor: '#333333',
  },
  {
    idx: 1,
    label: '朱砂',
    text: '相传是流动的金属，翻译音译叫力泥，实际上叫做流铁。因拥有着自己的意识..',
    bg: '#7E19FF',
  },
  {
    idx: 3,
    label: '大紫草',
    text: '相传是流动的金属，翻译音译叫力泥，实际上叫做流铁。因拥有着自己的意识..',
    bg: '#FFAC0D',
    textcolor: '#000000',
  },
  {
    idx: 2,
    label: '赤霄',
    text: '相传是流动的金属，翻译音译叫力泥，实际上叫做流铁。因拥有着自己的意识..',
    bg: '#1983FF',
  },
];
