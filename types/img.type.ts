import { HTMLAttributes } from 'react';

export interface ImgProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
  aspectRatio?: `${number}/${number}`;
  imageClassName?: string;
  placeholderProps?: {};
  loading?: 'lazy' | 'eager';
}
