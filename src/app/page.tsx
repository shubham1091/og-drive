"use client";
import { Button } from "@/components/ui/button";
import { SignOutButton, SignedIn } from "@clerk/clerk-react";
import {
    SignInButton,
    SignedOut,
    UserButton,
    useOrganization,
    useUser,
} from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
    const createFile = useMutation(api.files.createFile);
    const { organization } = useOrganization();
    const { user } = useUser();
    const orgId = organization?.id ?? user?.id;

    const Files = useQuery(api.files.getFiles, orgId ? { orgId } : "skip");
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            

            {Files?.map((file) => (
                <div key={file._id}>{file.name}</div>
            ))}

            <Button
                onClick={() => {
                    if (!orgId) return;
                    createFile({
                        name: "hello world",
                        orgId,
                    });
                }}
            >
                Click Me
            </Button>
        </main>
    );
}
