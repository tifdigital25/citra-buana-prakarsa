'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Printer, Send, CheckCircle2, Clock, Building2 } from 'lucide-react';
import { COMPANY_INFO, PROPERTIES } from '@/data/siteData';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Union Square Batam',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-cbp-navy-950 relative overflow-hidden" id="contact">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cbp-navy-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-cbp-gold-400 font-semibold">
            Inquire & Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            Schedule a Private Consultation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Our property advisors are ready to assist with investment briefs, office leasing proposals, or private residence walkthroughs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-cbp-navy-900/70 border border-white/10 rounded-3xl p-8 backdrop-blur-md space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cbp-gold-500/10 text-cbp-gold-400 border border-cbp-gold-500/20 mb-3">
                <Building2 className="w-3.5 h-3.5" />
                Headquarters
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                PT Citra Buana Prakarsa
              </h3>
              <p className="text-xs uppercase tracking-widest text-cbp-gold-400 mt-0.5">
                CBP Marketing Gallery & Corporate Suite
              </p>
            </div>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cbp-gold-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    Corporate Address
                  </div>
                  <div className="text-slate-200 mt-1 leading-relaxed">
                    Menara Aria #17-01, Harbour Bay Downtown, Jl. Duyung, Batu Ampar – Batam 29453, Kepulauan Riau, Indonesia
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cbp-gold-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    Direct Telephone
                  </div>
                  <a
                    href="tel:+62778428500"
                    className="text-slate-200 hover:text-cbp-gold-400 font-semibold mt-1 block transition-colors"
                  >
                    +62 (778) 428500
                  </a>
                  <div className="text-xs text-slate-400 mt-0.5">Fax: +62 (778) 430005</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cbp-gold-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    Electronic Mail
                  </div>
                  <a
                    href="mailto:info@citrabuanaprakarsa.com"
                    className="text-slate-200 hover:text-cbp-gold-400 font-semibold mt-1 block transition-colors"
                  >
                    info@citrabuanaprakarsa.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cbp-gold-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    Operating Hours
                  </div>
                  <div className="text-slate-200 mt-1">
                    Monday – Friday: 08:30 – 17:30 WIB
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Saturday (Marketing Gallery): 09:00 – 15:00 WIB
                  </div>
                </div>
              </div>
            </div>

            {/* Quick directions CTA */}
            <div className="pt-4 border-t border-white/10">
              <a
                href="https://maps.google.com/?q=Harbour+Bay+Downtown+Batam"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
              >
                <MapPin className="w-4 h-4 text-cbp-gold-400" />
                Open Directions in Google Maps
              </a>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-cbp-navy-900/60 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cbp-gold-500/20 text-cbp-gold-400 flex items-center justify-center mx-auto border border-cbp-gold-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Consultation Request Received
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-cbp-gold-300 font-semibold">{formData.name}</span>. Our corporate property advisory representative will contact you via email or phone within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Send an Advisory Inquiry
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form below to receive detailed brochures, availability, and pricing.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Robert Tan"
                      className="w-full px-4 py-3 rounded-xl bg-cbp-navy-950 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cbp-gold-400 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. robert@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-cbp-navy-950 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cbp-gold-400 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +65 9123 4567 / +62 812..."
                      className="w-full px-4 py-3 rounded-xl bg-cbp-navy-950 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cbp-gold-400 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-2">
                      Project of Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cbp-navy-950 border border-white/10 text-white focus:outline-none focus:border-cbp-gold-400 text-sm transition-colors"
                    >
                      {PROPERTIES.map((prop) => (
                        <option key={prop.id} value={prop.title}>
                          {prop.title} ({prop.category})
                        </option>
                      ))}
                      <option value="General Commercial Investment">General Commercial Investment</option>
                      <option value="Industrial Land / Horizon Park">Industrial Land / Horizon Park</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-2">
                    Message / Specific Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your space requirements, intended timelines, or viewing preferences..."
                    className="w-full px-4 py-3 rounded-xl bg-cbp-navy-950 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cbp-gold-400 text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-cbp-gold-500 to-cbp-gold-600 hover:from-cbp-gold-400 hover:to-cbp-gold-500 text-cbp-navy-950 shadow-xl shadow-cbp-gold-500/20 hover:shadow-cbp-gold-500/40 transition-all font-sans font-bold"
                >
                  <Send className="w-4 h-4" />
                  Submit Consultation Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

