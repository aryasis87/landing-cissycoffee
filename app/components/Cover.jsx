"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Cover() {
  const [isClient, setIsClient] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fungsi untuk scroll ke About Section dengan efek smooth
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isClient) return null;

  return (
    <section id="home" className="relative w-full max-w-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Simple Loading Skeleton */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 w-full h-full bg-orange-50 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-400 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        <source src="/videos/vd1.mp4" type="video/mp4" />
      </video>

      {/* Simple Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-800/40 to-gray-700/20"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6 md:px-12 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Simple Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 mb-6 bg-orange-100/20 backdrop-blur-sm rounded-full border border-orange-200/30"
        >
          <div className="w-2 h-2 bg-orange-300 rounded-full mr-2 animate-pulse"></div>
          <span className="text-sm font-medium text-orange-100">Premium Coffee Experience</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          role="heading"
          aria-level="1"
        >
          Selamat Datang<br />
          di{" "}
          <span className="bg-gradient-to-r from-orange-200 via-orange-300 to-peach-200 bg-clip-text text-transparent">
            Cissy Coffee
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Dari biji kopi pilihan, racikan tangan barista berpengalaman, hingga
          suasana yang cozy dan instagrammable. Temukan kenikmatan dalam setiap
          tegukan!
        </motion.p>

        {/* CTA Button */}
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#about"
          className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
        >
          Lihat Menu Kami
        </motion.a>
      </motion.div>

      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={scrollToAbout}
          className="cursor-pointer"
        >
          <ChevronDownIcon className="h-8 w-8 text-orange-200 hover:text-orange-100 transition duration-300" />
        </motion.div>
      </div>
    </section>
  );
}