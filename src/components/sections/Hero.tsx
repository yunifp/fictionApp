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
      <div className="relative z-10 max-w-3xl">
        {/* FONT DIUBAH: font-normal, teks diperkecil sedikit agar pas seperti di gambar */}
        <h1 className="text-4xl md:text-5xl font-normal text-white leading-[1.3] mb-6 opacity-0 animate-fade-in-up">
          Unveil the Unseen. <br />
          <span className="text-[#00AFF0]">Premium Access</span> <br />
          to Exclusive Private Content.
        </h1>
        
        {/* FONT DIUBAH: text-lg agar tidak terlalu tebal/besar */}
        <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed opacity-0 animate-fade-in-up delay-100">
          Unlock intimacy like never before. Dive into a discreet world where elite models share their private content directly with you. Experience premium, uncensored interaction today.
        </p>

        {/* Button & Avatars Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 opacity-0 animate-fade-in-up delay-200">
          {/* Tombol disesuaikan proporsinya */}
          <Button className="rounded-full bg-[#00AFF0] hover:bg-[#0099D1] text-white px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105">
            Pick Your Fetish
          </Button>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <Avatar key={i} className="w-12 h-12 border-2 border-zinc-900 object-cover">
                  <AvatarImage src={src} alt={`Model ${i + 1}`} />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="flex flex-col">
              {/* Teks angka dibuat font-medium (tidak terlalu bold) */}
              <span className="text-white font-medium text-lg leading-none mb-1">5K+</span>
              <span className="text-gray-400 text-sm">Fetish Models</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}