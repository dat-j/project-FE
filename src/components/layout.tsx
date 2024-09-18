import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("auth/signin");
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    router.push("/auth/signin");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            JQKA
          </Link>
          <div className="space-x-4">
            <Link href="/" passHref>
              <Button variant="ghost">Home</Button>
            </Link>
            <Link href="/profile" passHref>
              <Button variant="ghost">Profile</Button>
            </Link>
            <Button
              variant="outline"
              onClick={
                localStorage.getItem("token") ? handleLogOut : handleSignIn
              }
            >
              {localStorage.getItem("token") ? "Log Out" : "Sign in"}
            </Button>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 text-center">
          © 2024 dattx. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
