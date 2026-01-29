"use client";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const badgeVariants = cva(
  " flex items-center  rounded-lg p-1 md:py-1 md:px-2 text-xs text-nowrap transition-all ease-in-out duration-300 ",
  {
    variants: {
      variant: {
        primary: "bg-primary shadow-custom dark:shadow-custom-dark",
        secondary: " bg-secondary shadow-custom dark:shadow-custom-dark",
        transparent: " p-0 md:px-0 mx-1 text-2xl hover:scale-120  ",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {}

function Badge({
  className,
  variant,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "relative inline-block",
        badgeVariants({ variant }),
        className,
      )}
      data-slot="badge"
      {...props}
    >
      {props.children}
    </span>
  );
}

export { Badge, badgeVariants };
