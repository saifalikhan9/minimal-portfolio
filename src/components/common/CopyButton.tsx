"use client";

import { useState } from "react";
import { IconCopy, IconCheck } from "@tabler/icons-react";

export const CodeCopyButton = ({ code }: { code: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      // Minimal styling: transparent by default, subtle background on hover
      className="flex h-8 w-8 items-center justify-center rounded-md text-white/40 transition-all duration-200 hover:bg-white/10 hover:text-white"
      aria-label="Copy code"
    >
      {isCopied ? <IconCheck size={18} /> : <IconCopy size={18} />}
    </button>
  );
};