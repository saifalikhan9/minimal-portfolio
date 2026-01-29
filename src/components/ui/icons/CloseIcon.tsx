import { motion } from "motion/react";
import React from "react";

type CloseIconProps = React.ComponentProps<typeof motion.svg> & {
  isOpen?: boolean;
};

export function CloseIcon({ isOpen = false, ...rest }: CloseIconProps) {
  return (
    <motion.svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24 "
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path
        className={"rotate:0"}
        initial={false}
        animate={isOpen ? { rotate: 0, y: 0 } : { rotate: 45, y: -3.5 }}
        transition={{ duration: 0.2 }}
        d="M18 6l-12 12"
      />
      <motion.path
        initial={false}
        animate={isOpen ? { rotate: 0, y: 0 } : { rotate: -45, y: 3.5 }}
        transition={{ duration: 0.2 }}
        d="M6 6l12 12"
      />
    </motion.svg>
  );
}
