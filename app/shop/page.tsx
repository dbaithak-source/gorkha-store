'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';

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

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

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

  const categories = ['all', ...new Set(products.map((p) => p.category))];

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-3">Our Shop</h1>
          <p className="text-xl text-green-100">Premium Himalayan Organic Products</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter */}
          <div className="mb-8 flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-800 border border-gray-300 hover:border-green-500'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="text-center py-12 text-gray-600">Loading products...</div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12 text-gray-600">No products found in this category.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
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
                    <select className="w-full border border-gray-300 rounded p-2 mb-4 text-sm">
                      <option>Select size...</option>
                      {product.variants.map((variant) => (
                        <option key={variant.size} value={variant.size}>
                          {variant.size} - {variant.price}
                        </option>
                      ))}
                    </select>
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
