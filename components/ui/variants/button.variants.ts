import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  ],
  {
    variants: {
      intent: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        accent:
          'bg-accent font-normal text-accent-foreground hover:bg-accent/90 ',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 underline text-foreground',
      },
      size: {
        default: 'h-10 py-2 px-8',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
  }
);
