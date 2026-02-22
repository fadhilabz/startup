import React from "react";
import Link from "next/link";

// Sub-komponen Link
const FooterLink = ({ text }: { text: string }) => (
  <li>
    <Link href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">
      {text}
    </Link>
  </li>
);

export const Footer = () => {
  return (
    <footer className="bg-background-dark border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Kolom Branding */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary rounded-lg text-white">
                <span className="material-symbols-outlined text-2xl">terminal</span>
              </div>
              <span className="text-xl font-black tracking-tight text-white uppercase">
                UKM <span className="text-primary">START UP MR.MILENIAL INFOTEC</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Organisasi teknologi informasi mahasiswa terkemuka yang didedikasikan untuk keunggulan dalam pengembangan, desain, dan pemecahan masalah digital.
            </p>
            <div className="flex gap-4 text-white">
              {["share", "alternate_email", "location_on"].map((icon) => (
                <button key={icon} className="size-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary transition-all border border-white/10">
                  <span className="material-symbols-outlined text-xl">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Kolom Navigasi */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h6 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Navigasi</h6>
              <ul className="space-y-4">
                {["Beranda", "Layanan", "Portofolio", "Blog"].map((t) => (
                  <FooterLink key={t} text={t} />
                ))}
              </ul>
            </div>

            {/* Kolom Bantuan */}
            <div>
              <h6 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Bantuan</h6>
              <ul className="space-y-4">
                {["Kontak", "Tentang Kami", "Rekrut Kami", "Gabung UKM"].map((t) => (
                  <FooterLink key={t} text={t} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">© 2026 UKM START UP MR.MILENIAL INFOTEC. Seluruh Hak Cipta Dilindungi.</div>
      </div>
    </footer>
  );
};
