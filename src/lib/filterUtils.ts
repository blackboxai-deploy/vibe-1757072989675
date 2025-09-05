import { Property, FilterOptions } from '@/types/property';

export const defaultFilters: FilterOptions = {
  region: 'All Regions',
  minArea: 0,
  maxArea: 5000,
  minPrice: 0,
  maxPrice: 50000000,
  propertyType: 'All Types',
  hasDiscount: false
};

export const filterProperties = (properties: Property[], filters: FilterOptions): Property[] => {
  return properties.filter(property => {
    // Region filter
    if (filters.region !== 'All Regions' && property.region !== filters.region) {
      return false;
    }

    // Area filter
    if (property.area < filters.minArea || property.area > filters.maxArea) {
      return false;
    }

    // Price filter
    if (property.price < filters.minPrice || property.price > filters.maxPrice) {
      return false;
    }

    // Property type filter
    if (filters.propertyType !== 'All Types' && property.propertyType !== filters.propertyType) {
      return false;
    }

    // Discount filter
    if (filters.hasDiscount && !property.discount) {
      return false;
    }

    return true;
  });
};

export const formatPrice = (price: number): string => {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(1)} Cr`;
  } else if (price >= 100000) {
    return `₹${(price / 100000).toFixed(1)} L`;
  }
  return `₹${price.toLocaleString('en-IN')}`;
};

export const formatArea = (area: number): string => {
  return `${area.toLocaleString('en-IN')} sq ft`;
};

export const getDiscountPercentage = (originalPrice: number, currentPrice: number): number => {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};