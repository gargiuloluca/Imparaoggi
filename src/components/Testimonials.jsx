// src/components/Testimonials.jsx
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marco R.',
    role: 'Padre e Professionista',
    content: 'Ho acquistato i corsi di autodifesa e quelli di attivazione cerebrale per i miei bambini. La qualità dei contenuti è pazzesca: spiegazioni chiare, pratiche e di altissimo valore.',
    rating: 5,
    course: 'Pass Famiglia Completo'
  },
  {
    name: 'Elena B.',
    role: 'Appassionata di Cucina',
    content: 'Il corso di cucina d’autore mi ha svoltato le cene con gli amici. Tecniche spiegate benissimo e ricette che riescono sempre al primo colpo. Consigliatissimo!',
    rating: 5,
    course: 'Cucina d’Autore'
  },
  {
    name: 'Davide M.',
    role: 'Imprenditore',
    content: 'Un’accademia strutturata in modo impeccabile. La comodità di avere competenze così diverse in un unico portale è un valore incredibile.',
    rating: 5,
    course: 'Tutti i Corsi'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonianze" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest bg-indigo-950/80 border border-indigo-500/30 px-4 py-1.5 rounded-full inline-block">
            Storie di Successo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Cosa dicono i nostri studenti
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Le opinioni reali di chi ha scelto la nostra accademia per formarsi e crescere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="bg-slate-950/80 border border-slate-800 p-8 rounded-3xl relative flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-indigo-500/20" />
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
                <span className="text-[11px] bg-indigo-950 text-indigo-300 border border-indigo-500/30 px-2.5 py-1 rounded-full font-medium">
                  {t.course}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
