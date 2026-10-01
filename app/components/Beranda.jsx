import Image from 'next/image';
import Link from 'next/link';
import { ACARA, BIJI, JAM, KEDAI, RUANG } from '@/lib/kedai';
import PapanMenu from './PapanMenu';

function Sangrai({ n }) {
  return (
    <span className="flex gap-1" role="img" aria-label={`Tingkat sangrai ${n} dari 5`}>
      {[1, 2, 3, 4, 5].map((k) => (
        <span key={k} aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${k <= n ? 'bg-roast' : 'border border-roast/35'}`} />
      ))}
    </span>
  );
}

export function Hero() {
  const v60 = BIJI[1];
  return (
    <section className="bg-crema px-6 pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="menu-label text-bean/80">Kedai kopi · {KEDAI.alamat.split(', ').pop()} · sejak {KEDAI.sejak}</p>
          <h1 className="mt-5 text-[2.7rem] leading-[1.02] text-roast sm:text-6xl lg:text-[4.2rem]">Papan menunya ditulis ulang setiap pagi.</h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed">
            Biji dari kebun di Indonesia, disangrai sendiri dua kali seminggu. Kalau sudah habis, kami coret dari papan —
            lebih baik jujur daripada rapi.
          </p>
          <div className="papan mt-8 inline-block px-6 py-4">
            <p className="kapur text-2xl leading-tight">Hari ini di V60: <span className="text-[#e8c35a]">{v60.nama} {v60.proses.toLowerCase()}</span></p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/menu" className="inline-flex justify-center bg-roast px-7 py-4 font-semibold text-crema hover:bg-roast-2">Lihat papan menu</Link>
            <Link href="/kontak" className="inline-flex justify-center border-2 border-roast px-7 py-4 font-semibold text-roast hover:bg-roast hover:text-crema">Arah ke kedai</Link>
          </div>
        </div>
        <figure className="relative">
          <div className="border-[12px] border-[#6b4a2e] shadow-[0_24px_50px_-28px_rgb(42_29_24/0.8)]">
            <Image src="/images/bg1.jpg" alt="Tampak depan kedai Cissy Coffee dengan papan nama di atas pintu dan meja-meja di teras" width={736} height={552} priority className="h-auto w-full" />
          </div>
          <figcaption className="kapur mt-3 text-right text-xl text-bean/80">{KEDAI.patokan}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function BijiMingguIni() {
  return (
    <section className="bg-crema-2 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="menu-label text-bean/80">Biji dua minggu ini</p>
        <h2 className="mt-4 max-w-2xl text-[2.2rem] leading-[1.08] text-roast md:text-5xl">Empat kebun, empat cara menyeduh</h2>
        <ul className="mt-12 grid gap-px bg-roast/15 sm:grid-cols-2 lg:grid-cols-4">
          {BIJI.map((b) => (
            <li key={b.nama} className="bg-crema-2 p-6">
              <p className="menu-label text-bean/80">{b.asal}</p>
              <h3 className="mt-2 text-3xl text-roast">{b.nama}</h3>
              <p className="kapur mt-2 text-2xl leading-snug text-bean">{b.catatan}</p>
              <dl className="mt-5 space-y-2 border-t border-roast/15 pt-4 text-sm">
                <div className="flex justify-between gap-3"><dt>Proses</dt><dd className="text-roast">{b.proses}</dd></div>
                <div className="flex items-center justify-between gap-3"><dt>Sangrai</dt><dd><Sangrai n={b.sangrai} /></dd></div>
                <div className="flex justify-between gap-3"><dt>Dipakai untuk</dt><dd className="text-right text-roast">{b.pakai}</dd></div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function MenuRingkas() {
  return (
    <section className="bg-crema px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="menu-label text-bean/80">Dari papan menu</p>
            <h2 className="mt-4 text-[2.2rem] leading-[1.08] text-roast md:text-5xl">Yang paling sering dipesan</h2>
          </div>
          <Link href="/menu" className="menu-label shrink-0 border-b-2 border-roast pb-1 text-roast">Papan menu lengkap</Link>
        </div>
        <PapanMenu ringkas />
      </div>
    </section>
  );
}

export function Ruang() {
  return (
    <section className="bg-roast px-6 py-20 text-crema md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div>
          <p className="menu-label text-[#e8c35a]">Ruangnya</p>
          <h2 className="mt-4 text-[2.2rem] leading-[1.08] text-crema md:text-5xl">Untuk bekerja pagi, untuk mengobrol sore</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {RUANG.map(([j, d]) => (
              <li key={j} className="border-t border-crema/20 pt-4">
                <h3 className="text-2xl text-crema">{j}</h3>
                <p className="mt-2 leading-relaxed text-crema/80">{d}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="papan h-fit p-8">
          <h2 className="kapur text-4xl font-bold text-[#e8c35a]">Jam buka</h2>
          <dl className="kapur-garis mt-4 space-y-3 pt-4">
            {JAM.map(([h, j]) => (
              <div key={h} className="flex flex-col"><dt className="text-sm text-[#efeadf]/80">{h}</dt><dd className="text-lg font-semibold">{j}</dd></div>
            ))}
          </dl>
          <p className="kapur mt-5 text-xl text-[#efeadf]/85">Jumat siang tutup sebentar untuk salat Jumat.</p>
        </div>
      </div>
    </section>
  );
}

export function AcaraTeaser() {
  return (
    <section className="bg-crema-2 px-6 py-20 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="menu-label text-bean/80">Di luar kedai</p>
          <h2 className="mt-4 text-[2.2rem] leading-[1.08] text-roast md:text-5xl">Kopi untuk rapat, gerobak untuk acara</h2>
          <p className="mt-4 leading-relaxed">Mulai {ACARA[0].harga} untuk {ACARA[0].satuan.replace('/ ', '')}, diantar dalam termos. Atau barista dan gerobak espresso datang ke tempat Anda.</p>
        </div>
        <Link href="/acara" className="inline-flex shrink-0 justify-center bg-roast px-7 py-4 font-semibold text-crema hover:bg-roast-2">Lihat paket acara</Link>
      </div>
    </section>
  );
}
