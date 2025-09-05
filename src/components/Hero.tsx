'use client';

import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToProperties = () => {
    const element = document.getElementById('property-search');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headlines */}
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your Perfect Home in Thane{' '}
            <span className="text-blue-600">Without the Stress, Surprises, or Pressure</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            You deserve more than just another property transaction. You deserve a trusted guide who understands your vision, respects your budget, and makes your biggest investment feel effortless.
          </p>

          {/* Primary CTA */}
          <div className="mb-12">
            <Button 
              onClick={scrollToProperties}
              size="lg" 
              className="text-lg px-8 py-4 h-auto bg-blue-600 hover:bg-blue-700"
            >
              Browse Properties & Schedule Your Personal Tour
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d4d05800-56bf-4c69-95db-60bff570dbe9.png"
              alt="Happy family holding keys in front of their new home in Thane, smiling genuinely"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            
            {/* Floating testimonial card */}
            <div className="absolute -bottom-6 left-4 lg:left-8 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
              <p className="text-sm text-gray-700">
                "Finally found our dream home with agents who actually listen!"
              </p>
              <p className="text-xs text-gray-500 mt-1">- Priya & Rajesh M.</p>
            </div>

            {/* Trust indicators */}
            <div className="absolute -bottom-6 right-4 lg:right-8 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1000+</div>
                <div className="text-sm text-gray-600">Happy Families</div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Trusted by families across Thane</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-700">8+ Years</div>
                <div className="text-xs text-gray-500">Experience</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-700">1000+</div>
                <div className="text-xs text-gray-500">Properties Sold</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-700">98%</div>
                <div className="text-xs text-gray-500">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}