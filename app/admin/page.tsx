'use client';

import { useState, useEffect } from 'react';

const ADMIN_PASSWORD = 'gorkha123';

interface PageSettings {
  heroTitle: string;
  heroSubtitle: string;
  heroButtonText: string;
  aboutTitle: string;
  aboutDescription: string;
  contactEmail: string;
  contactPhone: string;
  companyName: string;
  companyAddress: string;
}

const DEFAULT_SETTINGS: PageSettings = {
  heroTitle: 'GORKHA JAIBIK',
  heroSubtitle: 'Premium Himalayan Products from the Heart of Nepal',
  heroButtonText: 'Shop Now',
  aboutTitle: 'Purely Nepali Goodness',
  aboutDescription: 'We bring you the finest organic and natural products from the pristine Himalayan region of Nepal. Our commitment is to provide authentic, high-quality products that support your health and wellness journey.',
  contactEmail: 'info@gorkhajabik.com',
  contactPhone: '+977-1-1234567',
  companyName: 'Glaum Organics Pvt. Ltd.',
  companyAddress: 'Adarsh Nagar, Birganj, Nepal',
};

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [settings, setSettings] = useState<PageSettings>(DEFAULT_SETTINGS);
  const [saveMessage, setSaveMessage] = useState('');
  const [activeTab, setActiveTab] = useState<'hero' | 'about' | 'contact' | 'company'>('hero');

  useEffect(() => {
    // Load settings from localStorage
    const saved = localStorage.getItem('pageSettings');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPassword('');
    } else {
      alert('Wrong password!');
      setPassword('');
    }
  };

  const handleInputChange = (field: keyof PageSettings, value: string) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    localStorage.setItem('pageSettings', JSON.stringify(settings));
    setSaveMessage('✓ Changes saved successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset to default settings?')) {
      setSettings(DEFAULT_SETTINGS);
      localStorage.removeItem('pageSettings');
      setSaveMessage('✓ Reset to default settings');
      setTimeout(() => setSaveMessage(''), 3000);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-green-900 mb-2 text-center">Admin Panel</h1>
          <p className="text-gray-600 text-center mb-6">Gorkha Jaibik CMS</p>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-green-900">Gorkha Jaibik CMS</h1>
            <p className="text-gray-600">Easy Content Management</p>
          </div>
          <button
            onClick={() => {
              setAuthenticated(false);
              setSettings(DEFAULT_SETTINGS);
            }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Success Message */}
        {saveMessage && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg font-semibold">
            {saveMessage}
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-300 flex-wrap">
          {['hero', 'about', 'contact', 'company'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-3 font-semibold transition border-b-2 capitalize ${
                activeTab === tab
                  ? 'text-green-600 border-green-600'
                  : 'text-gray-600 border-transparent hover:text-green-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* HERO TAB */}
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-green-900 mb-6">Hero Section</h2>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Main Title</label>
                <input
                  type="text"
                  value={settings.heroTitle}
                  onChange={(e) => handleInputChange('heroTitle', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                <p className="text-sm text-gray-500 mt-1">The large heading on your homepage</p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subtitle</label>
                <input
                  type="text"
                  value={settings.heroSubtitle}
                  onChange={(e) => handleInputChange('heroSubtitle', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                <p className="text-sm text-gray-500 mt-1">Your tagline/mission statement</p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Button Text</label>
                <input
                  type="text"
                  value={settings.heroButtonText}
                  onChange={(e) => handleInputChange('heroButtonText', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                <p className="text-sm text-gray-500 mt-1">Text on the call-to-action button</p>
              </div>
            </div>
          )}

          {/* ABOUT TAB */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-green-900 mb-6">About Section</h2>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Section Title</label>
                <input
                  type="text"
                  value={settings.aboutTitle}
                  onChange={(e) => handleInputChange('aboutTitle', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Description</label>
                <textarea
                  value={settings.aboutDescription}
                  onChange={(e) => handleInputChange('aboutDescription', e.target.value)}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                <p className="text-sm text-gray-500 mt-1">Tell your story here</p>
              </div>
            </div>
          )}

          {/* CONTACT TAB */}
          {activeTab === 'contact' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-green-900 mb-6">Contact Information</h2>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  value={settings.contactEmail}
                  onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={settings.contactPhone}
                  onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>
            </div>
          )}

          {/* COMPANY TAB */}
          {activeTab === 'company' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-green-900 mb-6">Company Information</h2>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Company Name</label>
                <input
                  type="text"
                  value={settings.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Company Address</label>
                <input
                  type="text"
                  value={settings.companyAddress}
                  onChange={(e) => handleInputChange('companyAddress', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4 pt-6 border-t border-gray-300">
            <button
              onClick={handleSave}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Save Changes
            </button>
            <button
              onClick={handleReset}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Reset to Default
            </button>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-blue-900 mb-2">How to Use This CMS:</h3>
          <ul className="text-blue-800 space-y-1 text-sm">
            <li>✓ Click on each tab above to edit different sections</li>
            <li>✓ Make your changes in the form fields</li>
            <li>✓ Click "Save Changes" to apply updates to your website</li>
            <li>✓ Changes appear instantly on your live website</li>
            <li>✓ Use "Reset to Default" to restore original content</li>
          </ul>
        </div>
      </main>
    </div>
  );
}