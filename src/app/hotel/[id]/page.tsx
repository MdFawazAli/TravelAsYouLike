"use client";

import { useState, use } from "react";
import Image from "next/image";
import { Star, MapPin, Heart, Share2, Check, Wifi, UtensilsCrossed, Dumbbell, Waves, Sparkles, Wine, ConciergeBell, Car, Users, Maximize2, BedDouble, ChevronRight, ImageIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import BookingCard from "@/components/BookingCard";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import { hotels } from "@/lib/data";

const amenityIcons: Record<string, React.ElementType> = {
  WiFi: Wifi, Pool: Waves, Spa: Sparkles, Restaurant: UtensilsCrossed, Gym: Dumbbell, Bar: Wine,
  "Room Service": ConciergeBell, "Beach Access": Waves, Concierge: ConciergeBell, "Airport Transfer": Car,
  "Ski Storage": ConciergeBell, Fireplace: Sparkles, Onsen: Waves, Garden: Sparkles, "Tea Room": UtensilsCrossed,
  Terrace: Maximize2, "Boat Tours": Waves, "Business Center": ConciergeBell, Parking: Car,
};

type Tab = "overview" | "rooms" | "reviews";

export default function HotelDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const hotel = hotels.find((h) => h.id === id) ?? hotels[0];
  const [tab, setTab] = useState<Tab>("overview");
  const [mainImg, setMainImg] = useState(0);

  const tabs: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "rooms", label: "Rooms & Suites" },
    { id: "reviews", label: `Reviews (${hotel.reviews.length})` },
  ];

  return (
    <>
      <Navbar variant="solid" />
      <main className="pt-[72px]">
        {/* Gallery */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-2xl overflow-hidden">
            <div className="relative md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto md:h-full cursor-pointer group overflow-hidden" onClick={() => setMainImg(0)}>
              <Image src={hotel.images[mainImg]} alt={hotel.name} fill priority className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="50vw" />
            </div>
            {hotel.images.slice(1, 5).map((img, i) => (
              <div key={i} className={`relative aspect-[4/3] cursor-pointer group overflow-hidden ${i >= 2 ? "hidden md:block" : ""}`} onClick={() => setMainImg(i + 1)}>
                <Image src={img} alt={`${hotel.name} ${i + 2}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="25vw" />
                {i === 3 && hotel.images.length > 5 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-none"><ImageIcon className="w-5 h-5 text-white mr-1.5" /><span className="text-white font-bold">+{hotel.images.length - 5}</span></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Info + Booking */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-1 text-accent text-sm font-semibold mb-1"><MapPin className="w-4 h-4" />{hotel.location}, {hotel.country}</div>
                  <h1 className="font-heading text-3xl sm:text-4xl font-black text-neutral-900">{hotel.name}</h1>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center gap-1 bg-gold text-primary-dark px-2.5 py-1 rounded-lg"><Star className="w-3.5 h-3.5 fill-current" /><span className="font-black text-xs">{hotel.rating}</span></div>
                    <span className="text-neutral-400 text-sm">{hotel.reviewCount.toLocaleString()} reviews</span>
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  {[Heart, Share2].map((Icon, i) => (
                    <button key={i} className="w-11 h-11 border border-neutral-200 rounded-xl flex items-center justify-center hover:border-accent hover:text-accent transition-all cursor-pointer" aria-label={i === 0 ? "Save" : "Share"}>
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-6">
                {hotel.highlights.map((h) => (
                  <span key={h} className="flex items-center gap-1.5 bg-teal/8 text-teal border border-teal/15 text-sm px-3 py-1.5 rounded-xl font-medium">
                    <Check className="w-3.5 h-3.5" />{h}
                  </span>
                ))}
              </div>

              {/* Tabs */}
              <div className="border-b border-neutral-200 mb-6">
                <nav className="flex gap-1" aria-label="Tabs">
                  {tabs.map((t) => (
                    <button key={t.id} onClick={() => setTab(t.id)}
                      className={`px-5 py-3.5 text-sm font-bold rounded-t-xl transition-all cursor-pointer relative ${tab === t.id ? "text-accent bg-accent/5" : "text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50"}`}>
                      {t.label}
                      {tab === t.id && <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent rounded-t-full" />}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              {tab === "overview" && (
                <div className="animate-fade-in">
                  <p className="text-neutral-500 leading-relaxed mb-8 text-[15px]">{hotel.description}</p>
                  <h3 className="font-heading font-bold text-xl mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                    {hotel.amenities.map((a) => {
                      const Icon = amenityIcons[a] ?? Check;
                      return (
                        <div key={a} className="flex items-center gap-3 p-3.5 bg-neutral-50 hover:bg-accent/5 rounded-xl transition-colors group cursor-default">
                          <Icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                          <span className="text-sm font-medium">{a}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {tab === "rooms" && (
                <div className="space-y-4 animate-fade-in">
                  {hotel.rooms.map((room) => (
                    <div key={room.id} className="flex flex-col sm:flex-row gap-4 bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-accent/20 transition-all duration-300 group">
                      <div className="relative w-full sm:w-64 aspect-[16/10] sm:aspect-auto sm:h-auto shrink-0 overflow-hidden">
                        <Image src={room.image} alt={room.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="256px" />
                      </div>
                      <div className="flex-1 p-5">
                        <h4 className="font-heading font-bold text-lg mb-1">{room.name}</h4>
                        <p className="text-neutral-400 text-sm mb-3">{room.description}</p>
                        <div className="flex flex-wrap gap-3 text-xs text-neutral-400 mb-4">
                          <span className="flex items-center gap-1"><BedDouble className="w-3.5 h-3.5" />{room.bedType}</span>
                          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />Up to {room.maxGuests}</span>
                          <span className="flex items-center gap-1"><Maximize2 className="w-3.5 h-3.5" />{room.size}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {room.amenities.map((a) => <span key={a} className="text-xs bg-neutral-100 px-2.5 py-1 rounded-lg">{a}</span>)}
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-heading font-black text-accent">£{room.pricePerNight}</span>
                            <span className="text-xs text-neutral-400">pp</span>
                          </div>
                          <button className="flex items-center gap-1 px-5 py-2.5 bg-accent hover:bg-accent-light text-white text-sm font-bold rounded-xl transition-all cursor-pointer active:scale-[0.97]">
                            Select <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {tab === "reviews" && (
                <div className="animate-fade-in">
                  {hotel.reviews.length === 0 ? (
                    <p className="text-neutral-400 text-center py-12">No reviews yet. Be the first to review!</p>
                  ) : (
                    <Carousel showDots showArrows={false} autoPlay interval={5000} centerMode>
                      {hotel.reviews.map((r) => (
                        <div key={r.id} className="bg-white border border-neutral-200 rounded-2xl p-6 min-w-[300px] sm:min-w-[380px]">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-11 h-11 bg-accent/10 rounded-full flex items-center justify-center"><span className="text-accent font-bold text-sm">{r.avatar}</span></div>
                              <div><p className="font-bold text-sm">{r.author}</p><p className="text-xs text-neutral-400">{r.country} &middot; {new Date(r.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</p></div>
                            </div>
                            <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`w-4 h-4 ${i < r.rating ? "text-gold fill-current" : "text-neutral-200"}`} />)}</div>
                          </div>
                          <h4 className="font-bold mb-1">{r.title}</h4>
                          <p className="text-neutral-500 text-sm leading-relaxed">{r.comment}</p>
                        </div>
                      ))}
                    </Carousel>
                  )}
                </div>
              )}
            </div>

            {/* Right: Booking */}
            <div className="lg:w-[400px] shrink-0">
              <div className="lg:sticky lg:top-[90px]">
                <BookingCard hotelId={hotel.id} hotelName={hotel.name} pricePerNight={hotel.pricePerNight} originalPrice={hotel.originalPrice} rating={hotel.rating} reviewCount={hotel.reviewCount} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
