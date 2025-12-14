export default function Home() {
  const products = [
    { id: 1, name: 'Pure Honey', price: '$15.99', image: '/images/honey.jpg' },
    { id: 2, name: 'Raw Malt', price: '$12.99', image: '/images/malt.jpg' },
    { id: 3, name: 'Organic Oil', price: '$18.99', image: '/images/oil.jpg' },
    { id: 4, name: '100% Pure Turmeric', price: '$9.99', image: '/images/turmeric.jpg' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen bg-cover bg-center relative" style={{
        backgroundImage: 'url(/images/himalayan-mountains.jpg)',
        backgroundColor: '#1a472a'
      }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 py-20">
          <div className="mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="h-24 w-24 mx-auto mb-6" style={{filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'}}><circle cx="100" cy="100" r="95" fill="white" stroke="#2d3436" strokeWidth="2"/><text x="100" y="85" fontSize="28" fontWeight="bold" textAnchor="middle" fontFamily="Georgia, serif" fill="#2d3436">GORKHA</text><text x="100" y="120" fontSize="28" fontWeight="bold" textAnchor="middle" fontFamily="Georgia, serif" fill="#2d3436">JAIBIK</text><circle cx="100" cy="100" r="88" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.7"/></svg>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-georgia">GORKHA JAIBIK</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">Premium Himalayan Products from the Heart of Nepal</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300">
            Shop Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Purely Nepali Goodness</h2>
              <h3 className="text-2xl font-semibold text-amber-700 mb-4">GORKHA JAIBIK</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We bring you the finest organic and natural products from the pristine Himalayan region of Nepal. Each product is carefully selected and processed to maintain its purity and nutritional value.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment is to provide authentic, high-quality products that support your health and wellness journey.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <p className="text-gray-700 font-semibold">100% Natural</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <p className="text-gray-700 font-semibold">Ethically Sourced</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <p className="text-gray-700 font-semibold">Direct from Farm</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <p className="text-gray-700 font-semibold">Certified Organic</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Can Offer You */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            <span className="text-gray-800">What We</span>
            <span className="text-green-600"> Can Offer You</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Product {product.id}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-green-600 font-bold">{product.price}</p>
                  <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">About Us</h4>
              <p className="text-gray-400 text-sm">Gorkha Jaibik brings premium Himalayan products directly to your door.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">Products</a></li>
                <li><a href="#" className="hover:text-white transition">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">Email: info@gorkhajabik.com</p>
              <p className="text-gray-400 text-sm">Phone: +977-1-1234567</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Gorkha Jaibik. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}