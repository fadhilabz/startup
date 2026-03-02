"use client";

import React from 'react';

export default function BlogFullContent() {
  return (
    <main className="pt-10 pb-20 bg-white text-slate-900 antialiased selection:bg-blue-600/10 font-sans">
      {/* Custom Styles untuk menangani class CSS yang ada di HTML asli */}
      <style jsx global>{`
        .prose h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: #0f172a;
        }
        .prose p {
          font-size: 1.125rem;
          line-height: 1.75;
          color: #334155;
          margin-bottom: 1.5rem;
        }
        .syntax-highlight {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          padding: 1.5rem;
          background-color: #0f172a;
          border-radius: 0.75rem;
          overflow-x: auto;
          margin: 2rem 0;
          color: #cbd5e1;
        }
        .syntax-highlight .keyword { color: #c678dd; }
        .syntax-highlight .function { color: #61afef; }
        .syntax-highlight .comment { color: #5c6370; font-style: italic; }
        .ad-placeholder {
          background-color: #f8fafc;
          border: 2px dashed #e2e8f0;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .ad-placeholder:hover {
          border-color: rgba(13, 89, 242, 0.3);
          background-color: rgba(13, 89, 242, 0.02);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <a className="hover:text-blue-600 transition-colors" href="#">Beranda</a>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <a className="hover:text-blue-600 transition-colors" href="#">Blog</a>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-slate-900 font-medium">Tutorial</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* ARTIKEL UTAMA */}
          <article className="lg:col-span-8">
            <header className="mb-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-600/10 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">Tutorial</span>
                <span className="text-slate-400 text-sm">•</span>
                <span className="text-slate-500 text-sm">8 menit baca</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-8">
                Membangun REST API Modern dengan Node.js & Prisma ORM
              </h1>
              <div className="flex items-center justify-between pb-8 border-b border-slate-200">
                <div className="flex items-center gap-4">
                  <img alt="Redaksi UKM" className="w-12 h-12 rounded-full object-cover border border-slate-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCcxCei-YWsVulmJW_QDkVvfyIwYczpH9zau5XJ9fG9Jy8gRBBQMXd3RdLaYHczRRB988bHLZw06g01JqkEZ5wTzUYt5wYLTId5hOOO1GZO8lZ4SyumWBliUXZS3tqWCMp8__qAr9tGKgaH372qjeU3iU8ljHddczwnPdiQ4UZaZcn2V7LppUB_snWPfwt5BF3virAW_SD7oR_lm1xuWPTa_UFTEDUNf-rEJlYXFy6lgBmC4cXgL3X9P6I6yzi0apfbz3vEvoDZdNS" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Redaksi UKM Informatika</h4>
                    <p className="text-xs text-slate-500">Diterbitkan pada 12 Nov 2023</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-slate-400 hover:text-blue-600">
                    <span className="material-symbols-outlined">bookmark</span>
                  </button>
                  <button className="p-2 text-slate-400 hover:text-blue-600">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                </div>
              </div>
            </header>

            <div className="mb-10">
              <img alt="Featured Image" className="w-full h-[450px] object-cover rounded-2xl shadow-xl shadow-slate-200/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBswkvON6_sBQIffxdGkU5D5aYyrlQtxaZlh2sSKBxZyxd81-4Fmn2YMkGzy00En5Ti9RMPWJ6FjRSc-f5-7eIRPSI_Ggual5mZxcvJLG651K4O9H-z9UWZ0wrBzaaD-l5T45VbMIwVOSif0iP2XFiPCddFDfAVmntvJfo9uHSnlq7r3Sbp0_mMeCY3ZZ6MWeKn1zJc7iRyNIM3P_0Ww0-f8fJJj1NIQxJeJ5OhO1F8gJ5diheMj_ugQ9dVC5_RZhsOMI91NCUPzP4_" />
              <p className="text-center text-sm text-slate-500 mt-4 italic">Visualisasi alur kerja REST API dengan arsitektur Node.js modern.</p>
            </div>

            <div className="prose max-w-none">
              <p>REST API telah menjadi standar dalam pengembangan aplikasi web modern...</p>
              
              <h2 id="setup-proyek">1. Inisialisasi Proyek</h2>
              <div className="my-10">
                <div className="ad-placeholder h-24 w-full">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Sponsored Content</span>
                    <p className="text-slate-500 text-sm font-medium">Iklan Banner Horizontal - UKM Partners</p>
                  </div>
                </div>
              </div>

              <div className="syntax-highlight">
                <span className="comment"> Inisialisasi proyek baru</span><br />
                mkdir backend-api && cd backend-api<br />
                npm init -y<br />
                npm install express @prisma/client<br />
                npm install prisma --save-dev
              </div>

              <h2 id="skema-database">2. Mendefinisikan Skema Prisma</h2>
              <div className="syntax-highlight">
                <span className="keyword">model</span> <span className="function">User</span> {'{'}<br />
                  id    <span className="keyword">Int</span> <span className="function">@id @default(autoincrement())</span><br />
                  email <span className="keyword">String</span> <span className="function">@unique</span><br />
                  name  <span className="keyword">String?</span><br />
                  posts <span className="function">Post[]</span><br />
                {'}'}
              </div>
            </div>

            {/* Author Card */}
            <div className="mt-16 p-8 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
              <img alt="Author" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCcxCei-YWsVulmJW_QDkVvfyIwYczpH9zau5XJ9fG9Jy8gRBBQMXd3RdLaYHczRRB988bHLZw06g01JqkEZ5wTzUYt5wYLTId5hOOO1GZO8lZ4SyumWBliUXZS3tqWCMp8__qAr9tGKgaH372qjeU3iU8ljHddczwnPdiQ4UZaZcn2V7LppUB_snWPfwt5BF3virAW_SD7oR_lm1xuWPTa_UFTEDUNf-rEJlYXFy6lgBmC4cXgL3X9P6I6yzi0apfbz3vEvoDZdNS" />
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Tentang Penulis: Tim Redaksi</h3>
                <p className="text-slate-600 text-sm mb-4">Anggota Divisi Research & Development UKM Informatika yang berfokus pada eksplorasi teknologi backend.</p>
                <div className="flex justify-center md:justify-start gap-3">
                  <a className="text-xs font-bold text-blue-600 hover:underline" href="#">Ikuti di LinkedIn</a>
                </div>
              </div>
            </div>

            {/* KOMENTAR */}
            <section className="mt-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Komentar (3)</h3>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-10 shadow-sm">
                <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all" placeholder="Tulis komentar..." rows={3}></textarea>
                <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="flex gap-2 w-full sm:w-auto">
                    <input className="flex-1 px-4 py-2 text-xs rounded-lg border border-slate-200" placeholder="Nama Anda" type="text" />
                    <input className="flex-1 px-4 py-2 text-xs rounded-lg border border-slate-200" placeholder="Email (Opsional)" type="email" />
                  </div>
                  <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-blue-700">Kirim Komentar</button>
                </div>
              </div>

              {/* List Komentar (Contoh 1 saja untuk ringkas) */}
              <div className="space-y-8">
                <div className="flex gap-4">
                  <img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCcxCei-YWsVulmJW_QDkVvfyIwYczpH9zau5XJ9fG9Jy8gRBBQMXd3RdLaYHczRRB988bHLZw06g01JqkEZ5wTzUYt5wYLTId5hOOO1GZO8lZ4SyumWBliUXZS3tqWCMp8__qAr9tGKgaH372qjeU3iU8ljHddczwnPdiQ4UZaZcn2V7LppUB_snWPfwt5BF3virAW_SD7oR_lm1xuWPTa_UFTEDUNf-rEJlYXFy6lgBmC4cXgL3X9P6I6yzi0apfbz3vEvoDZdNS" />
                  <div className="flex-1">
                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-sm font-bold text-slate-900">Arif Kurniawan</h4>
                        <span className="text-[10px] text-slate-400 font-medium">2 jam yang lalu</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">Sangat membantu! Ditunggu tutorial lanjutannya.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Daftar Isi</h3>
                <nav className="space-y-4">
                  <a className="block text-sm font-medium text-slate-600 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-600 pl-4" href="#setup-proyek">1. Inisialisasi Proyek</a>
                  <a className="block text-sm font-medium text-slate-600 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-600 pl-4" href="#skema-database">2. Mendefinisikan Skema</a>
                </nav>
              </div>

              <div className="ad-placeholder h-[300px] w-full">
                <div className="flex flex-col items-center p-6 text-center">
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Advertisement</span>
                  <p className="text-slate-500 font-bold mb-2">Upgrade Your Skill</p>
                  <button className="mt-6 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg">Pelajari Selengkapnya</button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Artikel Terpopuler</h3>
                <div className="space-y-5">
                  <a className="group flex gap-4" href="#">
                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                      <img alt="Trending" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlZ_9tOkr93-jPArU2w-Nfkysblp6-dQn55qVJcH5xR950yKLY5nXojOe3ve0CBQeKeRY28FRE4pRkKBZ2PIvhUhm5T7HkVEWFAk1fSHn-i0D9qRanRvNOxnRSJSfvCBde5Q6lEpFfxpfTXWmxRwZWoqJSL7_W0ydVsQc_34m_kz-_dtFSm4G24dKVE4k7gw37QnEMw_h89Jhj7LozJ8q5uTeDipl08wONqVvxkQ9WVPKL0pOyTRSFuTOvvByQHxUNEsHvN1qQNY0h"/>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">Tren Cybersecurity di Era Komputasi Kuantum</h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase">5 Menit Baca</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* --- BAGIAN YANG TERTINGGAL SEBELUMNYA --- */}

        {/* 1. Recommended For You (Iklan Bawah) */}
        <div className="mt-20">
          <div className="ad-placeholder h-28 w-full">
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Recommended for You</span>
              <p className="text-slate-600 font-bold">Bangun Website Pertamamu dengan Domain Murah!</p>
              <p className="text-xs text-slate-500 mt-1">Diskon 50% untuk mahasiswa dengan email institusi.</p>
            </div>
          </div>
        </div>

        {/* 2. Artikel Terkait Section */}
        <section className="mt-16 pt-16 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 flex items-center gap-3">
            <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
            Artikel Terkait
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kartu 1 */}
            <article className="group cursor-pointer">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <img alt="Related" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzFO6XCWU6twI2SK9kpOlq2MFR0z5XAiHcrIo0NtUoTZ7jiqBmn2asv_SVS_Za1IL6DWSoaDBFai85edcllj5gcEuFnpwYEELmb8B1i9-hWRbkWO8tgrDIYKwJ0UsyPwPuzbgU4bjaPQk_SogWSY6F_RKDeRyC_i6rybEuyxZsC6RD-gFQpc1LV2rFaXR8JoeBhKnGuWbrbyY-Wti8UQQQ4zuT3KyKxi7n4-VRdYSbKl1AnlaiP_c6vV9otDbjAQXYjXxvD2NG4Mq9"/>
              </div>
              <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-2">
                State Management di React: Dari useState ke TanStack Query
              </h4>
              <p className="text-sm text-slate-500 line-clamp-2">Pelajari cara mengelola data asinkronus dengan efisien di frontend.</p>
            </article>

            {/* Kartu 2 */}
            <article className="group cursor-pointer">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <img alt="Related" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsmX151AYJ37X6kCtuIPInemBCv2mBI7iylpe9SGpHtcxBya-6niUXKB3rF9PKsE7DhpvzuHpoUJUwJMha23hpYDJgnfOhTPwgPAaU47bP0XCoVtV9yTak2qNS4SgCS8Z2R0ZlushqTV79lQMZw9fb5R9UHy6cngmrHkDZ8BXLE_6fjH31HOyJyRCZqohFdzLo8kEdfcw8Fi6whWOzpyrC1hgt4a6-4a4KMSK0QjvPLYN7ZjBJWTwlgIoEjSgBqjG8C7IP7gHUI57m"/>
              </div>
              <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-2">
                Tips Mengatur Portofolio GitHub yang Menarik Recruiter
              </h4>
              <p className="text-sm text-slate-500 line-clamp-2">Optimalkan profil GitHub Anda untuk meningkatkan peluang kerja.</p>
            </article>

            {/* Kartu 3 */}
            <article className="group cursor-pointer">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <img alt="Related" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSoDpfjvADTXja5UMPPy0EttE-WM6zAgNphunomLX_ptIBbEK4WE_Qol1lzCiVLSoySRWsOT1udjipS0-Kkn3qrJyfvkULReo2pKzw8QWYoGuRiaLyZ6erHBJ8_MwbJ9m3Mw0VSGTXDVxQqY5Lv08gVXtWHuw9MKM2oSiwvnwWkHIFplhNIOEZNHpjOQ0MQ8hpIFMw4zw1UFmlIMHpbw1jNKx5LyrTTZUiCW9mqJbsc7kGtSsDelQVt6Kf2Ha9wy_n96xjHPk5_9F3"/>
              </div>
              <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-2">
                Mengenal Cloud Computing: AWS vs GCP vs Azure
              </h4>
              <p className="text-sm text-slate-500 line-clamp-2">Perbandingan komprehensif penyedia layanan cloud terbaik di pasar.</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}