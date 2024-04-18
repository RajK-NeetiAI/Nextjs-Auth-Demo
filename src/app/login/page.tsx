"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Separator } from "@/components/ui/separator";

const LoginFormSchema = z.object({
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
})

export default function LoginPage() {
    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });
    function onSubmit(values: z.infer<typeof LoginFormSchema>) {
        console.log(values)
    };
    return (
        <div className="flex flex-col items-center justify-center gap-4 h-screen">
            <Link href={"/register"}>
                <div className="flex gap-4 items-center">
                    <Label>Don't have an account?</Label>
                    <Button variant={"default"}>Get started!</Button>
                </div>
            </Link>
            <Separator className="my-4 w-[350px]" />
            <Label>Login with your email and password.</Label>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="example@gamil.com" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter your registered email address.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="xxxxxx" {...field} type="password" />
                                </FormControl>
                                <FormDescription>
                                    Enter your password.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-center">
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};