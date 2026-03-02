"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import Image from "next/image";

interface ArticleBlock {
  type: string;
  value: string;
}

interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  dateString: string;
  metaDesc?: string;
  featuredImage?: string;
  blocks?: ArticleBlock[];
  // Tambahkan content di sini agar TypeScript tidak error saat membaca headline.content
  content?: string; 
}

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const getValidImageUrl = (item: Article) => {
    if (item.featuredImage && item.featuredImage.startsWith("http")) return item.featuredImage;
    const blockImage = item.blocks?.find((b) => b.type === "image")?.value;
    if (blockImage && blockImage.startsWith("http")) return blockImage;
    return "https://placehold.co/600x400/png";
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const q = query(collection(db, "articles"), orderBy("createdAt", "desc"));
        const snap = await getDocs(q);
        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Article[];
        setArticles(data);
      } catch (err) {
        console.error("Error fetching articles:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center font-bold">Memuat Dashboard Blog...</div>;

  const headline = articles[0];
  const regularPosts = articles.slice(1);

  // Perbaikan Logika Reading Time: Menghitung dari blocks jika content tidak ada
  const calculateReadingTime = (article: Article) => {
    const textFromBlocks = article.blocks
      ?.filter(block => block.type === "text" || block.type === "paragraph")
      ?.map(block => block.value)
      .join("") || "";
    
    // Gunakan content jika ada, jika tidak gunakan gabungan text dari blocks
    const totalText = article.content || textFromBlocks;
    return Math.ceil((totalText.length || 1000) / 500);
  };

  return (
    <main className="min-h-screen bg-card-light pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 pt-16">
        
        {/* --- SECTION 1: HEADLINE CARD --- */}
        {headline && (
          <div className="relative group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 mb-16">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-3/5 h-75 lg:h-125 relative overflow-hidden">
                <Image
                  src={getValidImageUrl(headline)}
                  alt={headline.title || "Cover"}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              {/* Teks Headline: flex-1 dan justify-between agar konten di tengah & tombol di pojok */}
              <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col min-h-40 lg:min-h-125">
                
                {/* Bagian Tengah (Kategori, Judul, Deskripsi) */}
                <div className="flex-1 flex flex-col justify-center gap-6">
                  <span className="inline-block w-fit px-3 py-1 rounded bg-[#0d59f2] text-white text-[10px] font-black uppercase tracking-widest">
                    {headline.category}
                  </span>
                  <Link href={`/blog/${headline.slug}`}>
                    <h2 className="text-3xl font-black leading-tight hover:text-[#0d59f2] transition-colors cursor-pointer text-slate-900">
                      {headline.title}
                    </h2>
                  </Link>
                  <p className="text-slate-600 line-clamp-3 text-sm lg:text-base">
                    {headline.metaDesc}
                  </p>
                </div>

                {/* Bagian Pojok Bawah */}
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    {headline.dateString} • {calculateReadingTime(headline)} MENIT BACA
                  </div>
                  <Link href={`/blog/${headline.slug}`}>
                    <button className="group/btn flex items-center gap-2 text-[#0d59f2] text-sm font-black uppercase transition-all hover:gap-3">
                      Baca Selengkapnya
                      <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- SECTION 2: GRID ARTIKEL --- */}
        <h3 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Artikel Terbaru</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article key={post.id} className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={getValidImageUrl(post)}
                  alt={post.title || "Thumbnail"}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[#0d59f2] text-[10px] font-black uppercase tracking-widest">{post.category}</span>
                <Link href={`/blog/${post.slug}`}>
                  <h4 className="text-lg font-bold text-slate-900 mt-2 mb-3 line-clamp-2 hover:text-[#0d59f2] cursor-pointer">{post.title}</h4>
                </Link>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">
                    {post.dateString} • {calculateReadingTime(post)} MIN
                  </span>
                  <Link href={`/blog/${post.slug}`} className="text-[#0d59f2] text-xs font-black uppercase flex items-center gap-1">
                    Detail <span className="material-symbols-outlined text-xs">chevron_right</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}