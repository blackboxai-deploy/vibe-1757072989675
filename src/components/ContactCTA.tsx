'use client';

import { Button } from '@/components/ui/button';

export default function ContactCTA() {
  const scrollToProperties = () => {
    const element = document.getElementById('property-search');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact-cta" className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Property in Thane?
          </h2>
          
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Browse available homes now and schedule your personalized tour. Your dream property is waiting, and we're here to help you find it without any stress or pressure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToProperties}
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto font-semibold"
            >
              Browse Properties & Schedule Your Personal Tour
            </Button>
            
            <Button 
              variant="outline"
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 h-auto font-semibold"
            >
              Call Us Now: +91-XXXXX-XXXXX
            </Button>
          </div>

          {/* Urgency/benefit elements */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Free Consultation</h3>
              <p className="text-sm opacity-90">No obligation. Just honest advice.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Personal Tours</h3>
              <p className="text-sm opacity-90">See only properties that fit your needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Family Treatment</h3>
              <p className="text-sm opacity-90">Relationships that last beyond the sale.</p>
            </div>
          </div>

          {/* Trust reinforcement */}
          <div className="mt-12 pt-8 border-t border-white border-opacity-20">
            <p className="text-lg opacity-90 mb-2">
              <strong>1000+ families</strong> have found their perfect homes with us
            </p>
            <p className="opacity-75">
              Join them today and experience the difference of working with agents who actually care about your success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}