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

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/weddings" element={<WeddingPage />} />
        <Route path="/newbornphotos" element={<NewbornPage />} />
        <Route path="/familyphotos" element={<FamilyPage />} />
        <Route path="/portraits" element={<PortraitPage />} />
        <Route path="/engagementphotos" element={<EngagementPage />} />

        {/* <Route path="/video" element={<VideoGrid />} /> */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
