import Image from "next/image";
import { Loader } from "lucide-react";
import { ClerkLoading, ClerkLoaded, SignedIn, SignedOut, SignInButton, UserButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="h-20 w-full border-b-2 border-slate-200 bg-cyan-500">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full px-4">
                <div className="flex items-center gap-x-3">
                    {/* import ảnh từ public hoặc external url */}
                    <Image src="/mascot.svg" height={40} width={40} alt="mascot image" />
                    <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
                        <Link href="/home">ENG4KIDS</Link>
                    </h1>
                </div>
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" size={32} />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal" forceRedirectUrl="/home/learning" signUpForceRedirectUrl="/home">
                            <Button variant="default" size="lg">Đăng nhập</Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header>
    );
};
