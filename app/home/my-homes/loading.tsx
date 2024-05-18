import SkeletonCard from "@/app/components/SkeletonCard";

function MyHomeLoading() {
  return (
    <section className="conatiner mx-auto px-5 lg:px-10 mt-10">
      <h2 className="text-2xl  font-semibold tracking-tight">Your Homes</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mt-8">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </section>
  );
}

export default MyHomeLoading;
