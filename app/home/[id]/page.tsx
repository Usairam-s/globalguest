import prisma from "@/app/lib/db";
import { useCountries } from "@/app/lib/getCountries";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import CategoryShowcase from "@/app/components/CategoryShowcase";
import HomeMap from "@/app/components/HomeMap";
import SelectCalender from "@/app/components/SelectCalender";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createReservation } from "@/app/actions";
import { MakeReservationButton } from "@/app/components/SubmitButtons";
import { unstable_noStore as noStore } from "next/cache";

async function getData(homeId: string) {
  noStore();
  const data = await prisma.home.findUnique({
    where: {
      id: homeId,
    },
    select: {
      photo: true,
      guests: true,
      bathrooms: true,
      bedrooms: true,
      price: true,
      description: true,
      title: true,
      categoryName: true,
      country: true,
      Reservation: {
        where: {
          homeId: homeId,
        },
      },
      User: {
        select: {
          profileImage: true,
          firstName: true,
        },
      },
    },
  });

  return data;
}

export default async function HomeRoute({
  params,
}: {
  params: { id: string };
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getData(params.id);
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(data?.country as string);

  return (
    <div className="w-[75%]  mt-10 mx-auto mb-12">
      <h2 className="font-medium text-2xl mb-5">{data?.title}</h2>
      <div className="relative h-[550px]">
        <Image
          src={`https://pjngwklsnwdxqijjppmi.supabase.co/storage/v1/object/public/images/${data?.photo}`}
          alt="home_image"
          fill
          className="object-cover rounded-lg h-full w-full"
        />
      </div>
      <div className="flex justify-between gap-x-24 mt-8">
        <div className="w-2/3">
          <h3 className="text-xl font-medium">
            {country?.flag} {country?.label} {country?.region}
          </h3>
          <div className="flex gap-x-2 text-muted-foreground">
            <p>{data?.guests} Guests</p> *
            <p>
              {data?.bedrooms} Bedrooms * {data?.bathrooms} Bathrooms
            </p>
          </div>
          <div className="flex items-center mt-6">
            <img
              src={
                data?.User?.profileImage ??
                "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
              }
              alt="user_image"
              className="w-11 h-11 rounded-full"
            />
            <div className="flex flex-col ml-4">
              <h3 className="font-medium">Hosted by {data?.User?.firstName}</h3>
              <p className="text-sm text-muted-foreground">Host since 2015</p>
            </div>
          </div>
          <Separator className="my-7" />
          <CategoryShowcase categoryName={data?.categoryName as string} />
          <Separator className="my-7" />
          <p className="text-muted-foreground">{data?.description}</p>
          <Separator className="my-7" />
          <HomeMap locationValue={country?.value as string} />
        </div>
        <form action={createReservation}>
          <input type="hidden" name="homeId" value={params.id} />
          <input type="hidden" name="userId" value={user?.id} />
          <SelectCalender reservation={data?.Reservation} />
          {user?.id ? (
            <>
              <MakeReservationButton />
            </>
          ) : (
            <>
              <Button className="w-full" asChild>
                <Link href={"/api/auth/login"}>Make a reservation</Link>
              </Button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
