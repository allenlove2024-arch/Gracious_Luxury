import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Get in Touch</h1>
          <p className="text-luxury-black/60 max-w-2xl mx-auto">
            Have a question about a specific bag or our authentication process? Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="bg-white p-10 shadow-sm border border-luxury-black/5">
            <h3 className="text-2xl font-serif mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-cream border border-luxury-black/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-cream border border-luxury-black/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold mb-2">Subject</label>
                <select className="w-full bg-cream border border-luxury-black/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Authentication Question</option>
                  <option>Shipping & Returns</option>
                  <option>Sell Your Bag</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full bg-cream border border-luxury-black/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="bg-gold/10 p-4 text-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Email Us</h4>
                  <p className="text-lg text-luxury-black/70">hello@graciousluxury.com</p>
                  <p className="text-sm text-luxury-black/40 mt-1">We'll respond within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-gold/10 p-4 text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Call Us</h4>
                  <p className="text-lg text-luxury-black/70">+1 (555) 123-4567</p>
                  <p className="text-sm text-luxury-black/40 mt-1">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-gold/10 p-4 text-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Visit Our Showroom</h4>
                  <p className="text-lg text-luxury-black/70">123 Luxury Lane, New York, NY 10001</p>
                  <p className="text-sm text-luxury-black/40 mt-1">By appointment only.</p>
                </div>
              </div>

              <div className="pt-12 border-t border-luxury-black/5">
                <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Follow Our Journey</h4>
                <div className="flex space-x-6">
                  <a href="#" className="text-luxury-black/40 hover:text-gold transition-colors"><Instagram size={24} /></a>
                  <a href="#" className="text-luxury-black/40 hover:text-gold transition-colors"><Facebook size={24} /></a>
                  <a href="#" className="text-luxury-black/40 hover:text-gold transition-colors"><Twitter size={24} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
