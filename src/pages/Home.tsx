import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';

export const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Bag Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-cream">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="uppercase tracking-[0.3em] text-sm font-medium mb-6 block text-gold">Curated Excellence</span>
            <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
              Timeless Luxury, <br />
              <span className="italic">Redefined.</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 mb-10 font-light leading-relaxed">
              Discover our exclusive collection of pre-owned luxury bags. Every piece is authenticated and carries a story of elegance.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/shop" className="btn-primary inline-flex items-center justify-center">
                Shop Collection <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/about" className="btn-outline border-cream text-cream hover:bg-cream hover:text-luxury-black inline-flex items-center justify-center">
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-20 bg-cream border-b border-luxury-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['CHANEL', 'HERMÈS', 'LOUIS VUITTON', 'DIOR', 'GUCCI', 'PRADA'].map((brand) => (
              <span key={brand} className="text-xl md:text-2xl font-serif tracking-widest font-bold">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">The Curated Selection</h2>
              <p className="text-luxury-black/60 leading-relaxed">
                Hand-picked pieces that represent the pinnacle of luxury craftsmanship. From vintage classics to modern icons.
              </p>
            </div>
            <Link to="/shop" className="mt-8 md:mt-0 text-sm uppercase tracking-widest font-bold border-b-2 border-gold pb-2 hover:text-gold transition-colors">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-32 bg-blush/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1590739225287-bd31519780c3?auto=format&fit=crop&q=80&w=1000"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border-8 border-gold hidden md:block" />
            </div>
            <div>
              <span className="uppercase tracking-[0.3em] text-xs font-bold text-gold mb-6 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Luxury Doesn't Have to be Out of Reach</h2>
              <p className="text-lg text-luxury-black/70 mb-8 leading-relaxed">
                At Graciousluxurybags, we believe that true style is timeless and sustainable. By curating the finest secondhand luxury bags, we give these masterpieces a second life while making high-end fashion accessible to the discerning collector.
              </p>
              <p className="text-lg text-luxury-black/70 mb-12 leading-relaxed">
                Every bag in our collection undergoes a rigorous authentication process to ensure you receive only the genuine article.
              </p>
              <Link to="/about" className="btn-primary">Discover More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-luxury-black text-cream overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Join the Inner Circle</h2>
          <p className="text-cream/60 mb-12 leading-relaxed">
            Be the first to know about new arrivals, exclusive drops, and private sales.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-grow bg-transparent border border-cream/20 px-6 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-primary bg-gold hover:bg-cream hover:text-luxury-black">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
