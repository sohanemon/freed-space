import Img from '@sohanemon/next-image';
import { IconProps } from '@sohanemon/next-image/dist/types/img.type';
import { AlignJustify, ChevronDown, X } from 'lucide-react';

export const Icons = {
  menu: AlignJustify,
  x: X,
  chevron: ChevronDown,
  bell: (props: IconProps) => (
    <Img {...props} src="/public/assets/images/bell.svg" />
  ),
  globe: (props: IconProps) => (
    <Img inject {...props} src="/public/assets/images/globe.svg" />
  ),
  plugin: (props: IconProps) => (
    <Img inject {...props} src="/public/assets/images/plugin.svg" />
  ),
};
