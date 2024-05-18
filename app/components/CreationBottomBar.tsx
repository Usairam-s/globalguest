import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SubmitButtons from "./SubmitButtons";

function CreationBottomBar() {
  return (
    <div>
      {" "}
      <div className="fixed w-full dark:bg-black bottom-0 z-10 bg-white border-t h-24">
        <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full">
          <Button asChild variant={"secondary"} size={"lg"}>
            <Link href={"/home"}>Cancel</Link>
          </Button>
          <SubmitButtons />
        </div>
      </div>
    </div>
  );
}

export default CreationBottomBar;
