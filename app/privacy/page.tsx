export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="prose max-w-4xl space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Privacy Matters</h2>
            <p className="text-gray-700">At Gorkha Jaibik, we respect your privacy and protect your personal information with the highest standards.</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">What Data We Collect</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Name, email, phone, address (for orders)</li>
              <li>• Payment information (processed securely via Stripe)</li>
              <li>• Browsing data (via analytics)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Process & ship your orders</li>
              <li>• Send order updates & marketing emails (opt-out anytime)</li>
              <li>• Improve our website experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-gray-700">We use SSL encryption & comply with data protection standards. Your data is never sold to third parties.</p>
          </div>

          <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
            <h3 className="font-bold mb-2">Contact Us</h3>
            <p className="text-gray-700">Privacy concerns? Email: privacy@gorkhajaibik.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
