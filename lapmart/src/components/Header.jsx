import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              LapMart
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Cart
            </Link>
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 font-medium transition-colors"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 font-medium transition-colors"
              onClick={toggleMobileMenu}
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 font-medium transition-colors"
              onClick={toggleMobileMenu}
            >
              Cart
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 font-medium transition-colors"
              onClick={toggleMobileMenu}
            >
              Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
