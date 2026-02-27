import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[0.3em] text-xs font-bold text-gold mb-6 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Curating Elegance, <br />One Bag at a Time.</h1>
            <p className="text-lg text-luxury-black/70 mb-8 leading-relaxed">
              Founded in 2020, Graciousluxurybags was born out of a passion for high fashion and a commitment to sustainability. We believe that luxury should be timeless, not disposable.
            </p>
            <p className="text-lg text-luxury-black/70 leading-relaxed">
              Our mission is to bridge the gap between aspirational luxury and accessibility. We meticulously source and authenticate pre-owned designer bags from around the world, ensuring each piece meets our exacting standards of quality and style.
            </p>
          </motion.div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1591561954557-26941169b79e?auto=format&fit=crop&q=80&w=1000"
                alt="Our Collection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-64 h-64 border-8 border-gold hidden md:block -z-10" />
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
          <div className="text-center">
            <h3 className="text-2xl font-serif mb-6">Authentication</h3>
            <p className="text-luxury-black/60 leading-relaxed">
              Every item in our collection undergoes a multi-point inspection by our team of experts to guarantee 100% authenticity.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-serif mb-6">Sustainability</h3>
            <p className="text-luxury-black/60 leading-relaxed">
              By choosing pre-owned, you're participating in a circular fashion economy that reduces waste and honors craftsmanship.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-serif mb-6">Curation</h3>
            <p className="text-luxury-black/60 leading-relaxed">
              We don't just sell bags; we curate a collection of icons. Only the most desirable and well-preserved pieces make the cut.
            </p>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="h-[60vh] overflow-hidden mb-32">
          <img
            src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Lifestyle"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Team/Founder Message */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8 italic">"Luxury is not about the price tag; it's about the feeling of owning a piece of history."</h2>
          <div className="w-20 h-px bg-gold mx-auto mb-8" />
          <p className="text-xs uppercase tracking-[0.3em] font-bold">The Gracious Team</p>
        </div>
      </div>
    </div>
  );
};
