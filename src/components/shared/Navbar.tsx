import { Button } from "../../components/ui/button";
import logoImage from "@/assets/logo.png"; 

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 flex items-center justify-between px-8 py-6">
      <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
        <img 
          src={logoImage} 
          alt="Premium Content Logo" 
          className="w-40 h-14 object-contain" 
        />
      </div>
      <div className="hidden md:flex items-center gap-3">
        {["Models", "Offers", "Trending", "Exclusive"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-5 py-2 rounded-full text-sm font-medium text-white/90 border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
          >
            {item}
          </a>
        ))}
        <Button className="ml-2 rounded-full bg-white text-black hover:bg-gray-200 px-6 font-semibold">
          Join Now
        </Button>
      </div>
    </nav>
  );
}