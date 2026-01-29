import { cn } from "@/src/lib/utils";

type QuoteProps = {
  text: string;
  author?: string;
  source?: string;
  className?: string;
};

export function Quote({ text, author, source, className }: QuoteProps) {
  return (
    <figure
      className={cn(
        "bg-secondary/10 text-forground/80 relative overflow-hidden rounded-2xl border border-neutral-800/60 px-6 py-5 text-sm shadow-[0_18px_20px_-20px_rgba(0,0,0,0.7)] dark:border-neutral-700/80 dark:bg-neutral-900/60",
        className,
      )}
    >
      <span className="pointer-events-none absolute top-0 left-4 font-serif text-8xl text-neutral-700/30 select-none dark:text-neutral-600/30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon icon-tabler icons-tabler-filled icon-tabler-quote size-22 rotate-180"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z" />
          <path d="M18 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z" />
        </svg>
      </span>
      <blockquote className="text-forground relative pr-4 text-base leading-relaxed italic">
        {text}
      </blockquote>
      {(author || source) && (
        <figcaption className="text-muted-forground relative mt-4 text-right text-xs font-medium">
          {author && <span className="italic">{author}</span>}
          {author && source && <span>, </span>}
          {source && <span>{source}</span>}
        </figcaption>
      )}
    </figure>
  );
}
