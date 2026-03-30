"use client";

import { useState } from "react";
import { Star, ChevronDown, ChevronUp, SlidersHorizontal, X } from "lucide-react";

const amenitiesList = ["WiFi", "Pool", "Spa", "Restaurant", "Beach Access", "Gym", "Bar", "Room Service", "Parking", "Airport Transfer"];

export default function FiltersPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [priceRange, setPriceRange] = useState([0, 600]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  const toggle = (a: string) => setSelectedAmenities((p) => p.includes(a) ? p.filter((x) => x !== a) : [...p, a]);

  return (
    <>
      {open && <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden" onClick={onClose} />}
      <aside className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-2xl transition-transform duration-500 lg:static lg:transform-none lg:shadow-none lg:z-auto lg:h-auto lg:w-auto lg:rounded-2xl lg:border lg:border-neutral-200 ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="flex items-center justify-between p-5 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center"><SlidersHorizontal className="w-4 h-4 text-accent" /></div>
            <h2 className="font-heading font-bold text-neutral-900">Filters</h2>
          </div>
          <button onClick={onClose} className="lg:hidden p-2 hover:bg-neutral-100 rounded-xl cursor-pointer" aria-label="Close"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-5 space-y-7 overflow-y-auto max-h-[calc(100vh-64px)] lg:max-h-none">
          {/* Price */}
          <div>
            <h3 className="font-bold text-sm mb-3">Price per night</h3>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-lg">${priceRange[0]}</span>
              <div className="flex-1 h-1.5 bg-neutral-100 rounded-full relative">
                <div className="absolute h-full bg-gradient-to-r from-accent to-accent-light rounded-full" style={{ left: `${(priceRange[0]/600)*100}%`, right: `${100-(priceRange[1]/600)*100}%` }} />
              </div>
              <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-lg">${priceRange[1]}</span>
            </div>
            <input type="range" min={0} max={600} value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="w-full accent-accent cursor-pointer" aria-label="Max price" />
          </div>
          {/* Rating */}
          <div>
            <h3 className="font-bold text-sm mb-3">Star Rating</h3>
            <div className="grid grid-cols-2 gap-2">
              {[5, 4, 3, 2].map((r) => (
                <button key={r} onClick={() => setSelectedRating(selectedRating === r ? null : r)}
                  className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold cursor-pointer transition-all duration-300 ${selectedRating === r ? "bg-accent text-white shadow-lg shadow-accent/20" : "bg-neutral-100 hover:bg-neutral-200 text-neutral-600"}`}>
                  <Star className={`w-3.5 h-3.5 ${selectedRating === r ? "fill-current" : "text-gold fill-current"}`} />
                  <span>{r}+ Stars</span>
                </button>
              ))}
            </div>
          </div>
          {/* Amenities */}
          <div>
            <h3 className="font-bold text-sm mb-3">Amenities</h3>
            <div className="space-y-2">
              {(showAll ? amenitiesList : amenitiesList.slice(0, 6)).map((a) => (
                <label key={a} className="flex items-center gap-3 cursor-pointer group py-0.5">
                  <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${selectedAmenities.includes(a) ? "bg-accent border-accent" : "border-neutral-200 group-hover:border-accent/50"}`} onClick={() => toggle(a)}>
                    {selectedAmenities.includes(a) && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>}
                  </div>
                  <span className="text-sm group-hover:text-accent transition-colors">{a}</span>
                </label>
              ))}
            </div>
            <button onClick={() => setShowAll(!showAll)} className="flex items-center gap-1 mt-3 text-sm text-accent font-medium cursor-pointer">
              {showAll ? <>Less <ChevronUp className="w-3.5 h-3.5" /></> : <>More <ChevronDown className="w-3.5 h-3.5" /></>}
            </button>
          </div>
          <button className="w-full py-3 bg-accent hover:bg-accent-light text-white font-bold rounded-xl cursor-pointer transition-all active:scale-[0.97]">
            Apply Filters
          </button>
        </div>
      </aside>
    </>
  );
}
