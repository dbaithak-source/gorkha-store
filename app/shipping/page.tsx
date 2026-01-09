export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold">Shipping & Delivery</h1>
          <p className="text-gray-600 mt-2">Learn about our shipping options and timelines</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">📦 Domestic Shipping (India)</h2>
            <div className="bg-white p-6 rounded-lg border">
              <p className="font-bold mb-2">Standard Delivery: 3-5 Business Days</p>
              <p className="text-gray-700 mb-4">Free shipping above ₹2,000 | ₹99 for orders below ₹2,000</p>
              <p className="font-bold mb-2">Express Delivery: 1-2 Business Days</p>
              <p className="text-gray-700">₹299 (Available for select cities)</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">🌍 International Shipping</h2>
            <div className="bg-white p-6 rounded-lg border">
              <p className="text-gray-700 mb-4">We ship to 100+ countries via DHL Express</p>
              <p className="font-bold mb-2">Delivery Time: 7-14 Business Days</p>
              <p className="font-bold mb-2">Pricing: Based on weight & destination</p>
              <p className="text-gray-700 text-sm">Contact us for bulk/wholesale export rates: export@gorkhajaibik.com</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">✓ What We Offer</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Real-time order tracking</li>
              <li>✓ Secure, tamper-proof packaging</li>
              <li>✓ Temperature-controlled delivery for sensitive products</li>
              <li>✓ Insurance coverage on all shipments</li>
              <li>✓ Easy returns & replacements</li>
            </ul>
          </div>

          <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
            <p className="text-sm"><strong>Note:</strong> Delivery times are estimates. Peak seasons may cause slight delays. You will receive tracking details within 24 hours of order confirmation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
