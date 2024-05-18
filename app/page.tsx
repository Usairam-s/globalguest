import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <section>
      <div className="relative">
        <div className="absolute right-20 top-4">
          <ThemeToggle />
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-primary bg-clip-text text-3xl font-extrabold  sm:text-5xl">
            Find your next stay with
            <span className="sm:block text-white bg-gradient-to-r from-rose-500 via-red-500 to-red-800 w-fit mx-auto mt-4 px-4 py-2 rounded-lg">
              {" "}
              GlobalGuest{" "}
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl ">
            Find and reserve your next travel stay with GlobalGuest. Presenting
            best places to stay while you are out of town.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button className="px-14 " asChild>
              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/home"
              >
                Find Now 🏠 ➡
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
