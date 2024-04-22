"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";
import { LoginFormSchema } from "@/lib/schemas";
import { URLS } from "@/lib/urls";

export const handleLoginAction = async (data: z.infer<typeof LoginFormSchema>) => {
    try {
        await signIn(
            'credentials',
            {
                email: data.email,
                password: data.password,
                redirectTo: URLS.dashboard
            }
        );
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials!" }
                default:
                    return { error: "Unknown error." }
            }
        }
        throw error;
    }
};

export const handleLogoutAction = async () => {
    await signOut();
};
