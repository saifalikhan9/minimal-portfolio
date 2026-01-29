import * as React from "react";
import { cn } from "@/src/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      type = "button",
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const base =
      "inline-flex transition-all duration-200 active:scale-90 text-sm items-center justify-center cursor-pointer rounded-lg px-3 py-2 text-shadow-2xs  transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variants = {
      primary:
        "bg-forground text-primary hover:bg-forground/90 text-shadow-primary/50 ",
      secondary: `text-shadow-secondary  text-forground
            bg-white/10 hover:bg-neutral-300 dark:bg-black/10 dark:hover:bg-neutral-900
            inset-shadow-[0_0px_4px_0px_var(--color-neutral-400),0_0px_2px_var(--color-neutral-400)] dark:ring dark:inset-shadow-[0px_0px_4px_1px_var(--color-neutral-500)] dark:ring-neutral-500`,
    };

    // If asChild is true, render a span (or any custom element) and forward props
    if (asChild) {
      // This pattern allows for using the <Button asChild as={Link}> pattern, but since we
      // don't use @radix-ui/react-slot here, we will just render a span.
      // If you want more flexibility (e.g. <Button asChild as={Link} ...>), consider using Slot from Radix UI.
      return (
        <span
          className={cn(base, variants[variant], className)}
          ref={ref as React.Ref<HTMLSpanElement>}
          {...props}
        >
          {children}
        </span>
      );
    }

    return (
      <button
        type={type}
        className={cn(base, variants[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
