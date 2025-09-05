export interface Property {
  id: string;
  title: string;
  location: string;
  area: number; // sq ft
  price: number;
  originalPrice?: number; // for discount calculation
  bedrooms: number;
  bathrooms: number;
  propertyType: 'apartment' | 'villa' | 'studio' | 'penthouse';
  region: string;
  amenities: string[];
  image: string;
  discount?: number;
  featured?: boolean;
}

export interface FilterOptions {
  region: string;
  minArea: number;
  maxArea: number;
  minPrice: number;
  maxPrice: number;
  propertyType: string;
  hasDiscount: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  image?: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  experience: string;
}