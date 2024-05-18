import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import Usernav from "./Usernav";
import { SearchComponent } from "./SearchComponent";

function Navbar() {
  return (
    <nav className="border-b w-full">
      <div className="flex justify-between items-center px-5 lg:px-10 container py-5">
        <Link href={"/home"}>
          {" "}
          <span className="sm:block font-medium tracking-wider text-white bg-gradient-to-r from-rose-500 via-red-500 to-red-800 w-fit mx-auto  px-4 py-2 rounded-lg">
            {" "}
            GlobalGuest{" "}
          </span>
        </Link>

        <div className="px-4 py-2 rounded-full hidden md:inline ">
          <SearchComponent />
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Usernav />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
