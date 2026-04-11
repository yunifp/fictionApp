/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "../ui/button";
import { Heart, BadgeCheck, Lock, X, PlaySquare, Check } from "lucide-react";
import { useState } from "react";

interface PremiumModalProps {
  model: any;
  onClose: () => void;
}

export default function PremiumModal({ model, onClose }: PremiumModalProps) {
  // State untuk memilih paket (default bulanan)
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  // Konversi harga dummy ke Rupiah (Misal rate 16.000)
  const priceIDR = billingCycle === "monthly" ? "Rp 149.000" : "Rp 1.299.000";
  const originalPrice = billingCycle === "yearly" ? "Rp 1.788.000" : null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Overlay Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      
      {/* Box Modal */}
      <div className="relative bg-zinc-950 border border-white/10 rounded-[2.5rem] w-full max-w-lg p-1 shadow-2xl animate-fade-in-up overflow-hidden">
        
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-[#00AFF0]/20 blur-[80px] pointer-events-none"></div>

        <div className="relative bg-zinc-900/40 backdrop-blur-2xl rounded-[2.3rem] p-8 md:p-10">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition-all hover:rotate-90"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-[#00AFF0] blur-2xl opacity-20 rounded-full"></div>
              <div className="w-20 h-20 rounded-full border-2 border-[#00AFF0] p-1 relative z-10">
                <img src={model.cover} className="w-full h-full object-cover rounded-full" alt="" />
              </div>
            </div>
            <h3 className="text-3xl font-light text-white flex items-center gap-2 justify-center tracking-tight">
              {model.name} <BadgeCheck className="w-6 h-6 text-[#00AFF0]" fill="currentColor" stroke="transparent" />
            </h3>
            <p className="text-zinc-500 text-sm mt-1 tracking-wide uppercase font-medium">Premium Membership</p>
          </div>

          {/* Billing Switcher (Kurs Rupiah) */}
          <div className="flex p-1.5 bg-black/40 border border-white/5 rounded-full mb-8 max-w-[320px] mx-auto">
            <button 
              onClick={() => setBillingCycle("monthly")}
              className={`flex-1 py-2.5 text-xs font-semibold rounded-full transition-all ${billingCycle === "monthly" ? "bg-white text-black shadow-lg" : "text-zinc-500 hover:text-white"}`}
            >
              Bulanan
            </button>
            <button 
              onClick={() => setBillingCycle("yearly")}
              className={`flex-1 py-2.5 text-xs font-semibold rounded-full transition-all relative ${billingCycle === "yearly" ? "bg-white text-black shadow-lg" : "text-zinc-500 hover:text-white"}`}
            >
              Tahunan
              {billingCycle !== "yearly" && (
                <span className="absolute -top-3 -right-2 bg-red-600 text-[9px] text-white px-2 py-0.5 rounded-full animate-pulse">Save 30%</span>
              )}
            </button>
          </div>

          {/* Feature List */}
          <div className="space-y-4 mb-10">
            {[
              { icon: Lock, text: "Buka semua feed doomscrolling tanpa batas" },
              { icon: PlaySquare, text: `Akses ke ${model.videos}+ video private eksklusif` },
              { icon: Heart, text: "Konten Uncut & Uncensored kualitas 4K" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-zinc-300">
                <div className="w-8 h-8 rounded-full bg-[#00AFF0]/10 border border-[#00AFF0]/20 flex items-center justify-center shrink-0">
                  <item.icon size={14} className="text-[#00AFF0]" />
                </div>
                <span className="text-sm font-light leading-snug">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Pricing & CTA */}
          <div className="flex flex-col items-center">
            <div className="text-center mb-8">
              {originalPrice && (
                <span className="text-zinc-600 text-sm line-through block mb-1">{originalPrice}</span>
              )}
              <div className="text-5xl font-light text-white tracking-tighter">
                {priceIDR} <span className="text-sm text-zinc-500 font-medium">{billingCycle === "monthly" ? "/bln" : "/thn"}</span>
              </div>
            </div>

            <Button className="w-full relative group overflow-hidden rounded-full !bg-[#00AFF0] hover:!bg-[#0099D1] !text-white py-8 text-xl font-semibold tracking-wide transition-all duration-300 border-0 shadow-[0_0_30px_rgba(0,175,240,0.3)] hover:scale-[1.02]">
              <span className="relative z-10 flex items-center gap-3">
                Bayar Sekarang <Check size={20} />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer z-0"></div>
            </Button>
            
            <p className="text-zinc-500 text-[10px] text-center mt-6 uppercase tracking-[0.2em]">
              Metode Pembayaran: QRIS, VA, E-Wallet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}