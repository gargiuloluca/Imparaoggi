// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Method from './components/Method';
import Testimonials from './components/Testimonials';
import Courses from './components/Courses';
import Footer from './components/Footer';
import UserDashboard from './components/UserDashboard';

export default function App() {
  // Stato per simulare se l'utente ha fatto il login o meno
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userSubscriptionType, setUserSubscriptionType] = useState('lifetime'); // 'lifetime', 'annual', 'single'

  const handleOpenLogin = () => {
    // Per ora simuliamo l'accesso diretto alla Dashboard con un pass Lifetime
    setIsLoggedIn(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Se l'utente è loggato, mostra la sua Area Riservata (Dashboard)
  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-950 font-sans selection:bg-indigo-500 selection:text-white">
        <Navbar onOpenLogin={handleOpenLogin} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <UserDashboard userType={userSubscriptionType} onLogout={handleLogout} />
        <Footer />
      </div>
    );
  }

  // Altrimenti mostra la Landing Page di vendita persuasiva
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar onOpenLogin={handleOpenLogin} isLoggedIn={isLoggedIn} />
      <Hero />
      <Pricing />
      <Method />
      <Testimonials />
      <Courses />
      <Footer />
    </div>
  );
}
