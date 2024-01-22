import { TChildrenProps } from "@/lib/types";
import { cn } from "@/lib/utils";

type H1Props = TChildrenProps & {
  className?: string;
};

export default function H1({ children, className }: H1Props) {
  return (
    <h1
      className={cn(
        "text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
