'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';

// Type definitions
interface Product {
  id: number;
  name: string;
  price?: number;
  category?: string;
  image?: string;
  description?: string;
  variants?: Array<{ size: string; price: string }>;
}

interface CartItem {
  productId: number;
  productName: string;
  variant: string;
  price: number;
  quantity: number;
}

interface SelectedVariants {
  [key: number]: string;
}

export default function Home() {
  // State management
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState<SelectedVariants>({});

  // Load products on mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/products.json');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        }
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Cart management functions
  const addToCart = (product: Product, variant: string = 'default') => {
    if (!product.id || !product.name || !product.price) return;

    const newItem: CartItem = {
      productId: product.id,
      productName: product.name,
      variant,
      price: typeof product.price === 'string' ? parseInt(product.price) : product.price,
      quantity: 1,
    };

    setCart((prev) => {
      const existing = prev.find(
        (item) => item.productId === product.id && item.variant === variant
      );
      if (existing) {
        return prev.map((item) =>
          item.productId === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, newItem];
    });
  };

  const removeFromCart = (productId: number, variant: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.productId === productId && item.variant === variant)
      )
    );
  };

  const calculateTotal = (): number => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const totalAmount = calculateTotal();
    const khaltiConfig = {
      publicKey: process.env.NEXT_PUBLIC_KHALTI_PUBLIC_KEY || '',
      productIdentity: '1234567890',
      productName: 'Gorkha Jaibik Products',
      productUrl: typeof window !== 'undefined' ? window.location.href : '',
      eventHandler: {
        onSuccess: (payload: any) => {
          console.log('Payment successful:', payload);
          setCart([]);
          setShowCart(false);
        },
        onError: (error: any) => {
          console.error('Payment failed:', error);
        },
        onClose: () => {
          console.log('Payment dialog closed');
        },
      },
    };

    // Load Khalti script
    const script = document.createElement('script');
    script.src = 'https://khalti.s3.ap-south-1.amazonaws.com/KPG/dist/2.0.0/khalti-checkout.js';
    document.head.appendChild(script);

    script.onload = () => {
      (window as any).KhaltiCheckout.configure(khaltiConfig);
      (window as any).KhaltiCheckout.show({ amount: totalAmount * 100 });
    };
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop)',
          backgroundColor: '#1a472a',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 py-20">
          <div className="flex items-center justify-between w-full">
            {/* Left side: Logo and Text */}
            <div className="flex items-center gap-6">
              {/* Text Content */}
              <div>
                <h1 className="text-5xl font-bold text-white mb-4">
                  GORKHA JAIBIK
                </h1>
                <p className="text-xl text-white/90 max-w-sm leading-relaxed">
                  Breathe in the purity of nature, live the poetry of health
                </p>
              </div>
            </div>

            {/* Right side: Buttons */}
            <div className="flex gap-4">
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 shadow-lg"
                onClick={() =>
                  document.querySelector('#products')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }
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
                  <span className="text-green-600 font-bold">
                    ₹{item.price.toLocaleString()}
                  </span>
                  <div className="flex gap-2 items-center">
                    <span className="text-gray-700">x{item.quantity}</span>
                    <button
                      onClick={() =>
                        removeFromCart(item.productId, item.variant)
                      }
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
                <span className="text-2xl font-bold text-green-600">
                  ₹{calculateTotal().toLocaleString()}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition"
              >
                Checkout with Khalti
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-sm leading-relaxed">
            Direct from Farm to Your Table
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Ethically Sourced
              </h3>
              <p className="text-gray-600">
                Direct from Farm&lt;/p&gt;
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Certified Organic
              </h3>
              <p className="text-gray-600">100% Pure & Natural&lt;/p&gt;</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-600">Highest Quality Standards&lt;/p&gt;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
