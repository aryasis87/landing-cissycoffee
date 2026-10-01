import Link from 'next/link';
import PapanMenu from '../components/PapanMenu';
import { MENU, SITE, rp } from '@/lib/kedai';

export const metadata = {
  title: 'Papan Menu',
  description: 'Papan menu Cissy Coffee: kopi espresso, seduh manual Gayo, Kintamani, Toraja, dan Bajawa, minuman bukan kopi, dan teman ngopi yang dipanggang setiap pagi.',
  alternates: { canonical: `${SITE}/menu` },
};

const ld = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Papan menu Cissy Coffee',
  hasMenuSection: MENU.map((k) => ({
    '@type': 'MenuSection',
    name: k.kategori,
    hasMenuItem: k.item.map(([n, h, d]) => ({ '@type': 'MenuItem', name: n, description: d, offers: { '@type': 'Offer', price: h * 1000, priceCurrency: 'IDR' } })),
  })),
};

export default function MenuPage() {
  return (
    <main className="bg-crema px-6 pt-28 pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="menu-label text-bean/80">Papan menu</p>
        <h1 className="mt-4 text-[2.7rem] leading-[1.02] text-roast md:text-6xl">Ditulis pagi ini, dicoret kalau habis</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">Harga sudah termasuk pajak. Semua minuman kopi bisa dibuat tanpa gula atau dengan susu oat (+{rp(6)}).</p>
        <div className="mt-12">
          <PapanMenu tingkat="h2" />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <p className="leading-relaxed"><strong className="text-roast">Alergi?</strong> Croissant dan banana bread mengandung gandum, telur, dan susu. Srikaya mengandung telur. Tanyakan barista bila ragu.</p>
          <p className="leading-relaxed"><strong className="text-roast">Biji untuk dibawa pulang:</strong> 200 g mulai {rp(85)}, digiling sesuai alat seduh Anda. <Link href="/tentang" className="font-semibold text-roast underline underline-offset-4">Cara kami memilih biji</Link>.</p>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </main>
  );
}
