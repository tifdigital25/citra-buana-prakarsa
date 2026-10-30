'use client';

import React, { useState } from 'react';
import { CheckCircle2, Send, Phone, Mail } from 'lucide-react';

interface PropertyInquiryFormProps {
  propertyTitle: string;
}

export default function PropertyInquiryForm({ propertyTitle }: PropertyInquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-8 text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-cbp-gold-500/20 text-cbp-gold-400 flex items-center justify-center mx-auto border border-cbp-gold-500/30">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="font-serif text-lg font-bold text-white">Inquiry Sent Successfully</h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          Thank you, <span className="text-cbp-gold-300 font-semibold">{formData.name}</span>. An advisor from the {propertyTitle} sales gallery will reach out to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-3 text-[11px] text-cbp-gold-400 underline hover:text-white"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label className="block text-[11px] uppercase tracking-wider text-slate-300 font-medium mb-1.5">
          Your Name *
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Michael Lee"
          className="w-full px-4 py-2.5 rounded-xl bg-cbp-navy-950 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-cbp-gold-400"
        />
      </div>

      <div>
        <label className="block text-[11px] uppercase tracking-wider text-slate-300 font-medium mb-1.5">
          Email Address *
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="e.g. lee@domain.com"
          className="w-full px-4 py-2.5 rounded-xl bg-cbp-navy-950 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-cbp-gold-400"
        />
      </div>

      <div>
        <label className="block text-[11px] uppercase tracking-wider text-slate-300 font-medium mb-1.5">
          Phone / WhatsApp *
        </label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="+65 / +62..."
          className="w-full px-4 py-2.5 rounded-xl bg-cbp-navy-950 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-cbp-gold-400"
        />
      </div>

      <div>
        <label className="block text-[11px] uppercase tracking-wider text-slate-300 font-medium mb-1.5">
          Notes / Requirements
        </label>
        <textarea
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Interested unit size or viewing date..."
          className="w-full px-4 py-2.5 rounded-xl bg-cbp-navy-950 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-cbp-gold-400 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-cbp-gold-500 to-cbp-gold-600 hover:from-cbp-gold-400 hover:to-cbp-gold-500 text-cbp-navy-950 font-bold transition-all shadow-lg shadow-cbp-gold-500/20"
      >
        Request Official Prospectus
      </button>
    </form>
  );
}

