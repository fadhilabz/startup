import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-950 dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen">
      {/* Import Icons & Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      <main className="pt-20">
        <section className="relative min-h-[85vh] flex items-center justify-center px-6 hero-gradient overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')" }}></div>
          <div className="max-w-4xl mx-auto text-center z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Pengembang Mahasiswa Masa Depan
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-white">
              Memberdayakan <br />
              <span className="text-primary italic">Inovasi</span> dengan IT
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Keunggulan digital yang dipimpin mahasiswa, mendorong masa depan teknologi melalui pengembangan kolaboratif dan solusi IT inovatif.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl hover:scale-105 transition-transform">Mulai Sekarang</button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 text-slate-100 font-bold rounded-xl hover:bg-white/5 transition-colors">Lihat Portofolio</button>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Apa yang kami lakukan</h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h3 className="text-4xl font-black text-white max-w-xl">Solusi IT Khusus untuk Era Modern</h3>
              <p className="text-slate-400 max-w-md">Kami menyediakan layanan transformasi digital menyeluruh yang disesuaikan untuk kebutuhan modern.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard icon="code" title="Pengembangan Web" desc="Membangun aplikasi web yang responsif dan skalabel menggunakan framework modern seperti React, Vue, dan Next.js." />
            <ServiceCard icon="smartphone" title="Aplikasi Mobile" desc="Menghadirkan pengalaman mobile yang mulus untuk platform iOS dan Android menggunakan Flutter dan React Native." />
            <ServiceCard icon="palette" title="Desain UI/UX" desc="Mendesain antarmuka pengguna yang intuitif dan estetis dengan glassmorphism modern dan aksesibilitas tinggi." />
          </div>
        </section>

        <section className="py-24 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 text-white">Galeri Projek</h2>
              <p className="text-slate-400">Karya terpilih dari komunitas pengembang kami</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard category="Aplikasi Web" title="Dashboard Analitik Fintech" desc="Pelacakan keuangan real-time untuk startup." />
              <ProjectCard category="Mobile" title="ZenHealth Tracker" desc="Pendamping kesehatan mental & kesejahteraan minimalis." />
              <ProjectCard category="Desain UI/UX" title="Nexus Storefront" desc="Pasar teknologi mewah dengan tampilan 3D." />
            </div>
            <div className="mt-12 text-center">
              <Link href="/project" className="mx-auto w-fit text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Jelajahi Koleksi Lengkap <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto rounded-[2rem] bg-primary p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32"></div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10">Siap membangun masa depan?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto relative z-10">Apakah Anda mahasiswa yang ingin berkembang atau bisnis yang mencari inovasi, kami di sini untuk membantu.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="px-10 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-colors">Rekrut Tim Kami</button>
              <button className="px-10 py-4 bg-primary/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-xl hover:bg-primary/30 transition-colors">Gabung dengan Kami</button>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}

// Sub-komponen untuk kebersihan kode
function ServiceCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="group p-8 rounded-2xl bg-slate-900 dark:bg-card-dark dark:border-white/5 hover:border-primary/50 transition-all duration-300 text-white">
      <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h4 className="text-xl font-bold mb-4 dark:text-white">{title}</h4>
      <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function ProjectCard({ category, title, desc }: { category: string; title: string; desc: string }) {
  return (
    <div className="group relative aspect-video overflow-hidden rounded-2xl bg-slate-800 border border-white/10">
      <img
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-50"
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-primary text-xs font-bold uppercase mb-2">{category}</span>
        <h5 className="text-xl font-bold text-white">{title}</h5>
        <p className="text-white/70 text-sm mt-2">{desc}</p>
      </div>
    </div>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  return (
    <a className="w-10 h-10 rounded-lg bg-card-dark border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors" href="#">
      <span className="material-symbols-outlined text-xl">{icon}</span>
    </a>
  );
}


