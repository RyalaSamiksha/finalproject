"use client";
// @ts-nocheck

import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "~/auth";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

const provider = new GoogleAuthProvider();

const Page = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  console.log(user);

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (user) {
    router.push("/site");
  }

  return (
    <div className="flex h-[85vh] w-screen items-center justify-center gap-4 ">
      <div className="w-full pl-[20rem]">
        <h1 className="text-xl">Login and start your journey</h1>
        <br />
        <button
          onClick={handleLogin}
          className="rounded-lg bg-violet-700 px-4 py-3 text-white"
        >
          Sign in with Google
        </button>
      </div>
      <span className="h-[50vh] w-[1px] bg-violet-700"></span>
      <div className="w-full">
        <h1>Protect your business from the attack of global hackers</h1>
        <ul className="list-inside">
          <li className="list-disc">
            Find the weak points in your web applications, including the
            infrastructure and areas that require authentication.
          </li>
          <li className="list-disc">
            Scan your systems for new vulnerabilities as soon as they are
            discovered.
          </li>
          <li className="list-disc">
            Count with suggestions from our security specialists to solve
            vulnerabilities and avoid fees and extortion.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
