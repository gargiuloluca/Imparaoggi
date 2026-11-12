// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Method from './components/Method';
import GuidePreview from './components/GuidePreview';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Courses from './components/Courses';
import Footer from './components/Footer';
import UserDashboard from './components/UserDashboard';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userSubscriptionType, setUserSubscriptionType] = useState('lifetime');

  const handleOpenLogin = () => {
    setIsLoggedIn(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-950 font-sans selection:bg-indigo-500 selection:text-white">
        <Navbar onOpenLogin={handleOpenLogin} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <UserDashboard userType={userSubscriptionType} onLogout={handleLogout} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar onOpenLogin={handleOpenLogin} isLoggedIn={isLoggedIn} />
      <Hero />
      <Pricing />
      <Method />
      <GuidePreview />
      <Testimonials />
      <FAQ />
      <Courses />
      <Footer />
    </div>
  );
}
