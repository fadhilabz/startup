import React from 'react';
import Link from 'next/link';

// Komponen Card untuk Anggota Tim
function TeamMember({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="bg-white border border-slate-100 p-8 rounded-2xl flex flex-col items-center text-center shadow-sm transition-all hover:border-blue-600/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/10">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-blue-600/10 blur-2xl rounded-full"></div>
        <div className="relative w-32 h-32 rounded-full p-1 bg-white border border-slate-100 shadow-sm overflow-hidden">
          <img alt={name} className="w-full h-full object-cover rounded-full" src={image} />
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-1">{name}</h3>
      <p className="text-blue-600 font-semibold text-[10px] mb-8 uppercase tracking-widest">{role}</p>
      
      {/* Social Links */}
      <div className="flex gap-3 mt-auto">
        <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 hover:bg-blue-600 hover:text-white transition-all text-slate-500 border border-slate-100">
          <span className="material-symbols-outlined text-lg">share</span>
        </Link>
        <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 hover:bg-blue-600 hover:text-white transition-all text-slate-500 border border-slate-100">
          <span className="material-symbols-outlined text-lg">alternate_email</span>
        </Link>
      </div>
    </div>
  );
}

export default function TimPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-[-1] opacity-60" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(19, 91, 236, 0.07) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px]"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px]"></div>

      

      <main className="pt-4 pb-20">
        {/* --- HEADER SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-600/10 text-blue-600 text-[10px] font-bold tracking-wider uppercase mb-6">
            The Innovators
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Kenali Tim <span className="text-blue-600">Kreatif</span> Kami
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed">
            Mahasiswa penggerak inovasi teknologi dan solusi digital masa depan. Kami membangun ekosistem teknologi yang inklusif dan kolaboratif.
          </p>
        </section>

        {/* --- GRID TIM --- */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <TeamMember 
              name="Andi Pratama" 
              role="Lead Developer" 
              image="https://i.pravatar.cc/150?u=10" 
            />
            <TeamMember 
              name="Siti Aminah" 
              role="UI/UX Designer" 
              image="https://i.pravatar.cc/150?u=11" 
            />
            <TeamMember 
              name="Budi Santoso" 
              role="Project Manager" 
              image="https://i.pravatar.cc/150?u=12" 
            />
            <TeamMember 
              name="Rina Wijaya" 
              role="Backend Engineer" 
              image="https://i.pravatar.cc/150?u=13" 
            />
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="max-w-4xl mx-auto px-6 mt-32">
          <div className="bg-white border border-slate-100 rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden shadow-xl shadow-slate-200/50">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Bergabung dengan Kami</h2>
            <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Ingin menjadi bagian dari perjalanan inovasi kami selanjutnya? Kami selalu mencari talenta muda yang bersemangat dalam dunia teknologi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 cursor-pointer">
                Daftar Rekrutmen
              </button>
              <button className="w-full sm:w-auto px-10 py-4 bg-slate-100 text-slate-700 rounded-full font-bold text-lg hover:bg-slate-200 transition-all cursor-pointer">
                Pelajari Program
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}