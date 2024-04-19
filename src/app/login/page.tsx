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
import { LoginFormSchema } from "@/lib/schemas";
import { URLS } from "@/lib/urls";

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
            <Link href={URLS.register}>
                <div className="flex gap-4 items-center">
                    <Label>Don't have an account?</Label>
                    <Button variant={"default"}>Get started!</Button>
                </div>
            </Link>
            <Separator className="my-4 w-[350px]" />
            <Label>Login with your email and password.</Label>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                    <Link href={URLS.sendEmail}>
                        <div className="mt-4 text-red-600 text-sm">
                            Don't remember the password?
                        </div>
                    </Link>
                    <div className="flex justify-center">
                        <Button type="submit">Login</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};