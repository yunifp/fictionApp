import { Button } from "../../components/ui/button";
import { Sparkles } from "lucide-react";

export default function Hero() {
 

  return (
    <section 
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=2575&auto=format&fit=crop')" 
      }}
    >
      <div className="absolute inset-0 bg-zinc-950/40 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/70 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>

      {/* Konten Hero */}
      <div className="relative z-10 max-w-4xl mt-16">
        
        <div 
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0ms' }}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#00AFF0]" />
          <span className="text-xs font-medium text-zinc-300 tracking-[0.2em] uppercase">The Undress Collection</span>
        </div>
        
        <h1 
          className="text-5xl md:text-7xl font-light text-white leading-[1.1] mb-6 opacity-0 animate-fade-in-up tracking-tight"
          style={{ animationDelay: '150ms' }}
        >
          Unveil the Unseen. <br />
          <span className="text-[#00AFF0] font-normal drop-shadow-[0_0_15px_rgba(0,175,240,0.3)]">Premium Access</span> <br />
          to Exclusive Content.
        </h1>
        
        <p 
          className="text-lg md:text-xl text-zinc-400 font-light mb-12 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          Unlock intimacy like never before. Dive into a discreet world where elite models share their private content directly with you. Experience premium, uncensored interaction today.
        </p>

        <div 
          className="flex flex-col sm:flex-row items-start sm:items-center gap-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '450ms' }}
        >
          
          <Button className="relative group overflow-hidden rounded-full !bg-[#00AFF0] hover:!bg-[#0099D1] !text-white px-10 py-7 text-lg font-medium tracking-wide transition-all duration-500 hover:scale-105 border-0 shadow-[0_0_25px_rgba(0,175,240,0.3)] hover:shadow-[0_0_40px_rgba(0,175,240,0.6)]">
            <span className="relative z-10">Choose Your Models</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer z-0"></div>
          </Button>

         
        </div>
      </div>
    </section>
  );
}