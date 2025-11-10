import { NextResponse } from "next/server";
import { coffeeData } from "../../route";

export async function GET(
  request: Request,
  { params }: { params: { categoryId: string } },
) {
  const categoryId = Number(params.categoryId);
  const coffees = coffeeData.filter((item) => item.categoryId === categoryId);

  if (coffees.length === 0) {
    return NextResponse.json(
      {
        message: {
          en: "No coffees found for this category",
          ar: "لا توجد قهوة لهذه الفئة",
        },
      },
      { status: 404 },
    );
  }

  return NextResponse.json(coffees);
}
