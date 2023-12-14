"use client";
// @ts-nocheck

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "~/auth";

export default function HomePage() {
  const router = useRouter();

  const [user, loading, error] = useAuthState(auth);

  const handleClick = () => {
    if (!user) {
      router.push("/login");
    } else {
      router.push("/site");
    }
  };

  return (
    <main
      style={{ minHeight: "calc(100vh - 12rem)" }}
      className="min-h-['calc(100vh - 40rem)'] flex flex-col items-center justify-center"
    >
      {
        <div className="flex  w-full justify-around">
          <div className="flex h-[80vh] w-full flex-col justify-center pl-24">
            <h1 className="text-5xl font-semibold">
              Discover & Solve <br /> Vulnerabilities
            </h1>
            <br />
            <h1 className="text-gray-400">
              Identify your assets, scan your applications,
              <br /> find potential risks, and receive remediation plans in one
              place.
            </h1>
            <br />
            <button
              onClick={handleClick}
              className="w-fit rounded-full bg-violet-700 px-4 py-4 text-[#FAFAFA]"
            >
              Start Scanning Now
            </button>
          </div>
          <div className="relative h-[80vh] w-full ">
            <Image
              src="https://assets-global.website-files.com/64ed0ac2af76cef9257aaa3c/64f0e2bd2cbb1a75cd7ddfee_hero_image.svg"
              fill
              alt="QW"
            />
          </div>
        </div>
      }
    </main>
  );
}
