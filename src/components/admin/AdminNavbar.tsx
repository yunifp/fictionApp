import { Menu, ShieldCheck } from "lucide-react";

interface AdminNavbarProps {
  onMenuClick: () => void;
}

export default function AdminNavbar({ onMenuClick }: AdminNavbarProps) {
  return (
    <header className="h-20 border-b border-white/10 bg-zinc-950/50 backdrop-blur-md flex items-center justify-between px-6 lg:px-8 sticky top-0 z-30">
      {/* Hamburger Menu (Mobile Only) */}
      <button 
        onClick={onMenuClick} 
        className="lg:hidden text-zinc-400 hover:text-white transition-colors"
      >
        <Menu size={24} />
      </button>

      {/* Admin Label (Desktop Only) */}
      <div className="hidden lg:flex items-center gap-2 text-zinc-400">
        <ShieldCheck size={18} className="text-[#00AFF0]" />
        <span className="text-sm font-light tracking-widest uppercase">Admin Panel Control</span>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-4 ml-auto lg:ml-0">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-white">Yunif Putra</p>
          <p className="text-[10px] text-[#00AFF0] uppercase tracking-tighter">Super Admin</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-[#00AFF0] font-bold shadow-[0_0_15px_rgba(0,175,240,0.2)]">
          Y
        </div>
      </div>
    </header>
  );
}