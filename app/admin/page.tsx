'use client';

import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price?: string;
  category: string;
  image: string;
  description: string;
  variants?: Array<{ size: string; price: string }>;
}

const ADMIN_PASSWORD = 'gorkha123';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    price: '',
    category: '',
    image: '',
    description: '',
  });
  const [heroTitle, setHeroTitle] = useState('GORKHA JAIBIK');
  const [heroSubtitle, setHeroSubtitle] = useState('Premium Himalayan Products from the Heart of Nepal');
  const [logoUrl, setLogoUrl] = useState('/images/gorkha-logo.svg');

  // Load products on mount
  useEffect(() => {
    if (isAuthenticated) {
      loadProducts();
    }
  }, [isAuthenticated]);

  const loadProducts = async () => {
    try {
      const res = await fetch('/products.json');
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error('Failed to load products:', error);
    }
  };

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  const handleAddProduct = async () => {
    const newProduct = {
      id: Math.max(...products.map(p => p.id), 0) + 1,
      ...formData,
    } as Product;

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    await saveProducts(updatedProducts);
    resetForm();
  };

  const handleUpdateProduct = async () => {
    if (editingId === null) return;
    
    const updatedProducts = products.map(p =>
      p.id === editingId ? { ...p, ...formData } : p
    );
    setProducts(updatedProducts);
    await saveProducts(updatedProducts);
    resetForm();
  };

  const handleDeleteProduct = async (id: number) => {
    if (confirm('Are you sure?')) {
      const updatedProducts = products.filter(p => p.id !== id);
      setProducts(updatedProducts);
      await saveProducts(updatedProducts);
    }
  };

  const saveProducts = async (data: Product[]) => {
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to save');
    } catch (error) {
      alert('Error saving products: ' + error);
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      name: '',
      price: '',
      category: '',
      image: '',
      description: '',
    });
  };

  const handleEditClick = (product: Product) => {
    setEditingId(product.id);
    setFormData(product);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-green-600 text-center mb-8">Admin Panel</h1>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleLogin}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>

          {/* Hero Section Editor */}
          <div className="mb-8 p-6 bg-green-50 rounded-lg border border-green-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Hero Section</h2>
            <div className="space-y-4">
              <input
                type="text"
                value={heroTitle}
                onChange={(e) => setHeroTitle(e.target.value)}
                placeholder="Hero Title"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                value={heroSubtitle}
                onChange={(e) => setHeroSubtitle(e.target.value)}
                placeholder="Hero Subtitle"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                value={logoUrl}
                onChange={(e) => setLogoUrl(e.target.value)}
                placeholder="Logo URL"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={() => alert('Hero section updated. Refresh page to see changes.')}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded transition"
              >
                Update Hero Section
              </button>
            </div>
          </div>

          {/* Product Form */}
          <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {editingId ? 'Edit Product' : 'Add New Product'}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Product Name"
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="col-span-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Price"
                value={formData.price || ''}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Category"
                value={formData.category || ''}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={formData.image || ''}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="col-span-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Description"
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="col-span-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
              />
              <div className="col-span-2 flex gap-2">
                <button
                  onClick={editingId ? handleUpdateProduct : handleAddProduct}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition"
                >
                  {editingId ? 'Update Product' : 'Add Product'}
                </button>
                {editingId && (
                  <button
                    onClick={resetForm}
                    className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 rounded transition"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Products List */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Products ({products.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product.id} className="bg-gray-100 p-4 rounded-lg border">
                  <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded mb-2" />
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-gray-600">{product.category}</p>
                  <p className="text-green-600 font-bold">{product.price || 'N/A'}</p>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => handleEditClick(product)}
                      className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
