export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold">Terms & Conditions</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="prose max-w-4xl space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
            <p className="text-gray-700">Welcome to Gorkha Jaibik. By using our site, you agree to these terms.</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Products & Pricing</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• All prices in INR unless stated otherwise</li>
              <li>• Prices subject to change without notice</li>
              <li>• All products may contain allergens</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Orders & Payment</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• We accept all major cards, UPI, & COD</li>
              <li>• Order confirmation via email</li>
              <li>• Right to refuse/cancel orders</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Liability Disclaimer</h2>
            <p className="text-gray-700">Products are sold "as is". We're not liable for misuse or allergic reactions. Always consult a doctor before use.</p>
          </div>

          <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
            <h3 className="font-bold mb-2">Questions?</h3>
            <p className="text-gray-700">Email: legal@gorkhajaibik.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
