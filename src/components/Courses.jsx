// src/components/Courses.jsx
import React from 'react';
import { Shield, Utensils, Palette, Gamepad2, Brain, ArrowRight, Clock, Users, Star } from 'lucide-react';

const coursesList = [
  {
    id: 'autodifesa',
    title: 'Autodifesa Consapevole & Sicurezza',
    category: 'Sicurezza Personale',
    description: 'Tecniche pratiche, prevenzione e mentalità reattiva per muoversi in sicurezza in ogni situazione quotidiana.',
    icon: Shield,
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    textColor: 'text-amber-400',
    lessons: '18 Lezioni',
    students: '340+ Iscritti',
    rating: '4.9',
    badge: 'Più Richiesto',
    price: '19,90€'
  },
  {
    id: 'cucina',
    title: 'Cucina d’Autore & Tradizione',
    category: 'Arte Culinaria',
    description: 'Dalle basi fondamentali ai segreti dei grandi chef: ricette pratiche, tecniche di impiattamento e sapori autentici.',
    icon: Utensils,
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    textColor: 'text-emerald-400',
    lessons: '24 Lezioni',
    students: '520+ Iscritti',
    rating: '5.0',
    badge: 'Bestseller',
    price: '19,90€'
  },
  {
    id: 'attivazione-cerebrale',
    title: 'Attivazione Cerebrale per Bimbi',
    category: 'Crescita & Sviluppo',
    description: 'Esercizi ludici, giochi cognitivi e stimolazioni mirate per favorire l’attenzione, la memoria e l’ingegno nei più piccoli.',
    icon: Brain,
    color: 'from-indigo-500 to-violet-600',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20',
    textColor: 'text-indigo-400',
    lessons: '15 Lezioni',
    students: '410+ Iscritti',
    rating: '4.9',
    badge: 'Innovativo',
    price: '19,90€'
  },
  {
    id: 'disegno',
    title: 'Disegno Creativo & Manualità',
    category: 'Arte & Espressione',
    description: 'Sviluppa il talento artistico passo dopo passo: proporzioni, ombreggiature, tecniche di disegno a mano libera e creatività.',
    icon: Palette,
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/20',
    textColor: 'text-pink-400',
    lessons: '20 Lezioni',
    students: '290+ Iscritti',
    rating: '4.8',
    badge: 'Popolare',
    price: '19,90€'
  },
  {
    id: 'giochi-bambini',
    title: 'Giochi Educativi & Attività in Famiglia',
    category: 'Intrattenimento Intelligente',
    description: 'Idee pratiche, giochi di gruppo e attività stimolanti per passare del tempo di qualità in famiglia e favorire l’apprendimento.',
    icon: Gamepad2,
    color: 'from-cyan-500 to-blue-600',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    textColor: 'text-cyan-400',
    lessons: '12 Lezioni',
    students: '380+ Iscritti',
    rating: '4.9',
    badge: 'Famiglia',
    price: '19,90€'
  }
];

export default function Courses() {
  return (
    <section id="corsi" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest bg-indigo-950/80 border border-indigo-500/30 px-4 py-1.5 rounded-full inline-block">
            L'Offerta Formativa Singola
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Oppure Scegli il Singolo Corso
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Acquista un corso specifico a soli 19,90€ e accedi subito alle lezioni dedicate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesList.map((course) => {
            const IconComponent = course.icon;
            return (
              <div 
                key={course.id}
                className="group bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${course.bgColor} ${course.borderColor} border flex items-center justify-center shadow-inner`}>
                      <IconComponent className={`w-7 h-7 ${course.textColor}`} />
                    </div>
                    <span className="bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs px-3.5 py-1 rounded-full font-bold">
                      {course.price}
                    </span>
                  </div>

                  <span className={`text-xs font-bold uppercase tracking-wider ${course.textColor} block mb-1`}>
                    {course.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {course.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {course.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-400 mb-6">
                    <span>{course.lessons}</span>
                    <span>{course.students}</span>
                    <span className="text-amber-400 font-semibold flex items-center">
                      <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" /> {course.rating}
                    </span>
                  </div>

                  <button 
                    onClick={() => alert(`Acquista il corso ${course.title} a ${course.price}`)}
                    className="w-full flex items-center justify-center space-x-2 bg-slate-950 hover:bg-indigo-600 text-slate-200 hover:text-white border border-slate-800 font-semibold py-3 rounded-xl transition-all shadow-md"
                  >
                    <span>Acquista a {course.price}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
