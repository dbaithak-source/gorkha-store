'use client';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => setPage('home')} className="text-2xl font-bold text-teal-600">
            Gorkha Jaibik
          </button>
          <div className="flex gap-8">
            <button onClick={() => setPage('home')} className={page === 'home' ? 'text-teal-600 font-bold' : 'hover:text-teal-600'}>
              Home
            </button>
            <button onClick={() => setPage('about')} className={page === 'about' ? 'text-teal-600 font-bold' : 'hover:text-teal-600'}>
              About
            </button>
            <button onClick={() => setPage('products')} className={page === 'products' ? 'text-teal-600 font-bold' : 'hover:text-teal-600'}>
              Products
            </button>
            <button onClick={() => setPage('blog')} className={page === 'blog' ? 'text-teal-600 font-bold' : 'hover:text-teal-600'}>
              Blog
            </button>
            <button onClick={() => setPage('shop')} className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700">
              Shop
            </button>
          </div>
        </div>
      </nav>

      {/* HOME PAGE */}
      {page === 'home' && (
        <div>
          <section className="h-96 bg-cover bg-center flex items-center justify-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200)'}}>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-center text-white">
              <h1 className="text-5xl font-bold mb-4">GORKHA JAIBIK</h1>
              <p className="text-2xl mb-8">From Himalayas To The World</p>
              <button onClick={() => setPage('shop')} className="bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded-lg text-lg font-bold">
                SHOP NOW
              </button>
            </div>
          </section>
          <section className="max-w-4xl mx-auto py-16 px-6">
            <h2 className="text-4xl font-bold text-center mb-8">Welcome to Gorkha Jaibik</h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
              At Gorkha Jaibik, we bring the essence of the Himalayas into everyday living. Our products are sourced directly from the pristine regions of Nepal and the Himalayas.
            </p>
          </section>
          <footer className="bg-gray-900 text-white py-12 mt-12">
            <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
              <p>© 2024 Gorkha Jaibik | GLAUM ORGANICS PVT. LTD.</p>
            </div>
          </footer>
        </div>
      )}

      {/* ABOUT PAGE */}
      {page === 'about' && (
        <div>
          <div className="max-w-4xl mx-auto py-16 px-6">
            <h1 className="text-5xl font-bold mb-4">About Gorkha Jaibik</h1>
            <div className="bg-teal-50 p-8 rounded-lg mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to Gorkha Jaibik, your gateway to authentic Himalayan organic products, sourced directly from the pristine regions of Nepal and the Himalayas.
              </p>
            </div>
            <h2 className="text-3xl font-bold mb-8">Why Choose Gorkha Jaibik?</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-teal-600 pl-6">
                <h3 className="text-xl font-bold mb-2">100% Organic & Pure</h3>
                <p className="text-gray-700">Every product is carefully selected to ensure maximum purity and organic certification.</p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold mb-2">Himalayan Heritage</h3>
                <p className="text-gray-700">Sourced from high-altitude regions with nutritional bounty of the Himalayas.</p>
              </div>
            </div>
          </div>
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
              <p>© 2024 Gorkha Jaibik | GLAUM ORGANICS PVT. LTD.</p>
            </div>
          </footer>
        </div>
      )}

      {/* PRODUCTS PAGE */}
      {page === 'products' && (
        <div>
          <div className="max-w-6xl mx-auto py-16 px-6">
            <h1 className="text-5xl font-bold mb-4 text-center">Our Premium Products</h1>
            <p className="text-gray-600 text-center mb-12 text-lg">Discover Our Himalayan Organic Collection</p>
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Raw & Medicinal Honeys</h2>
                <p className="text-gray-700">Lychee, Rudilo, Churi, Mustard, Faffar, Mad Honey - Each with unique properties sourced directly from Himalayan apiaries.</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">100% Organic Ghee</h2>
                <p className="text-gray-700">Cow, Yak, Sheep Goat, Buffalo - Traditionally clarified, grass-fed ghee rich in nutrients.</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Himalayan Spices</h2>
                <p className="text-gray-700">Pure Turmeric and more - Premium Himalayan spices harvested and processed traditionally.</p>
              </div>
            </div>
          </div>
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
              <p>© 2024 Gorkha Jaibik | GLAUM ORGANICS PVT. LTD.</p>
            </div>
          </footer>
        </div>
      )}

      {/* BLOG PAGE */}
      {page === 'blog' && (
        <div>
          <div className="max-w-6xl mx-auto py-16 px-6">
            <h1 className="text-5xl font-bold mb-4 text-center">Blog & Articles</h1>
            <p className="text-gray-600 text-center mb-12 text-lg">Learn about Himalayan Products and Health Benefits</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3">Raw Honey Benefits</h3>
                <p className="text-gray-700 mb-4">Discover the amazing health benefits of raw, unfiltered Himalayan honey.</p>
                <button className="text-teal-600 font-bold hover:underline">Read More →</button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600">
                <h3 className="text-2xl font-bold mb-3">Ghee: Liquid Gold</h3>
                <p className="text-gray-700 mb-4">Learn why ghee is considered liquid gold in traditional medicine.</p>
                <button className="text-teal-600 font-bold hover:underline">Read More →</button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-600">
                <h3 className="text-2xl font-bold mb-3">Shilajit: Nature's Power</h3>
                <p className="text-gray-700 mb-4">Explore the ancient secrets of Himalayan Shilajit and its transformative health benefits.</p>
                <button className="text-teal-600 font-bold hover:underline">Read More →</button>
              </div>
            </div>
          </div>
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
              <p>© 2024 Gorkha Jaibik | GLAUM ORGANICS PVT. LTD.</p>
            </div>
          </footer>
        </div>
      )}

      {/* SHOP PAGE */}
      {page === 'shop' && (
        <div>
          <div className="max-w-6xl mx-auto py-16 px-6">
            <h1 className="text-5xl font-bold mb-4 text-center">Shop</h1>
            <p className="text-gray-600 text-center mb-12 text-lg">Browse our premium Himalayan products</p>
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Shop page coming soon...</p>
            </div>
          </div>
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
              <p>© 2024 Gorkha Jaibik | GLAUM ORGANICS PVT. LTD.</p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
