import React from "react";
import { Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import TentangSaya from "./pages/TentangSaya";
import NotFound from "./pages/NotFound";
import Kontak from "./pages/Kontak";
import Navigasi from "../components/Navigasi";
import DetailArtikel from "./pages/DetailArtikel";

function App() {
  return (
    <div>
      <Navigasi />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang" element={<TentangSaya />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/artikel/:id" element={<DetailArtikel />} />
      </Routes>
    </div>
  );
}

export default App;
