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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;