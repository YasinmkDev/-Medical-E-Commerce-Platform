import React from 'react';
import { Search, X, SlidersHorizontal, CheckCircle, ShieldAlert } from 'lucide-react';
import { FilterState } from '../types';

interface SearchBarProps {
  filter: FilterState;
  onFilterChange: (updates: Partial<FilterState>) => void;
  totalResults: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  filter,
  onFilterChange,
  totalResults
}) => {
  const quickSearches = [
    'Vein Finder', 
    'Centrifuge', 
    'Ambu Bag', 
    'Minor Surgery Kit', 
    'Nitrile Gloves', 
    'Digital BP'
  ];

  return (
    <div id="search-section" className="bg-[#ffffff] rounded-[24px] p-4 sm:p-6 border border-[#e0e0e0]/80">
      <div className="flex flex-col gap-4">
        
        {/* Main Search Input */}
        <div className="relative flex items-center">
          <div className="absolute left-4 text-[#0a3922] pointer-events-none">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={filter.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
            placeholder="Search by device name, clinical application (e.g., 'pediatric IV', 'trauma', 'centrifuge')..."
            className="w-full pl-12 pr-10 py-3.5 bg-[#f7f8f9] hover:bg-[#faf7e8]/50 focus:bg-[#ffffff] text-[#000000] placeholder-[#7a7a7a] text-[15px] sm:text-[16px] rounded-[40px] border border-[#e0e0e0] focus:border-[#0a3922] focus:outline-none transition-colors"
          />
          {filter.searchQuery && (
            <button
              onClick={() => onFilterChange({ searchQuery: '' })}
              className="absolute right-4 text-[#7a7a7a] hover:text-[#000000] p-1 rounded-full"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Search Suggestions & Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          {/* Quick Keywords */}
          <div className="flex flex-wrap items-center gap-1.5 text-[12px] sm:text-[13px]">
            <span className="text-[#7a7a7a] font-medium mr-1">Trending:</span>
            {quickSearches.map((term) => (
              <button
                key={term}
                onClick={() => onFilterChange({ searchQuery: term })}
                className={`px-3 py-1 rounded-[9999px] text-[12px] font-medium transition-colors ${
                  filter.searchQuery.toLowerCase() === term.toLowerCase()
                    ? 'bg-[#0a3922] text-white'
                    : 'bg-[#faf7e8] hover:bg-[#d2f2e3] text-[#0a3922]'
                }`}
              >
                {term}
              </button>
            ))}
          </div>

          {/* Toggle Switches */}
          <div className="flex items-center gap-2 sm:gap-4 text-[13px]">
            {/* In Stock toggle */}
            <label className="flex items-center gap-1.5 cursor-pointer select-none text-[#3d3d3d] hover:text-[#0a3922]">
              <input
                type="checkbox"
                checked={filter.inStockOnly}
                onChange={(e) => onFilterChange({ inStockOnly: e.target.checked })}
                className="w-4 h-4 rounded text-[#0a3922] focus:ring-0 cursor-pointer accent-[#0a3922]"
              />
              <span className="font-medium">In Stock Only</span>
            </label>

            {/* CE / ISO Certified toggle */}
            <label className="flex items-center gap-1.5 cursor-pointer select-none text-[#3d3d3d] hover:text-[#0a3922]">
              <input
                type="checkbox"
                checked={filter.certifiedOnly}
                onChange={(e) => onFilterChange({ certifiedOnly: e.target.checked })}
                className="w-4 h-4 rounded text-[#0a3922] focus:ring-0 cursor-pointer accent-[#0a3922]"
              />
              <span className="font-medium">CE/ISO Certified</span>
            </label>

            {/* Sort By Dropdown */}
            <select
              value={filter.sortBy}
              onChange={(e) => onFilterChange({ sortBy: e.target.value as any })}
              className="bg-[#f7f8f9] border border-[#e0e0e0] text-[#0a3922] text-[13px] font-medium rounded-[40px] px-3 py-1.5 focus:outline-none focus:border-[#0a3922] cursor-pointer"
            >
              <option value="recommended">Sort: Clinical Relevance</option>
              <option value="rating">Sort: Highest Rated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results Feedback status */}
        <div className="flex items-center justify-between text-[13px] text-[#7a7a7a] pt-2 border-t border-[#f2f2f2]">
          <span>
            Showing <strong className="text-[#0a3922]">{totalResults}</strong> verified medical devices
            {filter.searchQuery && <span> matching "<strong>{filter.searchQuery}</strong>"</span>}
          </span>
          {(filter.searchQuery || filter.selectedCategory !== 'all' || filter.inStockOnly || filter.certifiedOnly) && (
            <button
              onClick={() => onFilterChange({
                searchQuery: '',
                selectedCategory: 'all',
                inStockOnly: false,
                certifiedOnly: false,
                sortBy: 'recommended'
              })}
              className="text-[#ff643b] hover:underline font-semibold text-[12px]"
            >
              Reset all filters
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
