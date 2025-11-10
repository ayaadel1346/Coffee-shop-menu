import { NextResponse } from "next/server";

const coffeeCategories = [
  {
    id: 1,
    name_en: "Espresso-Based",
    name_ar: "قهوة الإسبريسو",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    description_en:
      "Rich espresso-based drinks like cappuccino, latte, and macchiato.",
    description_ar:
      "مشروبات تعتمد على الإسبريسو مثل الكابتشينو واللاتيه والماكياتو.",
  },
  {
    id: 2,
    name_en: "Cold Coffee",
    name_ar: "القهوة الباردة",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    description_en: "Chilled coffee beverages perfect for warm days.",
    description_ar: "مشروبات قهوة باردة ومنعشة مثالية للأيام الحارة.",
  },
  {
    id: 3,
    name_en: "Traditional Coffee",
    name_ar: "القهوة التقليدية",
    image: "https://images.unsplash.com/photo-1600093463592-8a83a1f31d0f",
    description_en: "Classic styles like Turkish and Arabic coffee.",
    description_ar: "أنواع القهوة الكلاسيكية مثل القهوة التركية والعربية.",
  },
  {
    id: 4,
    name_en: "Specialty Coffee",
    name_ar: "القهوة المختصة",
    image: "https://images.unsplash.com/photo-1579992344076-3befd40fd17a",
    description_en:
      "High-quality coffees with unique flavors and brewing methods.",
    description_ar: "قهوة عالية الجودة بنكهات فريدة وطرق تحضير خاصة.",
  },
  {
    id: 5,
    name_en: "Brewed Coffee",
    name_ar: "القهوة المفلترة",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
    description_en: "Freshly brewed coffees like pour-over or drip.",
    description_ar: "قهوة طازجة تُحضر بالتقطير أو السكب اليدوي.",
  },
  {
    id: 6,
    name_en: "Hot Coffee",
    name_ar: "القهوة الساخنة",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    description_en: "Warm and comforting coffee served hot.",
    description_ar: "قهوة دافئة ومريحة تُقدم ساخنة.",
  },
];

export async function GET() {
  return NextResponse.json(coffeeCategories);
}
