/** @type {import('next').NextConfig} */
const nextConfig = {
  // Rute lama berbahasa Inggris dipindah ke rute Indonesia; /portfolio dan
  // /services dulu berisi isi template yang tidak berkaitan dengan kedai kopi.
  async redirects() {
    return [
      { source: "/about", destination: "/tentang", permanent: true },
      { source: "/contact", destination: "/kontak", permanent: true },
      { source: "/services", destination: "/acara", permanent: true },
      { source: "/services/:path*", destination: "/acara", permanent: true },
      { source: "/portfolio", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
