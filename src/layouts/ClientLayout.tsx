import type { ReactNode } from "react";
import Navbar from "../components/shared/Navbar";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div className="relative min-h-screen bg-zinc-950 font-sans">
      <Navbar />
      <main className="w-full">{children}</main>
    </div>
  );
}