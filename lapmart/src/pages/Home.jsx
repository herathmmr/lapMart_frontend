import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

const Home = () => {
  // Sample featured products
  const featuredProducts = [
    {
      id: 1,
      title: 'MacBook Pro 14" M3 Pro',
      price: 1999,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
      rating: 4.8,
      reviews: 328
    },
    {
      id: 2,
      title: 'Dell XPS 15 (2024)',
      price: 1599,
      image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400',
      rating: 4.6,
      reviews: 245
    },
    {
      id: 3,
      title: 'ASUS ROG Strix G16',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400',
      rating: 4.7,
      reviews: 189
    },
    {
      id: 4,
      title: 'HP Spectre x360 14',
      price: 1399,
      image: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=400',
      rating: 4.5,
      reviews: 156
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to LapMart
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Discover premium laptops at unbeatable prices. Your perfect device awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="large" variant="primary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Shop Now
                </Button>
              </Link>
              <Link to="/products">
                <Button size="large" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">All laptops are verified and tested for quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing on all products</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping nationwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Laptops
            </h2>
            <p className="text-lg text-gray-600">
              Handpicked selection of our best laptops
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="large">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Laptop?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Browse our extensive collection and get the best deals today.
          </p>
          <Link to="/products">
            <Button size="large" className="bg-blue-600 hover:bg-blue-700">
              Start Shopping
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
