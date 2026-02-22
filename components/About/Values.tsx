import React from 'react';

// 1. Data Nilai Utama (Mudah ditambah/dikurangi)
const CORE_VALUES = [
  {
    icon: "lightbulb",
    title: "Inovasi",
    desc: "Kami tidak pernah puas dengan status quo. Kami terus mengeksplorasi teknologi baru untuk menciptakan solusi yang lebih cerdas."
  },
  {
    icon: "groups",
    title: "Kolaborasi",
    desc: "Kekuatan kami terletak pada kebersamaan. Kami percaya bahwa ide besar lahir dari diskusi dan kerja sama tim yang solid."
  },
  {
    icon: "verified",
    title: "Keunggulan",
    desc: "Kami berkomitmen pada standar kualitas tertinggi dalam setiap kode yang kami tulis dan setiap proyek yang kami bangun."
  }
];

export const Values = () => {
  return (
    <section className="py-24 bg-slate-900 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl text-w font-extrabold mb-4">Nilai-Nilai Utama Kami</h2>
          <p className="text-slate-500 dark:text-slate-400">
            Fondasi yang mendasari setiap langkah dan karya kami
          </p>
        </div>

        {/* Grid Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {CORE_VALUES.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 bg-slate-950 dark:bg-background-dark border border-slate-600 dark:border-slate-800 rounded-2xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl transition-colors">
                  {item.icon}
                </span>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl text-white font-bold mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};