import { NextResponse } from "next/server";

const corsOptions = {
  origin: "https://example.com",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  optionsSuccessStatus: 200,
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  console.log(params);

  const json_response = {
    status: "success",
    previousData: true,
    data: [
      {
        exists: "true",
        prevVal: "something",
      },
      {
        exists: "true",
        prevVal: "something",
      },
      {
        exists: "true",
        prevVal: "something",
      },
    ],
  };
  return NextResponse.json(json_response);
}
