import React from 'react';

export default function Home() {
  return (
    <div className="bg-background-light font-display text-slate-900 antialiased">

      <main className="">
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[85vh] flex items-center justify-center px-6 hero-gradient overflow-hidden">
          <div className="max-w-4xl mx-auto text-center z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Pengembang Mahasiswa Masa Depan
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900">
              Memberdayakan <br /><span className="text-primary italic">Inovasi</span> dengan IT
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Keunggulan digital yang dipimpin mahasiswa, mendorong masa depan teknologi melalui pengembangan kolaboratif dan solusi IT inovatif.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-primary/20 cursor-pointer">
                Mulai Sekarang
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-sm cursor-pointer">
                Lihat Portofolio
              </button>
            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section className="py-4 px-6 max-w-7xl mx-auto">
          <div className="mb-6">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Apa yang kami lakukan</h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h3 className="text-4xl font-black text-slate-900 max-w-xl">Solusi IT Khusus untuk Era Modern</h3>
              <p className="text-slate-500 max-w-md pb-8 ">Kami menyediakan layanan transformasi digital menyeluruh yang disesuaikan untuk kebutuhan modern.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard icon="code" title="Pengembangan Web" desc="Membangun aplikasi web yang responsif dan skalabel menggunakan framework modern seperti React, Vue, dan Next.js." />
            <FeatureCard icon="smartphone" title="Aplikasi Mobile" desc="Menghadirkan pengalaman mobile yang mulus untuk platform iOS dan Android menggunakan Flutter dan React Native." />
            <FeatureCard icon="palette" title="Desain UI/UX" desc="Mendesain antarmuka pengguna yang intuitif dan estetis dengan glassmorphism modern dan aksesibilitas tinggi." />
          </div>
        </section>

        {/* --- GALLERY SECTION --- */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 text-slate-900">Galeri Projek</h2>
              <p className="text-slate-500">Karya terpilih dari komunitas pengembang kami</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard 
                category="Aplikasi Web" 
                title="Dashboard Analitik Fintech" 
                desc="Pelacakan keuangan real-time untuk startup."
                image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
              />
              <ProjectCard 
                category="Mobile" 
                title="ZenHealth Tracker" 
                desc="Pendamping kesehatan mental & kesejahteraan minimalis."
                image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
              />
              <ProjectCard 
                category="Desain UI/UX" 
                title="Nexus Storefront" 
                desc="Pasar teknologi mewah dengan tampilan 3D."
                image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000"
              />
            </div>
            <div className="mt-12 text-center">
              <button className="text-primary font-bold flex items-center gap-2 mx-auto hover:gap-4 transition-all cursor-pointer">
                Jelajahi Koleksi Lengkap <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto rounded-[2rem] bg-primary p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32"></div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10">Siap membangun masa depan?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-xl mx-auto relative z-10">
              Apakah Anda mahasiswa yang ingin berkembang atau bisnis yang mencari inovasi, kami di sini untuk membantu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="px-10 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-lg cursor-pointer">
                Rekrut Tim Kami
              </button>
              <button className="px-10 py-4 bg-primary/10 backdrop-blur-md border border-white/40 text-white font-bold rounded-xl hover:bg-primary/20 transition-colors cursor-pointer">
                Gabung dengan Kami
              </button>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}

// --- SUB-COMPONENTS ---

function FeatureCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="group p-8 rounded-2xl bg-card-light border border-slate-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
      <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h4 className="text-xl font-bold mb-4 text-slate-900">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function ProjectCard({ category, title, desc, image }: { category: string, title: string, desc: string, image: string }) {
  return (
    <div className="group relative aspect-video overflow-hidden rounded-2xl bg-slate-200 border border-slate-200 shadow-sm">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-left">
        <span className="text-white text-xs font-bold uppercase mb-2">{category}</span>
        <h5 className="text-xl font-bold text-white">{title}</h5>
        <p className="text-white/80 text-sm mt-2">{desc}</p>
      </div>
    </div>
  );
}