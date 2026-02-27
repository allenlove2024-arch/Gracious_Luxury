import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { motion } from 'framer-motion';
import { useCart } from '../CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden relative aspect-[4/5]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/10 transition-colors duration-300" />
        <div className="absolute top-4 left-4 bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-widest font-semibold">
          {product.condition}
        </div>
      </Link>

      <div className="mt-6 text-center">
        <p className="text-xs text-luxury-black/50 uppercase tracking-widest mb-1">{product.brand}</p>
        <Link to={`/product/${product.id}`} className="block group-hover:text-gold transition-colors">
          <h3 className="font-serif text-lg mb-2">{product.name}</h3>
        </Link>
        <div className="flex items-center justify-center space-x-3">
          <span className="text-luxury-black font-medium">${product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-luxury-black/30 line-through text-sm">${product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs uppercase tracking-widest font-bold border-b border-luxury-black pb-1 hover:text-gold hover:border-gold"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};
