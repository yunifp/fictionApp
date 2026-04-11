import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

export default function ClientLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 w-full relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}