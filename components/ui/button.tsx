import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-ink px-5 py-3 text-canvas hover:bg-[#263142] dark:bg-white dark:text-[#111827] dark:hover:bg-[#E5E7EB]',
        secondary:
          'border border-line bg-transparent px-5 py-3 text-ink hover:border-[#CBD5E1] hover:bg-surface dark:hover:border-[#4B5563]',
        quiet: 'px-3 py-2 text-muted hover:bg-surface hover:text-ink',
        accent:
          'bg-[var(--accent-strong)] px-6 py-3 text-white shadow-none transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]',
      },
      size: {
        default: 'h-11',
        sm: 'h-9 px-4 text-xs',
        icon: 'size-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
