'use client';

import React from 'react';

/**
 * Komponen TermsPage
 * Layout Full-width background dengan konten terpusat.
 * Sidebar menggunakan sticky positioning agar tetap terlihat saat scroll.
 */
export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f6f8] dark:bg-[#101622] font-sans text-slate-900 dark:text-slate-100 antialiased">
      
      {/* --- MAIN AREA (SIDEBAR + CONTENT) --- */}
      <main className="flex flex-1 flex-row items-stretch w-full bg-white dark:bg-[#0f172a]">
        
        {/* --- SIDEBAR NAVIGASI --- */}
        <aside className="hidden lg:flex w-[380px] flex-shrink-0 flex-col border-r border-slate-100 dark:border-slate-800 bg-white dark:bg-[#101622]">
          <div className="sticky top-24 w-full max-w-[300px] ml-auto px-8 py-6">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Daftar Isi</h3>
            <nav className="flex flex-col gap-1">
              {[
                { id: 'penggunaan', label: 'Penggunaan', icon: 'info' },
                { id: 'akun', label: 'Akun Pengguna', icon: 'person' },
                { id: 'kekayaan', label: 'Hak Intelektual', icon: 'shield' },
                { id: 'batasan', label: 'Tanggung Jawab', icon: 'warning' },
                { id: 'hukum', label: 'Hukum', icon: 'gavel' },
              ].map((item, idx) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all text-sm font-bold ${
                    idx === 0 ? 'bg-[#0d59f2]/10 text-[#0d59f2]' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-10 p-6 bg-[#0d59f2]/5 rounded-2xl border border-[#0d59f2]/10">
              <p className="text-[10px] font-black text-[#0d59f2] uppercase mb-2">Butuh bantuan?</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">Hubungi tim legal kami jika Anda memiliki pertanyaan.</p>
              <button className="text-xs font-bold text-[#0d59f2] flex items-center gap-1 hover:underline">
                Kirim Tiket <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </aside>

        {/* --- CONTENT AREA --- */}
        <section className="flex-1 bg-white dark:bg-[#0f172a] py-12 px-8 md:px-16">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-10">
              <a href="#" className="hover:text-[#0d59f2]">Beranda</a>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-slate-900 dark:text-white">Syarat & Ketentuan</span>
            </nav>

            <header className="mb-16">
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
                Syarat dan Ketentuan
              </h1>
              <div className="flex items-center gap-4 text-slate-500">
                <span className="material-symbols-outlined text-base">calendar_today</span>
                <p className="text-xs font-bold uppercase tracking-wider">Terakhir Diperbarui: <span className="text-slate-900 dark:text-white">26 Feb 2026</span></p>
              </div>
            </header>

            <div className="space-y-20 pb-20">
              {/* Section 1 */}
              <section id="penggunaan">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center size-10 rounded-2xl bg-[#0d59f2] text-white font-black text-lg shadow-lg shadow-blue-200 dark:shadow-none">1</span>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white">Penggunaan Layanan</h2>
                </div>
                <div className="pl-0 md:pl-14 text-slate-600 dark:text-slate-400 space-y-6 leading-relaxed">
                  <p>Selamat datang di Informatika Terang. Dengan mengakses platform kami, Anda setuju untuk terikat oleh syarat penggunaan ini.</p>
                  <ul className="space-y-3">
                    {['Bukan untuk tujuan komersial tanpa izin.', 'Dilarang menggunakan bot otomatis.', 'Interferensi sistem akan ditindak hukum.'].map((list, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-[#0d59f2] text-sm mt-1">check_circle</span>
                        <span className="text-sm font-medium">{list}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section id="akun">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center size-10 rounded-2xl bg-[#0d59f2] text-white font-black text-lg shadow-lg shadow-blue-200 dark:shadow-none">2</span>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white">Akun Pengguna</h2>
                </div>
                <div className="pl-0 md:pl-14">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border-l-4 border-[#0d59f2]">
                    <p className="text-sm font-bold italic text-slate-700 dark:text-slate-300 leading-relaxed">
                      Setiap aktivitas yang dilakukan melalui akun Anda dianggap sebagai tanggung jawab Anda pribadi. Informatika Terang tidak bertanggung jawab atas kerugian akibat penyalahgunaan akun oleh pihak ketiga.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 - 5 (Simplified for brevity, similar structure) */}
              <section id="kekayaan">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center justify-center size-10 rounded-2xl bg-[#0d59f2] text-white font-black text-lg shadow-lg shadow-blue-200 dark:shadow-none">3</span>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white">Hak Kekayaan Intelektual</h2>
                </div>
                <div className="pl-0 md:pl-14 text-slate-600 dark:text-slate-400">
                  <p className="leading-relaxed">Semua konten termasuk teks, grafis, logo, dan kode sumber adalah milik UKM Informatika Terang. Pengguna diberikan lisensi terbatas hanya untuk penggunaan pribadi dan non-komersial.</p>
                </div>
              </section>

              {/* Feedback Section */}
              <div className="pt-12 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Apakah dokumen ini membantu?</p>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-8 py-3 border-2 border-slate-100 dark:border-slate-800 rounded-2xl text-sm font-bold hover:border-[#0d59f2] hover:text-[#0d59f2] transition-all">
                    <span className="material-symbols-outlined text-lg">thumb_up</span> Ya
                  </button>
                  <button className="flex items-center gap-2 px-8 py-3 border-2 border-slate-100 dark:border-slate-800 rounded-2xl text-sm font-bold hover:border-red-500 hover:text-red-500 transition-all">
                    <span className="material-symbols-outlined text-lg">thumb_down</span> Tidak
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </main>
    </div>
  );
}