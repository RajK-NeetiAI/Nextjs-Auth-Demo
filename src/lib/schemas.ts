import { z } from "zod";

export const LoginFormSchema = z.object({
    email: z.string().refine(
        (val) => {
            if (val.includes("@")) {
                return true;
            } else {
                return false;
            }
        },
        { message: `Please enter a valid email address.` }
    ),
    password: z.string().min(1, {
        message: "Password is required."
    })
});

export const RegisterFormSchema = z.object({
    email: z.string().email().refine(
        (val) => {
            if (val.includes("@")) {
                return true;
            } else {
                return false;
            }
        },
        { message: `Please enter a valid email address.` }
    ),
    password: z.string().min(1, {
        message: "Password is required."
    }),
    name: z.string().min(1, {
        message: "Name is required."
    })
});

export const SendForgotPasswordFormSchema = z.object({
    email: z.string().email().refine(
        (val) => {
            if (val.includes("@")) {
                return true;
            } else {
                return false;
            }
        },
        { message: `Please enter a valid email address.` }
    )
});

export const ResetPasswordFormSchema = z.object({
    password: z.string().min(6, {
        message: "Password is required and must have 6 characters."
    }),
    confirmPassword: z.string().min(1, {
        message: "Confirm password is required."
    })
});
