'use client';
import { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: 'Pure Organic Grass-Fed Cow Ghee', price: 4999, category: 'ghee', desc: 'Premium clarified butter' },
  { id: 2, name: 'Raw Himalayan Honey', price: 3499, category: 'honey', desc: 'Unfiltered medicinal honey' },
  { id: 3, name: 'Himalayan Shilajit', price: 5999, category: 'wellness', desc: 'Pure mineral resin' },
  { id: 4, name: 'Organic Turmeric Powder', price: 1299, category: 'spices', desc: 'High-curcumin turmeric' },
];

export default function Home() {
  const [page, setPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((_: any, i: number) => i !== id));
  };

  const cartTotal = cart.reduce((sum: number, p: any) => sum + p.price, 0);

  const handleCheckout = async () => {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart }),
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-teal-600">Gorkha Jaibik</h1>
          <div className="flex gap-6">
            <button onClick={() => setPage('home')} className={`${page === 'home' ? 'text-teal-600' : ''}`}>Home</button>
            <button onClick={() => setPage('about')} className={`${page === 'about' ? 'text-teal-600' : ''}`}>About</button>
            <button onClick={() => setPage('products')} className={`${page === 'products' ? 'text-teal-600' : ''}`}>Products</button>
            <button onClick={() => setPage('blog')} className={`${page === 'blog' ? 'text-teal-600' : ''}`}>Blog</button>
            <button onClick={() => setShowCart(!showCart)} className="bg-teal-600 text-white px-4 py-2 rounded">Shop ({cart.length})</button>
          </div>
        </div>
      </nav>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg p-4 z-50">
          <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map((item: any, i: number) => (
                <div key={i} className="flex justify-between mb-2">
                  <span>{item.name}</span>
                  <button onClick={() => removeFromCart(i)} className="text-red-600">Remove</button>
                </div>
              ))}
              <div className="border-t mt-4 pt-4">
                <p className="text-lg font-bold">Total: Rs. {cartTotal}</p>
                <button onClick={handleCheckout} className="w-full bg-green-600 text-white py-2 rounded mt-4">Checkout</button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Pages */}
      {page === 'home' && (
        <div>
          <div className="bg-cover bg-center h-96" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200)'}}>
            <div className="flex items-center justify-center h-full bg-black bg-opacity-40">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold">GORKHA JAIBIK</h1>
                <p className="text-2xl mt-2">From Himalayas To The World</p>
                <button className="mt-4 bg-teal-600 px-8 py-3 rounded font-bold">SHOP NOW</button>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-center mb-4">Welcome to Gorkha Jaibik</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">At Gorkha Jaibik, we bring the essence of the Himalayas into everyday living. Our products are sourced directly from the pristine regions of Nepal and the Himalayas.</p>
          </div>
        </div>
      )}

      {page === 'products' && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-center mb-8">Our Premium Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 shadow">
                <h3 className="font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.desc}</p>
                <p className="text-lg font-bold mb-4">Rs. {product.price}</p>
                <button onClick={() => addToCart(product)} className="w-full bg-teal-600 text-white py-2 rounded">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {page === 'about' && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-8">About Gorkha Jaibik</h2>
          <div className="bg-blue-50 p-6 rounded mb-8">
            <p className="text-gray-700">Welcome to Gorkha Jaibik, your gateway to authentic Himalayan organic products, sourced directly from the pristine regions of Nepal and the Himalayas.</p>
          </div>
          <h3 className="text-2xl font-bold mb-4">Why Choose Gorkha Jaibik?</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-teal-600 pl-4">
              <h4 className="font-bold">100% Organic & Pure</h4>
              <p>Every product is carefully selected to ensure maximum purity and organic certification.</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="font-bold">Himalayan Heritage</h4>
              <p>Sourced from high-altitude regions with nutritional bounty of the Himalayas.</p>
            </div>
          </div>
        </div>
      )}

      {page === 'blog' && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-center mb-8">Blog & Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-bold mb-2 text-lg">Raw Honey Benefits</h3>
              <p className="text-gray-600 mb-4">Discover the amazing health benefits of raw, unfiltered Himalayan honey.</p>
              <a href="#" className="text-teal-600 font-bold">Read More →</a>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-bold mb-2 text-lg">Ghee: Liquid Gold</h3>
              <p className="text-gray-600 mb-4">Learn why ghee is considered liquid gold in traditional medicine.</p>
              <a href="#" className="text-teal-600 font-bold">Read More →</a>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-bold mb-2 text-lg">Shilajit: Nature's Power</h3>
              <p className="text-gray-600 mb-4">Explore the ancient secrets of Himalayan Shilajit and its transformative health benefits.</p>
              <a href="#" className="text-teal-600 font-bold">Read More →</a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12 p-8 text-center">
        <p>© 2024 Gorkha Jaibik | GLAUM ORGANICS PVT. LTD.</p>
      </footer>
    </div>
  );
}
