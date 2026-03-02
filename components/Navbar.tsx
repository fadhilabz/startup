"use client";

import React, { useState } from "react"; // Menambahkan useState
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <>
      <style jsx>{`
        .glass-nav {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
        }
      `}</style>

      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-blue-600 rounded-lg text-white shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl leading-none">terminal</span>
            </div>
            <span className="text-xl font-black tracking-tight uppercase text-slate-900">
              UKM <span className="text-blue-600">Informatika</span>
            </span>
          </Link>

          {/* Desktop Menu - Navigasi Utama */}
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors" href="/">
              Beranda
            </Link>

            <Link className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors" href="/layanan">
              Layanan
            </Link>

            <Link className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors" href="/materi">
              Materi
            </Link>

            <Link className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors" href="/blog">
              Blog
            </Link>

            <Link className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors" href="/projek">
              Projek
            </Link>

            {/* Dropdown Informasi (Menu Penunjang) */}
            <div className="relative group px-2 py-1">
              <button className="flex items-center gap-1 text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors cursor-pointer">
                Informasi
                <span className="material-symbols-outlined text-lg group-hover:rotate-180 transition-transform duration-300">expand_more</span>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full right-0 mt-2 w-52 bg-white border border-slate-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 border-t-4 border-t-blue-600">
                <Link className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors" href="/tentang/tim-kami">
                  <span className="material-symbols-outlined text-base">group</span> Tim Kami
                </Link>
                <Link className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors" href="/informasi/tentang-kami">
                  <span className="material-symbols-outlined text-base">info</span> Tentang Kami
                </Link>
                <Link className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors" href="/informasi/kebijakan-privasi">
                  <span className="material-symbols-outlined text-base">verified_user</span> Kebijakan Privasi
                </Link>
                <Link className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors" href="/informasi/syarat-ketentuan">
                  <span className="material-symbols-outlined text-base">description</span> Syarat & Ketentuan
                </Link>
                <div className="border-t border-slate-100 my-1"></div>
                <Link className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors" href="/informasi/hubungi-kami">
                  <span className="material-symbols-outlined text-base">mail</span> Hubungi Kami
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <button className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95 cursor-pointer">
              Gabung Sekarang
            </button>

            {/* Mobile Menu Icon - Sekarang Bisa Di Klik */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-3xl">{isOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>

        {/* Overlay Menu Mobile (Muncul saat isOpen true) */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-xl animate-in slide-in-from-top duration-300">
            <div className="px-6 py-8 flex flex-col gap-6">
              <Link onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-700" href="/">
                Beranda
              </Link>
              <Link onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-700" href="/layanan">
                Layanan
              </Link>
              <Link onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-700" href="/materi">
                Materi
              </Link>
              <Link onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-700" href="/blog">
                Blog
              </Link>
              <Link onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-700" href="/projek">
                Projek
              </Link>

              <hr className="border-slate-100" />

              {/* Menu Informasi Mobile - Struktur Sama dengan Desktop */}
              <div className="flex flex-col">
                <button onClick={() => setIsInfoOpen(!isInfoOpen)} className="flex items-center justify-between text-lg font-bold text-slate-700 cursor-pointer transition-colors">
                  Informasi
                  <span className={`material-symbols-outlined text-lg transition-transform duration-300 ${isInfoOpen ? "rotate-180 text-blue-600" : ""}`}>expand_more</span>
                </button>

                <div className={`flex flex-col mt-2 overflow-hidden transition-all duration-300 ${isInfoOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                  <Link
                    onClick={() => {
                      setIsOpen(false);
                      setIsInfoOpen(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
                    href="/informasi/tim"
                  >
                    <span className="material-symbols-outlined text-base">group</span> Tim Kami
                  </Link>
                  <Link
                    onClick={() => {
                      setIsOpen(false);
                      setIsInfoOpen(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
                    href="/informasi/tentang-kami"
                  >
                    <span className="material-symbols-outlined text-base">info</span> Tentang Kami
                  </Link>
                  <Link
                    onClick={() => {
                      setIsOpen(false);
                      setIsInfoOpen(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
                    href="/informasi/kebijakan-privasi"
                  >
                    <span className="material-symbols-outlined text-base">verified_user</span> Kebijakan Privasi
                  </Link>
                  <Link
                    onClick={() => {
                      setIsOpen(false);
                      setIsInfoOpen(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
                    href="/informasi/syarat-ketentuan"
                  >
                    <span className="material-symbols-outlined text-base">description</span> Syarat & Ketentuan
                  </Link>
                  <div className="border-t border-slate-100 my-1 ml-4"></div>
                  <Link
                    onClick={() => {
                      setIsOpen(false);
                      setIsInfoOpen(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg"
                    href="/informasi/hubungi-kami"
                  >
                    <span className="material-symbols-outlined text-base">mail</span> Hubungi Kami
                  </Link>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-600/20 active:scale-95 transition-transform">Gabung Sekarang</button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer agar konten tidak tertutup Navbar yang posisinya 'fixed' */}
      <div className="h-20"></div>
    </>
  );
}
