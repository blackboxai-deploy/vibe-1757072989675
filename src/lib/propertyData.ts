import { Property, Testimonial, TeamMember } from '@/types/property';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Spacious 2BHK in Ghodbunder Road',
    location: 'Ghodbunder Road, Thane West',
    area: 1050,
    price: 8500000,
    originalPrice: 9200000,
    bedrooms: 2,
    bathrooms: 2,
    propertyType: 'apartment',
    region: 'Thane West',
    amenities: ['Parking', 'Gym', 'Swimming Pool', 'Security', 'Garden'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/05209444-51d1-4773-8163-af8a79719b47.png',
    discount: 8,
    featured: true
  },
  {
    id: '2',
    title: 'Luxury 3BHK Villa in Kavesar',
    location: 'Kavesar, Thane West',
    area: 2200,
    price: 15500000,
    bedrooms: 3,
    bathrooms: 3,
    propertyType: 'villa',
    region: 'Thane West',
    amenities: ['Private Garden', 'Parking', 'Security', 'Clubhouse', 'Children Play Area'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c3c286b1-73c0-46e0-bfcc-a517ca69e49b.png',
    featured: true
  },
  {
    id: '3',
    title: 'Cozy 1BHK Studio in Naupada',
    location: 'Naupada, Thane West',
    area: 650,
    price: 4200000,
    originalPrice: 4800000,
    bedrooms: 1,
    bathrooms: 1,
    propertyType: 'studio',
    region: 'Thane West',
    amenities: ['Parking', 'Lift', 'Security', 'Market Nearby'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6b9cf69f-858f-4193-ab15-1f5ae807bcbf.png',
    discount: 12
  },
  {
    id: '4',
    title: 'Premium 4BHK Penthouse in Hiranandani',
    location: 'Hiranandani Estate, Thane West',
    area: 3500,
    price: 25000000,
    bedrooms: 4,
    bathrooms: 4,
    propertyType: 'penthouse',
    region: 'Thane West',
    amenities: ['Terrace Garden', 'Private Lift', 'Swimming Pool', 'Gym', 'Concierge'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/380e8648-4744-4e08-bd10-88a4dbb834f3.png',
    featured: true
  },
  {
    id: '5',
    title: 'Family 3BHK in Vartak Nagar',
    location: 'Vartak Nagar, Thane West',
    area: 1400,
    price: 11200000,
    originalPrice: 12000000,
    bedrooms: 3,
    bathrooms: 2,
    propertyType: 'apartment',
    region: 'Thane West',
    amenities: ['School Nearby', 'Parking', 'Garden', 'Security', 'Shopping Complex'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/516cdd3f-96f7-415e-9424-385af0fff98f.png',
    discount: 7
  },
  {
    id: '6',
    title: 'Modern 2BHK in Kasarvadavali',
    location: 'Kasarvadavali, Thane West',
    area: 980,
    price: 7800000,
    bedrooms: 2,
    bathrooms: 2,
    propertyType: 'apartment',
    region: 'Thane West',
    amenities: ['Metro Connectivity', 'Parking', 'Gym', 'Security'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9e5933a1-8095-4c7b-811e-e60661d60686.png',
  },
  {
    id: '7',
    title: 'Elegant 2BHK in Dombivli East',
    location: 'Dombivli East, Thane',
    area: 1100,
    price: 6500000,
    originalPrice: 7200000,
    bedrooms: 2,
    bathrooms: 2,
    propertyType: 'apartment',
    region: 'Thane East',
    amenities: ['Railway Station Nearby', 'Parking', 'Security', 'Market'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/720485ac-1024-46c0-81a4-6da7ff68eda8.png',
    discount: 10
  },
  {
    id: '8',
    title: 'Spacious 3BHK Villa in Kalyan',
    location: 'Kalyan West, Thane',
    area: 1800,
    price: 9200000,
    bedrooms: 3,
    bathrooms: 3,
    propertyType: 'villa',
    region: 'Kalyan',
    amenities: ['Garden', 'Parking', 'Security', 'Temple Nearby'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e4739233-ddf8-4e14-bec6-0049a8477def.png',
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya & Rajesh M.',
    location: 'Ghodbunder Road',
    text: 'They didn\'t just find us a house – they found us our dream home. Even now, two years later, they check in on us like family.',
    rating: 5,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6362056f-f3ff-4a67-b037-00e7274584b1.png'
  },
  {
    id: '2',
    name: 'Amit K.',
    location: 'Hiranandani Estate',
    text: 'Finally, an agent who listened to what we actually wanted instead of pushing what they wanted to sell.',
    rating: 5,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8b26d325-a3c7-44ed-8f0f-cb91650e29e2.png'
  },
  {
    id: '3',
    name: 'Sneha P.',
    location: 'Vartak Nagar',
    text: 'No hidden surprises, no pressure tactics. Just honest advice from people who genuinely care.',
    rating: 5,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b1504fc8-9346-48a0-92fd-71521692117b.png'
  },
  {
    id: '4',
    name: 'Vikram & Meera S.',
    location: 'Kavesar',
    text: 'The personalized tours saved us months of house hunting. They knew exactly what would work for our family.',
    rating: 5,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2de881f3-e53b-403b-8695-e3bc18b3227b.png'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    role: 'Senior Property Consultant',
    experience: '8+ years in Thane real estate',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/67b5f41d-151c-4d27-a529-8fef84a29bee.png'
  },
  {
    id: '2',
    name: 'Anita Desai',
    role: 'Residential Specialist',
    experience: '6+ years helping families find homes',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dbc0b040-91e2-4b1a-b452-0ebc7e1d50c0.png'
  },
  {
    id: '3',
    name: 'Karan Patel',
    role: 'Commercial Property Expert',
    experience: '10+ years in commercial real estate',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e51ab665-0efa-4bb6-ae06-56becd0bcaec.png'
  }
];

export const regions = [
  'All Regions',
  'Thane West',
  'Thane East',
  'Kalyan',
  'Dombivli',
  'Bhiwandi'
];

export const propertyTypes = [
  'All Types',
  'apartment',
  'villa',
  'studio',
  'penthouse'
];