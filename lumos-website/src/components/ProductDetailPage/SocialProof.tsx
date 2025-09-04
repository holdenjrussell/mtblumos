import React, { useState } from 'react';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  verified: boolean;
  beforeImage?: string;
  afterImage?: string;
  timeUsed: string;
}

const SocialProof: React.FC = () => {
  const [selectedReview, setSelectedReview] = useState<number | null>(null);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      comment: "Amazing results in just 2 weeks! The cooling technology makes it so comfortable. I've tried other IPL devices and they burned - this one doesn't!",
      verified: true,
      beforeImage: "/api/placeholder/150/150",
      afterImage: "/api/placeholder/150/150",
      timeUsed: "6 weeks"
    },
    {
      id: 2,
      name: "Jessica L.",
      rating: 5,
      comment: "No more razor burns or ingrown hairs! Worth every penny. The 50°F cooling is a game changer.",
      verified: true,
      timeUsed: "8 weeks"
    },
    {
      id: 3,
      name: "Amanda K.",
      rating: 5,
      comment: "Better than my $3000 salon treatments! I can't believe how well this works at home.",
      verified: true,
      beforeImage: "/api/placeholder/150/150",
      afterImage: "/api/placeholder/150/150",
      timeUsed: "12 weeks"
    },
    {
      id: 4,
      name: "Emma R.",
      rating: 5,
      comment: "Pain-free and actually works! I was skeptical but the results speak for themselves.",
      verified: true,
      timeUsed: "4 weeks"
    },
    {
      id: 5,
      name: "Lisa T.",
      rating: 5,
      comment: "Life-changing device! The cooling technology is incredible - feels like ice cubes on my skin.",
      verified: true,
      beforeImage: "/api/placeholder/150/150",
      afterImage: "/api/placeholder/150/150",
      timeUsed: "10 weeks"
    },
    {
      id: 6,
      name: "Maria S.",
      rating: 4,
      comment: "Great results and super easy to use. Love that it has 999,999 flashes - will last forever!",
      verified: true,
      timeUsed: "5 weeks"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex text-2xl">
              {renderStars(Math.floor(averageRating))}
            </div>
            <span className="text-xl font-bold">{averageRating.toFixed(1)}</span>
            <span className="text-gray-600">({reviews.length} Reviews)</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real customers - see why thousands choose Lumos IPL
          </p>
        </div>

        {/* Featured Video Reviews */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Customer Video Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div key={index} className="relative bg-white rounded-xl shadow-md overflow-hidden card-hover">
                <div className="relative h-48 bg-gradient-to-br from-lavender-100 to-purple-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                      <svg className="w-6 h-6 text-lavender-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-black/50 px-2 py-1 rounded text-sm">
                      2:14
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">{renderStars(5)}</div>
                    <span className="text-sm text-gray-600">Verified Purchase</span>
                  </div>
                  <p className="text-sm text-gray-700">"Amazing results in just 4 weeks! The cooling technology is incredible."</p>
                  <p className="text-xs text-gray-500 mt-2">- Customer Review #{index}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-md p-6 card-hover">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-lavender-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.timeUsed} of use</p>
                  </div>
                </div>
                {review.verified && (
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    ✓ Verified
                  </div>
                )}
              </div>
              
              <div className="flex mb-3">
                {renderStars(review.rating)}
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{review.comment}</p>
              
              {review.beforeImage && review.afterImage && (
                <div className="flex space-x-2">
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">Before</p>
                    <img src={review.beforeImage} alt="Before" className="w-full h-20 object-cover rounded" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">After</p>
                    <img src={review.afterImage} alt="After" className="w-full h-20 object-cover rounded" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl shadow-soft p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-lavender-600 mb-2">4.3★</div>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-lavender-600 mb-2">2,147</div>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-lavender-600 mb-2">94%</div>
              <p className="text-sm text-gray-600">Would Recommend</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-lavender-600 mb-2">30-Day</div>
              <p className="text-sm text-gray-600">Money-Back Guarantee</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;