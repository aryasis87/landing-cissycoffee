import Image from 'next/image';
import Link from 'next/link';
import { KEDAI, PRINSIP, SITE, TIM } from '@/lib/kedai';

export const metadata = {
  title: 'Tentang Kami',
  description: `Cissy Coffee dibuka pada ${KEDAI.sejak} oleh seorang barista yang ingin menyangrai biji Indonesia sendiri. Kenali orang di balik bar dan cara kami memilih biji.`,
  alternates: { canonical: `${SITE}/tentang` },
};

export default function Tentang() {
  return (
    <main className="bg-crema pt-28">
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <p className="menu-label text-bean/80">Tentang kami</p>
            <h1 className="mt-4 text-[2.7rem] leading-[1.02] text-roast md:text-6xl">Satu mesin sangrai kecil, satu papan kapur</h1>
            <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed">
              <p>Cissy Coffee dibuka pada {KEDAI.sejak} dengan dua belas kursi dan satu mesin sangrai berkapasitas 2 kg. Pendirinya ingin satu hal: tahu persis dari kebun mana setiap cangkir berasal.</p>
              <p>Sekarang kursinya {KEDAI.kursi} dan mesin sangrainya lebih besar, tetapi papan menunya masih ditulis tangan setiap pagi.</p>
            </div>
          </div>
          <div className="border-[12px] border-[#6b4a2e]">
            <Image src="/images/bg1.jpg" alt="Tampak depan kedai Cissy Coffee" width={736} height={552} className="h-auto w-full" />
          </div>
        </div>
      </section>

      <section aria-labelledby="tim" className="bg-roast px-6 py-20 text-crema">
        <div className="mx-auto max-w-6xl">
          <h2 id="tim" className="text-[2.2rem] leading-[1.08] text-crema md:text-5xl">Orang di balik bar</h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {TIM.map((t) => (
              <li key={t.nama} className="papan p-7">
                <span aria-hidden="true" className="kapur text-5xl font-bold text-[#e8c35a]">{t.inisial}</span>
                <h3 className="mt-3 text-2xl text-[#efeadf]">{t.nama}</h3>
                <p className="kapur text-xl text-[#e8c35a]">{t.peran}</p>
                <p className="mt-3 leading-relaxed text-[#efeadf]/85">{t.isi}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="prinsip" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 id="prinsip" className="text-[2.2rem] leading-[1.08] text-roast md:text-5xl">Cara kami memilih biji</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {PRINSIP.map(([j, d], i) => (
              <li key={j} className="border-t-4 border-roast pt-5">
                <span className="kapur text-4xl font-bold text-roast">{i + 1}.</span>
                <h3 className="mt-2 text-2xl text-roast">{j}</h3>
                <p className="mt-2 leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
          <Link href="/menu" className="mt-12 inline-flex bg-roast px-7 py-4 font-semibold text-crema hover:bg-roast-2">Lihat biji di papan menu</Link>
        </div>
      </section>
    </main>
  );
}
