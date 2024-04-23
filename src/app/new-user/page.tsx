import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { handleSendEmailAction } from "@/lib/actions";
import { URLS } from "@/lib/urls";
import Link from "next/link";

export default async function NewUserPage() {
    const session = await auth();
    //@ts-ignore
    if (session?.user?.isVerified) {
        return (
            <div className="mt-4 flex flex-col items-center justify-center gap-4">
                <h1>You are a verified user.</h1>
                <h3>{session?.user?.name}, please click on the button below to go to the Dashboard.</h3>
                <Link href={URLS.dashboard}>
                    <Button type="submit" size={"sm"}>Dashboard</Button>
                </Link>
            </div>
        );
    }
    const action = handleSendEmailAction.bind(null, session?.user?.email!);
    const response = await handleSendEmailAction(session?.user?.email!);
    return (
        <div className="flex flex-col items-center mt-4">
            <h1>{response.message}</h1>
            <p>We have sent you an email on {session?.user?.email}.</p>
            <p>If you did not receive the email then click the button to receive the email again.</p>
            <div className="flex flex-col items-center justify-center gap-2">
                <h3>{session?.user?.name}</h3>
                <form action={action}>
                    <Button type="submit" size={"sm"}>Receive email again.</Button>
                </form>
            </div>
        </div>
    );
};
