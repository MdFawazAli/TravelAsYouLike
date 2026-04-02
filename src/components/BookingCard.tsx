"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Users, Shield, Tag, Star, Zap } from "lucide-react";

interface BookingCardProps {
  hotelId: string;
  hotelName: string;
  pricePerNight: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
}

export default function BookingCard({ hotelId, hotelName, pricePerNight, originalPrice, rating, reviewCount }: BookingCardProps) {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const nights = checkIn && checkOut
    ? Math.max(1, Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000))
    : 3;

  const subtotal = pricePerNight * nights;
  const taxes = Math.round(subtotal * 0.12);
  const total = subtotal + taxes;

  const handleBooking = () => {
    router.push(`/checkout?${new URLSearchParams({ hotelId, hotel: hotelName, price: String(pricePerNight), nights: String(nights), guests, total: String(total) })}`);
  };

  return (
    <div className="glass rounded-2xl p-6 space-y-5 animate-scale-in" style={{ boxShadow: "0 8px 40px rgba(27,27,58,0.12), inset 0 1px 0 rgba(255,255,255,0.5)" }}>
      {/* Urgency */}
      <div className="flex items-center gap-2 bg-accent/8 text-accent text-xs font-bold px-3 py-2 rounded-xl">
        <Zap className="w-3.5 h-3.5" />
        <span>Only 3 rooms left at this price!</span>
      </div>

      {/* Price */}
      <div>
        <div className="flex items-baseline gap-2">
          {originalPrice && <span className="text-lg text-neutral-300 line-through font-sans">£{originalPrice}</span>}
          <span className="text-4xl font-sans font-black text-accent">£{pricePerNight}</span>
          <span className="text-neutral-400 text-sm">pp</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1 bg-gold text-primary-dark px-2.5 py-1 rounded-lg">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-black text-xs font-sans">{rating}</span>
          </div>
          <span className="text-neutral-400 text-sm">Excellent ({reviewCount.toLocaleString()} reviews)</span>
        </div>
      </div>

      {/* Inputs */}
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label htmlFor="bc-in" className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">Check-in</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/50" />
              <input id="bc-in" type="text" placeholder="Add date" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => !e.target.value && (e.target.type = "text")} value={checkIn} onChange={(e) => setCheckIn(e.target.value)}
                className="w-full pl-9 pr-2 py-3 bg-neutral-50 hover:bg-neutral-100 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all" />
            </div>
          </div>
          <div>
            <label htmlFor="bc-out" className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">Check-out</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/50" />
              <input id="bc-out" type="text" placeholder="Add date" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => !e.target.value && (e.target.type = "text")} value={checkOut} onChange={(e) => setCheckOut(e.target.value)}
                className="w-full pl-9 pr-2 py-3 bg-neutral-50 hover:bg-neutral-100 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all" />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="bc-g" className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">Guests</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/50" />
            <select id="bc-g" value={guests} onChange={(e) => setGuests(e.target.value)}
              className="w-full pl-9 pr-4 py-3 bg-neutral-50 hover:bg-neutral-100 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer">
              <option value="1">1 Guest</option><option value="2">2 Guests</option><option value="3">3 Guests</option><option value="4">4 Guests</option>
            </select>
          </div>
        </div>
      </div>

      {/* Breakdown */}
      <div className="space-y-2 pt-4 border-t border-neutral-200/60">
        <div className="flex justify-between text-sm"><span className="text-neutral-400 font-sans">£{pricePerNight} x {nights} night{nights > 1 ? "s" : ""}</span><span className="font-bold font-sans">£{subtotal}</span></div>
        <div className="flex justify-between text-sm"><span className="text-neutral-400">Taxes & fees</span><span className="font-bold font-sans">£{taxes}</span></div>
        <div className="flex justify-between font-black text-lg pt-3 border-t border-neutral-200/60"><span>Total</span><span className="text-accent font-sans">£{total}</span></div>
      </div>

      {/* CTA */}
      <button onClick={handleBooking}
        className="w-full py-4 bg-accent hover:bg-accent-light text-white font-bold text-base rounded-xl transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(255,107,44,0.35)] active:scale-[0.97]">
        Reserve Now
      </button>

      {/* Trust */}
      <div className="space-y-2 pt-1">
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <Shield className="w-4 h-4 text-teal" />
          <span>Free cancellation up to 48h before check-in</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <Tag className="w-4 h-4 text-gold" />
          <span>Best price guarantee</span>
        </div>
      </div>
    </div>
  );
}
