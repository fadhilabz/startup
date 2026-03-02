import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* AREA KONTEN UTAMA */}
      <div className="flex-1 flex flex-col">
        {/* Konten dari page.tsx (seperti form tambah artikelmu) akan muncul di {children} */}
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </div>
  );
}