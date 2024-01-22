import SkeletonCard from "@/components/skeleton-card";

export default function Loading() {
  return (
    <div className="flex max-w-[1100px] flex-wrap justify-center gap-10">
      {[...Array(6)].map((_, i) => {
        return <SkeletonCard key={i} />;
      })}
    </div>
  );
}
