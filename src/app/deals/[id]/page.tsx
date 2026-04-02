"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { SlidersHorizontal, ChevronDown, Grid3x3, List, MapPin, ArrowLeft, Star, Check, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import HotelCard from "@/components/HotelCard";
import FiltersPanel from "@/components/FiltersPanel";
import Footer from "@/components/Footer";
import { getHotelsByPackage, getPackageById, packages } from "@/lib/data";

const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "reviews", label: "Most Reviewed" },
];

export default function DealPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const pkg = getPackageById(id) ?? packages[0];
  const dealHotels = getHotelsByPackage(id);

  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState("recommended");
  const [view, setView] = useState<"grid" | "list">("grid");

  const sortedHotels = [...dealHotels].sort((a, b) => {
    switch (sortBy) {
      case "price-low": return a.pricePerNight - b.pricePerNight;
      case "price-high": return b.pricePerNight - a.pricePerNight;
      case "rating": return b.rating - a.rating;
      case "reviews": return b.reviewCount - a.reviewCount;
      default: return 0;
    }
  });

  return (
    <>
      <Navbar variant="transparent" />
      <main>
        {/* Hero banner */}
        <div className="relative bg-primary overflow-hidden pt-24 pb-10">
          <Image src={pkg.image} alt={pkg.title} fill className="object-cover opacity-30" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Link href="/#packages" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to all deals
            </Link>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">
              {pkg.title}
            </h1>
            <p className="text-white/70 text-lg mb-5">{pkg.destination}</p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Star className="w-4 h-4 text-gold fill-current" />
                <span className="text-white font-bold text-sm">{pkg.rating}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Clock className="w-4 h-4 text-white/60" />
                <span className="text-white text-sm">{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="text-white text-sm">From <span className="font-black text-accent">£{pkg.price}</span>pp</span>
              </div>
              {pkg.includes.map((item) => (
                <span key={item} className="flex items-center gap-1 text-sm text-teal font-medium bg-teal/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Check className="w-3.5 h-3.5" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <button onClick={() => setFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-semibold hover:shadow-md transition-all cursor-pointer">
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>
              <p className="text-neutral-400 text-sm"><span className="font-bold text-neutral-900">{dealHotels.length} properties</span> in this collection</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex border border-neutral-200 rounded-xl overflow-hidden">
                {[{ v: "grid" as const, icon: Grid3x3 }, { v: "list" as const, icon: List }].map(({ v, icon: Icon }) => (
                  <button key={v} onClick={() => setView(v)}
                    className={`p-2.5 cursor-pointer transition-all ${view === v ? "bg-accent text-white" : "bg-white text-neutral-400 hover:bg-neutral-50"}`}
                    aria-label={`${v} view`}>
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
              <div className="relative">
                <label htmlFor="sort" className="sr-only">Sort</label>
                <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-neutral-200 rounded-xl pl-4 pr-10 py-2.5 text-sm font-semibold cursor-pointer hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-accent/20">
                  {sortOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="hidden lg:block w-64 shrink-0"><FiltersPanel open={filtersOpen} onClose={() => setFiltersOpen(false)} /></div>
            <div className="lg:hidden"><FiltersPanel open={filtersOpen} onClose={() => setFiltersOpen(false)} /></div>
            <div className="flex-1">
              <div className={view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" : "flex flex-col gap-5"}>
                {sortedHotels.map((hotel, i) => <HotelCard key={hotel.id} hotel={hotel} index={i} />)}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
