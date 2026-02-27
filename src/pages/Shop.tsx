import React, { useState, useMemo } from 'react';
import { products } from '../data';
import { ProductCard } from '../components/ProductCard';
import { Filter, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Shop = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const brands = ['All', ...Array.from(new Set(products.map(p => p.brand)))];
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    let result = products.filter(p => {
      const brandMatch = selectedBrand === 'All' || p.brand === selectedBrand;
      const categoryMatch = selectedCategory === 'All' || p.category === selectedCategory;
      return brandMatch && categoryMatch;
    });

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    }

    return result;
  }, [selectedBrand, selectedCategory, sortBy]);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">The Collection</h1>
          <p className="text-luxury-black/60 max-w-2xl mx-auto">
            Browse our curated selection of authenticated luxury bags. Use the filters to find your perfect match.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-y border-luxury-black/5 py-6">
          <div className="flex items-center space-x-8 mb-6 md:mb-0">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 text-sm uppercase tracking-widest font-bold hover:text-gold transition-colors"
            >
              <Filter size={18} />
              <span>Filters</span>
            </button>
            <div className="hidden md:flex items-center space-x-4 text-xs uppercase tracking-widest text-luxury-black/40">
              <span>{filteredProducts.length} Products</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-xs uppercase tracking-widest text-luxury-black/40">Sort By:</span>
            <div className="relative group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm uppercase tracking-widest font-bold pr-8 focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filter Drawer */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-8 bg-blush/20">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Brand</h4>
                  <div className="flex flex-wrap gap-3">
                    {brands.map(brand => (
                      <button
                        key={brand}
                        onClick={() => setSelectedBrand(brand)}
                        className={`px-4 py-2 text-xs uppercase tracking-widest border transition-all ${
                          selectedBrand === brand
                            ? 'bg-luxury-black text-cream border-luxury-black'
                            : 'border-luxury-black/10 hover:border-luxury-black'
                        }`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Category</h4>
                  <div className="flex flex-wrap gap-3">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 text-xs uppercase tracking-widest border transition-all ${
                          selectedCategory === cat
                            ? 'bg-luxury-black text-cream border-luxury-black'
                            : 'border-luxury-black/10 hover:border-luxury-black'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-end justify-end">
                  <button
                    onClick={() => {
                      setSelectedBrand('All');
                      setSelectedCategory('All');
                      setSortBy('featured');
                    }}
                    className="text-xs uppercase tracking-widest font-bold border-b border-luxury-black pb-1 hover:text-gold hover:border-gold transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-40 text-center">
            <h3 className="text-2xl font-serif mb-4">No products found</h3>
            <p className="text-luxury-black/60 mb-8">Try adjusting your filters to find what you're looking for.</p>
            <button
              onClick={() => {
                setSelectedBrand('All');
                setSelectedCategory('All');
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
