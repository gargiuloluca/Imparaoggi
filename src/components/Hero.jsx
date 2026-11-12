// src/components/Hero.jsx
import React from 'react';
import { ShieldCheck, Award, Star, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-24 lg:pt-20 lg:pb-32">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy Persuasiva */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Badge Superiore */}
            <div className="inline-flex items-center space-x-2 bg-indigo-950/80 border border-indigo-500/30 px-4 py-2 rounded-full text-indigo-300 text-xs sm:text-sm font-medium shadow-inner">
              <Award className="w-4 h-4 text-indigo-400" />
              <span>La Piattaforma d'Eccellenza per lo Sviluppo Personale e Familiare</span>
            </div>

            {/* Titolo Principale ad Alto Impatto */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Impara le competenze che <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-pink-400 bg-clip-text text-transparent">cambiano la vita</span>.
            </h1>

            {/* Sottotitolo Persuasivo */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Dall'autodifesa consapevole alla cucina d'autore, dal disegno creativo ai giochi e all'attivazione cerebrale per i più piccoli. Corsi pratici guidati dai migliori esperti per tutta la famiglia.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#corsi"
                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Esplora i Corsi</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#metodo"
                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold px-6 py-4 rounded-2xl transition-all"
              >
                <Play className="w-4 h-4 text-indigo-400 fill-indigo-400" />
                <span>Scopri il Metodo</span>
              </a>
            </div>

            {/* Trust Indicators (Garanzie) */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Accesso a Vita</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Esperti Certificati</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Garanzia 100%</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Card / Anteprima Accademia */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Box decorativo principale */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-indigo-950/50 backdrop-blur-xl relative z-10 space-y-6">
                
                <div className="flex items-center justify-between">
                  <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                    Offerta Lancio
                  </span>
                  <div className="flex items-center space-x-1 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="text-sm font-bold text-white">4.9 / 5.0</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Tutti i Corsi in un Unico Abbonamento Pass</h3>
                  <p className="text-sm text-slate-400">Accedi illimitatamente a tutte le categorie: autodifesa, cucina, crescita e stimolazione infantile.</p>
                </div>

                {/* Mini lista categorie incluse */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                    <span className="text-sm font-medium text-slate-200">🛡️ Autodifesa Pratica & Sicurezza</span>
                    <span className="text-xs text-indigo-400 font-semibold">Incluso</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                    <span className="text-sm font-medium text-slate-200">🍳 Cucina d'Autore & Tradizione</span>
                    <span className="text-xs text-indigo-400 font-semibold">Incluso</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                    <span className="text-sm font-medium text-slate-200">🧠 Attivazione Cerebrale Bimbi</span>
                    <span className="text-xs text-indigo-400 font-semibold">Incluso</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a 
                    href="#corsi"
                    className="block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-600/30"
                  >
                    Sblocca l'Accademia Completa
                  </a>
                </div>

              </div>

              {/* Elemento decorativo flotting */}
              <div className="absolute -bottom-6 -left-6 bg-violet-600 text-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 z-20 hidden sm:flex border border-violet-400/30">
                <ShieldCheck className="w-8 h-8 text-white" />
                <div>
                  <p className="text-xs font-medium text-violet-200">Oltre 1.500 Studenti</p>
                  <p className="text-sm font-bold">Attivi in tutta Italia</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
