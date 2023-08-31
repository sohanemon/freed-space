import { Img } from '@sohanemon/next-image';
import { ImgProps } from '@sohanemon/next-image/dist/types/img.type';

export const Images = {
  lotusSm: (props: Omit<ImgProps, 'src'>) => (
    <Img
      {...props}
      src="/public/assets/images/lotus1.svg"
      aspectRatio="175/103"
    />
  ),
  lotusLg: (props: Omit<ImgProps, 'src'>) => (
    <Img
      {...props}
      src="/public/assets/images/lotus-lg.svg"
      aspectRatio="321/256"
    />
  ),
  lotusXl: (props: Omit<ImgProps, 'src'>) => (
    <Img
      {...props}
      src="/public/assets/images/lotus-xl.svg"
      aspectRatio="524/236 "
    />
  ),
  lotusCouple: (props: Omit<ImgProps, 'src'>) => (
    <Img
      {...props}
      src="/public/assets/images/lotus-couple.svg"
      aspectRatio="202/311"
    />
  ),
};
