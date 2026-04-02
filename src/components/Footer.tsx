"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, Apple, Smartphone } from "lucide-react";
import Logo from "./Logo";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" }
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Cancellation Policy", href: "#" },
    { label: "Safety", href: "#" },
    { label: "Accessibility", href: "#" }
  ],
  Destinations: [
    { label: "Spain", href: "/deals/1" },
    { label: "Turkey", href: "/deals/2" },
    { label: "Greece", href: "/deals/3" },
    { label: "Canary Islands", href: "/deals/4" },
  ],
  Legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Sitemap", href: "#" }
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      {/* Newsletter Section */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-br from-white/[0.03] to-transparent rounded-[32px] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-accent/10 transition-colors duration-700" />
            
            <div className="relative z-10 text-center lg:text-left">
              <h3 className="font-heading text-3xl sm:text-4xl font-black text-white mb-3">Get exclusive deals</h3>
              <p className="text-white/50 text-lg max-w-md">Subscribe and unlock up to 40% off your next trip with our secret member rates.</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="relative z-10 flex flex-col sm:flex-row w-full lg:w-auto gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-6 py-4.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all duration-300 font-medium" 
              />
              <button type="submit"
                className="px-8 py-4.5 bg-accent hover:bg-accent-light text-white font-black rounded-2xl transition-all duration-500 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 active:translate-y-0">
                Subscribe <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact & Booking Section */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* New Bookings */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-accent/15 rounded-xl flex items-center justify-center">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <h4 className="font-heading font-black text-white text-lg">For New Bookings</h4>
              </div>
              <p className="text-white/40 text-sm mb-3">Or for sales enquiries, call reservations, on</p>
              <a href="tel:+442034740053" className="block font-heading font-black text-white text-2xl hover:text-accent transition-colors">020 3474 0053</a>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                <span className="text-white/40 text-sm">Monday – Sunday</span>
                <span className="text-white/60 text-sm font-bold">09:00 – 17:00</span>
              </div>
            </div>

            {/* Customer Support */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-teal/15 rounded-xl flex items-center justify-center">
                  <Phone className="w-4 h-4 text-teal" />
                </div>
                <h4 className="font-heading font-black text-white text-lg">For Customer Support</h4>
              </div>
              <p className="text-white/40 text-sm mb-3">Call us on</p>
              <a href="tel:+442034740053" className="block font-heading font-black text-white text-2xl hover:text-teal transition-colors">020 3474 0053</a>
            </div>

            {/* Already Booked */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <h4 className="font-heading font-black text-white text-lg">Already Booked?</h4>
              </div>
              <p className="text-white/40 text-sm mb-3">Call customer services, on</p>
              <a href="tel:+442034740053" className="block font-heading font-black text-white text-2xl hover:text-gold transition-colors">020 3474 0053</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          
          {/* Brand & Mobile App */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <Link href="/" className="inline-block mb-6 group">
                <Logo variant="light" />
              </Link>
              <p className="text-white/40 text-[15px] leading-relaxed max-w-sm mb-4">
                Travel As You Like Limited. Handpicked holiday deals to Spain, Turkey, Greece & the Canary Islands.
              </p>
              <div className="flex items-start gap-2 text-white/30 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>1st Floor, 8 Town Quay Wharf, Abbey Road, Barking, IG11 7BZ</span>
              </div>
            </div>

            {/* Mobile App Section from Screenshot */}
            <div className="space-y-4">
              <h4 className="text-white font-black text-sm uppercase tracking-widest">Mobile app:</h4>
              <div className="flex gap-3">
                <button className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center transition-all cursor-pointer group">
                  <Apple className="w-5 h-5 text-white/60 group-hover:text-white" />
                </button>
                <button className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center transition-all cursor-pointer group">
                  <Smartphone className="w-5 h-5 text-white/60 group-hover:text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title} className="lg:col-span-1">
              <h4 className="font-black text-white text-[11px] uppercase tracking-[0.2em] mb-7">{title}</h4>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[14px] text-white/40 hover:text-white transition-colors duration-300">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar: Secure Payment */}
      <div className="border-t border-white/5 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="flex flex-col items-center lg:items-start gap-4">
              <h4 className="text-white font-black text-sm uppercase tracking-widest">Secure payment:</h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {/* Visa */}
                <div className="h-9 px-4 bg-white rounded-lg flex items-center shadow-sm">
                  <span className="text-[#1A1F71] font-black italic text-lg tracking-tighter">VISA</span>
                </div>
                {/* Mastercard */}
                <div className="h-9 px-3 bg-white rounded-lg flex items-center gap-1 shadow-sm">
                  <div className="flex -space-x-2">
                    <div className="w-4 h-4 rounded-full bg-[#EB001B] opacity-90" />
                    <div className="w-4 h-4 rounded-full bg-[#F79E1B] opacity-90" />
                  </div>
                  <span className="text-[10px] font-bold text-neutral-400">mastercard</span>
                </div>
                {/* Amex */}
                <div className="h-9 px-3 bg-[#0070D1] rounded-lg flex items-center shadow-sm">
                  <span className="text-white font-black text-[10px] italic leading-none text-center">AMERICAN<br/>EXPRESS</span>
                </div>
                {/* PayPal */}
                <div className="h-9 px-4 bg-white rounded-lg flex items-center shadow-sm">
                  <span className="text-[#003087] font-black italic text-sm">Pay</span>
                  <span className="text-[#009CDE] font-black italic text-sm">Pal</span>
                </div>
                {/* Apple Pay */}
                <div className="h-9 px-4 bg-white border border-neutral-900 rounded-lg flex items-center gap-1 shadow-sm">
                  <Apple className="w-4 h-4 text-black fill-current" />
                  <span className="text-black font-bold text-sm">Pay</span>
                </div>
                {/* Google Pay */}
                <div className="h-9 px-4 bg-white border border-neutral-300 rounded-full flex items-center gap-1 shadow-sm">
                  <span className="text-[#4285F4] font-bold text-sm">G</span>
                  <span className="text-[#5F6368] font-bold text-sm">Pay</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-3">
              <div className="flex items-center gap-4 text-white/30 text-xs font-bold uppercase tracking-widest">
                <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                <span>&bull;</span>
                <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                <span>&bull;</span>
                <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
              </div>
              <p className="text-white/20 text-[11px] font-medium tracking-wide">
                &copy; {new Date().getFullYear()} TravelAsYouLike. Redefining the standard of global exploration.
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
