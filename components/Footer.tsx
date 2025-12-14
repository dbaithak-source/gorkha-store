import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#f5f0e8] via-[#f5f0e8] to-[#2d5016] text-gray-800 overflow-hidden">
      {/* Decorative leaf pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 text-[200px] text-green-700">🍂</div>
        <div className="absolute top-10 right-20 text-[180px] text-green-700">🌿</div>
        <div className="absolute bottom-20 left-10 text-[150px] text-green-700">🍃</div>
        <div className="absolute bottom-0 right-0 text-[220px] text-green-700">🌿</div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10">
        {/* Top section with branding and company info */}
        <div className="px-6 md:px-12 lg:px-20 py-16 border-b border-green-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left side - Branding */}
            <div className="flex flex-col items-center md:items-start justify-center">
              <div className="text-4xl md:text-5xl font-bold text-green-900 mb-2 text-center md:text-left">
                <div>GORKHA</div>
                <div>JAIBIK</div>
              </div>
              <p className="text-gray-600 text-sm text-center md:text-left mt-4 max-w-sm">
                Premium Himalayan Products from the Heart of Nepal
              </p>
            </div>

            {/* Right side - Company details */}
            <div className="flex flex-col items-center md:items-end justify-center">
              <h3 className="text-lg font-bold text-green-900 mb-6">GLAUM ORGANICS PVT. LTD.</h3>
              <div className="space-y-3 text-sm text-gray-700 text-center md:text-right">
                <p className="flex items-center justify-center md:justify-end gap-2">
                  <span>📍</span>
                  <span>Adarsh Nagar, Birganj, Nepal</span>
                </p>
                <p className="flex items-center justify-center md:justify-end gap-2">
                  <span>📱</span>
                  <span>+977-51-522573, 9820797121</span>
                </p>
                <p className="flex items-center justify-center md:justify-end gap-2">
                  <span>✉️</span>
                  <span>glaumorganics2025@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation and social section */}
        <div className="px-6 md:px-12 lg:px-20 py-8 bg-green-900 bg-opacity-90">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Website link */}
            <div className="flex items-center gap-2 text-white hover:text-amber-100 transition">
              <span className="text-lg">🌐</span>
              <a href="https://www.gorkhajabik.com" className="font-semibold">
                www.gorkhajabik.com
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-8">
              <a href="#" className="text-white hover:text-amber-100 transition flex items-center gap-2">
                <span className="text-xl">📷</span>
                <span className="text-sm">@gorkhajabik</span>
              </a>
              <a href="#" className="text-white hover:text-amber-100 transition flex items-center gap-2">
                <span className="text-xl">👍</span>
                <span className="text-sm">Gorkha Jaibik</span>
              </a>
              <a href="#" className="text-white hover:text-amber-100 transition flex items-center gap-2">
                <span className="text-xl">♪</span>
                <span className="text-sm">@gorkha.jaibik</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="px-6 md:px-12 lg:px-20 py-6 bg-green-950">
          <p className="text-center text-sm text-gray-200">
            © 2024 Gorkha Jaibik. All rights reserved. | Premium Himalayan Organic Products
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;