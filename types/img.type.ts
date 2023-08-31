import { HTMLAttributes } from 'react';

export interface ImgProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
  imageClassName?: string;
  placeholderProps?: {
    placeholder: string;
    blurDataURL: string;
  };
  loading?: 'lazy' | 'eager';
}
