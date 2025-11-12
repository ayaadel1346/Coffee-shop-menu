import { NextResponse } from "next/server";

export const coffeeData = [
  {
    id: 1,
    name: { en: "Espresso", ar: "إسبريسو" },
    description: {
      en: "A pure shot of concentrated coffee with a rich crema.",
      ar: "جرعة نقية من القهوة المركزة بطبقة غنية من الكريمة.",
    },
    origin: { en: "Italy", ar: "إيطاليا" },
    categoryId: 1,
    price: 3.5,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
  },
  {
    id: 2,
    name: { en: "Cappuccino", ar: "كابتشينو" },
    description: {
      en: "Espresso with steamed milk and foamy top.",
      ar: "إسبريسو مع حليب مبخر وطبقة رغوية.",
    },
    origin: { en: "Italy", ar: "إيطاليا" },
    categoryId: 1,
    price: 4.0,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    id: 3,
    name: { en: "Latte", ar: "لاتيه" },
    description: {
      en: "Espresso with lots of steamed milk and light foam.",
      ar: "إسبريسو مع كمية كبيرة من الحليب المبخر ورغوة خفيفة.",
    },
    origin: { en: "Italy", ar: "إيطاليا" },
    categoryId: 1,
    price: 4.5,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
  {
    id: 4,
    name: { en: "Macchiato", ar: "ماكياتو" },
    description: {
      en: "Espresso marked with a dollop of milk foam.",
      ar: "إسبريسو مع لمسة من رغوة الحليب.",
    },
    origin: { en: "Italy", ar: "إيطاليا" },
    categoryId: 1,
    price: 3.8,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },

  {
    id: 5,
    name: { en: "Iced Latte", ar: "لاتيه بارد" },
    description: {
      en: "Chilled espresso with milk and ice.",
      ar: "إسبريسو مبرد مع الحليب والثلج.",
    },
    origin: { en: "Global", ar: "عالمي" },
    categoryId: 2,
    price: 4.5,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
  },
  {
    id: 6,
    name: { en: "Cold Brew", ar: "قهوة باردة بالتخمير البارد" },
    description: {
      en: "Coffee brewed slowly with cold water for smooth flavor.",
      ar: "قهوة تُخمر ببطء بالماء البارد لنكهة ناعمة وغنية.",
    },
    origin: { en: "USA", ar: "الولايات المتحدة" },
    categoryId: 2,
    price: 5.0,
    image: "https://images.unsplash.com/photo-1600093463592-8a83a1f31d0f",
  },
  {
    id: 7,
    name: { en: "Frappuccino", ar: "فرابتشينو" },
    description: {
      en: "Blended iced coffee with milk, sugar, and cream.",
      ar: "قهوة مثلجة مخلوطة مع الحليب والسكر والكريمة.",
    },
    origin: { en: "USA", ar: "الولايات المتحدة" },
    categoryId: 2,
    price: 5.5,
    image: "https://images.unsplash.com/photo-1579992344076-3befd40fd17a",
  },

  {
    id: 8,
    name: { en: "Turkish Coffee", ar: "قهوة تركية" },
    description: {
      en: "Finely ground coffee brewed unfiltered in a cezve.",
      ar: "قهوة مطحونة ناعماً تُحضر بدون تصفية في ركوة.",
    },
    origin: { en: "Turkey", ar: "تركيا" },
    categoryId: 3,
    price: 3.0,
    image: "https://images.unsplash.com/photo-1523906630133-f6934a1ab1f3",
  },
  {
    id: 9,
    name: { en: "Arabic Coffee", ar: "قهوة عربية" },
    description: {
      en: "Light roasted coffee with cardamom and served without sugar.",
      ar: "قهوة فاتحة محمصة بالهيل وتُقدم بدون سكر.",
    },
    origin: { en: "Arab World", ar: "العالم العربي" },
    categoryId: 3,
    price: 2.8,
    image: "https://images.unsplash.com/photo-1600086827875-a63b8eaa88e2",
  },

  {
    id: 10,
    name: { en: "Affogato", ar: "أفوجاتو" },
    description: {
      en: "Espresso poured over vanilla ice cream.",
      ar: "إسبريسو يُسكب فوق آيس كريم الفانيليا.",
    },
    origin: { en: "Italy", ar: "إيطاليا" },
    categoryId: 4,
    price: 5.5,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
  },
  {
    id: 11,
    name: { en: "Mocha", ar: "موكا" },
    description: {
      en: "Espresso with chocolate syrup and steamed milk.",
      ar: "إسبريسو مع شراب الشوكولاتة والحليب المبخر.",
    },
    origin: { en: "Yemen", ar: "اليمن" },
    categoryId: 4,
    price: 4.8,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
  },

  {
    id: 12,
    name: { en: "French Press", ar: "فرنش بريس" },
    description: {
      en: "Coffee steeped and pressed for a rich and bold flavor.",
      ar: "قهوة تُنقع وتُضغط للحصول على نكهة غنية وقوية.",
    },
    origin: { en: "France", ar: "فرنسا" },
    categoryId: 5,
    price: 4.3,
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
  },
  {
    id: 13,
    name: { en: "Pour Over", ar: "صب القهوة" },
    description: {
      en: "Hot water poured over ground coffee for clean taste.",
      ar: "ماء ساخن يُسكب فوق البن المطحون لنكهة نظيفة وواضحة.",
    },
    origin: { en: "Global", ar: "عالمي" },
    categoryId: 5,
    price: 4.2,
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac",
  },

  {
    id: 14,
    name: { en: "Americano", ar: "أمريكانو" },
    description: {
      en: "Espresso diluted with hot water.",
      ar: "إسبريسو مخفف بالماء الساخن.",
    },
    origin: { en: "USA", ar: "الولايات المتحدة" },
    categoryId: 6,
    price: 3.5,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    id: 15,
    name: { en: "Flat White", ar: "فلات وايت" },
    description: {
      en: "Espresso with microfoam milk for a smooth texture.",
      ar: "إسبريسو مع حليب مزبد بقوام ناعم.",
    },
    origin: { en: "Australia", ar: "أستراليا" },
    categoryId: 6,
    price: 4.5,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
  },
];

export async function GET(request: Request) {
  const locale = request.headers.get("accept-language") || "en";
  const localizedData = coffeeData.map((coffee) => ({
    ...coffee,
    name: locale === "ar" ? coffee.name.ar : coffee.name.en,
    description:
      locale === "ar" ? coffee.description.ar : coffee.description.en,
    origin: locale === "ar" ? coffee.origin.ar : coffee.origin.en,
  }));

  return NextResponse.json(localizedData);
}
