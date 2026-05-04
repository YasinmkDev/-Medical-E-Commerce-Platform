export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  priceUSD: number;
  pricePKR: number;
  originalPriceUSD?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  stockStatus: 'in-stock' | 'low-stock' | 'institutional-order';
  stockCount: number;
  certifications: string[];
  warranty: string;
  description: string;
  clinicalApplication: string;
  specifications: Record<string, string>;
  features: string[];
  featured?: boolean;
  bestSeller?: boolean;
  pastelBg: string; // token name or hex for card background in grid
}

export interface Category {
  id: string;
  name: string;
  shortName: string;
  description: string;
  itemCount: number;
  pastelColor: string; // e.g. '#d2f2e3', '#e4f7ee', '#ccf0f8', '#faf7e8', '#fdf0ff', '#ffede8'
  textColor: string;
  icon: string;
  featuredProduct: string;
}

export interface ClinicalPersona {
  id: string;
  title: string;
  badge: string;
  icon: string;
  description: string;
  clinicalContext: string;
  recommendedProductIds: string[];
  urgencyBenefit: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  purchaseType: 'individual' | 'hospital-bulk';
}

export interface FilterState {
  searchQuery: string;
  selectedCategory: string;
  inStockOnly: boolean;
  certifiedOnly: boolean;
  sortBy: 'recommended' | 'price-asc' | 'price-desc' | 'rating';
}
