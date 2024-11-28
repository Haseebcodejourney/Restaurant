import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Header from './components/Header';
import Footer from "./components/Footer";
import MenuPage from "./pages/MenuPage";
import LocatePage from "./pages/LocatePage";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/locate" element={<LocatePage />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
