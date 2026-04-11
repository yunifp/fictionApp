import { Button } from "../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";

export default function Hero() {
  // Dummy data avatar dari Unsplash
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
  ];

  return (
    <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-16 max-w-3xl">
      <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
        Unlock Private Content and Join an Exclusive Community.
      </h1>
      
      <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
        Chat with top models, request exclusive content, and enjoy premium interactive experiences.
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <Button className="rounded-full bg-[#00AFF0] hover:bg-[#0099D1] text-white px-8 py-6 text-lg font-semibold">
          Join Now
        </Button>

        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <Avatar key={i} className="w-12 h-12 border-2 border-zinc-800">
                <AvatarImage src={src} alt={`Model ${i + 1}`} />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg leading-none">3MLN+</span>
            <span className="text-gray-400 text-sm">Unique Models</span>
          </div>
        </div>
      </div>
    </div>
  );
}