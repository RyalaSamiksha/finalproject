"use client";

import "~/styles/globals.css";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "~/auth";
import { createContext } from "react";
import Link from "next/link";
import { signOut } from "@firebase/auth";

const inter = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // //
  //   console.log(auth)

  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} bg-[#FAFAFA]`}>
        <nav className="flex h-24 w-screen items-center justify-between px-12 ">
          <div className="flex items-center gap-4">
            <Image src="/review.png" alt="ASD" width={50} height={80} />
            <h1 className="font text-4xl font-light text-violet-700 ">
              SiteFortify
            </h1>
          </div>
          <div>
            {!user ? (
              <Link
                href="/login"
                className="rounded-lg bg-violet-700 px-4 py-2 text-[#FAFAFA]"
              >
                Login / SignUp
              </Link>
            ) : (
              <button
                onClick={handleSignOut}
                className="rounded-lg bg-violet-700 px-4 py-2 text-[#FAFAFA]"
              >
                Signout
              </button>
            )}
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
