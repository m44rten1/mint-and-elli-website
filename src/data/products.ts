import type { Product, ProductCategory } from '@/lib/types';

export const products: Product[] = [
  {
    id: 'sweatshirt-personalisiert',
    name: 'Personalisierter Pullover',
    description:
      'Kuschelig weicher Pullover aus nachhaltiger GOTS-Baumwolle. Mit Wunschname oder Initialen individuell bestickt – ein echtes Unikat.',
    priceMin: 28,
    priceMax: 38,
    category: 'oberteile',
    personalizable: true,
    sizes: ['50/56', '62/68', '74/80', '86/92', '98/104', '110/116', '122/128'],
    featured: true,
    placeholderColor: '#A8CDB8',
    placeholderAccent: '#5A9070',
    badge: 'Bestseller',
  },
  {
    id: 'weste-knopfleiste',
    name: 'Weste mit Knopfleiste',
    description:
      'Handgenähte Weste mit Druckknöpfen oder Reißverschluss. Das perfekte kuschelige Layering-Piece für jede Jahreszeit.',
    priceMin: 22,
    priceMax: 32,
    category: 'westen',
    personalizable: true,
    sizes: ['50/56', '62/68', '74/80', '86/92', '98/104', '110/116', '122/128'],
    featured: true,
    placeholderColor: '#E8B4B8',
    placeholderAccent: '#C47A82',
  },
  {
    id: 'jogginghose',
    name: 'Gemütliche Hose',
    description:
      'Bequeme Hose aus weichem Jersey-Stoff mit Gummizug. Perfekt für kleine Entdecker, die sich frei bewegen wollen.',
    priceMin: 18,
    priceMax: 26,
    category: 'hosen',
    personalizable: false,
    sizes: ['50/56', '62/68', '74/80', '86/92', '98/104', '110/116', '122/128'],
    featured: false,
    placeholderColor: '#DEBA94',
    placeholderAccent: '#A07040',
  },
  {
    id: 'set-pullover-hose',
    name: 'Outfit-Set',
    description:
      'Passendes Set aus Pullover und Hose – stylisch, bequem und natürlich handgemacht. Wahlweise mit Personalisierung.',
    priceMin: 42,
    priceMax: 58,
    category: 'sets',
    personalizable: true,
    sizes: ['50/56', '62/68', '74/80', '86/92', '98/104', '110/116', '122/128'],
    featured: true,
    placeholderColor: '#C4D8C8',
    placeholderAccent: '#5A9070',
    badge: 'Neu',
  },
  {
    id: 'schnullerkette',
    name: 'Schnullerkette',
    description:
      'Handgefertigte Schnullerkette mit Holzperlen und Silikonperlen. Sicher, schön und ein tolles Geschenk zur Geburt.',
    priceMin: 8,
    priceMax: 12,
    category: 'accessoires',
    personalizable: false,
    sizes: [],
    featured: true,
    placeholderColor: '#F5D8DA',
    placeholderAccent: '#C47A82',
  },
  {
    id: 'sonnenfaenger',
    name: 'Sonnenfänger',
    description:
      'Handgefertigter Sonnenfänger mit Regenbogenkristall – bringt bunte Lichtreflexe ins Kinderzimmer. Ein wunderschönes Geschenk.',
    priceMin: 12,
    priceMax: 18,
    category: 'accessoires',
    personalizable: false,
    sizes: [],
    featured: false,
    placeholderColor: '#FDE8A8',
    placeholderAccent: '#C49A6C',
  },
  {
    id: 'strampler',
    name: 'Strampler',
    description:
      'Kuschelig weicher Strampler aus Oekotex100-zertifiziertem Stoff für die Kleinsten. Mit Druckknöpfen für einfaches An- und Ausziehen.',
    priceMin: 24,
    priceMax: 34,
    category: 'oberteile',
    personalizable: true,
    sizes: ['50/56', '62/68', '74/80'],
    featured: false,
    placeholderColor: '#A8CDB8',
    placeholderAccent: '#5A9070',
  },
  {
    id: 'muetze',
    name: 'Strickmütze',
    description:
      'Handgestrickte Mütze aus weicher Wolle. Warm, kuschelig und in vielen Farben erhältlich.',
    priceMin: 14,
    priceMax: 20,
    category: 'accessoires',
    personalizable: false,
    sizes: ['50/56', '62/68', '74/80', '86/92', '98/104'],
    featured: false,
    placeholderColor: '#E8D4C0',
    placeholderAccent: '#A07040',
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const categoryLabels: Record<ProductCategory | 'alle', string> = {
  alle: 'Alle',
  oberteile: 'Oberteile',
  hosen: 'Hosen',
  westen: 'Westen',
  sets: 'Sets',
  accessoires: 'Accessoires',
};

export const allCategories = ['alle', 'oberteile', 'hosen', 'westen', 'sets', 'accessoires'] as const;
