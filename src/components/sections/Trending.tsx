/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { BadgeCheck, Flame, Lock, PlaySquare } from "lucide-react";
import PremiumModal from "../shared/PremiumModal"; // Import Modal Baru

export default function Trending() {
  const [selectedModel, setSelectedModel] = useState<any>(null);

  const models = [
    {
      id: 1,
      name: "Isabella Rose",
      cover: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
      videos: 42,
    },
    {
      id: 2,
      name: "Sophia Carter",
      cover: "https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?q=80&w=800&auto=format&fit=crop",
      videos: 18,
    },
     {
      id: 3,
      name: "Sophia Carter",
      cover: "https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?q=80&w=800&auto=format&fit=crop",
      videos: 18,
    },
     {
      id: 4,
      name: "Sophia Carter",
      cover: "https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?q=80&w=800&auto=format&fit=crop",
      videos: 18,
    },  
  ];

  return (
    <section id="trending" className="relative w-full bg-zinc-950 py-32 px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00AFF0]/10 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-medium text-zinc-300 tracking-[0.2em] uppercase">VIP Access Only</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight leading-[1.1]">
              Exclusive <span className="text-[#00AFF0] font-normal drop-shadow-[0_0_15px_rgba(0,175,240,0.3)]">Models</span>
            </h2>
            <p className="text-zinc-400 font-light text-lg md:text-xl leading-relaxed">
              Unlock the infinite doomscrolling experience. Akses konten eksklusif dalam kurs Rupiah dengan metode pembayaran lokal.
            </p>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {models.map((model) => (
            <div 
              key={model.id} 
              onClick={() => setSelectedModel(model)}
              className="group relative w-full aspect-[3/4] bg-zinc-900 border border-white/10 hover:border-[#00AFF0]/50 rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(0,175,240,0.2)] hover:-translate-y-2"
            >
              <img src={model.cover} alt={model.name} className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110" />
              
              {/* Half Blur Overay */}
              <div className="absolute inset-0 top-[40%] bg-zinc-950/40 backdrop-blur-md border-t border-white/10 flex flex-col items-center justify-start pt-12 transition-all duration-500 group-hover:backdrop-blur-lg z-10">
                <div className="bg-black/50 p-4 rounded-full mb-3 border border-white/10 shadow-[0_0_15px_rgba(0,175,240,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-6 h-6 text-[#00AFF0]" />
                </div>
                <span className="text-white font-semibold tracking-widest text-xs uppercase drop-shadow-md">Unlock Feed</span>
              </div>

              {/* Video Count */}
              <div className="absolute top-5 right-5 z-20">
                <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 text-zinc-300 text-[10px] uppercase tracking-wider font-medium">
                  <PlaySquare size={12} className="text-[#00AFF0]" />
                  {model.videos}
                </div>
              </div>

              {/* Name Info */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end z-20 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-2xl font-medium text-white leading-tight drop-shadow-md">{model.name}</h3>
                  <BadgeCheck className="w-5 h-5 text-[#00AFF0]" fill="currentColor" stroke="transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Panggil Modal Jika Model Dipilih */}
      {selectedModel && (
        <PremiumModal 
          model={selectedModel} 
          onClose={() => setSelectedModel(null)} 
        />
      )}
    </section>
  );
}