import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center bg-crema px-6 pt-20">
      <div className="papan mx-auto max-w-lg p-10 text-center">
        <p className="kapur text-3xl text-[#e8c35a]">404</p>
        <h1 className="kapur mt-2 text-5xl font-bold text-[#efeadf]">Sudah dicoret dari papan</h1>
        <p className="mt-4 leading-relaxed text-[#efeadf]/85">Halaman ini tidak ada — atau sudah habis, seperti croissant jam empat sore.</p>
        <Link href="/menu" className="mt-7 inline-flex bg-[#e8c35a] px-6 py-3.5 font-semibold text-roast hover:bg-[#f0d27c]">Lihat papan menu</Link>
      </div>
    </main>
  );
}
