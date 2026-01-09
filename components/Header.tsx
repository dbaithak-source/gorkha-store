'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-bold text-green-700">
                            GORKHA JAIBIK
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-700 font-medium transition">
              Home
            </Link>
            <Link href="/#products" className="text-gray-700 hover:text-green-700 font-medium transition">
              Shop
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-700 font-medium transition">
              About
            </Link>
            <Link href="/trust" className="text-gray-700 hover:text-green-700 font-medium transition">
              Why Us
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-green-700 font-medium transition">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-700 font-medium transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-green-700">
              ☰ Menu
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
