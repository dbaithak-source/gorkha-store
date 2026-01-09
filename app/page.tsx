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

interface CartItem {
  productId: number;
  productName: string;
  variant: string;
  price: number;
  quantity: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState<{ [key: number]: string }>({});

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

  const addToCart = (product: Product, variant: string) => {
    if (!variant) {
      alert('Please select a variant');
      return;
    }

    const variantData = product.variants?.find(v => v.size === variant);
    if (!variantData) return;

    const priceStr = variantData.price.replace(/[^0-9]/g, '');
    const price = parseInt(priceStr);

    const existingItem = cart.find(
      item => item.productId === product.id && item.variant === variant
    );

    if (existingItem) {
      setCart(cart.map(item =>
        item.productId === product.id && item.variant === variant
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, {
        productId: product.id,
        productName: product.name,
        variant,
        price,
        quantity: 1
      }]);
    }
  };

  const removeFromCart = (productId: number, variant: string) => {
    setCart(cart.filter(item => !(item.productId === productId && item.variant === variant)));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Please add items to cart');
      return;
    }

    const totalAmount = getTotalPrice();
    const cartSummary = cart.map(item => `${item.productName} (${item.variant}) x${item.quantity}`).join(', ');

    // Khalti Payment Integration
    const khaltiConfig = {
      publicKey: 'test_public_key_....', // Replace with your actual Khalti public key
      productIdentity: 'gorkha-jaibik-store',
      productName: 'Gorkha Jaibik Products',
      productUrl: window.location.href,
      eventHandler: {
        onSuccess: (payload: any) => {
          console.log('Payment successful:', payload);
          alert('Payment successful! Your order has been placed.');
          setCart([]);
          setShowCart(false);
        },
        onError: (error: any) => {
          console.error('Payment error:', error);
          alert('Payment failed. Please try again.');
        },
        onClose: () => {
          console.log('Payment dialog closed');
        }
      },
      amount: totalAmount * 100 // Khalti uses paisa (cents)
    };

    // Load Khalti script dynamically
    const script = document.createElement('script');
    script.src = 'https://khalti.s3.amazonaws.com/KPG/dist/2.0.0/khalti-checkout.min.js';
    document.head.appendChild(script);

    script.onload = () => {
      (window as any).KhaltiCheckout.configure(khaltiConfig);
      (window as any).KhaltiCheckout.show({ amount: totalAmount * 100 });
    };
  };

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
             {/* Text Content */}
              <div>
                <h1 className="text-5xl font-bold text-white mb-4">GORKHA JAIBIK</h1>
                <p className="text-xl text-white/90 max-w-sm leading-relaxed">
                  Breathe in the purity of nature, live the poetry of health
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 shadow-lg"
                onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                SHOP NOW
              </button>
              {cart.length > 0 && (
                <button
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 shadow-lg relative"
                  onClick={() => setShowCart(!showCart)}
                >
                  CART ({cart.length})
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      {showCart && cart.length > 0 && (
        <section className="fixed right-0 top-0 w-96 h-screen bg-white shadow-2xl overflow-y-auto z-50">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            {cart.map((item, idx) => (
              <div key={idx} className="mb-4 p-4 bg-gray-100 rounded-lg">
                <h3 className="font-bold text-gray-800">{item.productName}</h3>
                <p className="text-sm text-gray-600">{item.variant}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-green-600 font-bold">₹{item.price.toLocaleString()}</span>
                  <div className="flex gap-2 items-center">
                    <span className="text-gray-700">x{item.quantity}</span>
                    <button
                      onClick={() => removeFromCart(item.productId, item.variant)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8 pt-6 border-t border-gray-300">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold text-gray-800">Total:</span>
                <span className="text-2xl font-bold text-green-600">₹{getTotalPrice().toLocaleString()}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition"
              >
                Proceed to Khalti Checkout
              </button>
            </div>
          </div>
        </section>
      )}

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
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                    
                    {product.variants ? (
                      <div className="space-y-3">
                        <select
                          value={selectedVariants[product.id] || ''}
                          onChange={(e) => setSelectedVariants({...selectedVariants, [product.id]: e.target.value})}
                          className="w-full p-2 border border-gray-300 rounded text-sm"
                        >
                          <option value="">Select size...</option>
                          {product.variants.map((variant, idx) => (
                            <option key={idx} value={variant.size}>
                              {variant.size} - {variant.price}
                            </option>
                          ))}
                        </select>
                        <button
                          onClick={() => addToCart(product, selectedVariants[product.id] || '')}
                          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded text-sm transition"
                        >
                          Add to Cart
                        </button>
                      </div>
                    ) : (
                      <div>
                        <p className="text-xl font-bold text-green-600 mb-3">{product.price}</p>
                        <button
                          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded text-sm transition"
                        >
                          Add to Cart
                        </button>
                      </div>
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Quality</h3>
              <p className="text-gray-600">Highest Quality Standards</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
