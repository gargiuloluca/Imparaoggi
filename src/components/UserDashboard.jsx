// src/components/UserDashboard.jsx
import React, { useState } from 'react';
import { BookOpen, Bookmark, Star, Crown, ArrowRight, CheckCircle, Clock, LogOut, Shield } from 'lucide-react';

export default function UserDashboard({ userType = 'lifetime', onLogout }) {
  // userType può essere: 'lifetime', 'annual', 'single'
  
  // Stati di esempio per segnalibri e corso in evidenza
  const [bookmarked, setBookmarked] = useState(['Autodifesa Pratica']);
  const [featuredCourse, setFeaturedCourse] = useState('Attivazione Cerebrale per Bimbi');

  const allCourses = [
    { title: 'Autodifesa Consapevole & Sicurezza', category: 'Sicurezza', progress: '60%', type: 'Tutti i Pass' },
    { title: 'Cucina d’Autore & Tradizione', category: 'Cucina', progress: '20%', type: 'Tutti i Pass' },
    { title: 'Attivazione Cerebrale per Bimbi', category: 'Crescita', progress: '85%', type: 'Tutti i Pass' },
    { title: 'Disegno Creativo & Manualità', category: 'Arte', progress: '0%', type: 'Corso Singolo' },
  ];

  const toggleBookmark = (title) => {
    if (bookmarked.includes(title)) {
      setBookmarked(bookmarked.filter(t => t !== title));
    } else {
      setBookmarked([...bookmarked, title]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Header dell'Area Utente */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="space-y-2 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-indigo-950 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>Abbonamento Attivo: {userType === 'lifetime' ? 'Pass Lifetime (A Vita)' : userType === 'annual' ? 'Pass Annuale (89€)' : 'Corso Singolo'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">Bentornato nell'Accademia, Tommaso!</h1>
            <p className="text-slate-400 text-sm">Consulta le tue guide illustrate, gestisci i preferiti e riprendi da dove hai interrotto.</p>
          </div>

          <div className="mt-6 md:mt-0 relative z-10 flex items-center space-x-4">
            <button 
              onClick={onLogout}
              className="flex items-center space-x-2 bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
            >
              <LogOut className="w-4 h-4 text-rose-400" />
              <span>Esci</span>
            </button>
          </div>
        </div>

        {/* Sezione Corso in Evidenza (Messo in primo piano dall'utente) */}
        <div className="bg-gradient-to-r from-indigo-950/80 via-slate-900 to-slate-900 border border-indigo-500/40 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-wider bg-indigo-950 border border-indigo-500/30 px-3 py-1 rounded-full">
              <Star className="w-3.5 h-3.5 fill-indigo-400" />
              <span>In Evidenza (Il tuo focus attuale)</span>
            </span>
            <span className="text-xs text-slate-400">Ultimo aggiornamento: Oggi</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-white">{featuredCourse}</h2>
              <p className="text-slate-300 text-sm max-w-2xl">
                Guida pratica illustrata con esercizi cognitivi avanzati per stimolare la concentrazione e la memoria dei più piccoli.
              </p>
            </div>
            <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-600/30 transition-all shrink-0">
              <span>Apri Guida</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Griglia Principale: Guide Sbloccate & Segnalibri */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Colonna Sinistra / Centrale: Tutti i Corsi / Guide Accessibili */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <span>Le Tue Guide e Corsi Sbloccati</span>
              </h3>
              <span className="text-xs text-slate-400">Accesso illimitato</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {allCourses.map((course, idx) => {
                const isBookmarked = bookmarked.includes(course.title);
                const isFeatured = featuredCourse === course.title;

                return (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-indigo-500/40 transition-all shadow-md group">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-2.5 py-1 rounded-lg border border-indigo-500/20">
                          {course.category}
                        </span>
                        
                        {/* Pulsante Segnalibro & Evidenza */}
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => toggleBookmark(course.title)}
                            className={`p-1.5 rounded-lg border transition-all ${isBookmarked ? 'bg-amber-500/20 border-amber-500/40 text-amber-400' : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'}`}
                            title="Metti nei segnalibri"
                          >
                            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
                          </button>
                        </div>
                      </div>

                      <h4 className="font-bold text-white text-base mb-2 group-hover:text-indigo-300 transition-colors">
                        {course.title}
                      </h4>

                      {/* Barra di progresso */}
                      <div className="space-y-1 mb-4">
                        <div className="flex justify-between text-xs text-slate-400">
                          <span>Completamento</span>
                          <span>{course.progress}</span>
                        </div>
                        <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                          <div className="bg-gradient-to-r from-indigo-500 to-violet-500 h-full rounded-full" style={{ width: course.progress }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <button 
                        onClick={() => setFeaturedCourse(course.title)}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${isFeatured ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'}`}
                      >
                        {isFeatured ? 'In Evidenza' : 'Metti in Evidenza'}
                      </button>

                      <button className="text-xs text-indigo-400 hover:text-indigo-300 font-bold flex items-center space-x-1">
                        <span>Leggi Guida</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Colonna Destra: I tuoi Segnalibri Salvati */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <Bookmark className="w-5 h-5 text-amber-400" />
                <span>I Tuoi Segnalibri ({bookmarked.length})</span>
              </h3>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
              {bookmarked.length === 0 ? (
                <p className="text-slate-400 text-sm text-center py-6">Nessun segnalibro salvato. Clicca sull'icona segnalibro nei corsi per ritrovarli qui!</p>
              ) : (
                bookmarked.map((item, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 p-4 rounded-2xl flex items-center justify-between hover:border-amber-500/30 transition-all">
                    <div className="space-y-1">
                      <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">Salvato</span>
                      <h5 className="text-sm font-bold text-white">{item}</h5>
                    </div>
                    <button className="text-xs bg-slate-900 hover:bg-indigo-600 text-slate-200 px-3 py-1.5 rounded-xl border border-slate-800 transition-all">
                      Apri
                    </button>
                  </div>
                ))
              )}

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 text-center">
                I segnalibri restano sincronizzati sul tuo account ovunque ti colleghi.
              </div>
            </div>

            {/* Box Promemoria / Assistenza */}
            <div className="bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/20 rounded-3xl p-6 space-y-3">
              <h4 className="font-bold text-white text-sm flex items-center space-x-2">
                <Shield className="w-4 h-4 text-indigo-400" />
                <span>Area Riservata Sicura</span>
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tutti i contenuti sono protetti da crittografia. Per qualsiasi esigenza o richiesta sui materiali, contatta il supporto dell'accademia.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
