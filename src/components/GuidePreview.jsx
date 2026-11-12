// src/components/GuidePreview.jsx
import React, { useState } from 'react';
import { Eye, BookOpen, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

const samplePages = [
  {
    title: "Capitolo 1: Fondamenti e Preparazione",
    category: "Autodifesa & Sicurezza",
    text: "La prevenzione è la forma di sicurezza più potente. In questa guida illustrata analizzeremo la postura consapevole, la gestione dello spazio personale e la valutazione preventiva del contesto quotidiano.",
    imagePlaceholder: "🛡️ [Immagine Illustrativa AI: Postura e Consapevolezza Ambientale]"
  },
  {
    title: "Capitolo 2: Tecniche Pratiche Passo-Passo",
    category: "Cucina d'Autore",
    text: "Il segreto di un piatto eccellente risiede nella precisione dei tagli e nella cura dei sapori autentici. Segui le sequenze visive per replicare le tecniche dei grandi chef direttamente nella tua cucina.",
    imagePlaceholder: "🍳 [Immagine Illustrativa AI: Sequenza Passaggio Taglio e Impiattamento]"
  },
  {
    title: "Capitolo 3: Stimolazione Cognitiva",
    category: "Attivazione Cerebrale Bimbi",
    text: "Attraverso giochi visivi mirati e percorsi logici colorati, stimoliamo l'area della memoria e della concentrazione infantile in modo naturale, trasformativo e altamente divertente.",
    imagePlaceholder: "🧠 [Immagine Illustrativa AI: Esercizio Visivo di Attivazione e Logica]"
  }
];

export default function GuidePreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="anteprima" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Sfumatura decorativa */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[300px] bg-violet-600/10 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intestazione */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest bg-indigo-950/80 border border-indigo-500/30 px-4 py-1.5 rounded-full inline-block">
            Qualità Visiva Straordinaria
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Sfoglia un'Anteprima delle Guide
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Scopri come sono strutturate le nostre guide: manuali pratici, chiari, ricchi di immagini esplicative e senza fronzoli.
          </p>
        </div>

        {/* Box Interattivo dell'Anteprima */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto">
          
          {/* Selettore di categoria/anteprima */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {samplePages.map((page, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${activeIndex === idx ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30' : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'}`}
              >
                {page.category}
              </button>
            ))}
          </div>

          {/* Contenuto dell'Anteprima attiva */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-950 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
            
            <div className="space-y-4">
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider bg-indigo-950/80 px-3 py-1 rounded-lg border border-indigo-500/20 inline-block">
                {samplePages[activeIndex].category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {samplePages[activeIndex].title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {samplePages[activeIndex].text}
              </p>
              <div className="pt-2 flex items-center space-x-2 text-xs text-emerald-400 font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Testo verificato da professionisti e immagini generate con IA ad alta definizione</span>
              </div>
            </div>

            {/* Finta "Pagina Illustrata" visiva */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-64 flex items-center justify-center text-center text-slate-400 text-sm italic shadow-inner relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 to-violet-950/25 pointer-events-none"></div>
              <span className="relative z-10 px-4 font-medium text-slate-300">
                {samplePages[activeIndex].imagePlaceholder}
              </span>
            </div>

          </div>

          {/* Invito all'azione finale nella card */}
          <div className="mt-8 text-center">
            <a 
              href="#pass-speciale" 
              className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-bold text-sm transition-colors"
            >
              <span>Vuoi sbloccare l'intera libreria di guide? Scegli il Pass</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
