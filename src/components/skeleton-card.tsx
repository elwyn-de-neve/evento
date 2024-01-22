import Skeleton from "@/components/skeleton";

export default function SkeletonCard() {
  return (
    <div className="relative h-[350px] overflow-hidden rounded-xl">
      <Skeleton className="z-1 relative h-[210px] w-[340px] rounded-b-none bg-white/[3%]" />
      <Skeleton className="z-1 relative m-5 mx-auto w-[250px] bg-white/[3%]" />
      <Skeleton className="z-1 relative m-5 mx-auto w-[200px] bg-white/[3%]" />
      <Skeleton className="z-1 relative m-5 mx-auto w-[200px] bg-white/[3%]" />
      <Skeleton className="absolute left-0 top-0 z-0 h-full w-full bg-white/[2%]" />
    </div>
  );
}
