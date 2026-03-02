"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, limit, orderBy, addDoc, serverTimestamp } from "firebase/firestore";
import Link from "next/link";

export default function BlogDetail() {
  const params = useParams();
  const slug = params?.slug;

  const [article, setArticle] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Ganti bagian useEffect untuk Fetch data dengan ini agar lebih akurat:

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;
      try {
        // 1. Ambil Artikel
        const qArt = query(collection(db, "articles"), where("slug", "==", slug), limit(1));
        const artSnap = await getDocs(qArt);

        if (!artSnap.empty) {
          setArticle(artSnap.docs[0].data());

          // 2. Ambil Komentar (Gunakan slug artikel yang sedang dibuka)
          const qCom = query(
            collection(db, "comments"),
            where("articleSlug", "==", slug),
            // Hapus orderBy sementara jika komentar tidak muncul (biasanya karena butuh manual index di firebase)
          );

          const comSnap = await getDocs(qCom);
          let comList = comSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

          // Urutkan secara manual di sisi client jika orderBy firestore bermasalah
          comList.sort((a: any, b: any) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));

          setComments(comList);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  const formatCommentDate = (timestamp: any) => {
    if (!timestamp) return "Baru saja";

    const date = new Date(timestamp.seconds * 1000);
    const now = new Date();
    const diffInHours = Math.abs(now.getTime() - date.getTime()) / 36e5;

    if (diffInHours < 24) {
      // Jika kurang dari 24 jam, tampilkan Jam:Menit
      return date.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
    } else {
      // Jika sudah lewat 24 jam, tampilkan Tanggal/Bulan/Tahun
      return date.toLocaleDateString("id-ID");
    }
  };

  const handleSendComment = async () => {
    if (!commentName || !commentText) return alert("Isi nama dan komentar dulu ya!");
    setIsSubmitting(true);
    try {
      const newComment = {
        articleSlug: slug,
        name: commentName,
        text: commentText,
        timestamp: serverTimestamp(),
        // Memberikan avatar unik berdasarkan nama menggunakan DiceBear
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${commentName}`,
      };

      const docRef = await addDoc(collection(db, "comments"), newComment);

      // Update tampilan secara lokal agar instan
      setComments([{ ...newComment, id: docRef.id, timestamp: { seconds: Date.now() / 1000 } }, ...comments]);
      setCommentText("");
      alert("Komentar berhasil dikirim!");
    } catch (error) {
      console.error(error);
      alert("Gagal mengirim komentar.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center font-bold text-blue-600 animate-pulse uppercase tracking-widest text-xs">Menyiapkan Pengalaman Membaca...</div>;

  if (!article)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-black text-slate-900 uppercase">Artikel Tidak Ditemukan</h1>
        <Link href="/blog" className="mt-4 text-blue-600 font-bold uppercase text-sm border-b-2 border-blue-600">
          Kembali ke Blog
        </Link>
      </div>
    );

  return (
    <main className="pt-10 pb-20 bg-white text-slate-900 antialiased selection:bg-blue-600/10 font-sans">
      <style jsx global>{`
        .prose h2 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-top: 3rem;
          margin-bottom: 1.25rem;
          color: #0f172a;
          scroll-margin-top: 100px;
        }
        .prose p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #334155;
          margin-bottom: 1.5rem;
        }
        .ad-placeholder {
          background-color: #f8fafc;
          border: 2px dashed #e2e8f0;
          border-radius: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          margin: 2.5rem 0;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-medium">
          <Link className="hover:text-blue-600 transition-colors" href="/">
            Beranda
          </Link>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <Link className="hover:text-blue-600 transition-colors" href="/blog">
            Blog
          </Link>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span className="text-slate-900 font-bold uppercase tracking-tight">{article.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* --- KOLOM KIRI (UTAMA) --- */}
          <article className="lg:col-span-8">
            <header className="mb-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-600/10 text-blue-600 text-[10px] font-black rounded-full uppercase tracking-widest">{article.category}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{article.dateString}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-8">{article.title}</h1>
              <div className="flex items-center justify-between pb-8 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                    <span className="material-symbols-outlined text-slate-400">person</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-tight">Redaksi UKM Informatika</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Verified Content Creator</p>
                  </div>
                </div>
              </div>
            </header>

            {/* FEATURED IMAGE */}
            <div className="mb-10">
              <img src={article.featuredImage} className="w-full h-[450px] object-cover rounded-[2.5rem] shadow-2xl" alt="Main" />
              {article.featuredCaption && <p className="text-center text-[10px] font-bold text-slate-400 mt-4 uppercase tracking-widest italic">— {article.featuredCaption}</p>}
            </div>

            {/* KONTEN ARTIKEL + 3 IKLAN OTOMATIS */}
            <div className="prose max-w-none">
              {article.blocks?.map((block: any, index: number) => (
                <React.Fragment key={block.id}>
                  {/* IKLAN 1: ATAS */}
                  {index === 0 && (
                    <div className="ad-placeholder h-24 w-full flex-col">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-blue-500 font-black mb-1">Advertisement</span>
                      <p className="text-slate-500 text-xs font-bold italic">Sponsor Resmi UKM Informatika</p>
                    </div>
                  )}

                  {block.type === "heading" && <h2 id={block.value.toLowerCase().replace(/\s+/g, "-")}>{block.value}</h2>}
                  {block.type === "paragraph" && <p className="whitespace-pre-wrap">{block.value}</p>}
                  {block.type === "image" && (
                    <figure className="my-10">
                      <img src={block.value} className="rounded-3xl w-full shadow-lg" alt="Content" />
                      {block.caption && <figcaption className="text-center text-[10px] text-slate-400 mt-3 font-bold uppercase tracking-widest italic">{block.caption}</figcaption>}
                    </figure>
                  )}

                  {/* IKLAN 2: TENGAH */}
                  {index === 2 && (
                    <div className="ad-placeholder h-24 w-full flex-col border-blue-100">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-blue-500 font-black mb-1">Recommended Product</span>
                      <p className="text-slate-500 text-xs font-bold italic">Solusi Digital Untuk Mahasiswa</p>
                    </div>
                  )}

                  {/* IKLAN 3: BAWAH */}
                  {index === article.blocks.length - 1 && (
                    <div className="ad-placeholder h-24 w-full flex-col bg-blue-50/50 border-blue-200">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-blue-600 font-black mb-1">Final Offer</span>
                      <p className="text-blue-900/60 text-xs font-bold italic">Jangan Lewatkan Kesempatan Ini</p>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* AUTHOR CARD */}
            <div className="mt-16 p-8 bg-slate-50 border border-slate-200 rounded-[2rem] flex flex-col md:flex-row gap-6 items-center shadow-sm">
              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-xl shrink-0">
                <span className="material-symbols-outlined text-4xl">diversity_3</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Tim Redaksi UKM Informatika</h3>
                <p className="text-slate-600 text-sm mt-1">Berdedikasi untuk memberikan berita teknologi terupdate bagi mahasiswa.</p>
              </div>
            </div>

            {/* KOMENTAR SECTION */}
            <section className="mt-16 pt-16 border-t border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Komentar Pembaca ({comments.length})</h3>

              {/* Form Input */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-12 shadow-sm">
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all text-sm font-medium bg-slate-50/50"
                  placeholder="Tulis pendapat kamu di sini..."
                  rows={3}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                ></textarea>
                <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <input
                    className="flex-1 px-4 py-2 text-xs font-bold rounded-lg border border-slate-200 w-full uppercase tracking-widest outline-none focus:border-blue-600"
                    placeholder="Nama Kamu"
                    type="text"
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                  />
                  <button
                    disabled={isSubmitting}
                    onClick={handleSendComment}
                    className={`w-full sm:w-auto bg-slate-900 text-white px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-blue-600 transition-all ${isSubmitting ? "opacity-50" : ""}`}
                  >
                    {isSubmitting ? "Mengirim..." : "Kirim Komentar"}
                  </button>
                </div>
              </div>

              {/* LIST KOMENTAR DINAMIS */}
              <div className="space-y-8">
                {comments.length > 0 ? (
                  comments.map((comment) => (
                    <div key={comment.id} className="flex gap-4 animate-in fade-in duration-700">
                      <img
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                        src={comment.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${comment.name}`}
                      />
                      <div className="flex-1">
                        <div className="bg-slate-50 rounded-[1.5rem] p-5 border border-slate-100">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">{comment.name}</h4>
                            <span className="text-[9px] text-slate-400 font-black uppercase tracking-tighter italic">{formatCommentDate(comment.timestamp)}</span>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed font-medium">{comment.text}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest py-10 border-2 border-dashed border-slate-100 rounded-3xl">Belum ada komentar.</p>
                )}
              </div>
            </section>
          </article>

          {/* --- KOLOM KANAN (SIDEBAR) --- */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-10">
              <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-6 italic">Daftar Isi</h3>
                <nav className="space-y-4">
                  {article.blocks
                    ?.filter((b: any) => b.type === "heading")
                    .map((h: any) => (
                      <a
                        key={h.id}
                        className="block text-xs font-bold text-slate-500 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-600 pl-4 transition-all uppercase tracking-tight"
                        href={`#${h.value.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {h.value}
                      </a>
                    ))}
                </nav>
              </div>

              <div className="ad-placeholder h-[350px] w-full flex-col p-6 text-center shadow-lg">
                <span className="text-[9px] uppercase tracking-[0.3em] text-slate-400 mb-4 font-black">Advertisement</span>
                <div className="w-16 h-16 bg-blue-50 rounded-full mb-4 mx-auto flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-3xl font-light">rocket_launch</span>
                </div>
                <p className="text-slate-800 font-black text-lg mb-6 leading-tight uppercase tracking-tighter">Siap Untuk Belajar Hal Baru?</p>
                <button className="w-full py-4 bg-slate-900 text-white text-[10px] font-black rounded-xl uppercase tracking-[0.2em] hover:bg-blue-600 shadow-xl transition-all">
                  Gabung Komunitas
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* ARTIKEL TERKAIT */}
        <section className="mt-20 pt-16 border-t border-slate-100">
          <h2 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-3 uppercase tracking-tighter">
            <span className="w-10 h-2 bg-blue-600 rounded-full"></span>
            Artikel Terkait
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-video rounded-[2rem] bg-slate-100 overflow-hidden mb-4 shadow-lg border-4 border-white">
                  <img
                    src={`https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Related"
                  />
                </div>
                <h4 className="font-black text-slate-900 group-hover:text-blue-600 transition-colors px-4 uppercase text-[11px] tracking-wide leading-relaxed">
                  Inovasi Teknologi Mahasiswa Untuk Negeri
                </h4>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
