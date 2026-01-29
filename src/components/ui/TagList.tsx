"use client";
import { Badge } from "@/src/components/ui/bages";

interface TagListProps {
  tags: string[];
  maxVisible?: number;
  className?: string;
}

export const TagList = ({ 
  tags, 
  maxVisible = 4,
  className 
}: TagListProps) => {
  const shouldShowMore = tags.length > maxVisible;
  const visibleTags = shouldShowMore ? tags.slice(0, 3) : tags;
  const remainingCount = tags.length - 3;

  return (
    <>
      {visibleTags.map((tag: string, i: number) => (
        <Badge className={className} key={i}>
          {tag}
        </Badge>
      ))}
      {shouldShowMore && (
        <Badge className={`bg-black text-white ${className || ""}`}>
          +{remainingCount} more
        </Badge>
      )}
    </>
  );
};

