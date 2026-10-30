'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, PROPERTIES } from '@/data/siteData';

const slides = [
  {
    id: 'union-square',
    title: 'UNION SQUARE BATAM',
    tagline: 'Iconic 37-Storey Twin Tower in Harbour Bay',
    description: 'Work-life harmony elevated. Grade A sea-facing corporate suites and luxury condominium residences overlooking Singapore and the Batam skyline.',
    image: 'https://citrabuanaprakarsa.com/wp-content/uploads/2022/08/facde-union-1024x576.jpg',
    category: 'Mixed-Use Landmark',
    link: '/properties/union-square',
    badge: 'Now Selling & Leasing',
  },
  {
    id: 'harbour-bay',
    title: 'HARBOUR BAY DOWNTOWN',
    tagline: 'Batam’s Premier Integrated Waterfront City',
    description: 'Direct 40-minute sea transit to Singapore. 4,500 daily international passengers, Bayfront Mall, international hotels, and Grade A business offices.',
    image: 'https://citrabuanaprakarsa.com/wp-content/uploads/2020/01/hbdt-sea-.jpg',
    category: 'Integrated City',
    link: '/properties/harbour-bay-integrated-city',
    badge: 'Flagship Development',
  },
  {
    id: 'nirup-island',
    title: 'NIRUP ISLAND RESORT',
    tagline: 'Private Eco-Luxury Island 30 Mins from Singapore',
    description: 'World-class marina, ultra-luxury overwater villas operated by The Westin, pristine coral lagoons, and private customs clearance.',
    image: 'https://citrabuanaprakarsa.com/wp-content/uploads/2026/02/DJI_0746-copy-scaled-e1770095219417.jpg',
    category: 'Eco-Luxury Island',
    link: '/properties/nirup-island',
    badge: 'Exclusive Sanctuary',
  },
  {
    id: 'menara-aria',
    title: 'MENARA ARIA OFFICE TOWER',
    tagline: '18-Storey Sea-Facing Grade A Corporate Address',
    description: 'Modern curtain-wall architecture, granite grand lobbies, ample underground parking, and direct bridge access to Harbour Bay Ferry Terminal.',
    image: 'https://citrabuanaprakarsa.com/wp-content/uploads/2020/01/menara-drone-1024x576.jpg',
    category: 'Grade A Commercial',
    link: '/properties/menara-aria',
    badge: 'Corporate Headquarters',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-cbp-navy-950">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            className="object-cover object-center"
          />
          {/* Multi-layered cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-cbp-navy-950 via-cbp-navy-950/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-cbp-navy-950 via-transparent to-cbp-navy-950/50" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Category / Badge */}
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-cbp-gold-500/20 text-cbp-gold-300 border border-cbp-gold-500/30">
                  {slides[current].category}
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-300 font-medium">
                  {slides[current].badge}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                {slides[current].title}
              </h1>

              {/* Tagline */}
              <p className="text-lg sm:text-xl font-medium text-cbp-gold-300 font-serif italic">
                "{slides[current].tagline}"
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {slides[current].description}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={slides[current].link}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-cbp-gold-500 to-cbp-gold-600 hover:from-cbp-gold-400 hover:to-cbp-gold-500 text-cbp-navy-950 shadow-xl shadow-cbp-gold-500/20 transition-all duration-300 hover:scale-105"
                >
                  Explore Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all duration-300"
                >
                  <Compass className="w-4 h-4 text-cbp-gold-400" />
                  Schedule Tour
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute right-6 sm:right-12 bottom-28 z-20 hidden sm:flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-white/20 bg-cbp-navy-950/60 backdrop-blur-md text-white hover:bg-cbp-gold-500 hover:text-cbp-navy-950 hover:border-cbp-gold-500 flex items-center justify-center transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-white/20 bg-cbp-navy-950/60 backdrop-blur-md text-white hover:bg-cbp-gold-500 hover:text-cbp-navy-950 hover:border-cbp-gold-500 flex items-center justify-center transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-4 sm:left-8 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              current === idx ? 'w-10 bg-cbp-gold-400' : 'w-2 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Bottom Floating Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-cbp-navy-950/90 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-white/10">
            {COMPANY_INFO.stats.map((stat, i) => (
              <div key={i} className="px-2">
                <div className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-cbp-gold-400">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-medium truncate">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

