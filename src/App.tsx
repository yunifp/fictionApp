import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientLayout from "./layouts/ClientLayout";
import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage";
import ModelsPage from "./pages/ModelsPage"; // <--- Import
import ModelDoomScrollPage from "./pages/ModelDoomScrollPage"; // <--- Import
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/AdminDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="models" element={<ModelsPage />} />
          <Route path="models/:id" element={<ModelDoomScrollPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}