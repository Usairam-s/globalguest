"use client";
import React, { useCallback } from "react";
import { categoryItems } from "../lib/categoryItems";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

function MapFilterItems() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex  gap-x-10 w-full mt-5 sm:overflow-x-hidden overflow-x-scroll">
      {categoryItems.map((item) => (
        <div key={item.imageUrl} className="relative w-20 h-20 ">
          <Link
            className={cn(
              "flex flex-col gap-1 w-14 items-center  justify-center flex-shrink ",
              search === item.name ? "border-b-2 border-primary" : "opacity-50"
            )}
            href={pathname + "?" + createQueryString("filter", item.name)}
          >
            <Image
              src={item.imageUrl}
              alt="category_item"
              className="w-6 h-6 dark:invert hover:text-primary"
              width={24}
              height={24}
            />
            <p className="text-[10px] text-center">{item.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MapFilterItems;
