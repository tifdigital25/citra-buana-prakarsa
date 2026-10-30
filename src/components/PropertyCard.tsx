import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { Property } from '@/data/siteData';

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
}

export default function PropertyCard({ property, priority = false }: PropertyCardProps) {
  return (
    <div className="group relative bg-cbp-navy-900/60 rounded-2xl overflow-hidden border border-white/10 hover:border-cbp-gold-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cbp-navy-900/80 flex flex-col h-full hover:-translate-y-1.5">
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-cbp-navy-950">
        <Image
          src={property.heroImage}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          priority={priority}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cbp-navy-950 via-cbp-navy-950/20 to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-cbp-navy-950/80 backdrop-blur-md text-cbp-gold-300 border border-cbp-gold-400/30">
            {property.category}
          </span>
          {property.featured && (
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-cbp-gold-500 text-cbp-navy-950 flex items-center gap-1 shadow-md">
              <Sparkles className="w-3 h-3" />
              Featured
            </span>
          )}
        </div>

        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white border border-white/20">
            {property.status}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-cbp-gold-400 mb-2 font-medium">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-cbp-gold-300 transition-colors">
            {property.title}
          </h3>

          {/* Subtitle / Excerpt */}
          <p className="mt-2.5 text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {property.excerpt}
          </p>

          {/* Specs preview */}
          {property.specs && property.specs.length > 0 && (
            <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-xs">
              {property.specs.slice(0, 2).map((spec, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-2 border border-white/5">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                    {spec.label}
                  </div>
                  <div className="text-slate-200 font-semibold truncate mt-0.5">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA link */}
        <div className="mt-6 pt-4 border-t border-white/5">
          <Link
            href={`/properties/${property.slug}`}
            className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-cbp-gold-400 group-hover:text-white transition-colors py-1"
          >
            <span>Explore Development</span>
            <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-cbp-gold-500 group-hover:text-cbp-navy-950 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

