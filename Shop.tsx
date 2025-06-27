import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, Search, SlidersHorizontal, X } from 'lucide-react';
import { plants, categories, carelevels, lightNeeds } from '../data/plants';
import { Plant, FilterOptions, SortOption } from '../types';
import PlantCard from '../components/Plant/PlantCard';
import Button from '../components/UI/Button';

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  
  const [filters, setFilters] = useState<FilterOptions>({
    category: searchParams.get('category') || 'All Plants',
    priceRange: [0, 100],
    careLevel: '',
    lightNeeds: ''
  });

  const [sortBy, setSortBy] = useState('popularity');

  const sortOptions: SortOption[] = [
    { value: 'popularity', label: 'Most Popular' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name A-Z' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  const filteredAndSortedPlants = useMemo(() => {
    let filtered = plants.filter(plant => {
      const matchesSearch = searchQuery === '' || 
        plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plant.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plant.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = filters.category === 'All Plants' || plant.category === filters.category;
      const matchesPrice = plant.price >= filters.priceRange[0] && plant.price <= filters.priceRange[1];
      const matchesCareLevel = filters.careLevel === '' || plant.careLevel === filters.careLevel;
      const matchesLightNeeds = filters.lightNeeds === '' || plant.lightNeeds === filters.lightNeeds;

      return matchesSearch && matchesCategory && matchesPrice && matchesCareLevel && matchesLightNeeds;
    });

    // Sort the filtered plants
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default: // popularity
        filtered.sort((a, b) => b.reviews - a.reviews);
    }

    return filtered;
  }, [searchQuery, filters, sortBy]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (searchQuery) {
      params.set('search', searchQuery);
    } else {
      params.delete('search');
    }
    setSearchParams(params);
  };

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'All Plants',
      priceRange: [0, 100],
      careLevel: '',
      lightNeeds: ''
    });
    setSearchQuery('');
    setSearchParams({});
  };

  const activeFiltersCount = [
    filters.category !== 'All Plants',
    filters.careLevel !== '',
    filters.lightNeeds !== '',
    searchQuery !== ''
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Shop Plants</h1>
          <p className="text-gray-600">
            Discover our complete collection of beautiful, healthy plants for your home and office.
          </p>
        </div>

        {/* Search and Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <form onSubmit={handleSearch} className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search plants..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </form>

            <div className="flex items-center gap-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* Filter Toggle */}
              <Button
                variant="outline"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-200">
              <span className="text-sm font-medium text-gray-600">Active Filters:</span>
              {searchQuery && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  Search: {searchQuery}
                  <button onClick={() => setSearchQuery('')} className="ml-2">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {filters.category !== 'All Plants' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  {filters.category}
                  <button onClick={() => handleFilterChange('category', 'All Plants')} className="ml-2">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {filters.careLevel && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  Care: {filters.careLevel}
                  <button onClick={() => handleFilterChange('careLevel', '')} className="ml-2">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {filters.lightNeeds && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  Light: {filters.lightNeeds}
                  <button onClick={() => handleFilterChange('lightNeeds', '')} className="ml-2">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear All
              </Button>
            </div>
          )}
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={filters.category === category}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                        className="text-green-600 border-gray-300 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.priceRange[1]}
                    onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span>${filters.priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Care Level */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Care Level</h4>
                <div className="space-y-2">
                  {carelevels.map(level => (
                    <label key={level} className="flex items-center">
                      <input
                        type="radio"
                        name="careLevel"
                        value={level}
                        checked={filters.careLevel === level}
                        onChange={(e) => handleFilterChange('careLevel', e.target.value)}
                        className="text-green-600 border-gray-300 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Light Needs */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Light Needs</h4>
                <div className="space-y-2">
                  {lightNeeds.map(need => (
                    <label key={need} className="flex items-center">
                      <input
                        type="radio"
                        name="lightNeeds"
                        value={need}
                        checked={filters.lightNeeds === need}
                        onChange={(e) => handleFilterChange('lightNeeds', e.target.value)}
                        className="text-green-600 border-gray-300 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{need}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {filteredAndSortedPlants.length} of {plants.length} plants
              </p>
            </div>

            {filteredAndSortedPlants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAndSortedPlants.map((plant, index) => (
                  <PlantCard key={plant.id} plant={plant} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="max-w-sm mx-auto">
                  <SlidersHorizontal className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No plants found</h3>
                  <p className="text-gray-500 mb-4">
                    Try adjusting your filters or search terms to find what you're looking for.
                  </p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filter Modal */}
        {/* You can implement this as a modal overlay for mobile devices */}
      </div>
    </div>
  );
};

export default Shop;