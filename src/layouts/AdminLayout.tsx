import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminNavbar from "../components/admin/AdminNavbar";

export default function AdminLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      
      {/* Komponen Sidebar Terpisah */}
      <AdminSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      {/* Area Konten Utama yang bergeser di Desktop */}
      <div className="flex-1 lg:ml-72 flex flex-col min-w-0">
        
        {/* Komponen Navbar Terpisah */}
        <AdminNavbar 
          onMenuClick={() => setSidebarOpen(true)} 
        />

        {/* Render Halaman Admin (Dashboard, Models, dll) */}
        <main className="p-6 md:p-8 flex-1">
          <Outlet />
        </main>
        
      </div>
    </div>
  );
}