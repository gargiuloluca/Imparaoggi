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
    badge: 'Più Richiesto'
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
    badge: 'Bestseller'
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
    badge: 'Innovativo'
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
    badge: 'Popolare'
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
    badge: 'Famiglia'
  }
];

export default function Courses() {
  return (
    <section id="corsi" className="py-24 bg-slate-900 text-white relative">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/30 via-slate-900 to-slate-950 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest bg-indigo-950/80 border border-indigo-500/30 px-4 py-1.5 rounded-full inline-block">
            L'Offerta Formativa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Esplora i Corsi dell'Accademia
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Percorsi strutturati nei minimi dettagli per apprendere nuove abilità pratiche, guidati da professionisti esperti.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesList.map((course) => {
            const IconComponent = course.icon;
            return (
              <div 
                key={course.id}
                className="group bg-slate-950/80 border border-slate-800 hover:border-indigo-500/50 rounded-3xl p-6 sm:p-8 transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl hover:shadow-indigo-950/50 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar della Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${course.bgColor} ${course.borderColor} border flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`w-7 h-7 ${course.textColor}`} />
                    </div>
                    <span className="bg-slate-900 border border-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-full font-medium">
                      {course.badge}
                    </span>
                  </div>

                  {/* Categoria e Titolo */}
                  <span className={`text-xs font-bold uppercase tracking-wider ${course.textColor} block mb-1`}>
                    {course.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {course.title}
                  </h3>

                  {/* Descrizione */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {course.description}
                  </p>
                </div>

                <div>
                  {/* Metriche Corso */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs text-slate-400 mb-6">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-4 h-4 text-indigo-400" />
                      <span>{course.lessons}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Users className="w-4 h-4 text-indigo-400" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-amber-400 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* Pulsante Azione */}
                  <button 
                    onClick={() => alert(`Hai selezionato il corso: ${course.title}. Qui potrai collegare il checkout o la pagina del corso!`)}
                    className="w-full flex items-center justify-center space-x-2 bg-slate-900 hover:bg-indigo-600 text-slate-200 hover:text-white border border-slate-800 hover:border-transparent font-semibold py-3 rounded-xl transition-all shadow-md group-hover:shadow-indigo-600/20"
                  >
                    <span>Scopri il Corso</span>
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
