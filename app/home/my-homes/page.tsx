import ListingCard from "@/app/components/ListingCard";
import { NoItems } from "@/app/components/NoItems";
import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

async function getData(userId: string) {
  noStore();
  const data = await prisma.home.findMany({
    where: {
      userId: userId,
      addedCategory: true,
      addedDescription: true,
      addedLocation: true,
    },
    select: {
      id: true,
      country: true,
      photo: true,
      description: true,
      price: true,
      Favorite: {
        where: {
          userId: userId,
        },
      },
    },
    orderBy: {
      createdAT: "desc",
    },
  });

  return data;
}
export default async function MyHome() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return redirect("/home");
  const data = await getData(user.id);

  return (
    <section className="container mx-auto px-5 lg:px-10 mt-10">
      <h2 className="text-2xl  font-semibold tracking-tight">Your Homes</h2>

      {data.length === 0 ? (
        <NoItems
          title="You have not listed any home"
          description="Add your home to show them here"
        />
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mt-8">
          {data.map((item) => (
            <ListingCard
              key={item.id}
              description={item.description as string}
              location={item.country as string}
              pathName="/home/my-homes"
              homeId={item.id as string}
              imagePath={item.photo as string}
              price={item.price as number}
              userId={user.id}
              favoriteId={item.Favorite[0]?.id as string}
              isInFavoriteList={
                (item.Favorite.length as number) > 0 ? true : false
              }
              title={""}
              id={""}
            />
          ))}
        </div>
      )}
    </section>
  );
}
