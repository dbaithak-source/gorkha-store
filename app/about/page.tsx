'use client';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-900 mb-4">About Gorkha Jaibik</h1>
          <p className="text-xl text-gray-600 mb-6">
            Bringing the purity of Himalayan heritage directly to your doorstep
          </p>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Gorkha Jaibik is born from a deep commitment to preserving and sharing the authentic wellness treasures of the Himalayan regions. We work directly with local farmers, communities, and traditional producers in Nepal to source the finest organic products.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our mission is simple yet profound: To deliver 100% pure, unadulterated, and traditionally-crafted organic products that embody the wisdom of generations and the purity of nature.
          </p>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{title: 'Authenticity', desc: 'No compromises on purity and quality'}, {title: 'Sustainability', desc: 'Protecting the Himalayan ecosystem'}, {title: 'Tradition', desc: 'Honoring centuries of wisdom'}].map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-700 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section>
          <h2 className="text-3xl font-bold text-green-800 mb-6">Our Product Categories</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Medicinal Honeys:</strong> Raw, unfiltered honeys from various Himalayan regions</li>
            <li><strong>Pure Ghee:</strong> Traditionally clarified butter from grass-fed cows and yaks</li>
            <li><strong>Shilajit:</strong> Mineral resin formed over centuries in the Himalayas</li>
            <li><strong>Ancient Grains:</strong> Organic grains and superfoods nurtured by high altitude</li>
            <li><strong>Himalayan Herbs:</strong> Nutrient-rich herbs and powders from pristine regions</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
