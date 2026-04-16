import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ShieldCheck, Lock, Mail } from "lucide-react";
import logoImage from "@/assets/logo.png";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulasi Login
    setTimeout(() => {
      navigate("/admin/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00AFF0]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="flex flex-col items-center mb-10 text-center">
          <img src={logoImage} className="w-40 mb-8" alt="Logo" />
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            <ShieldCheck size={14} className="text-[#00AFF0]" />
            <span className="text-[10px] font-medium text-zinc-300 tracking-[0.2em] uppercase">Security Area</span>
          </div>
          <h1 className="text-2xl font-light text-white tracking-tight">Access Control Panel</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#00AFF0] transition-colors" size={20} />
            <input 
              type="email" 
              placeholder="Admin Email"
              className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00AFF0]/50 focus:ring-1 focus:ring-[#00AFF0]/50 transition-all"
              required
            />
          </div>

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#00AFF0] transition-colors" size={20} />
            <input 
              type="password" 
              placeholder="Security Key"
              className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00AFF0]/50 focus:ring-1 focus:ring-[#00AFF0]/50 transition-all"
              required
            />
          </div>

          <Button 
            disabled={isLoading}
            className="w-full rounded-2xl !bg-[#00AFF0] hover:!bg-[#0099D1] !text-white py-7 text-lg font-medium transition-all duration-300 shadow-[0_0_30px_rgba(0,175,240,0.2)]"
          >
            {isLoading ? "Authenticating..." : "Authorize Access"}
          </Button>
        </form>

        <p className="text-center text-zinc-600 text-[10px] mt-8 uppercase tracking-[0.3em]">
          Unauthorized access is strictly prohibited
        </p>
      </div>
    </div>
  );
}