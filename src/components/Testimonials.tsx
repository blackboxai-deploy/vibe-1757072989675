import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/lib/propertyData';

export default function Testimonials() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Thane Families Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what families who've found their perfect homes have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 text-lg">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">{testimonial.rating}.0</span>
                </div>
                
                <blockquote className="text-gray-700 mb-4 text-lg leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional social proof */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-8 bg-white rounded-lg p-8 shadow-md">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1000+</div>
              <div className="text-sm text-gray-600">Happy Families</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">8+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
          
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Join the growing community of families who've found not just their dream homes, but lifelong relationships with people who truly care about their success.
          </p>
        </div>
      </div>
    </section>
  );
}