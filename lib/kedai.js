/* ==========================================================================
   Cissy Coffee — kedai kopi satu outlet. Satu sumber isi untuk beranda,
   papan menu, halaman tentang, acara, dan kontak.
   Alamat, nama, dan harga adalah contoh untuk purwarupa desain.
   ========================================================================== */

export const SITE = 'https://landing-cissycoffee.vercel.app';

export const KEDAI = {
  nama: 'Cissy Coffee',
  sejak: 2019,
  alamat: 'Jl. Kenari Raya No. 27, Malang',
  patokan: 'Seberang taman kota, sebelah toko buku bekas',
  kursi: 34,
  surel: 'halo@cissycoffee.example',
};

export const JAM = [
  ['Senin–Kamis', '07.00–22.00'],
  ['Jumat', '07.00–11.30 · 13.00–22.00'],
  ['Sabtu–Minggu', '08.00–23.00'],
];

export const MENU = [
  {
    kategori: 'Kopi',
    catatan: 'Espresso dari campuran Gayo dan Flores, disangrai sedang.',
    item: [
      ['Espresso', 18, 'Pekat, cokelat hitam, sedikit asam buah'],
      ['Americano', 22, 'Panas atau dingin'],
      ['Kopi susu Cissy', 25, 'Gula aren cair, susu segar — paling sering dipesan', 'favorit'],
      ['Piccolo', 26, 'Ristretto dan sedikit susu'],
      ['Cappuccino', 28, 'Busa tebal, taburan cokelat bila diminta'],
      ['Latte', 28, 'Bisa diganti susu oat (+Rp 6.000)'],
      ['Affogato', 32, 'Espresso di atas es krim vanila'],
    ],
  },
  {
    kategori: 'Seduh manual',
    catatan: 'V60 atau tubruk saring. Biji berganti setiap dua minggu.',
    item: [
      ['Gayo, Aceh', 30, 'Rempah, cokelat, badan tebal'],
      ['Kintamani, Bali', 30, 'Jeruk, gula merah, ringan', 'baru'],
      ['Toraja, Sulawesi', 32, 'Tanah basah, karamel, pahit manis'],
      ['Bajawa, Flores', 30, 'Kacang panggang, vanila'],
    ],
  },
  {
    kategori: 'Bukan kopi',
    catatan: 'Untuk yang menemani teman ngopi.',
    item: [
      ['Matcha latte', 30, 'Matcha upacara, tidak terlalu manis'],
      ['Cokelat panas', 28, 'Cokelat 55%, susu segar'],
      ['Teh tarik', 22, 'Teh hitam, susu kental manis secukupnya'],
      ['Jahe susu', 22, 'Jahe merah bakar'],
    ],
  },
  {
    kategori: 'Teman ngopi',
    catatan: 'Dipanggang di dapur sendiri setiap pagi; jumlahnya terbatas.',
    item: [
      ['Roti bakar srikaya', 20, 'Srikaya pandan buatan sendiri'],
      ['Croissant mentega', 24, 'Keluar oven pukul 08.00 dan 15.00', 'favorit'],
      ['Pisang goreng madu', 18, 'Pisang kepok, madu hutan'],
      ['Banana bread', 22, 'Sepotong tebal, dihangatkan'],
    ],
  },
];

export const BIJI = [
  { nama: 'Gayo', asal: 'Aceh Tengah', proses: 'Semi-washed', sangrai: 3, catatan: 'Rempah, cokelat hitam, badan tebal', pakai: 'Espresso & V60' },
  { nama: 'Kintamani', asal: 'Bangli, Bali', proses: 'Natural', sangrai: 2, catatan: 'Jeruk, gula merah, asam segar', pakai: 'V60' },
  { nama: 'Toraja', asal: 'Tana Toraja', proses: 'Giling basah', sangrai: 4, catatan: 'Karamel, tanah basah, pahit manis', pakai: 'Tubruk saring' },
  { nama: 'Bajawa', asal: 'Ngada, Flores', proses: 'Washed', sangrai: 3, catatan: 'Kacang panggang, vanila', pakai: 'Espresso' },
];

export const RUANG = [
  ['34 kursi', 'Dua meja panjang untuk bekerja, sisanya meja kecil untuk mengobrol.'],
  ['Colokan di meja panjang', 'Sepuluh titik colokan; meja kecil sengaja tanpa colokan.'],
  ['Jam tenang', 'Senin–Kamis 09.00–12.00: musik pelan, tidak ada pesanan blender.'],
  ['Ramah kursi roda', 'Pintu depan tanpa tangga; toilet di lantai yang sama.'],
];

export const TIM = [
  { inisial: 'CS', nama: 'Cecilia Santoso', peran: 'Pendiri & penyangrai', isi: 'Membuka Cissy Coffee pada 2019 setelah sembilan tahun bekerja di bar orang lain. Masih menyangrai sendiri setiap Selasa dan Jumat.' },
  { inisial: 'DP', nama: 'Dimas Prakoso', peran: 'Kepala bar', isi: 'Menyusun papan menu harian dan memutuskan biji mana yang naik ke V60 minggu ini.' },
  { inisial: 'RA', nama: 'Ratna Ayu', peran: 'Dapur & pastri', isi: 'Datang pukul 05.30 untuk adonan croissant. Srikaya pandannya resep neneknya.' },
];

export const PRINSIP = [
  ['Biji dari Indonesia saja', 'Semua biji kami berasal dari kebun di Indonesia, dibeli lewat koperasi atau pengepul yang bisa kami kunjungi.'],
  ['Disangrai sendiri, sedikit-sedikit', 'Dua kali seminggu, maksimal 6 kg per sangrai, supaya tidak ada biji yang menunggu lebih dari dua minggu.'],
  ['Papan menu ditulis tangan', 'Kalau biji habis, coret saja. Menu yang jujur lebih penting daripada menu yang rapi.'],
];

export const ACARA = [
  { nama: 'Kopi untuk rapat', harga: 'Rp 600.000', satuan: '/ 20 cangkir', isi: ['Kopi tubruk saring atau kopi susu dalam termos', 'Gelas kertas, gula, dan susu terpisah', 'Diantar dalam radius 5 km'] },
  { nama: 'Gerobak kopi', harga: 'Rp 3.500.000', satuan: '/ 100 cangkir', unggulan: true, isi: ['Satu barista dan gerobak espresso di lokasi Anda', 'Menu pilihan: 4 minuman', 'Maksimal 4 jam layanan'] },
  { nama: 'Kelas seduh manual', harga: 'Rp 250.000', satuan: '/ orang', isi: ['Dua jam di kedai, maksimal 8 peserta', 'Membawa pulang 100 g biji', 'Setiap Sabtu pukul 09.00'] },
];

export const rp = (ribu) => `Rp ${(ribu * 1000).toLocaleString('id-ID')}`;
