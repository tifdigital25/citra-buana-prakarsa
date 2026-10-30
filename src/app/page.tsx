'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building,
  Anchor,
  Compass,
  Award,
  Globe2,
  Calendar,
  Layers,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import PropertyCard from '@/components/PropertyCard';
import ContactSection from '@/components/ContactSection';
import { COMPANY_INFO, PROPERTIES, NEWS_ARTICLES, CORE_VALUES } from '@/data/siteData';

const categories = ['All', 'Mixed-Use', 'Commercial', 'Hospitality', 'Industrial', 'Eco-Luxury'];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProperties =
    selectedCategory === 'All'
      ? PROPERTIES
      : PROPERTIES.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-24">
      {/* 1. Hero Section */}
      <HeroSlider />

      {/* 2. Brand Introduction Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://citrabuanaprakarsa.com/wp-content/uploads/2019/12/slide-3.jpg"
                alt="PT Citra Buana Prakarsa Vision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cbp-navy-950/80 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:-right-6 glass-card p-6 rounded-2xl border border-cbp-gold-400/40 shadow-2xl max-w-xs">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-cbp-gold-400">
                1988
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mt-1">
                Founding Year in Batam
              </div>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                Over 35 years transforming the skyline and economy of Kepulauan Riau, Indonesia.
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cbp-gold-500/10 text-cbp-gold-400 border border-cbp-gold-500/20">
              <Award className="w-3.5 h-3.5" />
              Corporate Profile
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              THE PIONEER OF MASTER-PLANNED COMMUNITIES IN BATAM
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Originally established in 1988, PT Citra Buana Prakarsa expanded far beyond its founding operations into premier property development, establishing itself as the quintessential developer of top-quality residential, commercial, hospitality, and industrial hubs across Indonesia.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Our comprehensive value chain spans strategic site evaluation, architectural master-planning, international project execution, and sustainable property asset management, generating enduring economic vitality for the region.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cbp-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Waterfront Integrated Cities</h4>
                  <p className="text-xs text-slate-400">Direct ferry terminals, malls & 5-star hotels.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cbp-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Grade A Commercial Landmarks</h4>
                  <p className="text-xs text-slate-400">Menara Aria & Union Square twin towers.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:translate-x-1"
              >
                Read More About Our Group
                <ArrowRight className="w-4 h-4 text-cbp-gold-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Flagship Portfolio Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-cbp-gold-400 font-semibold">
              Master-Planned Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">
              Main Features of Properties
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Explore our landmark developments across Batam, from self-contained coastal cities to luxury island resorts.
            </p>
          </div>

          {/* Category Filter Chips */}
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
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.slice(0, 6).map((property, idx) => (
            <PropertyCard key={property.id} property={property} priority={idx < 2} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-cbp-gold-500 to-cbp-gold-600 hover:from-cbp-gold-400 hover:to-cbp-gold-500 text-cbp-navy-950 shadow-xl shadow-cbp-gold-500/20 font-bold hover:scale-105 transition-all"
          >
            View All Properties Catalog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. Strategic Gateway: Harbour Bay & International Connectivity */}
      <section className="bg-gradient-to-b from-cbp-navy-900 to-cbp-navy-950 py-24 border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-cbp-gold-400 font-semibold flex items-center gap-2">
                <Anchor className="w-4 h-4" />
                Strategic Transit Hub
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Harbour Bay Downtown: 40 Minutes to Singapore
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Operational since 2006, Harbour Bay International Ferry Terminal acts as the primary sea bridge linking Singapore and Malaysia to the heart of Batam’s central business district.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
                <div>
                  <div className="font-serif text-3xl font-bold text-cbp-gold-400">40 Mins</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
                    High-speed Sea Transit to Singapore
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-cbp-gold-400">38 Trips</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
                    Daily Scheduled Crossings
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-cbp-gold-400">4,500+</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
                    Daily International Travelers
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/properties/harbour-bay-integrated-city"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-cbp-gold-500 hover:bg-cbp-gold-400 text-cbp-navy-950 shadow-lg shadow-cbp-gold-500/20 font-bold transition-all"
                >
                  Explore Harbour Bay City
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/properties/union-square"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                >
                  Discover Union Square
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="https://citrabuanaprakarsa.com/wp-content/uploads/2020/01/Harbour-Bay-Batam-Ferry-Terminal-1024x768.jpg"
                  alt="Harbour Bay Ferry Terminal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Latest News & Corporate Updates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-cbp-gold-400 font-semibold">
              Media & Press Releases
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
              Latest News & Milestones
            </h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cbp-gold-400 hover:text-white transition-colors"
          >
            All News Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ARTICLES.slice(0, 3).map((article) => (
            <div
              key={article.id}
              className="bg-cbp-navy-900/50 rounded-2xl overflow-hidden border border-white/10 hover:border-cbp-gold-400/40 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-cbp-navy-950">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-cbp-navy-950/80 backdrop-blur-md text-cbp-gold-300 border border-cbp-gold-400/30">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-cbp-gold-400" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-cbp-gold-300 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5">
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cbp-gold-400 group-hover:text-white transition-colors"
                  >
                    Read Full Story
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Contact & Private Viewing Section */}
      <ContactSection />
    </div>
  );
}

