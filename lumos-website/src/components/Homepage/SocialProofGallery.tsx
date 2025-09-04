import React from 'react';

const SocialProofGallery: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Real People. <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            See why thousands choose Lumos IPL for permanent hair removal
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <div className="text-gray-500 text-lg">
              🎥 Video Testimonials & Before/After Gallery Coming Soon
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="text-3xl mb-2">▶️</div>
                    <div className="text-sm">Customer Video #{i}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofGallery;