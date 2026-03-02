'use client';

import React from 'react';

export default function LegalPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f7f8] dark:bg-[#111821] font-sans text-slate-900 dark:text-slate-100">
      
      {/* MAIN AREA 
        Dibuat w-full dan bg-white agar background memenuhi seluruh lebar layar (kanan-kiri penuh).
        items-stretch memastikan garis pembatas Aside ditarik sampai ke bawah.
      */}
      <main className="flex flex-1 flex-row items-stretch w-full bg-white dark:bg-[#111821]">
        
        {/* --- SIDEBAR NAVIGASI --- */}
        <aside className="hidden lg:flex w-[380px] flex-shrink-0 flex-col border-r border-slate-100 dark:border-slate-800 bg-white dark:bg-[#111821]">
          {/* Container di dalam Aside menggunakan ml-auto agar kontennya 
            sejajar dengan batas kiri "Logo" di Navbar kamu. 
          */}
          <div className="sticky top-24 w-full max-w-[300px] ml-auto px-8 py-6">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Navigasi Legal</h3>
            <nav className="flex flex-col gap-2">
              <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1979e6]/10 text-[#1979e6] font-bold" href="#privacy">
                <span className="material-symbols-outlined text-xl">shield_person</span>
                <span className="text-sm">Privasi</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold" href="#data">
                <span className="material-symbols-outlined text-xl">database</span>
                <span className="text-sm">Data</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold" href="#usage">
                <span className="material-symbols-outlined text-xl">info</span>
                <span className="text-sm">Penggunaan</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold" href="#disclaimer">
                <span className="material-symbols-outlined text-xl">gavel</span>
                <span className="text-sm">Disclaimer</span>
              </a>
            </nav>
            
            <div className="mt-10 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed italic font-medium">
                Dokumen ini bersifat mengikat bagi seluruh anggota UKM Informatika.
              </p>
            </div>
          </div>
        </aside>

        {/* --- MAIN CONTENT --- */}
        <section className="flex-1 bg-white dark:bg-[#111821] py-10 px-8 md:px-16">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">
              <a href="#" className="hover:text-[#1979e6]">Beranda</a>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-slate-900 dark:text-white">Kebijakan Privasi</span>
            </nav>

            <article>
              <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
                  Kebijakan Privasi & Disclaimer
                </h1>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-black text-slate-500 uppercase">
                    Pembaruan: 26 Feb 2026
                  </span>
                  <span className="px-3 py-1 bg-[#1979e6]/10 rounded-full text-[10px] font-black text-[#1979e6] uppercase">
                    Versi 2.1.0
                  </span>
                </div>
              </header>

              <div className="space-y-12 text-slate-600 dark:text-slate-400 leading-relaxed">
                <section id="privacy">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">1. Pernyataan Privasi</h2>
                  <p>
                    UKM Informatika berkomitmen untuk melindungi dan menghormati privasi Anda. Pernyataan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat Anda berinteraksi dengan platform digital kami.
                  </p>
                </section>

                <section id="data">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">2. Pengumpulan Data</h2>
                  <p className="mb-4">Kami mengumpulkan informasi melalui beberapa cara, termasuk namun tidak terbatas pada:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Informasi pendaftaran anggota (nama, NIM, email institusi).</li>
                    <li>Data log teknis saat mengakses website portfolio kami.</li>
                    <li>Informasi yang diberikan saat mengikuti workshop atau event IT.</li>
                  </ul>
                </section>

                <section id="usage">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">3. Penggunaan Informasi</h2>
                  <p>Data yang kami kumpulkan akan digunakan untuk verifikasi status keanggotaan aktif, pengiriman newsletter teknologi, dan analisis statistik pengembangan proyek IT mahasiswa.</p>
                </section>

                <section id="disclaimer" className="p-8 bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 rounded-3xl">
                  <div className="flex items-center gap-3 mb-4 text-[#1979e6]">
                    <span className="material-symbols-outlined font-bold">gavel</span>
                    <h2 className="text-xl font-black text-slate-900 dark:text-white">Disclaimer Hukum</h2>
                  </div>
                  <p className="text-sm italic mb-4">
                    Layanan dan konten yang disediakan oleh UKM Informatika disediakan sebagaimana adanya tanpa jaminan dalam bentuk apa pun.
                  </p>
                  <p className="text-sm">
                    Seluruh proyek yang ditampilkan adalah hasil karya kreatif mahasiswa dan ditujukan untuk tujuan edukasi serta portofolio profesional.
                  </p>
                </section>

                <section id="contact" className="pt-8 border-t border-slate-100 dark:border-slate-800 pb-20">
                  <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6">Butuh bantuan lebih lanjut?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="mailto:legal@ukm-informatika.ac.id" className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-[#111821] border-2 border-slate-100 dark:border-slate-800 rounded-2xl hover:border-[#1979e6] transition-all group">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-[#1979e6]">mail</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">Email Legal</span>
                    </a>
                    <a href="#" className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-[#111821] border-2 border-slate-100 dark:border-slate-800 rounded-2xl hover:border-[#1979e6] transition-all group">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-[#1979e6]">forum</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">Live Support</span>
                    </a>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}