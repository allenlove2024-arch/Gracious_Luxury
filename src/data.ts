import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Vintage Classic Flap Bag',
    brand: 'Chanel',
    price: 4200,
    originalPrice: 8500,
    condition: 'Excellent',
    size: 'Medium',
    description: 'A timeless piece from the 90s. Black lambskin leather with gold-tone hardware. Iconic CC turn-lock closure.',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1591561954557-26941169b79e?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Shoulder Bag'
  },
  {
    id: '2',
    name: 'Monogram Speedy 30',
    brand: 'Louis Vuitton',
    price: 950,
    originalPrice: 1600,
    condition: 'Very Good',
    size: '30cm',
    description: 'The classic LV Speedy. Durable monogram canvas with natural cowhide leather trim. Spacious interior.',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590739225287-bd31519780c3?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Handbag'
  },
  {
    id: '3',
    name: 'Lady Dior My ABCDior',
    brand: 'Dior',
    price: 3800,
    originalPrice: 5600,
    condition: 'Excellent',
    size: 'Small',
    description: 'Blush pink Cannage lambskin. Features the iconic DIOR charms. Comes with a customizable strap.',
    images: [
      'https://images.unsplash.com/photo-1566150905458-1bf1fd113f0d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Handbag'
  },
  {
    id: '4',
    name: 'GG Marmont Shoulder Bag',
    brand: 'Gucci',
    price: 1200,
    originalPrice: 2100,
    condition: 'Good',
    size: 'Small',
    description: 'Black matelassé leather with chevron design. Antique gold-toned hardware. Double G logo.',
    images: [
      'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Shoulder Bag'
  },
  {
    id: '5',
    name: 'Birkin 35 Gold Togo',
    brand: 'Hermès',
    price: 12500,
    originalPrice: 15000,
    condition: 'Excellent',
    size: '35cm',
    description: 'The ultimate luxury. Gold Togo leather with palladium hardware. A rare find in this condition.',
    images: [
      'https://images.unsplash.com/photo-1523779105320-d1ec346ff510?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Handbag'
  },
  {
    id: '6',
    name: 'Prada Re-Edition 2005',
    brand: 'Prada',
    price: 850,
    originalPrice: 1200,
    condition: 'Very Good',
    size: 'Mini',
    description: 'Black nylon shoulder bag. Sustainable and stylish. Features the iconic triangle logo.',
    images: [
      'https://images.unsplash.com/photo-1605733513597-a8f8d410fe3c?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Shoulder Bag'
  }
];
