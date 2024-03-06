"use client";
import { Button } from "@/components/ui/button";
import { SignOutButton, SignedIn } from "@clerk/clerk-react";
import { SignInButton, SignedOut } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
    const createFile = useMutation(api.files.createFile);
    const Files = useQuery(api.files.getFiles);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <SignedIn>
                <SignOutButton>
                    <Button> Sign Out</Button>
                </SignOutButton>
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal">
                    <Button> Sign In</Button>
                </SignInButton>
            </SignedOut>

            {Files?.map((file) => (
                <div key={file._id}>{file.name}</div>
            ))}

            <Button
                onClick={() => {
                    createFile({ name: "hello world" });
                }}
            >
                Click Me
            </Button>
        </main>
    );
}
