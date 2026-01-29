import { cn } from "@/src/lib/utils";
import React from "react";

export const Container = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        "bg-primary dark:bg-primary  relative mx-auto w-full   md:max-w-4xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
