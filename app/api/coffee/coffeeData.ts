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
    image:
      "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RXNwcmVzc298ZW58MHx8MHx8fDA%3D",
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
    image:
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FwcHVjY2lub3xlbnwwfHwwfHx8MA%3D%3D",
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
    image:
      "https://images.unsplash.com/photo-1563731649913-fab41907b535?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWFjY2hpYXRvfGVufDB8fDB8fHww",
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
    image:
      "https://images.unsplash.com/photo-1671759545218-831c32bfe92d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SWNlZCUyMExhdHRlfGVufDB8fDB8fHww",
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
    image:
      "https://images.unsplash.com/photo-1527156231393-7023794f363c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENvbGQlMjBCcmV3fGVufDB8fDB8fHww",
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
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnJhcHB1Y2Npbm98ZW58MHx8MHx8fDA%3D",
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
    image:
      "https://images.unsplash.com/photo-1600628129418-fb34b9a2c484?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFR1cmtpc2glMjBDb2ZmZWV8ZW58MHx8MHx8fDA%3D",
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
    image:
      "https://plus.unsplash.com/premium_photo-1670684184188-bd6ce82fd366?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXJhYmljJTIwQ29mZmVlfGVufDB8fDB8fHww",
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
    image:
      "https://images.unsplash.com/photo-1618576230663-9714aecfb99a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9jaGF8ZW58MHx8MHx8fDA%3D",
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
    image:
      "https://images.unsplash.com/photo-1516036018940-b0159d2ab461?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEZyZW5jaCUyMFByZXNzfGVufDB8fDB8fHww",
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
    image:
      "https://plus.unsplash.com/premium_photo-1667621221108-d9ff42adee84?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UG91ciUyME92ZXJ8ZW58MHx8MHx8fDA%3D",
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
    image:
      "https://images.unsplash.com/photo-1580661869408-55ab23f2ca6e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QW1lcmljYW5vfGVufDB8fDB8fHww",
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
    image:
      "https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmxhdCUyMFdoaXRlfGVufDB8fDB8fHww",
  },
  {
    id: 16,
    name: { en: "Irish Coffee", ar: "قهوة أيرلندية" },
    description: {
      en: "Hot coffee mixed with Irish whiskey, sugar, and topped with cream.",
      ar: "قهوة ساخنة ممزوجة مع الويسكي الأيرلندي والسكر ومغطاة بالكريمة.",
    },
    origin: { en: "Ireland", ar: "أيرلندا" },
    categoryId: 4,
    price: 6.0,
    image:
      "https://images.unsplash.com/photo-1730190982117-4106871e1f47?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SXJpc2glMjBDb2ZmZWV8ZW58MHx8MHx8fDA%3D",
  },

  {
    id: 17,
    name: { en: "Cortado", ar: "كورتادو" },
    description: {
      en: "Equal parts espresso and warm milk for balanced taste.",
      ar: "مزيج متساوٍ من الإسبريسو والحليب الدافئ لنكهة متوازنة.",
    },
    origin: { en: "Spain", ar: "إسبانيا" },
    categoryId: 1,
    price: 3.9,
    image:
      "https://images.unsplash.com/photo-1519532059956-a63a37af5deb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ydGFkb3xlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    id: 18,
    name: { en: "Ristretto", ar: "ريستريتو" },
    description: {
      en: "A shorter, more concentrated shot of espresso.",
      ar: "جرعة أقصر وأكثر تركيزاً من الإسبريسو.",
    },
    origin: { en: "Italy", ar: "إيطاليا" },
    categoryId: 1,
    price: 3.2,
    image: "https://images.unsplash.com/photo-1522922235461-912955b0772b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmlzdHJldHRvfGVufDB8fDB8fHww",
  },

  {
    id: 19,
    name: { en: "Iced Americano", ar: "أمريكانو بارد" },
    description: {
      en: "Espresso poured over cold water and ice.",
      ar: "إسبريسو يُسكب فوق الماء البارد والثلج.",
    },
    origin: { en: "USA", ar: "الولايات المتحدة" },
    categoryId: 2,
    price: 3.8,
    image:
      "https://plus.unsplash.com/premium_photo-1661370085023-16bf34456bbf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SWNlZCUyMEFtZXJpY2Fub3xlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    id: 20,
    name: { en: "Frappe", ar: "فرابيه" },
    description: {
      en: "Iced blended coffee with sugar and foam.",
      ar: "قهوة مثلجة مخفوقة مع السكر ورغوة سميكة.",
    },
    origin: { en: "Greece", ar: "اليونان" },
    categoryId: 2,
    price: 4.6,
    image:
      "https://images.unsplash.com/photo-1718267050383-04a8f3df5335?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RnJhcHBlfGVufDB8fDB8fHww",
  },

  {
    id: 21,
    name: { en: "Vietnamese Coffee", ar: "قهوة فيتنامية" },
    description: {
      en: "Strong coffee brewed with a drip filter and sweetened condensed milk.",
      ar: "قهوة قوية تُحضر بتقطير بطيء وتُقدم مع الحليب المكثف المحلى.",
    },
    origin: { en: "Vietnam", ar: "فيتنام" },
    categoryId: 3,
    price: 4.0,
    image: "https://images.unsplash.com/photo-1494314671902-399b18174975",
  },

  {
    id: 22,
    name: { en: "Qahwa Saudi", ar: "قهوة سعودية" },
    description: {
      en: "Light coffee with cardamom, saffron, and served with dates.",
      ar: "قهوة خفيفة مع الهيل والزعفران وتُقدم مع التمر.",
    },
    origin: { en: "Saudi Arabia", ar: "السعودية" },
    categoryId: 3,
    price: 3.0,
    image:
      "https://images.unsplash.com/photo-1621954203123-b915cfc28b7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwUWFod2ElMjBTYXVkaXxlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    id: 23,
    name: { en: "Mazagran", ar: "مزاقران" },
    description: {
      en: "Cold sweetened coffee typically served with lemon.",
      ar: "قهوة باردة محلاة تُقدم غالباً مع الليمون.",
    },
    origin: { en: "Algeria", ar: "الجزائر" },
    categoryId: 2,
    price: 4.1,
    image:
      "https://images.unsplash.com/photo-1748190993365-35d6f51ddd8d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWF6YWdyYW4lMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D",
  },

  {
    id: 24,
    name: { en: "Dalgona Coffee", ar: "قهوة دالجونا" },
    description: {
      en: "Whipped coffee over cold or hot milk.",
      ar: "قهوة مخفوقة تُقدم فوق الحليب البارد أو الساخن.",
    },
    origin: { en: "Korea", ar: "كوريا" },
    categoryId: 4,
    price: 5.0,
    image:
      "https://images.unsplash.com/photo-1587462969622-b0d51d428f6d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGFsZ29uYSUyMENvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    id: 25,
    name: { en: "White Mocha", ar: "موكا بيضاء" },
    description: {
      en: "Espresso with white chocolate and steamed milk.",
      ar: "إسبريسو مع شوكولاتة بيضاء وحليب مبخر.",
    },
    origin: { en: "USA", ar: "الولايات المتحدة" },
    categoryId: 4,
    price: 5.2,
    image:
      "https://images.unsplash.com/photo-1736813132213-5cdb52b58c4b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFdoaXRlJTIwTW9jaGElMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D",
  },

  {
    id: 26,
    name: { en: "V60 Brew", ar: "قهوة V60" },
    description: {
      en: "Manual pour-over technique using V60 cone for clarity.",
      ar: "طريقة صب يدوية باستخدام قمع V60 لنكهة نقية وواضحة.",
    },
    origin: { en: "Japan", ar: "اليابان" },
    categoryId: 5,
    price: 4.6,
    image:
      "https://images.unsplash.com/photo-1588108570629-bbebb93148f0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFY2MCUyMEJyZXd8ZW58MHx8MHx8fDA%3D",
  },

  {
    id: 27,
    name: { en: "Chemex", ar: "كيمكس" },
    description: {
      en: "Clean, smooth coffee brewed with special thick filter.",
      ar: "قهوة نظيفة وناعمة تُحضر باستخدام فلتر سميك خاص.",
    },
    origin: { en: "USA", ar: "الولايات المتحدة" },
    categoryId: 5,
    price: 4.9,
    image:
      "https://images.unsplash.com/photo-1530346460498-48afc564f57a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENoZW1leHxlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    id: 28,
    name: { en: "Red Eye", ar: "ريد آي" },
    description: {
      en: "Drip coffee boosted with a shot of espresso.",
      ar: "قهوة مقطرة معززة بجرعة من الإسبريسو.",
    },
    origin: { en: "USA", ar: "الولايات المتحدة" },
    categoryId: 6,
    price: 4.4,
    image:
      "https://images.unsplash.com/photo-1695269727996-c795df344d0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFJlZCUyMEV5ZSUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    id: 29,
    name: { en: "Long Black", ar: "لونغ بلاك" },
    description: {
      en: "Espresso poured over hot water for a stronger flavor.",
      ar: "إسبريسو يُسكب فوق الماء الساخن لنكهة أقوى.",
    },
    origin: { en: "Australia", ar: "أستراليا" },
    categoryId: 6,
    price: 3.9,
    image:
      "https://images.unsplash.com/photo-1644893197562-7b60ae75fb61?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TG9uZyUyMEJsYWNrJTIwY29mZmVlfGVufDB8fDB8fHww",
  },

  {
    id: 30,
    name: { en: "Lungo", ar: "لونغو" },
    description: {
      en: "A 'long' espresso shot extracted with more water.",
      ar: "جرعة إسبريسو طويلة تُستخلص بكمية أكبر من الماء.",
    },
    origin: { en: "Italy", ar: "إيطاليا" },
    categoryId: 1,
    price: 3.7,
    image:
      "https://images.unsplash.com/photo-1628355974734-dfbc63912e44?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGx1bmdvJTIwY29mZmVlfGVufDB8fDB8fHww",
  },
  {
    id: 31,
    name: { en: "Iced Mocha", ar: "موكا باردة" },
    description: {
      en: "Chilled mocha served with ice and chocolate sauce.",
      ar: "موكا باردة مع الثلج وصلصة الشوكولاتة.",
    },
    origin: { en: "USA", ar: "الولايات المتحدة" },
    categoryId: 2,
    price: 5.0,
    image:
      "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SWNlZCUyME1vY2hhfGVufDB8fDB8fHww",
  },

  {
    id: 32,
    name: { en: "Spanish Latte", ar: "لاتيه إسباني" },
    description: {
      en: "Espresso with steamed milk and condensed milk for sweetness.",
      ar: "إسبريسو مع حليب مبخر وحليب مكثف محلى.",
    },
    origin: { en: "Spain", ar: "إسبانيا" },
    categoryId: 4,
    price: 5.2,
    image:
      "https://plus.unsplash.com/premium_photo-1677607237294-b041e4b57391?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3BhbmlzaCUyMExhdHRlfGVufDB8fDB8fHww",
  },

  {
    id: 33,
    name: { en: "Dirty Chai Latte", ar: "ديرتي شاي لاتيه" },
    description: {
      en: "Chai latte mixed with a shot of espresso.",
      ar: "شاي لاتيه ممزوج بجرعة من الإسبريسو.",
    },
    origin: { en: "India", ar: "الهند" },
    categoryId: 4,
    price: 5.7,
    image:
      "https://plus.unsplash.com/premium_photo-1719617327169-c7c1f3bd18c1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGlydHklMjBDaGFpJTIwTGF0dGV8ZW58MHx8MHx8fDA%3D",
  },

  {
    id: 34,
    name: { en: "Café au Lait", ar: "قهوة بالحليب" },
    description: {
      en: "Brewed coffee with steamed milk.",
      ar: "قهوة مصفاة ممزوجة مع الحليب المبخر.",
    },
    origin: { en: "France", ar: "فرنسا" },
    categoryId: 1,
    price: 4.1,
    image:
      "https://plus.unsplash.com/premium_photo-1674406102318-c9d362ad510b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2FmJUMzJUE5JTIwYXUlMjBMYWl0fGVufDB8fDB8fHww",
  },

  {
    id: 35,
    name: { en: "Bulletproof Coffee", ar: "قهوة مضادة للرصاص" },
    description: {
      en: "Coffee blended with butter and MCT oil.",
      ar: "قهوة ممزوجة بالزبدة وزيت MCT.",
    },
    origin: { en: "USA", ar: "الولايات المتحدة" },
    categoryId: 6,
    price: 5.8,
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
  },

  {
    id: 36,
    name: { en: "Iced Caramel Latte", ar: "لاتيه كاراميل بارد" },
    description: {
      en: "Iced latte sweetened with caramel syrup.",
      ar: "لاتيه بارد مُحلى بشراب الكراميل.",
    },
    origin: { en: "Global", ar: "عالمي" },
    categoryId: 2,
    price: 5.3,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772",
  },

  {
    id: 37,
    name: { en: "Iced White Mocha", ar: "موكا بيضاء باردة" },
    description: {
      en: "Iced coffee mixed with white chocolate and milk.",
      ar: "قهوة مثلجة ممزوجة مع الشوكولاتة البيضاء والحليب.",
    },
    origin: { en: "USA", ar: "الولايات المتحدة" },
    categoryId: 2,
    price: 5.6,
    image:
      "https://images.unsplash.com/photo-1728777187075-4fc056442747?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SWNlZCUyMFdoaXRlJTIwTW9jaGF8ZW58MHx8MHx8fDA%3D",
  },

  {
    id: 38,
    name: { en: "Korean Iced Coffee", ar: "قهوة باردة كورية" },
    description: {
      en: "Cold espresso with milk and a layer of foam.",
      ar: "إسبريسو بارد مع الحليب وطبقة من الرغوة.",
    },
    origin: { en: "Korea", ar: "كوريا" },
    categoryId: 2,
    price: 5.4,
    image:
      "https://images.unsplash.com/photo-1643974148852-eb1b092f4cf4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8S29yZWFuJTIwSWNlZCUyMENvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    id: 39,
    name: { en: "Café Bombón", ar: "قهوة بومبون" },
    description: {
      en: "Espresso mixed with sweet condensed milk in layers.",
      ar: "إسبريسو ممزوج مع حليب مكثف محلى بطبقات.",
    },
    origin: { en: "Spain", ar: "إسبانيا" },
    categoryId: 4,
    price: 4.7,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
  },

  {
    id: 40,
    name: { en: "Café Cubano", ar: "قهوة كوبية" },
    description: {
      en: "Strong Cuban espresso sweetened with sugar during brewing.",
      ar: "إسبريسو كوبي قوي يُحلى بالسكر أثناء التخمير.",
    },
    origin: { en: "Cuba", ar: "كوبا" },
    categoryId: 3,
    price: 4.0,
    image:
      "https://images.unsplash.com/photo-1747218622335-77b9bb8f76bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENhZiVDMyVBOSUyMEN1YmFub3xlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    id: 41,
    name: { en: "Iced Flat White", ar: "فلات وايت بارد" },
    description: {
      en: "Chilled flat white with smooth milk and espresso.",
      ar: "فلات وايت بارد مع حليب ناعم وإسبريسو.",
    },
    origin: { en: "Australia", ar: "أستراليا" },
    categoryId: 2,
    price: 4.8,
    image:
      "https://images.unsplash.com/photo-1596018589997-767b020f1245?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SWNlZCUyMEZsYXQlMjBXaGl0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    id: 42,
    name: { en: "Café de Olla", ar: "قهوة دي أولا" },
    description: {
      en: "Mexican coffee brewed with cinnamon and piloncillo sugar.",
      ar: "قهوة مكسيكية تُخمر مع القرفة وسكر بيليونسيو.",
    },
    origin: { en: "Mexico", ar: "المكسيك" },
    categoryId: 3,
    price: 4.3,
    image: "https://images.unsplash.com/photo-1481391032119-d89fee407e44",
  },

  {
    id: 43,
    name: { en: "Café Breve", ar: "قهوة بريف" },
    description: {
      en: "Espresso with steamed half-and-half for a creamy texture.",
      ar: "إسبريسو مع نصف حليب ونصف كريمة لقوام غني.",
    },
    origin: { en: "USA", ar: "الولايات المتحدة" },
    categoryId: 4,
    price: 5.4,
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
  },

  {
    id: 44,
    name: { en: "AeroPress Coffee", ar: "قهوة أيروبريس" },
    description: {
      en: "Smooth, fast-brewed coffee using an AeroPress device.",
      ar: "قهوة ناعمة تُحضر بسرعة باستخدام جهاز أيروبريس.",
    },
    origin: { en: "USA", ar: "الولايات المتحدة" },
    categoryId: 5,
    price: 4.5,
    image:
      "https://images.unsplash.com/photo-1668022149124-591b9687970f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWVyb1ByZXNzJTIwQ29mZmVlfGVufDB8fDB8fHww",
  },

  {
    id: 45,
    name: { en: "Turkish Dibek Coffee", ar: "قهوة ديبك التركية" },
    description: {
      en: "Smooth Turkish-style coffee with a stone-ground texture.",
      ar: "قهوة تركية ناعمة جداً تُطحن بطريقة حجرية.",
    },
    origin: { en: "Turkey", ar: "تركيا" },
    categoryId: 3,
    price: 3.6,
    image:
      "https://plus.unsplash.com/premium_photo-1732818136131-3dcfdaaa6a8e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VHVya2lzaCUyMERpYmVrJTIwQ29mZmVlfGVufDB8fDB8fHww",
  },
];
