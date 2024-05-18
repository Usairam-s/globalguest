"use client";

import { categoryItems } from "../lib/categoryItems";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

export function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );

  return (
    <div className="mt-10 w-3/5 mx-auto mb-36 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
      <input
        type="hidden"
        name="categoryName"
        value={selectedCategory as string}
      />
      {categoryItems.map((item) => {
        return (
          <div key={item.id} className="cursor-pointer">
            <Card
              className={
                selectedCategory === item.name ? "border-primary border" : ""
              }
              onClick={() => setSelectedCategory(item.name)}
            >
              <CardHeader className="flex flex-col items-center justify-center sm:flex-row">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  height={32}
                  width={32}
                  className="w-8 h-8 dark:invert sm:block hidden"
                />
                <h3 className="font-medium text-center sm:text-left mt-2 sm:mt-0 sm:ml-2">
                  {item.title}
                </h3>
              </CardHeader>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
