'use client';

import { useState, useMemo } from 'react';
import { Property, FilterOptions } from '@/types/property';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { filterProperties, defaultFilters, formatPrice } from '@/lib/filterUtils';
import { regions, propertyTypes } from '@/lib/propertyData';
import PropertyCard from './PropertyCard';

interface PropertySearchProps {
  properties: Property[];
}

export default function PropertySearch({ properties }: PropertySearchProps) {
  const [filters, setFilters] = useState<FilterOptions>(defaultFilters);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const filteredProperties = useMemo(() => {
    let filtered = filterProperties(properties, filters);
    
    // Apply search term
    if (searchTerm) {
      filtered = filtered.filter(property => 
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.region.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [properties, filters, searchTerm]);

  const updateFilter = (key: keyof FilterOptions, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
    setSearchTerm('');
  };

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.region !== 'All Regions') count++;
    if (filters.propertyType !== 'All Types') count++;
    if (filters.minPrice > 0 || filters.maxPrice < 50000000) count++;
    if (filters.minArea > 0 || filters.maxArea < 5000) count++;
    if (filters.hasDiscount) count++;
    return count;
  }, [filters]);

  return (
    <div className="w-full">
      {/* Search Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Find Your Perfect Property in Thane</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Search through our curated listings with advanced filters. Find exactly what you're looking for in minutes, not months.
        </p>
      </div>

      {/* Search Controls */}
      <Card className="p-6 mb-8">
        {/* Search Input */}
        <div className="mb-6">
          <Label htmlFor="search" className="text-sm font-medium mb-2 block">
            Search Properties
          </Label>
          <Input
            id="search"
            placeholder="Search by location, property type, or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Quick Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <Label htmlFor="region" className="text-sm font-medium mb-2 block">Region</Label>
            <Select value={filters.region} onValueChange={(value) => updateFilter('region', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>{region}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="propertyType" className="text-sm font-medium mb-2 block">Property Type</Label>
            <Select value={filters.propertyType} onValueChange={(value) => updateFilter('propertyType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {propertyTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type === 'All Types' ? type : type.charAt(0).toUpperCase() + type.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="discount"
              checked={filters.hasDiscount}
              onCheckedChange={(checked) => updateFilter('hasDiscount', checked)}
            />
            <Label htmlFor="discount" className="text-sm font-medium">
              Properties with Discount
            </Label>
          </div>

          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex-1"
            >
              Advanced {showAdvanced ? '▲' : '▼'}
            </Button>
            {activeFiltersCount > 0 && (
              <Button variant="ghost" onClick={resetFilters} size="sm">
                Clear ({activeFiltersCount})
              </Button>
            )}
          </div>
        </div>

        {/* Advanced Filters */}
        {showAdvanced && (
          <div className="border-t pt-6 space-y-6">
            <div>
              <Label className="text-sm font-medium mb-4 block">
                Price Range: {formatPrice(filters.minPrice)} - {formatPrice(filters.maxPrice)}
              </Label>
              <div className="px-4">
                <Slider
                  value={[filters.minPrice, filters.maxPrice]}
                  onValueChange={([min, max]) => {
                    updateFilter('minPrice', min);
                    updateFilter('maxPrice', max);
                  }}
                  max={50000000}
                  min={0}
                  step={500000}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>₹0</span>
                <span>₹5 Cr</span>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium mb-4 block">
                Area Range: {filters.minArea} - {filters.maxArea} sq ft
              </Label>
              <div className="px-4">
                <Slider
                  value={[filters.minArea, filters.maxArea]}
                  onValueChange={([min, max]) => {
                    updateFilter('minArea', min);
                    updateFilter('maxArea', max);
                  }}
                  max={5000}
                  min={0}
                  step={100}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>0 sq ft</span>
                <span>5000 sq ft</span>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold">
            {filteredProperties.length} Properties Found
          </h3>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary">
              {activeFiltersCount} filter{activeFiltersCount > 1 ? 's' : ''} applied
            </Badge>
          )}
        </div>
      </div>

      {/* Property Grid */}
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">No Properties Found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your filters or search terms to find more properties.
          </p>
          <Button onClick={resetFilters}>Clear All Filters</Button>
        </div>
      )}
    </div>
  );
}