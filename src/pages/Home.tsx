import ClientLayout from "../layouts/ClientLayout";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <ClientLayout>
      {/* Background Image Wrapper */}
      <div 
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=2575&auto=format&fit=crop')" 
        }}
      >
        {/* Overlay Gradients: Gelap di kiri untuk teks, memudar di kanan */}
        <div className="absolute inset-0 bg-zinc-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-transparent"></div>
        
        {/* Konten Hero */}
        <Hero />
      </div>
    </ClientLayout>
  );
}