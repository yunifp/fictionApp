/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams, useNavigate } from "react-router-dom";
import ModelCard from "../components/shared/ModelCard";
import { ArrowLeft, Heart, MessageCircle, Share2, BadgeCheck, Lock } from "lucide-react";

export default function ModelDoomScrollPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Data Dummy Feed (Bisa berupa Video URL nantinya)
  const feedItems = [
    { id: 101, url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop", likes: "12K", comments: "428" },
    { id: 102, url: "https://images.unsplash.com/photo-1529139574466-a303027c028c?q=80&w=1000&auto=format&fit=crop", likes: "8.5K", comments: "156" },
    { id: 103, url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop", likes: "20K", comments: "1.2K" }
  ];

  const recommendedModels = [
    { id: 2, name: "Sophia Carter", cover: "https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?q=80&w=800&fit=crop", videos: 18, isLocked: true },
    { id: 3, name: "Mia Valentina", cover: "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=800&fit=crop", videos: 156, isLocked: true },
    { id: 4, name: "Chloe Evans", cover: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=800&fit=crop", videos: 24, isLocked: true },
    { id: 5, name: "Emma White", cover: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop", videos: 88, isLocked: true },
  ];

  return (
    <div className="flex h-[100dvh] bg-black overflow-hidden pt-16 md:pt-20">
      
      {/* AREA DOOMSCROLLING (Rasio 3 dari 5 = 60%) */}
      <div className="relative w-full lg:w-[60%] h-full flex flex-col items-center bg-zinc-950 border-r border-white/5">
        
        {/* Navigasi Back */}
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-50 p-3 bg-black/40 backdrop-blur-xl rounded-full text-white hover:bg-[#00AFF0] transition-all border border-white/10 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </button>

        {/* FEED CONTAINER: Trik snap-scroll & hidden scrollbar */}
        <div className="w-full h-full overflow-y-scroll snap-y snap-mandatory hide-scrollbar">
          {feedItems.map((item) => (
            <div 
              key={item.id} 
              className="relative w-full h-full snap-start snap-always flex items-center justify-center bg-black"
            >
              {/* Media Content */}
              <img 
                src={item.url} 
                className="w-full h-full object-cover opacity-90"
                alt="Premium Content"
              />
              
              {/* Overlay Vignette: Lebih dalam agar UI Standout */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 pointer-events-none"></div>

              {/* Sidebar Action (Like, Comment, etc) */}
              <div className="absolute bottom-12 right-6 flex flex-col items-center gap-7 z-20">
                <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
                  <div className="p-3.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-red-500/20 transition-all">
                    <Heart size={26} className="text-white group-hover:text-red-500 group-hover:fill-red-500 transition-all" />
                  </div>
                  <span className="text-[11px] font-medium text-white drop-shadow-md">{item.likes}</span>
                </div>

                <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
                  <div className="p-3.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-[#00AFF0]/20 transition-all">
                    <MessageCircle size={26} className="text-white group-hover:text-[#00AFF0] transition-all" />
                  </div>
                  <span className="text-[11px] font-medium text-white drop-shadow-md">{item.comments}</span>
                </div>

                <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
                  <div className="p-3.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-white/20 transition-all">
                    <Share2 size={26} className="text-white transition-all" />
                  </div>
                  <span className="text-[11px] font-medium text-white drop-shadow-md">Share</span>
                </div>
              </div>

              {/* Bottom Info: Nama & Deskripsi */}
              <div className="absolute bottom-10 left-8 right-24 z-20">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-2xl font-semibold text-white tracking-tight drop-shadow-lg">Isabella Rose</h3>
                  <BadgeCheck className="w-6 h-6 text-[#00AFF0]" fill="currentColor" stroke="transparent" />
                </div>
                <p className="text-zinc-200 text-sm font-light leading-relaxed drop-shadow-md max-w-md">
                  Midnight vibes in the city. Access my full private vault to see what happens next... 😈 #exclusive #premium
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AREA REKOMENDASI (Rasio 2 dari 5 = 40%) */}
      <div className="hidden lg:flex w-[40%] h-full bg-zinc-950 flex-col overflow-y-auto hide-scrollbar border-l border-white/5">
        <div className="p-10 pt-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-light text-white tracking-tight">
                Recommended <span className="text-[#00AFF0] font-normal">For You</span>
              </h2>
              <p className="text-zinc-500 text-xs mt-1 font-light tracking-wide">Handpicked elite creators you might enjoy.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-5 xl:gap-8">
            {recommendedModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>

          {/* Banner Promo Kecil di Sidebar */}
          <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-[#00AFF0]/20 to-zinc-900 border border-[#00AFF0]/30 relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-white font-medium mb-1">Weekly Pass</h4>
              <p className="text-zinc-400 text-[10px] leading-relaxed mb-4">Get 7 days of unlimited access to all creators for just $4.99</p>
              <button className="text-[10px] font-bold text-[#00AFF0] uppercase tracking-widest group-hover:underline">Upgrade Now &rarr;</button>
            </div>
            <Lock className="absolute -right-4 -bottom-4 w-20 h-20 text-[#00AFF0]/10 -rotate-12" />
          </div>
        </div>
      </div>

    </div>
  );
}