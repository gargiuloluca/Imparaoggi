// src/components/Pricing.jsx
import React from 'react';
import { Check, Sparkles, Shield, Zap } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pass-speciale" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest bg-indigo-950/80 border border-indigo-500/30 px-4 py-1.5 rounded-full inline-block">
            Accesso Illimitato
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Scegli come entrare in Accademia
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Investi nella tua crescita con un pass completo o sblocca il singolo corso che fa al caso tuo.
          </p>
        </div>

        {/* Griglia Prezzi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Opzione 1: Abbonamento Annuale (89€) */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase">
                  Flessibile & Conveniente
                </span>
                <span className="text-sm text-slate-400">Prezzo Lancio</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Pass Annuale All-Inclusive</h3>
              <p className="text-slate-400 text-sm mb-6">Tutti i corsi attuali e futuri per 12 mesi interi.</p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-5xl sm:text-6xl font-black text-white">€89</span>
                <span className="text-slate-400 ml-2">/ anno</span>
              </div>

              <ul className="space-y-4 text-sm text-slate-300 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Accesso illimitato a <strong>tutti i corsi</strong> (Autodifesa, Cucina, Bimbi...)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Aggiornamenti gratuiti su ogni nuovo corso aggiunto</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Supporto diretto con i docenti</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => alert("Collegamento al checkout Stripe per il Pass Annuale a 89€")}
              className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-bold py-4 rounded-xl border border-slate-800 transition-all shadow-lg"
            >
              Attiva Abbonamento Annuale (89€)
            </button>
          </div>

          {/* Opzione 2: Lifetime Pass (159€) - In evidenza */}
          <div className="bg-gradient-to-b from-indigo-950/60 to-slate-950 border-2 border-indigo-500/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative transform lg:-translate-y-2">
            
            <div className="absolute -top-4 right-8 bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
              ⭐ La Scelta Più Amata
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="bg-violet-500/20 text-violet-300 border border-violet-500/30 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase">
                  Senza Scadenza
                </span>
                <span className="text-sm text-indigo-300">Unica Soluzione</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Pass Lifetime (A Vita)</h3>
              <p className="text-slate-300 text-sm mb-6">Paga una sola volta, accedi per sempre a tutto.</p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-5xl sm:text-6xl font-black text-white">€159</span>
                <span className="text-indigo-300 ml-2">/ per sempre</span>
              </div>

              <ul className="space-y-4 text-sm text-slate-200 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Tutti i vantaggi del Pass Annuale <strong>senza rinnovi</strong></span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Accesso a vita a ogni futuro aggiornamento e corso</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Attestato di partecipazione nominativo</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => alert("Collegamento al checkout Stripe per il Pass Lifetime a 159€")}
              className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-4 rounded-xl shadow-xl shadow-indigo-600/30 transition-all"
            >
              Sblocca l'Accademia a Vita (159€)
            </button>
          </div>

        </div>

        {/* Nota sui corsi singoli */}
        <div className="mt-16 text-center bg-slate-950/60 border border-slate-800 p-6 rounded-2xl max-w-2xl mx-auto">
          <p className="text-slate-300 text-sm">
            Preferisci acquistare un singolo corso specifico? <br />
            Puoi sbloccare qualsiasi corso della libreria qui sotto a soli <strong className="text-indigo-400 text-base">19,90€</strong> ciascuno.
          </p>
        </div>

      </div>
    </section>
  );
}
