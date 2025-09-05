'use client';

import { Button } from '@/components/ui/button';

export default function Header() {
  const scrollToProperties = () => {
    const element = document.getElementById('property-search');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MAA Real Estate</h1>
              <p className="text-xs text-gray-500">Your Thane Property Specialists</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={scrollToProperties}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Properties
            </button>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About Us
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
              Testimonials
            </a>
            <Button onClick={scrollToContact} size="sm">
              Contact Us
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button onClick={scrollToContact} size="sm">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}