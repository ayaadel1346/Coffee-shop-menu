import { NextResponse, NextRequest } from "next/server";
import { coffeeData } from "./coffeeData";

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  const locale = request.headers.get("accept-language") || "en";

  const page = Number(url.searchParams.get("page") || "1");
  const size = Number(url.searchParams.get("size") || "10");

  if (page < 1 || size < 1) {
    return NextResponse.json(
      { message: "Page and size must be positive numbers" },
      { status: 400 },
    );
  }

  const localizedData = coffeeData.map((coffee) => ({
    ...coffee,
    name: locale === "ar" ? coffee.name.ar : coffee.name.en,
    description:
      locale === "ar" ? coffee.description.ar : coffee.description.en,
    origin: locale === "ar" ? coffee.origin.ar : coffee.origin.en,
  }));

  const startIndex = (page - 1) * size;
  const endIndex = startIndex + size;
  const paginatedData = localizedData.slice(startIndex, endIndex);

  return NextResponse.json({
    page,
    size,
    total: localizedData.length,
    totalPages: Math.ceil(localizedData.length / size),
    data: paginatedData,
  });
}
