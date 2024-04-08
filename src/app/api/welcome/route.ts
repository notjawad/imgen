import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export const revalidate = 0;

export async function GET(req: NextRequest) {
  const data = req.nextUrl.searchParams.get("data");
  const nodeId = req.nextUrl.searchParams.get("nodeId");

  if (!data) {
    return NextResponse.json(
      { error: "Missing data parameter" },
      { status: 400 }
    );
  }

  try {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.setViewport({ width: 800, height: 800, deviceScaleFactor: 4 });

    await page.goto(`http://localhost:3000/welcome?data=${data}`);
    console.log(`http://localhost:3000/welcome?data=${data}`);

    const node = await page.$(`#${nodeId}`);
    const screenshot = await node?.screenshot({
      type: "png",
    });

    await browser.close();

    const response = new NextResponse(screenshot);
    response.headers.set("Content-Type", "image/png");

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
