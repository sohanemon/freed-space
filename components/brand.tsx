import { HtmlHTMLAttributes } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface CompType {}

export default function Brand({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLAnchorElement> & CompType) {
  return (
    <Link href={'/'} {...props} className={cn('text-xl', {}, className)}>
      logo
    </Link>
  );
}
