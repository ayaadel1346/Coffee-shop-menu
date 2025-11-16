import { NextResponse } from "next/server";

const coffeeCategories = [
  {
    id: 1,
    name_en: "Espresso-Based",
    name_ar: "قهوة الإسبريسو",
    image:
      "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    description_en:
      "Rich espresso-based drinks like cappuccino, latte, and macchiato.",
    description_ar:
      "مشروبات تعتمد على الإسبريسو مثل الكابتشينو واللاتيه والماكياتو.",
  },
  {
    id: 2,
    name_en: "Cold Coffee",
    name_ar: "القهوة الباردة",
    image:
      "https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    description_en: "Chilled coffee beverages perfect for warm days.",
    description_ar: "مشروبات قهوة باردة ومنعشة مثالية للأيام الحارة.",
  },
  {
    id: 3,
    name_en: "Traditional Coffee",
    name_ar: "القهوة التقليدية",
    image:
      "https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
    description_en: "Classic styles like Turkish and Arabic coffee.",
    description_ar: "أنواع القهوة الكلاسيكية مثل القهوة التركية والعربية.",
  },
  {
    id: 4,
    name_en: "Specialty Coffee",
    name_ar: "القهوة المختصة",
    image:
      "https://images.unsplash.com/photo-1494314671902-399b18174975?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
    description_en:
      "High-quality coffees with unique flavors and brewing methods.",
    description_ar: "قهوة عالية الجودة بنكهات فريدة وطرق تحضير خاصة.",
  },
  {
    id: 5,
    name_en: "Brewed Coffee",
    name_ar: "القهوة المفلترة",
    image:
      "https://plus.unsplash.com/premium_photo-1669687924558-386bff1a0469?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxjb2ZmZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
    description_en: "Freshly brewed coffees like pour-over or drip.",
    description_ar: "قهوة طازجة تُحضر بالتقطير أو السكب اليدوي.",
  },
  {
    id: 6,
    name_en: "Hot Coffee",
    name_ar: "القهوة الساخنة",
    image:
      "https://images.unsplash.com/photo-1623035570668-a0f52a7d5640?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxjb2ZmZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
    description_en: "Warm and comforting coffee served hot.",
    description_ar: "قهوة دافئة ومريحة تُقدم ساخنة.",
  },
];

export async function GET(request: Request) {
  const locale = request.headers.get("accept-language") || "en";

  const categories = coffeeCategories.map((cat) => ({
    ...cat,
    name: locale === "ar" ? cat.name_ar : cat.name_en,
    description: locale === "ar" ? cat.description_ar : cat.description_en,
  }));

  return NextResponse.json(categories);
}
