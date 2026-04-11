import { Button } from "../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";

export default function Hero() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
  ];

  return (
    <section 
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center px-8 md:px-16"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=2575&auto=format&fit=crop')" 
      }}
    >
      {/* Layer Overlay Gradients */}
      <div className="absolute inset-0 bg-zinc-950/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-transparent"></div>

      {/* Konten Hero */}
      <div className="relative z-10 max-w-4xl">
        
        {/* FONT LIGHT: Dibuat tipis dan lebar sesuai referensi gambar */}
        <h1 className="text-5xl md:text-6xl font-light text-white leading-[1.2] mb-6 opacity-0 animate-fade-in-up tracking-wide">
          Unveil the Unseen. <br />
          <span className="text-[#00AFF0] font-normal">Premium Access</span> <br />
          to Exclusive Private Content.
        </h1>
        
        {/* PARAGRAF TIPIS */}
        <p className="text-lg text-gray-300 font-light mb-12 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up delay-100">
          Unlock intimacy like never before. Dive into a discreet world where elite models share their private content directly with you. Experience premium, uncensored interaction today.
        </p>

        {/* Button & Avatars Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 opacity-0 animate-fade-in-up delay-200">
          
          {/* FIX BUTTON PUTIH: Gunakan !bg-[#00AFF0] agar menang dari dark mode Shadcn */}
          <Button className="rounded-full !bg-[#00AFF0] hover:!bg-[#0099D1] !text-white px-10 py-7 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 border-0">
            Choose Your Fetish
          </Button>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <Avatar key={i} className="w-14 h-14 border-2 border-zinc-900 object-cover">
                  <AvatarImage src={src} alt={`Model ${i + 1}`} />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-white font-medium text-xl leading-none mb-1">5K+</span>
              <span className="text-gray-400 font-light text-sm">Fetish Models</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}