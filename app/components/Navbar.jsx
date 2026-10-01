import Link from 'next/link';

const NAV = [
  ['/menu', 'Menu'],
  ['/tentang', 'Tentang'],
  ['/acara', 'Kopi untuk acara'],
  ['/kontak', 'Kontak'],
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-roast/10 bg-crema/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="font-[family-name:var(--font-dmserif)] text-2xl text-roast">
          Cissy <span className="kapur text-[1.6rem] text-[#8a6610]">Coffee</span>
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className="menu-label text-bean/80 transition-colors hover:text-roast">
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/kontak" className="hidden bg-roast px-4 py-2.5 text-sm font-semibold text-crema hover:bg-roast-2 md:inline-flex">
          Arah ke kedai
        </Link>
        <details className="group relative md:hidden">
          <summary className="menu-label flex cursor-pointer list-none items-center gap-2 border border-roast/25 px-3 py-2 text-roast [&::-webkit-details-marker]:hidden">
            Menu <span aria-hidden="true" className="transition-transform group-open:rotate-180">▾</span>
          </summary>
          <nav aria-label="Navigasi ponsel" className="absolute right-0 mt-2 w-56 border border-roast/15 bg-crema p-2 shadow-lg">
            {NAV.map(([href, label]) => (
              <Link key={href} href={href} className="block px-3 py-2.5 text-roast hover:bg-crema-2">{label}</Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
