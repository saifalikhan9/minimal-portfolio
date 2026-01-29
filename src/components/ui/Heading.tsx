"use client";
import React from "react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

export const Heading = ({
  children,
  className,
  as = "h1",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  const Tag = as;
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: -40 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <Tag
        className={cn(
         
          "text-forground text-shadow-2xs text-shadow-secondary/70 dark:text-forground px-4 md:px-10 text-3xl font-bold tracking-tighter drop-shadow-lg md:text-4xl",
         className)}
      >
        {children}
      </Tag>
    </motion.div>
  );
};
