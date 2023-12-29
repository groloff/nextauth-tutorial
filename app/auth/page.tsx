import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { Home, Mail } from "lucide-react";
import SignInGithub from "../components/SignInGithub";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Logo from "../../public/logo-sm.png"
import SigninForm from "../components/SigninForm";

export default async function AuthRoute() {
    const session = await getServerSession(authOptions);

    if(session) {
        return redirect('/');
    }
  return (
    <div className="p-10 flex items-center justify-center h-screen bg-slate-200">
        
        
        <Link className="absolute top-5 left-5 flex" href="/">
            <Home className=" mr-2" /> Home
        </Link>
        <Card className="shadow-lg">
        <CardHeader>
        <div className="flex items-center justify-center w-full py-6">
      <Image
        src={Logo}
        alt="logo"
        width={120}
        height={140}
      />
      </div>
            <CardTitle>
                Please Sign in
            </CardTitle>
            <CardDescription>
                To access the private page you have to log in.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col">
                <SigninForm />
                <Separator className="my-6" />


                <SignInGithub />
            </div>
        </CardContent>
    </Card>
    </div>
    
  );
}