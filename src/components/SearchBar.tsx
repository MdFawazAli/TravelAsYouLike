"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Calendar, Users, Search, Building2, Package, Plane } from "lucide-react";

const tabs = [
  { id: "hotels", label: "Hotels", icon: Building2 },
  { id: "packages", label: "Flight + Hotel", icon: Plane },
  { id: "deals", label: "Deals", icon: Package },
];

export default function SearchBar({ variant = "hero" }: { variant?: "hero" | "page" }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("hotels");
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (guests) params.set("guests", guests);
    router.push(`/hotels?${params.toString()}`);
  };

  const isHero = variant === "hero";

  return (
    <div
      className={`
        ${isHero ? "bg-white rounded-2xl shadow-2xl border border-neutral-100" : "bg-white rounded-2xl shadow-md border border-neutral-200"}
        transition-all duration-500 overflow-hidden
      `}
    >
      {/* Tabs */}
      <div className="flex bg-neutral-50/50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-8 py-5 text-sm font-bold transition-all cursor-pointer relative
              ${
                activeTab === tab.id
                  ? "text-accent bg-white shadow-[0_-4px_15px_rgba(0,0,0,0.02)]"
                  : "text-neutral-400 hover:text-neutral-600 hover:bg-white/50"
              }
            `}
          >
            <tab.icon className="w-4 h-4" />
            <span className="hidden sm:inline tracking-tight">{tab.label}</span>
            {activeTab === tab.id && (
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent rounded-b-full" />
            )}
          </button>
        ))}
      </div>

      {/* Search fields */}
      <form onSubmit={handleSearch} className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_auto] gap-4">
          {/* Destination */}
          <div className="relative group">
            <label htmlFor="dest" className="block text-[10px] font-black text-neutral-400 uppercase tracking-[0.1em] mb-1.5 ml-1">
              Destination
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-accent/60" />
              <input
                id="dest"
                type="text"
                placeholder="Where to?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-neutral-50 hover:bg-neutral-100 rounded-2xl text-[15px] font-bold text-neutral-900
                  placeholder:text-neutral-400 border border-transparent
                  focus:outline-none focus:ring-4 focus:ring-accent/5 focus:border-accent/20 focus:bg-white
                  transition-all duration-300"
              />
            </div>
          </div>

          {/* Check-in */}
          <div className="relative group">
            <label htmlFor="cin" className="block text-[10px] font-black text-neutral-400 uppercase tracking-[0.1em] mb-1.5 ml-1">
              Check-in
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-accent/60" />
              <input
                id="cin"
                type="text"
                placeholder="Add date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => !e.target.value && (e.target.type = "text")}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full pl-12 pr-3 py-4 bg-neutral-50 hover:bg-neutral-100 rounded-2xl text-[15px] font-bold text-neutral-900
                  border border-transparent
                  focus:outline-none focus:ring-4 focus:ring-accent/5 focus:border-accent/20 focus:bg-white
                  transition-all duration-300"
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="relative group">
            <label htmlFor="cout" className="block text-[10px] font-black text-neutral-400 uppercase tracking-[0.1em] mb-1.5 ml-1">
              Check-out
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-accent/60" />
              <input
                id="cout"
                type="text"
                placeholder="Add date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => !e.target.value && (e.target.type = "text")}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full pl-12 pr-3 py-4 bg-neutral-50 hover:bg-neutral-100 rounded-2xl text-[15px] font-bold text-neutral-900
                  border border-transparent
                  focus:outline-none focus:ring-4 focus:ring-accent/5 focus:border-accent/20 focus:bg-white
                  transition-all duration-300"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="relative group">
            <label htmlFor="gst" className="block text-[10px] font-black text-neutral-400 uppercase tracking-[0.1em] mb-1.5 ml-1">
              Travelers
            </label>
            <div className="relative">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-accent/60" />
              <select
                id="gst"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-neutral-50 hover:bg-neutral-100 rounded-2xl text-[15px] font-bold text-neutral-900
                  border border-transparent appearance-none cursor-pointer
                  focus:outline-none focus:ring-4 focus:ring-accent/5 focus:border-accent/20 focus:bg-white
                  transition-all duration-300"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5+ Guests</option>
              </select>
            </div>
          </div>

          {/* Search button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full lg:w-16 h-[60px] bg-accent hover:bg-accent-light text-white
                font-bold rounded-2xl transition-all duration-500 cursor-pointer
                shadow-lg hover:shadow-[0_10px_30px_rgba(255,107,44,0.4)] active:scale-[0.95]
                flex items-center justify-center gap-2
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Search className="w-6 h-6" />
              <span className="lg:hidden text-lg">Search Deals</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
