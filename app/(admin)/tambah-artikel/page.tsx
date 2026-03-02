"use client";

import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Image from "next/image";

// Struktur data blok konten
type ContentBlock = {
  id: string;
  type: "paragraph" | "image" | "heading";
  value: string;
  caption?: string;
};

export default function AdminTambahArtikel() {
  const [isClient, setIsClient] = useState(false);

  // --- 1. STATE IDENTITAS ARTIKEL ---
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  
  // --- 2. STATE GAMBAR UTAMA (FEATURED - PALING ATAS) ---
  const [featuredImage, setFeaturedImage] = useState("");
  const [featuredCaption, setFeaturedCaption] = useState("");

  // --- 3. STATE SIDEBAR (PENGATURAN) ---
  const [category, setCategory] = useState("Tutorial");
  const [metaDesc, setMetaDesc] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  
  // --- 4. STATE KONTEN DINAMIS (BLOCKS) ---
  const [blocks, setBlocks] = useState<ContentBlock[]>([
    { id: "1", type: "heading", value: "" },
    { id: "2", type: "paragraph", value: "" }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fungsi membuat Slug otomatis dari Judul
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    setSlug(
      value
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "")
    );
  };

  // --- FUNGSI MANIPULASI BLOK ---
  const addHeading = () => setBlocks([...blocks, { id: Date.now().toString(), type: "heading", value: "" }]);
  const addParagraph = () => setBlocks([...blocks, { id: Date.now().toString(), type: "paragraph", value: "" }]);
  const addImage = () => setBlocks([...blocks, { id: Date.now().toString(), type: "image", value: "", caption: "" }]);
  
  const updateBlock = (id: string, val: string) => 
    setBlocks(blocks.map((b) => (b.id === id ? { ...b, value: val } : b)));
  
  const updateCaption = (id: string, cap: string) => 
    setBlocks(blocks.map((b) => (b.id === id ? { ...b, caption: cap } : b)));
  
  const removeBlock = (id: string) => 
    blocks.length > 1 && setBlocks(blocks.filter((b) => b.id !== id));

  // --- FUNGSI PUBLISH KE FIREBASE ---
  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !featuredImage.trim()) {
      alert("⚠️ Judul dan Gambar Utama wajib diisi!");
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        title,
        slug,
        featuredImage,
        featuredCaption,
        category,
        metaDesc,
        tags,
        blocks,
        createdAt: serverTimestamp(),
        dateString: new Date().toLocaleDateString("id-ID", {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }),
      };

      await addDoc(collection(db, "articles"), payload);
      alert("🚀 ARTIKEL BERHASIL DITERBITKAN!");
      
      // Reset Form
      setTitle(""); setSlug(""); setFeaturedImage(""); setFeaturedCaption(""); setMetaDesc("");
      setBlocks([{ id: "1", type: "heading", value: "" }, { id: "2", type: "paragraph", value: "" }]);
      
    } catch (error) {
      console.error("Firebase Error:", error);
      alert("Gagal menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isClient) return null;

  return (
    <div className="bg-[#f5f6f8] dark:bg-[#101622] min-h-screen pb-20 font-sans text-slate-900 dark:text-slate-100">
      
      {/* HEADER NAVBAR */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-3 text-[#0d59f2]">
          <span className="material-symbols-outlined font-black">edit_square</span>
          <h2 className="text-xl font-black uppercase tracking-tighter">Writer Studio</h2>
        </div>
        <button 
          onClick={handlePublish} 
          disabled={isSubmitting}
          className="px-8 py-2.5 rounded-2xl bg-[#0d59f2] text-white text-xs font-black uppercase hover:shadow-xl hover:shadow-blue-500/40 transition-all disabled:bg-slate-400 active:scale-95"
        >
          {isSubmitting ? "Sedang Memproses..." : "Terbitkan Sekarang"}
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* KOLOM KIRI: EDITOR KONTEN */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* AREA JUDUL */}
            <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm">
              <label className="text-[10px] font-black uppercase text-[#0d59f2] mb-4 block tracking-[0.2em]">Judul Spektakuler</label>
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Mulai dengan judul yang memikat..."
                className="w-full bg-transparent text-5xl font-black focus:outline-none placeholder:text-slate-200 dark:placeholder:text-slate-700"
              />
              <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-6 bg-slate-50 dark:bg-slate-800/50 p-2 px-5 rounded-full w-fit border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined text-sm text-blue-500">link</span>
                <span className="font-medium">Slug URL: <span className="text-blue-600 font-bold">/{slug || "otomatis-terisi"}</span></span>
              </div>
            </div>

            {/* HEADER MEDIA (GAMBAR UTAMA) */}
            <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-blue-600">
                <span className="material-symbols-outlined text-xl">gallery_thumbnail</span>
                <span className="text-[10px] font-black uppercase tracking-widest">Featured Header Media</span>
              </div>
              <input 
                type="text" 
                value={featuredImage} 
                onChange={(e) => setFeaturedImage(e.target.value)} 
                placeholder="Tempel link gambar utama di sini..." 
                className="w-full p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl text-sm border-none focus:ring-2 focus:ring-blue-500 outline-none shadow-inner" 
              />
              {featuredImage && (
                <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
                   <Image src={featuredImage} className="w-full aspect-video object-cover" alt="Preview" />
                </div>
              )}
              <input 
                type="text" 
                value={featuredCaption} 
                onChange={(e) => setFeaturedCaption(e.target.value)} 
                placeholder="Tulis deskripsi singkat atau sumber gambar..." 
                className="w-full p-2 bg-transparent border-l-4 border-blue-500 text-sm italic text-slate-500 outline-none ml-2" 
              />
            </div>

            <div className="flex items-center justify-center py-4">
              <div className="h-px w-full bg-slate-200 dark:bg-slate-800"></div>
              <span className="px-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">Konten</span>
              <div className="h-px w-full bg-slate-200 dark:bg-slate-800"></div>
            </div>

            {/* RENDER SEMUA BLOK SECARA BERURUTAN */}
            <div className="space-y-8">
              {blocks.map((block) => (
                <div key={block.id} className="relative group animate-in fade-in slide-in-from-bottom-4 duration-500">
                  
                  {block.type === "heading" ? (
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-4xl border-l-12  border border-slate-200 dark:border-slate-800 shadow-sm">
                       <label className="text-[9px] font-black uppercase text-blue-600 mb-2 block tracking-widest">Sub-Heading (Poin Pembahasan)</label>
                       <input 
                        type="text"
                        value={block.value}
                        onChange={(e) => updateBlock(block.id, e.target.value)}
                        placeholder="Ketik Poin Utama..."
                        className="w-full bg-transparent text-3xl font-bold focus:outline-none"
                       />
                    </div>
                  ) : block.type === "paragraph" ? (
                    <textarea
                      value={block.value}
                      onChange={(e) => updateBlock(block.id, e.target.value)}
                      className="w-full min-h-45 p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:outline-none text-xl leading-[1.8] dark:text-slate-300 shadow-sm"
                      placeholder="Tulis cerita atau penjelasan detail di sini..."
                    />
                  ) : (
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
                      <input 
                        type="text" 
                        value={block.value} 
                        onChange={(e) => updateBlock(block.id, e.target.value)} 
                        placeholder="Link Gambar Pendukung..." 
                        className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-sm outline-none shadow-inner" 
                      />
                      {block.value && <Image src={block.value} className="rounded-2xl w-full max-h-125 object-cover shadow-lg" alt="Blok Media" />}
                      <input 
                        type="text" 
                        value={block.caption} 
                        onChange={(e) => updateCaption(block.id, e.target.value)} 
                        placeholder="Keterangan gambar..." 
                        className="w-full p-2 text-xs italic text-slate-400 outline-none bg-transparent border-b border-slate-100 dark:border-slate-800" 
                      />
                    </div>
                  )}

                  {/* Tombol Hapus Blok */}
                  <button 
                    onClick={() => removeBlock(block.id)} 
                    className="absolute -top-4 -right-4 bg-red-500 text-white shadow-2xl rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 z-10 border-4 border-white dark:border-[#101622]"
                  >
                    <span className="material-symbols-outlined text-sm font-black">close</span>
                  </button>
                </div>
              ))}
            </div>

            {/* NAVIGASI TAMBAH BLOK */}
            <div className="flex flex-wrap justify-center gap-6 py-12 border-4 border-dotted border-slate-200 dark:border-slate-800 rounded-[3rem] bg-white/30 dark:bg-slate-900/30">
              <button onClick={addHeading} className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl shadow-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all hover:-translate-y-1">
                <span className="material-symbols-outlined">title</span> + Sub-Judul
              </button>
              <button onClick={addParagraph} className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 font-black text-xs uppercase tracking-widest hover:border-blue-500 transition-all hover:-translate-y-1">
                <span className="material-symbols-outlined text-blue-600">article</span> + Paragraf
              </button>
              <button onClick={addImage} className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 font-black text-xs uppercase tracking-widest hover:border-blue-500 transition-all hover:-translate-y-1">
                <span className="material-symbols-outlined text-blue-600">add_a_photo</span> + Media
              </button>
            </div>
          </div>

          {/* KOLOM KANAN: SIDEBAR PENGATURAN */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm sticky top-28 space-y-10">
              
              {/* DROPDOWN KATEGORI */}
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase block mb-5 tracking-[0.2em]">Pilih Kategori</label>
                <div className="relative">
                  <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                    className="w-full p-5 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-2xl border-none font-bold outline-none cursor-pointer appearance-none shadow-inner"
                  >
                    <option>Tutorial</option>
                    <option>Berita Teknologi</option>
                    <option>Tips & Karir</option>
                    <option>Product Review</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                </div>
              </div>

              {/* SEO AREA */}
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase block mb-5 tracking-[0.2em]">Deskripsi SEO (Meta)</label>
                <textarea 
                  value={metaDesc} 
                  onChange={(e) => setMetaDesc(e.target.value)} 
                  className="w-full p-5 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-2xl border-none text-xs h-40 resize-none outline-none shadow-inner leading-relaxed" 
                  placeholder="Ringkasan artikel untuk Google Search... (Max 160 karakter disarankan)"
                />
              </div>

              {/* STATUS CARD */}
              <div className="p-6 bg-[#0d59f2]/5 rounded-3xl border border-[#0d59f2]/10">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <p className="text-[11px] font-bold text-[#0d59f2] uppercase tracking-wider">Sistem Siap Terbit</p>
                </div>
                <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
                  Semua perubahan disimpan secara lokal sampai Anda menekan tombol terbitkan.
                </p>
              </div>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}