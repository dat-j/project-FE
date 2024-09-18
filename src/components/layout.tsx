import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectAuth } from "@/slices/authSlice";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isAuth, setIsAuth] = useState<Boolean>(false);
  const router = useRouter();
  const authoziration = useSelector(selectAuth);
  const dispatch = useDispatch();
  

  const handleSignIn = () => {
    router.push("auth/signin");
  };

  const handleLogOut = () => {
    dispatch(logout())
    localStorage.clear()
    router.push("/auth/signin");
  };

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      setIsAuth(true);
    } else {
      return 
    }
  }, []);

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
              onClick={isAuth ? handleLogOut : handleSignIn}
            >
              {isAuth ? "Logout" : "Signin"}
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
