"use server";

import prisma from "@/lib/db";

export const getUserByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    });
    return user;
};
