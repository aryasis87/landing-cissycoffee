"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [hasAnimated]);

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 lg:px-16 bg-gradient-to-br from-white via-chalk-line to-chalk-line text-roast overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-chalk-line/60 to-chalk-line/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-chalk-line/40 to-chalk-line/30 rounded-full blur-3xl"></div>
      
      {/* Terminal Dots - Enhanced */}
      <motion.div 
        className="absolute top-6 right-6 flex gap-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="w-4 h-4 bg-gradient-to-br from-chalk-line to-chalk-line rounded-full shadow-lg animate-pulse"></div>
        <div className="w-4 h-4 bg-gradient-to-br from-chalk-line to-chalk-line rounded-full shadow-lg animate-pulse delay-100"></div>
        <div className="w-4 h-4 bg-gradient-to-br from-chalk-line to-chalk-line rounded-full shadow-lg animate-pulse delay-200"></div>
      </motion.div>

      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mt-8">
        
        {/* Enhanced Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateY: 15 }}
          animate={isVisible ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative perspective-1000"
        >
          {/* Main Image Container */}
          <div className="relative group">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-chalk-line/60 via-chalk-line/50 to-chalk-line/60 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            {/* Primary Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-3 border-gradient-to-br from-chalk-line to-chalk-line rounded-2xl opacity-60"></div>
            
            {/* Main Image */}
            <div className="relative bg-crema p-2 rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/images/bg1.jpg"
                alt="Cissy Coffee Interior"
                width={600}
                height={400}
                className="w-full h-[400px] rounded-xl object-cover"
                priority
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-2 bg-gradient-to-t from-chalk-line/20 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Floating Image 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
            className="absolute -bottom-8 -right-4 w-32 h-32 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-chalk-line to-chalk-line rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative bg-crema p-1 rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/bg2.jpg"
                alt="Coffee Details"
                width={128}
                height={128}
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          </motion.div>

          {/* Floating Image 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
            animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
            className="absolute top-8 -right-6 w-20 h-20 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-chalk-line to-chalk-line rounded-xl -rotate-6 group-hover:-rotate-12 transition-transform duration-300"></div>
            <div className="relative bg-crema p-1 rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/images/bg3.jpg"
                alt="Coffee Atmosphere"
                width={96}
                height={96}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-chalk-line/40 to-chalk-line/30 rounded-full blur-sm"
          ></motion.div>
        </motion.div>

        {/* Enhanced Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 text-center lg:text-left space-y-8"
        >
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-chalk-line to-chalk-line rounded-full text-sm font-medium text-chalk-line shadow-sm"
          >
            <div className="w-2 h-2 bg-chalk-line rounded-full animate-pulse"></div>
            Discover Our Story
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-crema-2 via-crema-2 to-crema-2 bg-clip-text text-transparent">
              Tentang
            </span>
            <br />
            <span className="bg-gradient-to-r from-chalk-line via-chalk-line to-chalk-line bg-clip-text text-transparent font-extrabold">
              Cissy Coffee
            </span>
          </motion.h2>

          {/* Enhanced Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isVisible ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-chalk-line"></div>
            <div className="h-1 w-8 bg-gradient-to-r from-chalk-line to-chalk-line rounded-full"></div>
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-chalk-line"></div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="space-y-4"
          >
            <p className="text-lg md:text-xl text-roast leading-relaxed font-light">
              Cissy Cafe adalah tempat di mana kopi berkualitas, suasana hangat, dan momen berharga bertemu. Setiap cangkir yang kami sajikan dipilih dari biji kopi terbaik dan diracik dengan keahlian tinggi.
            </p>
            <p className="text-base leading-relaxed text-roast md:text-lg">
              Nikmati pengalaman kopi yang tak terlupakan dalam lingkungan yang cozy, modern, dan penuh dengan cerita-cerita indah dari setiap pelanggan kami.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="grid grid-cols-3 gap-6 py-6"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-chalk-line">5+</div>
              <div className="text-sm text-bean">Years Experience</div>
            </div>
            <div className="text-center border-x border-chalk-line/30">
              <div className="text-2xl md:text-3xl font-bold text-chalk-line">1000+</div>
              <div className="text-sm text-bean">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-chalk-line">50+</div>
              <div className="text-sm text-bean">Coffee Varieties</div>
            </div>
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="pt-4"
          >
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-chalk-line to-chalk-line hover:from-chalk-line hover:to-chalk-line text-roast font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Lebih Lanjut</span>
              <div className="w-5 h-5 bg-crema/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 to-transparent"></div>
    </section>
  );
}