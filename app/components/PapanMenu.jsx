import { MENU, rp } from '@/lib/kedai';

/* Papan menu kapur. `ringkas` hanya menampilkan item bertanda favorit/baru
   dan dua item pertama tiap kategori — untuk beranda. */
export default function PapanMenu({ ringkas = false, tingkat = 'h3' }) {
  const H = tingkat;
  const data = ringkas
    ? MENU.slice(0, 3).map((k) => ({ ...k, item: k.item.filter((x, i) => x[3] || i < 2).slice(0, 3) }))
    : MENU;
  return (
    <div className={`papan grid gap-x-12 gap-y-10 p-7 sm:p-10 ${ringkas ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
      {data.map((k) => (
        <section key={k.kategori} aria-label={k.kategori}>
          <H className="kapur text-4xl leading-none font-bold text-[#e8c35a]">{k.kategori}</H>
          {!ringkas && <p className="mt-2 text-sm text-[#efeadf]/80">{k.catatan}</p>}
          <ul className="kapur-garis mt-4 space-y-4 pt-4">
            {k.item.map(([nama, harga, ket, tanda]) => (
              <li key={nama}>
                <div className="flex items-baseline gap-3">
                  <span className="text-lg font-semibold">{nama}</span>
                  {tanda && <span className="kapur rounded-full border border-[#e8c35a]/60 px-2 text-base leading-tight text-[#e8c35a]">{tanda}</span>}
                  <span aria-hidden="true" className="titik-harga" />
                  <span className="shrink-0 font-semibold whitespace-nowrap tabular-nums">{rp(harga)}</span>
                </div>
                <p className="kapur mt-0.5 text-xl leading-snug text-[#efeadf]/85">{ket}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
