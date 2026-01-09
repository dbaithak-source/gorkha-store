'use client';
import { useState } from 'react';
//import Head from 'next/head';

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

  const addToCart = (product): any => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id): any => {
    setCart(cart.filter((_, i) => i !== id));
  };

  const cartTotal = cart.reduce((sum, p) => sum + p.price, 0);

  const handleCheckout = async () => {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart }),
    });
    const { url } = await response.json();
    window.location.href = url;
  };

  const seoMeta = {
    home: {
      title: 'Gorkha Jaibik | Organic Himalayan Products',
      description: 'Premium organic ghee, honey, shilajit & spices from the Himalayas. Direct from Nepal.',
      keywords: 'organic ghee, raw honey, himalayan products, shilajit, organic spices',
    },
    products: {
      title: 'Shop | Gorkha Jaibik - Authentic Himalayan Organics',
      description: 'Browse our collection of pure organic ghee, medicinal honey, and wellness products.',
      keywords: 'buy organic ghee, himalayan honey, shilajit price, turmeric powder',
    },
  };

  return (
    <>
      {/*<Head>
        <title>{seoMeta[page]?.title || 'Gorkha Jaibik'}</title>
        <meta name="description" content={seoMeta[page]?.description || 'Himalayan organic products'} />
        <meta name="keywords" content={seoMeta[page]?.keywords || 'organic, himalayan'} />
        <meta property="og:title" content={seoMeta[page]?.title} />
        <meta property="og:description" content={seoMeta[page]?.description} />
        <meta property="og:image" content="https://gorkhajaibik.wordpress.com/wp-content/uploads/2024/01/logo.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-GA-ID"></script>
        <script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-YOUR-GA-ID');</script>
      </Head>*/}

      <div className="min-h-screen bg-white">
        {/* NAVIGATION */}
        <nav className="sticky top-0 z-50 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <button onClick={() => setPage('home')} className="text-2xl font-bold text-teal-600">Gorkha Jaibik</button>
            <div className="flex gap-8 items-center">
              <button onClick={() => setPage('home')} className={page === 'home' ? 'text-teal-600 font-bold' : 'hover:text-teal-600'}>Home</button>
              <button onClick={() => setPage('about')} className={page === 'about' ? 'text-teal-600 font-bold' : 'hover:text-teal-600'}>About</button>
              <button onClick={() => setPage('products')} className={page === 'products' ? 'text-teal-600 font-bold' : 'hover:text-teal-600'}>Products</button>
              <button onClick={() => setPage('blog')} className={page === 'blog' ? 'text-teal-600 font-bold' : 'hover:text-teal-600'}>Blog</button>
              <button onClick={() => setShowCart(!showCart)} className="relative"><span className="text-2xl">🛒</span><span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">{cart.length}</span></button>
            </div>
          </div>
        </nav>

        {/* CART DRAWER */}
        {showCart && (
          <div className="fixed right-0 top-0 w-80 h-screen bg-white shadow-lg z-40 p-6 overflow-y-auto">
            <h3 className="text-2xl font-bold mb-4">Your Cart</h3>
            {cart.length === 0 ? (
              <p className="text-gray-600">Cart is empty</p>
            ) : (
              <>
                {cart.map((item, i) => (
                  <div key={i} className="flex justify-between mb-3 pb-3 border-b">
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-teal-600">₹{(item.price/100).toFixed(2)}</p>
                    </div>
                    <button onClick={() => removeFromCart(i)} className="text-red-500">×</button>
                  </div>
                ))}
                <div className="border-t-2 pt-4 mt-4">
                  <p className="text-lg font-bold mb-4">Total: ₹{(cartTotal/100).toFixed(2)}</p>
                  <button onClick={handleCheckout} className="w-full bg-teal-600 text-white py-3 rounded font-bold hover:bg-teal-700">Checkout with Stripe</button>
                </div>
              </>
            )}
          </div>
        )}

        {/* HOME PAGE */}
        {page === 'home' && (
          <div>
            <section className="h-96 bg-cover bg-center flex items-center justify-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200)'}}>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 text-center text-white">
                <h1 className="text-5xl font-bold mb-4">GORKHA JAIBIK</h1>
                <p className="text-2xl mb-8">Pure Himalayan Organics</p>
                <button onClick={() => setPage('products')} className="bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded-lg text-lg font-bold">SHOP NOW</button>
              </div>
            </section>
            <section className="max-w-4xl mx-auto py-16 px-6"><h2 className="text-4xl font-bold text-center mb-8">Welcome</h2><p className="text-lg text-gray-700 text-center">Authentic organic products sourced directly from the pristine Himalayas. From grass-fed ghee to raw honey, shilajit to pure spices.</p></section>
            <footer className="bg-gray-900 text-white py-12 text-center"><p>© 2024 Gorkha Jaibik | GLAUM ORGANICS PVT. LTD.</p></footer>
          </div>
        )}

        {/* PRODUCTS PAGE */}
        {page === 'products' && (
          <div><div className="max-w-6xl mx-auto py-16 px-6"><h1 className="text-5xl font-bold mb-12 text-center">Our Products</h1><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{PRODUCTS.map(p => (<div key={p.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"><h3 className="text-xl font-bold mb-2">{p.name}</h3><p className="text-gray-600 mb-4">{p.desc}</p><p className="text-2xl font-bold text-teal-600 mb-4">₹{(p.price/100).toFixed(2)}</p><button onClick={() => addToCart(p)} className="w-full bg-teal-600 text-white py-2 rounded font-bold hover:bg-teal-700">Add to Cart</button></div>))}</div></div><footer className="bg-gray-900 text-white py-12 text-center"><p>© 2024 Gorkha Jaibik | GLAUM ORGANICS PVT. LTD.</p></footer></div>
        )}

        {/* ABOUT PAGE */}
        {page === 'about' && (
          <div><div className="max-w-4xl mx-auto py-16 px-6"><h1 className="text-5xl font-bold mb-8">About Gorkha Jaibik</h1><p className="text-lg text-gray-700 leading-relaxed mb-8">We bring the essence of the Himalayas to your home. Every product is carefully sourced, tested for purity, and delivered with integrity. From grass-fed cows to wild apiaries, we ensure maximum quality.</p><h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2><ul className="space-y-4 text-lg text-gray-700"><li>✓ 100% Organic & Pure</li><li>✓ Direct from source</li><li>✓ Fair trade practices</li><li>✓ Premium quality guarantee</li></ul></div><footer className="bg-gray-900 text-white py-12 text-center"><p>© 2024 Gorkha Jaibik | GLAUM ORGANICS PVT. LTD.</p></footer></div>
        )}

        {/* BLOG PAGE */}
        {page === 'blog' && (
          <div><div className="max-w-6xl mx-auto py-16 px-6"><h1 className="text-5xl font-bold mb-12 text-center">Blog & Articles</h1><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><article className="bg-white rounded-lg shadow-md p-6"><h3 className="text-2xl font-bold mb-2">Benefits of Grass-Fed Ghee</h3><p className="text-gray-700 mb-4">Learn why grass-fed ghee is superior for cooking and health.</p><a href="#" className="text-teal-600 font-bold">Read More →</a></article><article className="bg-white rounded-lg shadow-md p-6"><h3 className="text-2xl font-bold mb-2">Raw Honey Benefits</h3><p className="text-gray-700 mb-4">Discover the healing properties of pure Himalayan honey.</p><a href="#" className="text-teal-600 font-bold">Read More →</a></article><article className="bg-white rounded-lg shadow-md p-6"><h3 className="text-2xl font-bold mb-2">Shilajit Guide</h3><p className="text-gray-700 mb-4">Ancient wisdom meets modern science with Himalayan shilajit.</p><a href="#" className="text-teal-600 font-bold">Read More →</a></article></div></div><footer className="bg-gray-900 text-white py-12 text-center"><p>© 2024 Gorkha Jaibik | GLAUM ORGANICS PVT. LTD.</p></footer></div>
        )}
      </div>
    </>
  );
}
