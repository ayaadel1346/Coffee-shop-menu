import { NextResponse } from "next/server";
import { coffeeData } from "../route";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const locale = request.headers.get("accept-language") || "en";
  const id = Number(params.id);

  const coffee = coffeeData.find((item) => item.id === id);

  if (!coffee) {
    return NextResponse.json(
      {
        message: locale === "ar" ? "القهوة غير موجودة" : "Coffee not found",
      },
      { status: 404 },
    );
  }

  const localizedCoffee = {
    ...coffee,
    name: locale === "ar" ? coffee.name.ar : coffee.name.en,
    description:
      locale === "ar" ? coffee.description.ar : coffee.description.en,
    origin: locale === "ar" ? coffee.origin.ar : coffee.origin.en,
  };

  return NextResponse.json(localizedCoffee);
}
