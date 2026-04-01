"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, Phone, Mail, Globe, Users, Award, Heart, 
  ShieldCheck, Zap, Sparkles, ArrowRight, Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/lib/useInView";

function AnimSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div 
      ref={ref} 
      className={`${className} transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
          alt="Travel Adventure" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-surface" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <AnimSection>
            
            <h1 className="font-heading text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Redefining the Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-gold">Exploration</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We don&apos;t just book trips. We curate life-changing experiences that stay with you forever.
            </p>
          </AnimSection>
        </div>
      </section>

      {/* ─── OUR STORY SECTION ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimSection>
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent/10 rounded-[40px] blur-2xl group-hover:bg-accent/20 transition-all duration-700" />
                <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-white/20">
                  <Image 
                    src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1974&auto=format&fit=crop" 
                    alt="Our Story" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white rounded-3xl p-6 shadow-xl hidden md:block animate-float">
                  <div className="flex flex-col h-full justify-center text-center">
                    <span className="text-4xl font-black text-primary">12+</span>
                    <span className="text-neutral-400 text-sm font-bold uppercase tracking-tighter">Years of Excellence</span>
                  </div>
                </div>
              </div>
            </AnimSection>

            <AnimSection className="stagger-1">
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-4xl md:text-5xl font-black text-primary mb-6">Our Story</h2>
                  <p className="text-neutral-500 text-lg leading-relaxed">
                    Founded in the heart of London, TravelAsYouLike emerged from a simple realization: travel should be personal, seamless, and extraordinary. What started as a boutique travel agency has evolved into a global leader in luxury travel experiences.
                  </p>
                </div>
                <p className="text-neutral-500 text-lg leading-relaxed">
                  Our team of passionate explorers scours the globe to handpick only the finest properties and most authentic experiences. We believe that luxury isn&apos;t just about five-star hotels; it&apos;s about the stories you tell when you return home.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div>
                    <h4 className="text-3xl font-black text-accent mb-1">50k+</h4>
                    <p className="text-neutral-400 font-bold text-sm uppercase">Happy Travelers</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-teal mb-1">150+</h4>
                    <p className="text-neutral-400 font-bold text-sm uppercase">Global Partners</p>
                  </div>
                </div>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION (Glass cards) ─── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimSection className="glass-dark p-10 rounded-[32px] border border-white/10">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-8">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/60 text-lg leading-relaxed">
                To empower every traveler with the freedom to explore the world on their own terms, providing unparalleled access to luxury, comfort, and authenticity.
              </p>
            </AnimSection>

            <AnimSection className="glass-dark p-10 rounded-[32px] border border-white/10 stagger-1">
              <div className="w-16 h-16 bg-teal/20 rounded-2xl flex items-center justify-center mb-8">
                <Globe className="w-8 h-8 text-teal" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/60 text-lg leading-relaxed">
                To be the world&apos;s most trusted travel companion, setting the gold standard for personalized exploration and sustainable luxury travel.
              </p>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-primary mb-4">The TravelAsYouLike Edge</h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">Why thousands of savvy travelers trust us with their most precious memories.</p>
          </AnimSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: ShieldCheck, 
                title: "Complete Security", 
                desc: "Every booking is protected by industry-leading security protocols and full travel insurance options.",
                color: "text-blue-500 bg-blue-50"
              },
              { 
                icon: Heart, 
                title: "Personalized Care", 
                desc: "Our travel experts are available 24/7 to ensure your trip is perfect from start to finish.",
                color: "text-red-500 bg-red-50"
              },
              { 
                icon: Award, 
                title: "Best Price Promise", 
                desc: "We work directly with owners to secure exclusive rates that you won&apos;t find on any other platform.",
                color: "text-gold bg-gold/5"
              }
            ].map((item, i) => (
              <AnimSection key={item.title} className={`text-center space-y-6 stagger-${i + 1}`}>
                <div className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center ${item.color}`}>
                  <item.icon className="w-10 h-10" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT INFO SECTION ─── */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-neutral-100 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 space-y-12">
              <AnimSection>
                <h2 className="font-heading text-4xl font-black text-primary mb-2">Get in Touch</h2>
                <p className="text-neutral-400">Visit our headquarters or give us a call.</p>
              </AnimSection>

              <div className="space-y-8">
                <AnimSection className="flex items-start gap-6 stagger-1">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">Our Office</h4>
                    <p className="text-neutral-500 leading-relaxed">
                      1st Floor, 8 Town Quay Wharf,<br />
                      Abbey Road, Barking, IG11 7BZ
                    </p>
                  </div>
                </AnimSection>

                <AnimSection className="flex items-start gap-6 stagger-2">
                  <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">Call Us</h4>
                    <p className="text-neutral-500 leading-relaxed font-sans font-medium text-lg">
                      020 3474 0053
                    </p>
                  </div>
                </AnimSection>

                <AnimSection className="flex items-start gap-6 stagger-3">
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">Email Us</h4>
                    <p className="text-neutral-500 leading-relaxed">
                      hello@travelasyoulike.com
                    </p>
                  </div>
                </AnimSection>
              </div>
            </div>

            <div className="lg:w-1/2 relative min-h-[400px]">
              <Image 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="Our Office" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/20" />
              <div className="absolute bottom-10 left-10 right-10 glass p-8 rounded-3xl">
                <p className="text-primary font-bold italic text-lg leading-relaxed">
                  &ldquo;We&apos;re committed to providing the most professional and personalized travel service in the industry.&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full" />
                  <div>
                    <p className="text-sm font-black text-primary uppercase tracking-wider">The Leadership Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24">
        <AnimSection className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-black text-primary mb-8">
            Ready to Start Your Journey?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/hotels">
              <button className="px-10 py-5 bg-accent hover:bg-accent-light text-white font-black rounded-2xl transition-all shadow-xl shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1 flex items-center gap-3 cursor-pointer">
                Find Your Hotel <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <button className="px-10 py-5 bg-white border-2 border-primary/5 hover:border-primary/20 text-primary font-black rounded-2xl transition-all hover:-translate-y-1 cursor-pointer">
              Our Packages
            </button>
          </div>
        </AnimSection>
      </section>

      <Footer />
    </div>
  );
}
