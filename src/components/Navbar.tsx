import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useCart } from '../CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-luxury-black">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-serif tracking-tighter font-bold">
              GRACIOUS<span className="text-gold">LUXURY</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm uppercase tracking-widest transition-colors hover:text-gold ${
                  location.pathname === link.path ? 'text-gold font-semibold' : 'text-luxury-black/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-luxury-black/70 hover:text-gold transition-colors">
              <Search size={20} />
            </button>
            <Link to="/cart" className="relative text-luxury-black/70 hover:text-gold transition-colors">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-t border-luxury-black/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-serif tracking-wide text-luxury-black hover:text-gold"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
