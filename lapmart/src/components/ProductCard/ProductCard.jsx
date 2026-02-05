import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, title, price, image, rating, reviews } = product;

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 fill-current text-yellow-400"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            viewBox="0 0 20 20"
          >
            <defs>
              <linearGradient id={`half-${id}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#D1D5DB" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#half-${id})`}
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 fill-current text-gray-300"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <Link to={`/products/${id}`}>
        {/* Product Image */}
        <div className="relative overflow-hidden bg-gray-100 h-64">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex">{renderStars(rating)}</div>
            <span className="ml-2 text-sm text-gray-600">
              ({reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-blue-600">
              ${price.toLocaleString()}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              // Add to cart functionality will be implemented later
              console.log('Added to cart:', id);
            }}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
