'use client';

import { Property } from '@/types/property';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatPrice, formatArea } from '@/lib/filterUtils';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const hasDiscount = property.originalPrice && property.originalPrice > property.price;
  const discountPercentage = hasDiscount 
    ? Math.round(((property.originalPrice! - property.price) / property.originalPrice!) * 100)
    : 0;

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {hasDiscount && (
          <Badge className="absolute top-3 right-3 bg-red-500 text-white">
            {discountPercentage}% OFF
          </Badge>
        )}
        {property.featured && (
          <Badge className="absolute top-3 left-3 bg-blue-600 text-white">
            Featured
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {property.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3">{property.location}</p>

        <div className="flex justify-between items-center mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-600">
                {formatPrice(property.price)}
              </span>
              {hasDiscount && (
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(property.originalPrice!)}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500">{formatArea(property.area)}</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <span>{property.bedrooms} Bed</span>
          <span>{property.bathrooms} Bath</span>
          <span className="capitalize">{property.propertyType}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {property.amenities.slice(0, 3).map((amenity) => (
            <Badge key={amenity} variant="secondary" className="text-xs">
              {amenity}
            </Badge>
          ))}
          {property.amenities.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{property.amenities.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full" size="sm">
          Schedule Personal Tour
        </Button>
      </CardFooter>
    </Card>
  );
}