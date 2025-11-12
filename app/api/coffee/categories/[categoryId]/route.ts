import { NextResponse } from "next/server";
import { coffeeData } from "../../route";
export async function GET(
  request: Request,
  { params }: { params: { categoryId: string } },
) {
  const locale = request.headers.get("accept-language") || "en";

  const categoryId = Number(params.categoryId);

  const coffees = coffeeData.filter((item) => item.categoryId === categoryId);

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
    description:
      locale === "ar" ? coffee.description.ar : coffee.description.en,
  }));

  return NextResponse.json(localizedCoffees);
}
