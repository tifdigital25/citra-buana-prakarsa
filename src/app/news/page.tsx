'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Newspaper, ArrowRight, Tag, ChevronRight } from 'lucide-react';
import { NEWS_ARTICLES } from '@/data/siteData';

const categories = ['All', 'Corporate Events', 'CSR & Community', 'Project Milestones', 'Construction Updates'];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNews =
    selectedCategory === 'All'
      ? NEWS_ARTICLES
      : NEWS_ARTICLES.filter((item) => item.category === selectedCategory);

  const featured = NEWS_ARTICLES[0];

  return (
    <div className="py-12 space-y-16">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-b from-cbp-navy-900 to-cbp-navy-950 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="text-xs uppercase tracking-widest text-cbp-gold-400 font-semibold inline-flex items-center gap-1.5">
            <Newspaper className="w-4 h-4" />
            Media & Corporate Insights
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3">
            News, Milestones & Press Releases
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Stay updated with corporate milestones, development progress, community empowerment initiatives, and industry celebrations across PT Citra Buana Prakarsa.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Story */}
        {featured && (
          <div className="mb-16">
            <div className="bg-cbp-navy-900/60 border border-white/15 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl group">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[300px] overflow-hidden bg-cbp-navy-950">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cbp-gold-500/20 text-cbp-gold-300 border border-cbp-gold-500/30">
                      {featured.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cbp-gold-400" />
                      {featured.date}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-4 group-hover:text-cbp-gold-300 transition-colors leading-snug">
                    {featured.title}
                  </h2>

                  <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>

                <div>
                  <Link
                    href={`/news/${featured.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-cbp-gold-500 to-cbp-gold-600 text-cbp-navy-950 font-bold transition-all hover:scale-105"
                  >
                    Read Full Announcement
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filters */}
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
            Showing <span className="text-cbp-gold-400 font-bold">{filteredNews.length}</span> articles
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((article) => (
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
                    Read Story
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

