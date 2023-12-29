import { getServerSession } from "next-auth"
import { authOptions } from "./utils/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LogoutButton from "./components/LogoutButton";
import { Separator } from "@/components/ui/separator";
import Logo from '../public/logo-sm.png';
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="p-10 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-center w-full py-6">
      <Image
        src={Logo}
        alt="logo"
        width={120}
        height={140}
      />
      </div>
      <h1 className="text-2xl font-semibold leading-none tracking-tight">Hello from the index page.</h1>
      {session ? (
        <>
          <h2 className="text-sm text-muted-foreground">You are logged in!!</h2>
          <Separator className="my-6" />
          <LogoutButton />
        </>
      ) : (
        <>
        <h2 className="text-sm text-muted-foreground">You are NOT logged in!!</h2>
        <Separator className="my-6" />

        <Button className="w-full" asChild>
            <Link href="/auth">
              Please login
            </Link>
          </Button>
        </>

      )}
    </div>
  );
}
