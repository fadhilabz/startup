"use client";
import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import { db } from "@/lib/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import PreviewMateri from "../preview/page";
import { ContentBlock, SubContent } from "../../../../components/types";

// --- INTERFACES ---
interface AutoResizeTextareaProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  minRows?: number;
}

// Komponen Helper dengan Type Definition yang benar
const AutoResizeTextarea = ({ value, onChange, placeholder, className, minRows = 1 }: AutoResizeTextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${className} resize-none overflow-hidden wrap-break-words`} // Perbaikan: break-words
      rows={minRows}
    />
  );
};

export default function EditorMateri() {
  const [title, setTitle] = useState("Sejarah & Fondasi HTML");
  const [slug, setSlug] = useState("sejarah-fondasi-html");
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const [difficulty, setDifficulty] = useState("Beginner");

  // --- LOGIKA EDITOR ---
  const addBlock = (type: ContentBlock["type"] | "callout" | "list") => {
    // Definisi objek baru sesuai dengan struktur ContentBlock
    const newBlock: ContentBlock = {
      id: Date.now().toString(),
      type: type as ContentBlock["type"],
      value: type === "column" ? [[], []] : "",
      language: "HTML",
      fileName: "index.html",
      author: (type === "quote" ? "" : undefined) as string,
      title: (type === "callout" ? "Fakta Menarik" : undefined) as string,
      listType: (type === "list" ? "ul" : undefined) as undefined,
    };
    setBlocks([...blocks, newBlock]);
  };

  const updateBlock = (id: string, val: string | string[]) => setBlocks(blocks.map((b) => (b.id === id ? ({ ...b, value: val } as ContentBlock) : b)));

  const addSub = (colId: string, idx: number, type: SubContent["type"]) => {
    setBlocks(
      blocks.map((b) => {
        if (b.id === colId && Array.isArray(b.value)) {
          const sub: SubContent = { id: Math.random().toString(), type, value: "" };
          const newVal = [...b.value];
          newVal[idx] = [...newVal[idx], sub];
          return { ...b, value: newVal };
        }
        return b;
      }),
    );
  };

  const updateSub = (colId: string, idx: number, subId: string, val: string) => {
    setBlocks(
      blocks.map((b) => {
        if (b.id === colId && Array.isArray(b.value)) {
          const newVal = [...b.value];
          newVal[idx] = newVal[idx].map((s: SubContent) => (s.id === subId ? { ...s, value: val } : s));
          return { ...b, value: newVal };
        }
        return b;
      }),
    );
  };

  const handleSave = async () => {
    try {
      await setDoc(doc(db, "materi", slug), {
        title,
        slug,
        blocks,
        difficulty,
        updatedAt: serverTimestamp(),
      });
      alert("Materi berhasil disimpan!");
    } catch (e) {
      console.error(e); // Sekarang 'e' digunakan, garis merah hilang
      alert("Gagal menyimpan.");
    }
  };

  if (showPreview) {
    return (
      <div className="bg-slate-100 min-h-screen pb-20">
        <div className="bg-white p-4 sticky top-0 z-50 border-b flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-2">
            <span className="size-3 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="font-bold text-slate-700 uppercase text-xs tracking-widest">Live Preview Mode</span>
          </div>
          <button onClick={() => setShowPreview(false)} className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold hover:bg-black transition-all">
            Tutup Preview
          </button>
        </div>
        <PreviewMateri blocks={blocks} title={title} />
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-card-light font-['Lexend'] overflow-hidden">
      {/* SIDEBAR KIRI */}
      <aside className="w-72 bg-white border-r p-6 space-y-4 overflow-y-auto">
        <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Menu Komponen</h2>
        <button
          onClick={() => addBlock("sub-chapter")}
          className="w-full flex items-center gap-3 p-4 bg-blue-50 text-blue-700 rounded-2xl font-bold border-2 border-transparent hover:border-blue-200 transition-all"
        >
          <span className="material-symbols-outlined">label</span> Sub Bab
        </button>
        <button onClick={() => addBlock("text")} className="w-full flex items-center gap-3 p-4 bg-slate-50 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all">
          <span className="material-symbols-outlined">notes</span> Teks Paragraf
        </button>
        <button onClick={() => addBlock("list")} className="w-full flex items-center gap-3 p-4 bg-slate-50 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all">
          <span className="material-symbols-outlined">format_list_bulleted</span> Daftar List
        </button>
        <button onClick={() => addBlock("image")} className="w-full flex items-center gap-3 p-4 bg-slate-50 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all">
          <span className="material-symbols-outlined">image</span> Gambar Link
        </button>
        <button onClick={() => addBlock("code")} className="w-full flex items-center gap-3 p-4 bg-slate-50 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all">
          <span className="material-symbols-outlined">terminal</span> Code Editor
        </button>
        <button onClick={() => addBlock("column")} className="w-full flex items-center gap-3 p-4 bg-slate-50 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all">
          <span className="material-symbols-outlined">view_column</span> Multi Kolom
        </button>
        <button onClick={() => addBlock("quote")} className="w-full flex items-center gap-3 p-4 bg-slate-50 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all text-left">
          <span className="material-symbols-outlined">format_quote</span> Kutipan Tokoh
        </button>
        <button onClick={() => addBlock("callout")} className="w-full flex items-center gap-3 p-4 bg-blue-50 text-blue-600 rounded-2xl font-bold hover:bg-blue-100 transition-all text-left">
          <span className="material-symbols-outlined">info</span> Fakta Menarik
        </button>
      </aside>

      {/* CANVAS TENGAH */}
      <main className="flex-1 overflow-y-auto p-12 bg-white">
        <header className="max-w-4xl mx-auto flex justify-between items-center mb-12 border-b pb-6">
          <input className="text-4xl font-black bg-transparent border-none focus:ring-0 w-full" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Judul Materi..." />
          <div className="flex gap-4">
            <button onClick={() => setShowPreview(true)} className="px-6 py-2 bg-orange-500 text-white rounded-xl font-bold shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all">
              Preview
            </button>
            <button onClick={handleSave} className="px-6 py-2 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">
              Simpan
            </button>
          </div>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          {blocks.map((block) => (
            <div key={block.id} className="bg-white rounded-3xl border border-slate-200 p-8 relative group shadow-sm transition-all hover:border-blue-200">
              <button
                onClick={() => setBlocks(blocks.filter((b) => b.id !== block.id))}
                className="absolute -right-4 -top-4 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:scale-110"
              >
                <span className="material-symbols-outlined text-sm">delete</span>
              </button>

              {block.type === "sub-chapter" && (
                <input
                  className="w-full text-xl font-bold border-b-2 border-blue-500 focus:ring-0 pb-2 bg-transparent"
                  placeholder="Judul Sub Bab..."
                  value={block.value as string}
                  onChange={(e) => updateBlock(block.id, e.target.value)}
                />
              )}

              {block.type === "text" && (
                <AutoResizeTextarea
                  value={block.value as string}
                  onChange={(e) => updateBlock(block.id, e.target.value)}
                  placeholder="Gunakan **teks** untuk tebal..."
                  className="w-full border-none focus:ring-0 text-slate-600 text-lg leading-relaxed p-0"
                />
              )}

              {block.type === "list" && (
                <div className="space-y-3">
                  <div className="flex gap-2 mb-2">
                    <button
                      onClick={() => setBlocks(blocks.map((b) => (b.id === block.id ? { ...b, listType: "ul" } : b)))}
                      className={`px-3 py-1 rounded-lg text-xs font-bold ${block.listType === "ul" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"}`}
                    >
                      Bullet
                    </button>
                    <button
                      onClick={() => setBlocks(blocks.map((b) => (b.id === block.id ? { ...b, listType: "ol" } : b)))}
                      className={`px-3 py-1 rounded-lg text-xs font-bold ${block.listType === "ol" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"}`}
                    >
                      Numbered
                    </button>
                  </div>
                  <AutoResizeTextarea
                    value={block.value as string}
                    onChange={(e) => updateBlock(block.id, e.target.value)}
                    placeholder="Pisahkan item dengan Enter..."
                    className="w-full border-none focus:ring-0 text-slate-600 text-lg p-4 rounded-xl bg-slate-50 font-mono"
                  />
                </div>
              )}

              {block.type === "quote" && (
                <div className="space-y-4">
                  <div className="border-l-4 border-slate-200 pl-6 italic font-light text-xl text-slate-500">
                    <AutoResizeTextarea
                      value={block.value as string}
                      onChange={(e) => updateBlock(block.id, e.target.value)}
                      placeholder="Tulis kutipan..."
                      className="w-full bg-transparent border-none focus:ring-0 p-0"
                    />
                  </div>
                  <input
                    className="text-sm font-medium text-slate-400 bg-transparent border-none focus:ring-0 p-0 ml-7"
                    value={block.author || ""}
                    onChange={(e) => setBlocks(blocks.map((b) => (b.id === block.id ? { ...b, author: e.target.value } : b)))}
                    placeholder="Nama Tokoh"
                  />
                </div>
              )}

              {block.type === "callout" && (
                <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 flex gap-4 items-start">
                  <span className="material-symbols-outlined bg-blue-500 text-white rounded-full p-1 text-[20px]">info</span>
                  <div className="flex-1 space-y-1">
                    <input
                      className="w-full font-bold text-blue-900 bg-transparent border-none focus:ring-0 p-0 text-lg"
                      value={block.title || ""}
                      onChange={(e) => setBlocks(blocks.map((b) => (b.id === block.id ? { ...b, title: e.target.value } : b)))}
                      placeholder="Judul Info..."
                    />
                    <AutoResizeTextarea
                      value={block.value as string}
                      onChange={(e) => updateBlock(block.id, e.target.value)}
                      className="w-full bg-transparent border-none focus:ring-0 p-0 text-slate-600"
                    />
                  </div>
                </div>
              )}

              {block.type === "image" && (
                <input
                  className="w-full p-4 bg-slate-50 rounded-xl text-sm border-2 border-dashed border-slate-200"
                  placeholder="Link Gambar (https://...)"
                  value={block.value as string}
                  onChange={(e) => updateBlock(block.id, e.target.value)}
                />
              )}

              {block.type === "code" && (
                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-inner">
                  <div className="px-6 py-2 bg-slate-800 text-[10px] text-slate-500 font-mono flex justify-between">
                    <span>CODE_EDITOR.js</span>
                    <span>AUTO-HEIGHT</span>
                  </div>
                  <AutoResizeTextarea
                    value={block.value as string}
                    onChange={(e) => updateBlock(block.id, e.target.value)}
                    className="w-full bg-transparent text-blue-300 font-mono p-6 focus:ring-0 min-h-37.5"
                    placeholder="// Masukkan kode..."
                  />
                </div>
              )}

              {block.type === "column" && Array.isArray(block.value) && (
                <div className="grid grid-cols-2 gap-4 h-auto items-start">
                  {[0, 1].map((idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                      <div className="flex gap-2 mb-4 border-b pb-2">
                        <button onClick={() => addSub(block.id, idx, "text")} className="p-1 hover:text-blue-600 transition-colors">
                          <span className="material-symbols-outlined text-sm">notes</span>
                        </button>
                        <button onClick={() => addSub(block.id, idx, "image")} className="p-1 hover:text-blue-600 transition-colors">
                          <span className="material-symbols-outlined text-sm">image</span>
                        </button>
                        <button onClick={() => addSub(block.id, idx, "code")} className="p-1 hover:text-blue-600 transition-colors">
                          <span className="material-symbols-outlined text-sm">code</span>
                        </button>
                      </div>
                      <div className="space-y-3">
                        {(block.value[idx] as SubContent[]).map((sub) => (
                          <div key={sub.id} className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                            {sub.type === "text" && (
                              <AutoResizeTextarea
                                value={sub.value}
                                onChange={(e) => updateSub(block.id, idx, sub.id, e.target.value)}
                                className="w-full text-xs border-none p-0 focus:ring-0 bg-transparent"
                                placeholder="Teks..."
                              />
                            )}
                            {sub.type === "image" && (
                              <input
                                className="w-full text-[10px] bg-slate-50 p-2 rounded"
                                placeholder="Link Gambar..."
                                value={sub.value}
                                onChange={(e) => updateSub(block.id, idx, sub.id, e.target.value)}
                              />
                            )}
                            {sub.type === "code" && (
                              <AutoResizeTextarea
                                value={sub.value}
                                onChange={(e) => updateSub(block.id, idx, sub.id, e.target.value)}
                                className="w-full bg-slate-900 text-green-400 font-mono text-[10px] p-2 rounded min-h-15"
                                placeholder="Kode..."
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* SIDEBAR KANAN */}
      <aside className="hidden xl:flex w-80 border-l border-slate-200 bg-white flex-col overflow-y-auto">
        <div className="p-6">
          <h3 className="text-xs font-bold text-slate-900 mb-6 uppercase tracking-wider">Pengaturan Modul</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Tingkat Kesulitan</label>
              <div className="grid grid-cols-3 gap-2">
                {["Beginner", "Medium", "Expert"].map((lv) => (
                  <button
                    key={lv}
                    onClick={() => setDifficulty(lv)}
                    className={`py-2 text-[10px] font-bold rounded-lg border transition-all ${difficulty === lv ? "border-blue-600 bg-blue-50 text-blue-600" : "border-slate-200 text-slate-500 hover:bg-slate-50"}`}
                  >
                    {lv}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Estimasi Durasi (Menit)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-lg">schedule</span>
                <input className="w-full pl-10 bg-slate-50 border-slate-200 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500" type="number" defaultValue="15" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">SEO Slug</label>
              <div className="flex items-center px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-xs text-slate-400">/html/</span>
                <input className="flex-1 bg-transparent border-none text-xs font-medium p-0 focus:ring-0 text-slate-700" type="text" value={slug} onChange={(e) => setSlug(e.target.value)} />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Tags</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {/* Contoh Tag Statis */}
                <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-[10px] font-bold flex items-center gap-1">
                  HTML
                  <button type="button" className="material-symbols-outlined text-[12px]">
                    close
                  </button>
                </span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-[10px] font-bold flex items-center gap-1">
                  Web Dasar
                  <button type="button" className="material-symbols-outlined text-[12px]">
                    close
                  </button>
                </span>
              </div>

              <input
                className="w-full bg-slate-50 border-slate-200 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tambah tag..."
                type="text"
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === "Enter") {
                    // Logika tambah tag Anda di sini
                    e.preventDefault();
                  }
                }}
              />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
