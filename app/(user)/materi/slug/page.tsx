'use client';

import React from 'react';
import Image from 'next/image';



export default function DetailMateriSlug() {
  return (
    <div className="flex  w-full flex-col bg-[#f5f6f8] dark:bg-[#101622] font-sans text-slate-900 dark:text-slate-100 overflow-hidden">

      <main className="flex flex-1 ">
        
        {/* --- SIDEBAR (MELEKAT DI KIRI) --- */}
        <aside className="w-80 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101622] hidden lg:flex flex-col">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex-shrink-0">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-slate-900 dark:text-white">Web Development</h3>
              <span className="text-xs font-semibold text-[#0d59f2] bg-[#0d59f2]/10 px-2 py-1 rounded-full">65%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-[#0d59f2] h-full w-[65%]"></div>
            </div>
          </div>

          <div className="flex-1 h-full overflow-y-auto">
            <div className="group border-b border-slate-50 dark:border-slate-800/50">
              <button className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Bab 1: Pendahuluan</span>
                <span className="material-symbols-outlined text-slate-400 text-sm">expand_less</span>
              </button>
              <div className="flex flex-col bg-slate-50/50 dark:bg-slate-800/10">
                <a className="flex items-center gap-3 px-6 py-3 text-slate-500 hover:text-[#0d59f2]" href="#">
                  <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                  <span className="text-sm font-medium">Instalasi Tools</span>
                </a>
              </div>
            </div>

            <div className="group bg-[#0d59f2]/5 border-l-4 border-[#0d59f2]">
              <button className="w-full flex items-center justify-between p-4 text-left">
                <span className="text-sm font-bold text-[#0d59f2]">Bab 2: Dasar HTML</span>
                <span className="material-symbols-outlined text-[#0d59f2] text-sm">expand_more</span>
              </button>
              <div className="flex flex-col">
                <a className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-900 shadow-sm text-[#0d59f2]" href="#">
                  <span className="material-symbols-outlined text-lg">play_circle</span>
                  <span className="text-sm font-semibold">Mengenal Tag HTML Dasar</span>
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex-shrink-0">
            <button className="w-full py-2.5 flex items-center justify-center gap-2 rounded-lg border-2 border-[#0d59f2] text-[#0d59f2] font-bold text-sm hover:bg-[#0d59f2]/5 transition-all">
              <span className="material-symbols-outlined text-lg">download</span>
              Assets (.zip)
            </button>
          </div>
        </aside>

        {/* --- AREA KONTEN (SCROLLABLE) --- */}
        <section className="flex-1 h-full overflow-y-auto flex flex-col bg-[#f8fafc] dark:bg-[#0f172a]">
          
          <div className="flex-1 px-8 pt-8 pb-12 max-w-5xl w-full mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>Materi</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-[#0d59f2]">Bab 2: Tag HTML Dasar</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <h1 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">Mengenal Tag HTML Dasar</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Belajar struktur elemen dasar, heading, paragraf, dan link pada HTML5.</p>
              </div>
              <button className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50">
                <span className="material-symbols-outlined text-lg text-[#0d59f2]">bookmark</span> Simpan Materi
              </button>
            </div>

            {/* Video Player Section */}
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border-[6px] border-white dark:border-slate-800 mb-10 group">
              <Image 
                src="https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=1200"
                alt="Thumbnail Video"
                fill
                unoptimized
                className="object-cover opacity-60 transition-opacity group-hover:opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                 <button className="size-24 bg-[#0d59f2] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
                   <span className="material-symbols-outlined text-5xl fill-1">play_arrow</span>
                 </button>
              </div>
              {/* Fake Controls */}
              <div className="absolute bottom-6 inset-x-8 h-1.5 bg-white/20 rounded-full overflow-hidden z-20">
                <div className="absolute left-0 h-full w-1/3 bg-[#0d59f2]"></div>
              </div>
            </div>

            {/* Navigasi Materi */}
            <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mb-12">
              <button className="flex items-center gap-2 font-bold text-slate-500 hover:text-[#0d59f2] transition-colors">
                <span className="material-symbols-outlined">arrow_back</span> Sebelumnya
              </button>
              <button className="flex items-center gap-2 px-8 py-3 bg-[#0d59f2] text-white rounded-xl font-bold shadow-lg shadow-[#0d59f2]/30 hover:bg-[#0d59f2]/90 transition-all">
                Selesai & Lanjut <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

            {/* Discussion Area */}
            <div className="mt-12">
               <div className="flex items-center gap-4 mb-8">
                 <h3 className="text-xl font-black text-slate-900 dark:text-white">Diskusi Materi</h3>
                 <span className="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded-full text-xs font-bold text-slate-500">12 Komentar</span>
               </div>
               
               <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="size-10 rounded-full bg-slate-300 flex-shrink-0 overflow-hidden">
                       <img src="https://ui-avatars.com/api/?name=Sarah&background=random" alt="Avatar" />
                    </div>
                    <div className="flex-1 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                       <div className="flex justify-between items-center mb-2">
                         <p className="font-bold text-sm">Sarah Anggraini</p>
                         <p className="text-[10px] font-bold text-slate-400 uppercase">2 Jam yang lalu</p>
                       </div>
                       <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                         Izin bertanya kak, apakah tag section lebih baik digunakan daripada div untuk membungkus konten utama? Terima kasih sebelumnya!
                       </p>
                    </div>
                 </div>
               </div>
            </div>
          </div>


        </section>
      </main>
    </div>
  );
}