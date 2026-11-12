// src/components/Testimonials.jsx
import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const testimonialsData = [
  {
    name: "Marco R.",
    role: "Padre e Professionista",
    passType: "Pass Lifetime (A Vita)",
    comment: "Ho acquistato il Pass Lifetime per avere accesso a tutto. Le guide illustrate di autodifesa e di attivazione cerebrale per i miei bambini sono di una chiarezza disarmante. Niente video noiosi, si va dritti al punto con immagini straordinarie.",
    rating: 5,
    courseTag: "Pass Completo"
  },
  {
    name: "Elena B.",
    role: "Appassionata di Cucina",
    passType: "Corso Singolo (Cucina)",
    comment: "Il corso di cucina d'autore mi ha svoltato le cene con gli amici. Le tecniche di impiattamento spiegate passo-passo con le illustrazioni sono infallibili. Ricette riuscite al primo colpo!",
    rating: 5,
    courseTag: "Cucina d'Autore"
  },
  {
    name: "Davide M.",
    role: "Imprenditore",
    passType: "Pass Annuale (89€)",
    comment: "Un'accademia strutturata in modo impeccabile. La comodità di poter consultare guide pratiche da smartphone in qualsiasi momento senza dover guardare ore di video è un valore incredibile.",
    rating: 5,
    courseTag: "Pass Annuale"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonianze" className="py-24 bg-slate-900/40 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intestazione */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest bg-indigo-950/80 border border-indigo-500/30 px-4 py-1.5 rounded-full inline-block">
            Storie di Successo
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Cosa dicono i nostri studenti
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Le opinioni reali di chi ha scelto l'accademia per apprendere nuove abilità con le guide illustrate.
          </p>
        </div>

        {/* Griglia Testimonianze */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between shadow-xl relative hover:border-indigo-500/30 transition-all"
            >
              <div>
                {/* Valutazione con stelle */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-indigo-500/20 mb-4" />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
                <span className="text-[10px] bg-indigo-950 text-indigo-300 border border-indigo-500/30 px-2.5 py-1 rounded-full font-bold">
                  {item.courseTag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
