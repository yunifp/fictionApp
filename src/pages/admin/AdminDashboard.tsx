import { Users, Eye, PlaySquare, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { name: "Total Models", value: "48", icon: Users, color: "text-blue-500" },
    { name: "Total Views", value: "1.2M", icon: Eye, color: "text-[#00AFF0]" },
    { name: "Total Videos", value: "2,450", icon: PlaySquare, color: "text-purple-500" },
    { name: "Subscription", value: "Rp 85M", icon: TrendingUp, color: "text-green-500" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-light text-white">System Overview</h1>
        <p className="text-zinc-500 text-sm mt-1 font-light">Welcome back, Yunif. Here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="p-6 bg-zinc-900 border border-white/5 rounded-[2rem] shadow-xl relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-500">
              <stat.icon size={120} />
            </div>
            <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <p className="text-zinc-500 text-sm font-light uppercase tracking-widest">{stat.name}</p>
            <h3 className="text-3xl font-medium text-white mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Placeholder untuk tabel model/konten terbaru */}
      <div className="bg-zinc-900 border border-white/5 rounded-[2rem] p-8 h-96 flex items-center justify-center">
          <p className="text-zinc-600 italic font-light">Recent Activity Table Placeholder</p>
      </div>
    </div>
  );
}