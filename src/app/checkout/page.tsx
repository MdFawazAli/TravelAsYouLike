"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Check, CreditCard, User, ShieldCheck, Lock, ArrowLeft, ArrowRight, Calendar, Users } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  { id: 1, label: "Your Details", icon: User },
  { id: 2, label: "Payment", icon: CreditCard },
  { id: 3, label: "Confirmed", icon: Check },
];

function CheckoutContent() {
  const sp = useSearchParams();
  const hotelName = sp.get("hotel") ?? "Grand Azure Resort & Spa";
  const price = parseInt(sp.get("price") ?? "189");
  const nights = parseInt(sp.get("nights") ?? "3");
  const guests = sp.get("guests") ?? "2";
  const total = parseInt(sp.get("total") ?? String(price * nights + Math.round(price * nights * 0.12)));
  const subtotal = price * nights;
  const taxes = total - subtotal;

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (step === 2) {
      setLoading(true);
      setTimeout(() => { setLoading(false); setStep(3); }, 1500);
    } else if (step < 3) setStep(step + 1);
  };

  const inputClass = "w-full px-4 py-3.5 bg-neutral-50 hover:bg-neutral-100 border border-transparent rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/30 focus:bg-white transition-all";

  return (
    <main className="pt-[72px] min-h-screen bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/hotels" className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-accent transition-colors mb-6 cursor-pointer">
          <ArrowLeft className="w-4 h-4" /> Back to search
        </Link>
        <h1 className="font-heading text-2xl sm:text-3xl font-black text-neutral-900 mb-8">Complete Your Booking</h1>

        {/* Stepper */}
        <div className="flex items-center justify-center mb-10">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center">
              <div className="flex items-center gap-2.5">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${step > s.id ? "bg-teal text-white shadow-md" : step === s.id ? "bg-accent text-white shadow-lg shadow-accent/20" : "bg-neutral-100 text-neutral-400"}`}>
                  {step > s.id ? <Check className="w-5 h-5" /> : <s.icon className="w-5 h-5" />}
                </div>
                <span className={`hidden sm:block text-sm font-semibold ${step >= s.id ? "text-neutral-900" : "text-neutral-400"}`}>{s.label}</span>
              </div>
              {i < steps.length - 1 && <div className={`w-12 sm:w-20 h-1 mx-3 rounded-full transition-colors ${step > s.id ? "bg-teal" : "bg-neutral-200"}`} />}
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <div className="flex-1">
            {step === 1 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm animate-fade-in">
                <h2 className="font-heading font-bold text-xl mb-6">Guest Details</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label htmlFor="fn" className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">First Name</label><input id="fn" type="text" placeholder="John" className={inputClass} /></div>
                    <div><label htmlFor="ln" className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">Last Name</label><input id="ln" type="text" placeholder="Doe" className={inputClass} /></div>
                  </div>
                  <div><label htmlFor="em" className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">Email</label><input id="em" type="email" placeholder="john@example.com" className={inputClass} /></div>
                  <div><label htmlFor="ph" className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">Phone</label><input id="ph" type="tel" placeholder="+1 (555) 000-0000" className={inputClass} /></div>
                  <div><label htmlFor="sr" className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">Special Requests <span className="font-normal text-neutral-300">(optional)</span></label><textarea id="sr" rows={3} placeholder="Any special requirements..." className={`${inputClass} resize-none`} /></div>
                </div>
                <div className="flex justify-end mt-6">
                  <button onClick={handleNext} className="flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold rounded-xl transition-all cursor-pointer shadow-lg active:scale-[0.97]">
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm animate-fade-in">
                <h2 className="font-heading font-bold text-xl mb-6">Payment Details</h2>
                <div className="space-y-4">
                  <div><label htmlFor="cn" className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">Name on Card</label><input id="cn" type="text" placeholder="John Doe" className={inputClass} /></div>
                  <div><label htmlFor="cc" className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">Card Number</label>
                    <div className="relative"><input id="cc" type="text" placeholder="1234 5678 9012 3456" maxLength={19} className={inputClass} /><CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-300" /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><label htmlFor="ex" className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">Expiry</label><input id="ex" type="text" placeholder="MM/YY" maxLength={5} className={inputClass} /></div>
                    <div><label htmlFor="cv" className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">CVV</label>
                      <div className="relative"><input id="cv" type="text" placeholder="123" maxLength={4} className={inputClass} /><Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-300" /></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 text-xs text-neutral-400"><ShieldCheck className="w-4 h-4 text-teal" />256-bit SSL encrypted</div>
                <div className="flex justify-between mt-6">
                  <button onClick={() => setStep(1)} className="flex items-center gap-2 px-6 py-3 text-neutral-400 hover:text-neutral-900 font-semibold cursor-pointer transition-colors"><ArrowLeft className="w-4 h-4" /> Back</button>
                  <button onClick={handleNext} disabled={loading}
                    className="flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold rounded-xl transition-all cursor-pointer shadow-lg active:scale-[0.97] disabled:opacity-60">
                    {loading && <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/></svg>}
                    {loading ? "Processing..." : `Pay $${total}`}
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm text-center animate-scale-in">
                <div className="w-20 h-20 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6"><Check className="w-10 h-10 text-teal" /></div>
                <h2 className="font-heading font-black text-3xl mb-2">Booking Confirmed!</h2>
                <p className="text-accent font-bold mb-1">Confirmation #TYL-{Math.random().toString(36).substring(2, 8).toUpperCase()}</p>
                <p className="text-neutral-400 text-sm mb-8 max-w-md mx-auto">A confirmation email has been sent with all reservation details.</p>
                <div className="bg-neutral-50 rounded-xl p-6 max-w-sm mx-auto mb-8 text-left">
                  <h3 className="font-heading font-bold mb-3">{hotelName}</h3>
                  <div className="space-y-2 text-sm text-neutral-400">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-accent" />{nights} night{nights > 1 ? "s" : ""}</div>
                    <div className="flex items-center gap-2"><Users className="w-4 h-4 text-accent" />{guests} guest{parseInt(guests) > 1 ? "s" : ""}</div>
                    <div className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-accent" /><span className="font-bold text-neutral-900">Total: ${total}</span></div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/"><button className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold rounded-xl transition-all cursor-pointer active:scale-[0.97]">Back to Home</button></Link>
                  <Link href="/hotels"><button className="px-8 py-4 border-2 border-neutral-200 hover:border-accent text-neutral-900 hover:text-accent font-bold rounded-xl transition-all cursor-pointer">Browse More</button></Link>
                </div>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="lg:w-[380px] shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-sm lg:sticky lg:top-[90px]">
              <h3 className="font-heading font-bold text-lg mb-4">Booking Summary</h3>
              <div className="flex items-start gap-3 mb-4 pb-4 border-b border-neutral-100">
                <div className="w-16 h-14 bg-accent/5 rounded-xl flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{hotelName}</h4>
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mt-0.5">
                    <span>{nights} night{nights > 1 ? "s" : ""}</span><span>&middot;</span><span>{guests} guest{parseInt(guests) > 1 ? "s" : ""}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm"><span className="text-neutral-400">${price} x {nights} night{nights > 1 ? "s" : ""}</span><span className="font-medium">${subtotal}</span></div>
                <div className="flex justify-between text-sm"><span className="text-neutral-400">Taxes & fees</span><span className="font-medium">${taxes}</span></div>
              </div>
              <div className="flex justify-between font-black text-lg pt-3 border-t border-neutral-200"><span>Total</span><span className="text-accent">${total}</span></div>
              <div className="mt-4 flex items-start gap-2 p-3 bg-teal/5 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <p className="text-xs text-neutral-400">Free cancellation up to 48h before check-in.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<main className="pt-[72px] min-h-screen bg-surface flex items-center justify-center"><div className="w-10 h-10 border-3 border-accent border-t-transparent rounded-full animate-spin" /></main>}>
        <CheckoutContent />
      </Suspense>
      <Footer />
    </>
  );
}
