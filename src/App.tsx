import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientLayout from "./layouts/ClientLayout";
import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage";
import ModelsPage from "./pages/ModelsPage"; // <--- Import
import ModelDoomScrollPage from "./pages/ModelDoomScrollPage"; // <--- Import

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="models" element={<ModelsPage />} /> 
          <Route path="models/:id" element={<ModelDoomScrollPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}