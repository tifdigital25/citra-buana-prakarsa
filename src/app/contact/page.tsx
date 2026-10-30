import React from 'react';
import { MapPin, Phone, Mail, Compass, Plane, Ship, Clock, Building } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import { COMPANY_INFO } from '@/data/siteData';

const transitTimes = [
  {
    mode: 'By High-Speed Ferry (Singapore)',
    time: '40 Minutes',
    desc: 'Direct routes from Singapore HarbourFront or Tanah Merah to Harbour Bay Ferry Terminal.'
  },
  {
    mode: 'From Hang Nadim International Airport',
    time: '30 Minutes',
    desc: 'Direct arterial highway connection to Batu Ampar Harbour Bay Downtown.'
  },
  {
    mode: 'From Nagoya Central Business District',
    time: '5–10 Minutes',
    desc: 'Adjacent to Batam’s primary retail and commercial shopping centers.'
  },
  {
    mode: 'From Batam Center Administrative Hub',
    time: '15 Minutes',
    desc: 'Direct access to government offices and provincial administrative centers.'
  }
];

export default function ContactPage() {
  return (
    <div className="py-12 space-y-16">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-b from-cbp-navy-900 to-cbp-navy-950 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="text-xs uppercase tracking-widest text-cbp-gold-400 font-semibold inline-flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3">
            Contact & Marketing Gallery
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Visit our corporate office at Menara Aria or schedule an appointment at our Marketing Gallery in Harbour Bay Downtown, Batam.
          </p>
        </div>
      </section>

      {/* Transit Guide & Directions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-cbp-gold-400 font-semibold">
            Connectivity & Access
          </span>
          <h2 className="font-serif text-3xl font-bold text-white mt-1">
            How to Reach Harbour Bay Downtown
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transitTimes.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-cbp-navy-900/40 border border-white/10 space-y-3"
            >
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                {item.mode}
              </div>
              <div className="font-serif text-2xl font-bold text-cbp-gold-400">
                {item.time}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section Component (Form & Address) */}
      <ContactSection />
    </div>
  );
}

