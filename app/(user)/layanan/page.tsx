'use client';

import React from 'react';

/**
 * Komponen ServicesPage
 * Halaman daftar layanan digital dengan grid interaktif
 * dan visualisasi proses kerja (stepper).
 */
export default function ServicesPage() {
  const services = [
    {
      title: "Pengembangan Web",
      desc: "Solusi website kustom menggunakan React, Next.js, dan Tailwind CSS. Performa tinggi dan SEO-friendly.",
      icon: "code",
      color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Aplikasi Mobile",
      desc: "Aplikasi iOS & Android performa tinggi berbasis Flutter atau Native. Antarmuka lancar dan backend solid.",
      icon: "smartphone",
      color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Desain UI/UX",
      desc: "Riset mendalam dan prototyping berpusat pada pengguna. Menciptakan pengalaman digital yang intuitif.",
      icon: "palette",
      color: "bg-pink-50 text-pink-600 dark:bg-pink-900/20",
      img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Konsultasi IT",
      desc: "Perencanaan arsitektur cloud, skalabilitas infrastruktur, dan strategi teknologi jangka panjang.",
      icon: "cloud_sync",
      color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const steps = [
    { num: "1", title: "Analisis", desc: "Riset pasar mendalam.", icon: "search" },
    { num: "2", title: "Desain", desc: "Perancangan alur optimal.", icon: "draw" },
    { num: "3", title: "Pengembangan", desc: "Koding & integrasi andal.", icon: "data_object" },
    { num: "4", title: "Pengujian", desc: "QA & peluncuran produk.", icon: "check_circle", active: true }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f6f8] dark:bg-[#101622] font-sans text-slate-900 dark:text-slate-100 antialiased">
      
      {/* --- MAIN CONTENT --- */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12 lg:px-12">
        
        {/* Hero Section Layanan */}
        <section className="mb-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block rounded-full bg-[#0d59f2]/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#0d59f2]">
              Layanan Digital
            </span>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Solusi Teknologi<br/>Untuk Inovasi Anda
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
              Kami membantu transformasi digital UKM dan startup melalui teknologi terkini dengan pendekatan yang terukur dan efisien.
            </p>
          </div>
          <button className="flex items-center gap-3 rounded-2xl bg-white dark:bg-slate-800 px-8 py-5 text-sm font-black text-slate-900 dark:text-white shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-700">
            <span className="material-symbols-outlined text-[#0d59f2]">event_note</span>
            Konsultasi Gratis
          </button>
        </section>

        {/* Grid Kartu Layanan */}
        <section className="mb-28 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 transition-all hover:border-[#0d59f2]/30 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/50">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-slate-100">
                <img 
                  alt={service.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src={service.img} 
                />
              </div>
              <div className="px-5 pb-6 pt-6 flex flex-col flex-1">
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${service.color}`}>
                  <span className="material-symbols-outlined text-3xl font-bold">{service.icon}</span>
                </div>
                <h3 className="mb-3 text-xl font-black text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mb-8 text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-medium flex-1">
                  {service.desc}
                </p>
                <button className="w-full rounded-xl bg-[#0d59f2] py-4 text-xs font-black uppercase tracking-widest text-white transition-all group-hover:shadow-lg group-hover:shadow-blue-500/30">
                  Pilih Layanan
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Proses Kerja Section */}
        <section className="rounded-[3rem] bg-white dark:bg-slate-900/50 p-10 lg:p-20 border border-slate-100 dark:border-slate-800">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Proses Kerja Kami</h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400 font-medium">Metodologi terstruktur untuk hasil yang maksimal dan transparan.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                {/* Garis penghubung antar step */}
                {idx !== steps.length - 1 && (
                  <div className="absolute left-1/2 top-10 hidden h-[2px] w-full bg-slate-100 dark:bg-slate-800 md:block"></div>
                )}
                
                <div className={`z-10 flex h-20 w-20 items-center justify-center rounded-3xl transition-all duration-300 shadow-xl ${
                  step.active 
                    ? 'bg-[#0d59f2] text-white' 
                    : 'bg-white dark:bg-slate-800 text-[#0d59f2] border border-slate-100 dark:border-slate-700'
                }`}>
                  <span className="material-symbols-outlined text-3xl font-bold">{step.icon}</span>
                </div>
                
                <div className="mt-8">
                  <span className="text-[10px] font-black text-[#0d59f2] uppercase tracking-[0.3em]">Tahap 0{step.num}</span>
                  <h4 className="text-xl font-black text-slate-900 dark:text-white mt-1">{step.title}</h4>
                  <p className="mt-3 text-xs font-medium text-slate-500 dark:text-slate-400 px-6 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}