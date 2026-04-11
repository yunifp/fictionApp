import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import { Button } from "../../components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/logo.png"; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Models", path: "/models" },
    { name: "Categories", path: "/categories" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-8 flex items-center justify-between ${
          isScrolled 
            ? "py-4 bg-zinc-950/70 backdrop-blur-lg border-b border-white/10" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
          <Link to="/">
            <img 
              src={logoImage} 
              alt="Premium Content Logo" 
              className="w-32 h-10 md:w-40 md:h-14 object-contain" 
            />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="px-5 py-2 rounded-full text-sm font-medium text-white/90 border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
            >
              {item.name}
            </Link>
          ))}
          <Button className="ml-2 rounded-full bg-white text-black hover:bg-gray-200 px-6 font-semibold transition-transform hover:scale-105">
            Join Now
          </Button>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button 
          className="md:hidden text-white hover:text-[#00AFF0] transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Sidebar (Drawer) */}
      <div 
        className={`fixed inset-0 z-[60] bg-zinc-950/95 backdrop-blur-xl transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          {/* Header Sidebar */}
          <div className="flex justify-between items-center mb-12">
            <img 
              src={logoImage} 
              alt="Premium Content Logo" 
              className="w-32 h-10 object-contain" 
            />
            <button 
              className="text-white hover:text-[#00AFF0] transition-colors" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={28} />
            </button>
          </div>

          {/* Links Sidebar */}
          <div className="flex flex-col gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-light text-zinc-300 hover:text-white hover:translate-x-2 transition-all"
              >
                {item.name}
              </Link>
            ))}
            <Button className="mt-8 rounded-full !bg-[#00AFF0] hover:!bg-[#0099D1] !text-white py-6 text-lg font-medium tracking-wide w-full border-0">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}