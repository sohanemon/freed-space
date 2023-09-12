import { cva } from 'class-variance-authority';

export const textVariants = cva([], {
  variants: {
    color: {
      default: 'text-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary',
      black: 'text-black',
      muted: 'text-muted/60',
      mutedBlack: 'text-black text-opacity-60',
    },
    intent: {
      heading: 'md:text-6xl text-2xl font-semibold md:leading-[74px] text-primary ',
      title: ' text-white text-2xl md:text-[50px] font-semibold uppercase',
    },
    size: {
      sm: 'text-xs leading-normal ',
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
