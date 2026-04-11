import { Link } from "react-router-dom";
import { 
  VenetianMask, Link as LinkIcon, Droplets, Lock, 
  Tent, Camera, Eye, Flame, Crown, HeartPulse, Wand2, Scissors, ArrowLeft 
} from "lucide-react";

export default function CategoriesPage() {
  const categories = [
    { name: "Cosplay", icon: VenetianMask, count: "1.2K", desc: "Anime, game, and fantasy roleplays." },
    { name: "BDSM", icon: LinkIcon, count: "850+", desc: "Bondage, discipline, dominance & submission." },
    { name: "Scat", icon: Droplets, count: "120", desc: "Niche and extreme fetishes." },
    { name: "Slave", icon: Lock, count: "430", desc: "Total obedience and master/slave dynamics." },
    { name: "Outdoor", icon: Tent, count: "3.1K", desc: "Public, nature, and risky encounters." },
    { name: "Exhibitionist", icon: Camera, count: "2.5K", desc: "Showing off in private and public spaces." },
    { name: "Voyeur", icon: Eye, count: "900+", desc: "Hidden cams and watching from afar." },
    { name: "Femdom", icon: Crown, count: "1.5K", desc: "Female dominance and worship." },
    { name: "Roleplay", icon: Wand2, count: "4.2K", desc: "Story-driven, imaginative scenarios." },
    { name: "Hardcore", icon: Flame, count: "5K+", desc: "Intense, raw, and uncut action." },
    { name: "Cuckold", icon: HeartPulse, count: "600+", desc: "Watching your partner with someone else." },
    { name: "Bizarre", icon: Scissors, count: "200+", desc: "The weirdest and most unusual desires." },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Navigation & Title */}
        <div className="mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#00AFF0] transition-colors mb-6 font-light text-sm">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-[1.2]">
            Explore <span className="text-[#00AFF0] font-normal drop-shadow-[0_0_15px_rgba(0,175,240,0.3)]">Fetish Categories</span>
          </h1>
          <p className="text-zinc-400 font-light mt-4 max-w-2xl text-lg">
            Dive into our vast collection of exclusive niches. Find the perfect elite models catering to your deepest and most specific desires.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link 
                key={index}
                to={`/categories/${category.name.toLowerCase()}`}
                className="group relative flex flex-col p-6 bg-zinc-900/50 border border-white/5 hover:border-[#00AFF0]/50 rounded-3xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:bg-zinc-900 hover:shadow-[0_0_30px_rgba(0,175,240,0.15)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Icon className="text-[#00AFF0] w-6 h-6" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-medium text-white mb-2">{category.name}</h3>
                <p className="text-zinc-500 text-sm font-light leading-relaxed mb-4 flex-1">
                  {category.desc}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5 group-hover:border-white/10 mt-auto">
                  <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                    {category.count} Models
                  </span>
                  <span className="text-[#00AFF0] text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}