import Image from 'next/image';

import { ImgProps } from '@/types/img.type';
import { cleanSrc, cn } from '@/lib/utils';

export default function Img({
  className,
  imageClassName,
  src,
  placeholderProps,
  children,
  ...props
}: ImgProps) {
  return (
    <div
      className={cn('relative aspect-square w-full overflow-hidden', className)}
      {...props}
    >
      <Image
        src={cleanSrc(src!)}
        className={cn('object-contain', imageClassName)}
        alt={props.alt || ''}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...placeholderProps}
      />
    </div>
  );
}
