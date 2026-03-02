"use client";

import React, { useState } from "react";

/**
 * Komponen ContactPage
 * Menampilkan formulir kontak dan informasi detail lokasi/kontak organisasi.
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pesan Terkirim:", formData);
    alert("Terima kasih! Pesan Anda telah kami terima.");
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f6f8] dark:bg-[#101622] font-sans text-slate-900 dark:text-slate-100 antialiased">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[450px] w-full overflow-hidden flex items-center justify-center text-center px-6">
        {/* Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(13, 89, 242, 0.92), rgba(13, 89, 242, 0.75)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80')`,
          }}
        />

        <div className="relative z-10 max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">Konsultasi Gratis</h1>
          <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed">
            Punya ide brilian atau masalah IT yang perlu diselesaikan? Tim ahli UKM Informatika siap membantu mewujudkan solusi digital terbaik untuk Anda.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="max-w-7xl mx-auto w-full px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* KOLOM KIRI: FORMULIR */}
          <div className="bg-white dark:bg-slate-900/50 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8">Kirim Pesan</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Nama Lengkap</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-slate-100 rounded-2xl border-slate-400 dark:border-slate-700 dark:bg-slate-800 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all p-4 text-sm font-medium"
                    placeholder="Contoh: John Doe"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Alamat Email</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-slate-100 rounded-2xl border-slate-100 dark:border-slate-700 dark:bg-slate-800 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all p-4 text-sm font-medium"
                    placeholder="john@example.com"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Subjek</label>
                <input
                  required
                  type="text"
                  className="w-full bg-slate-100 rounded-2xl border-slate-100 dark:border-slate-700 dark:bg-slate-800 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all p-4 text-sm font-medium"
                  placeholder="Apa yang ingin Anda bicarakan?"
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Pesan</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-slate-100 rounded-2xl border-slate-100 dark:border-slate-700 dark:bg-slate-800 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all p-4 text-sm font-medium"
                  placeholder="Tuliskan detail kebutuhan Anda di sini..."
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0d59f2] hover:bg-blue-700 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 active:scale-95"
              >
                <span className="material-symbols-outlined font-bold">send</span>
                Kirim Pesan Sekarang
              </button>
            </form>
          </div>

          {/* KOLOM KANAN: INFO KONTAK & MAP */}
          <div className="space-y-10">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Informasi Kontak</h2>

            <div className="space-y-6">
              {/* Kontak Item */}
              {[
                { icon: "location_on", label: "Alamat Kantor", val: "Gedung UKM Center, Lantai 3, Universitas Dayanu Ikhsanuddin" },
                { icon: "mail", label: "Email Resmi", val: "halo@ukminformatika.com" },
                { icon: "phone_iphone", label: "WhatsApp", val: "+62 812-3456-7890" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-6 p-6 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-50 dark:border-slate-800 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all group"
                >
                  <div className="size-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-[#0d59f2] flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl font-bold">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</h4>
                    <p className="text-slate-800 dark:text-slate-200 font-bold leading-relaxed">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Placeholder */}
            <div className="rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-slate-800 h-[350px] shadow-2xl relative group">
              {/* Perbaikan: Atribut 'style' harus berupa object, dan 'allowFullScreen' menggunakan camelCase */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.523846478111!2d122.56967147354368!3d-5.48892275465825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2da47694c3c936c3%3A0x7b50a493452ef15!2sUniversitas%20Dayanu%20Ikhsanuddin%20-%20Kampus%201!5e0!3m2!1sid!2sid!4v1772340504130!5m2!1sid!2sid"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Overlay Biru Tipis agar matching dengan tema */}
              <div className="absolute inset-0 bg-blue-600/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />

              {/* Badge Lokasi Kami */}
              <div className="absolute bottom-6 left-6 bg-white dark:bg-slate-900 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 border border-slate-100 dark:border-slate-800">
                <span className="size-3 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-tighter text-slate-900 dark:text-white">Lokasi Kami</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
