// src/components/Footer.jsx
import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Colonna Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-lg font-black tracking-wider text-white">ACADEMY</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              La piattaforma di formazione d'eccellenza per lo sviluppo di abilità pratiche, cucina, sicurezza e crescita familiare.
            </p>
          </div>

          {/* Link Corsi */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Corsi Principali</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#corsi" className="hover:text-indigo-400 transition-colors">Autodifesa Consapevole</a></li>
              <li><a href="#corsi" className="hover:text-indigo-400 transition-colors">Cucina d'Autore</a></li>
              <li><a href="#corsi" className="hover:text-indigo-400 transition-colors">Attivazione Cerebrale Bimbi</a></li>
              <li><a href="#corsi" className="hover:text-indigo-400 transition-colors">Disegno & Manualità</a></li>
            </ul>
          </div>

          {/* Link Utili */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Accademia</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#metodo" className="hover:text-indigo-400 transition-colors">Il Metodo</a></li>
              <li><a href="#testimonianze" className="hover:text-indigo-400 transition-colors">Storie di Successo</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition-colors">Domande Frequenti (FAQ)</a></li>
              <li><button onClick={() => alert('Area Login')} className="hover:text-indigo-400 transition-colors">Area Membri</button></li>
            </ul>
          </div>

          {/* Note Legali / Pagamenti */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Sicurezza & Pagamenti</h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Pagamenti protetti e crittografati tramite Stripe e Lemon Squeezy. Accesso immediato dopo l'acquisto.
            </p>
            <div className="flex space-x-2 text-xs font-semibold text-slate-300">
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Stripe</span>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">SSL Secure</span>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs">
          <p>© {new Date().getFullYear()} Academy. Tutti i diritti riservati.</p>
          <p className="flex items-center space-x-1 mt-4 sm:mt-0 text-slate-500">
            <span>Creato con passione per l'eccellenza</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
