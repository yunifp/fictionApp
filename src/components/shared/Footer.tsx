import { Link } from "react-router-dom"; // Import Link
import { Mail, ShieldAlert, ArrowRight } from "lucide-react";
import logoImage from "@/assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Twitter (X)",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  // Konfigurasi Link Explore
  const exploreLinks = [
    { name: "Models", path: "/models" },
    { name: "All Categories", path: "/categories" },
    { name: "Join a Community", path: "/#join" },
  ];

  return (
    <footer className="w-full bg-zinc-950 border-t border-white/10 pt-20 pb-10 px-8 md:px-16 lg:px-24 relative overflow-hidden">
      
      {/* Efek Glow Tipis di Background */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00AFF0]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="flex flex-col gap-6">
            <Link to="/">
              <img 
                src={logoImage} 
                alt="Premium Content Logo" 
                className="w-36 h-12 object-contain" 
              />
            </Link>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              The most exclusive platform for premium private content. Unlock intimacy, support elite creators, and explore your deepest desires in a secure, discreet environment.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 w-fit">
              <ShieldAlert className="w-4 h-4 text-red-500" />
              <span className="text-xs font-medium text-zinc-300 tracking-widest uppercase">18+ Adults Only</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:pl-8">
            <h4 className="text-white font-medium text-lg tracking-wide mb-2">Explore</h4>
            {exploreLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="text-zinc-400 font-light text-sm hover:text-[#00AFF0] hover:translate-x-1 transition-all duration-300 w-fit"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium text-lg tracking-wide mb-2">Legal & Support</h4>
            {["Help Center & FAQ", "Terms of Service", "Privacy Policy", "Billing Support", "18 U.S.C. 2257 Record-Keeping"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-zinc-400 font-light text-sm hover:text-white hover:translate-x-1 transition-all duration-300 w-fit"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium text-lg tracking-wide mb-2">Stay Discreetly Updated</h4>
            <p className="text-zinc-400 font-light text-sm mb-2">
              Get notified about new elite models and exclusive VIP offers. No spam, total privacy.
            </p>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-[#00AFF0] transition-colors" />
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-zinc-900 border border-white/10 rounded-full py-3 pl-11 pr-12 text-sm text-white font-light focus:outline-none focus:border-[#00AFF0]/50 focus:bg-white/5 transition-all"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#00AFF0] hover:bg-[#0099D1] rounded-full text-white transition-all hover:scale-105">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
          <p className="text-zinc-500 font-light text-xs text-center md:text-left">
            &copy; {currentYear} Premium Platform. All rights reserved. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> Secure & Encrypted.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.href}
                aria-label={social.name}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#00AFF0] hover:border-[#00AFF0] transition-all duration-300 hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
}