import React, { useState } from "react";

const Accordian = ({ data }) => {
  const [active, setActive] = useState<boolean>(false);
  // console.log({ data });

  const vul = data;
  console.log(vul);

  return (
    <div className="border-grey-300 rounded-md border-[1px]  px-4 py-3">
      <div
        className="
  flex items-center justify-between "
      >
        <div className="flex gap-4">
          <h1>{vul?.name ?? "WTF"}</h1>
          <h2 className="grid place-items-center rounded-full bg-red-600 px-3 text-sm uppercase text-white">
            {vul.priority}
          </h2>
        </div>
        <div>
          <button onClick={() => setActive(!active)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 43 43"
              fill="none"
            >
              <circle
                cx="21.5"
                cy="21.5"
                r="21.5"
                transform="rotate(-90 21.5 21.5)"
                fill="#111111"
              />
              <path
                d="M21.6464 31.3536C21.8417 31.5488 22.1583 31.5488 22.3536 31.3536L25.5355 28.1716C25.7308 27.9763 25.7308 27.6597 25.5355 27.4645C25.3403 27.2692 25.0237 27.2692 24.8284 27.4645L22 30.2929L19.1716 27.4645C18.9763 27.2692 18.6597 27.2692 18.4645 27.4645C18.2692 27.6597 18.2692 27.9763 18.4645 28.1716L21.6464 31.3536ZM21.5 11L21.5 31L22.5 31L22.5 11L21.5 11Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      {active ? (
        <div>
          <hr className="my-2" />
          <h1 className="mb-2 text-xl font-light underline ">Explanation:</h1>
          <h1>{vul.problem}</h1>
          <br />
          <h1 className="mb-2 text-xl font-light underline ">Solution:</h1>
          <h1>{vul.solution}</h1>
        </div>
      ) : null}
    </div>
  );
};

export default Accordian;
