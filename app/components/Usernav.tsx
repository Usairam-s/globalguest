import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DoorClosed, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import { createAirbnbHome } from "../actions";

async function Usernav() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const createHomewithId = createAirbnbHome.bind(null, {
    userId: user?.id as string,
  });
  return (
    <div className=" rounded-full border">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex pl-2 pr-2  items-center outline-none gap-2">
          <Image
            alt="userimage"
            height={40}
            width={40}
            className="rounded-full"
            src={
              user?.picture ??
              "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
            }
          />
          <MenuIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-4 w-[250px]">
          <DropdownMenuSeparator />
          {user ? (
            <>
              {" "}
              <DropdownMenuItem>
                <form action={createHomewithId} className="w-full text-start">
                  <Button className="text-start w-full" type="submit">
                    Rent your home
                  </Button>
                </form>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/home/my-homes">My Listings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/home/favorites">My Favorites</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/home/reservations">My Reservations</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogoutLink className="flex justify-between items-center">
                  <span className="">Logout</span>
                  <span className="ml-40">
                    <DoorClosed />
                  </span>
                </LogoutLink>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              {" "}
              <DropdownMenuItem>
                <RegisterLink>Register</RegisterLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LoginLink>Login</LoginLink>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Usernav;
