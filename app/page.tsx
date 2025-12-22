'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';
interface Product {
  id: number;
  name: string;
  price?: string;
  category: string;
  image: string;
  description: string;
  variants?: Array<{ size: string; price: string }>;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
      setLoading(false);
    };
    loadProducts();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen bg-cover bg-center relative" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop)',
        backgroundColor: '#1a472a'
      }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"/>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 py-20">
          <div className="flex items-center justify-between w-full">
            {/* Left side: Logo and Text */}
            <div className="flex items-center gap-6">
              {/* Logo */}
              <img 
                src="/gorkha-logo.svg" 
                alt="Gorkha Jaibik Logo" 
                className="w-24 h-24 object-contain"
              />
              
              {/* Text Content */}
              <div>
                <h1 className="text-5xl font-bold text-white mb-4">GORKHA JAIBIK</h1>
                <p className="text-xl text-white/90 max-w-sm leading-relaxed">
                  Breathe in the purity of nature, live the poetry of health
                </p>
              </div>
            </div>

            {/* Right side: CTA Button */}
            <div>
              <button 
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 shadow-lg"
                onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What We Offer</h2>
          
          {loading ? (
            <p className="text-center text-gray-600">Loading products...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="relative h-48 bg-gray-200">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200'; }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                    {product.variants ? (
                      <div className="space-y-2">
                        {product.variants.map((variant, idx) => (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="text-gray-700">{variant.size}</span>
                            <span className="font-bold text-green-600">{variant.price}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xl font-bold text-green-600">{product.price}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Ethically Sourced</h3>
              <p className="text-gray-600">Direct from Farm</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Certified Organic</h3>
              <p className="text-gray-600">100% Pure & Natural</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Certified Organic</h3>
              <p className="text-gray-600">Highest Quality Standards</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
