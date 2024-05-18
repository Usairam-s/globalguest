import { Button } from "@/components/ui/button";

import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <section className="flex items-center justify-center min-h-screen ">
      <div className="relative">
        <div className="absolute right-4 top-4 md:right-20">
          <ThemeToggle />
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:py-32 flex items-center justify-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-primary bg-clip-text text-3xl font-extrabold sm:text-5xl">
            Find your next stay with
            <span className="block text-white bg-gradient-to-r from-rose-500 via-red-500 to-red-800 w-fit mx-auto mt-4 px-4 py-2 rounded-lg">
              GlobalGuest
            </span>
          </h1>
          <p className="mx-auto text-muted-foreground mt-4 max-w-lg text-base sm:text-lg">
            Find and reserve your next travel stay with GlobalGuest. Presenting
            the best places to stay while you are out of town.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button className="px-6 sm:px-14 animate-pulse" asChild>
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
