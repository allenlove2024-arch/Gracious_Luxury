import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-luxury-black text-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-tighter font-bold mb-6 block">
              GRACIOUS<span className="text-gold">LUXURY</span>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              Curated, affordable luxury thrift bags. Every bag has a story, and we're here to help you find yours.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-cream/60">
              <li><Link to="/shop" className="hover:text-gold transition-colors">All Collections</Link></li>
              <li><Link to="/shop?brand=Chanel" className="hover:text-gold transition-colors">Chanel</Link></li>
              <li><Link to="/shop?brand=Louis Vuitton" className="hover:text-gold transition-colors">Louis Vuitton</Link></li>
              <li><Link to="/shop?brand=Hermès" className="hover:text-gold transition-colors">Hermès</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-cream/60">
              <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-gold transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Connect</h4>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
              <a href="mailto:hello@graciousluxury.com" className="hover:text-gold transition-colors"><Mail size={20} /></a>
            </div>
            <p className="text-xs text-cream/40">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-cream/40">
          <p>© 2024 Graciousluxurybags. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
