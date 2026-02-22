import React from 'react';

export const VisiMisi = () => {
  const missions = [
    {
      title: "Pengembangan Kompetensi",
      desc: "Menyelenggarakan pelatihan teknis yang intensif dan relevan dengan kebutuhan industri IT saat ini.",
      icon: "check_circle"
    },
    {
      title: "Inovasi & Riset",
      desc: "Mendorong terciptanya produk digital dan riset teknologi yang solutif bagi permasalahan sekitar.",
      icon: "check_circle"
    },
    {
      title: "Jejaring Profesional",
      desc: "Membangun kolaborasi strategis dengan komunitas, institusi, dan praktisi industri teknologi.",
      icon: "check_circle"
    }
  ];

  return (
    <section className="py-24 relative bg-slate-900 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Vision Card */}
          <div className="bg-slate-950 text-white group relative font-bold dark:bg-slate-900/50 p-10 rounded-2xl border border-slate-500 dark:border-slate-800 shadow-xl transition-all hover:border-primary/50">
            <div className="absolute -top-6 left-10 bg-primary w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-white">visibility</span>
            </div>
            <div className="pt-4">
              <h2 className="text-3xl font-bold mb-6">Visi Kami</h2>
              <p className="text-xl leading-relaxed text-slate-400 dark:text-slate-300 font-medium italic">
                Menjadi pusat unggulan pengembangan teknologi informasi yang melahirkan talenta digital kompeten, inovatif, dan beretika dalam menghadapi tantangan global.
              </p>
              <div className="mt-10 h-1.5 w-20 bg-primary rounded-full"></div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-slate-950 text-white dark:bg-slate-900/50 p-10 rounded-2xl border border-slate-600 dark:border-slate-800 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-primary/20 p-3 rounded-lg">
                <span className="material-symbols-outlined text-primary">rocket_launch</span>
              </div>
              <h2 className="text-3xl font-bold">Misi Kami</h2>
            </div>
            <ul className="space-y-6">
              {missions.map((mission, idx) => (
                <li key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary text-xl group-hover:scale-125 transition-transform">
                      {mission.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{mission.title}</h4>
                    <p className="text-slate-400 dark:text-slate-400 text-sm leading-relaxed">
                      {mission.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};