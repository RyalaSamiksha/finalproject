import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: any }) {
  const data = request.nextUrl.searchParams;

  console.log(data.get("id"));

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

  // Replace "YOUR_EXTENSION_BACKGROUND_URL" with the actual URL of your extension's background script
  const extensionBackgroundUrl =
    "chrome-extension://pcbpmepdbhphnbplmjhcipbmehpdpnnp/background.js";

  return NextResponse.json(json_response, {
    headers: {
      "Access-Control-Allow-Origin": `*, ${extensionBackgroundUrl}`, // Add the extension background URL
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
