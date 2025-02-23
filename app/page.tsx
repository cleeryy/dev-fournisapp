import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1>Homepage</h1>
      <div className="flex items-center justify-center gap-4">
        <Link href={"/admin"}>
          <Button>Admin dashboard</Button>
        </Link>
        <Link href={"/login"}>
          <Button variant={"outline"}>Login page</Button>
        </Link>
      </div>
    </div>
  );
}
