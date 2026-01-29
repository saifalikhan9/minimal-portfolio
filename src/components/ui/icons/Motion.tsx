import { cn } from "@/src/lib/utils";

export default function Motion({ className }: { className?: string }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        className={cn("bg-[#fef62a] fill-black size-5 p-1 rounded  ",className) }
        fill="currentColor"
      >
        <path d="M22.684 0h84.253v42.667H64.81L22.684 0Zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333V42.667Z"></path>
      </svg>
    );
  }
  