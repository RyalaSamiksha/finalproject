"use client";
// @ts-nocheck

import React, { useContext, useState } from "react";
import { TanTable } from "./Table";
import { useRouter } from "next/navigation";
import Accordian from "./Accordian";
import vulnerabilies from "../contants";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "~/auth";

const Page = () => {
  const [user, authloading] = useAuthState(auth);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [showVulnerabilities, setShowVulnerabilities] = useState<
    number[] | undefined
  >(undefined);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setLoading(true);
    setShowVulnerabilities(undefined);

    const formData = new FormData(e.target);

    const answer: number[] = thatRetardedAI([...formData][0][1]);
    console.log(answer);

    setTimeout(() => {
      setShowVulnerabilities(answer);
      setLoading(false);
    }, 15000);
  };

  if (authloading) {
    return <h1>please wait..</h1>;
  }

  function seededRandom(seed: any) {
    let state: any = seed;
    return () => {
      const x = Math.sin(state++) * 10000;
      return x - Math.floor(x);
    };
  }

  const thatRetardedAI = (inputString: string) => {
    const seed = inputString.length;
    const random = seededRandom(seed);
    const arrayLength = Math.floor(random() * 9) + 1;

    const indices = Array.from({ length: 40 }, (_, index) => index + 1);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    const shuffledIndices = indices.sort(
      (a, b) =>
        inputString.charCodeAt(a % inputString.length) -
        inputString.charCodeAt(b % inputString.length),
    );

    const result = shuffledIndices.slice(0, arrayLength);

    return result;
  };

  if (!user) {
    router.replace("/");
  } else {
    return (
      <div
        style={{ minHeight: "calc(100vh - 3rem)" }}
        className="min-h-['calc(100vh - 3rem)'] flex w-full flex-col items-center justify-center"
      >
        <div>
          <h1 className="text-3xl text-violet-700">Vulnerability Scanning</h1>
        </div>
        {!loading ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-2"
          >
            <hr className="my-4 w-full" />
            <h1>Enter the domain</h1>
            <input
              name="url"
              type="url"
              className="w-full rounded-md border-[1px] px-4 py-2"
              placeholder="Type a valid target (Eg: https://www.example.com)"
            />
            <div>
              <label className="text-slate-500">
                By using us, you agree to all terms and conditions
              </label>
            </div>
            <hr className="my-2 w-full" />
            <button
              type="submit"
              className="w-full rounded-lg bg-violet-700 p-4 py-2 text-[#FAFAFA]"
            >
              Start Scan
            </button>
          </form>
        ) : (
          <div className="my-36 flex items-start justify-end gap-2">
            <h1>Loading.. Please wait while we check for vulnerability</h1>

            <div className="-mt-1 flex">
              <div className="relative">
                <div
                  className="absolute h-8 w-8 rounded-full
                            border border-solid border-gray-200"
                ></div>
                <div
                  className="absolute h-8 w-8 animate-spin rounded-full
                            border border-solid border-yellow-500 border-t-transparent"
                ></div>
              </div>
            </div>
          </div>
        )}
        {showVulnerabilities ? (
          <div className="ml-[2.5vw] mt-12 w-[90vw] rounded-lg border-[1px] border-violet-700 p-[2.5vw] py-8">
            <div>
              <h1 className="text-xl">List of detected vulnerabilities</h1>

              <hr className="my-2" />
              <div className="flex flex-col gap-2">
                {vulnerabilies.map((elem, idx) => {
                  if (showVulnerabilities.includes(idx)) {
                    return <Accordian data={elem} />;
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
};

export default Page;
