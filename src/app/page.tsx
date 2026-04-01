"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Star, ArrowRight, Shield, Clock, CreditCard, Headphones,
  MapPin, Sparkles, TrendingUp, Users, Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import SearchBar from "@/components/SearchBar";
import PackageCard from "@/components/PackageCard";
import HotelCard from "@/components/HotelCard";
import Carousel from "@/components/Carousel";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import { useInView } from "@/lib/useInView";
import { destinations, packages, testimonials, hotels } from "@/lib/data";

function AnimSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView(0.08);
  return <div ref={ref} className={`${className} transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>{children}</div>;
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ─── HERO CAROUSEL ─── */}
      <HeroCarousel />

      {/* ─── SEARCH BAR (overlapping hero) ─── */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 sm:-mt-40">
        <SearchBar variant="hero" />
      </div>

      {/* ─── TRUST BAR ─── */}
      <AnimSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Secure Booking", desc: "256-bit SSL encrypted", color: "text-teal bg-teal/10" },
            { icon: CreditCard, title: "Price Match", desc: "We beat any price", color: "text-accent bg-accent/10" },
            { icon: Clock, title: "Free Cancellation", desc: "Up to 48hrs before", color: "text-gold bg-gold/10" },
            { icon: Headphones, title: "24/7 Support", desc: "Always here to help", color: "text-primary-light bg-primary/5" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 group cursor-pointer">
              <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">{item.title}</h4>
                <p className="text-xs text-neutral-400 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimSection>

      {/* ─── TRENDING DESTINATIONS ─── */}
      <section id="destinations" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-accent font-bold text-sm uppercase tracking-wider">Trending Now</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900">
                Popular Destinations
              </h2>
            </div>
            <Link href="/hotels" className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-accent/10 hover:bg-accent/20 text-accent font-bold text-sm rounded-xl transition-all cursor-pointer">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimSection>

          <AnimSection>
            <Marquee speed={1.5} gap={40} centerFocus className="py-4">
              {destinations.map((dest) => (
                <Link key={dest.id} href="/hotels" className="group relative overflow-hidden rounded-2xl cursor-pointer block w-[280px] sm:w-[320px] aspect-[3/4] shrink-0">
                  <Image src={dest.image} alt={`${dest.name}, ${dest.country}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="320px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="flex items-center gap-1 text-white/60 text-xs mb-1"><MapPin className="w-3 h-3" />{dest.country}</div>
                    <h3 className="font-heading font-bold text-2xl">{dest.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-white/60 text-sm font-sans">{dest.hotelCount.toLocaleString()} hotels</span>
                      <span className="bg-accent/90 backdrop-blur-sm text-white text-xs font-sans font-bold px-3 py-1 rounded-full">
                        From ${dest.startingPrice}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </Marquee>
          </AnimSection>
        </div>
      </section>

      {/* ─── EXCLUSIVE DEALS (Packages) ─── */}
      <section id="packages" className="py-16 sm:py-20 bg-gradient-to-b from-neutral-100 to-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-gold font-bold text-sm uppercase tracking-wider">Limited Time</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900">
                Exclusive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Deals</span>
              </h2>
              <p className="text-neutral-400 mt-3 text-lg max-w-lg">Handpicked packages with flights, hotels, and experiences. Book before they&apos;re gone.</p>
            </div>
          </AnimSection>

          <AnimSection>
            <Marquee speed={1.2} gap={48} centerFocus className="py-8">
              {packages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
            </Marquee>
          </AnimSection>
        </div>
      </section>

      {/* ─── POPULAR HOTELS ─── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-teal" />
                <span className="text-teal font-bold text-sm uppercase tracking-wider">Top Rated</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900">Popular Hotels</h2>
            </div>
            <Link href="/hotels" className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-accent/10 hover:bg-accent/20 text-accent font-bold text-sm rounded-xl transition-all cursor-pointer">
              See all <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimSection>

          <AnimSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.slice(0, 6).map((hotel, i) => (
                <HotelCard key={hotel.id} hotel={hotel} index={i} />
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-16 sm:py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[80px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-white/10 text-gold text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="w-4 h-4" /> Why Choose Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              Travel Smarter, Not Harder
            </h2>
          </AnimSection>

          <AnimSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Handpicked Properties", desc: "Every hotel is personally vetted by our experts. We visit, we review, we guarantee quality.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop", stat: "15,000+", statLabel: "Verified Hotels" },
                { title: "Unbeatable Prices", desc: "Direct partnerships mean exclusive rates you won't find elsewhere. Save up to 40%.", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop", stat: "40%", statLabel: "Average Savings" },
                { title: "Seamless Booking", desc: "Instant confirmation, flexible cancellation, and 24/7 support. Travel worry-free.", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop", stat: "2M+", statLabel: "Happy Guests" },
              ].map((item) => (
                <div key={item.title} className="group glass-dark rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" sizes="33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-3xl font-sans font-black text-accent">{item.stat}</span>
                      <span className="block text-white/50 text-xs mt-0.5">{item.statLabel}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl text-white mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ─── TESTIMONIALS CAROUSEL ─── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-accent font-bold text-sm uppercase tracking-wider">Real Reviews</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900">
              What Our Travelers Say
            </h2>
          </AnimSection>

          <AnimSection>
            <Marquee speed={1.0} gap={32} centerFocus={false} className="py-10">
              {testimonials.map((t) => (
                <div key={t.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100 w-[300px] sm:w-[380px] flex flex-col shrink-0">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < t.rating ? "text-gold fill-current" : "text-neutral-200"}`} />
                    ))}
                  </div>
                  <p className="text-neutral-600 leading-relaxed mb-8 flex-1 font-sans">&ldquo;{t.comment}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-neutral-100 mt-auto">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full flex items-center justify-center">
                      <span className="text-accent font-bold font-sans">{t.avatar}</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm font-sans">{t.name}</p>
                      <p className="text-xs text-neutral-400 font-sans">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </AnimSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <AnimSection>
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&h=600&fit=crop" alt="Maldives" fill className="object-cover" />
            <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-heading text-4xl sm:text-5xl font-black text-white mb-5">
              Ready for Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-gold">Adventure?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">Join 2 million+ travelers. Start planning your dream vacation today.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/hotels">
                <button className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold rounded-xl transition-all cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(255,107,44,0.4)] active:scale-[0.97] flex items-center gap-2">
                  Explore Hotels <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all cursor-pointer backdrop-blur-sm">
                View Packages
              </button>
            </div>
          </div>
        </section>
      </AnimSection>

      <Footer />
    </>
  );
}
