// import logo from "./logo.svg";
import "./App.css";
// import React from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";

import WeddingPage from "./pages/WeddingPage";
import NewbornPage from "./pages/NewbornPage";
import PortraitPage from "./pages/PortraitPage";
import FamilyPage from "./pages/FamilyPage";
import EngagementPage from "./pages/EngagementPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/GalleryPage" element={<GalleryPage />} />
        <Route path="/PricingPage" element={<PricingPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />

        <Route path="/WeddingPage" element={<WeddingPage />} />
        <Route path="/NewbornPage" element={<NewbornPage />} />
        <Route path="/FamilyPage" element={<FamilyPage />} />
        <Route path="/PortraitPage" element={<PortraitPage />} />
        <Route path="/Engagement" element={<EngagementPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
