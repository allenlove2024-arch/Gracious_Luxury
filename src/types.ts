export type Condition = 'New with Tags' | 'Excellent' | 'Very Good' | 'Good';

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  condition: Condition;
  size: string;
  description: string;
  images: string[];
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}
