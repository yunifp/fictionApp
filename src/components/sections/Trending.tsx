import { Button } from "../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";

export default function Trending() {
  const models = [
    {
      id: 1,
      name: "Isabella Rose",
      username: "@isabellarose",
      cover: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      likes: "124K",
      isOnline: true,
    },
    {
      id: 2,
      name: "Sophia Carter",
      username: "@sophiacrt",
      cover: "https://images.unsplash.com/photo-1529139574466-a303027c028c?q=80&w=800&auto=format&fit=crop",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      likes: "89K",
      isOnline: false,
    },
    {
      id: 3,
      name: "Mia Valentina",
      username: "@miavalentina",
      cover: "https://images.unsplash.com/photo-1515347619253-2bf5e31a896d?q=80&w=800&auto=format&fit=crop",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      likes: "210K",
      isOnline: true,
    },
    {
      id: 4,
      name: "Chloe Evans",
      username: "@chloee",
      cover: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
      likes: "56K",
      isOnline: true,
    },
  ];

  return (
    <section id="trending" className="w-full bg-zinc-950 py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            {/* FONT LIGHT: Disesuaikan agar tipis persis seperti di Hero */}
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide">
              Trending <span className="text-[#00AFF0] font-normal">Models</span>
            </h2>
            <p className="text-zinc-400 font-light text-lg max-w-xl">
              Discover the most popular creators right now. Get exclusive access to their private feeds and interact directly.
            </p>
          </div>
          {/* Tombol Outline Tipis */}
          <Button variant="outline" className="border-zinc-800 bg-transparent text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-full px-8 py-6 font-light transition-all">
            View All Models
          </Button>
        </div>

        {/* Grid Cards - Diubah ke rasio portrait (tinggi) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model) => (
            <div 
              key={model.id} 
              className="group relative w-full aspect-[3/4] bg-zinc-900 border border-white/5 rounded-[2rem] overflow-hidden cursor-pointer"
            >
              {/* Cover Image - Full Height */}
              <img 
                src={model.cover} 
                alt={model.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay dari bawah ke atas */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90"></div>
              
              {/* Online Indicator Badge (Posisi Kanan Atas) */}
              {model.isOnline && (
                <div className="absolute top-5 right-5 bg-black/40 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-wider font-semibold text-green-400 px-3 py-1.5 rounded-full flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  Live
                </div>
              )}

              {/* Card Body - Content Overlay di Bawah */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
                
                <div className="flex items-center gap-4">
                  {/* Avatar Profil */}
                  <Avatar className="w-14 h-14 border-2 border-white/20 shadow-xl">
                    <AvatarImage src={model.avatar} alt={model.name} className="object-cover" />
                    <AvatarFallback>{model.name.charAt(0)}</AvatarFallback>
                  </Avatar>

                  {/* Teks Info */}
                  <div className="flex flex-col flex-1">
                    <h3 className="text-xl font-normal text-white leading-tight">{model.name}</h3>
                    <p className="text-zinc-400 text-sm font-light">{model.username}</p>
                  </div>
                </div>

                {/* Footer Card: Likes & Action */}
                <div className="flex items-center justify-between mt-5 pt-5 border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-zinc-300 text-sm font-light">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-500">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span>{model.likes}</span>
                  </div>
                  
                  {/* Tombol Subscribe Kecil */}
                  <Button size="sm" className="bg-white/10 hover:bg-white/20 border border-white/5 text-white rounded-full px-5 h-8 text-xs font-normal backdrop-blur-md transition-all">
                    Subscribe
                  </Button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}