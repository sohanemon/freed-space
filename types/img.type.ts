import { HTMLAttributes } from 'react';

export interface ImgProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
  ratio?: `${number}/${number}`;
  imageClassName?: string;
  placeholderProps?: {};
  loading?: 'lazy' | 'eager';
}
