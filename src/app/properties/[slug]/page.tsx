import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin,
  Building,
  CheckCircle2,
  ArrowLeft,
  Share2,
  ArrowRight,
  ShieldCheck,
  Compass,
  Phone,
  Mail,
} from 'lucide-react';
import { PROPERTIES, Property } from '@/data/siteData';
import PropertyCard from '@/components/PropertyCard';
import PropertyInquiryForm from '@/components/PropertyInquiryForm';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROPERTIES.map((prop) => ({
    slug: prop.slug,
  }));
}

export default function PropertyDetailPage({ params }: PageProps) {
  const property = PROPERTIES.find((p) => p.slug === params.slug);

  if (!property) {
    notFound();
  }

  const relatedProperties = PROPERTIES.filter((p) => p.id !== property.id).slice(0, 3);

  return (
    <div className="py-10 space-y-16">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-cbp-gold-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Properties Catalog
        </Link>
      </div>

      {/* Hero Showcase Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-cbp-navy-950">
          <Image
            src={property.heroImage}
            alt={property.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cbp-navy-950 via-cbp-navy-950/40 to-transparent" />

          {/* Overlay Details */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cbp-navy-950/80 backdrop-blur-md text-cbp-gold-300 border border-cbp-gold-500/30">
                  {property.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cbp-gold-500 text-cbp-navy-950">
                  {property.status}
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-sm text-cbp-gold-300 font-medium">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{property.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#inquire"
                className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-cbp-gold-500 to-cbp-gold-600 hover:from-cbp-gold-400 hover:to-cbp-gold-500 text-cbp-navy-950 font-bold shadow-lg shadow-cbp-gold-500/20 transition-all hover:scale-105 shrink-0"
              >
                Inquire About Availability
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Description & Specifications */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="bg-cbp-navy-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-md space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white border-l-4 border-cbp-gold-400 pl-4">
                Development Overview
              </h2>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {property.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Photo Gallery Grid */}
            {property.gallery && property.gallery.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white border-l-4 border-cbp-gold-400 pl-4">
                  Visual Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.gallery.map((imgUrl, i) => (
                    <div
                      key={i}
                      className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-cbp-navy-950 group"
                    >
                      <Image
                        src={imgUrl}
                        alt={`${property.title} view ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Specifications Table */}
            {property.specs && property.specs.length > 0 && (
              <div className="bg-cbp-navy-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-md space-y-6">
                <h3 className="font-serif text-2xl font-bold text-white border-l-4 border-cbp-gold-400 pl-4">
                  Project Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1"
                    >
                      <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                        {spec.label}
                      </div>
                      <div className="font-serif text-lg font-bold text-cbp-gold-300">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features Checklist */}
            {property.features && property.features.length > 0 && (
              <div className="bg-cbp-navy-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-md space-y-6">
                <h3 className="font-serif text-2xl font-bold text-white border-l-4 border-cbp-gold-400 pl-4">
                  Signature Highlights & Facilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cbp-gold-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-200">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Inquire Box & Quick Contact */}
          <div className="lg:col-span-4 space-y-6" id="inquire">
            <div className="bg-cbp-navy-900/80 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-md sticky top-28 shadow-2xl">
              <span className="text-[11px] uppercase tracking-widest text-cbp-gold-400 font-semibold">
                Direct Developer Inquiry
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                Inquire on {property.title}
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Receive the official investment prospectus, floor plans, and current pricing directly from PT Citra Buana Prakarsa.
              </p>

              <PropertyInquiryForm propertyTitle={property.title} />

              <div className="mt-6 pt-6 border-t border-white/10 space-y-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cbp-gold-400 shrink-0" />
                  <span>Call: +62 (778) 428500</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cbp-gold-400 shrink-0" />
                  <span>info@citrabuanaprakarsa.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Developments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 border-t border-white/10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-cbp-gold-400 font-semibold">
              Explore More
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Other Notable Developments
            </h2>
          </div>
          <Link
            href="/properties"
            className="text-xs font-semibold uppercase tracking-wider text-cbp-gold-400 hover:text-white inline-flex items-center gap-1.5"
          >
            All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProperties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </section>
    </div>
  );
}
