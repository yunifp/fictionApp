import { useNavigate } from "react-router-dom";
import { BadgeCheck, Lock, PlaySquare } from "lucide-react";

interface ModelCardProps {
  model: {
    id: string | number;
    name: string;
    cover: string;
    videos: number;
    isLocked?: boolean;
  };
}

export default function ModelCard({ model }: ModelCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/models/${model.id}`)}
      className="group relative w-full aspect-[3/4] bg-zinc-900 border border-white/10 hover:border-[#00AFF0]/50 rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(0,175,240,0.2)] hover:-translate-y-2 flex-shrink-0"
    >
      <img 
        src={model.cover} 
        alt={model.name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
      />
      
      {/* Efek Half-Blur jika terkunci */}
      {model.isLocked && (
        <div className="absolute inset-0 top-[40%] bg-zinc-950/40 backdrop-blur-md border-t border-white/10 flex flex-col items-center justify-start pt-8 transition-all duration-500 group-hover:backdrop-blur-lg z-10">
          <div className="bg-black/50 p-3 md:p-4 rounded-full mb-3 border border-white/10 shadow-[0_0_15px_rgba(0,175,240,0.3)] group-hover:scale-110 transition-transform duration-300">
            <Lock className="w-5 h-5 md:w-6 md:h-6 text-[#00AFF0]" />
          </div>
          <span className="text-white font-semibold tracking-widest text-[10px] md:text-xs uppercase drop-shadow-md">Unlock Feed</span>
        </div>
      )}

      {/* Top Badges (Video Count) */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-black/50 backdrop-blur-md px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 text-zinc-300 text-[10px] uppercase tracking-wider font-medium">
          <PlaySquare size={12} className="text-[#00AFF0]" />
          {model.videos}
        </div>
      </div>

      {/* Card Body - Name */}
      <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 flex flex-col justify-end z-20 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent">
        <div className="flex items-center gap-1.5">
          <h3 className="text-xl md:text-2xl font-medium text-white leading-tight drop-shadow-md">{model.name}</h3>
          <BadgeCheck className="w-4 h-4 md:w-5 md:h-5 text-[#00AFF0]" fill="currentColor" stroke="transparent" />
        </div>
      </div>
    </div>
  );
}