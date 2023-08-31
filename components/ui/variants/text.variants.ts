import { cva } from 'class-variance-authority';

export const textVariants = cva([], {
  variants: {
    color: {
      default: 'text-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary',
      muted: 'text-muted',
      mutedBlack: 'text-black text-opacity-60',
    },
    intent: {
      heading: 'text-6xl font-semibold leading-[74px] text-primary ',
      title: ' text-white text-[50px] font-semibold uppercase',
    },
    size: {
      sm: 'text-xs ',
      default: 'text-base ',
      lg: 'text-xl ',
      xl: 'text-2xl ',
    },
    weight: {
      default: 'font-normal',
      light: 'font-light',
      medium: 'font-medium md:font-semibold',
      bold: 'font-bold',
    },
  },
});
