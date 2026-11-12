// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X, User, ShoppingBag, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenLogin }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent">
                ACADEMY
              </span>
              <span className="block text-[10px] text-indigo-400 font-medium tracking-widest uppercase">
                Formazione & Abilità
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#corsi" className="text-slate-300 hover:text-indigo-400 transition-colors">Tutti i Corsi</a>
            <a href="#metodo" className="text-slate-300 hover:text-indigo-400 transition-colors">Il Metodo</a>
            <a href="#testimonianze" className="text-slate-300 hover:text-indigo-400 transition-colors">Storie di Successo</a>
            <a href="#faq" className="text-slate-300 hover:text-indigo-400 transition-colors">FAQ</a>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={onOpenLogin}
              className="flex items-center space-x-2 text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <User className="w-4 h-4 text-indigo-400" />
              <span>Accedi</span>
            </button>
            <a 
              href="#corsi"
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-indigo-600/25 transition-all transform hover:-translate-y-0.5"
            >
              Inizia Ora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <a href="#corsi" className="block text-slate-300 hover:text-white py-2 font-medium">Tutti i Corsi</a>
          <a href="#metodo" className="block text-slate-300 hover:text-white py-2 font-medium">Il Metodo</a>
          <a href="#testimonianze" className="block text-slate-300 hover:text-white py-2 font-medium">Storie di Successo</a>
          <a href="#faq" className="block text-slate-300 hover:text-white py-2 font-medium">FAQ</a>
          <div className="pt-4 flex flex-col space-y-2">
            <button onClick={onOpenLogin} className="w-full py-2.5 border border-slate-700 text-center rounded-xl font-medium text-slate-200">
              Accedi all'Area Membri
            </button>
            <a href="#corsi" className="w-full py-2.5 bg-indigo-600 text-center rounded-xl font-semibold text-white shadow-lg shadow-indigo-600/30">
              Esplora i Corsi
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
