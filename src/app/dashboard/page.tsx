"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { handleLogoutAction } from "@/lib/actions";

export default function DashboardPage() {
    return (
        <div className="flex items-center mt-4 justify-around">
            <Label>Dashboard</Label>
            <form action={handleLogoutAction}>
                <Button type="submit" className="mt-2" size={"sm"}>Sign out!</Button>
            </form>
        </div>
    );
};
