// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Social Section */}
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center gap-3 text-[#0d59f2]">
              <span className="material-symbols-outlined text-3xl font-bold">terminal</span>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                UKM <span className="text-[#0d59f2]">Informatika</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Pusat inovasi dan pengembangan talenta digital mahasiswa. Kami berkomitmen untuk terus berbagi pengetahuan dan wawasan teknologi untuk masa depan yang lebih baik.
            </p>
            <div className="flex gap-4">
              {[
                { icon: 'share', label: 'Instagram' },
                { icon: 'public', label: 'LinkedIn' },
                { icon: 'code', label: 'GitHub' }
              ].map((item) => (
                <Link 
                  key={item.icon} 
                  title={item.label}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0d59f2] hover:border-[#0d59f2] transition-all" 
                  href="#"
                >
                  <span className="material-symbols-outlined text-lg">{item.icon}</span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Navigasi Utama */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Navigasi</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              {[
                { name: 'Beranda', path: '/' },
                { name: 'Layanan', path: '/layanan' },
                { name: 'Materi Belajar', path: '/materi' },
                { name: 'Blog & Artikel', path: '/blog' },
                { name: 'Koleksi Projek', path: '/projek' }
              ].map(item => (
                <li key={item.name}>
                  <Link className="hover:text-[#0d59f2] transition-colors" href={item.path}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Komunitas & Info */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Informasi</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              {[
                { name: 'Tentang Kami', path: '/informasi/tentang-kami' },
                { name: 'Gabung Anggota', path: '/gabung' },
                { name: 'Event Mendatang', path: '/events' },
                { name: 'Forum Diskusi', path: '/forum' },
                { name: 'Resource Center', path: '/resources' }
              ].map(item => (
                <li key={item.name}>
                  <Link className="hover:text-[#0d59f2] transition-colors" href={item.path}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-[#0d59f2] text-lg">mail</span> 
                <span className="break-all">info@ukminformatika.ac.id</span>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-[#0d59f2] text-lg">location_on</span> 
                Gedung C Lt. 2, Kampus Pusat
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-[#0d59f2] text-lg">call</span> 
                +62 812-3456-7890
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} UKM Informatika. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-medium">
            <Link className="hover:text-[#0d59f2]" href="/kebijakan-privasi">Kebijakan Privasi</Link>
            <Link className="hover:text-[#0d59f2]" href="/syarat-ketentuan">Syarat & Ketentuan</Link>
            <Link className="hover:text-[#0d59f2]" href="/kode-etik">Kode Etik</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}