'use client';

import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price?: string;
  variants?: Array<{size: string; price: string}>;
  category: string;
  image: string;
  description: string;
}

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const ADMIN_PASSWORD = 'gorkha123';

  useEffect(() => {
    if (isAuthenticated) {
      loadProducts();
    }
  }, [isAuthenticated]);

  const loadProducts = async () => {
    try {
      const response = await fetch('/products.json');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      alert('Failed to load products');
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">Admin Panel</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="Enter password"
            />
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-green-600 mb-8">Product Management</h1>
      <button onClick={() => setIsAuthenticated(false)} className="bg-red-600 text-white px-4 py-2 rounded mb-8">
        Logout
      </button>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-3">{product.id}</td>
                <td className="px-6 py-3">{product.name}</td>
                <td className="px-6 py-3">{product.price || 'Variant'}</td>
                <td className="px-6 py-3">{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}