import ListingCard from "@/app/components/ListingCard";
import { NoItems } from "@/app/components/NoItems";
import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

async function getData(userId: string) {
  noStore();
  const data = await prisma.favorite.findMany({
    where: {
      userId: userId,
    },
    select: {
      Home: {
        select: {
          photo: true,
          id: true,
          Favorite: true,
          price: true,
          country: true,
          description: true,
        },
      },
    },
  });

  return data;
}

export default async function page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return redirect("/home");
  const data = await getData(user?.id as string);
  return (
    <section className="conatiner mx-auto px-5 lg:px-10 mt-10">
      <h2 className="text-2xl  font-semibold tracking-tight">Your Favorites</h2>
      {data.length === 0 ? (
        <NoItems
          title="Such an empty"
          description="It looks like you did not added any home to favorites"
        />
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mt-8">
          {data.map((item) => (
            <ListingCard
              key={item.Home?.id}
              description={item.Home?.description as string}
              location={item.Home?.country as string}
              pathName="/home/favorites"
              homeId={item.Home?.id as string}
              imagePath={item.Home?.photo as string}
              price={item.Home?.price as number}
              userId={user.id}
              favoriteId={item.Home?.Favorite[0].id as string}
              isInFavoriteList={
                (item.Home?.Favorite.length as number) > 0 ? true : false
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
