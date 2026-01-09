export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold">Returns & Refunds</h1>
          <p className="text-gray-600 mt-2">Easy returns within 30 days</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">30-Day Return Policy</h2>
            <p className="text-gray-700 mb-4">Not satisfied? Return unused products within 30 days for a full refund.</p>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-bold mb-2">Return Process:</h3>
              <ol className="space-y-2 text-sm text-gray-700">
                <li>1. Contact us: support@gorkhajaibik.com</li>
                <li>2. Get return authorization</li>
                <li>3. Ship back to us (prepaid label provided)</li>
                <li>4. Receive refund within 5-7 days</li>
              </ol>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Refund Conditions</h2>
            <ul className="space-y-3 text-gray-700">
              <li>✅ Product unopened & unused</li>
              <li>✅ Original packaging intact</li>
              <li>✅ Within 30 days of purchase</li>
              <li>✅ Full refund issued</li>
              <li>⚠ Damaged/defective? Full refund + replacement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
