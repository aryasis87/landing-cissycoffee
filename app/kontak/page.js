import FormKedai from '../components/FormKedai';
import { JAM, KEDAI, SITE } from '@/lib/kedai';

export const metadata = {
  title: 'Kontak & Arah',
  description: `Cissy Coffee, ${KEDAI.alamat} — ${KEDAI.patokan.toLowerCase()}. Jam buka, cara ke sana, dan formulir pesan.`,
  alternates: { canonical: `${SITE}/kontak` },
};

const ARAH = [
  ['Jalan kaki', 'Lima menit dari halte taman kota; keluar ke sisi toko buku bekas.'],
  ['Motor', 'Parkir di depan kedai, gratis untuk pelanggan.'],
  ['Mobil', 'Parkir di kantong parkir taman kota, 150 m ke arah utara.'],
];

export default function Kontak() {
  return (
    <main className="bg-crema px-6 pt-28 pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="menu-label text-bean/80">Kontak & arah</p>
        <h1 className="mt-4 max-w-3xl text-[2.7rem] leading-[1.02] text-roast md:text-6xl">Cari papan kapur di seberang taman</h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-10">
            <section aria-labelledby="alamat">
              <h2 id="alamat" className="text-3xl text-roast">Alamat</h2>
              <address className="mt-3 text-lg leading-relaxed not-italic">{KEDAI.alamat}<br />{KEDAI.patokan}</address>
              <p className="mt-3">Surel: <a href={`mailto:${KEDAI.surel}`} className="font-semibold text-roast underline underline-offset-4">{KEDAI.surel}</a></p>
            </section>
            <section aria-labelledby="arah">
              <h2 id="arah" className="text-3xl text-roast">Cara ke sana</h2>
              <dl className="mt-4 space-y-4">
                {ARAH.map(([k, v]) => (
                  <div key={k} className="border-l-4 border-roast pl-4"><dt className="font-semibold text-roast">{k}</dt><dd className="mt-1 leading-relaxed">{v}</dd></div>
                ))}
              </dl>
            </section>
            <section aria-labelledby="jam" className="papan p-7">
              <h2 id="jam" className="kapur text-4xl font-bold text-[#e8c35a]">Jam buka</h2>
              <dl className="kapur-garis mt-4 space-y-3 pt-4">
                {JAM.map(([h, j]) => (
                  <div key={h} className="flex justify-between gap-4"><dt className="text-[#efeadf]/80">{h}</dt><dd className="text-right font-semibold">{j}</dd></div>
                ))}
              </dl>
            </section>
          </div>
          <section aria-labelledby="pesan-judul">
            <h2 id="pesan-judul" className="text-3xl text-roast">Kirim pesan</h2>
            <p className="mt-2 mb-6 leading-relaxed">Untuk pertanyaan biji, kerja sama, atau barang yang tertinggal di kedai.</p>
            <FormKedai jenis="kontak" />
          </section>
        </div>
      </div>
    </main>
  );
}
