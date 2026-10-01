'use client';

import { useState } from 'react';

/* Formulir kecil untuk /acara dan /kontak. Purwarupa: tidak mengirim apa pun. */
export default function FormKedai({ jenis = 'kontak', pilihan = [] }) {
  const [selesai, setSelesai] = useState(false);
  const input = 'w-full border border-roast/25 bg-crema px-4 py-3 text-roast focus:border-roast focus:outline-none';

  if (selesai) {
    return (
      <div role="status" className="papan p-8">
        <p className="kapur text-4xl font-bold text-[#e8c35a]">Terima kasih!</p>
        <p className="mt-3 leading-relaxed text-[#efeadf]/90">Ini purwarupa desain, jadi pesan Anda tidak benar-benar terkirim dan tidak akan ada balasan.</p>
        <button type="button" onClick={() => setSelesai(false)} className="mt-6 border border-[#efeadf]/40 px-4 py-2.5 text-sm text-[#efeadf] hover:border-[#efeadf]">Isi ulang</button>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSelesai(true); }} className="space-y-5 border border-roast/15 bg-crema-2 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nama" className="menu-label mb-2 block text-roast">Nama</label>
          <input id="nama" name="nama" required autoComplete="name" className={input} />
        </div>
        <div>
          <label htmlFor="surel" className="menu-label mb-2 block text-roast">Surel</label>
          <input id="surel" name="surel" type="email" required autoComplete="email" className={input} />
        </div>
      </div>
      {jenis === 'acara' && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="paket" className="menu-label mb-2 block text-roast">Paket</label>
            <select id="paket" name="paket" required defaultValue="" className={input}>
              <option value="" disabled>Pilih paket</option>
              {pilihan.map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="tanggal" className="menu-label mb-2 block text-roast">Tanggal acara</label>
            <input id="tanggal" name="tanggal" type="date" required className={input} />
          </div>
        </div>
      )}
      <div>
        <label htmlFor="pesan" className="menu-label mb-2 block text-roast">{jenis === 'acara' ? 'Lokasi dan jumlah tamu' : 'Pesan'}</label>
        <textarea id="pesan" name="pesan" rows={4} required className={`${input} resize-y`} />
      </div>
      <button type="submit" className="w-full bg-roast py-4 font-semibold text-crema hover:bg-roast-2">
        {jenis === 'acara' ? 'Tanyakan ketersediaan' : 'Kirim pesan'}
      </button>
      <p className="text-xs leading-relaxed">Purwarupa desain — formulir ini tidak mengirim data ke mana pun.</p>
    </form>
  );
}
