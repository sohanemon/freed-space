import { ImgProps } from '@/types/img.type';

import Img from './img';

export async function Placeholder({ src, ...props }: ImgProps) {
  let buffer: ArrayBuffer;

  if (src.startsWith('http')) {
    const res = await fetch(src);
    buffer = await res.arrayBuffer();
  } else {
    buffer = await (await import('fs/promises')).readFile('.' + src);
  }

  const { base64 } = await (
    await import('plaiceholder')
  ).getPlaiceholder(Buffer.from(buffer));

  return (
    <Img
      src={src}
      placeholderProps={{ placeholder: 'blur', blurDataURL: base64 }}
      {...props}
    />
  );
}
