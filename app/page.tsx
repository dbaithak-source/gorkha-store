'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';

interface ProductVariant {
  size: string;
  price: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  variants: ProductVariant[];
}

interface CartItem {
  id: number;
  name: string;
  image: string;
  variant: string;
  price: number;
  quantity: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load products from API
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Filter products by category
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((p) => p.category.toLowerCase() === category.toLowerCase())
      );
    }
  };

  // Add to cart
  const addToCart = (product: Product, variant: string) => {
    const variantData = product.variants.find((v) => v.size === variant);
    if (!variantData) return;

    const price = parseInt(variantData.price) || 0;
    const existingItem = cart.find(
      (item) => item.id === product.id && item.variant === variant
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          variant,
          price,
          quantity: 1,
        },
      ]);
    }
  };

  // Remove from cart
  const removeFromCart = (id: number, variant: string) => {
    setCart(cart.filter((item) => !(item.id === id && item.variant === variant)));
  };

  // Calculate total
  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  // Handle checkout with Khalti
  const handleCheckout = async () => {
    if (cart.length === 0) return;

    const totalAmount = calculateTotal();
    const khaltiConfig = {
      publicKey: process.env.NEXT_PUBLIC_KHALTI_PUBLIC_KEY || '',
      productIdentity: `order_${Date.now()}`,
      productName: 'Gorkha Jaibik Products',
      productUrl: typeof window !== 'undefined' ? window.location.href : '',
      eventHandler: {
        onSuccess: (payload: any) => {
          console.log('Payment successful:', payload);
          setCart([]);
          setShowCart(false);
          alert('Payment successful!');
        },
        onError: (error: any) => {
          console.error('Payment failed:', error);
          alert('Payment failed. Please try again.');
        },
        onClose: () => {
          console.log('Payment dialog closed');
        },
      },
    };

    const script = document.createElement('script');
    script.src = 'https://khalti.s3.ap-south-1.amazonaws.com/KPG/dist/2.0.0/khalti-checkout.js';
    document.head.appendChild(script);
    script.onload = () => {
      const KhaltiCheckout = (window as any).KhaltiCheckout;
      KhaltiCheckout.configure(khaltiConfig);
      KhaltiCheckout.show({ amount: totalAmount * 100 });
    };
  };

  const categories = ['all', ...new Set(products.map((p) => p.category))];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&fit=crop)',
          backgroundColor: '#1a472a',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold text-white mb-6">GORKHA JAIBIK</h1>
            <p className="text-2xl text-white/90 leading-relaxed mb-8">
              Breathe in the purity of nature, live the poetry of health
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('products');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 shadow-lg"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      {/* Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={() => setShowCart(!showCart)}
          className="fixed top-24 right-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg z-40 transition"
        >
          🛒 Cart ({cart.length})
        </button>
      )}

      {/* Cart Sidebar */}
      {showCart && cart.length > 0 && (
        <div className="fixed right-0 top-0 w-96 h-screen bg-white shadow-2xl overflow-y-auto z-50 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            <button
              onClick={() => setShowCart(false)}
              className="text-2xl hover:text-gray-600"
            >
              ×
            </button>
          </div>

          {cart.map((item, idx) => (
            <div key={idx} className="mb-4 p-4 bg-gray-100 rounded-lg">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.variant}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-green-600 font-bold">₹{item.price}</span>
                <div className="flex gap-2 items-center">
                  <span>x{item.quantity}</span>
                  <button
                    onClick={() => removeFromCart(item.id, item.variant)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6 pt-6 border-t border-gray-300">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-2xl font-bold text-green-600">₹{calculateTotal()}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-800 mb-8">Our Products</h2>

          {/* Category Filter */}
          <div className="flex gap-4 mb-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-teal-500 text-white'
                    : 'bg-white text-gray-800 border border-gray-300 hover:border-teal-500'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="text-center py-12">Loading products...</div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12">No products found in this category.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <select
                      className="w-full border border-gray-300 rounded p-2 mb-4"
                      onChange={(e) => {
                        if (e.target.value) {
                          addToCart(product, e.target.value);
                          e.target.value = '';
                        }
                      }}
                    >
                      <option value="">Select size...</option>
                      {product.variants.map((variant) => (
                        <option key={variant.size} value={variant.size}>
                          {variant.size} - ₹{variant.price}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => {
                        if (product.variants.length > 0) {
                          addToCart(product, product.variants[0].size);
                        }
                      }}
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-8 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Ethically Sourced</h3>
              <p className="text-gray-600">Directly from Himalayan farms. Supporting local communities.</p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-800 mb-3">100% Organic</h3>
              <p className="text-gray-600">Pure, natural, and certified organic products.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Quality</h3>
              <p className="text-gray-600">Highest standards of quality and purity guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
