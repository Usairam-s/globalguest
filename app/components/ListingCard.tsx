"use client";
import Image from "next/image";
import Link from "next/link";
import { useCountries } from "../lib/getCountries";

import { AddToFavoriteButton, DeleteFromFavoriteButton } from "./SubmitButtons";
import { DeleteFromFavorite, addToFavorite } from "../actions";

interface iAppProp {
  imagePath: string;
  title: string;
  description: string;
  id: string;
  price: number;
  location: string;
  userId: string | undefined;
  isInFavoriteList: boolean;
  favoriteId: string;
  homeId: string;
  pathName: string;
}

function ListingCard({
  imagePath,
  title,
  description,
  price,
  id,
  location,
  userId,
  favoriteId,
  isInFavoriteList,
  pathName,
  homeId,
}: iAppProp) {
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(location);
  return (
    <div className="flex flex-col">
      <div className="relative h-72">
        <Image
          src={`https://pjngwklsnwdxqijjppmi.supabase.co/storage/v1/object/public/images/${imagePath}`}
          alt="image"
          fill
          className="rounded-lg h-full object-cover mb-3"
        />
        {userId && (
          <div className="z-10 absolute top-2 right-2">
            {isInFavoriteList ? (
              <form action={DeleteFromFavorite}>
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="favoriteId" value={favoriteId} />
                <input type="hidden" name="pathName" value={pathName} />
                <DeleteFromFavoriteButton />
              </form>
            ) : (
              <form action={addToFavorite}>
                <input type="hidden" name="homeId" value={homeId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <AddToFavoriteButton />
              </form>
            )}
          </div>
        )}
      </div>
      <Link href={`/home/${homeId}`}>
        <h3 className="font-medium text-base mt-2">
          {country?.flag} {country?.label} / {country?.region}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
        <p
          className="mt-2 px-2 py-1 rounded-full 
          text-white bg-gradient-to-r from-rose-500 via-red-500 to-red-800 w-fit"
        >
          <span className=" font-medium">$ {price}</span> / Night
        </p>
      </Link>
    </div>
  );
}

export default ListingCard;
