import { Button } from "../../components/ui/button";

export default function Categories() {
  // Daftar kategori (bisa Anda sesuaikan emoji dan namanya)
  const categories = [
    { name: "Cosplay", emoji: "🎭" },
    { name: "BDSM", emoji: "⛓️" },
    { name: "Foot Fetish", emoji: "👣" },
    { name: "MILF", emoji: "👩‍🦰" },
    { name: "Amateur", emoji: "📸" },
    { name: "Tattoos", emoji: "🎨" },
    { name: "Asian", emoji: "🌏" },
    { name: "Ebony", emoji: "🖤" },
    { name: "Latina", emoji: "💃" },
    { name: "Roleplay", emoji: "🎬" },
    { name: "Lingerie", emoji: "👙" },
    { name: "Couples", emoji: "👩‍❤️‍👨" },
  ];

  return (
    <section id="categories" className="w-full bg-zinc-950 py-24 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Kolom Kiri: Copywriting */}
        <div className="flex-1 text-left">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide leading-[1.2]">
            Find Your Exclusive <br />
            <span className="text-[#00AFF0] font-normal">Fetish Content.</span>
          </h2>
          <p className="text-zinc-400 font-light text-lg mb-10 max-w-lg leading-relaxed">
            Discover a wide range of exclusive content from our elite models. Subscribe to your favorites and enjoy private, high-quality media tailored exactly to your deepest desires.
          </p>
          
          <Button className="rounded-full !bg-[#00AFF0] hover:!bg-[#0099D1] !text-white px-8 py-6 text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 border-0">
            Explore All Categories
          </Button>
        </div>

        {/* Kolom Kanan: Masonry / Flex Wrap Badges */}
        <div className="flex-[1.5] flex flex-wrap gap-4 justify-start lg:justify-end">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-[#00AFF0]/50 hover:bg-zinc-800/80 rounded-full px-6 py-3 cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                {category.emoji}
              </span>
              <span className="text-zinc-200 font-light tracking-wide group-hover:text-white transition-colors">
                {category.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}