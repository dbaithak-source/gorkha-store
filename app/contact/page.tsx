export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-600 mt-2">Get in touch with Gorkha Jaibik</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>
            
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-2">📍 Address</h3>
              <p className="text-gray-700">GLAUM ORGANICS PVT. LTD.</p>
              <p className="text-gray-700">Lalitpur, Nepal</p>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-lg mb-2">📧 Email</h3>
              <p className="text-gray-700">contact@gorkhajaibik.com</p>
              <p className="text-gray-700">export@gorkhajaibik.com</p>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-lg mb-2">📱 WhatsApp</h3>
              <a href="https://wa.me/977XXXXXXXXX" className="text-teal-600 font-bold hover:underline">
                Click to chat with us
              </a>
              <p className="text-gray-600 text-sm mt-2">(Available Mon-Fri, 9 AM - 6 PM IST)</p>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-lg mb-2">🕐 Business Hours</h3>
              <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
              <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM IST</p>
              <p className="text-gray-700">Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Your email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Subject" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea className="w-full px-4 py-2 border rounded-lg" rows={5} placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded-lg font-bold hover:bg-teal-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
