import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, Phone, Mail, MapPin, Printer, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, PROPERTIES } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="bg-cbp-navy-950 border-t border-white/10 text-slate-300">
      {/* Top Banner CTA */}
      <div className="border-b border-white/10 bg-gradient-to-r from-cbp-navy-900 via-cbp-navy-800 to-cbp-navy-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="text-xs uppercase tracking-widest text-cbp-gold-400 font-semibold">
                Investment & Residency Opportunities
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                Discover The Future of Living & Commerce in Batam
              </h3>
              <p className="text-slate-400 text-sm mt-1 max-w-xl">
                Connect with our advisory team for bespoke commercial leases, Grade A office spaces, and private residential acquisitions.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-cbp-gold-500 hover:bg-cbp-gold-400 text-cbp-navy-950 shadow-xl shadow-cbp-gold-500/20 transition-all hover:scale-105 shrink-0"
            >
              Contact Advisory Team
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                <Image
                  src="/images/logo-emblem.png"
                  alt="PT Citra Buana Prakarsa Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg text-white tracking-wider group-hover:text-cbp-gold-300 transition-colors leading-tight">
                  CITRA BUANA PRAKARSA
                </span>
                <span className="text-[10px] tracking-widest uppercase text-cbp-gold-400 font-medium">
                  Group Corporate Portal
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Established in 1988, PT Citra Buana Prakarsa is the pioneer of master-planned integrated coastal cities and premier real estate developments across Batam, Indonesia.
            </p>
            <div className="pt-2 text-xs text-cbp-gold-400 font-medium">
              35+ Years of Transformative Architecture & Regional Growth
            </div>
          </div>

          {/* Col 2: Flagship Developments */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wider uppercase mb-4 border-l-2 border-cbp-gold-400 pl-3">
              Flagship Developments
            </h4>
            <ul className="space-y-2.5 text-sm">
              {PROPERTIES.slice(0, 5).map((prop) => (
                <li key={prop.id}>
                  <Link
                    href={`/properties/${prop.slug}`}
                    className="text-slate-400 hover:text-cbp-gold-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{prop.title}</span>
                    <span className="text-[10px] uppercase text-slate-400 group-hover:text-cbp-gold-400">
                      {prop.category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wider uppercase mb-4 border-l-2 border-cbp-gold-400 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-slate-400 hover:text-white transition-colors">
                  All Properties Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Our Group & Vision
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-slate-400 hover:text-white transition-colors">
                  Latest News & Press Releases
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Marketing Gallery & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Head Office */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-white tracking-wider uppercase mb-4 border-l-2 border-cbp-gold-400 pl-3">
              Corporate Office
            </h4>
            <div className="flex items-start gap-3 text-sm text-slate-400">
              <MapPin className="w-5 h-5 text-cbp-gold-400 shrink-0 mt-0.5" />
              <span>
                Menara Aria #17-01, Harbour Bay Downtown, Jl. Duyung, Batu Ampar – Batam 29453, Indonesia
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <Phone className="w-4 h-4 text-cbp-gold-400 shrink-0" />
              <a href="tel:+62778428500" className="hover:text-white transition-colors">
                +62 (778) 428500
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <Printer className="w-4 h-4 text-cbp-gold-400 shrink-0" />
              <span>+62 (778) 430005</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <Mail className="w-4 h-4 text-cbp-gold-400 shrink-0" />
              <a href="mailto:info@citrabuanaprakarsa.com" className="hover:text-white transition-colors">
                info@citrabuanaprakarsa.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} PT Citra Buana Prakarsa Group. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/CitraBuanaPrakarsa/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cbp-gold-400 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/cbpmarketinggallery/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cbp-gold-400 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://citrabuanaprakarsa.com"
              className="hover:text-cbp-gold-400 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

