import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import HumansPage from './pages/HumansPage';
import AnimalsPage from './pages/AnimalsPage';
import PlantsPage from './pages/PlantsPage';
import HydrogenWater from './pages/HydrogenWater';
import BC1000Page from './pages/1000BC';
import BiodynamicOilPage from './pages/BiodynamicOil';
import BiologicalOliveOilPage from './pages/BiologicalOliveOil';
import OrganicBiodynamicWinePage from './pages/OrganicBiodynamicWine';
import SupplementsPage from './pages/SupplementsPage';
import HeadquartersPage from './pages/HeadquartersPage';
import FoodSupplementsPage from './pages/FoodSupplements';
import './i18n/i18n';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/humans" element={<HumansPage />} />
          <Route path="/animals" element={<AnimalsPage />} />
          <Route path="/plants" element={<PlantsPage />} />
          <Route path="/hydrogen-water" element={<HydrogenWater />} />
          <Route path="/1000bc" element={<BC1000Page />} />
          <Route path="/biodynamic-oil" element={<BiodynamicOilPage />} />
          <Route path="/biological-olive-oil" element={<BiologicalOliveOilPage />} />
          <Route path="/organic-biodynamic-wine" element={<OrganicBiodynamicWinePage />} />
          <Route path="/supplements" element={<SupplementsPage />} />
          <Route path="/headquarters" element={<HeadquartersPage />} />
          <Route path="/food_supplements" element={<FoodSupplementsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;