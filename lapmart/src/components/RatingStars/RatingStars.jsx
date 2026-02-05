const RatingStars = ({ rating = 0, maxStars = 5, size = 'medium', showCount = false, reviewCount = 0 }) => {
  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6'
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < maxStars; i++) {
      if (i < fullStars) {
        // Full star
        stars.push(
          <svg
            key={i}
            className={`${sizes[size]} fill-current text-yellow-400`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        // Half star
        stars.push(
          <svg
            key={i}
            className={`${sizes[size]} text-yellow-400`}
            viewBox="0 0 20 20"
          >
            <defs>
              <linearGradient id={`half-${rating}-${i}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#D1D5DB" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#half-${rating}-${i})`}
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            />
          </svg>
        );
      } else {
        // Empty star
        stars.push(
          <svg
            key={i}
            className={`${sizes[size]} fill-current text-gray-300`}
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
    <div className="flex items-center gap-1">
      <div className="flex">{renderStars()}</div>
      {showCount && reviewCount > 0 && (
        <span className="ml-1 text-sm text-gray-600">
          ({reviewCount})
        </span>
      )}
    </div>
  );
};

export default RatingStars;
