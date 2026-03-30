"use client";

import { useState } from "react";
import { SlidersHorizontal, ChevronDown, Grid3x3, List, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import HotelCard from "@/components/HotelCard";
import FiltersPanel from "@/components/FiltersPanel";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import { hotels } from "@/lib/data";

const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "reviews", label: "Most Reviewed" },
];

export default function HotelsPage() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState("recommended");
  const [view, setView] = useState<"grid" | "list">("grid");

  const sortedHotels = [...hotels].sort((a, b) => {
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
        {/* Search header */}
        <div className="bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden pt-24 pb-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
            <div className="flex items-center gap-2 text-white/50 text-sm mb-2">
              <MapPin className="w-4 h-4" />
              <span>Search across 15,000+ properties worldwide</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-black text-white mb-6 animate-fade-in">
              Find Your Perfect Hotel
            </h1>
            <SearchBar variant="page" />
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
              <p className="text-neutral-400 text-sm"><span className="font-bold text-neutral-900">{hotels.length} properties</span> found</p>
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
              <div className="mt-12 text-center">
                <button className="px-8 py-3.5 border-2 border-accent text-accent font-bold rounded-xl hover:bg-accent hover:text-white transition-all cursor-pointer active:scale-[0.97]">
                  Load More Hotels
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
