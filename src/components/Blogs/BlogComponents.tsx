import Image from "next/image";
import React from "react";
import { Button } from "../ui/Button";
import { IconCopy } from "@tabler/icons-react";
import { CodeCopyButton } from "../common/CopyButton";

export const BlogComponents = {
  // Override default image component
  img: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={400}
      className="rounded-lg"
      {...props}
    />
  ),
  // Custom heading with better styling
  h1: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h1
      className="text-forground font-playfair mb-6 text-2xl font-bold md:text-3xl"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h2
      className="font-playfair text-forground mt-14 mb-5 text-2xl font-semibold tracking-tight md:text-3xl"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h3
      className="text-forground/80 mt-10 mb-3 text-xl font-medium tracking-tight md:text-2xl"
      {...props}
    >
      {children}
    </h3>
  ),
  // Custom paragraph styling
  p: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <p className="text-secondary mb-6 text-base leading-8" {...props}>
      {children}
    </p>
  ),
  // Custom list styling
  ul: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <ul
      className="mb-4 ml-6 list-disc space-y-2 text-base"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <ol
      className="mb-4 ml-6 list-decimal space-y-3 text-base"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <li className="text-secondary text-base leading-7" {...props}>
      {children}
    </li>
  ),
  pre: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => {
    const getTextContent = (node: React.ReactNode): string => {
      if (typeof node === "string") {
        return node;
      }
      if (typeof node === "number") {
        return String(node);
      }
      if (
        React.isValidElement(node) &&
        node.props &&
        typeof node.props === "object"
      ) {
        return getTextContent(
          (node.props as { children?: React.ReactNode }).children,
        );
      }
      if (Array.isArray(node)) {
        return node.map(getTextContent).join("");
      }
      return "";
    };

    const codeText = getTextContent(children);

    return (
      <div className="not-prose my-8">
        <div className="group shadow-custom border-secondary/20 relative rounded-lg border bg-neutral-300 p-1 dark:bg-neutral-900">
          <pre
            {...props}
            className="border-secondary/20 overflow-x-auto rounded-[7px] border bg-neutral-800 p-4 text-sm text-neutral-300 [&>code]:bg-transparent [&>code]:p-0"
          >
            {children}
          </pre>
          <div className="absolute top-2 right-2 h-fit">
            <CodeCopyButton code={codeText} />
          </div>
        </div>
      </div>
    );
  },
  // Inline code styling (not affected by syntax highlighting)
  code: ({
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
    [key: string]: unknown;
  }) => {
    // If it's part of a pre block (syntax highlighted), don't apply inline styling
    if (className?.includes("language-")) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }

    // Inline code styling
    return (
      <code className="rounded px-2 py-1 font-mono text-sm" {...props}>
        {children}
      </code>
    );
  },
  // Custom blockquote styling
  blockquote: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <blockquote
      className="border-secondary text-muted-foreground mb-4 border-l-4 pl-4 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
};
