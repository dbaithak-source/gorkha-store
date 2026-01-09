import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProducts } from '@/lib/products';

export const metadata = {
  title: 'Gorkha Jaibik — Premium Himalayan Organic Products',
  description: 'Premium Himalayan honey, ghee, shilajit, grains & superfoods. Ethically sourced from Nepal.',
};

export default async function HomePage() {
  // Server-side fetch - no infinite loading issues
  const productsResult = await getFeaturedProducts(8).catch((err) => {
    console.error('Featured products fetch failed:', err);
    return [];
  });

  const products = productsResult || [];

  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/gorkha-logo.svg"
              alt="Gorkha Jaibik Logo"
              width={80}
              height={80}
              className="h-20 w-auto"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-green-400">GORKHA JAIBIK</h1>

          <p className="text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium Himalayan Organic Products from the Heart of Nepal
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Ethically Sourced',
              'Certified Organic',
              'Traceable Origins',
              'Export-Ready',
            ].map((badge) => (
              <div key={badge} className="rounded-lg border border-gray-300 p-4 text-center text-sm font-medium text-gray-700">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Why Choose Gorkha Jaibik</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border-l-4 border-amber-500">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Ethically Sourced</h3>
              <p className="text-gray-600">Directly from Himalayan farms. Supporting local communities and sustainable practices.</p>
            </div>

            <div className="bg-white p-8 rounded-lg border-l-4 border-green-500">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">100% Organic</h3>
              <p className="text-gray-600">Pure, natural, and certified organic. No chemicals, no additives, pure health.</p>
            </div>

            <div className="bg-white p-8 rounded-lg border-l-4 border-blue-500">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Premium Quality</h3>
              <p className="text-gray-600">Highest standards of quality and purity guaranteed in every product.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Featured Products</h2>
          <Link href="/shop" className="text-sm font-semibold text-green-600 hover:text-green-700">
            View all →
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
            <p className="text-lg font-medium text-gray-700 mb-3">Products are being updated</p>
            <p className="text-sm text-gray-600 mb-6">
              Explore our full catalog or contact us for bulk orders.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg"
            >
              Browse Shop
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/shop`}
                className="group rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition"
              >
                {product.image && (
                  <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />
                  </div>
                )}
                <div className="p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</p>
                  <h3 className="mt-1 font-bold text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-sm text-green-600 font-semibold">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* STORY SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-green-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Rooted in the Himalayas. Crafted for the World.</h2>
          <p className="text-lg text-gray-700 mb-8">
            We work closely with mountain farmers and traditional producers to preserve ancestral practices while meeting modern quality standards. Every batch carries the essence of Nepal's natural heritage.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-block border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Our Story
            </Link>
            <Link
              href="/shop"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
