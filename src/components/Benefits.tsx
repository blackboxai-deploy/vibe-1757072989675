import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    title: "Filter Properties by Region, Budget & Features",
    description: "Search our curated listings with advanced filters for area, cost, discounts, and amenities. Find exactly what you're looking for in minutes, not months.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/309d8467-84ef-41b0-b649-0318f89ab73b.png"
  },
  {
    title: "Get Personalized Property Tours", 
    description: "Skip the generic showings. We learn what matters most to you, then handpick properties that actually fit your lifestyle and budget.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c20f67b2-594b-4a7d-a880-35b1dea2eaea.png"
  },
  {
    title: "Join Our Extended Family",
    description: "Our clients don't just buy properties – they become part of our community. Get ongoing market updates, maintenance recommendations, and a friend in real estate for life.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/99dca6bf-a4f8-4e92-83f3-6ea07bd3abed.png"
  }
];

export default function Benefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Thane Families Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We don't just find properties – we guide you to the perfect home with expertise you can trust and service that feels like family.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Meet Your Thane Property Specialists
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/90dcce74-c774-4c1d-8dda-26f636c82594.png"
              alt="Professional team of real estate agents in office, warm and approachable"
              className="w-full h-auto rounded-lg shadow-lg mb-6"
            />
            
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              With expertise across residential, commercial, and investment properties throughout Thane, we've guided 1000+ families to their perfect homes. But here's what makes us different: we don't just close deals – we build relationships that last long after you get your keys.
            </p>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <p className="text-gray-700 text-lg italic mb-2">
                "Every client gets personalized property tours, honest market insights, and the kind of open conversation you'd have with family. No pressure, no surprises, no hesitation to ask us anything."
              </p>
              <p className="text-blue-600 font-semibold">– Your Dedicated Thane Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}