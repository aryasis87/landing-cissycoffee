import FormKedai from '../components/FormKedai';
import { ACARA, SITE } from '@/lib/kedai';

export const metadata = {
  title: 'Kopi untuk Acara',
  description: 'Kopi dari Cissy Coffee untuk rapat kantor, gerobak espresso untuk acara, dan kelas seduh manual setiap Sabtu.',
  alternates: { canonical: `${SITE}/acara` },
};

export default function Acara() {
  return (
    <main className="bg-crema px-6 pt-28 pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="menu-label text-bean/80">Kopi untuk acara</p>
        <h1 className="mt-4 max-w-3xl text-[2.7rem] leading-[1.02] text-roast md:text-6xl">Kopi yang sama, di luar kedai</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">Pesan paling lambat tiga hari sebelum acara. Untuk gerobak kopi, satu minggu.</p>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {ACARA.map((a) => (
            <li key={a.nama} className={`flex flex-col p-7 ${a.unggulan ? 'papan' : 'border border-roast/15 bg-crema-2'}`}>
              <h2 className={a.unggulan ? 'kapur text-4xl font-bold text-[#e8c35a]' : 'text-3xl text-roast'}>{a.nama}</h2>
              <p className={`mt-3 text-2xl font-semibold ${a.unggulan ? 'text-[#efeadf]' : 'text-roast'}`}>
                {a.harga} <span className={`text-sm font-normal ${a.unggulan ? 'text-[#efeadf]/80' : ''}`}>{a.satuan}</span>
              </p>
              <ul className={`mt-5 space-y-2.5 border-t pt-5 text-sm ${a.unggulan ? 'border-[#efeadf]/25 text-[#efeadf]/90' : 'border-roast/15'}`}>
                {a.isi.map((x) => <li key={x}>— {x}</li>)}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <h2 className="text-[2.2rem] leading-[1.08] text-roast md:text-5xl">Tanyakan tanggalnya</h2>
            <p className="mt-4 leading-relaxed">Kami balas dalam satu hari kerja dengan ketersediaan dan perkiraan biaya antar.</p>
          </div>
          <FormKedai jenis="acara" pilihan={ACARA.map((a) => a.nama)} />
        </div>
      </div>
    </main>
  );
}
