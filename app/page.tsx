'use client';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState('home');
  const [cart, setCart] = useState<any[]>([]);

  return (
    <div className="w-full">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => setPage('home')} className="text-2xl font-bold text-teal-600">Gorkha Jaibik</button>
          <div className="flex gap-8">
            <button onClick={() => setPage('home')} className={page === 'home' ? 'text-teal-600 font-bold' : 'hover:text-teal-600'}>Home</button>
            <button onClick={() => setPage('about')} className={page === 'about' ? 'text-teal-600 font-bold' : 'hover:text-teal-600'}>About</button>
            <button onClick={() => setPage('products')} className={page === 'products' ? 'text-teal-600 font-bold' : 'hover:text-teal-600'}>Products</button>
            <button onClick={() => setPage('blog')} className={page === 'blog' ? 'text-teal-600 font-bold' : 'hover:text-teal-600'}>Blog</button>
            <button onClick={() => setPage('shop')} className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700">Shop</button>
          </div>
        </div>
      </nav>

      {page === 'home' && (
        <div>
          {/* HERO */}
          <section className="h-96 bg-cover bg-center flex items-center justify-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200)'}}>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-center text-white">
              <h1 className="text-5xl font-bold mb-4">GORKHA JAIBIK</h1>
              <p className="text-2xl mb-8">From Himalayas To The World</p>
              <button onClick={() => setPage('shop')} className="bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded-lg text-lg font-bold">SHOP NOW</button>
            </div>
          </section>

          {/* WELCOME */}
          <section className="max-w-4xl mx-auto py-16 px-6">
            <h2 className="text-4xl font-bold text-center mb-8">Welcome to Gorkha Jaibik</h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">"At Gorkha Jaibik, we bring the essence of the Himalayas into everyday living. From wild honey, shilajit, oils, ghee, food grains, and superfoods to herbs, spices, bamboo crafts, handloom, and organic fabrics—each product carries purity, tradition, and sustainability from Nepal to the world."</p>
            <div className="text-center bg-teal-50 p-8 rounded-lg"><p className="text-2xl italic font-semibold">"Nature is not our resource — it is our lineage."</p></div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Gorkha Jaibik?</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-600"><h3 className="text-xl font-bold mb-3">100% Organic & Pure</h3><p className="text-gray-700">Every product is carefully selected to ensure maximum purity and organic certification.</p></div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600"><h3 className="text-xl font-bold mb-3">Himalayan Heritage</h3><p className="text-gray-700">Sourced from high-altitude regions with nutritional bounty of the Himalayas.</p></div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-600"><h3 className="text-xl font-bold mb-3">Sustainable & Ethical</h3><p className="text-gray-700">We work directly with local farmers ensuring fair trade practices.</p></div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600"><h3 className="text-xl font-bold mb-3">Premium Quality</h3><p className="text-gray-700">Each item is handpicked for superior quality and authenticity.</p></div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div><h3 className="text-2xl font-bold mb-2">GORKHA JAIBIK</h3><p className="text-gray-400">Premium Himalayan Products</p></div>
                <div><h4 className="font-bold mb-4">NAVIGATION</h4><ul className="space-y-2 text-gray-400"><li><button onClick={() => setPage('home')} className="hover:text-white">Home</button></li><li><button onClick={() => setPage('about')} className="hover:text-white">About</button></li><li><button onClick={() => setPage('products')} className="hover:text-white">Products</button></li></ul></div>
                <div><h4 className="font-bold mb-4">CONTACT</h4><p className="text-gray-400">📍 Birganj, Nepal</p><p className="text-gray-400">📱 +977-51-522573</p><p className="text-gray-400">📧 glaumorganics2025@gmail.com</p></div>
                <div><h4 className="font-bold mb-4">FOLLOW</h4><p className="text-gray-400">@gorkhajaibik</p><p className="text-gray-400">Gorkha Jaibik</p></div>
              </div>
              <div className="border-t border-gray-700 pt-8 text-center text-gray-400"><p>© 2024 Gorkha Jaibik | GLAUM ORGANICS PVT. LTD.</p></div>
            </div>
          </footer>
        </div>
      )}

      {page === 'about' && (
        <div>
          <div className="max-w-4xl mx-auto py-16 px-6">
            <h1 className="text-5xl font-bold mb-4">About Gorkha Jaibik</h1>
            <div className="bg-teal-50 p-8 rounded-lg mb-12"><p className="text-lg text-gray-700 leading-relaxed">Welcome to Gorkha Jaibik, your gateway to authentic Himalayan organic products, sourced directly from the pristine regions of Nepal and the Himalayas. Our mission is to bring the pure, unadulterated essence of Himalayan nature to your doorstep.</p></div>
            <h2 className="text-3xl font-bold mb-8">Why Choose Gorkha Jaibik?</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-teal-600 pl-6"><h3 className="text-xl font-bold mb-2">🌿 100% Organic & Pure</h3><p className="text-gray-700">Every product is carefully selected to ensure maximum purity and organic certification. We believe in nature's goodness without any additives or preservatives.</p></div>
              <div className="border-l-4 border-green-600 pl-6"><h3 className="text-xl font-bold mb-2">🏔️ Himalayan Heritage</h3><p className="text-gray-700">Sourced from high-altitude regions, our products carry the nutritional bounty of the Himalayas.</p></div>
              <div className="border-l-4 border-amber-600 pl-6"><h3 className="text-xl font-bold mb-2">♻️ Sustainable & Ethical</h3><p className="text-gray-700">We work directly with local farmers and producers, ensuring fair trade practices and sustainable harvesting methods.</p></div>
              <div className="border-l-4 border-orange-600 pl-6"><h3 className="text-xl font-bold mb-2">✨ Premium Quality</h3><p className="text-gray-700">From raw honeys to organic spices, ghee, and traditional wellness products – each item is handpicked for superior quality and authenticity.</p></div>
            </div>
            <div className="mt-12 bg-white p-8 rounded-lg border border-gray-200"><h3 className="text-2xl font-bold mb-6">Our Products Include:</h3><ul className="space-y-3 text-gray-700"><li>✓ Raw & Medicinal Honeys (Lychee, Rudilo, Churi, Mustard, Faffar, Mad Honey)</li><li>✓ 100% Organic Ghee (Cow, Yak, Sheep Goat)</li><li>✓ Pure Himalayan Spices (Turmeric, and more)</li><li>✓ Traditional Wellness Products</li></ul></div>
          </div>
          <footer className="bg-gray-900 text-white py-12"><div className="max-w-6xl mx-auto px-6 text-center text-gray-400"><p>© 2024 Gorkha Jaibik | GLAUM ORGANICS PVT. LTD.</p></div></footer>
        </div>
      )}

      {page === 'products' && (
        <div>
          <div className="max-w-6xl mx-auto py-16 px-6">
            <h1 className="text-5xl font-bold mb-4 text-center">Our Premium Products</h1>
            <p className="text-gray-600 text-center mb-12 text-lg">Discover Our Himalayan Organic Collection</p>
            <div className="space-y-12">
              <div><h2 className="text-3xl font-bold mb-6">🍯 Raw & Medicinal Honeys</h2><p className="text-gray-700">Lychee, Rudilo, Churi, Mustard, Faffar, Mad Honey - Each with unique properties and benefits sourced directly from Himalayan apiaries.</p></div>
              <div><h2 className="text-3xl font-bold mb-6">🧈 100% Organic Ghee</h2><p className="text-gray-700">Cow, Yak, Sheep Goat, Buffalo - Traditionally clarified, grass-fed ghee rich in nutrients for cooking and wellness.</p></div>
              <div><h2 className="text-3xl font-bold mb-6">🌿 Himalayan Spices</h2><p className="text-gray-700">Pure Turmeric and more - Premium Himalayan spices harvested and processed traditionally.</p></div>
              <div><h2 className="text-3xl font-bold mb-6">💊 Traditional Wellness Products</h2><p className="text-gray-700">Shilajit, Supplements, and traditional formulations for optimal health and vitality.</p></div>
            </div>
          </div>
          <footer className="bg-gray-900 text-white py-12"><div className="max-w-6xl mx-auto px-6 text-center text-gray-400"><p>© 2024 Gorkha Jaibik | GLAUM ORGANICS PVT. LTD.</p></div></footer>
        </div>
      )}

      {page === 'blog' && (
        <div>
          <div className="max-w-6xl mx-auto py-16 px-6">
            <h1 className="text-5xl font-bold mb-4 text-center">Blog & Articles</h1>
            <p className="text-gray-600 text-center mb-12 text-lg">Learn about Himalayan Products and Health Benefits</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-teal-600"><h3 className="text-2xl font-bold mb-3">Raw Honey Benefits</h3><p className="text-gray-700 mb-4">Discover the amazing health benefits of raw, unfiltered Himalayan honey and how it supports your wellness journey.</p><button onClick={() => setPage('home')} className="text-teal-600 font-bold hover:underline">Read More →</button></div>
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600"><h3 className="text-2xl font-bold mb-3">Ghee: Liquid Gold</h3><p className="text-gray-700 mb-4">Learn why ghee is considered liquid gold in traditional medicine and its role in modern wellness.</p><button onClick={() => setPage('home')} className="text-teal-600 font-bold hover:underline">Read More →</button></div>
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-600"><h3 className="text-2xl font-bold mb-3">Shilajit: Nature's Power</h3><p className="text-gray-700 mb-4">Explore the ancient secrets of Himalayan Shilajit and its transformative health benefits.</p><button onClick={() => setPage('home')} className="text-teal-600 font-bold hover:underline">Read More →</button></div>
            </div>
          </div>
          <footer className="bg-gray-900 text-white py-12"><div className="max-w-6xl mx-auto px-6 text-center text-gray-400"><p>© 2024 Gorkha Jaibik |
