import { AlignJustify, LucideProps, X } from 'lucide-react';

import { IconProps, ImgProps } from '@/types/img.type';

import Img from './ui/img';

export const Icons = {
  menu: AlignJustify,
  x: X,
  bell: (props: IconProps) => (
    <Img {...props} src="/public/assets/images/bell.svg" aspectRatio="54/54" />
  ),
};
