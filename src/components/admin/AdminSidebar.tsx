import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, Users, FolderTree, Settings, 
  X, LogOut, PlusCircle 
} from "lucide-react";
import logoImage from "@/assets/logo.png";

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Models", path: "/admin/models", icon: Users },
    { name: "Categories", path: "/admin/categories", icon: FolderTree },
    { name: "Upload Content", path: "/admin/upload", icon: PlusCircle },
    { name: "Settings", path: "/admin/settings", icon: Settings },
  ];

  return (
    <>
      {/* Sidebar Desktop (Hidden on Mobile) */}
      <aside className="hidden lg:flex w-72 flex-col border-r border-white/10 bg-zinc-900/50 backdrop-blur-xl fixed h-full z-40">
        <div className="p-8">
          <img src={logoImage} className="w-32 h-auto object-contain" alt="Admin Logo" />
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? "bg-[#00AFF0] text-white shadow-[0_0_20px_rgba(0,175,240,0.3)]" 
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/10 mt-auto">
          <button className="flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-500/10 rounded-xl w-full transition-all">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay (Tampil jika isOpen true) */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop pemburam */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
          
          <aside className="absolute inset-y-0 left-0 w-72 bg-zinc-950 border-r border-white/10 p-6 flex flex-col animate-in slide-in-from-left">
            <div className="flex justify-between items-center mb-10">
              <img src={logoImage} className="w-28 h-auto object-contain" alt="Admin Logo" />
              <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex-1 space-y-2 overflow-y-auto">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                      isActive 
                        ? "bg-[#00AFF0] text-white" 
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="pt-6 border-t border-white/10 mt-auto">
              <button className="flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-500/10 rounded-xl w-full transition-all">
                <LogOut size={20} />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}