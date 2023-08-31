import Image from 'next/image';

import { ImgProps } from '@/types/img.type';
import { cleanSrc, cn } from '@/lib/utils';

export default function Img({
  className,
  imageClassName,
  src,
  placeholderProps,
  children,
  ratio,
  ...props
}: ImgProps) {
  return (
    <div
      style={{ aspectRatio: ratio || '1/1' }}
      className={cn('relative w-full overflow-hidden', className)}
      {...props}
    >
      <Image
        src={cleanSrc(src!)}
        className={cn(
          'object-contain',
          { 'object-cover': ratio },
          imageClassName
        )}
        alt={props.alt || ''}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...placeholderProps}
      />
    </div>
  );
}
