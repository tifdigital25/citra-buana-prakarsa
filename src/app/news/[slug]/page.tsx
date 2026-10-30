import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft, ArrowRight, Tag, Share2, Building2 } from 'lucide-react';
import { NEWS_ARTICLES } from '@/data/siteData';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default function NewsDetailPage({ params }: PageProps) {
  const article = NEWS_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const related = NEWS_ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <article className="py-12 space-y-12">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-cbp-gold-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All News
        </Link>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cbp-gold-500/20 text-cbp-gold-300 border border-cbp-gold-500/30">
            {article.category}
          </span>
          <span className="text-xs text-slate-400 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-cbp-gold-400" />
            {article.date}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {article.title}
        </h1>

        <p className="text-slate-300 text-base sm:text-lg italic font-serif border-l-2 border-cbp-gold-400 pl-4 py-1 leading-relaxed">
          {article.excerpt}
        </p>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-cbp-navy-950">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Footer info box */}
        <div className="mt-12 p-6 rounded-2xl bg-cbp-navy-900/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Published by <span className="text-white font-semibold">Corporate Communications, PT Citra Buana Prakarsa</span>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            Media Inquiries
          </Link>
        </div>
      </div>

      {/* Related News */}
      {related.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-white/10">
          <h3 className="font-serif text-2xl font-bold text-white mb-6">
            More News & Updates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.slug}`}
                className="p-5 rounded-2xl bg-cbp-navy-900/40 border border-white/10 hover:border-cbp-gold-400/40 transition-colors group block space-y-2"
              >
                <div className="text-[11px] text-cbp-gold-400 uppercase tracking-wider font-semibold">
                  {item.category}
                </div>
                <h4 className="font-serif text-base font-bold text-white group-hover:text-cbp-gold-300 transition-colors">
                  {item.title}
                </h4>
                <div className="text-xs text-slate-400">{item.date}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

