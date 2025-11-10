import { NextResponse } from "next/server";
import { coffeeData } from "../route";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = Number(params.id);
  const coffee = coffeeData.find((item) => item.id === id);

  if (!coffee) {
    return NextResponse.json(
      {
        message: {
          en: "Coffee not found",
          ar: "القهوة غير موجودة",
        },
      },
      { status: 404 },
    );
  }

  return NextResponse.json(coffee);
}
