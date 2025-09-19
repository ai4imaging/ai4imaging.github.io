import './index.css'
import 'primeicons/primeicons.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/navbar';
import Publication from './pages/Publication';
import Team from './pages/Team';
import Teaching from './pages/Teaching';
import Contact from './pages/Contact';
import Direction from './pages/Direction';
import Application from './pages/Application';
import Home from './pages/Home';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/direction" element={<Direction />} />
        <Route path="/application" element={<Application />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/team" element={<Team />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);