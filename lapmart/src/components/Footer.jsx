const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">LapMart</h3>
            <p className="text-gray-300 text-sm">
              Your trusted destination for premium laptops and accessories.
              Quality products at competitive prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/products" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: support@lapmart.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Hours: Mon-Fri, 9AM-6PM</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} LapMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
