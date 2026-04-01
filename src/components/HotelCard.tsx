import Link from "next/link";
import Image from "next/image";
import { Star, MapPin, Heart, Wifi, Waves, UtensilsCrossed } from "lucide-react";
import type { Hotel } from "@/lib/data";

const amenityIconMap: Record<string, React.ElementType> = {
  WiFi: Wifi, Pool: Waves, Spa: Waves, Restaurant: UtensilsCrossed,
};

export default function HotelCard({ hotel, index = 0 }: { hotel: Hotel; index?: number }) {
  const discount = hotel.originalPrice
    ? Math.round(((hotel.originalPrice - hotel.pricePerNight) / hotel.originalPrice) * 100)
    : 0;

  return (
    <Link
      href={`/hotel/${hotel.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col
        hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Discount */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
            -{discount}%
          </div>
        )}

        {/* Wishlist */}
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
          className="absolute top-3 right-3 w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center
            hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer border border-white/30"
          aria-label={`Save ${hotel.name}`}
        >
          <Heart className="w-4 h-4 text-white group-hover:text-accent transition-colors" />
        </button>

        {/* Rating on image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 glass-dark rounded-full px-3 py-1.5">
          <Star className="w-3.5 h-3.5 text-gold fill-current" />
          <span className="text-white text-xs font-bold">{hotel.rating}</span>
        </div>

        {/* Amenity icons on hover */}
        <div className="absolute bottom-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          {hotel.amenities.slice(0, 3).map((a) => {
            const Icon = amenityIconMap[a];
            return Icon ? (
              <div key={a} className="w-8 h-8 glass-dark rounded-full flex items-center justify-center">
                <Icon className="w-3.5 h-3.5 text-white" />
              </div>
            ) : null;
          })}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1 text-accent/70 text-xs font-semibold mb-1.5">
          <MapPin className="w-3 h-3" />
          <span>{hotel.location}</span>
        </div>

        <h3 className="font-heading font-bold text-neutral-900 text-lg leading-snug mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
          {hotel.name}
        </h3>

        <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3">
          <span className="bg-teal/10 text-teal px-2 py-0.5 rounded-full font-semibold">
            {hotel.reviewCount.toLocaleString()} reviews
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto flex items-end justify-between pt-4 border-t border-neutral-100">
          <div>
            <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">From</span>
            <div className="flex items-baseline gap-1.5">
              {hotel.originalPrice && (
                <span className="text-sm text-neutral-300 line-through font-sans">${hotel.originalPrice}</span>
              )}
              <span className="text-2xl font-sans font-black text-accent">${hotel.pricePerNight}</span>
              <span className="text-xs text-neutral-400">/night</span>
            </div>
          </div>
          <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:shadow-lg transition-all duration-300">
            <svg className="w-4 h-4 text-accent group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
