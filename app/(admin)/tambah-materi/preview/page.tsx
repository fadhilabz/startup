import { ContentBlock, SubContent } from "../../../../components/types";
import Image from "next/image";

export default function PreviewMateri({ blocks, title }: { blocks: ContentBlock[]; title: string }) {
  // Helper untuk mengubah **bold** dan *italic* menjadi tag HTML
  const renderFormattedText = (text: string) => {
    if (!text) return "";

    // Split berdasarkan bold (**) dulu, lalu italic (*)
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-black text-slate-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return (
          <em key={index} className="italic">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white min-h-screen shadow-2xl my-10 rounded-3xl overflow-hidden font-['Lexend']">
      {/* Judul Utama */}
      <h1 className="text-5xl font-black text-slate-900 pb-4 inline-block wrap-break-words max-w-full">{title || "Tanpa Judul"}</h1>

      <div className="space-y-6 mt-8">
        {blocks.map((block: ContentBlock) => (
          <div key={block.id} className="w-full h-auto min-w-0">
            {/* 1. Sub Bab */}
            {block.type === "sub-chapter" && <h2 className="text-2xl font-bold text-slate-800 py-2 rounded-r-lg wrap-break-words">{block.value as string}</h2>}

            {/* 2. Teks Paragraf */}
            {block.type === "text" && (
              <p className="text-xl font-medium text-slate-600 leading-relaxed whitespace-pre-wrap break-all md:wrap-break-words">{renderFormattedText(block.value as string)}</p>
            )}

            {/* 3. List */}
            {block.type === "list" && (
              <div className="py-2">
                {block.listType === "ol" ? (
                  <ol className="list-decimal list-inside space-y-2 text-xl font-medium text-slate-600">
                    {(block.value as string).split("\n").map(
                      (item: string, i: number) =>
                        item.trim() && (
                          <li key={i} className="pl-2">
                            {renderFormattedText(item)}
                          </li>
                        ),
                    )}
                  </ol>
                ) : (
                  <ul className="list-disc list-inside space-y-2 text-xl font-medium text-slate-600">
                    {(block.value as string).split("\n").map(
                      (item: string, i: number) =>
                        item.trim() && (
                          <li key={i} className="pl-2">
                            {renderFormattedText(item)}
                          </li>
                        ),
                    )}
                  </ul>
                )}
              </div>
            )}

            {/* 4. Gambar */}
            {block.type === "image" && block.value && (
              <div className="w-full py-4">
                <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-lg border border-slate-100">
                  <Image src={block.value as string} alt="Materi" fill className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            )}

            {/* 5. Kode Program */}
            {block.type === "code" && (
              <div className="bg-[#0f172a] rounded-2xl overflow-hidden shadow-xl border border-slate-800 w-full min-w-0 my-4">
                <div className="bg-slate-800 px-5 py-2 text-[10px] text-slate-400 font-mono flex justify-between uppercase tracking-widest">
                  <span className="truncate mr-4">{block.fileName || "script.js"}</span>
                  <span className="shrink-0">{block.language || "Code"}</span>
                </div>
                <pre className="p-6 text-blue-300 font-mono text-sm whitespace-pre-wrap break-all leading-relaxed">
                  <code>{block.value as string}</code>
                </pre>
              </div>
            )}

            {/* 6. Multi Kolom */}
            {block.type === "column" && Array.isArray(block.value) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start h-auto w-full min-w-0 py-4">
                {[0, 1].map((idx) => (
                  <div key={idx} className="space-y-6 h-auto min-w-0">
                    {(block.value[idx] as SubContent[]).map((sub: SubContent) => (
                      <div key={sub.id} className="h-auto w-full min-w-0 overflow-hidden">
                        {sub.type === "text" && <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap italic break-all md:wrap-break-words">{renderFormattedText(sub.value)}</p>}
                        {sub.type === "image" && sub.value && (
                          <Image src={sub.value} width={500} height={300} className="rounded-xl shadow-sm w-full h-auto border border-slate-100 object-cover" alt="Visual Kolom" />
                        )}
                        {sub.type === "code" && (
                          <div className="bg-slate-900 rounded-lg p-4 text-[11px] font-mono text-green-400 border border-slate-800 h-auto w-full min-w-0">
                            <pre className="whitespace-pre-wrap break-all">
                              <code>{sub.value}</code>
                            </pre>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* 7. Kutipan (Quote) */}
            {block.type === "quote" && (
              <div className="my-6">
                <p className="text-xl text-slate-500 font-light leading-relaxed mb-2 italic border-l-4 border-slate-200 pl-6 wrap-break-words">{renderFormattedText(block.value as string)}</p>
                {block.author && <p className="text-slate-400 text-sm font-medium pl-10">— {block.author}</p>}
              </div>
            )}

            {/* 8. Callout */}
            {block.type === "callout" && (
              <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 flex gap-4 my-6 items-start shadow-sm">
                <div className="bg-blue-500 text-white rounded-full p-1.5 shrink-0">
                  <span className="material-symbols-outlined text-[20px] block">info</span>
                </div>
                <div className="flex-1 min-w-0">
                  {block.title && <h4 className="text-blue-900 font-bold text-lg mb-1 leading-tight">{block.title}</h4>}
                  <p className="text-slate-600 leading-relaxed whitespace-pre-wrap wrap-break-words">{renderFormattedText(block.value as string)}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
