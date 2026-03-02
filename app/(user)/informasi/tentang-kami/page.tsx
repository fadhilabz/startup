import React from 'react';
import Link from 'next/link';

export default function TentangKami() {
  return (
    <div className="bg-background-light font-display text-slate-800 selection:bg-primary selection:text-white">

      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 overflow-hidden min-h-[600px] flex items-center justify-center">
        {/* Background dengan Overlay Gradient */}
        <div 
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(19, 91, 236, 0.85), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20 pb-24">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold tracking-widest uppercase mb-6">
            Profil Organisasi
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-8">
            Membangun Masa Depan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Digital</span> Bersama.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Kami adalah wadah bagi para inovator muda untuk mengeksplorasi, berkolaborasi, dan menciptakan solusi teknologi yang berdampak nyata bagi masyarakat.
          </p>
        </div>
      </section>

      {/* --- VISI & MISI --- */}
      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Kartu Visi */}
            <div className="group relative bg-slate-50 p-12 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-xl hover:border-blue-600/30">
              <div className="absolute -top-6 left-12 bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-600/30">
                <span className="material-symbols-outlined text-white text-3xl">visibility</span>
              </div>
              <div className="pt-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Visi Kami</h2>
                <p className="text-2xl leading-relaxed text-slate-700 font-medium italic">
                  Menjadi pusat unggulan pengembangan teknologi informasi yang melahirkan talenta digital kompeten, inovatif, dan beretika dalam menghadapi tantangan global.
                </p>
                <div className="mt-12 h-1.5 w-24 bg-blue-600 rounded-full"></div>
              </div>
            </div>

            {/* Kartu Misi */}
            <div className="bg-slate-50 p-12 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-5 mb-10">
                <div className="bg-blue-600/10 p-4 rounded-xl">
                  <span className="material-symbols-outlined text-blue-600 text-3xl font-bold">rocket_launch</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Misi Kami</h2>
              </div>
              <ul className="space-y-8">
                <MisiItem 
                  title="Pengembangan Kompetensi" 
                  desc="Menyelenggarakan pelatihan teknis yang intensif dan relevan dengan kebutuhan industri IT saat ini." 
                />
                <MisiItem 
                  title="Inovasi & Riset" 
                  desc="Mendorong terciptanya produk digital dan riset teknologi yang solutif bagi permasalahan sekitar." 
                />
                <MisiItem 
                  title="Jejaring Profesional" 
                  desc="Membangun kolaborasi strategis dengan komunitas, institusi, dan praktisi industri teknologi." 
                />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- NILAI UTAMA --- */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Nilai-Nilai Utama Kami</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Fondasi yang mendasari setiap langkah dan karya kami untuk kemajuan teknologi.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard 
              icon="lightbulb" 
              title="Inovasi" 
              desc="Kami terus mengeksplorasi teknologi baru untuk menciptakan solusi yang lebih cerdas." 
            />
            <ValueCard 
              icon="groups" 
              title="Kolaborasi" 
              desc="Kami percaya bahwa ide besar lahir dari diskusi dan kerja sama tim yang solid." 
            />
            <ValueCard 
              icon="verified" 
              title="Keunggulan" 
              desc="Kami berkomitmen pada standar kualitas tertinggi dalam setiap kode yang kami tulis." 
            />
          </div>
        </div>
      </section>

      
    </div>
  );
}

// --- SUB-KOMPONEN ---

function MisiItem({ title, desc }: { title: string, desc: string }) {
  return (
    <li className="flex gap-5">
      <div className="flex-shrink-0 mt-1">
        <span className="material-symbols-outlined text-blue-600 text-2xl font-bold">check_circle</span>
      </div>
      <div>
        <h4 className="font-bold text-xl text-slate-900 mb-2">{title}</h4>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </li>
  );
}

function ValueCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="group p-10 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
        <span className="material-symbols-outlined text-blue-600 group-hover:text-white text-4xl">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}