// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Home from './pages/Home';
import SobreMi from '../src/pages/SobreMi'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DondeEstamos from './components/DondeEstamos';
import './App.css';  // Importamos el CSS que crearemos para el layout
import Cursos from './components/Cursos';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="content-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<SobreMi />} />
          <Route path="/donde-estamos" element={<DondeEstamos />} />
          <Route path="/cursos" element={<Cursos />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
