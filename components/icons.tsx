import { Img } from '@sohanemon/next-image';
import { IconProps } from '@sohanemon/next-image/dist/types/img.type';
import { AlignJustify, X } from 'lucide-react';

export const Icons = {
  menu: AlignJustify,
  x: X,
  bell: (props: IconProps) => (
    <Img {...props} src="/public/assets/images/bell.svg" aspectRatio="54/54" />
  ),
};
