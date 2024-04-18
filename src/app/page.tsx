import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex items-center justify-end m-4 gap-4">
      <Link href={"/login"} className="gap-4">
        <Button>Login</Button>
      </Link>
      <Link href={"/register"}>
        <Button variant={"default"}>Get started!</Button>
      </Link>
    </div>
  );
};
