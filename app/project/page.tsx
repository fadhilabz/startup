import Link from 'next/link';
import React from 'react';

// Data Projek dipisah agar mudah dikelola dan kode tetap bersih
const PROJECTS = [
  {
    title: "Portal E-Library",
    category: "Aplikasi Web",
    desc: "Sistem manajemen perpustakaan full-stack dengan pelacakan waktu nyata, peminjaman digital, dan notifikasi otomatis.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800",
    techs: [
      { icon: "code", color: "text-primary", label: "React" },
      { icon: "terminal", color: "text-emerald-500", label: "Node.js" },
      { icon: "database", color: "text-blue-400", label: "PostgreSQL" }
    ]
  },
  {
    title: "EduTrack Mobile",
    category: "Mobile",
    desc: "Aplikasi lintas platform yang membantu mahasiswa memantau IPK, jadwal kuliah, dan tenggat waktu tugas secara real-time.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800",
    techs: [
      { icon: "smartphone", color: "text-sky-400", label: "Flutter" },
      { icon: "local_fire_department", color: "text-orange-400", label: "Firebase" }
    ]
  },
  {
    title: "Dashboard Keuangan",
    category: "SaaS",
    desc: "Alat pemantau kesehatan keuangan perusahaan tingkat lanjut dengan visualisasi data interaktif dan analitik AWS.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800",
    techs: [
      { icon: "data_usage", color: "text-emerald-400", label: "D3.js" },
      { icon: "cloud", color: "text-orange-500", label: "AWS" }
    ]
  },
  {
    title: "Aplikasi Kesehatan",
    category: "Health Tech",
    desc: "Platform telemedis aman yang menghubungkan dokter dengan pasien melalui panggilan video terenkripsi.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
    techs: [
      { icon: "pulse_alert", color: "text-blue-300", label: "Health" },
      { icon: "bolt", color: "text-yellow-500", label: "Fast" }
    ]
  },
  {
    title: "Portfolio CMS",
    category: "Desain UI/UX",
    desc: "CMS headless kustom yang dibangun untuk profesional kreatif untuk memamerkan karya dengan kecepatan luar biasa.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    techs: [
      { icon: "brush", color: "text-pink-400", label: "Design" },
      { icon: "layers", color: "text-indigo-400", label: "Layers" }
    ]
  },
  {
    title: "EcoMarket",
    category: "E-Commerce",
    desc: "Pasar berkelanjutan yang menampilkan pelacakan jejak karbon untuk setiap pembelian produk lokal.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800",
    techs: [
      { icon: "shopping_cart", color: "text-green-400", label: "Shop" },
      { icon: "speed", color: "text-cyan-400", label: "Fast" }
    ]
  }
];

export default function ProjectsPage() {
  return (
    <div className="bg-slate-950 dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-slate-100 antialiased selection:bg-primary selection:text-white">
      {/* CDN untuk Material Symbols */}
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* HERO SECTION */}
        <section className="mb-16 max-w-3xl">
          <h1 className="text-5xl text-white md:text-6xl font-black mb-6 tracking-tight leading-[1.1]">
            <span className="text-primary">Karya Terbaik</span> Kami
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
            Jelajahi koleksi solusi digital berdampak tinggi yang dikembangkan oleh tim IT mahasiswa kami. Kami mengubah ide inovatif menjadi perangkat lunak siap pakai.
          </p>
        </section>

        {/* FILTER BAR */}
        <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
          <button className="px-6 py-2 rounded-full bg-primary text-white text-sm font-semibold shadow-md">Semua Projek</button>
          {['Pengembangan Web', 'Aplikasi Mobile', 'Desain UI/UX'].map((cat) => (
            <button key={cat} className="px-6 py-2 rounded-full bg-slate-700 dark:bg-slate-800 hover:bg-primary/10 hover:text-primary text-slate-200 dark:text-slate-300 text-sm font-semibold transition-all">
              {cat}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2 text-slate-400 text-sm">
            <span className="material-symbols-outlined text-lg">filter_list</span>
            <span>Urutkan: Terbaru</span>
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-center mt-20 gap-2">
          <PaginationButton icon="chevron_left" />
          <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
          <PaginationButton label="2" />
          <PaginationButton label="3" />
          <span className="px-2 text-slate-400">...</span>
          <PaginationButton label="12" />
          <PaginationButton icon="chevron_right" />
        </div>
      </main>
    </div>
  );
}

// --- KOMPONEN KECIL ---

// 1. Definisikan Interface untuk keamanan tipe data
interface ProjectProps {
  title: string;
  category: string;
  desc: string;
  image: string;
  techs: {
    icon: string;
    color: string;
    label: string;
  }[];
}

// 2. Gunakan interface tersebut pada fungsi
function ProjectCard({ title, category, desc, image, techs }: ProjectProps) {
  return (
    <div className="group flex flex-col bg-slate-900 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-900 dark:border-slate-800 transition-all hover:border-primary/50 hover:shadow-2xl">
      <div className="relative aspect-video overflow-hidden">
        <div 
          className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110" 
          style={{ backgroundImage: `url('${image}')` }} 
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Ikon Teknologi seperti di Gambar */}
        <div className="flex items-center gap-3 mb-4">
          {techs.map((tech, i) => (
            <div key={i} className="flex items-center justify-center size-10 rounded-xl bg-slate-100 dark:bg-slate-800/50" title={tech.label}>
              <span className={`material-symbols-outlined ${tech.color} text-xl font-light`}>
                {tech.icon}
              </span>
            </div>
          ))}
        </div>

        <h3 className="text-xl text-white font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
          {desc}
        </p>

        <button className="mt-auto flex items-center gap-2 text-sm font-bold text-primary hover:gap-4 transition-all">
          Lihat Detail 
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}

function PaginationButton({ label, icon }: { label?: string, icon?: string }) {
  return (
    <button className="size-10 flex items-center justify-center rounded-lg border text-white border-slate-600 dark:border-slate-800 hover:bg-primary/10 transition-colors font-medium">
      {icon ? <span className="material-symbols-outlined text-lg">{icon}</span> : label}
    </button>
  );
}