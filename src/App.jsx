// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Method from './components/Method';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  const handleOpenLogin = () => {
    alert("Qui si aprirà la schermata di Login o l'Area Riservata collegata a Supabase/Firebase!");
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar onOpenLogin={handleOpenLogin} />
      <Hero />
      <Courses />
      <Method />
      <Testimonials />
      <Footer />
    </div>
  );
}
