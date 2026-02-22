"use client"; // Wajib jika menggunakan state di Next.js App Router

import React, { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-950 dark:bg-background-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-primary text-2xl">terminal</span>
          </div>
          <div className="flex flex-col text-white">
            <span className="text-lg font-bold leading-none tracking-tight">UKM START UP </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 font-semibold">
              MR.MILENIAL INFOTEC
            </span>
          </div>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: 'Beranda', href: '/' },
            { name: 'Layanan', href: '#services' },
            { name: 'Projek', href: '/project' },
            { name: 'Blog', href: '#blog' },
            { name: 'Tentang Kami', href: '/about' },
          ].map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-100 dark:text-slate-300 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden lg:flex items-center justify-center size-10 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
            <span className="material-symbols-outlined text-xl">search</span>
          </button>
          
          <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all hidden md:inline-flex">
            Hubungi Kami
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center size-10 text-slate-600 dark:text-slate-300"
          >
            <span className="material-symbols-outlined">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 dark:bg-background-dark border-b border-white/5 px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5">
          <Link href="/" className="text-primary font-medium">Beranda</Link>
          <Link href="#services" className="text-slate-100 dark:text-slate-300">Layanan</Link>
          <Link href="/project" className="text-slate-100 dark:text-slate-300">Projek</Link>
          <Link href="/about" className="text-slate-100 dark:text-slate-300">Tentang Kami</Link>
        </div>
      )}

      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
    </nav>
  );
};