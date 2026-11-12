// src/components/Hero.jsx
import React from 'react';
import { ShieldCheck, Award, Star, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-white pt-16 pb-28 lg:pt-24 lg:pb-36">
      
      {/* Sfumature di sfondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge Superiore */}
        <div className="inline-flex items-center space-x-2 bg-indigo-950/80 border border-indigo-500/30 px-5 py-2 rounded-full text-indigo-300 text-xs sm:text-sm font-medium shadow-inner mb-8">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>La Nuova Era della Formazione Pratica per la Famiglia</span>
        </div>

        {/* Titolo Principale Persuasivo */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.1] mb-8">
          Non insegniamo teoria. <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-pink-400 bg-clip-text text-transparent">
            Diamo valore reale alla tua vita.
          </span>
        </h1>

        {/* Sottotitolo Emozionale */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-12">
          Proteggi chi ami, porta l'eccellenza in cucina, stimola la mente dei tuoi bambini e impara nuove abilità con i corsi guidati dai migliori professionisti italiani.
        </p>

        {/* Pulsanti Call To Action Principali */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5 mb-16">
          <a 
            href="#pass-speciale"
            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold px-8.5 py-4.5 rounded-2xl shadow-xl shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5 text-base"
          >
            <span>Sblocca l'Accademia Completa</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#corsi"
            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold px-7 py-4.5 rounded-2xl transition-all text-base"
          >
            <span>Scopri i Corsi Singoli (19,90€)</span>
          </a>
        </div>

        {/* Garanzie in evidenza */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 border-t border-slate-900 text-slate-400 text-sm">
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Accesso immediato 24/7</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Esperti Certificati</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Soddisfatti o Rimborsati</span>
          </div>
        </div>

      </div>
    </div>
  );
}
