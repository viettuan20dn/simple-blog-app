function FeaturedBlog({
  tag = "STARTUP",
  title = "Step-by-step guide to choosing great font pairs",
  author = "James West",
  postedTime = "May 23, 2022",
  content = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
}) {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://media.istockphoto.com/id/1014092414/photo/silhouette-of-businessman.jpg?s=612x612&w=0&k=20&c=SYRCSYBaSDGixjRrZviqrd3MEmxXLQIOvDVOpIE3bOw=")`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex items-center">
        <div className="max-w-7xl mx-auto px-2 lg:px-3 py-5">
          <div className="max-w-3xl">
            {/* Category Tag */}
            <div className="mb-6">
              <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
                POSTED ON <span className="text-white">{tag}</span>
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-8">
              {title}
            </h1>

            {/* Author and Date */}
            <div className="flex items-center text-white/80 text-sm mb-3 space-x-4">
              <span>
                By{" "}
                <span className="text-yellow-400 hover:text-yellow-300 cursor-pointer">
                  {author}
                </span>
              </span>
              <span>|</span>
              <span>{postedTime}</span>
            </div>

            {/* Description */}
            <p className="text-white/90 text-sm leading-relaxed mb-6 max-w-2xl">
              {content}
            </p>

            {/* CTA Button */}
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-none transition-colors duration-200 group">
              <span className="flex items-center">
                Read More
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedBlog;
