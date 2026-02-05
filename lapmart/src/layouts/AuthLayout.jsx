import { Link } from 'react-router-dom';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col">
      {/* Simple Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-block">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              LapMart
            </h1>
          </Link>
        </div>
      </header>

      {/* Main Content - Centered Form */}
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {children}
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} LapMart. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
