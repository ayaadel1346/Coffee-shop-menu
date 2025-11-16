import { NextRequest, NextResponse } from "next/server";
import { coffeeData } from "../../coffeeData";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ categoryId: string }> },
) {
  const { categoryId } = await context.params;
  const locale = request.headers.get("accept-language") || "en";
  const id = Number(categoryId);

  const coffees = coffeeData.filter((item) => item.categoryId === id);

  if (coffees.length === 0) {
    return NextResponse.json(
      {
        message:
          locale === "ar"
            ? "لا توجد قهوة لهذه الفئة"
            : "No coffees found for this category",
      },
      { status: 404 },
    );
  }

  const localizedCoffees = coffees.map((coffee) => ({
    ...coffee,
    name: locale === "ar" ? coffee.name.ar : coffee.name.en,
    description: locale === "ar" ? coffee.description.ar : coffee.description.en,
    origin: locale === "ar" ? coffee.origin.ar : coffee.origin.en,
  }));

  return NextResponse.json(localizedCoffees);
}
