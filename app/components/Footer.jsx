import Link from 'next/link';
import { JAM, KEDAI } from '@/lib/kedai';

export default function Footer() {
  return (
    <footer className="bg-roast px-6 text-crema">
      <div className="mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-[minmax(0,1.3fr)_repeat(2,minmax(0,1fr))]">
        <div>
          <p className="font-[family-name:var(--font-dmserif)] text-3xl">Cissy <span className="kapur text-[#e8c35a]">Coffee</span></p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-crema/80">
            Kedai kopi sejak {KEDAI.sejak}. {KEDAI.alamat} — {KEDAI.patokan.toLowerCase()}.
          </p>
        </div>
        <div>
          <p className="menu-label mb-4 text-[#e8c35a]">Jam buka</p>
          <dl className="space-y-2 text-sm">
            {JAM.map(([h, j]) => (
              <div key={h} className="flex justify-between gap-4"><dt className="text-crema/80">{h}</dt><dd>{j}</dd></div>
            ))}
          </dl>
        </div>
        <nav aria-label="Halaman">
          <p className="menu-label mb-4 text-[#e8c35a]">Halaman</p>
          <ul className="space-y-2.5 text-sm text-crema/80">
            <li><Link href="/menu" className="hover:text-crema">Papan menu</Link></li>
            <li><Link href="/tentang" className="hover:text-crema">Tentang kami</Link></li>
            <li><Link href="/acara" className="hover:text-crema">Kopi untuk acara</Link></li>
            <li><Link href="/kontak" className="hover:text-crema">Kontak & arah</Link></li>
          </ul>
        </nav>
      </div>
      <p className="menu-label mx-auto max-w-6xl border-t border-crema/15 py-6 leading-[1.8] text-crema/70">
        © 2026 Cissy Coffee · Alamat, nama, dan harga di situs ini adalah contoh untuk purwarupa desain.
      </p>
    </footer>
  );
}
