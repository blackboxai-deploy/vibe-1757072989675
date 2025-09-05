import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Benefits from '@/components/Benefits';
import PropertySearch from '@/components/PropertySearch';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { properties } from '@/lib/propertyData';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Problem Section */}
      <Problem />
      
      {/* Solution/Benefits Section */}
      <Benefits />
      
      {/* Property Search Section */}
      <section id="property-search" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <PropertySearch properties={properties} />
        </div>
      </section>
      
      {/* Social Proof Section */}
      <Testimonials />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Final CTA Section */}
      <ContactCTA />
    </main>
  );
}