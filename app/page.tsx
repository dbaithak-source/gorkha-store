'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section - SHORT AND CLEAN */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/gorkha-logo.svg"
              alt="Gorkha Jaibik Logo"
              width={80}
              height={80}
              className="h-20 w-auto"
            />
          </div>
          
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-green-400">
            GORKHA JAIBIK
          </h1>
          
          {/* Tagline */}
          <p className="text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium Himalayan Organic Products from the Heart of Nepal
          </p>
          
          {/* CTA Button */}
          <Link
            href="/shop"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-lg text-lg transition transform hover:scale-105 shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Why Choose Gorkha Jaibik</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-amber-50 p-8 rounded-lg border-l-4 border-amber-500 text-center">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Ethically Sourced</h3>
              <p className="text-gray-600">Directly from Himalayan farms. Supporting local communities and sustainable practices.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">100% Organic</h3>
              <p className="text-gray-600">Pure, natural, and certified organic. No chemicals, no additives, pure health.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500 text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Premium Quality</h3>
              <p className="text-gray-600">Highest standards of quality and purity guaranteed in every product.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg mb-6">Explore our full range of organic products</p>
            <Link
              href="/shop"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Visit Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
