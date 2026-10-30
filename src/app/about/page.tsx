import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  Building2,
  Compass,
  CheckCircle2,
  Users,
  Target,
  Shield,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { COMPANY_INFO, CORE_VALUES, LEADERSHIP } from '@/data/siteData';

const timeline = [
  {
    year: '1988',
    title: 'Founding & Inception',
    description: 'PT Citra Buana Prakarsa was established in Batam, initially engaging in regional trade and quickly anticipating Batam’s destiny as a Free Trade Zone hub.'
  },
  {
    year: '2000',
    title: 'Diversification into Prime Property',
    description: 'Began large-scale real estate development, acquiring strategic coastal and urban parcels across Batu Ampar, Mukakuning, and Sei Lekop.'
  },
  {
    year: '2006',
    title: 'Harbour Bay International Ferry Terminal',
    description: 'Inauguration of the Harbour Bay International Ferry Terminal, establishing a direct 40-minute sea bridge to Singapore with daily international scheduled services.'
  },
  {
    year: '2012',
    title: 'Hospitality & Commercial Expansion',
    description: 'Opened Swiss-Belhotel Harbour Bay, Zest Hotel, Bayfront Mall, and the 18-storey sea-facing Menara Aria Office Tower.'
  },
  {
    year: '2022',
    title: 'Horizon Industrial Park Growth',
    description: 'Expanded modern infrastructure to 80 hectares of prime industrial zones catering to international logistics and manufacturing tenants.'
  },
  {
    year: '2025–2026',
    title: 'Iconic Landmarks: Union Square & Nirup Island',
    description: 'Topping off the 37-storey Union Square twin tower and welcoming guests to the ultra-luxury Nirup Island eco-resort by The Westin.'
  }
];

export default function AboutPage() {
  return (
    <div className="py-12 space-y-24">
      {/* 1. Header Banner */}
      <section className="relative py-24 bg-gradient-to-b from-cbp-navy-900 to-cbp-navy-950 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
          <span className="text-xs uppercase tracking-widest text-cbp-gold-400 font-semibold inline-flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            About Citra Buana Prakarsa Group
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 leading-tight">
            Pioneering Master-Planned Communities in Batam Since 1988
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-6 max-w-3xl mx-auto leading-relaxed">
            For more than three decades, PT Citra Buana Prakarsa has transformed the coastal topography of Batam into an internationally acclaimed destination for business, hospitality, and luxury waterfront living.
          </p>
        </div>
      </section>

      {/* 2. Corporate Heritage & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-cbp-gold-400 font-semibold">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              A Comprehensive Development Value Chain
            </h2>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Originally established in 1988, Citra Buana Prakarsa expanded far beyond its original import and export business. In the past 20+ years, the group diversified into real estate development, solidifying its stature as a preeminent developer in top-quality residential, commercial, hospitality, and industrial properties throughout Indonesia.
              </p>
              <p>
                Our activities cover the entire prime property development value chain: from strategic land acquisition and environmental site evaluation to architectural master planning, project execution, and long-term asset management.
              </p>
              <p>
                Citra Buana Prakarsa focuses on city and serviced residences in exceptional locations, featuring uncompromising fittings for a discerning international and domestic clientele. Our corporate strategy encompasses not only high-quality residential development, but also the sustained management of premier investment properties to generate continuous regional prosperity.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://citrabuanaprakarsa.com/wp-content/uploads/2020/01/DJI_0056-scaled.jpg"
                alt="Citra Buana Prakarsa Industrial & Urban Developments"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="bg-cbp-navy-900/40 border-y border-white/10 py-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-cbp-gold-400 font-semibold">
              Guiding Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
              Our Core Pillars of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_VALUES.map((val, i) => (
              <div
                key={i}
                className="bg-cbp-navy-950/80 rounded-2xl p-6 border border-white/10 hover:border-cbp-gold-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cbp-gold-500/10 border border-cbp-gold-500/20 text-cbp-gold-400 flex items-center justify-center font-serif font-bold text-lg mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Timeline Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-cbp-gold-400 font-semibold">
            Chronology of Growth
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
            Over Three Decades of Transformation
          </h2>
        </div>

        <div className="relative border-l-2 border-cbp-gold-500/30 ml-4 sm:ml-32 space-y-12">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              {/* Year badge on the left for larger screens */}
              <div className="hidden sm:block absolute -left-28 top-0 text-right w-20">
                <span className="font-serif text-xl font-bold text-cbp-gold-400">
                  {item.year}
                </span>
              </div>

              {/* Node indicator */}
              <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-cbp-navy-950 border-2 border-cbp-gold-400 group-hover:scale-125 transition-transform" />

              <div className="sm:hidden font-serif text-lg font-bold text-cbp-gold-400 mb-1">
                {item.year}
              </div>

              <div className="bg-cbp-navy-900/50 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Leadership & Governance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cbp-navy-900 via-cbp-navy-800 to-cbp-navy-900 rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-cbp-gold-400 font-semibold">
              Corporate Governance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
              Steering Sustainable Long-Term Value
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Guided by experienced commissioners, visionary engineers, and hospitality experts, PT Citra Buana Prakarsa upholds international governance principles, environmental responsibility, and stakeholder stewardship.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {LEADERSHIP.map((leader, i) => (
                <div key={i} className="bg-cbp-navy-950/70 p-5 rounded-2xl border border-white/5 space-y-2">
                  <div className="text-sm font-serif font-bold text-cbp-gold-300">
                    {leader.name}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                    {leader.role}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {leader.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-cbp-gold-500 hover:bg-cbp-gold-400 text-cbp-navy-950 font-bold transition-all"
              >
                Explore Developments
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                Contact Corporate Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

