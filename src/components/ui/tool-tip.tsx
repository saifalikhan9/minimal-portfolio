"use client";
import { useState, ReactNode } from "react";

type TooltipProps = {
  content: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
};

export const Tooltip = ({
  content,
  children,
  position = "top",
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const positionClasses: Record<string, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <span
      className="relative z-20 mx-1 inline-flex size-6 items-center justify-center transition-all duration-300 ease-in-out hover:scale-120"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {visible && (
        <span
          className={`bg-forground text-primary absolute z-50 rounded-md px-2 py-1 text-[0.6rem] whitespace-nowrap shadow-md ${positionClasses[position]}`}
        >
          {content}
        </span>
      )}
    </span>
  );
};
