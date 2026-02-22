import React from 'react';
import { VisiMisi } from '@/components/About/VisiMisi';
import { Values } from '@/components/About/Values';

export default function AboutPage() {
  return (
    <div className="bg-slate-950 dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-slate-100 antialiased selection:bg-primary selection:text-white">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      {/* Hero Section Profil */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 opacity-40 dark:opacity-20">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/50 to-background-dark" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center pt-20 pb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            Profil Organisasi
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-8">
            Membangun Masa Depan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Digital</span> Bersama.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Kami adalah wadah bagi para inovator muda untuk mengeksplorasi, berkolaborasi, dan menciptakan solusi teknologi yang berdampak nyata bagi masyarakat.
          </p>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <VisiMisi />

      {/* Nilai Utama Section */}
      <Values />

    </div>
  );
}