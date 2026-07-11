import { cn } from "@/src/lib/utils";
import React from "react";

export const SectionContainer = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"section">) => {
  return (
    <section className={cn("py-4 px-4 md:px-10", className)} {...props}>
      {children}
    </section>
  );
};
