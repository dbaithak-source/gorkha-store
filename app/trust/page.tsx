'use client';

export default function TrustPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-900 mb-4">Why Trust Gorkha Jaibik?</h1>
          <p className="text-xl text-gray-600">Transparency, Quality, and Integrity in Every Product</p>
        </section>

        {/* Trust Metrics */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {[{num: '28+', label: 'Years of Heritage'}, {num: '100%', label: 'Organic Certified'}, {num: '50+', label: 'Countries Served'}].map((metric) => (
            <div key={metric.label} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-4xl font-bold text-green-700 mb-2">{metric.num}</h3>
              <p className="text-gray-600 text-lg">{metric.label}</p>
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Certifications & Standards</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-2">🌿 100% Organic</h3>
              <p className="text-gray-700">All products are certified organic with zero chemical additives or preservatives.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-2">✓ Traceable Source</h3>
              <p className="text-gray-700">Every product can be traced back to its source farm or producer.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-2">🔬 Quality Tested</h3>
              <p className="text-gray-700">All products undergo rigorous third-party laboratory testing.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-2">🤝 Fair Trade</h3>
              <p className="text-gray-700">We ensure fair compensation for all farming partners and communities.</p>
            </div>
          </div>
        </section>

        {/* Sourcing Promise */}
        <section>
          <h2 className="text-3xl font-bold text-green-800 mb-6">Our Sourcing Promise</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-2xl text-green-600 mr-4">✓</span>
              <span><strong>No Adulteration:</strong> Pure products without mixing or dilution</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl text-green-600 mr-4">✓</span>
              <span><strong>No Chemical Shortcuts:</strong> No pesticides, herbicides, or synthetic chemicals</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl text-green-600 mr-4">✓</span>
              <span><strong>Minimal Processing:</strong> Traditional methods preserve nutritional integrity</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl text-green-600 mr-4">✓</span>
              <span><strong>Direct from Source:</strong> We eliminate middlemen for better quality and fair pricing</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
