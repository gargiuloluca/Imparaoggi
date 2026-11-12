// src/components/Method.jsx
import React from 'react';
import { UserCheck, BookOpenCheck, Trophy, Sparkles } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Scegli il Tuo Percorso',
    description: 'Accedi all’area riservata tramite le tue credenziali e seleziona la guida pratica che desideri consultare.',
    icon: UserCheck,
  },
  {
    number: '02',
    title: 'Segui le Guide Illustrate',
    description: 'Contenuti chiari e dettagliati, arricchiti con immagini esplicative create ad hoc per mostrarti ogni singolo passaggio in modo semplice.',
    icon: BookOpenCheck,
  },
  {
    number: '03',
    title: 'Metti in Pratica & Cresci',
    description: 'Applica subito le competenze acquisite grazie a istruzioni immediate, pensate per darti risultati concreti fin dal primo giorno.',
    icon: Trophy,
  },
];

export default function Method() {
  return (
    <section id="metodo" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Sfumatura decorativa di sfondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intestazione Sezione */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest bg-indigo-950/80 border border-indigo-500/30 px-4 py-1.5 rounded-full inline-block">
            Semplice & Immediato
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Come Funziona l'Accademia
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Guide pratiche illustrate passo-passo, progettate per darti il massimo risultato senza perdite di tempo.
          </p>
        </div>

        {/* Griglia dei Passaggi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <div 
                key={index}
                className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl relative flex flex-col justify-between hover:border-indigo-500/40 transition-all shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-5xl font-black text-slate-800 group-hover:text-indigo-500/40 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center text-xs text-indigo-400 font-semibold">
                  <span>Fase {index + 1} del percorso</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
