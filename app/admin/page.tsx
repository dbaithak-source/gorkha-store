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
'use client';

import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price?: string;
  category: string;
  image: string;
  description: string;
}

interface SiteData {
  heroTitle: string;
  heroSubtitle: string;
  logoUrl: string;
  companyName: string;
  companyAddress: string;
  products: Product[];
}

const DEFAULT_DATA: SiteData = {
  heroTitle: 'GORKHA JAIBIK',
  heroSubtitle: 'Premium Himalayan Products from the Heart of Nepal',
  logoUrl: '/images/gorkha-logo.svg',
  companyName: 'Glaum Organics Pv.t Ltd.',
  companyAddress: 'Adarsh Nagar Birgunj',
  products: [
    { id: 1, name: 'Lychee Honey', price: 'Variant', category: 'honey', image: '/images/honey.jpg', description: 'Premium Lychee Honey' },
    { id: 2, name: 'Rudilo Honey', price: '$16.99', category: 'honey', image: '/images/honey.jpg', description: 'Pure Rudilo Honey' },
    { id: 3, name: 'Churi Honey', price: '$14.99', category: 'honey', image: '/images/honey.jpg', description: 'Natural Churi Honey' },
    { id: 4, name: 'Mustard Honey', price: '$17.99', category: 'honey', image: '/images/honey.jpg', description: 'Mustard Infused Honey' },
    { id: 5, name: 'Faffar Honey', price: '$18.99', category: 'honey', image: '/images/honey.jpg', description: 'Rare Faffar Honey' },
    { id: 6, name: 'Mad Honey', price: '$24.99', category: 'honey', image: '/images/honey.jpg', description: 'Premium Mad Honey' },
    { id: 7, name: '100% Organic Cow Ghee', price: '$22.99', category: 'ghee', image: '/images/ghee.jpg', description: 'Pure Cow Ghee' },
    { id: 8, name: 'Raw Malt', price: '$12.99', category: 'other', image: '/images/malt.jpg', description: 'Natural Raw Malt' },
    { id: 9, name: 'Organic Oil', price: '$18.99', category: 'other', image: '/images/oil.jpg', description: 'Pure Organic Oil' },
    { id: 10, name: '100% Pure Turmeric', price: '$9.99', category: 'spices', image: '/images/turmeric.jpg', description: 'Pure Turmeric Powder' },
  ],
};

const ADMIN_PASSWORD = 'gorkha123';

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [data, setData] = useState<SiteData>(DEFAULT_DATA);
  const [editing, setEditing] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('products');
  const [editForm, setEditForm] = useState<Partial<Product>>({});

  useEffect(() => {
    const saved = localStorage.getItem('gorkha_site_data');
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  const saveData = (newData: SiteData) => {
    setData(newData);
    localStorage.setItem('gorkha_site_data', JSON.stringify(newData));
  };

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert('Invalid password');
      setPassword('');
    }
  };

  const updateHero = (field: string, value: string) => {
    const newData = { ...data };
    if (field === 'title') newData.heroTitle = value;
    if (field === 'subtitle') newData.heroSubtitle = value;
    if (field === 'logo') newData.logoUrl = value;
    saveData(newData);
  };

  const updateCompany = (field: string, value: string) => {
    const newData = { ...data };
    if (field === 'name') newData.companyName = value;
    if (field === 'address') newData.companyAddress = value;
    saveData(newData);
  };

  const addProduct = () => {
    const newProduct: Product = {
      id: Math.max(...data.products.map(p => p.id), 0) + 1,
      name: 'New Product',
      price: '$0.00',
      category: 'other',
      image: '/images/product.jpg',
      description: 'Product description',
    };
    const newData = { ...data, products: [...data.products, newProduct] };
    saveData(newData);
  };

  const updateProduct = (id: number, updates: Partial<Product>) => {
    const newData = { ...data, products: data.products.map(p => p.id === id ? { ...p, ...updates } : p) };
    saveData(newData);
  };

  const deleteProduct = (id: number) => {
    if (confirm('Delete this product?')) {
      const newData = { ...data, products: data.products.filter(p => p.id !== id) };
      saveData(newData);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-4xl font-bold text-center text-green-600 mb-8">Gorkha Jaibik</h1>
          <p className="text-center text-gray-600 mb-6">Admin Dashboard</p>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 mb-4"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-green-600 text-white p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gorkha Jaibik Admin</h1>
          <button onClick={() => setAuthenticated(false)} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-6">
        <div className="flex gap-4 mb-6">
          {['products', 'hero', 'company'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded font-bold transition ${
                activeTab === tab
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* PRODUCTS TAB */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <button
              onClick={addProduct}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-bold"
            >
              + Add New Product
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.products.map(product => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow">
                  <input
                    type="text"
                    value={product.name}
                    onChange={(e) => updateProduct(product.id, { name: e.target.value })}
                    className="w-full font-bold text-lg p-2 border rounded mb-2"
                  />
                  <input
                    type="text"
                    value={product.price || ''}
                    onChange={(e) => updateProduct(product.id, { price: e.target.value })}
                    placeholder="Price"
                    className="w-full p-2 border rounded mb-2"
                  />
                  <input
                    type="text"
                    value={product.category}
                    onChange={(e) => updateProduct(product.id, { category: e.target.value })}
                    placeholder="Category"
                    className="w-full p-2 border rounded mb-2"
                  />
                  <input
                    type="text"
                    value={product.image}
                    onChange={(e) => updateProduct(product.id, { image: e.target.value })}
                    placeholder="Image URL"
                    className="w-full p-2 border rounded mb-2"
                  />
                  <textarea
                    value={product.description}
                    onChange={(e) => updateProduct(product.id, { description: e.target.value })}
                    placeholder="Description"
                    className="w-full p-2 border rounded mb-3 h-20"
                  />
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded font-bold"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HERO SECTION TAB */}
        {activeTab === 'hero' && (
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="text-2xl font-bold mb-4">Hero Section</h2>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Main Title</label>
              <input
                type="text"
                value={data.heroTitle}
                onChange={(e) => updateHero('title', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Subtitle</label>
              <input
                type="text"
                value={data.heroSubtitle}
                onChange={(e) => updateHero('subtitle', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Logo URL</label>
              <input
                type="text"
                value={data.logoUrl}
                onChange={(e) => updateHero('logo', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <p className="text-green-600 font-bold mt-4">✓ All changes saved automatically</p>
          </div>
        )}

        {/* COMPANY INFO TAB */}
        {activeTab === 'company' && (
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="text-2xl font-bold mb-4">Company Information</h2>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Company Name</label>
              <input
                type="text"
                value={data.companyName}
                onChange={(e) => updateCompany('name', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Address</label>
              <input
                type="text"
                value={data.companyAddress}
                onChange={(e) => updateCompany('address', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <p className="text-green-600 font-bold mt-4">✓ All changes saved automatically</p>
          </div>
        )}
      </div>
    </div>
  );
}