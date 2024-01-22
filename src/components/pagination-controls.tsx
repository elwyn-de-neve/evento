import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { TChildrenProps } from "@/lib/types";

type TPaginationControlsProps = {
  prevPagePath: string;
  nextPagePath: string;
};

export default function PaginationControls({
  nextPagePath,
  prevPagePath,
}: TPaginationControlsProps) {
  return (
    <section className="flex w-full justify-between">
      {prevPagePath ? (
        <PaginationButton path={prevPagePath}>
          <ArrowLeftIcon /> Previous
        </PaginationButton>
      ) : (
        <div />
      )}
      {nextPagePath && (
        <PaginationButton path={nextPagePath}>
          Next <ArrowRightIcon />
        </PaginationButton>
      )}
    </section>
  );
}

type TPaginationButtonProps = TChildrenProps & {
  path: string;
};

function PaginationButton({ path, children }: TPaginationButtonProps) {
  return (
    <Link
      href={path}
      className="flex items-center gap-x-2 rounded-md bg-white/5 px-5 py-3 text-sm text-white opacity-75 hover:opacity-100"
    >
      {children}
    </Link>
  );
}
