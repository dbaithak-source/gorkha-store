import fs from 'fs';
import path from 'path';

const ADMIN_PASSWORD = 'gorkha123';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <SimpleAdmin />
    </div>
  );
}

function SimpleAdmin() {
  const [authenticated, setAuthenticated] = require('react').useState(false);
  const [password, setPassword] = require('react').useState('');
  const [products, setProducts] = require('react').useState([]);
  const [loading, setLoading] = require('react').useState(true);

  require('react').useEffect(() => {
    if (authenticated) {
      fetch('/products.json')
        .then(r => r.json())
        .then(data => {
          setProducts(data);
          setLoading(false);
        });
    }
  }, [authenticated]);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPassword('');
    } else {
      alert('Wrong password');
    }
  };

  const saveProduct = (id, field, value) => {
    const updated = products.map(p =>
      p.id === id ? { ...p, [field]: value } : p
    );
    setProducts(updated);
  };

  const handleSaveAll = async () => {
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(products),
      });
      if (response.ok) {
        alert('✓ All products saved!');
      }
    } catch (e) {
      alert('Error: ' + e);
    }
  };

  if (!authenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-green-50">
        <div className="bg-white p-8 rounded-lg shadow-xl w-96">
          <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">Admin Panel</h1>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded mb-4 focus:outline-none focus:border-green-500"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Product Editor</h1>
          <button
            onClick={() => setAuthenticated(false)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-bold"
          >
            Logout
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
                  <label className="text-xs text-gray-600 font-bold">Name:</label>
                  <input
                    type="text"
                    value={product.name}
                    onChange={(e) => saveProduct(product.id, 'name', e.target.value)}
                    className="w-full px-2 py-1 border rounded mb-2 font-bold"
                  />

                  <label className="text-xs text-gray-600 font-bold">Price:</label>
                  <input
                    type="text"
                    value={product.price || ''}
                    onChange={(e) => saveProduct(product.id, 'price', e.target.value)}
                    className="w-full px-2 py-1 border rounded mb-2"
                  />

                  <label className="text-xs text-gray-600 font-bold">Category:</label>
                  <input
                    type="text"
                    value={product.category}
                    onChange={(e) => saveProduct(product.id, 'category', e.target.value)}
                    className="w-full px-2 py-1 border rounded mb-2"
                  />

                  <label className="text-xs text-gray-600 font-bold">Image:</label>
                  <input
                    type="text"
                    value={product.image}
                    onChange={(e) => saveProduct(product.id, 'image', e.target.value)}
                    className="w-full px-2 py-1 border rounded mb-2"
                  />

                  <label className="text-xs text-gray-600 font-bold">Description:</label>
                  <textarea
                    value={product.description}
                    onChange={(e) => saveProduct(product.id, 'description', e.target.value)}
                    className="w-full px-2 py-1 border rounded mb-2 h-16 text-sm"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={handleSaveAll}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-lg"
            >
              💾 SAVE ALL PRODUCTS
            </button>
          </>
        )}
      </div>
    </div>
  );
}