"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Heart, Loader, Loader2 } from "lucide-react";

function SubmitButtons() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <>
          {" "}
          <Button disabled type="submit" size={"lg"}>
            <Loader2 className="mr-2 animate-spin" />
            Please wait
          </Button>
        </>
      ) : (
        <>
          <Button type="submit" size={"lg"}>
            Next
          </Button>
        </>
      )}
    </>
  );
}

export default SubmitButtons;

export function AddToFavoriteButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <>
          <Button
            variant={"outline"}
            size={"icon"}
            disabled
            className="bg-primary-foreground"
          >
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
          </Button>
        </>
      ) : (
        <>
          <Button
            variant={"outline"}
            size={"icon"}
            className="bg-primary-foreground dark:bg-black"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </>
      )}
    </>
  );
}

export function DeleteFromFavoriteButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <>
          <Button
            variant={"outline"}
            size={"icon"}
            disabled
            className="bg-primary-foreground"
          >
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
          </Button>
        </>
      ) : (
        <>
          <Button
            variant={"outline"}
            size={"icon"}
            className="bg-primary-foreground dark:bg-black"
          >
            <Heart className="h-4 w-4 text-primary" fill="#E21C49" />
          </Button>
        </>
      )}
    </>
  );
}

export function MakeReservationButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <>
          <Button disabled className="w-full">
            <Loader2 className="h-4 w-4 animate-spin mr-2 " />
            Please wait ...
          </Button>
        </>
      ) : (
        <>
          <Button type="submit" className="w-full">
            Make a reservation !
          </Button>
        </>
      )}
    </>
  );
}
