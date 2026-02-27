import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data';
import { useCart } from '../CartContext';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShieldCheck, Truck, RotateCcw, Star } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-3xl font-serif mb-6">Product Not Found</h2>
        <Link to="/shop" className="btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.brand === product.brand && p.id !== product.id).slice(0, 3);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-12 text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-black/40">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-luxury-black">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-[4/5] overflow-hidden bg-white relative group">
              <motion.img
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={product.images[currentImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImage(prev => (prev === 0 ? product.images.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-cream/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setCurrentImage(prev => (prev === product.images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-cream/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`aspect-square overflow-hidden border-2 transition-all ${
                    currentImage === idx ? 'border-gold' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4 block">{product.brand}</span>
              <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-3xl font-medium">${product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-xl text-luxury-black/30 line-through">${product.originalPrice.toLocaleString()}</span>
                )}
              </div>
              <div className="flex items-center space-x-2 mb-8">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-xs uppercase tracking-widest text-luxury-black/40 font-bold">(Authenticated)</span>
              </div>
            </div>

            <div className="space-y-8 mb-12">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-3">Condition</h4>
                <div className="inline-block bg-blush px-4 py-2 text-xs uppercase tracking-widest font-bold">
                  {product.condition}
                </div>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-3">Size</h4>
                <p className="text-luxury-black/70">{product.size}</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-3">Description</h4>
                <p className="text-luxury-black/70 leading-relaxed">{product.description}</p>
              </div>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="btn-primary w-full py-5 text-base mb-12"
            >
              Add to Bag
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-luxury-black/5">
              <div className="text-center">
                <ShieldCheck className="mx-auto mb-3 text-gold" size={24} />
                <span className="text-[10px] uppercase tracking-widest font-bold block">100% Authentic</span>
              </div>
              <div className="text-center">
                <Truck className="mx-auto mb-3 text-gold" size={24} />
                <span className="text-[10px] uppercase tracking-widest font-bold block">Global Shipping</span>
              </div>
              <div className="text-center">
                <RotateCcw className="mx-auto mb-3 text-gold" size={24} />
                <span className="text-[10px] uppercase tracking-widest font-bold block">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="pt-20 border-t border-luxury-black/5">
            <h2 className="text-3xl font-serif mb-12">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
