import { Button } from "../../components/ui/button";

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 flex items-center justify-between px-8 py-6">
      {/* Logo */}
      <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#00AFF0]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
        </svg>
        <span>LogoName</span>
      </div>

      {/* Nav Links - Glassmorphism Effect */}
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