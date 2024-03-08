import {
    OrganizationSwitcher,
    SignInButton,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

export function Header() {
    return (
        <div className="border-b py-4 bg-gray-50">
            <div className="container mx-auto flex justify-between items-center">
                <div>OG Drive</div>
                <div className="flex gap-2">
                    <OrganizationSwitcher />
                    <UserButton />
                    <SignedOut>
                        <SignInButton>
                            <Button>Sign In</Button>
                        </SignInButton>
                    </SignedOut>
                </div>
            </div>
        </div>
    );
}
