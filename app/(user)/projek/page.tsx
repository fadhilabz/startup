import React from 'react';

interface ProjectItemProps {
  title: string;
  category: string;
  desc: string;
  image: string;
  tags: { icon: string; color: string }[];
}

export default function ProjekPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
      <main className="pt-4 pb-20 px-6 max-w-7xl mx-auto">
        <section className="mb-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-none">
              <span className="text-blue-600">Karya Terbaik</span> Kami
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              Jelajahi koleksi 6 solusi digital unggulan yang telah kami kembangkan.
            </p>
          </div>
        </section>

        {/* --- GRID PROJEK (6 ITEM) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectItem 
            title="Portal E-Library"
            category="Aplikasi Web"
            desc="Sistem manajemen perpustakaan full-stack dengan pelacakan waktu nyata."
            image="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800"
            tags={[{ icon: 'code', color: 'text-blue-600' }, { icon: 'database', color: 'text-indigo-600' }]}
          />
          <ProjectItem 
            title="EduTrack Mobile"
            category="Mobile"
            desc="Aplikasi lintas platform untuk memantau jadwal kuliah dan tugas."
            image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800"
            tags={[{ icon: 'flutter', color: 'text-sky-500' }, { icon: 'local_fire_department', color: 'text-orange-500' }]}
          />
          <ProjectItem 
            title="Dashboard Keuangan"
            category="SaaS"
            desc="Monitoring finansial perusahaan dengan analitik data AWS."
            image="https://images.unsplash.com/photo-1551288049-bbbda536339a?w=800"
            tags={[{ icon: 'monitoring', color: 'text-emerald-600' }, { icon: 'cloud', color: 'text-orange-600' }]}
          />
          <ProjectItem 
            title="Aplikasi Kesehatan"
            category="Health Tech"
            desc="Platform telemedis aman menghubungkan dokter dengan pasien."
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800"
            tags={[{ icon: 'pulse_alert', color: 'text-red-500' }, { icon: 'bolt', color: 'text-yellow-600' }]}
          />
          <ProjectItem 
            title="Portfolio CMS"
            category="Desain UI/UX"
            desc="CMS headless kustom untuk profesional kreatif memamerkan karya."
            image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800"
            tags={[{ icon: 'brush', color: 'text-pink-500' }, { icon: 'layers', color: 'text-indigo-500' }]}
          />
          <ProjectItem 
            title="EcoMarket"
            category="E-Commerce"
            desc="Pasar berkelanjutan dengan pelacakan jejak karbon produk."
            image="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800"
            tags={[{ icon: 'shopping_cart', color: 'text-green-600' }, { icon: 'speed', color: 'text-cyan-600' }]}
          />
        </div>

        {/* --- PAGINATION --- */}
        <div className="flex items-center justify-center mt-20 gap-2">
          <button className="size-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold cursor-pointer">1</button>
          <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer">2</button>
          <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer">
            <span className="material-symbols-outlined text-lg">chevron_right</span>
          </button>
        </div>
      </main>

      
    </div>
  );
}

function ProjectItem({ title, category, desc, image, tags }: ProjectItemProps) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 transition-all hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4">
          {tags.map((tag, idx) => (
            <div key={idx} className="flex items-center justify-center size-8 rounded-lg bg-slate-50 border border-slate-100">
              <span className={`material-symbols-outlined text-lg ${tag.color}`}>{tag.icon}</span>
            </div>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">{desc}</p>
        <button className="mt-auto flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3 transition-all cursor-pointer">
          Lihat Detail <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}