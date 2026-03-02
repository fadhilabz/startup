import React from 'react';

export default function MateriPage() {
  return (
    <div className="bg-[#f5f6f8] dark:bg-[#101622] min-h-screen font-['Lexend',sans-serif]">
      <main className="max-w-7xl mx-auto w-full px-6 lg:px-20 py-10">
        
        {/* --- Hero Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-[#0d59f2]/10 text-[#0d59f2] text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
              Learning Guide
            </span>
            <h1 className="text-slate-900 dark:text-white text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
              Pilih Jalur Belajar Kamu
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Temukan roadmap terstruktur untuk menguasai teknologi pilihanmu dari nol bersama mentor berpengalaman di UKM Informatika.
            </p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold text-sm shadow-sm hover:bg-slate-50 transition-all">
            <span>Lihat Semua Jalur</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* --- Featured Roadmaps Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Roadmap Card 1: Frontend */}
          <div className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="h-48 bg-cover bg-center relative" 
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600')" }}>
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#0d59f2] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Pemula</span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">Frontend Web</h3>
              <p className="text-slate-500 text-xs mb-4">HTML5, CSS3, React, Tailwind</p>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">Progress</span>
                  <span className="text-xs font-bold text-[#0d59f2]">35%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-5">
                  <div className="h-full bg-[#0d59f2] rounded-full" style={{ width: '35%' }}></div>
                </div>
                <button className="w-full py-2.5 bg-[#0d59f2] text-white text-xs font-bold rounded-lg hover:bg-[#0d59f2]/90 transition-colors">Mulai Belajar</button>
              </div>
            </div>
          </div>

          {/* Roadmap Card 2: Backend */}
          <div className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="h-48 bg-cover bg-center relative" 
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=600')" }}>
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Menengah</span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">Backend Dev</h3>
              <p className="text-slate-500 text-xs mb-4">Node.js, PostgreSQL, Docker</p>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">Progress</span>
                  <span className="text-xs font-bold text-slate-400">0%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-5">
                  <div className="h-full bg-slate-300 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <button className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg hover:bg-[#0d59f2] hover:text-white transition-all">Mulai Belajar</button>
              </div>
            </div>
          </div>

          {/* Roadmap Card 3: UI/UX */}
          <div className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="h-48 bg-cover bg-center relative" 
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581291518062-c9a79e7e0f3e?q=80&w=600')" }}>
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#10b981] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Pemula</span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">UI/UX Design</h3>
              <p className="text-slate-500 text-xs mb-4">Figma, Prototyping, Research</p>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">Progress</span>
                  <span className="text-xs font-bold text-[#10b981]">85%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-5">
                  <div className="h-full bg-[#10b981] rounded-full" style={{ width: '85%' }}></div>
                </div>
                <button className="w-full py-2.5 bg-[#0d59f2] text-white text-xs font-bold rounded-lg hover:bg-[#0d59f2]/90 transition-colors">Lanjutkan</button>
              </div>
            </div>
          </div>

          {/* Roadmap Card 4: Mobile */}
          <div className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="h-48 bg-cover bg-center relative" 
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600')" }}>
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Lanjutan</span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">Mobile App</h3>
              <p className="text-slate-500 text-xs mb-4">Flutter, Firebase, PlayStore</p>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">Progress</span>
                  <span className="text-xs font-bold text-slate-400">12%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-5">
                  <div className="h-full bg-[#0d59f2] rounded-full" style={{ width: '12%' }}></div>
                </div>
                <button className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg hover:bg-[#0d59f2] hover:text-white transition-all">Mulai Belajar</button>
              </div>
            </div>
          </div>
        </div>

        {/* --- Popular Modules Grid --- */}
        <section className="mt-20">
          <div className="flex justify-between items-center mb-8 border-l-4 border-[#0d59f2] pl-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Modul Populer</h2>
            <a className="text-[#0d59f2] font-semibold text-sm hover:underline" href="#">Lihat Semua Modul</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Module Items */}
            {[
              { title: "Dasar JavaScript Modern ES6", icon: "javascript", color: "bg-[#0d59f2]/10", iconCol: "text-[#0d59f2]", author: "Budi Pratama", lessons: 12, rating: "4.9" },
              { title: "Prinsip Tipografi dalam UI", icon: "brush", color: "bg-[#10b981]/10", iconCol: "text-[#10b981]", author: "Sarah Wijaya", lessons: 8, rating: "4.8" },
              { title: "Optimasi Query PostgreSQL", icon: "database", color: "bg-orange-100", iconCol: "text-orange-600", author: "Adi Santoso", lessons: 15, rating: "5.0" },
              { title: "Web Security Essentials", icon: "shield", color: "bg-indigo-100", iconCol: "text-indigo-600", author: "Rian Hacker", lessons: 10, rating: "4.7" },
              { title: "Integrasi REST API Dasar", icon: "api", color: "bg-slate-100", iconCol: "text-slate-700", author: "Dina Marlina", lessons: 9, rating: "4.9" },
              { title: "Mastering Git & GitHub", icon: "rebase", color: "bg-red-100", iconCol: "text-red-600", author: "UKM Team", lessons: 6, rating: "5.0" },
            ].map((module, index) => (
              <div key={index} className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className={`size-20 rounded-lg ${module.color} flex items-center justify-center shrink-0`}>
                  <span className={`material-symbols-outlined ${module.iconCol} text-3xl`}>{module.icon}</span>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base leading-snug">{module.title}</h4>
                  <p className="text-slate-500 text-xs mt-1">{module.lessons} Pelajaran • Oleh {module.author}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="material-symbols-outlined text-yellow-400 text-sm fill-1">star</span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{module.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}