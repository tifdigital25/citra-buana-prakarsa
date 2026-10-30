'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, Building, Filter, Sparkles } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import { PROPERTIES } from '@/data/siteData';

const categories = ['All', 'Mixed-Use', 'Commercial', 'Hospitality', 'Industrial', 'Eco-Luxury'];

export default function PropertiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProperties = PROPERTIES.filter((property) => {
    const matchesCategory =
      selectedCategory === 'All' || property.category === selectedCategory;
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 space-y-16">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-b from-cbp-navy-900 to-cbp-navy-950 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-cbp-gold-400 font-semibold inline-flex items-center gap-1.5">
            <Building className="w-4 h-4" />
            Citra Buana Prakarsa Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3">
            Landmark Properties & Master-Planned Cities
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Discover our comprehensive development footprint in Batam—from self-sufficient integrated coastal cities and Grade A commercial towers to private island eco-resorts.
          </p>

          {/* Search & Filter Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <div className="relative w-full">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search developments by name, district, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-cbp-navy-950 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:border-cbp-gold-400 text-sm shadow-inner"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Pills */}
        <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-white/10 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-cbp-gold-500 text-cbp-navy-950 shadow-md font-bold'
                    : 'bg-cbp-navy-900 text-slate-300 hover:bg-cbp-navy-800 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-400 font-medium">
            Showing <span className="text-cbp-gold-400 font-bold">{filteredProperties.length}</span> developments
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, idx) => (
              <PropertyCard key={property.id} property={property} priority={idx < 3} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-slate-400">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">No Properties Found</h3>
            <p className="text-slate-400 text-sm max-w-sm mx-auto">
              No developments matched your search or category selection. Try selecting "All" or using different keywords.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-cbp-gold-500 text-cbp-navy-950"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

