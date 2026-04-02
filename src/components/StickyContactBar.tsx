import Link from "next/link";
import { Phone, MessageCircle, Info } from "lucide-react";

const actions = [
  {
    id: "phone",
    label: "Call Us",
    icon: Phone,
    href: "tel:+442034740053",
    iconBg: "bg-accent",
    external: false,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/442034740053",
    iconBg: "bg-[#25D366]",
    external: true,
  },
  {
    id: "about",
    label: "About Us",
    icon: Info,
    href: "/about",
    iconBg: "bg-white/20",
    external: false,
  },
];

export default function StickyContactBar() {
  return (
    <div className="fixed right-3 bottom-6 md:bottom-auto md:right-4 md:top-1/2 md:-translate-y-1/2 z-50">
      <nav className="glass-dark border border-white/20 rounded-full py-2 px-1 md:py-3 md:px-1.5 flex flex-col items-center gap-1 md:gap-1.5 shadow-2xl">
        {actions.map((action) => {
          const Icon = action.icon;
          const content = (
            <div className="group/item relative flex items-center justify-center">
              <div className={`w-8 h-8 md:w-10 md:h-10 ${action.iconBg} rounded-full flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110 cursor-pointer`}>
                <Icon className="w-4 h-4 md:w-[18px] md:h-[18px] text-white" />
              </div>
              <div className="absolute right-full mr-3 px-3 py-1.5 glass-dark border border-white/20 rounded-lg opacity-0 pointer-events-none group-hover/item:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden md:block">
                <span className="text-white text-xs font-bold">{action.label}</span>
              </div>
            </div>
          );

          if (action.external) {
            return (
              <a key={action.id} href={action.href} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            );
          }

          return (
            <Link key={action.id} href={action.href}>
              {content}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
