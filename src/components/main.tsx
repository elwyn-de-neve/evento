import { TChildrenProps } from "@/lib/types";
import { cn } from "@/lib/utils";

type MainProps = TChildrenProps & {
  className?: string;
};

export default function Main({ children, className }: MainProps) {
  return (
    <main className={cn("flex flex-col items-center", className)}>
      {children}
    </main>
  );
}
