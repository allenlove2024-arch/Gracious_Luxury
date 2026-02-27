import React from 'react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-20 text-center">
        <div className="flex justify-center mb-8 text-luxury-black/10">
          <ShoppingBag size={120} strokeWidth={1} />
        </div>
        <h2 className="text-4xl font-serif mb-6">Your Bag is Empty</h2>
        <p className="text-luxury-black/60 mb-12 max-w-md mx-auto">
          Looks like you haven't added any luxury pieces to your collection yet.
        </p>
        <Link to="/shop" className="btn-primary">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-serif mb-16">Shopping Bag ({totalItems})</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-8">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 pb-8 border-b border-luxury-black/5"
              >
                <Link to={`/product/${item.id}`} className="w-32 aspect-[4/5] overflow-hidden flex-shrink-0">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                </Link>

                <div className="flex-grow">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold mb-1 block">{item.brand}</span>
                  <Link to={`/product/${item.id}`} className="text-xl font-serif hover:text-gold transition-colors block mb-2">
                    {item.name}
                  </Link>
                  <p className="text-xs text-luxury-black/40 uppercase tracking-widest mb-4">Size: {item.size}</p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center border border-luxury-black/10">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-luxury-black/5 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-4 text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-luxury-black/5 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-luxury-black/40 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xl font-medium">${(item.price * item.quantity).toLocaleString()}</p>
                  {item.quantity > 1 && (
                    <p className="text-xs text-luxury-black/40 mt-1">${item.price.toLocaleString()} each</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white p-8 border border-luxury-black/5 shadow-sm sticky top-32">
              <h3 className="text-2xl font-serif mb-8">Order Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-luxury-black/60">Subtotal</span>
                  <span className="font-medium">${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-luxury-black/60">Shipping</span>
                  <span className="text-green-600 font-medium uppercase tracking-widest text-[10px]">Complimentary</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-luxury-black/60">Tax</span>
                  <span className="font-medium">Calculated at checkout</span>
                </div>
                <div className="pt-4 border-t border-luxury-black/5 flex justify-between items-end">
                  <span className="text-lg font-serif">Total</span>
                  <span className="text-2xl font-bold">${totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <button className="btn-primary w-full py-4 flex items-center justify-center group">
                Proceed to Checkout <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>

              <div className="mt-8 space-y-4">
                <p className="text-[10px] text-center text-luxury-black/40 uppercase tracking-widest">Secure Payment Options</p>
                <div className="flex justify-center space-x-4 opacity-30 grayscale">
                  {/* Placeholder for payment icons */}
                  <div className="w-10 h-6 bg-luxury-black rounded-sm" />
                  <div className="w-10 h-6 bg-luxury-black rounded-sm" />
                  <div className="w-10 h-6 bg-luxury-black rounded-sm" />
                  <div className="w-10 h-6 bg-luxury-black rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
