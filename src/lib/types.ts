export type ProductCategory = 'oberteile' | 'hosen' | 'westen' | 'sets' | 'accessoires';

export interface Product {
  id: string;
  name: string;
  description: string;
  priceMin: number;
  priceMax: number;
  category: ProductCategory;
  personalizable: boolean;
  sizes: string[];
  featured: boolean;
  placeholderColor: string;
  placeholderAccent: string;
  badge?: string;
  image?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  personalization?: string;
}
