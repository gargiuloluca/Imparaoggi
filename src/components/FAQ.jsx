// src/components/FAQ.jsx
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqsData = [
  {
    question: "Come funzionano le guide illustrate dell'Accademia?",
    answer: "A differenza dei corsi tradizionali in video, le nostre guide sono manuali digitali illustrati passo-passo, arricchiti con immagini di altissima qualità create ad hoc. Puoi leggerle comodamente da qualsiasi dispositivo (smartphone, tablet o PC) senza perdite di tempo e applicare subito quanto appreso."
  },
  {
    question: "Qual è la differenza tra il Pass Annuale e il Pass Lifetime?",
    answer: "Il Pass Annuale (89€) ti garantisce l'accesso illimitato a tutta l'accademia e ai nuovi corsi per 12 mesi interi. Il Pass Lifetime (159€) è una soluzione 'una tantum': paghi una sola volta e hai accesso per sempre a vita, inclusi tutti i futuri corsi e aggiornamenti senza alcun rinnovo."
  },
  {
    question: "Posso acquistare anche un singolo corso?",
    answer: "Certamente. Se ti interessa una sola abilità specifica (come Autodifesa o Cucina), puoi sbloccare il corso singolo corrispondente a soli 19,90€, con accesso immediato alle guide dedicate."
  },
  {
    question: "Come ricevo le credenziali dopo l'acquisto?",
    answer: "Subito dopo il completamento del pagamento sicuro, riceverai un'email con i dati di accesso personali per entrare nell'Area Riservata (Dashboard) e iniziare a consultare immediatamente tutte le guide sbloccate."
  },
  {
    question: "Le guide sono adatte anche ai principianti?",
    answer: "Assolutamente sì. Ogni guida è progettata da professionisti esperti per partire dalle basi ed essere estremamente chiara, pratica e accessibile a chiunque, anche a chi non ha alcuna esperienza precedente."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-900/50 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intestazione */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest bg-indigo-950/80 border border-indigo-500/30 px-4 py-1.5 rounded-full inline-block">
            Dubbi o Domande?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Domande Frequenti (FAQ)
          </h2>
          <p className="text-slate-400 text-base">
            Tutto quello che devi sapere sulla nostra accademia e sulle guide illustrate.
          </p>
        </div>

        {/* Lista Accordion FAQ */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-slate-100 flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-indigo-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
