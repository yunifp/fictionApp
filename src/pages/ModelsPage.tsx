import ModelCard from "../components/shared/ModelCard";
import { Flame } from "lucide-react";

export default function ModelsPage() {
  // Data dummy (nantinya Anda ambil dari API/Backend)
  const models = [
    { id: 1, name: "Isabella Rose", cover: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&fit=crop", videos: 42, isLocked: true },
    { id: 2, name: "Sophia Carter", cover: "https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?q=80&w=800&fit=crop", videos: 18, isLocked: true },
    { id: 3, name: "Mia Valentina", cover: "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=800&fit=crop", videos: 156, isLocked: true },
    { id: 4, name: "Chloe Evans", cover: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=800&fit=crop", videos: 24, isLocked: true },
    { id: 5, name: "Emma White", cover: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&fit=crop", videos: 88, isLocked: true },
    { id: 6, name: "Olivia Fox", cover: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&fit=crop", videos: 12, isLocked: true },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            <Flame className="w-4 h-4 text-[#00AFF0]" />
            <span className="text-xs font-medium text-zinc-300 tracking-[0.2em] uppercase">All Creators</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Discover <span className="text-[#00AFF0] font-normal">Elite Models</span>
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
}